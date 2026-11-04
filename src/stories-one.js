/** Original playable cases. Library descriptions contain no solutions. */
export const storiesOne = [
  {
    id: 'midnight-library',
    title: 'The Midnight Library',
    genre: 'Cozy mystery',
    difficulty: 'Gentle',
    duration: '5–8 min',
    description: 'A rare book vanishes during a rainstorm. A light still burns upstairs, and the library is supposed to be empty. Follow the small details before the doors close.',
    setting: 'A rain-soaked village library, just before midnight',
    characters: [
      { id: 'finch', name: 'Mrs. Finch', role: 'Head librarian', description: 'Keeps a pencil behind each ear and remembers every book by its weight.', color: '#bf956a' },
      { id: 'pip', name: 'Pip Bell', role: 'Evening volunteer', description: 'A student who shelves books with extraordinary care and apologizes to squeaky floorboards.', color: '#8fa994' },
      { id: 'iona', name: 'Iona Reed', role: 'Bookbinder', description: 'Repairs the library’s oldest volumes in the little room beneath the roof.', color: '#ac91b4' },
    ],
    clues: [
      { id: 'rain', title: 'Water beside the display', description: 'Fresh drops fall onto the empty book stand. A clean rectangle in the dust shows that someone lifted the book rather than dragged it.' },
      { id: 'ribbon', title: 'A violet thread', description: 'A short violet thread is caught beneath the display. Pip says only the padded repair trolley is tied with that ribbon.' },
      { id: 'doors', title: 'The unbroken door seal', description: 'A paper seal fitted after closing still bridges the delivery door. No one could have taken a large book outside that way without tearing it.' },
      { id: 'record', title: 'The storm-hold entry', description: 'The repair register lists the missing volume’s call number at 11:43 p.m., beside the words “storm hold.” Iona says this means moving a threatened book somewhere dry, not repairing its binding.' },
    ],
    start: 'arrival',
    nodes: {
      arrival: {
        title: 'One light left on', location: 'The library steps',
        body: ['Rain turns the village windows into soft squares of gold. You have come to return a book, but Mrs. Finch is waiting on the steps with her cardigan buttoned crookedly. The library’s oldest atlas has disappeared from its display. “I would rather not wake the whole village over a misplaced book,” she says. “Would you have a look?”'],
        meets: ['finch'], choices: [{ id: 'enter', label: 'Step inside and look around', to: 'hub' }],
      },
      hub: {
        title: 'A room full of quiet', location: 'The main reading room',
        body: ['The clock clicks above the fireplace. There are three places worth a closer look: the empty display, the volunteer’s desk, and the delivery entrance. Somewhere overhead, a chair moves. Mrs. Finch stays by the kettle. You can return here whenever you need to compare what you have found.'],
        choices: [
          { id: 'display', label: 'Examine the atlas display', to: 'display' },
          { id: 'volunteer', label: 'Talk to the evening volunteer', to: 'volunteer' },
          { id: 'entrance', label: 'Check the delivery entrance', to: 'entrance' },
          { id: 'upstairs', label: 'Follow the trail upstairs', to: 'bindery', requires: ['rain', 'ribbon'] },
          { id: 'gather', label: 'Put your observations together', to: 'gather', requires: ['rain', 'ribbon', 'doors', 'record'] },
        ],
      },
      display: {
        title: 'The shape of a book', location: 'The atlas display',
        body: ['The velvet stand is empty, but it is not undisturbed. A narrow ring of water spreads from a drop falling through the ceiling. The atlas has left a clean rectangle in the dust. Whoever lifted it took time to close the display’s little brass latch afterward. You place a wastebasket beneath the drip.'],
        clues: ['rain'], choices: [{ id: 'back', label: 'Return to the reading room', to: 'hub' }],
      },
      volunteer: {
        title: 'A ribbon in the lamplight', location: 'The volunteer’s desk',
        body: ['Pip is sorting abandoned bookmarks into a biscuit tin. He has not seen the atlas since supper. When you show him a violet thread from beside the display, he recognizes it immediately: the repair trolley has padded sides secured with the same ribbon. He used it earlier to carry a damaged dictionary upstairs.'],
        meets: ['pip'], clues: ['ribbon'], choices: [{ id: 'back', label: 'Return to the reading room', to: 'hub' }],
      },
      entrance: {
        title: 'A door that stayed closed', location: 'The delivery passage',
        body: ['The passage smells of damp umbrellas and lemon polish. Across the outside door, a strip of signed paper connects the frame to the wood. Mrs. Finch explains that the faulty alarm makes this old-fashioned seal useful. The paper is intact. The window beside it is too narrow for the enormous atlas.'],
        clues: ['doors'], choices: [{ id: 'back', label: 'Return to the reading room', to: 'hub' }],
      },
      bindery: {
        title: 'Under the rafters', location: 'The upstairs bindery',
        body: ['You find Iona carefully pressing a torn map beneath two flat boards. The padded trolley stands nearby, its violet ribbon fraying. She shows you the repair register: the atlas’s call number was entered at 11:43, followed by “storm hold.” That is the library’s instruction for temporarily sheltering a book from water. She lets you draw your own conclusion.'],
        meets: ['iona'], clues: ['record'], choices: [{ id: 'back', label: 'Bring the register entry downstairs', to: 'hub' }],
      },
      gather: {
        title: 'The question behind the question', location: 'Beside the fireplace',
        body: ['Mrs. Finch pours you tea in a cup with a chipped blue handle. You have an empty stand beneath a leak, a thread from a padded trolley, a sealed exit, and a register entry. Before asking who took the atlas, consider whether “taken” is the right word. Your notebook is open if you want another look.'],
        choices: [{ id: 'deduce', label: 'Explain what happened', to: 'deduction' }, { id: 'review', label: 'Review the rooms again', to: 'hub' }],
      },
      deduction: {
        title: 'Where did the atlas go?', location: 'The main reading room',
        body: ['Choose the explanation supported by all four observations. A good explanation should account for the rain, the trolley, and the record—not just one of them.'],
        puzzle: {
          prompt: 'What most likely explains the atlas’s disappearance?',
          options: [
            { id: 'collector', label: 'A collector carried it through the delivery door.', correct: false, feedback: 'That would need an explanation for the unbroken door seal. Check your notes on the passage.' },
            { id: 'sheltered', label: 'It was moved to the bindery to protect it from the leak.', correct: true, feedback: 'The evidence fits together: this was a rescue, not a theft.' },
            { id: 'hidden', label: 'Pip hid it in the reading room as a prank.', correct: false, feedback: 'A prank does not explain the matching call number and the storm-hold entry.' },
          ], correctTo: 'ending',
        }, choices: [{ id: 'review', label: 'Check the rooms before answering', to: 'hub' }],
      },
      ending: {
        title: 'A place out of the rain', location: 'The upstairs bindery',
        body: ['Iona draws back a clean sheet. The atlas lies on the dry workbench, unharmed. She had moved it as soon as the ceiling began to leak, then gone to fetch pressing boards before anyone asked. The register was her message to the next librarian on duty.'],
        ending: { title: 'Case closed: a book well cared for', kind: 'solved', body: ['Mrs. Finch writes “found safe” beneath the entry. Pip brings three more cups upstairs. The rain continues, but the library no longer feels quite so mysterious. On your way out, Iona gives you a violet ribbon to use as a bookmark. You have earned a very small place in the library’s history.'] },
      },
    },
  },
  {
    id: 'last-train',
    title: 'The Last Train to Bellweather',
    genre: 'Murder mystery',
    difficulty: 'Challenging',
    duration: '8–12 min',
    description: 'Snow closes the railway after the final departure. When a passenger is found dead in the waiting room, three accounts of the evening refuse to agree.',
    setting: 'Bellweather railway station, winter 1936',
    contentNote: 'Non-graphic murder mystery',
    characters: [
      { id: 'ward', name: 'Inspector Ward', role: 'Local police inspector', description: 'Patient, practical, and grateful for a second pair of eyes while the roads are blocked.', color: '#8b9b9b' },
      { id: 'owen', name: 'Owen Pike', role: 'Train conductor', description: 'Still wearing the gloves in which he waved the last train away.', color: '#b49272' },
      { id: 'ada', name: 'Ada Shaw', role: 'Station porter', description: 'Knows every cupboard and service door in the old station.', color: '#ab8e9d' },
      { id: 'vale', name: 'Mrs. Vale', role: 'Stranded passenger', description: 'A traveling buyer with a precise watch and a habit of keeping receipts.', color: '#8ea889' },
    ],
    clues: [
      { id: 'window', title: 'The medical time window', description: 'The station doctor places Mr. Halden’s death between 10:15 and 10:20 p.m. He was attacked in the waiting room; no method or graphic details are needed to establish the time.' },
      { id: 'platform', title: 'The conductor’s witnessed interval', description: 'Two signal workers independently place Owen on the well-lit platform from 10:14 until the train left at 10:22. They could see the waiting-room door throughout.' },
      { id: 'receipt', title: 'A timed telephone call', description: 'Mrs. Vale’s call was connected in the post-office booth from 10:13 to 10:23. The operator’s paper log and the clerk who stood beside the booth both confirm it.' },
      { id: 'key', title: 'A key and an impossible alibi', description: 'Ada signed out the waiting-room service key at 10:12. She says she rang the platform bell until 10:25, but the engineer’s sealed work report shows the bell rope had been removed at 10:10 and was not replaced until 10:30.' },
    ],
    start: 'arrival',
    nodes: {
      arrival: {
        title: 'The station after departure', location: 'Bellweather booking hall',
        body: ['The last train’s lamps disappear into the snow. You are settling beside the booking-hall stove when Inspector Ward arrives. A passenger, Mr. Halden, has been found dead in the waiting room. Ward has secured the room and summoned help. Until the road clears, he asks you to compare the witnesses’ accounts. There is no need to examine the body.'],
        meets: ['ward'], clues: ['window'], choices: [{ id: 'begin', label: 'Ask where to begin', to: 'hub' }],
      },
      hub: {
        title: 'Three accounts of ten o’clock', location: 'The booking hall stove',
        body: ['Ward has separated the witnesses so they cannot adjust their stories together. A conductor waits by the platform, a traveler sits outside the telephone booth, and the porter is checking frozen pipes. The relevant interval is short: 10:15 to 10:20. You will need to distinguish an account from independent confirmation.'],
        choices: [
          { id: 'conductor', label: 'Speak with the conductor', to: 'platform' },
          { id: 'traveler', label: 'Find the stranded traveler', to: 'telephone' },
          { id: 'porter', label: 'Ask the porter about the evening', to: 'porter' },
          { id: 'reports', label: 'Compare the station records', to: 'records', requires: ['platform', 'receipt'], requiresMet: ['ada'] },
          { id: 'gather', label: 'Review the evidence with Ward', to: 'gather', requires: ['window', 'platform', 'receipt', 'key'] },
        ],
      },
      platform: {
        title: 'A clear view of the platform', location: 'Platform one',
        body: ['Owen tells you he checked the final carriage and waited for the departure signal. Two signal workers describe the same sequence separately. Both saw him beneath the platform lamps from 10:14 until 10:22. The waiting room has only two entrances: its visible platform door and a locked service door leading into the porter’s passage.'],
        meets: ['owen'], clues: ['platform'], choices: [{ id: 'back', label: 'Return to the booking hall', to: 'hub' }],
      },
      telephone: {
        title: 'The operator’s small handwriting', location: 'The post-office booth',
        body: ['Mrs. Vale was calling her sister to say she would miss Christmas dinner. She produces the call receipt without being asked. The operator’s paper log records a connection from 10:13 to 10:23, and the station clerk confirms that she remained inside the glass booth throughout. The booth is across the hall from the waiting room.'],
        meets: ['vale'], clues: ['receipt'], choices: [{ id: 'back', label: 'Return to the booking hall', to: 'hub' }],
      },
      porter: {
        title: 'An ordinary duty', location: 'The service passage',
        body: ['Ada rubs her hands over a portable heater. She says she spent the entire departure interval ringing the platform bell: 10:12 to 10:25, without a break. The bell is hidden behind the signal shed, so no one saw her. Asked about keys, she says she collected one earlier to straighten the waiting-room chairs.'],
        meets: ['ada'], choices: [{ id: 'back', label: 'Bring her account back to Ward', to: 'hub' }],
      },
      records: {
        title: 'What a station writes down', location: 'The stationmaster’s office',
        body: ['The key ledger gives Ada’s signature at 10:12. More revealing is the engineer’s sealed maintenance report: the bell rope was removed at 10:10 after it frayed, then replaced at 10:30. Ward checks the times against the telegraph clock. These are station times, not the unreliable clock on the booking-hall wall. Ada’s stated task could not have happened.'],
        clues: ['key'], choices: [{ id: 'back', label: 'Return with the records', to: 'hub' }],
      },
      gather: {
        title: 'An account is not an alibi', location: 'The booking hall stove',
        body: ['Ward draws a line for each witness across a page. Owen and Mrs. Vale have independent witnesses for the entire medical time window. Ada has a service key and a story contradicted by a maintenance record. Ward cautions you: this identifies the account demanding investigation; a proper charge will also need a confession or further evidence.'],
        choices: [{ id: 'answer', label: 'Identify the account that fails', to: 'deduction' }, { id: 'review', label: 'Visit the witnesses again', to: 'hub' }],
      },
      deduction: {
        title: 'Five minutes that matter', location: 'The inspector’s notebook',
        body: ['Ignore rumors and impressions. Your task is to identify whose stated location during 10:15–10:20 cannot be supported by the physical record.'],
        puzzle: {
          prompt: 'Whose account should Ward challenge first?',
          options: [
            { id: 'owen', label: 'Owen: the conductor might have left the platform unnoticed.', correct: false, feedback: 'Two independent workers place him there for the whole relevant interval. Look for an account contradicted by a record.' },
            { id: 'vale', label: 'Mrs. Vale: the telephone receipt is too convenient.', correct: false, feedback: 'The receipt is supported by the operator and the clerk. Convenience alone is not a contradiction.' },
            { id: 'ada', label: 'Ada: her bell-ringing alibi describes a task that was impossible then.', correct: true, feedback: 'That is the contradiction Ward can demonstrate, rather than merely suspect.' },
          ], correctTo: 'ending',
        }, choices: [{ id: 'review', label: 'Compare the witness accounts again', to: 'hub' }],
      },
      ending: {
        title: 'Before the morning train', location: 'The stationmaster’s office',
        body: ['Faced with the maintenance report, Ada admits entering by the service door. She tells Ward that Halden had been blackmailing her over a past theft and that their confrontation ended in murder. Ward records her statement and finds the stolen blackmail letters exactly where she says they are. The confession and recovered letters establish what the failed alibi alone could not.'],
        ending: { title: 'Case closed: the false alibi', kind: 'solved', body: ['By dawn, the snowplow has reached the road. Ward thanks you for following records instead of first impressions. The first train of the morning arrives quietly. Somewhere along the platform, the repaired bell rings once.'] },
      },
    },
  },
  {
    id: 'glasshouse',
    title: 'The Glasshouse Hour',
    genre: 'Cozy mystery',
    difficulty: 'Intricate',
    duration: '5–8 min',
    description: 'An invitation leads you to a winter garden with no host. Among the sleeping plants, someone has left a trail that only a patient visitor will notice.',
    setting: 'A botanical garden on the morning of its winter opening',
    characters: [
      { id: 'bea', name: 'Bea Mercer', role: 'Apprentice gardener', description: 'Has soil on her cuffs and knows which plants dislike an audience.', color: '#8b9e73' },
      { id: 'ellis', name: 'Ellis Rowe', role: 'Glasshouse caretaker', description: 'Can identify a cracked pane by the sound the rain makes on it.', color: '#b79871' },
      { id: 'sol', name: 'Dr. Sol Arden', role: 'Botanist and host', description: 'Invited you to the opening, then failed to appear at the gates.', color: '#8ea8a6' },
    ],
    clues: [
      { id: 'appointment', title: 'An unfinished appointment', description: 'Sol’s note says “Before the guests: winter orchid, 8:15.” Bea last saw Sol carrying a flask toward the western glasshouse at eight.' },
      { id: 'warmth', title: 'A recently used flask', description: 'A still-warm flask sits beside the western propagation-room door. Inside the room, a chair leg taps against the glass when you call.' },
      { id: 'frost', title: 'A frozen outside latch', description: 'The outside latch has frozen into its socket. Ellis explains that this door locks itself when pulled shut and cannot be opened from inside.' },
      { id: 'service', title: 'The old service plan', description: 'The plan marks a second entrance to the propagation room through the adjacent potting shed. The shed’s door opens outward; Bea’s ordinary garden key fits it.' },
    ],
    start: 'arrival',
    nodes: {
      arrival: {
        title: 'An invitation in green ink', location: 'The botanical garden gate',
        body: ['You arrive with a folded invitation and a pair of gloves too thin for January. Dr. Sol Arden promised to show you something extraordinary before the garden opens. Instead, you meet Bea beneath the gate arch. Sol has not answered the office telephone. Bea is trying not to look worried. The public gates will open in twenty minutes.'],
        meets: ['bea'], choices: [{ id: 'enter', label: 'Help Bea look for the host', to: 'hub' }],
      },
      hub: {
        title: 'The paths between the glass', location: 'The central fountain',
        body: ['The fountain is still under its winter cover. Three paths lead away: one to Sol’s workroom, one toward the western glasshouse, and one to the caretaker’s shed. You need a sequence of events, not a dramatic theory. Bea waits nearby, holding a ring of garden keys.'],
        choices: [
          { id: 'workroom', label: 'Look in Sol’s workroom', to: 'workroom' },
          { id: 'west', label: 'Walk to the western glasshouse', to: 'west' },
          { id: 'caretaker', label: 'Find the caretaker', to: 'caretaker' },
          { id: 'plan', label: 'Consult the old building plan', to: 'plan', requires: ['warmth', 'frost'] },
          { id: 'gather', label: 'Decide what to do next', to: 'gather', requires: ['appointment', 'warmth', 'frost', 'service'] },
        ],
      },
      workroom: {
        title: 'The note beside the kettle', location: 'Sol’s workroom',
        body: ['A kettle has clicked itself off. Beside it lies an appointment card: “Before the guests: winter orchid, 8:15.” Bea remembers seeing Sol at eight, heading west with a flask and a notebook. No coat is missing from the hook. The planned visit was clearly meant to stay within the garden.'],
        clues: ['appointment'], choices: [{ id: 'back', label: 'Return to the fountain', to: 'hub' }],
      },
      west: {
        title: 'A small sound behind the glass', location: 'The western propagation room',
        body: ['The western glasshouse is warm enough to turn the glass milky. A flask rests outside a narrow side door; the tea inside is still warm. When you call Sol’s name, something taps three times against a pane. You tap back. The same pattern answers. This is not a time to guess carelessly or force the glass.'],
        clues: ['warmth'], choices: [{ id: 'back', label: 'Return for help and better information', to: 'hub' }],
      },
      caretaker: {
        title: 'A stubborn little mechanism', location: 'The caretaker’s shed',
        body: ['Ellis listens, sets down a tin of putty, and follows you far enough to examine the latch. Overnight frost has locked its spring into the socket. The propagation door catches automatically when closed, and its original design provides no inside handle. Ellis has requested a replacement for months. Breaking a warm pane would scatter glass across the workbench.'],
        meets: ['ellis'], clues: ['frost'], choices: [{ id: 'back', label: 'Return to the fountain', to: 'hub' }],
      },
      plan: {
        title: 'What the newer map leaves out', location: 'The garden records cupboard',
        body: ['Now that you know the precise room and the latch problem, Ellis pulls out the old service plan. The propagation room shares a doorway with the potting shed. Visitors never use it, so it does not appear on their map. The shed opens outward and takes an ordinary garden key. Bea checks her ring: she has that key.'],
        clues: ['service'], choices: [{ id: 'back', label: 'Take the plan back to Bea', to: 'hub' }],
      },
      gather: {
        title: 'A way in without damage', location: 'The central fountain',
        body: ['The appointment, the warm flask, and the tapping make a coherent route through the morning. The frozen latch explains the silence on the telephone. Most importantly, the plan gives you another entrance. Sol has signaled that they are conscious; you can act promptly without putting anyone beneath broken glass.'],
        choices: [{ id: 'act', label: 'Choose a safe way to reach Sol', to: 'deduction' }, { id: 'review', label: 'Check your observations first', to: 'hub' }],
      },
      deduction: {
        title: 'Which door?', location: 'The western path',
        body: ['Bea has her keys ready. Ellis holds the building plan open. Choose the route supported by the evidence you collected.'],
        puzzle: {
          prompt: 'How should you reach the person behind the glass?',
          options: [
            { id: 'main', label: 'Keep pulling the frozen propagation-room latch.', correct: false, feedback: 'The latch is frozen into its socket. Repeating the same action will not solve the access problem.' },
            { id: 'service', label: 'Unlock the potting shed and use its shared doorway.', correct: true, feedback: 'The service plan supplies a working route without broken glass.' },
            { id: 'office', label: 'Wait in the office for Sol to answer the telephone.', correct: false, feedback: 'You already have a response from the propagation room. A telephone elsewhere cannot help with its door.' },
          ], correctTo: 'ending',
        }, choices: [{ id: 'review', label: 'Look over the garden notes', to: 'hub' }],
      },
      ending: {
        title: 'The flower at eight fifteen', location: 'The propagation room',
        body: ['The potting-shed lock turns easily. Beyond its shared doorway, Sol sits on a stool beside a tray of winter orchids, embarrassed but unharmed. The door caught while they were checking a flower; the frost did the rest. They used the chair leg to tap the glass when they heard you. Bea insists that the faulty latch be replaced today.'],
        meets: ['sol'], ending: { title: 'Case closed: the overlooked entrance', kind: 'solved', body: ['Only then does Sol show you why you were invited: a pale orchid opening for the first time in seven years. The first visitors arrive to find the host, the apprentice, the caretaker, and one rather relieved guest all quietly admiring it.'] },
      },
    },
  },
  {
    id: 'quiet-harbor',
    title: 'The Quiet Harbor',
    genre: 'Cozy mystery',
    difficulty: 'Intricate',
    duration: '5–8 min',
    description: 'At low tide, an empty boat returns with the wrong name painted on its bow. Follow a harbor’s half-told stories before the water covers the evidence.',
    setting: 'A small fishing harbor on the first morning of autumn',
    characters: [
      { id: 'ruth', name: 'Ruth Cale', role: 'Harbormaster', description: 'Keeps the tide tables in her coat pocket and notices every boat that comes home.', color: '#8ea8af' },
      { id: 'tomas', name: 'Tomas Wren', role: 'Boat painter', description: 'Works in a shed smelling of pine resin and keeps careful job cards.', color: '#b99b78' },
      { id: 'nell', name: 'Nell Avery', role: 'Ferry mechanic', description: 'A capable mechanic whom the harbor has not seen since yesterday’s fog.', color: '#a49cb8' },
    ],
    clues: [
      { id: 'number', title: 'A registration beneath the paint', description: 'Although the bow reads Wren, the brass registration is H-27. Ruth’s ledger identifies H-27 as Nell Avery’s boat, previously named Tern.' },
      { id: 'paint', title: 'An unfinished repaint', description: 'Tomas’s job card authorizes changing Tern to Wren. The work was interrupted by fog, and he left the lettering stencil aboard. The unfamiliar name is not evidence of a stolen boat.' },
      { id: 'manifest', title: 'A one-way equipment delivery', description: 'Yesterday’s ferry log records Nell landing with tools at Beacon Island. The usual return launch was canceled by a failed engine. No passenger return is recorded.' },
      { id: 'beacon', title: 'The maintenance signal', description: 'The harbor signal chart identifies two short flashes and one long flash as “mechanical assistance requested.” The light currently flashing on Beacon Island matches that pattern.' },
    ],
    start: 'arrival',
    nodes: {
      arrival: {
        title: 'A boat without footsteps', location: 'The eastern slipway',
        body: ['The tide has set a little boat gently against the slipway. It is empty, its mooring line trailing in the water. Ruth Cale has already called the coastguard with the facts. No one recognizes the fresh name on the bow. Before the tide turns, she asks you to help establish whose boat it is and where it last traveled.'],
        meets: ['ruth'], choices: [{ id: 'start', label: 'Take a closer look at the harbor', to: 'hub' }],
      },
      hub: {
        title: 'The harbor wakes slowly', location: 'The harbormaster’s steps',
        body: ['A gull balances on the bell tower. The slipway, the painter’s shed, and the ferry office are all within sight. Ruth repeats an important distinction: an empty boat can drift for several reasons. Establish names, journeys, and signals before deciding what any of it means. The coastguard will want observations, not stories.'],
        choices: [
          { id: 'boat', label: 'Inspect the boat’s registration', to: 'boat' },
          { id: 'painter', label: 'Visit the boat painter’s shed', to: 'painter' },
          { id: 'ferry', label: 'Ask about yesterday’s crossings', to: 'ferry' },
          { id: 'signal', label: 'Compare the island light with the signal chart', to: 'signal', requires: ['number', 'manifest'] },
          { id: 'gather', label: 'Prepare a useful report', to: 'gather', requires: ['number', 'paint', 'manifest', 'beacon'] },
        ],
      },
      boat: {
        title: 'A name is not a number', location: 'Beside the slipway',
        body: ['The new white lettering looks unfamiliar, but the brass registration plate is old and untouched: H-27. Ruth checks the number against her ledger. It belongs to Nell Avery, the ferry mechanic. Until recently her boat was called Tern. A loose painter’s stencil beneath the seat may explain the different name.'],
        clues: ['number'], choices: [{ id: 'back', label: 'Return to the harbor steps', to: 'hub' }],
      },
      painter: {
        title: 'Letters left to dry', location: 'The painter’s shed',
        body: ['Tomas turns off his small radio and finds the job card. Nell requested the new name weeks ago, after inheriting her grandfather’s boat. Fog stopped yesterday’s work before Tomas could remove his stencil and varnish the letters. “A strange name makes a fine rumor,” he says, “but it is not a strange boat.”'],
        meets: ['tomas'], clues: ['paint'], choices: [{ id: 'back', label: 'Return to the harbor steps', to: 'hub' }],
      },
      ferry: {
        title: 'The crossing that did not return', location: 'The ferry office',
        body: ['The ferry log records Nell and a box of tools landing at Beacon Island yesterday afternoon. She had gone to repair its small weather station. A red note cancels the return launch: engine failure. No later passenger crossing appears. Ruth checks the radio log; the island radio was listed as awaiting repairs, too.'],
        clues: ['manifest'], choices: [{ id: 'back', label: 'Return to the harbor steps', to: 'hub' }],
      },
      signal: {
        title: 'Light across the water', location: 'The harbor lookout',
        body: ['Knowing which island matters, you train the lookout’s binoculars on the weather-station window. Its lamp gives two short flashes and one long one, then repeats. Ruth retrieves the official local signal chart. The pattern requests mechanical assistance. It is a deliberate message, not the regular sweep of a lighthouse beam.'],
        clues: ['beacon'], choices: [{ id: 'back', label: 'Take the signal to Ruth', to: 'hub' }],
      },
      gather: {
        title: 'Four observations, one report', location: 'The harbormaster’s desk',
        body: ['You have identified the boat without relying on its paint, found a legitimate reason for its unfamiliar name, traced Nell’s last confirmed journey, and recognized a current request for help. Ruth is ready to update the coastguard. What matters now is directing assistance to the place supported by the records.'],
        choices: [{ id: 'report', label: 'Choose what the report should say', to: 'deduction' }, { id: 'review', label: 'Recheck the harbor records', to: 'hub' }],
      },
      deduction: {
        title: 'Where should help go?', location: 'The harbor radio',
        body: ['Ruth holds the receiver. The report should distinguish what you know from what you merely imagine.'],
        puzzle: {
          prompt: 'Which conclusion best follows the evidence?',
          options: [
            { id: 'theft', label: 'The new boat name proves a theft; search the open sea for a thief.', correct: false, feedback: 'The registration and the painter’s authorized job card explain the name. A coat of paint does not establish a theft.' },
            { id: 'island', label: 'Send assistance to Beacon Island, where Nell was last recorded and a help signal is visible.', correct: true, feedback: 'That report follows the confirmed journey and the present signal without inventing an accident.' },
            { id: 'home', label: 'The canceled ferry means Nell must already be home.', correct: false, feedback: 'A canceled return is not a completed return. Look at the passenger log and the signal together.' },
          ], correctTo: 'ending',
        }, choices: [{ id: 'review', label: 'Check the evidence before transmitting', to: 'hub' }],
      },
      ending: {
        title: 'The next boat home', location: 'The eastern slipway',
        body: ['The coastguard reaches Beacon Island and finds Nell safe beside a disabled launch. During the fog, her lightly tied boat drifted free of the island landing. She spent the night in the weather station and used its service lamp when daylight came. Ruth logs the facts while a neighbor puts the kettle on.'],
        meets: ['nell'], ending: { title: 'Case closed: the message across the water', kind: 'solved', body: ['When Nell returns, she thanks you for looking past the painted name. Tomas promises a better mooring rope before he finishes the varnish. By the time the tide reaches the steps, the harbor is a place of ordinary sounds again: a radio, a kettle, someone calling a familiar name.'] },
      },
    },
  },
  {
    id: 'violet-envelope',
    title: 'The Violet Envelope',
    genre: 'Historical mystery',
    difficulty: 'Intricate',
    duration: '5–8 min',
    description: 'An unopened letter arrives forty years late. Its address belongs to a house that no longer exists, but someone in town still remembers the path to its door.',
    setting: 'A hillside town and its old postal archive',
    characters: [
      { id: 'mabel', name: 'Mabel Price', role: 'Retired postmaster', description: 'Remembers routes by the gardens she passed, rather than by street names.', color: '#b6959d' },
      { id: 'jun', name: 'Jun Park', role: 'Town archivist', description: 'Uses neat paper sleeves to preserve things other people nearly throw away.', color: '#90a39a' },
      { id: 'celia', name: 'Celia Hart', role: 'Local piano teacher', description: 'Lives above the bakery, where music drifts out of the window most afternoons.', color: '#b6a079' },
    ],
    clues: [
      { id: 'mark', title: 'A delivery mark, not a cancellation', description: 'The tiny violet triangle means “route suspended.” Mabel explains that a flood interrupted that week’s deliveries; the letter was stored with undelivered mail, never given to its recipient.' },
      { id: 'street', title: 'Two names for the same lane', description: 'The old town map labels the envelope’s street Mill Lane. The council record shows it was renamed Orchard Row after the flood. The parcel boundaries are unchanged.' },
      { id: 'register', title: 'The household at number four', description: 'A residents’ register lists Evelyn Hart at 4 Mill Lane with her daughter, Celia. The family moved above the bakery after their house was demolished.' },
      { id: 'sender', title: 'A matching return address', description: 'The return address names Thomas Hart at a coastal convalescent home. The archive’s admission ledger identifies him as Evelyn’s husband; Celia’s birth record identifies Thomas and Evelyn as her parents.' },
    ],
    start: 'arrival',
    nodes: {
      arrival: {
        title: 'Forty years in a drawer', location: 'The old post office',
        body: ['Renovators have found a violet envelope behind a fitted drawer. It is still sealed. Mabel, the retired postmaster, asks whether you can help locate the family before it joins a box of anonymous objects in the museum. The envelope is addressed to Evelyn Hart, 4 Mill Lane. No such street appears on the modern map. You leave the seal untouched.'],
        meets: ['mabel'], choices: [{ id: 'begin', label: 'Help trace the address', to: 'hub' }],
      },
      hub: {
        title: 'A town remembers in layers', location: 'The square outside the archive',
        body: ['Across the square, the bakery windows are fogged with warmth. You have three reasonable starting points: Mabel’s knowledge of postal marks, the old street plans, and the residents’ register. The contents of the letter belong to its family. You can solve the delivery problem without opening it.'],
        choices: [
          { id: 'postal', label: 'Ask about the mark on the envelope', to: 'postal' },
          { id: 'map', label: 'Compare the old and new street maps', to: 'map' },
          { id: 'family', label: 'Search the residents’ register', to: 'family' },
          { id: 'return', label: 'Check the return address in the archive', to: 'return', requires: ['street', 'register'] },
          { id: 'gather', label: 'Decide whom the letter belongs with', to: 'gather', requires: ['mark', 'street', 'register', 'sender'] },
        ],
      },
      postal: {
        title: 'A triangle in violet ink', location: 'The old sorting counter',
        body: ['Mabel finds the triangle with a magnifying glass. It is not a postmark or a sign that anyone refused the letter. “Route suspended,” she says. The flood closed the lower streets that week. Undelivered mail was placed in temporary drawers; evidently one envelope slipped behind its lining. The missing years were an accident of furniture.'],
        clues: ['mark'], choices: [{ id: 'back', label: 'Return to the square', to: 'hub' }],
      },
      map: {
        title: 'The street beneath the street', location: 'The archive map table',
        body: ['Jun lays tracing paper over an old plan. The bend, the orchard wall, and the narrow plots match modern Orchard Row exactly. A council note confirms the name changed after the flood. Number four stood where the community garden is now. Its absence on today’s street is real, but its location is not a mystery anymore.'],
        meets: ['jun'], clues: ['street'], choices: [{ id: 'back', label: 'Return to the square', to: 'hub' }],
      },
      family: {
        title: 'The handwriting in the margin', location: 'The residents’ register',
        body: ['The register names Evelyn Hart and her daughter Celia at number four. A later note records their move above the bakery when the old house was condemned. Mabel remembers Evelyn carrying sheet music in a string bag. Evelyn has since died, but her daughter still teaches piano in those same upstairs rooms.'],
        clues: ['register'], choices: [{ id: 'back', label: 'Return to the square', to: 'hub' }],
      },
      return: {
        title: 'The other side of an envelope', location: 'The archive reading desk',
        body: ['The return address leads to a coastal convalescent home. Jun finds an admission ledger naming Thomas Hart and listing Evelyn as his wife. A public birth record connects both of them to Celia. You now have documentary links on each side of the envelope. Nothing about the family connection depends on guessing what the letter says.'],
        clues: ['sender'], choices: [{ id: 'back', label: 'Bring the records back to Mabel', to: 'hub' }],
      },
      gather: {
        title: 'What you are entitled to know', location: 'The square outside the archive',
        body: ['The old address, the renamed lane, the family’s move, and the sender’s identity all line up. The letter has not become public property simply because it was lost. You can offer it to a documented close family member and let that person decide whether to read it. Mabel asks you to make the final recommendation.'],
        choices: [{ id: 'recommend', label: 'Recommend a respectful delivery', to: 'deduction' }, { id: 'review', label: 'Check the documents again', to: 'hub' }],
      },
      deduction: {
        title: 'A name for the final stop', location: 'The bakery doorway',
        body: ['The upstairs piano falls quiet. You have not knocked yet. Decide what the records justify before taking the letter any farther.'],
        puzzle: {
          prompt: 'What is the best next step for the sealed letter?',
          options: [
            { id: 'public', label: 'Open it and publish its contents to search for clues.', correct: false, feedback: 'The records already establish the family connection. Opening private mail is unnecessary to solve the delivery question.' },
            { id: 'museum', label: 'Give it to the museum because the original house is gone.', correct: false, feedback: 'A vanished building does not erase a documented family connection. Check the residents’ register.' },
            { id: 'celia', label: 'Offer it privately to Celia Hart, explaining the documented family connection.', correct: true, feedback: 'You have traced the address and the family without needing to know the private contents.' },
          ], correctTo: 'ending',
        }, choices: [{ id: 'review', label: 'Look at the records once more', to: 'hub' }],
      },
      ending: {
        title: 'A letter reaches a home', location: 'The rooms above the bakery',
        body: ['Celia listens while you explain the maps and registers. She recognizes her father’s handwriting on the envelope and accepts it with both hands. You do not ask what it says. Later, she tells Mabel only that she is glad it was found, and that some things are worth arriving for, even late.'],
        meets: ['celia'], ending: { title: 'Case closed: the address that changed', kind: 'solved', body: ['Jun adds a corrected cross-reference to the street index. Mabel writes “delivered” in a notebook she thought she had finished years ago. As you leave the bakery, the piano starts again upstairs. The mystery is solved; the letter remains its family’s story.'] },
      },
    },
  },
];
