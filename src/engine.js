/** PLOTLINE's deterministic, branch-aware knowledge analysis. No network or DOM required. */
const MAX_BYTES = 100_000;
const ID = /^[A-Za-z0-9][A-Za-z0-9_-]{0,79}$/;
const UNSAFE_KEYS = new Set(['__proto__', 'prototype', 'constructor']);
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);

function dangerousKeys(value, depth = 0) {
  if (depth > 20) return true;
  if (!value || typeof value !== 'object') return false;
  return Object.keys(value).some(key => UNSAFE_KEYS.has(key) || dangerousKeys(value[key], depth + 1));
}

/** Validate imported and edited projects without mutating them. */
export function validateProject(project) {
  const errors = [];
  const error = message => { if (errors.length < 40) errors.push(message); };
  if (!record(project)) return { ok: false, errors: ['The file must contain a story object.'] };
  if (dangerousKeys(project)) return { ok: false, errors: ['The file contains unsafe keys or too many nested objects.'] };
  if (project.version !== 1) error('Unsupported story version. This app supports version 1.');
  const checkId = (value, label) => { if (typeof value !== 'string' || !ID.test(value)) error(`${label}: invalid identifier.`); };
  const checkText = (value, label, max, required = false) => {
    if (typeof value !== 'string' || value.length > max || (required && !value.trim())) error(`${label}: must be ${required ? 'nonempty ' : ''}text with at most ${max} characters.`);
  };
  checkId(project.id, 'Story');
  checkText(project.title, 'Story title', 160, true);
  checkText(project.description, 'Story description', 5000);
  const limits = { characters: 100, locations: 100, facts: 300, branches: 100, events: 1000 };
  const lists = {};
  const maps = {};
  for (const [key, max] of Object.entries(limits)) {
    if (!Array.isArray(project[key]) || project[key].length > max) {
      error(`${key}: must be a list with at most ${max} items.`);
      lists[key] = [];
    } else lists[key] = project[key];
    maps[key] = new Map();
    for (const item of lists[key]) {
      if (!record(item)) { error(`${key}: each item must be an object.`); continue; }
      checkId(item.id, key);
      if (maps[key].has(item.id)) error(`${key}: duplicate identifier ${String(item.id).slice(0, 80)}.`);
      maps[key].set(item.id, item);
    }
  }
  if (lists.branches.length === 0) error('A story must have at least one branch.');
  const references = (values, target, label, max = 300) => {
    if (!Array.isArray(values) || values.length > max) { error(`${label}: invalid list.`); return []; }
    const seen = new Set();
    for (const id of values) {
      if (typeof id !== 'string' || !maps[target].has(id)) error(`${label}: references an item that does not exist.`);
      if (seen.has(id)) error(`${label}: duplicate reference.`);
      seen.add(id);
    }
    return values;
  };
  for (const item of lists.characters.filter(record)) {
    checkText(item.name, 'Character name', 120, true);
    checkText(item.role, 'Character role', 3000);
    if (typeof item.color !== 'string' || !/^#[0-9a-f]{6}$/i.test(item.color)) error('Character colors must use the #RRGGBB format.');
  }
  for (const item of lists.locations.filter(record)) {
    checkText(item.name, 'Location name', 120, true);
    checkText(item.description, 'Location description', 3000);
  }
  for (const item of lists.facts.filter(record)) {
    checkText(item.title, 'Fact title', 200, true);
    checkText(item.description, 'Fact description', 3000);
    references(item.initialKnowers, 'characters', 'Initial knowledge', 100);
  }
  for (const item of lists.branches.filter(record)) {
    checkText(item.name, 'Branch name', 100, true);
    if (item.parentId !== null && !maps.branches.has(item.parentId)) error('A branch references a parent branch that does not exist.');
    if (item.forkEventId !== null && !maps.events.has(item.forkEventId)) error('A branch point references an event that does not exist.');
    if (item.parentId === null && item.forkEventId !== null) error('A root branch cannot have a branch point.');
  }
  for (const item of lists.events.filter(record)) {
    checkText(item.title, 'Event title', 200, true);
    checkText(item.description, 'Event description', 5000);
    if (!maps.branches.has(item.branchId)) error('An event references a branch that does not exist.');
    if (typeof item.order !== 'number' || !Number.isFinite(item.order) || item.order < 0 || item.order > 1_000_000) error('Event order must be a number between 0 and 1,000,000.');
    const actors = references(item.characterIds, 'characters', 'Event participants', 100);
    if (item.locationId !== '' && !maps.locations.has(item.locationId)) error('An event references a location that does not exist.');
    for (const key of ['learns', 'requires']) {
      if (!Array.isArray(item[key]) || item[key].length > 1000) { error('Invalid event knowledge list.'); continue; }
      const pairs = new Set();
      for (const entry of item[key]) {
        if (!record(entry)) { error('Each knowledge entry must include a character and a fact.'); continue; }
        if (!maps.characters.has(entry.characterId) || !maps.facts.has(entry.factId)) error('An event knowledge entry references a character or fact that does not exist.');
        if (!actors.includes(entry.characterId)) error('A character who uses or learns a fact must be an event participant.');
        const pair = `${entry.characterId}:${entry.factId}`;
        if (pairs.has(pair)) error('Duplicate character and fact pair in an event.');
        pairs.add(pair);
      }
    }
  }
  // Resolve ancestry even when a branch forks from an event inherited from a grandparent.
  if (errors.length === 0) {
    const cache = new Map();
    const visiting = new Set();
    const visit = branchId => {
      if (visiting.has(branchId)) throw new Error('The branches contain a circular reference.');
      if (cache.has(branchId)) return cache.get(branchId);
      visiting.add(branchId);
      const branch = maps.branches.get(branchId);
      let inherited = branch.parentId === null ? [] : visit(branch.parentId);
      if (branch.forkEventId !== null) {
        const index = inherited.findIndex(event => event.id === branch.forkEventId);
        if (index === -1) throw new Error('A branch point must belong to the parent branch’s story path.');
        inherited = inherited.slice(0, index + 1);
      }
      const result = inherited.concat(lists.events.filter(event => event.branchId === branchId).sort(eventSort));
      visiting.delete(branchId);
      cache.set(branchId, result);
      return result;
    };
    try { for (const branch of lists.branches) visit(branch.id); } catch (cause) { error(cause.message); }
  }
  return { ok: errors.length === 0, errors };
}

function assertProject(project) {
  const result = validateProject(project);
  if (!result.ok) throw new Error(result.errors.join('\n'));
}

function eventSort(a, b) {
  return a.order - b.order || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}

function resolveEvents(project, branchId) {
  const branch = project.branches.find(item => item.id === branchId);
  if (!branch) throw new Error('The selected branch was not found.');
  let inherited = branch.parentId === null ? [] : resolveEvents(project, branch.parentId);
  if (branch.forkEventId !== null) inherited = inherited.slice(0, inherited.findIndex(item => item.id === branch.forkEventId) + 1);
  return inherited.concat(project.events.filter(item => item.branchId === branchId).sort(eventSort));
}

/** Selected path, including the inclusive ancestral fork points. Returns new objects. */
export function getBranchEvents(project, branchId) {
  assertProject(project);
  return resolveEvents(project, branchId).map(event => ({ ...event, inherited: event.branchId !== branchId }));
}

function initialKnowledge(project) {
  const knowledge = Object.fromEntries(project.characters.map(character => [character.id, []]));
  for (const fact of project.facts) {
    for (const characterId of fact.initialKnowers) knowledge[characterId].push(fact.id);
  }
  return knowledge;
}

function copyKnowledge(knowledge) {
  return Object.fromEntries(Object.entries(knowledge).map(([id, facts]) => [id, [...facts]]));
}

/** Requirements are evaluated before discoveries made in the same event. */
export function analyzeStory(project, branchId) {
  const path = getBranchEvents(project, branchId);
  const knowledge = initialKnowledge(project);
  const issues = [];
  let discoveries = 0;
  const events = path.map(event => {
    const eventIssues = [];
    for (const requirement of event.requires) {
      if (!knowledge[requirement.characterId].includes(requirement.factId)) {
        const character = project.characters.find(item => item.id === requirement.characterId);
        const fact = project.facts.find(item => item.id === requirement.factId);
        const issue = {
          id: `${event.id}:${character.id}:${fact.id}`,
          eventId: event.id,
          characterId: character.id,
          factId: fact.id,
          type: 'unknown-fact',
          message: `${character.name} uses “${fact.title}” before learning it.`,
        };
        eventIssues.push(issue);
        issues.push(issue);
      }
    }
    for (const discovery of event.learns) {
      if (!knowledge[discovery.characterId].includes(discovery.factId)) {
        knowledge[discovery.characterId].push(discovery.factId);
        discoveries++;
      }
    }
    return { ...event, issues: eventIssues, knowledgeAfter: copyKnowledge(knowledge) };
  });
  return { events, issues, knowledge: copyKnowledge(knowledge), stats: { events: events.length, contradictions: issues.length, discoveries } };
}

/** null means before the first event; otherwise includes discoveries in that event. */
export function getKnowledgeAt(project, branchId, eventId = null) {
  if (eventId === null) {
    getBranchEvents(project, branchId); // validate both the project and branch
    return initialKnowledge(project);
  }
  const event = analyzeStory(project, branchId).events.find(item => item.id === eventId);
  if (!event) throw new Error('This event does not belong to the selected story path.');
  return copyKnowledge(event.knowledgeAfter);
}

/** Portable, unicode-safe base64url. The payload contains the entire story. */
export function encodeProject(project) {
  assertProject(project);
  const bytes = new TextEncoder().encode(JSON.stringify(project));
  if (bytes.length > MAX_BYTES) throw new Error('This story is too large for a share link. Export it as JSON instead.');
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}

export function decodeProject(encoded) {
  if (typeof encoded !== 'string' || !encoded || encoded.length > Math.ceil(MAX_BYTES * 4 / 3) || !/^[A-Za-z0-9_-]+$/.test(encoded) || encoded.length % 4 === 1) {
    throw new Error('The story link is invalid or too large.');
  }
  try {
    const binary = atob(encoded.replaceAll('-', '+').replaceAll('_', '/'));
    if (binary.length > MAX_BYTES) throw new Error('The story is too large.');
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    const project = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
    assertProject(project);
    return project;
  } catch (cause) {
    throw new Error(`Could not open the story: ${cause.message}`);
  }
}
