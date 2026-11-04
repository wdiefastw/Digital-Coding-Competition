import test from 'node:test';
import assert from 'node:assert/strict';
import { validateStory, createPlayState, choose, answer, validateState, getVisibleScene, getJournal, getProgress } from '../src/play-engine.js';
import { stories } from '../src/stories.js';

function fixture() {
  return {
    id: 'the-letter', title: 'The Letter', genre: 'Cozy mystery', difficulty: 'Gentle', duration: '10 minutes', description: 'An unsigned letter waits on your doorstep.', setting: 'A seaside village',
    characters: [
      { id: 'jo', name: 'Jo', role: 'Postmaster', description: 'A precise observer.', color: '#aabbcc' },
      { id: 'ivy', name: 'Ivy', role: 'Gardener', description: 'She remembers the weather.', color: '#bbaa99' },
    ],
    clues: [
      { id: 'stamp', title: 'The stamp', description: 'It was printed yesterday.' },
      { id: 'violets', title: 'Violet petals', description: 'They grow behind the greenhouse.' },
      { id: 'solution', title: 'An old promise', description: 'The answer to the letter.' },
    ],
    start: 'door',
    nodes: {
      door: { title: 'At the door', location: 'Home', body: ['A letter waits.'], choices: [{ id: 'post', label: 'Visit the post office', to: 'post' }, { id: 'garden', label: 'Walk through the gardens', to: 'garden' }, { id: 'solve', label: 'Think it through', to: 'deduction', requires: ['stamp', 'violets'], requiresMet: ['ivy'] }] },
      post: { title: 'A careful glance', location: 'Post office', body: ['Jo examines the stamp.'], meets: ['jo'], clues: ['stamp'], choices: [{ id: 'back', label: 'Return home', to: 'door' }] },
      garden: { title: 'A familiar scent', location: 'Garden', body: ['Ivy points to a bed of violets.'], meets: ['ivy'], clues: ['violets'], choices: [{ id: 'back', label: 'Return home', to: 'door' }] },
      deduction: { title: 'Joining the dots', location: 'Home', body: ['Both observations now fit.'], puzzle: { prompt: 'Where was the letter prepared?', options: [{ id: 'station', label: 'The railway station', correct: false, feedback: 'There is no trace of the station on the paper. Think about the petals.' }, { id: 'greenhouse', label: 'The greenhouse', correct: true, feedback: 'The petals and date agree.' }], correctTo: 'ending' } },
      ending: { title: 'An old promise', location: 'Greenhouse', body: ['The letter has found its reader.'], clues: ['solution'], ending: { title: 'A promise kept', body: ['A friendship can begin again.'], kind: 'solved' } },
    },
  };
}
const gather = (story, state) => choose(story, choose(story, choose(story, choose(story, state, 'post'), 'back'), 'garden'), 'back');

test('a valid story opens at its start without revealing later characters or evidence', () => {
  const story = fixture();
  assert.deepEqual(validateStory(story), { ok: true, errors: [] });
  const state = createPlayState(story);
  assert.equal(state.nodeId, 'door');
  assert.deepEqual(state.visited, ['door']);
  assert.deepEqual(getJournal(story, state), { characters: [], clues: [] });
  const scene = getVisibleScene(story, state);
  assert.deepEqual(scene.characters, []);
  assert.deepEqual(scene.clues, []);
  assert.equal(scene.puzzle, null);
  assert.equal(scene.ending, null);
  assert.equal(scene.choices.find(choice => choice.id === 'solve').locked, true);
  assert.ok(!JSON.stringify(scene).includes('violets'));
  assert.ok(!JSON.stringify(scene).includes('promise'));
});

