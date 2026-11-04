import test from 'node:test';
import assert from 'node:assert/strict';
import { validateProject, analyzeStory, getBranchEvents, getKnowledgeAt, encodeProject, decodeProject } from '../src/engine.js';
import { createDemoProject, createEmptyProject } from '../src/demo.js';

function fixture() {
  return {
    version: 1, id: 'story1', title: 'The Shadow City 🌒', description: 'A story with choices.',
    characters: [
      { id: 'anna', name: 'Anna', role: 'Detective', color: '#cc66ff' },
      { id: 'leo', name: 'Leo', role: 'Witness', color: '#44aacc' },
    ],
    locations: [{ id: 'station', name: 'Station', description: '' }],
    facts: [
      { id: 'key', title: 'The key is in the library', description: '', initialKnowers: ['leo'] },
      { id: 'code', title: 'Code 0412', description: '', initialKnowers: [] },
    ],
    branches: [
      { id: 'main', name: 'Main storyline', parentId: null, forkEventId: null },
      { id: 'escape', name: 'Escape', parentId: 'main', forkEventId: 'meet' },
      { id: 'nested', name: 'Return', parentId: 'escape', forkEventId: 'meet' },
    ],
    events: [
      { id: 'meet', title: 'Meeting', description: '', branchId: 'main', order: 1, characterIds: ['anna', 'leo'], locationId: 'station', requires: [{ characterId: 'leo', factId: 'key' }], learns: [{ characterId: 'anna', factId: 'key' }] },
      { id: 'decode', title: 'Decryption', description: '', branchId: 'main', order: 2, characterIds: ['anna'], locationId: '', requires: [{ characterId: 'anna', factId: 'key' }], learns: [{ characterId: 'anna', factId: 'code' }] },
      { id: 'safe', title: 'The safe', description: '', branchId: 'main', order: 3, characterIds: ['anna'], locationId: '', requires: [{ characterId: 'anna', factId: 'code' }], learns: [] },
      { id: 'escape-use', title: 'Locked doors', description: '', branchId: 'escape', order: 0, characterIds: ['anna'], locationId: '', requires: [{ characterId: 'anna', factId: 'code' }], learns: [] },
      { id: 'nested-use', title: 'Another path', description: '', branchId: 'nested', order: 0, characterIds: ['anna'], locationId: '', requires: [{ characterId: 'anna', factId: 'key' }], learns: [] },
    ],
  };
}

test('valid project; main-line discoveries satisfy later requirements', () => {
  const project = fixture();
  assert.deepEqual(validateProject(project), { ok: true, errors: [] });
  const result = analyzeStory(project, 'main');
  assert.deepEqual(result.events.map(event => event.id), ['meet', 'decode', 'safe']);
  assert.deepEqual(result.issues, []);
  assert.deepEqual(result.knowledge.anna, ['key', 'code']);
  assert.deepEqual(result.stats, { events: 3, contradictions: 0, discoveries: 2 });
});

test('a child inherits only up through its inclusive fork point, preventing future leakage', () => {
  const result = analyzeStory(fixture(), 'escape');
  assert.deepEqual(result.events.map(event => event.id), ['meet', 'escape-use']);
  assert.equal(result.events[0].inherited, true);
  assert.equal(result.events[1].inherited, false);
  assert.deepEqual(result.knowledge.anna, ['key']);
  assert.equal(result.issues.length, 1);
  assert.equal(result.issues[0].eventId, 'escape-use');
  assert.equal(result.issues[0].characterId, 'anna');
  assert.equal(result.issues[0].factId, 'code');
  assert.equal(result.issues[0].message, 'Anna uses “Code 0412” before learning it.');
});

test('grandchild can fork from an inherited ancestor event', () => {
  const result = analyzeStory(fixture(), 'nested');
  assert.deepEqual(result.events.map(event => event.id), ['meet', 'nested-use']);
  assert.equal(result.issues.length, 0);
});

test('a null fork includes the entire parent path; sibling knowledge never leaks', () => {
  const project = fixture();
  project.branches.push({ id: 'continuation', name: 'Continuation', parentId: 'main', forkEventId: null });
  assert.deepEqual(getBranchEvents(project, 'continuation').map(event => event.id), ['meet', 'decode', 'safe']);
  assert.deepEqual(analyzeStory(project, 'continuation').knowledge.anna, ['key', 'code']);
  assert.deepEqual(analyzeStory(project, 'escape').knowledge.anna, ['key']);
});

