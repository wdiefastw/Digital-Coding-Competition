/** A fresh, editable mystery that demonstrates both a plot hole and its repair. */
export function createDemoProject() {
  return {
    version: 1,
    id: 'lighthouse-demo',
    title: 'The Lighthouse Secret',
    description: 'Three strangers. A missing brother. A light that returns with every autumn storm. Everyone holds a piece of the truth. Make sure the story holds together.',
    characters: [
      { id: 'mira', name: 'Mira', role: 'Archivist · searching for her missing brother', color: '#a99aff' },
      { id: 'lev', name: 'Leo', role: 'Lighthouse keeper · protecting an old promise', color: '#79cfc7' },
      { id: 'nora', name: 'Nora', role: 'Journalist · investigating a local legend', color: '#efb77b' },
    ],
    locations: [
      { id: 'archive', name: 'Town archives', description: 'Faded shipping logs and letters that were never meant to be read.' },
      { id: 'harbor', name: 'Old harbor', description: 'At low tide, a narrow path to the island emerges beneath the weathered pier.' },
      { id: 'lighthouse', name: 'North Point lighthouse', description: 'An abandoned tower that flashes three times during the last autumn storm.' },
    ],
    facts: [
      { id: 'signal', title: 'Three flashes mean someone needs help', description: 'The lighthouse uses an old distress code: someone on the island is waiting to be rescued.', initialKnowers: [] },
      { id: 'route', title: 'A hidden path leads to the lighthouse', description: 'The island can be reached from the old harbor, but only at low tide.', initialKnowers: ['lev'] },
      { id: 'brother', title: 'Mira’s brother stayed on the island', description: 'The last logbook entry reveals that he returned to help the lighthouse keeper.', initialKnowers: [] },
    ],
    branches: [
      { id: 'main', name: 'Main storyline', parentId: null, forkEventId: null },
      { id: 'alternate', name: 'Nora trusts Mira', parentId: 'main', forkEventId: 'e2' },
    ],
    events: [
      {
        id: 'e1', title: 'The letter that should not exist',
        description: 'Inside a forgotten drawer, Mira discovers a letter from her brother. In the margin, a sketch of the lighthouse explains the three-flash distress code.',
        branchId: 'main', order: 1, characterIds: ['mira'], locationId: 'archive',
        learns: [{ characterId: 'mira', factId: 'signal' }], requires: [],
      },
      {
        id: 'e2', title: 'A conversation by the water',
        description: 'Leo agrees to show Mira the path that appears at low tide. Across the harbor, Nora watches them talk, too far away to hear their secret.',
        branchId: 'main', order: 2, characterIds: ['mira', 'lev', 'nora'], locationId: 'harbor',
        learns: [{ characterId: 'mira', factId: 'route' }], requires: [{ characterId: 'lev', factId: 'route' }],
      },
      {
        id: 'e3', title: 'Nora decodes the light',
        description: 'When three flashes cut through the fog, Nora declares that someone on the island needs help. But no one has told her what the signal means. This is the demo’s intentional plot hole.',
        branchId: 'main', order: 3, characterIds: ['nora'], locationId: 'harbor',
        learns: [], requires: [{ characterId: 'nora', factId: 'signal' }],
      },
      {
        id: 'e4', title: 'The truth between the lines',
        description: 'Mira finally shares the letter with Nora and explains the signal. Together, they uncover her brother’s final logbook entry: he stayed on the island.',
        branchId: 'main', order: 4, characterIds: ['mira', 'nora'], locationId: 'archive',
        learns: [{ characterId: 'nora', factId: 'signal' }, { characterId: 'mira', factId: 'brother' }, { characterId: 'nora', factId: 'brother' }],
        requires: [{ characterId: 'mira', factId: 'signal' }],
      },
      {
        id: 'e5', title: 'An answer to the lighthouse',
        description: 'Mira leads her friends along the hidden path. Nora answers the signal with three flashes of her flashlight. A figure appears in the tower doorway.',
        branchId: 'main', order: 5, characterIds: ['mira', 'lev', 'nora'], locationId: 'lighthouse',
        learns: [], requires: [{ characterId: 'mira', factId: 'route' }, { characterId: 'nora', factId: 'signal' }],
      },
      {
        id: 'a3', title: 'Before jumping to conclusions',
        description: 'Nora catches up with Mira and asks about the letter. Mira decides to trust her and explains the meaning of the three-flash signal.',
        branchId: 'alternate', order: 1, characterIds: ['mira', 'nora'], locationId: 'harbor',
        learns: [{ characterId: 'nora', factId: 'signal' }], requires: [{ characterId: 'mira', factId: 'signal' }],
      },
      {
        id: 'a4', title: 'A signal in the dark',
        description: 'The tower flashes three times. This time, Nora knows exactly what it means. She convinces the others that the rescue cannot wait.',
        branchId: 'alternate', order: 2, characterIds: ['mira', 'nora', 'lev'], locationId: 'harbor',
        learns: [], requires: [{ characterId: 'nora', factId: 'signal' }],
      },
      {
        id: 'a5', title: 'Beyond the tide',
        description: 'Leo guides them to the lighthouse. Inside, they discover Mira’s brother’s logbook entry. Then footsteps echo overhead. The answer is closer than they imagined.',
        branchId: 'alternate', order: 3, characterIds: ['mira', 'lev', 'nora'], locationId: 'lighthouse',
        learns: [{ characterId: 'mira', factId: 'brother' }, { characterId: 'nora', factId: 'brother' }],
        requires: [{ characterId: 'lev', factId: 'route' }, { characterId: 'nora', factId: 'signal' }],
      },
    ],
  };
}

/** A new project starts with one branch and no assumptions about the story. */
export function createEmptyProject() {
  return {
    version: 1,
    id: crypto.randomUUID(),
    title: 'Untitled story',
    description: 'Every great story begins with a single event.',
    characters: [],
    locations: [],
    facts: [],
    branches: [{ id: 'main', name: 'Main storyline', parentId: null, forkEventId: null }],
    events: [],
  };
}