test('choices cannot bypass missing evidence and character meetings', () => {
  const story = fixture(), state = createPlayState(story);
  assert.throws(() => choose(story, state, 'solve'), /investigating/);
  assert.throws(() => choose(story, state, 'inexistent'), /not available/);
  const visited = choose(story, state, 'post');
  assert.deepEqual(visited.met, ['jo']);
  assert.deepEqual(visited.clues, ['stamp']);
  assert.deepEqual(state.met, []);
  assert.deepEqual(state.history, []);
  assert.throws(() => choose(story, choose(story, visited, 'back'), 'solve'), /investigating/);
});

test('evidence can be collected in either route order without duplicates', () => {
  const story = fixture();
  let state = gather(story, createPlayState(story));
  assert.equal(getVisibleScene(story, state).choices.find(choice => choice.id === 'solve').locked, false);
  state = choose(story, choose(story, state, 'garden'), 'back');
  assert.deepEqual(state.clues, ['stamp', 'violets']);
  assert.deepEqual(state.met, ['jo', 'ivy']);
  const second = choose(story, choose(story, choose(story, choose(story, createPlayState(story), 'garden'), 'back'), 'post'), 'back');
  assert.deepEqual(new Set(second.clues), new Set(state.clues));
});

test('visible deductions omit correctness flags, feedback, destinations, and future solution', () => {
  const story = fixture(), state = choose(story, gather(story, createPlayState(story)), 'solve');
  const scene = getVisibleScene(story, state);
  assert.equal(scene.puzzle.mode, 'single');
  assert.equal(scene.puzzle.prompt, 'Where was the letter prepared?');
  assert.deepEqual(new Map(scene.puzzle.options.map(option => [option.id, option.label])), new Map([['station', 'The railway station'], ['greenhouse', 'The greenhouse']]));
  const output = JSON.stringify(scene);
  for (const secret of ['correctTo', 'correct', 'The petals and date agree.', 'An old promise', 'solution']) assert.ok(!output.includes(secret), secret);
});

test('a wrong deduction gives only its own feedback and does not unlock anything', () => {
  const story = fixture(), state = choose(story, gather(story, createPlayState(story)), 'solve');
  const result = answer(story, state, 'station');
  assert.equal(result.correct, false);
  assert.match(result.feedback, /petals/);
  assert.equal(result.state.nodeId, state.nodeId);
  assert.deepEqual(result.state.clues, state.clues);
  assert.deepEqual(result.state.met, state.met);
  assert.equal(result.state.attempts, 1);
  assert.equal(state.attempts, 0);
  assert.ok(validateState(story, result.state));
  assert.throws(() => answer(story, state, 'missing'), /not available/);
});

test('a correct deduction reveals the ending only after answering and survives JSON restore', () => {
  const story = fixture();
  let state = choose(story, gather(story, createPlayState(story)), 'solve');
  state = answer(story, state, 'station').state;
  const result = answer(story, state, 'greenhouse');
  assert.equal(result.correct, true);
  assert.equal(result.state.solved, true);
  assert.equal(result.state.attempts, 2);
  assert.equal(getVisibleScene(story, result.state).ending.title, 'A promise kept');
  assert.ok(result.state.clues.includes('solution'));
  assert.ok(validateState(story, JSON.parse(JSON.stringify(result.state))));
  assert.deepEqual(getProgress(story, result.state), { visited: 5, total: 5, solved: true });
  assert.throws(() => choose(story, result.state, 'back'), /ended/);
});

test('save validation rejects injected future clues, scenes, meetings, attempts, and forged history', () => {
  const story = fixture(), initial = createPlayState(story);
  for (const mutate of [
    state => state.clues.push('solution'),
    state => state.met.push('ivy'),
    state => { state.nodeId = 'ending'; },
    state => { state.attempts = 5; },
    state => { state.solved = true; },
    state => state.visited.push('deduction'),
    state => state.history.push({ type: 'choice', nodeId: 'door', choiceId: 'solve' }),
  ]) {
    const forged = structuredClone(initial); mutate(forged);
    assert.equal(validateState(story, forged), false);
  }
  assert.equal(validateState(story, null), false);
  assert.equal(validateState(story, { ...initial, history: Array(3001).fill({}) }), false);
});