test('requirements are checked before same-event learning', () => {
  const project = fixture();
  project.events[0].requires.push({ characterId: 'anna', factId: 'key' });
  const result = analyzeStory(project, 'main');
  assert.equal(result.issues.length, 1);
  assert.equal(result.issues[0].eventId, 'meet');
  assert.deepEqual(result.events[0].knowledgeAfter.anna, ['key']);
  assert.equal(result.events[1].issues.length, 0);
});

test('knowledge snapshots are distinct and do not mutate authored data or future analyses', () => {
  const project = fixture();
  const before = structuredClone(project);
  const result = analyzeStory(project, 'main');
  result.events[0].knowledgeAfter.anna.push('corrupted');
  assert.deepEqual(result.events[1].knowledgeAfter.anna, ['key', 'code']);
  assert.deepEqual(result.knowledge.anna, ['key', 'code']);
  assert.deepEqual(project, before);
  assert.deepEqual(getKnowledgeAt(project, 'main', null).anna, []);
  assert.deepEqual(getKnowledgeAt(project, 'main', 'meet').anna, ['key']);
  assert.deepEqual(getKnowledgeAt(project, 'main', 'decode').anna, ['key', 'code']);
  assert.throws(() => getKnowledgeAt(project, 'escape', 'decode'), /does not belong/);
});

test('initial knowers are character-specific; facts do not spread by co-presence', () => {
  const project = fixture();
  project.events[0].learns = [];
  const result = analyzeStory(project, 'main');
  assert.equal(result.issues.length, 1);
  assert.equal(result.issues[0].eventId, 'decode');
  assert.deepEqual(getKnowledgeAt(project, 'main', null).leo, ['key']);
  assert.deepEqual(getKnowledgeAt(project, 'main', null).anna, []);
});

test('relearning a fact is allowed and does not duplicate knowledge or discovery count', () => {
  const project = fixture();
  project.events[1].learns.push({ characterId: 'anna', factId: 'key' });
  const result = analyzeStory(project, 'main');
  assert.equal(result.stats.discoveries, 2);
  assert.deepEqual(result.knowledge.anna, ['key', 'code']);
});

test('equal event orders use deterministic ID order independent of input ordering', () => {
  const project = fixture();
  project.events[1].order = project.events[2].order;
  project.events.reverse();
  assert.deepEqual(getBranchEvents(project, 'main').map(event => event.id), ['meet', 'decode', 'safe']);
});

test('rejects branch cycles, impossible fork points, dangling references and non-participants', () => {
  const cyclic = fixture();
  cyclic.branches[0].parentId = 'nested';
  assert.match(validateProject(cyclic).errors.join(' '), /circular reference/);
  const wrongFork = fixture();
  wrongFork.branches[1].forkEventId = 'escape-use';
  assert.match(validateProject(wrongFork).errors.join(' '), /parent branch/);
  const missing = fixture();
  missing.events[0].learns[0].factId = 'missing';
  assert.equal(validateProject(missing).ok, false);
  const absent = fixture();
  absent.events[0].characterIds = ['leo'];
  assert.match(validateProject(absent).errors.join(' '), /participant/);
});

test('rejects malformed structural inputs without throwing', () => {
  for (const value of [null, [], 3, 'story', {}, { ...fixture(), branches: [null] }, { ...fixture(), events: [42] }]) {
    assert.equal(validateProject(value).ok, false);
  }
  const duplicate = fixture();
  duplicate.characters.push({ ...duplicate.characters[0] });
  assert.equal(validateProject(duplicate).ok, false);
  const noBranches = fixture();
  noBranches.branches = [];
  assert.equal(validateProject(noBranches).ok, false);
  const infiniteOrder = fixture();
  infiniteOrder.events[0].order = Infinity;
  assert.equal(validateProject(infiniteOrder).ok, false);
});

test('empty content with one root branch is a valid new project', () => {
  const project = fixture();
  project.characters = []; project.locations = []; project.facts = []; project.events = [];
  project.branches = [project.branches[0]];
  assert.equal(validateProject(project).ok, true);
  assert.deepEqual(analyzeStory(project, 'main'), { events: [], issues: [], knowledge: {}, stats: { events: 0, contradictions: 0, discoveries: 0 } });
});

test('unicode shared links round-trip safely without changing content', () => {
  const project = fixture();
  const encoded = encodeProject(project);
  assert.match(encoded, /^[A-Za-z0-9_-]+$/);
  assert.deepEqual(decodeProject(encoded), project);
});

