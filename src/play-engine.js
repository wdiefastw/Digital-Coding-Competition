/** Progressive mystery reader. Only the projection returned by getVisibleScene belongs in the UI. */
const MAX_HISTORY = 3000;
const ID = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,99}$/;
const unsafeKeys = new Set(['__proto__', 'prototype', 'constructor']);
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const copy = value => JSON.parse(JSON.stringify(value));
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const validId = value => typeof value === 'string' && ID.test(value);
const strings = (value, max = 200) => Array.isArray(value) && value.length <= max && value.every(item => typeof item === 'string');
function hasUnsafeKeys(value, depth = 0) {
  if (depth > 20) return true;
  if (!value || typeof value !== 'object') return false;
  return Object.keys(value).some(key => unsafeKeys.has(key) || hasUnsafeKeys(value[key], depth + 1));
}

export function validateStory(story) {
  const errors = [];
  const fail = message => { if (errors.length < 40) errors.push(message); };
  if (!record(story) || hasUnsafeKeys(story)) return { ok: false, errors: ['This mystery is not a valid story object.'] };
  if (!validId(story.id)) fail('The mystery needs a valid ID.');
  for (const key of ['title', 'genre', 'difficulty', 'duration', 'description', 'setting']) {
    if (typeof story[key] !== 'string' || !story[key].trim() || story[key].length > 6000) fail(`The mystery needs a valid ${key}.`);
  }
  const characters = new Map();
  const clues = new Map();
  for (const [key, map] of [['characters', characters], ['clues', clues]]) {
    if (!Array.isArray(story[key]) || story[key].length > 150) { fail(`The mystery needs a valid ${key} list.`); continue; }
    for (const item of story[key]) {
      if (!record(item) || !validId(item.id)) { fail(`A ${key} entry has an invalid ID.`); continue; }
      if (map.has(item.id)) fail(`The ${key} list contains a duplicate ID.`);
      map.set(item.id, item);
      const fields = key === 'characters' ? ['name', 'role', 'description'] : ['title', 'description'];
      for (const field of fields) if (typeof item[field] !== 'string' || !item[field].trim() || item[field].length > 6000) fail(`A ${key} entry needs ${field}.`);
      if (key === 'characters' && (typeof item.color !== 'string' || !/^#[a-f\d]{6}$/i.test(item.color))) fail('Character colors must use six-digit hex codes.');
    }
  }
  if (!record(story.nodes) || Object.keys(story.nodes).length === 0 || Object.keys(story.nodes).length > 300) return { ok: false, errors: [...errors, 'The mystery needs between 1 and 300 scenes.'] };
  if (!validId(story.start) || !own(story.nodes, story.start)) fail('The opening scene is missing.');
  const references = (values, map, label) => {
    if (values === undefined) return;
    if (!strings(values) || values.some(id => !map.has(id)) || new Set(values).size !== values.length) fail(`${label} contains an unknown or repeated entry.`);
  };
  for (const [id, node] of Object.entries(story.nodes)) {
    if (!validId(id) || !record(node)) { fail('A scene is invalid.'); continue; }
    if (typeof node.title !== 'string' || !node.title.trim() || node.title.length > 300) fail('A scene needs a title.');
    if (typeof node.location !== 'string' || !node.location.trim() || node.location.length > 300) fail('A scene needs a location.');
    if (!strings(node.body, 30) || node.body.length === 0 || node.body.some(text => text.length > 15000)) fail('A scene needs readable paragraphs.');
    references(node.meets, characters, 'Scene characters');
    references(node.clues, clues, 'Scene clues');
    if (node.choices !== undefined) {
      if (!Array.isArray(node.choices) || node.choices.length > 20) { fail('A scene has an invalid choice list.'); }
      else {
        const ids = new Set();
        for (const choice of node.choices) {
          if (!record(choice) || !validId(choice.id)) { fail('A choice needs a valid ID.'); continue; }
          if (ids.has(choice.id)) fail('A scene has duplicate choice IDs.');
          ids.add(choice.id);
          if (typeof choice.label !== 'string' || !choice.label.trim() || choice.label.length > 500) fail('A choice needs readable text.');
          if (!validId(choice.to) || !own(story.nodes, choice.to)) fail('A choice points to an unknown scene.');
          references(choice.requires, clues, 'Required clues');
          references(choice.requiresMet, characters, 'Required characters');
        }
      }
    }
    if (node.puzzle !== undefined) {
      const puzzle = node.puzzle;
      if (!record(puzzle)) { fail('A deduction is invalid.'); continue; }
      if (typeof puzzle.prompt !== 'string' || !puzzle.prompt.trim() || puzzle.prompt.length > 3000) fail('A deduction needs a question.');
      if (!validId(puzzle.correctTo) || !own(story.nodes, puzzle.correctTo)) fail('A deduction points to an unknown scene.');
      if (!Array.isArray(puzzle.options) || puzzle.options.length < 2 || puzzle.options.length > 12) { fail('A deduction needs between 2 and 12 answers.'); continue; }
      let correct = 0;
      const ids = new Set();
      for (const option of puzzle.options) {
        if (!record(option) || !validId(option.id)) { fail('A deduction answer is invalid.'); continue; }
        if (ids.has(option.id)) fail('A deduction has duplicate answer IDs.');
        ids.add(option.id);
        if (typeof option.label !== 'string' || !option.label.trim() || typeof option.feedback !== 'string' || !option.feedback.trim() || option.label.length > 1000 || option.feedback.length > 4000 || typeof option.correct !== 'boolean') fail('A deduction answer needs text and feedback.');
        if (option.correct === true) correct++;
      }
      if (correct !== 1) fail('A deduction must have exactly one correct answer.');
    }
    if (node.ending !== undefined) {
      const ending = node.ending;
      if (!record(ending) || typeof ending.title !== 'string' || !ending.title.trim() || !strings(ending.body, 20) || ending.body.length === 0 || !['solved', 'open'].includes(ending.kind)) fail('An ending is invalid.');
      if (node.puzzle || node.choices?.length) fail('An ending cannot also offer a next scene.');
    }
    if (!node.ending && !node.puzzle && !node.choices?.length) fail('A scene has no way to continue.');
  }
  if (errors.length === 0) {
    const visited = new Set();
    const visit = id => {
      if (visited.has(id)) return;
      visited.add(id);
      const node = story.nodes[id];
      for (const choice of node.choices || []) visit(choice.to);
      if (node.puzzle) visit(node.puzzle.correctTo);
    };
    visit(story.start);
    if (visited.size !== Object.keys(story.nodes).length) fail('The mystery contains unreachable scenes.');
    if (![...visited].some(id => story.nodes[id].ending?.kind === 'solved')) fail('The mystery needs a reachable solved ending.');
  }
  return { ok: errors.length === 0, errors };
}

function assertStory(story) {
  const result = validateStory(story);
  if (!result.ok) throw new Error(result.errors[0]);
}
function enter(story, state, nodeId) {
  const next = copy(state);
  const node = story.nodes[nodeId];
  next.nodeId = nodeId;
  if (!next.visited.includes(nodeId)) next.visited.push(nodeId);
  for (const id of node.meets || []) if (!next.met.includes(id)) next.met.push(id);
  for (const id of node.clues || []) if (!next.clues.includes(id)) next.clues.push(id);
  next.solved = node.ending?.kind === 'solved';
  return next;
}
function initial(story) {
  return enter(story, { storyId: story.id, nodeId: story.start, visited: [], met: [], clues: [], history: [], attempts: 0, solved: false }, story.start);
}
export function createPlayState(story) {
  assertStory(story);
  return initial(story);
}
function locked(choice, state) {
  return (choice.requires || []).some(id => !state.clues.includes(id)) || (choice.requiresMet || []).some(id => !state.met.includes(id));
}
function transitionChoice(story, state, choiceId) {
  const node = story.nodes[state.nodeId];
  if (node.ending) throw new Error('This mystery has ended. Start again to explore another route.');
  const choice = (node.choices || []).find(item => item.id === choiceId);
  if (!choice) throw new Error('That choice is not available in this scene.');
  if (locked(choice, state)) throw new Error('Keep investigating before taking this step.');
  const next = enter(story, state, choice.to);
  next.history.push({ type: 'choice', nodeId: state.nodeId, choiceId });
  return next;
}
function transitionAnswer(story, state, optionId) {
  const puzzle = story.nodes[state.nodeId].puzzle;
  if (!puzzle) throw new Error('There is no deduction to make in this scene.');
  const option = puzzle.options.find(item => item.id === optionId);
  if (!option) throw new Error('That answer is not available.');
  let next = copy(state);
  next.attempts++;
  next.history.push({ type: 'answer', nodeId: state.nodeId, optionId });
  if (option.correct) next = enter(story, next, puzzle.correctTo);
  return { state: next, correct: option.correct, feedback: option.feedback };
}

/** Verify a save by replaying actions; a save cannot award itself undiscovered evidence. */
export function validateState(story, state) {
  if (!validateStory(story).ok || !record(state) || hasUnsafeKeys(state) || state.storyId !== story.id || !validId(state.nodeId) || !own(story.nodes, state.nodeId)) return false;
  if (!strings(state.visited, 300) || !strings(state.met, 150) || !strings(state.clues, 150) || !Array.isArray(state.history) || state.history.length > MAX_HISTORY || !Number.isSafeInteger(state.attempts) || state.attempts < 0 || typeof state.solved !== 'boolean') return false;
  try {
    let expected = initial(story);
    for (const action of state.history) {
      if (!record(action) || action.nodeId !== expected.nodeId) return false;
      if (action.type === 'choice') expected = transitionChoice(story, expected, action.choiceId);
      else if (action.type === 'answer') expected = transitionAnswer(story, expected, action.optionId).state;
      else return false;
    }
    return ['storyId', 'nodeId', 'visited', 'met', 'clues', 'attempts', 'solved'].every(key => JSON.stringify(state[key]) === JSON.stringify(expected[key]));
  } catch { return false; }
}
function assertState(story, state) {
  if (!validateState(story, state)) throw new Error('This save could not be restored. Restart the mystery to continue safely.');
  if (state.history.length >= MAX_HISTORY) throw new Error('This playthrough has reached its action limit. Restart the mystery to begin again.');
}
export function choose(story, state, choiceId) {
  assertState(story, state);
  return transitionChoice(story, state, choiceId);
}
export function answer(story, state, optionId) {
  assertState(story, state);
  return transitionAnswer(story, state, optionId);
}
export function getJournal(story, state) {
  if (!validateState(story, state)) throw new Error('This mystery save is not valid.');
  return {
    characters: state.met.map(id => copy(story.characters.find(item => item.id === id))),
    clues: state.clues.map(id => copy(story.clues.find(item => item.id === id))),
  };
}
export function getVisibleScene(story, state) {
  if (!validateState(story, state)) throw new Error('This mystery save is not valid.');
  const node = story.nodes[state.nodeId];
  const journal = getJournal(story, state);
  return {
    id: state.nodeId,
    title: node.title,
    location: node.location,
    body: [...node.body],
    characters: journal.characters,
    newCharacters: journal.characters.filter(character => (node.meets || []).includes(character.id)),
    clues: journal.clues,
    discoveredHere: journal.clues.filter(clue => (node.clues || []).includes(clue.id)),
    choices: (node.choices || []).map(choice => ({ id: choice.id, label: choice.label, locked: locked(choice, state), lockReason: locked(choice, state) ? 'Explore the available leads and gather more evidence first.' : '' })),
    puzzle: node.puzzle ? { prompt: node.puzzle.prompt, options: node.puzzle.options.map(option => ({ id: option.id, label: option.label })) } : null,
    ending: node.ending ? copy(node.ending) : null,
  };
}
export function getProgress(story, state) {
  if (!validateState(story, state)) throw new Error('This mystery save is not valid.');
  return { visited: state.visited.length, total: Object.keys(story.nodes).length, solved: state.solved };
}