test('journal and scene projections do not expose mutable story or save references', () => {
  const story = fixture(), state = choose(story, createPlayState(story), 'post');
  const journal = getJournal(story, state), scene = getVisibleScene(story, state);
  journal.characters[0].name = 'Changed'; journal.clues[0].title = 'Changed'; scene.body[0] = 'Changed'; scene.characters.push({ id: 'injected' });
  assert.equal(story.characters[0].name, 'Jo');
  assert.equal(story.clues[0].title, 'The stamp');
  assert.equal(story.nodes.post.body[0], 'Jo examines the stamp.');
  assert.deepEqual(state.met, ['jo']);
});

test('story validation rejects broken references, ambiguous answers, duplicate IDs and dead ends', () => {
  for (const mutate of [
    story => { story.nodes.door.choices[0].to = 'missing'; },
    story => { story.nodes.post.meets = ['stranger']; },
    story => { story.nodes.post.clues = ['secret']; },
    story => { story.nodes.deduction.puzzle.options[0].correct = true; },
    story => { story.characters.push({ ...story.characters[0] }); },
    story => { story.nodes.door.choices.push({ ...story.nodes.door.choices[0] }); },
    story => { story.nodes.post.choices = []; },
    story => { story.nodes.hidden = structuredClone(story.nodes.ending); },
  ]) {
    const story = fixture(); mutate(story); assert.equal(validateStory(story).ok, false);
  }
  assert.equal(validateStory(null).ok, false);
  const hostile = JSON.parse('{"__proto__":{"polluted":true}}');
  assert.equal(validateStory(hostile).ok, false);
  assert.equal({}.polluted, undefined);
});

test('the ready-to-play catalog contains forty distinct mysteries', () => {
  assert.equal(stories.length, 40);
  assert.equal(new Set(stories.map(story => story.id)).size, 40);
  assert.equal(new Set(stories.map(story => story.title)).size, 40);
});

function assertProjection(story, state) {
  assert.ok(validateState(story, JSON.parse(JSON.stringify(state))), 'A legal state survives saving and restoration.');
  const scene = getVisibleScene(story, state);
  assert.deepEqual(scene.characters.map(item => item.id), state.met);
  assert.deepEqual(scene.clues.map(item => item.id), state.clues);
  for (const choice of scene.choices) {
    for (const secret of ['to', 'requires', 'requiresAny', 'requiresAnyGroups', 'requiresFlags', 'excludesFlags']) assert.equal(secret in choice, false);
  }
  if (scene.puzzle) {
    for (const secret of ['correctTo', 'wrongFeedback', 'correctFeedback']) assert.equal(secret in scene.puzzle, false);
    for (const option of scene.puzzle.options) {
      assert.equal('correct' in option, false);
      assert.equal('feedback' in option, false);
    }
  }
  return scene;
}

function verifyWrongDeduction(story, state) {
  const puzzle = story.nodes[state.nodeId].puzzle;
  const unsupported = puzzle.options.find(option => !option.correct);
  let wrong = unsupported.id;
  if (puzzle.mode === 'multiple') {
    wrong = puzzle.options.filter(option => option.correct).map(option => option.id);
    wrong[0] = unsupported.id;
  }
  const result = answer(story, state, wrong);
  assert.equal(result.correct, false);
  for (const key of ['nodeId', 'visited', 'clues', 'met', 'flags', 'solved']) assert.deepEqual(result.state[key], state[key], `A wrong theory cannot change ${key}.`);
  assert.equal(result.state.attempts, state.attempts + 1);
  assert.ok(validateState(story, result.state));
}