test('rejects corrupt, oversized and hostile shared-link payloads', () => {
  const base64 = text => btoa(text).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
  for (const value of ['', null, '?', 'a', 'A'.repeat(140_000), base64('not json'), base64('{"__proto__":{"polluted":true}}'), base64('{"version":99}'), '_w']) {
    assert.throws(() => decodeProject(value));
  }
  assert.equal({}.polluted, undefined);
  const large = fixture();
  for (let i = 0; i < 30; i++) large.locations.push({ id: `place${i}`, name: 'Place', description: 'x'.repeat(3000) });
  // Bring total JSON beyond the encoded payload limit while retaining valid fields.
  for (let i = 30; i < 40; i++) large.locations.push({ id: `place${i}`, name: 'Place', description: 'x'.repeat(3000) });
  assert.equal(validateProject(large).ok, true);
  assert.throws(() => encodeProject(large), /too large/);
});

test('invalid branches and invalid authored projects raise actionable errors', () => {
  assert.throws(() => analyzeStory(fixture(), 'unknown'), /branch was not found/);
  const project = fixture();
  project.title = '';
  assert.throws(() => encodeProject(project), /Story title/);
});


test('accepts every UI field at its maximum length and rejects an oversized character name', () => {
  const project = fixture();
  project.title = 's'.repeat(160);
  project.description = 'd'.repeat(3000);
  project.characters[0].name = 'c'.repeat(120);
  project.characters[0].role = 'r'.repeat(3000);
  project.events[0].title = 'e'.repeat(160);
  project.events[0].description = 'd'.repeat(3000);
  assert.equal(validateProject(project).ok, true);
  project.characters[0].name += 'x';
  assert.match(validateProject(project).errors.join(' '), /Character name.*120/);
});

test('the actual demo demonstrates one intentional main-line plot hole and a consistent alternate path', () => {
  const project = createDemoProject();
  assert.deepEqual(validateProject(project), { ok: true, errors: [] });
  const main = analyzeStory(project, 'main');
  assert.equal(main.issues.length, 1);
  assert.deepEqual(
    main.issues.map(({ eventId, characterId, factId, type }) => ({ eventId, characterId, factId, type })),
    [{ eventId: 'e3', characterId: 'nora', factId: 'signal', type: 'unknown-fact' }],
  );
  const alternate = analyzeStory(project, 'alternate');
  assert.equal(alternate.issues.length, 0);
  assert.deepEqual(alternate.events.map(event => event.id), ['e1', 'e2', 'a3', 'a4', 'a5']);
  const leo = project.characters.find(character => character.name === 'Leo');
  assert.ok(leo, 'The demo includes Leo, the initial keeper of the route secret.');
  assert.deepEqual(getKnowledgeAt(project, 'main', null)[leo.id], ['route']);
  assert.equal(getKnowledgeAt(project, 'main', 'e2').nora.includes('signal'), false);
  assert.deepEqual(new Set(getKnowledgeAt(project, 'main', 'e4').nora), new Set(['signal', 'brother']));
});

test('project factories return independent editable structures and valid blank stories', () => {
  const demo = createDemoProject();
  const untouchedDemo = createDemoProject();
  demo.characters[0].name = 'Changed name';
  demo.facts[1].initialKnowers.push('nora');
  demo.events[0].learns[0].factId = 'route';
  demo.branches[1].forkEventId = 'e1';
  assert.equal(untouchedDemo.characters[0].name, 'Mira');
  assert.deepEqual(untouchedDemo.facts[1].initialKnowers, ['lev']);
  assert.equal(untouchedDemo.events[0].learns[0].factId, 'signal');
  assert.equal(untouchedDemo.branches[1].forkEventId, 'e2');

  const empty = createEmptyProject();
  const secondEmpty = createEmptyProject();
  assert.deepEqual(validateProject(empty), { ok: true, errors: [] });
  assert.deepEqual(analyzeStory(empty, 'main'), {
    events: [], issues: [], knowledge: {}, stats: { events: 0, contradictions: 0, discoveries: 0 },
  });
  assert.notEqual(empty.id, secondEmpty.id);
  empty.branches[0].name = 'Changed branch';
  empty.characters.push({ ...untouchedDemo.characters[0] });
  assert.equal(secondEmpty.branches[0].name, 'Main storyline');
  assert.deepEqual(secondEmpty.characters, []);
  assert.equal(untouchedDemo.branches[0].name, 'Main storyline');
});
