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
  assert.deepEqual(scene.puzzle, { prompt: 'Where was the letter prepared?', options: [{ id: 'station', label: 'The railway station' }, { id: 'greenhouse', label: 'The greenhouse' }] });
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

test('the ready-to-play catalog contains ten distinct mysteries', () => {
  assert.equal(stories.length, 10);
  assert.equal(new Set(stories.map(story => story.id)).size, 10);
  assert.equal(new Set(stories.map(story => story.title)).size, 10);
});

for (const story of stories) {
  test(`catalog: ${story.title} is solvable, progressively revealed, and has no unreachable scenes`, () => {
    const validation = validateStory(story);
    assert.ok(validation.ok, validation.errors.join('; '));
    const initial = createPlayState(story);
    const opening = getVisibleScene(story, initial);
    assert.deepEqual(opening.characters.map(character => character.id), story.nodes[story.start].meets || []);
    assert.deepEqual(opening.clues.map(clue => clue.id), story.nodes[story.start].clues || []);
    assert.equal(opening.ending, null);
    const queue = [initial], signatures = new Set(), reached = new Set();
    let solved = false, deductionCount = 0;
    while (queue.length) {
      const state = queue.shift();
      const signature = [state.nodeId, [...state.met].sort().join(','), [...state.clues].sort().join(','), state.solved].join('|');
      if (signatures.has(signature)) continue;
      signatures.add(signature);
      assert.ok(signatures.size < 20_000, 'The authored state graph should remain small enough to audit.');
      assert.ok(validateState(story, JSON.parse(JSON.stringify(state))), 'Every reachable state survives save/restore.');
      const scene = getVisibleScene(story, state);
      reached.add(scene.id);
      for (const character of scene.characters) assert.ok(state.met.includes(character.id), 'Only encountered characters appear.');
      for (const clue of scene.clues) assert.ok(state.clues.includes(clue.id), 'Only discovered evidence appears.');
      for (const choice of scene.choices) {
        assert.equal('to' in choice, false, 'Choice projections do not leak future scene IDs.');
        if (!choice.locked) queue.push(choose(story, state, choice.id));
      }
      if (scene.puzzle) {
        deductionCount++;
        assert.equal('correctTo' in scene.puzzle, false);
        let correctCount = 0;
        for (const option of scene.puzzle.options) {
          assert.equal('correct' in option, false);
          assert.equal('feedback' in option, false);
          const result = answer(story, state, option.id);
          if (result.correct) { correctCount++; queue.push(result.state); }
          else {
            assert.equal(result.state.nodeId, state.nodeId);
            assert.deepEqual(result.state.clues, state.clues);
            assert.deepEqual(result.state.met, state.met);
          }
        }
        assert.equal(correctCount, 1, 'Exactly one deduction answer advances the story.');
      }
      if (scene.ending?.kind === 'solved') solved = true;
    }
    assert.ok(solved, 'A solved ending must be reachable through legal player choices.');
    assert.ok(deductionCount > 0, 'Every ready mystery includes a deduction.');
    assert.equal(reached.size, Object.keys(story.nodes).length, 'Every scene is reachable with its actual clue gates.');
  });
}