for (const story of stories) {
  test(`catalog: ${story.title} supports legal, spoiler-free complete investigations`, () => {
    const validation = validateStory(story);
    assert.ok(validation.ok, validation.errors.join('; '));
    const initial = createPlayState(story);
    const opening = assertProjection(story, initial);
    assert.deepEqual(opening.characters.map(character => character.id), story.nodes[story.start].meets || []);
    assert.deepEqual(opening.clues.map(clue => clue.id), story.nodes[story.start].clues || []);
    assert.equal(opening.ending, null);
    if ((story.revision || 1) >= 2) {
      assert.ok(Array.isArray(story.solutionPaths) && story.solutionPaths.length >= 2, 'Expanded cases need at least two audited routes.');
      const endings = new Set(), puzzleScenes = new Set();
      for (const path of story.solutionPaths) {
        let state = createPlayState(story);
        assert.ok(path.id && Array.isArray(path.actions));
        for (const action of path.actions) {
          const scene = assertProjection(story, state);
          if (action.type === 'choice') {
            const available = scene.choices.find(choice => choice.id === action.id);
            assert.ok(available && !available.locked, `Route ${path.id}: ${state.nodeId} / ${action.id} must be available.`);
            state = choose(story, state, action.id);
          } else {
            assert.equal(action.type, 'answer');
            assert.ok(scene.puzzle, `Route ${path.id}: deduction required at ${state.nodeId}.`);
            verifyWrongDeduction(story, state);
            puzzleScenes.add(state.nodeId);
            const result = answer(story, state, action.id);
            assert.equal(result.correct, true, `Route ${path.id}: supported theory required at ${state.nodeId}.`);
            state = result.state;
          }
        }
        const ending = assertProjection(story, state).ending;
        assert.equal(ending?.kind, 'solved', `Route ${path.id} must conclude in an earned solved ending.`);
        assert.ok(state.solved);
        endings.add(state.nodeId);
      }
      assert.ok(endings.size >= 2, 'Different investigation routes must lead to distinct conclusions.');
      assert.ok(puzzleScenes.size >= 3, 'Expanded cases need multiple genuine deductions.');
      return;
    }
    // Legacy small cases can be audited exhaustively; large revision-two cases use authored route proofs above.
    const queue = [initial], signatures = new Set(), reached = new Set();
    let solved = false, deductionCount = 0;
    while (queue.length) {
      const state = queue.shift();
      const signature = [state.nodeId, [...state.met].sort().join(','), [...state.clues].sort().join(','), state.solved].join('|');
      if (signatures.has(signature)) continue;
      signatures.add(signature);
      assert.ok(signatures.size < 20_000, 'The legacy authored state graph remains bounded.');
      const scene = assertProjection(story, state);
      reached.add(scene.id);
      for (const choice of scene.choices) if (!choice.locked) queue.push(choose(story, state, choice.id));
      if (scene.puzzle) {
        deductionCount++;
        verifyWrongDeduction(story, state);
        const supported = story.nodes[state.nodeId].puzzle.options.find(option => option.correct);
        queue.push(answer(story, state, supported.id).state);
      }
      if (scene.ending?.kind === 'solved') solved = true;
    }
    assert.ok(solved);
    assert.ok(deductionCount > 0);
    assert.equal(reached.size, Object.keys(story.nodes).length);
  });
}

function branchingFixture() {
  const story = fixture();
  story.revision = 2;
  story.flags = ['archive-route', 'garden-route', 'comparison-done'];
  story.clues.push({ id: 'weather', title: 'A weather note', description: 'Rain began after the letter arrived.' });
  story.nodes.door.choices = [
    { id: 'post', label: 'Work with the postmaster', to: 'post', excludesFlags: ['garden-route'] },
    { id: 'garden', label: 'Work with the gardener', to: 'garden', excludesFlags: ['archive-route'] },
    { id: 'compare', label: 'Compare the papers', to: 'comparison', requiresAny: ['stamp', 'violets'], requiresAnyGroups: [['stamp', 'violets'], ['weather']] },
    { id: 'archive-solve', label: 'Conclude at the archive', to: 'deduction', requiresFlags: ['archive-route', 'comparison-done'] },
    { id: 'garden-solve', label: 'Conclude in the garden', to: 'garden-deduction', requiresFlags: ['garden-route', 'comparison-done'] },
  ];
  story.nodes.post.setFlags = ['archive-route'];
  story.nodes.post.clues.push('weather');
  story.nodes.post.routeLabel = 'Following the paper trail';
  story.nodes.garden.setFlags = ['garden-route'];
  story.nodes.garden.clues.push('weather');
  story.nodes.comparison = {
    title: 'The evidence table', location: 'A quiet room', body: ['Only two observations establish where the letter was prepared.'],
    puzzle: { mode: 'multiple', prompt: 'Which observations support your explanation?', options: [
      { id: 'dated', label: 'A newly dated stamp', correct: true, feedback: 'The dating is established.' },
      { id: 'petals', label: 'Violets found on the letter', correct: true, feedback: 'The physical trace is established.' },
      { id: 'rumor', label: 'A rumor about a traveler', correct: false, feedback: 'The rumor is unconfirmed.' },
      { id: 'ink', label: 'An assumed ink color', correct: false, feedback: 'No ink comparison was made.' },
    ], wrongFeedback: 'Separate observed evidence from assumptions.', correctTo: 'comparison-result' },
    choices: [{ id: 'back', label: 'Review your notes', to: 'door' }],
  };
  story.nodes['comparison-result'] = { title: 'A supported connection', location: 'A quiet room', body: ['The connection holds.'], setFlags: ['comparison-done'], choices: [{ id: 'back', label: 'Return to the crossroads', to: 'door' }] };
  story.nodes['garden-deduction'] = structuredClone(story.nodes.deduction);
  story.nodes['garden-deduction'].puzzle.correctTo = 'garden-ending';
  story.nodes['garden-ending'] = structuredClone(story.nodes.ending);
  story.nodes['garden-ending'].ending.title = 'A conversation beneath the trees';
  return story;
}

test('permanent route choices lock the alternative while alternative evidence gates remain fair', () => {
  const story = branchingFixture();
  assert.deepEqual(validateStory(story), { ok:true, errors:[] });
  const initial = createPlayState(story);
  assert.equal(initial.storyRevision, 2);
  assert.deepEqual(initial.flags, []);
  assert.throws(() => choose(story, initial, 'compare'), /investigating/);
  let state = choose(story, initial, 'post');
  assert.equal(getVisibleScene(story, state).routeLabel, 'Following the paper trail');
  state = choose(story, state, 'back');
  assert.deepEqual(state.flags, ['archive-route']);
  const scene = getVisibleScene(story, state);
  assert.equal(scene.choices.find(choice => choice.id === 'garden').locked, true);
  assert.match(scene.choices.find(choice => choice.id === 'garden').lockReason, /earlier choice/);
  assert.throws(() => choose(story, state, 'garden'), /investigating/);
  assert.equal(scene.choices.find(choice => choice.id === 'compare').locked, false);
  state = choose(story, state, 'compare');
  const projection = getVisibleScene(story, state).puzzle;
  assert.equal(projection.mode, 'multiple');
  for (const secret of ['wrongFeedback', 'correctFeedback', 'correctTo', 'minSelections', 'maxSelections']) assert.equal(secret in projection, false);
  assert.throws(() => answer(story, state, ['dated', 'dated']), /distinct/);
  assert.throws(() => answer(story, state, 'dated'), /distinct/);
  assert.throws(() => answer(story, state, ['dated']), /at least/);
  const wrong = answer(story, state, ['dated', 'rumor']);
  assert.equal(wrong.correct, false);
  assert.equal(wrong.feedback, 'Separate observed evidence from assumptions.');
  assert.deepEqual(wrong.state.flags, state.flags);
  const correct = answer(story, wrong.state, ['petals', 'dated']);
  assert.equal(correct.correct, true);
  assert.deepEqual(correct.state.flags, ['archive-route', 'comparison-done']);
  assert.ok(validateState(story, correct.state));
  state = choose(story, correct.state, 'back');
  assert.equal(getVisibleScene(story, state).choices.find(choice => choice.id === 'archive-solve').locked, false);
  assert.equal(getVisibleScene(story, state).choices.find(choice => choice.id === 'garden-solve').locked, true);
  const gardenState = choose(story, choose(story, createPlayState(story), 'garden'), 'back');
  assert.equal(getVisibleScene(story, gardenState).choices.find(choice => choice.id === 'post').locked, true);
});

test('legacy revision-one bookmarks migrate without losing evidence and revision-two bookmarks cannot be forged', () => {
  const legacy = fixture();
  const save = gather(legacy, createPlayState(legacy));
  delete save.storyRevision;
  delete save.flags;
  assert.ok(validateState(legacy, save));
  const migrated = choose(legacy, save, 'solve');
  assert.equal(migrated.storyRevision, 1);
  assert.deepEqual(migrated.flags, []);
  assert.deepEqual(migrated.clues, save.clues);
  const expanded = branchingFixture();
  assert.equal(validateState(expanded, save), false);
  const initial = createPlayState(expanded);
  assert.equal(validateState(expanded, { ...initial, flags:['archive-route'] }), false);
  assert.equal(validateState(expanded, { ...initial, storyRevision:1 }), false);
  const missing = structuredClone(initial); delete missing.flags;
  assert.equal(validateState(expanded, missing), false);
});

test('route and evidence schema rejects impossible references and ambiguous multi-selections', () => {
  for (const mutate of [
    story => { story.flags.push('archive-route'); },
    story => { story.nodes.post.setFlags = ['not-defined']; },
    story => { story.nodes.door.choices[0].requiresFlags = ['not-defined']; },
    story => { story.nodes.door.choices[0].excludesFlags = ['not-defined']; },
    story => { story.nodes.door.choices[0].requiresAny = null; },
    story => { story.nodes.door.choices[0].requiresAny = []; },
    story => { story.nodes.door.choices[0].requiresAnyGroups = [null]; },
    story => { story.nodes.door.choices[0].requiresAnyGroups = [[]]; },
    story => { story.nodes.comparison.puzzle.mode = 'unknown'; },
    story => { story.nodes.comparison.puzzle.options[1].correct = false; },
    story => { story.nodes.comparison.puzzle.minSelections = 3; },
    story => { story.nodes.comparison.puzzle.maxSelections = 1; },
    story => { delete story.nodes.comparison.puzzle.wrongFeedback; },
    story => { story.nodes.post.routeLabel = ''; },
  ]) {
    const story = branchingFixture(); mutate(story);
    assert.equal(validateStory(story).ok, false);
  }
});


test('deduction presentation is stable across reloads, leaves source order intact, and preserves answer identities', () => {
  const story = branchingFixture();
  let state = choose(story, choose(story, choose(story, createPlayState(story), 'post'), 'back'), 'compare');
  const before = structuredClone(story.nodes[state.nodeId].puzzle.options);
  const first = getVisibleScene(story, state).puzzle.options;
  const restored = getVisibleScene(structuredClone(story), JSON.parse(JSON.stringify(state))).puzzle.options;
  assert.deepEqual(first, restored);
  assert.deepEqual(story.nodes[state.nodeId].puzzle.options, before);
  assert.deepEqual(new Set(first.map(option => option.id)), new Set(before.map(option => option.id)));
  assert.ok(first.every(option => !('correct' in option) && !('feedback' in option)));
  const supported = before.filter(option => option.correct).map(option => option.id);
  assert.equal(answer(story, state, supported).correct, true);
});
