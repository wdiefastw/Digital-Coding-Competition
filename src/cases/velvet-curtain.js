export default {
  "id": "velvet-curtain",
  "title": "Behind the Velvet Curtain",
  "genre": "Murder mystery",
  "difficulty": "Challenging",
  "duration": "40–60 min",
  "setting": "A small repertory theater on opening night",
  "description": "An opening night ends before the final bow. Choose the theater’s hidden machinery or its guarded human stories, then build an account that survives more than applause.",
  "contentNote": "Non-graphic murder mystery",
  "revision": 2,
  "flags": [
    "technical-route",
    "witness-route"
  ],
  "characters": [
    {
      "id": "owen",
      "name": "Owen Price",
      "role": "Stage manager",
      "description": "Carries three pencils and insists that a cue written in advance is different from a cue actually called.",
      "color": "#8b9b9c"
    },
    {
      "id": "iris",
      "name": "Iris Cole",
      "role": "Lead actor",
      "description": "Still wearing half her makeup; would rather describe an ugly argument honestly than invent a pretty one.",
      "color": "#b58893"
    },
    {
      "id": "mara",
      "name": "Mara Voss",
      "role": "Theater director",
      "description": "Has kept the company running through years of cancellations and takes every threatened closure personally.",
      "color": "#a39778"
    },
    {
      "id": "dev",
      "name": "Detective Dev Shah",
      "role": "Investigating officer",
      "description": "Makes room in the record for uncertainty without confusing it with indifference.",
      "color": "#88a5a0"
    },
    {
      "id": "beth",
      "name": "Beth Lane",
      "role": "Senior usher",
      "description": "Recognizes regular patrons by the seat they reach for before checking their ticket.",
      "color": "#bb947d"
    },
    {
      "id": "nell",
      "name": "Nell Armitage",
      "role": "Sound engineer",
      "description": "Dates her changes to the system and keeps the earlier versions in their own boxes.",
      "color": "#a493b4"
    },
    {
      "id": "etta",
      "name": "Etta Moon",
      "role": "Volunteer bookkeeper",
      "description": "Keeps receipts in envelopes labeled with the question they are meant to answer.",
      "color": "#a2aa7c"
    },
    {
      "id": "kit",
      "name": "Kit Sorrell",
      "role": "Stage apprentice",
      "description": "Notices the small jobs everyone assumes somebody else has finished.",
      "color": "#c29486"
    }
  ],
  "clues": [
    {
      "id": "initial-record",
      "title": "The initially reported interval",
      "description": "Owen spoke to backer Gerald Fane before the interval; he found him dead afterward. These are differently sourced observations, and none identifies the person who entered between them."
    },
    {
      "id": "room-boundary",
      "title": "The protected room and its permitted records",
      "description": "Police control Fane’s room. Witnesses may describe what they saw outside it; equipment and public records may be inspected only with the appropriate custodian."
    },
    {
      "id": "tech-1-observation",
      "title": "The office-clock calibration",
      "description": "Two checks show the office clock three minutes behind the sound-controller reference."
    },
    {
      "id": "tech-1-document",
      "title": "The camera correction and event-log distinction",
      "description": "The camera is one minute behind the controller. Actual-event logs are distinct from rehearsal and opening-night plans."
    },
    {
      "id": "tech-1-deduction",
      "title": "A common time reference",
      "description": "Office observations translate to controller 8:34–8:42; camera 8:36 translates to controller 8:37. No exact death minute is established."
    },
    {
      "id": "tech-2-observation",
      "title": "Two distinguishable announcement versions",
      "description": "Only Reel B contains the revised words, cough, and timed paper rustle matching the audience recording."
    },
    {
      "id": "tech-2-document",
      "title": "The sealed source and actual selection",
      "description": "Reel B was sealed before the performance. Actual-event records select Player B at 8:36–8:41 and no live-microphone key event."
    },
    {
      "id": "tech-2-deduction",
      "title": "What the recorded voice establishes",
      "description": "The specific live-speaking claim is contradicted. Physical booth occupancy and any later office visit remain separate questions."
    },
    {
      "id": "tech-3-observation",
      "title": "Two different access systems",
      "description": "The public catch was closed 8:35–8:41. A separate conventional staff door could still be opened with a fitting service key."
    },
    {
      "id": "tech-3-document",
      "title": "Issued keys and a measured route",
      "description": "Key 2 is sealed at a locksmith; key 4 is issued to Mara. The permitted round trip takes roughly 130 seconds before any stop."
    },
    {
      "id": "tech-3-deduction",
      "title": "A possible route, not an identification",
      "description": "A fitting key allows the observed corridor movement, but the sound of a lock and a key register alone do not identify the user."
    },
    {
      "id": "tech-4-observation",
      "title": "The amber-lamp specification",
      "description": "Steady amber indicates staff door open, not a microphone press; flashing amber denotes a separate test bridge."
    },
    {
      "id": "tech-4-document",
      "title": "The contact log and prior note",
      "description": "Door open 8:37:02–8:38:11. Kit’s earlier signed sheet describes steady amber; the test-wallet seal is intact."
    },
    {
      "id": "tech-4-deduction",
      "title": "The indicator’s true limit",
      "description": "The lamp corroborates corridor access during the relevant period but supplies no person’s identity or continuous-booth alibi."
    },
    {
      "id": "tech-5-observation",
      "title": "The coat’s documented borrowing",
      "description": "Iris wore the coat at 6:42; wardrobe returned it at 6:50. A 7:55 image shows Mara wearing it with the chipped button attached."
    },
    {
      "id": "tech-5-document",
      "title": "The retrieved item and later condition",
      "description": "Police documented recovery at the office doorway. A later photograph shows Mara’s coat missing the matching chipped button."
    },
    {
      "id": "tech-5-deduction",
      "title": "A bounded garment link",
      "description": "The evidence connects the garment to the room in a later interval; it does not alone establish a wearer’s entire conduct or a fatal act."
    },
    {
      "id": "tech-6-observation",
      "title": "The uncropped timed reflection",
      "description": "At controller 8:37:25 a reflected figure carrying the diagonally repaired wallet moves toward the office. The face is not identifiable."
    },
    {
      "id": "tech-6-document",
      "title": "The wallet’s traceable possession",
      "description": "Mara collected the repaired wallet at 7:40 and claims continuous possession; Beth saw it with her at 8:32 but not afterward."
    },
    {
      "id": "tech-6-deduction",
      "title": "A testable possession contradiction",
      "description": "The movement and uninterrupted-possession claim can be challenged together. The photograph is not promoted into a clear facial identification."
    },
    {
      "id": "tech-7-observation",
      "title": "The technical sequence",
      "description": "Converted window, prerecorded source, logged staff-door opening, traceable wallet movement, and bounded physical link form an ordered set of independent findings."
    },
    {
      "id": "tech-7-document",
      "title": "The safeguarded later admission",
      "description": "In a formal interview Mara admits the visit and fatal confrontation. It is a new source that must be corroborated, not a replacement for earlier records."
    },
    {
      "id": "tech-7-deduction",
      "title": "A defensible technical case",
      "description": "The alibi is contradicted by independent records; the formal admission supplies the act. Earlier limits on clocks, images, and objects remain visible."
    },
    {
      "id": "people-1-observation",
      "title": "The correctly referenced interval",
      "description": "The office clock runs three minutes slow. Owen’s observations belong at box-office reference 8:34–8:42."
    },
    {
      "id": "people-1-document",
      "title": "The vestibule account and its controls",
      "description": "Beth and a patron independently place Iris continuously at the front doors; calls and images check the reference and sequence."
    },
    {
      "id": "people-1-deduction",
      "title": "Iris’s bounded alibi",
      "description": "The corroborated continuous account covers Iris, not every other person in the theater. Earlier anger is not later location evidence."
    },
    {
      "id": "people-2-observation",
      "title": "The complete rent entries",
      "description": "Debit 1200,credit 1200,debit 1200 net to 1200, matching one bank transfer to the landlord."
    },
    {
      "id": "people-2-document",
      "title": "The pressure document",
      "description": "Fane demanded a signed acceptance of a 2400 shortfall before releasing funding; that figure repeats a photocopy omitting the reversal."
    },
    {
      "id": "people-2-deduction",
      "title": "Pressure is distinct from the allegation’s truth",
      "description": "The alleged shortfall is unsupported by the complete records, but the demand documents a reason the meeting mattered."
    },
    {
      "id": "people-3-observation",
      "title": "The two document histories",
      "description": "The angry page is a corrected draft with no matching delivery trail. A separately numbered appointment card has a signed receipt."
    },
    {
      "id": "people-3-document",
      "title": "The received appointment",
      "description": "Fane received the card at 7:20. It proposes a meeting linked to the interval announcement but does not independently establish attendance."
    },
    {
      "id": "people-3-deduction",
      "title": "A bounded communication finding",
      "description": "A proposed meeting is established; delivered anger, exact intended timing, and later conduct need separate evidence."
    },
    {
      "id": "people-4-observation",
      "title": "The dated garment sequence",
      "description": "Iris’s loan ended 6:50; Mara is photographed wearing the intact coat at 7:55. The recovered chip matches the later missing button."
    },
    {
      "id": "people-4-document",
      "title": "The interval costume and corroboration",
      "description": "Iris wore a plain black jacket at the front doors; continuous accounts are checked by images and dispatch calls."
    },
    {
      "id": "people-4-deduction",
      "title": "The portrait does not move a witness in time",
      "description": "An afternoon loan cannot itself refute a later alibi. The later coat connection remains separate and limited."
    },
    {
      "id": "people-5-observation",
      "title": "Kit’s limited voice account",
      "description": "Kit heard an exchange from the staff-door direction, recognized one voice as Mara’s, and saw neither speaker’s face."
    },
    {
      "id": "people-5-document",
      "title": "The prior task and sourced technical check",
      "description": "The signed 8:38 delivery fits a passing corridor route. Independently logged door use and prerecorded foyer audio are supplied by the other team."
    },
    {
      "id": "people-5-deduction",
      "title": "A corroborated but unexpanded statement",
      "description": "The timing and acoustic possibility are supported. Uncertainty about faces and the second voice remains in the signed statement."
    },
    {
      "id": "people-6-observation",
      "title": "The carbon correction and contents match",
      "description": "R-18 becameR-81 through a noted transposition. A contents manifest identifies the same three originals now with the officer."
    },
    {
      "id": "people-6-document",
      "title": "The cafe errand’s independent time",
      "description": "An 8:12 till entry and 8:23 printer collection record precede the relevant interval; the remembered 8:30 time was an estimate."
    },
    {
      "id": "people-6-deduction",
      "title": "A clerical red herring resolved",
      "description": "The number conflict does not establish another packet or office visitor. Mara’s revised delivery account remains a separate claim to test."
    },
    {
      "id": "people-7-observation",
      "title": "The versioned witness chronology",
      "description": "Independent alibis, financial calculation, communication provenance, garment sequence, and a limited voice account are kept distinct and dated."
    },
    {
      "id": "people-7-document",
      "title": "The later recorded admission",
      "description": "Mara admits the fatal confrontation with legal support present; her detail is tested against independent evidence rather than supplied by the witnesses."
    },
    {
      "id": "people-7-deduction",
      "title": "A corrected, protected final account",
      "description": "The solved outcome does not justify inflating heard into seen, draft into delivered, or an unsupported shortfall into a true loss."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "No final bow",
      "location": "The backstage corridor",
      "body": [
        "You came to review the opening night of a play about a mistaken identity. By the interval, you have filled half a page with notes about an actor who lets a silence last just long enough. Then Owen Price appears at the aisle door. He asks you to come quietly, leaving your coat on the seat so the audience will not mistake you for an evacuation signal.",
        "The company’s financial backer, Gerald Fane, has been found dead in the private office behind the stage. Owen has called the police and closed the room. Nobody needs you to examine the body or disturb that boundary. You have helped record witness accounts before; he wants a calm second listener while the audience is moved safely into the foyer.",
        "Beyond the curtain, a recorded housekeeping announcement asks patrons to keep the side passage clear. Its calm voice feels badly out of place. Owen asks you to notice that feeling without treating it as evidence. A theater is full of convincing things made for a purpose, and tonight you will have to establish which purpose belongs to which thing."
      ],
      "meets": [
        "owen"
      ],
      "choices": [
        {
          "id": "begin",
          "label": "Help Owen make a careful first record",
          "to": "first-record"
        }
      ]
    },
    "first-record": {
      "title": "What has actually been established",
      "location": "The prompt desk",
      "body": [
        "Owen writes two entries in different ink. He says he last spoke with Fane shortly before the interval, when the wall clock near the office showed 8:31. He found him when that same clock showed 8:39. In between, Owen was moving patrons away from a side exit whose light had failed. He did not watch the office door throughout.",
        "There are other claims. Mara Voss says she was speaking live from the sound booth between 8:33 and 8:38. Iris Cole admits arguing with Fane before the performance and says she stood with Beth, the usher, during the interval. A green enamel button was noticed just inside the office doorway at discovery. Owen has left it for the officer, rather than putting it in a pocket to make the evening neater.",
        "Detective Dev Shah arrives and places the room under police control. He agrees to accept a sourced account from the public parts of the theater. He asks you to separate a witnessed event, a person’s account, a planned cue, and a physical item whose chain of custody has not yet been recorded. Those categories may converge later. Writing them as one story now would decide the case before investigating it."
      ],
      "meets": [
        "dev"
      ],
      "clues": [
        "initial-record",
        "room-boundary"
      ],
      "choices": [
        {
          "id": "sort",
          "label": "Choose what the first record can honestly claim",
          "to": "source-question"
        }
      ]
    },
    "source-question": {
      "title": "A source is not a conclusion",
      "location": "The prompt desk",
      "body": [
        "The four statements below do not all have the same status. Two describe appropriate limits on what is currently known. Choose both before asking anybody to defend a theory that has not yet been earned."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two statements belong in a defensible first account?",
        "wrongFeedback": "Recheck who actually observed each event and whether a record describes a plan or a verified occurrence.",
        "correctTo": "routes",
        "options": [
          {
            "id": "boundary",
            "label": "The office is protected; an item inside it needs an officer’s documented handling before it is compared.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "claims",
            "label": "Mara’s live-announcement account and Iris’s interval account still need independent checks.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "button",
            "label": "A green button immediately establishes who wore its coat at the moment of the death.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "cue",
            "label": "The printed running order proves that every scheduled cue occurred at its scheduled time.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ]
      }
    },
    "routes": {
      "title": "Two investigations behind one curtain",
      "location": "The backstage noticeboard",
      "body": [
        "Shah gives the theater two practical tasks. Nell, the sound engineer, can open the equipment records with Owen. Etta, the volunteer bookkeeper, can gather the financial papers while Beth helps arrange witness interviews. You may accompany one team; the officer will keep the other team’s work separate until it is checked. Joining a team is a commitment to a method, not a declaration of whom to suspect.",
        "The technical route goes through clock references, recordings, access controls, and an evidence chain. The witness route goes out through the foyer and into the company’s guarded accounts, borrowed clothes, and remembered conversations. Neither route is a shortcut to a dramatic accusation. Both must eventually account for where a person could be, what independently places them there, and what the person later admits or denies under proper questioning.",
        "You look once toward the seats. Someone has left a folded program on every other chair. Earlier those programs promised a story with a satisfying end. The people waiting backstage are entitled to something more careful than satisfaction."
      ],
      "choices": [
        {
          "id": "technical",
          "label": "Join Nell and Owen among the theater’s machinery",
          "to": "tech-1",
          "excludesFlags": [
            "witness-route"
          ]
        },
        {
          "id": "witness",
          "label": "Join Beth and Etta to follow the witnesses and accounts",
          "to": "people-1",
          "excludesFlags": [
            "technical-route"
          ]
        }
      ]
    },
    "tech-1": {
      "title": "Three clocks and one missing reference",
      "location": "The lighting gallery",
      "body": [
        "Nell Armitage opens the gallery with the officer’s permission and begins with a detail Owen had not noticed: the office clock and the box-office clock do not agree. The office clock is an old wall instrument that loses time when the building’s heating changes. The sound controller uses a separate crystal clock. A printed program gives only the planned interval, not an independent time measurement.",
        "The office clock currently reads 8:47 while Nell’s controller reads 8:50. A photograph taken at the start of the evening shows the office clock reading 7:27 beside a radio-controlled wristwatch reading 7:30. The discrepancy was already three minutes before the interval. Owen has not reset the wall clock since lunchtime, and its minute hand has not stopped.",
        "Shah does not ask you to make the murder interval look precise beyond what the observations support. He asks you to translate the two witnessed office-clock readings into the controller’s reference, then keep a note of the three-minute calibration’s limits. A repaired clock tomorrow will not retrospectively improve tonight’s observations."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-1-observation"
      ],
      "meets": [
        "nell"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "tech-1-record"
        }
      ],
      "setFlags": [
        "technical-route"
      ]
    },
    "tech-1-record": {
      "title": "The reference that can be checked",
      "location": "The controller desk",
      "body": [
        "Nell prints the sound controller’s synchronization record. It received its time reference at 8:00 and recorded no later adjustment. A stage-door camera displayed 8:34 when its own synchronization check was compared with that reference at 8:35. The camera therefore reads one minute slow. These are corrections in different directions applied to different devices, not a reason to add every number on the page together.",
        "Owen’s last conversation with Fane at office-clock 8:31 belongs at controller 8:34. His discovery at office-clock 8:39 belongs at controller 8:42. The preliminary investigation interval is eight minutes on either scale, but its location in the evening moves. A camera image labeled 8:36 belongs at controller 8:37, not 8:33 or 8:39.",
        "Nell provides three versions of the running order: a rehearsal plan, an amended opening-night plan, and the controller’s actual-event log. Only the last says what the controller registered doing. The plans are useful for identifying intended equipment states, provided you do not promote intention into a witnessed act."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "tech-1-question",
          "requires": [
            "tech-1-observation",
            "tech-1-document"
          ]
        }
      ]
    },
    "tech-1-question": {
      "title": "A question worth getting right",
      "location": "The controller desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The technical investigation",
      "puzzle": {
        "prompt": "Which translation uses the documented corrections consistently?",
        "options": [
          {
            "id": "translate",
            "label": "Owen’s window is controller 8:34–8:42; a camera image labeled 8:36 corresponds to controller 8:37.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "subtract",
            "label": "Owen’s window is controller 8:28–8:36; camera 8:36 means controller 8:35.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "same",
            "label": "All devices use 8:31–8:39 because the program prints those times.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "average",
            "label": "Average all the clocks and treat the result as the time each person was seen.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "tech-1-finding"
      }
    },
    "tech-1-finding": {
      "title": "A finding you can defend",
      "location": "The controller desk",
      "body": [
        "You write each device’s correction beside its name. The evidence does not establish a precise minute of death. It establishes a reference in which later events can be compared without quietly moving a witness to another part of the building. Shah accepts the table and marks it preliminary pending the formal examination.",
        "Owen crosses out the single heading TIME above his notebook and replaces it with SOURCE CLOCK and CONVERTED REFERENCE. He looks embarrassed by the length of the new heading. Nell tells him longer headings are cheaper than shorter investigations into the wrong person. The joke lands gently enough that he can keep writing."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "tech-1-next"
        }
      ]
    },
    "tech-1-next": {
      "title": "The investigation moves forward",
      "location": "The lighting gallery",
      "body": [
        "A reel in the sound booth carries Mara’s name. That alone is unsurprising: she records interval notices for touring performances and keeps a live microphone available in case the notices change. Nell has both facilities and does not want either confused with the other.",
        "Before leaving the gallery, she locks the clock controller and gives its printout to Shah’s evidence clerk. You take only a working copy into the booth. On the stairs, Owen remembers a paper rustle in the announcement. He is certain he heard it tonight, but not certain whether he heard it before. Your next task will distinguish a recognizable voice from a particular performance of that voice."
      ],
      "routeLabel": "The technical investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "tech-2",
          "requires": [
            "tech-1-deduction"
          ]
        }
      ]
    },
    "tech-2": {
      "title": "A voice with more than one version",
      "location": "The sound booth",
      "body": [
        "There are three announcement sources in the booth. Reel A contains Mara’s rehearsal notice. Reel B contains a revised opening-night notice. The live microphone is connected through a channel that registers a red key light while it is open. Both reels use Mara’s voice, so recognizing her voice does not select among them.",
        "Nell plays short supervised samples rather than running either original through the building’s public-address system. Reel A says “the west passage” and has no cough. Reel B says “the side passage,” followed by a little cough and a paper rustle two seconds later. An audience member’s phone recording, supplied voluntarily to Shah, contains “the side passage,” the cough, and the same rustle at the same relative spacing.",
        "That match suggests a repeated performance, but it needs a chain of evidence. A recording made after the interval could contain tonight’s live speech. Nell therefore retrieves the seal and change log for Reel B. The question is not whether a machine can replay a voice; everybody in this theater already knows that. It is whether the particular source existed before the claimed live speech."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-2-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "tech-2-record"
        }
      ]
    },
    "tech-2-record": {
      "title": "A seal before the house opened",
      "location": "The tape-storage cabinet",
      "body": [
        "Nell’s signed change log says she revised Reel B at 6:10, tested it at 6:14, and placed it in the interval player under numbered seal 147 at 6:20. A front-of-house volunteer countersigned the seal at 6:25. The seal remains intact when Shah opens the cabinet with Nell present. Reel B’s opening section contains the same cough and rustle as the phone recording.",
        "The controller’s actual-event log starts PLAYER B at 8:36 controller time and ends it at 8:41. It records no live-microphone key event during that period. The log is not a camera; a person could still have stood silently in the booth. But the recording, its earlier seal, and the registered source together contradict the specific claim that the audience heard Mara speaking those words live throughout those five minutes.",
        "Shah asks you to select evidence for that narrow conclusion. A director’s stressful finances may matter later, but they cannot identify which electrical source drove a loudspeaker. Keeping those tasks apart will stop the investigation from using every suspicious fact to prove every other suspicious fact."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "tech-2-question",
          "requires": [
            "tech-2-observation",
            "tech-2-document"
          ]
        }
      ]
    },
    "tech-2-question": {
      "title": "A question worth getting right",
      "location": "The tape-storage cabinet",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The technical investigation",
      "puzzle": {
        "prompt": "Which two observations directly challenge the claim that this was a fresh live announcement?",
        "options": [
          {
            "id": "performance",
            "label": "The phone recording matches Reel B’s wording, cough, and rustle at the same relative intervals.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "prior",
            "label": "Reel B was sealed before the performance, and the actual log selects Player B rather than the live microphone.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "name",
            "label": "Mara’s name appears on more than one recording box.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "money",
            "label": "The company was short of money, so every announcement must have been recorded.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "tech-2-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "tech-2-finding": {
      "title": "A finding you can defend",
      "location": "The tape-storage cabinet",
      "body": [
        "You record that the audience heard the earlier recorded performance. That removes a particular kind of alibi; it does not yet put Mara in Fane’s office. Nell emphasizes that a machine taking over one job only creates an opportunity for its operator to do another. The next evidence must establish whether the opportunity was used.",
        "The correct finding also changes how Owen remembers the interval. He had filled the booth in his mind with the person whose voice filled the foyer. Now he draws an empty rectangle around it and writes OCCUPANCY NOT ESTABLISHED. Shah photographs the corrected working table so that the reasoning’s change is as visible as its latest conclusion."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "tech-2-next"
        }
      ]
    },
    "tech-2-next": {
      "title": "The investigation moves forward",
      "location": "The sound booth",
      "body": [
        "The shortest route from the booth to the office passes through the fire-curtain service lobby. Owen says he could not have used it while moving the audience because a safety interlock closed the public side. A printed route plan seems at first to support him. Nell turns the plan over: its legend distinguishes a public door from a separate staff service door.",
        "You follow the officer’s approved route to the lobby without entering the protected office. The architecture will test more than walking time. It will show which sort of key opens which door and whether a closed public passage actually made the corridor inaccessible to everyone."
      ],
      "routeLabel": "The technical investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "tech-3",
          "requires": [
            "tech-2-deduction"
          ]
        }
      ]
    },
    "tech-3": {
      "title": "A closed passage with a second door",
      "location": "The fire-curtain service lobby",
      "body": [
        "The public door has an electromagnetic catch tied to the failed exit-light circuit. It was held closed from 8:35 to 8:41 controller time while Owen moved patrons through the front foyer. A staff door beside it has a conventional lock and is not connected to that catch. The two doors are drawn alike on the tourist evacuation sketch, but differently on the current fire-service plan.",
        "The staff door can be opened by a numbered service key. Owen’s stage-manager key is number 2; Mara’s director’s key is number 4; Nell’s sound-cabinet key is number 9 and does not fit this door. The custodian has logged number 2 out for a locksmith’s adjustment since noon. Owen has been using a temporary foyer key, whose limited teeth open only the front desks.",
        "Those facts do not make a key holder guilty. They establish that a claimed barrier applies to a different door and that the available staff access was narrower than an all-purpose sketch suggests. Shah will check whether a key was lent; ownership in a register does not guarantee possession at every minute."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-3-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "tech-3-record"
        }
      ]
    },
    "tech-3-record": {
      "title": "The movement that a diagram permits",
      "location": "The caretaker’s access desk",
      "body": [
        "The caretaker’s job sheet records key 2 sealed at the locksmith’s bench at 12:10, with a signed collection for tomorrow morning. A photograph shows that seal intact at 8:15. Key 4 was issued to Mara at 6:00 and has not been returned. There is no signed loan entry. That absence cannot prove a key never left her hand, but it supplies a question she must answer.",
        "Nell times the permitted staff route with Shah walking beside her: forty-five seconds from booth to lobby, twenty seconds through the staff door to the office corridor. Walking that route twice plus a short stop fits within 8:36–8:41. Owen’s earlier statement that the corridor was “impossible during the announcement” is therefore too broad even if he was honestly describing the public door he watched.",
        "At the staff door, a duty attendant confirms hearing a key turn during the recorded announcement. The attendant saw no face. You label the sound as support for use of the door, not an identification. A good route reconstruction must explain what it makes possible and resist turning possibility into a confession."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-3-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "tech-3-question",
          "requires": [
            "tech-3-observation",
            "tech-3-document"
          ]
        }
      ]
    },
    "tech-3-question": {
      "title": "A question worth getting right",
      "location": "The caretaker’s access desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The technical investigation",
      "puzzle": {
        "prompt": "Which account correctly describes access during the recorded announcement?",
        "options": [
          {
            "id": "access",
            "label": "The public side was held closed, but a fitting staff key could permit a round trip; use and identity still need corroboration.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "impossible",
            "label": "No one could use any door because the public catch was engaged.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "owen",
            "label": "Owen’s usual ownership of key 2 proves he used it despite the documented seal.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "identity",
            "label": "The sound of a key turning identifies Mara without any further evidence.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "tech-3-finding"
      }
    },
    "tech-3-finding": {
      "title": "A finding you can defend",
      "location": "The caretaker’s access desk",
      "body": [
        "The staff route is possible within the common time reference. The fitting director’s key is documented as issued, while Owen’s usual key was sealed elsewhere. These are connected facts, but Shah keeps the last link open: who held and used the director’s key at the relevant time?",
        "Nell adds the walking trial’s conditions to her note. The route was clear when timed; it might have been slower if people or equipment blocked it. The stage plan records no such obstruction, but its absence should remain a limitation rather than a magical guarantee. You now have an investigated route, not a borrowed phrase like “nobody could get through.”"
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-3-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "tech-3-next"
        }
      ]
    },
    "tech-3-next": {
      "title": "The investigation moves forward",
      "location": "The fire-curtain service lobby",
      "body": [
        "In the lamp store, Kit Sorrell has been waiting with a folded work sheet. The apprentice wants to explain a peculiar signal seen from the booth during the interval, but fears that an incorrect remembered color will make the account useless. Shah tells Kit to give the observation in their own words, with uncertainty left attached.",
        "The signal is related to the staff corridor, not the murder itself. Before interpreting it, you need to understand what the lamp circuit actually registers. Nell brings its maintenance diagram. Machines can mislead an investigation as easily as witnesses when their indicators are asked to mean more than they were built to mean."
      ],
      "routeLabel": "The technical investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "tech-4",
          "requires": [
            "tech-3-deduction"
          ]
        }
      ]
    },
    "tech-4": {
      "title": "What an amber lamp means",
      "location": "The lamp store",
      "body": [
        "Kit remembers the booth’s small amber corridor lamp glowing steadily during the announcement. Mara has suggested that this proves she remained there pressing the announcement control. Nell’s diagram does not support that interpretation. The lamp is driven by the staff-door contact, not by a hand on the microphone or the announcement player.",
        "Its printed key gives three states: dark means staff door closed; amber steady means staff door open; amber flashing means the maintenance test bridge is inserted. The bridge is a physical plug kept in a sealed service wallet. The wallet seal was photographed intact at 8:10 and remains intact at inspection. A maintenance log records a brief flashing test at 5:40, hours before the interval.",
        "Kit can describe the steady light but cannot reliably remember its exact start minute. Rather than reject the witness for that honest limitation, Nell checks the controller’s stored contact changes. A small machine record can supplement a human account, provided the two are not secretly the same source copied twice."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-4-observation"
      ],
      "meets": [
        "kit"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "tech-4-record"
        }
      ]
    },
    "tech-4-record": {
      "title": "Contact changes and independent observation",
      "location": "The electrical records table",
      "body": [
        "The contact logger shows STAFF DOOR OPEN at 8:37:02 and CLOSED at 8:38:11 controller time. Kit’s handwritten task sheet was signed by an usher at 8:38 after a bulb delivery, and beside it Kit had written “amber kept on while I waited.” The note was made before the death was announced; it is not an account adapted after hearing other people’s theories.",
        "The logger does not identify the person at the door. Nor does a steady lamp establish how long anyone stood in the booth. But it places staff-door use inside both the translated investigation window and the recorded-announcement period. The intact test-wallet seal makes the maintenance-test explanation less plausible, and the observed steady rather than flashing state points the same way.",
        "Shah gives Kit time to read the written account back. A clerk adds the correction that Kit was at the lamp-store hatch, not inside the booth. The correction matters: a person can truthfully observe an indicator without seeing the equipment or person that produced the underlying event."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-4-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "tech-4-question",
          "requires": [
            "tech-4-observation",
            "tech-4-document"
          ]
        }
      ]
    },
    "tech-4-question": {
      "title": "A question worth getting right",
      "location": "The electrical records table",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The technical investigation",
      "puzzle": {
        "prompt": "Select the two conclusions directly supported by the lamp system and its independent records.",
        "options": [
          {
            "id": "door",
            "label": "The staff door was recorded open 8:37:02–8:38:11, consistent with Kit’s earlier steady-amber note.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "limit",
            "label": "The lamp registers a door state; it cannot establish that Mara continuously pressed a booth control.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "operator",
            "label": "Any steady lamp proves a particular person’s hand was on the live microphone.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "test",
            "label": "The 5:40 flashing test proves the interval lamp observation was the same test.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "tech-4-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "tech-4-finding": {
      "title": "A finding you can defend",
      "location": "The electrical records table",
      "body": [
        "You replace Mara’s suggested interpretation with the indicator’s actual purpose. The door-contact interval now gives the route reconstruction a firmer anchor. It still does not identify the user, and you make sure that caution survives into the short summary Shah will read first.",
        "Kit watches the clerk cross out one wrong location and add the right one without discarding the rest of the statement. The apprentice seems surprised that accuracy can improve an account instead of merely disqualifying it. Nell asks Kit to keep the original task sheet. The case is acquiring an evidentiary chain, and the chain needs the unpolished documents from which it was made."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-4-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "tech-4-next"
        }
      ]
    },
    "tech-4-next": {
      "title": "The investigation moves forward",
      "location": "The lamp store",
      "body": [
        "Shah’s evidence officer is ready to document the green button. It has been visible near the office threshold since discovery, but nobody on your team has handled it. The officer photographs its position, seals it, and records its movement to a comparison tray. The working copy of that record accompanies you to the wardrobe archive.",
        "Owen admits he had nearly treated the button as a solved identification at the beginning. After the clocks, recordings, locks, and lamps, you are less tempted. Clothes are borrowed in a theater; photographs can be old; a button can be loose for days. This particular item must earn its place in the account."
      ],
      "routeLabel": "The technical investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "tech-5",
          "requires": [
            "tech-4-deduction"
          ]
        }
      ]
    },
    "tech-5": {
      "title": "A coat with a complicated evening",
      "location": "The wardrobe archive",
      "body": [
        "The green button has a crescent-shaped chip beside its lower hole. In the wardrobe archive, a continuity photograph taken before curtain-up shows the same chip on Mara’s coat. That is a stronger comparison than simply calling both objects green. But a ledger shows the coat was borrowed by Iris for an outdoor publicity portrait earlier in the afternoon. The person who owned it and the person who wore it are not always the same.",
        "The publicity photographer returns the camera card to Shah. The final portrait is timed 6:42 by a camera synchronized at 6:00. At 6:50 a wardrobe assistant signed the coat back into Mara’s office, and an image taken at 7:55 shows Mara wearing it with all its front buttons attached. Iris’s stage costume at interval is a plain black jacket without enamel fittings.",
        "The button is therefore a physical connection worth taking seriously, but its chain has boundaries. You need a dated condition before the relevant interval, a condition after it, and reliable custody of the recovered item. Finding a garment’s owner in a wardrobe index supplies none of those by itself."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-5-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "tech-5-record"
        }
      ]
    },
    "tech-5-record": {
      "title": "Before and after are both needed",
      "location": "The officer’s comparison tray",
      "body": [
        "The evidence officer compares the sealed button with the continuity photographs and a spare from the wardrobe box. The chipped detail matches the before-performance image. In a police photograph made at 8:47 controller time, Mara’s coat is missing that button, exposing a short thread beneath the old hole. The comparison is recorded without asking the theater team to touch either original.",
        "A tempting counterargument says Iris’s afternoon use explains the button in the office. It explains why Iris had access to the coat at 6:42, but it does not explain the attached button on Mara at 7:55 and its absence afterward. A second counterargument claims the button by itself proves the fatal act. It establishes a garment-related connection in a bounded period, not everything done by the person who wore it.",
        "Shah asks you to select the conclusion that neither minimizes the chain nor stretches it. You can hold a real physical connection alongside the continuing need for independent identification of the corridor user. Evidence does not become stronger when one item is forced to do every job."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-5-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "tech-5-question",
          "requires": [
            "tech-5-observation",
            "tech-5-document"
          ]
        }
      ]
    },
    "tech-5-question": {
      "title": "A question worth getting right",
      "location": "The officer’s comparison tray",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The technical investigation",
      "puzzle": {
        "prompt": "Which account respects both the coat’s documented borrowing and the button’s changing condition?",
        "options": [
          {
            "id": "bounded",
            "label": "The button connects the coat to the office after a documented attached condition at 7:55; the afternoon borrowing does not by itself explain that later loss.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "iris",
            "label": "Iris wore the coat hours earlier, so no later coat evidence can matter.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "owner",
            "label": "The wardrobe owner’s name alone establishes who committed the fatal act.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "discard",
            "label": "A borrowed garment can never provide a useful physical connection.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "tech-5-finding"
      }
    },
    "tech-5-finding": {
      "title": "A finding you can defend",
      "location": "The officer’s comparison tray",
      "body": [
        "The button enters the reconstruction as a bounded physical link. It is not a substitute for the access records, and it is not erased by an earlier loan that ended before the documented intact condition. Shah has the original item, its retrieval record, and the relevant photographs; your notes identify which inference each supports.",
        "Owen returns the publicity photograph to its labeled sleeve. He has stopped describing awkward facts as distractions. The borrowing was awkward precisely because it tested an attractive early theory. An account that survives that test will be better than the one the theater could have told in its first frightened ten minutes."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-5-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "tech-5-next"
        }
      ]
    },
    "tech-5-next": {
      "title": "The investigation moves forward",
      "location": "The wardrobe archive",
      "body": [
        "Nell has one more independent source. The failed foyer exit light caused a patron to photograph the side corridor while waiting for directions. The camera captured a reflection in a glass noticeboard, not a clear portrait. It may or may not identify the person whose movements the equipment registered.",
        "The officer obtains the original image and its voluntarily supplied file history. You meet the patron in the foyer with Shah rather than downloading a cropped copy circulating among the company. A blurred image can be made persuasive by a caption. Your next job is to find out what the original actually supports before anybody supplies it with a name."
      ],
      "routeLabel": "The technical investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "tech-6",
          "requires": [
            "tech-5-deduction"
          ]
        }
      ]
    },
    "tech-6": {
      "title": "A reflection without a helpful caption",
      "location": "The front foyer",
      "body": [
        "The original phone photograph is wider than the copy passed around backstage. It shows a patron’s umbrella, the failed exit-light sign, and the glass noticeboard reflecting a staff corridor. A figure in a dark coat holds a pale document wallet. The image time is 8:36:25 on the device, which the officer verifies as one minute slow against the controller reference. The photograph therefore belongs at 8:37:25, inside the staff-door interval.",
        "The face is not sharp enough to identify. The distinctive feature is a white diagonal repair on the document wallet, visible beneath the figure’s hand. Mara’s office inventory lists a wallet repaired that morning by the stage workshop. But inventories describe property too, and property can be borrowed. Nell insists on checking the repair worker’s account rather than letting a matching shape turn into a face.",
        "The uncropped image also shows the figure moving toward the office corridor. The direction comes from two fixed signs visible in the reflection. If the image were read as a direct view, the direction would reverse. Your clock table will be useless if the geometry is silently inverted."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-6-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "tech-6-record"
        }
      ]
    },
    "tech-6-record": {
      "title": "The source behind the repair",
      "location": "The stage workshop",
      "body": [
        "Kit shows Shah the repair request, countersigned by Mara at 7:40 when she collected the wallet. A workshop photograph taken then shows the fresh white diagonal stitching. The wallet is the one Mara brings to her later police interview; it contains Fane’s unsigned account demand and the director’s appointment sheet.",
        "At 8:32 Beth, the usher, saw Mara carrying that same repaired wallet at the booth stairs. Beth did not see the subsequent corridor movement and says so. The phone image at 8:37:25 shows the repaired wallet moving toward the office through the reflected corridor. Mara’s account claims the wallet stayed with her throughout the interval. Those statements are now in conflict in a way that can be put to her directly.",
        "The materials still do not make a face appear in the photograph. The proper conclusion rests on a conjunction: a timed reflected movement, a traceable distinctive object, a current possession record, and a claim of uninterrupted possession. Shah can ask whether Mara lent the wallet, whether her location account is wrong, or whether another explanation fits all those particulars."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-6-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "tech-6-question",
          "requires": [
            "tech-6-observation",
            "tech-6-document"
          ]
        }
      ]
    },
    "tech-6-question": {
      "title": "A question worth getting right",
      "location": "The stage workshop",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The technical investigation",
      "puzzle": {
        "prompt": "Which observations, taken together, justify challenging Mara’s continuous-booth account?",
        "options": [
          {
            "id": "timed",
            "label": "A correctly converted 8:37:25 image shows the distinctive repaired wallet moving toward the office during the staff-door opening.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "possession",
            "label": "Mara collected the repaired wallet before the interval and claims she kept it with her throughout.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "face",
            "label": "The blurred reflection supplies a sharp facial identification.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "reverse",
            "label": "Treat the reflected corridor as a direct view and reverse the movement without checking fixed signs.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "tech-6-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "tech-6-finding": {
      "title": "A finding you can defend",
      "location": "The stage workshop",
      "body": [
        "Shah can now put a specific contradiction to Mara without pretending the photograph does more than it does. If she maintained continuous possession of the wallet, its recorded movement conflicts with her claimed continuous presence in the booth. If she revises the possession account, the revision can be checked against the earlier collection record and Beth’s limited observation.",
        "Mara asks for her solicitor and a private interview, which Shah arranges. Your contribution is the sourced question, not pressure to bypass a safeguard. Nell looks at the photograph again without its circulating caption. It has become less theatrically impressive and much more useful."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-6-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "tech-6-next"
        }
      ]
    },
    "tech-6-next": {
      "title": "The investigation moves forward",
      "location": "The front foyer",
      "body": [
        "The last technical reconstruction takes place at the prompt desk, where the first entries are still visible. Etta, the bookkeeper, supplies a police copy of the appointment request Fane left for Mara. Its reference matches the wallet demand, but its existence is treated as a possible reason for a meeting, not proof of what happened inside the room.",
        "You have reached the stage where the records must be put in order rather than merely collected. A solved technical case will have to survive the best innocent explanation for each item, including prerecorded announcements, borrowed clothes, imperfect photographs, and legitimate reasons to visit an office. The question is whether one account explains their conjunction without contradicting its own claims."
      ],
      "routeLabel": "The technical investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "tech-7",
          "requires": [
            "tech-6-deduction"
          ]
        }
      ]
    },
    "tech-7": {
      "title": "A reconstruction that can be tested",
      "location": "The prompt desk",
      "body": [
        "You lay out the findings in controller time. Owen’s observations establish the preliminary 8:34–8:42 window. Player B ran 8:36–8:41. The staff door opened 8:37:02 and closed 8:38:11. The reflected wallet movement belongs at 8:37. A documented coat button was attached before the performance and absent afterward; the recovered item has a police chain of custody.",
        "Mara’s original account has three linked claims: the announcement was live, she remained at the microphone, and the wallet stayed in her possession. The first conflicts with the sealed recording and source log. The second has lost its support from the amber lamp, which registers the door. The third creates a specific conflict with the correctly timed photograph. None of these alone is equivalent to witnessing the fatal act.",
        "Shah asks you to prepare the account as questions and evidence, not as a theatrical final speech. An officer still has to establish the act, circumstances, and responsibility through the formal investigation. The theater’s financial history supplies a reason to ask about a meeting, but motive should not be allowed to repair a broken timeline."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-7-observation"
      ],
      "meets": [
        "etta"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "tech-7-record"
        }
      ]
    },
    "tech-7-record": {
      "title": "The interview record and the final choice",
      "location": "The officers’ temporary interview room",
      "body": [
        "With her solicitor present, Mara corrects her account. She left Player B running, took her wallet through the staff door, and met Fane during the interval. She had been told he would withdraw the company’s funding and publish his account allegations the following morning. She admits a confrontation in which she fatally attacked him. The admission is recorded by the police, not extracted by the company or supplied by your interpretation of a blurred photograph.",
        "Shah asks you to identify which parts of that statement are independently corroborated before the interview detail enters the final case record. A confession should not make the earlier evidence unnecessary. The sound log, contact log, reflected movement, item chain, and dated financial demand can test relevant parts of the admission. Its existence does not retrospectively sharpen the face in the phone photograph or make an unobserved minute observable.",
        "The final deduction concerns the account you will sign. It must preserve the proper relationship between inference, physical evidence, and the later admission. Owen has already shown the first draft to the officer; the exact wording will matter when people remember the case months from now."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-7-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "tech-7-question",
          "requires": [
            "tech-7-observation",
            "tech-7-document"
          ]
        }
      ]
    },
    "tech-7-question": {
      "title": "A question worth getting right",
      "location": "The officers’ temporary interview room",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The technical investigation",
      "puzzle": {
        "prompt": "Which signed account keeps the independent evidence and later admission in their proper roles?",
        "options": [
          {
            "id": "reconstruction",
            "label": "The records contradict the continuous-booth alibi and corroborate an office visit; the later safeguarded admission establishes the fatal confrontation, with each source’s limits retained.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "button-only",
            "label": "The button alone established the entire murder before any interview was needed.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "confession-only",
            "label": "The admission makes the clock corrections and physical evidence irrelevant and safe to discard.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "motive-only",
            "label": "Financial pressure proves the act regardless of the movement and access evidence.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "tech-7-finding"
      }
    },
    "tech-7-finding": {
      "title": "A finding you can defend",
      "location": "The officers’ temporary interview room",
      "body": [
        "Shah accepts the sourced reconstruction. It does not turn the recorded announcement into proof that Mara was everywhere else, or the blurred photograph into a clear face. It links independent findings to the parts of the admission they can test and leaves the formal account of the fatal act with the officer who recorded it.",
        "Owen reads the section about his wall clock twice. Nobody treats the correction as evidence that he tried to mislead you. He had supplied a source and allowed it to be checked. The distinction is small enough to miss in a dramatic version of the evening and important enough to keep in the real one."
      ],
      "routeLabel": "The technical investigation",
      "clues": [
        "tech-7-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "tech-7-next"
        }
      ]
    },
    "tech-7-next": {
      "title": "The investigation moves forward",
      "location": "The prompt desk",
      "body": [
        "The company waits in the foyer while Shah finishes the interviews. Nell returns the working copies to their labeled sleeves, and Kit has the number of the officer who may ask about the original task sheet. The theater has not become less complicated because the case has a coherent account. Jobs, friendships, and a season of promised performances still have to be considered by people entitled to more than a verdict.",
        "Iris asks whether your review will mention the play at all. You say the review can wait. She nods, then helps Owen stack the cups that have accumulated on the prompt desk. Your route has followed machinery and records, but it ends among the people who will have to live after the machinery falls quiet."
      ],
      "routeLabel": "The technical investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "tech-ending",
          "requires": [
            "tech-7-deduction"
          ]
        }
      ]
    },
    "tech-ending": {
      "title": "After the house lights",
      "location": "The quiet front foyer",
      "body": [
        "The theater’s clock is left three minutes slow until an authorized photograph has finished recording its condition. It is a curious courtesy to the truth: even a harmless repair has to wait until its old error can be understood. Nell puts a note beside it rather than turning the hands.",
        "Mara leaves with Shah after the formal procedures are complete. The company will have to meet without her, and its future is not settled by solving the death of its backer. Iris sits on the stairs, finally out of costume. Owen opens a side door to let the night air into the foyer. Nobody asks for applause. You close the notebook before helping carry the cups downstairs."
      ],
      "ending": {
        "title": "Case closed: the account behind the performance",
        "body": [
          "Your technical route dismantled a false live alibi through clock calibration, source comparison, access constraints, indicator interpretation, object custody, and independently timed movement. The later admission was recorded with safeguards and checked against those findings. The evidence goes forward as a sourced reconstruction, not a stage illusion that merely sounds convincing."
        ],
        "kind": "solved"
      }
    },
    "people-1": {
      "title": "An alibi made of other people’s minutes",
      "location": "The front-door vestibule",
      "body": [
        "Beth Lane is still wearing the usher’s little black waistcoat, though its pockets now hold witness-contact cards instead of seat numbers. She asks to speak away from the company’s noticeboard. A witness account made beside a growing collection of theories can become an account of the noticeboard rather than the evening.",
        "Iris joins you at the vestibule, where they stood during the interval. She admits threatening to leave the production after Fane proposed canceling the run. Several people heard her anger. She does not ask you to make the argument disappear; she asks you to check where she was afterward. Beth says Iris helped a patron waiting for an accessible taxi. Beth watched the front doors, not the backstage office.",
        "Beth’s clock was the box-office reference, checked against the radio-controlled wristwatch at 8:00. Her log has Iris in continuous company from 8:32 to 8:43. Owen’s office wall clock was three minutes slow: his last conversation at 8:31 wall time belongs at 8:34 on this reference, and discovery at 8:39 belongs at 8:42. A continuous account on the correct scale covers that window. An angry argument hours earlier does not move a person out of it."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-1-observation"
      ],
      "meets": [
        "beth",
        "iris"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "people-1-record"
        }
      ],
      "setFlags": [
        "witness-route"
      ]
    },
    "people-1-record": {
      "title": "The control that makes continuous mean something",
      "location": "The taxi call desk",
      "body": [
        "The taxi dispatcher’s time-stamped record shows a failed first collection at 8:35 and a corrected accessible vehicle assigned at 8:40. Beth made both calls while Iris and the patron waited beside her. The patron identifies Iris and confirms they spoke throughout about a missing umbrella; a door-camera sequence shows the group in place at 8:34,8:37,8:40,and 8:42.",
        "No single still image proves uninterrupted presence. Here the images check an account supplied independently by Beth and the patron, and the two calls anchor its reference time. Beth is careful about the limit: she did not watch every movement of every theater worker. Her account concerns Iris at the front doors, not Mara at the booth or Owen in the side passage.",
        "Iris has a reason to be believed that is better than being pleasant. Her account can be checked against sources she did not control. Your finding should distinguish a documented alibi from a character judgment, without requiring her to have been unreasonably cheerful about the cancellation threat."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "people-1-question",
          "requires": [
            "people-1-observation",
            "people-1-document"
          ]
        }
      ]
    },
    "people-1-question": {
      "title": "A question worth getting right",
      "location": "The taxi call desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The witness investigation",
      "puzzle": {
        "prompt": "Which two conclusions follow from the properly referenced vestibule evidence?",
        "options": [
          {
            "id": "covered",
            "label": "Independent continuous accounts, checked by calls and images, cover Iris during the translated 8:34–8:42 window.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "scope",
            "label": "Beth’s account places Iris at the front doors but does not place every other worker elsewhere.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "temper",
            "label": "An earlier angry argument outweighs all later location evidence.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "image",
            "label": "One still photograph by itself establishes uninterrupted presence for the entire interval.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "people-1-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "people-1-finding": {
      "title": "A finding you can defend",
      "location": "The taxi call desk",
      "body": [
        "You record the continuous account and its controls. Iris’s argument remains in the record as a fact about the earlier dispute; it does not become a substitute for the interval evidence. Shah notes that the finding can reduce suspicion of one person without establishing the guilt of another.",
        "Beth signs only what she can attest. Iris reads the part naming her and corrects one small detail: the patron’s umbrella was green, not blue. The color does not decide the case, but the correction shows why witnesses should see the words attributed to them. You keep the first draft and mark the revision rather than silently making everyone’s memories identical."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "people-1-next"
        }
      ]
    },
    "people-1-next": {
      "title": "The investigation moves forward",
      "location": "The front-door vestibule",
      "body": [
        "Etta Moon has waited with the account envelopes in the little cafe opposite the stage door. She did not want to discuss money within hearing of people whose wages depended on the same envelopes. When you arrive, she asks a question that sounds defensive until she explains it: “Do you want to know what the sums are, or which person is supposed to look bad beside them?”",
        "The company’s accounts have been described as altered. That word could mean a correction, a forgery, a late payment, or a deliberately deceptive entry. Before money can supply a motive, you need to establish what the actual documents record and who created which version."
      ],
      "routeLabel": "The witness investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "people-2",
          "requires": [
            "people-1-deduction"
          ]
        }
      ]
    },
    "people-2": {
      "title": "A corrected account and an accusation",
      "location": "The stage-door cafe",
      "body": [
        "Etta has three envelopes labeled RENT, LIGHTING, and TEMPORARY ADVANCE. Each contains an invoice, the bank transaction that paid it, and her own later note. A photocopy circulating backstage shows the rent amount twice, leading some people to call it a second payment to Mara. The original ledger shows a reversal beside the first line and a corrected supplier code beside the second.",
        "The bank statement contains one rent payment, to the landlord’s account. The temporary advance is a separate transfer from Mara’s personal account into the company’s account during a week when Fane delayed promised funding. Etta has written both the source and repayment terms. None of those facts proves every entry is sound, but they test the particular allegation being repeated in the corridor.",
        "Fane had demanded a private meeting with Mara about “irregular accounts.” Etta cannot tell you what he intended to say. She can tell you that the photocopy omits the reversal and its column heading. The omission might be an innocent bad copy; proving that a summary misleads is not the same as proving who deliberately made it misleading."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-2-observation"
      ],
      "meets": [
        "etta"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "people-2-record"
        }
      ]
    },
    "people-2-record": {
      "title": "Follow the value, then the source",
      "location": "The bookkeeper’s workroom",
      "body": [
        "Etta puts the figures in a sequence. The first rent line debits 1200, the reversal credits 1200, and the corrected line debits 1200. The bank has one 1200 transfer to the landlord. The company therefore paid 1200, not 2400. Mara’s 900 advance entered on a different date and was recorded as a liability owed by the company, not a fee paid to its director.",
        "A later note from Fane demanded that Mara sign a statement accepting responsibility for a 2400 shortfall before he released the next grant installment. The statement’s figure repeats the defective photocopy. That creates a documented source of pressure; it does not establish that Fane believed the figure, that Mara accepted it, or that either person committed a fatal act because of it.",
        "Shah asks you to avoid two opposite mistakes. A false allegation does not make a confrontation imaginary. A real confrontation does not make the allegation true. The financial evidence can explain why a private meeting mattered while protecting the final account from a motive built out of arithmetic that never happened."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "people-2-question",
          "requires": [
            "people-2-observation",
            "people-2-document"
          ]
        }
      ]
    },
    "people-2-question": {
      "title": "A question worth getting right",
      "location": "The bookkeeper’s workroom",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The witness investigation",
      "puzzle": {
        "prompt": "Which account of the financial papers is supported?",
        "options": [
          {
            "id": "net",
            "label": "The rent’s net payment is 1200; the omitted reversal distorts the allegation, while Fane’s documented demand still supplies a source of pressure.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "double",
            "label": "Two debit lines establish two completed rent payments regardless of the credit and bank record.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "advance",
            "label": "Money Mara advanced to the company is proof the company secretly paid her a fee.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "innocent",
            "label": "Because the shortfall allegation is unsupported, no private confrontation could have occurred.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "people-2-finding"
      }
    },
    "people-2-finding": {
      "title": "A finding you can defend",
      "location": "The bookkeeper’s workroom",
      "body": [
        "You write the net calculation beside the original entries and preserve the defective copy as a source in its own right. It explains something different from the complete ledger: how a particular accusation could have acquired the appearance of a number.",
        "Etta looks relieved when you do not ask her to decide which person the arithmetic should condemn. She has supplied records, their provenance, and their limits. Shah takes the relevant originals through the evidence officer. Your working copy now distinguishes the alleged financial loss from the documented pressure surrounding it, a distinction the theater’s early theories had almost erased."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "people-2-next"
        }
      ]
    },
    "people-2-next": {
      "title": "The investigation moves forward",
      "location": "The stage-door cafe",
      "body": [
        "The stage-door cafe has a small noticeboard full of messages delivered to the company. One envelope bears Fane’s handwriting, but the paper inside is a draft Mara never sent. Etta found it in the accounts envelope after Fane’s death and wants you to establish its route before anyone calls it a threat delivered that evening.",
        "A local printshop copied the grant papers and retains a receipt book. With Shah’s permission you go there with Etta, leaving the protected originals with the officer. The next problem is not another sum. It is whether a piece of writing records a thought, a communication, or an appointment that someone actually received."
      ],
      "routeLabel": "The witness investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "people-3",
          "requires": [
            "people-2-deduction"
          ]
        }
      ]
    },
    "people-3": {
      "title": "A draft that did not travel",
      "location": "The closed printshop",
      "body": [
        "The printshop owner lets Etta collect a supervised copy of the receipt page. Mara brought a packet at 5:10 and asked for two copies of the grant correspondence. One loose page begins, “If you repeat this accusation, I will make the facts public.” It is dated yesterday and has corrections in Mara’s hand. There is no addressed envelope or postage record attached to it.",
        "A separate delivery receipt is signed at 7:20 by Fane. It describes a single appointment card collected from Mara’s office by the company runner. The card says, “After the interval announcement, in your office. Bring the original figures.” Its reference number matches the stub retained in Mara’s appointment book. The card, not the unsent draft, is the communication the runner can trace.",
        "The difference matters because the draft has a memorable angry sentence and the card has an unmemorable set of logistics. A dramatic line is easier to repeat. The logistical document is better evidence that a specific meeting was proposed, received, and scheduled in relation to the announcement."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-3-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "people-3-record"
        }
      ]
    },
    "people-3-record": {
      "title": "Which paper reached which person?",
      "location": "The printshop collection counter",
      "body": [
        "The runner’s signed account places the appointment card in Fane’s hand at 7:20. The runner did not carry the draft letter and did not attend the proposed meeting. A printshop order number connects the grant copies to Etta’s packet; it does not make every loose page in the packet a delivered message.",
        "The card’s phrase “after the interval announcement” can mean after the recorded notice begins or after it ends. You cannot choose the interpretation that best fits a preferred suspect without asking the sender and comparing actual movement evidence. The phrase at least establishes that the meeting was deliberately connected to that piece of the running order. Its exact intended start remains a question.",
        "Shah asks you to select the narrow but useful conclusion. A communication trail can corroborate the existence of an appointment without establishing attendance, intention to harm, or the contents of a later conversation. Those questions require other sources. Etta labels the draft UNSENT STATUS NOT INDEPENDENTLY ESTABLISHED rather than declaring that the absence of a postage record proves no other copy could exist."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-3-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "people-3-question",
          "requires": [
            "people-3-observation",
            "people-3-document"
          ]
        }
      ]
    },
    "people-3-question": {
      "title": "A question worth getting right",
      "location": "The printshop collection counter",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The witness investigation",
      "puzzle": {
        "prompt": "Select the two claims that the communication trail establishes without overreaching.",
        "options": [
          {
            "id": "card",
            "label": "A separately traceable appointment card was received by Fane at 7:20 and linked a meeting to the interval announcement.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "limits",
            "label": "The card establishes a proposed meeting, not attendance or the precise intended meaning of after.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "draft",
            "label": "The memorable draft sentence proves the runner delivered a threat that evening.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "intent",
            "label": "Any proposed financial meeting is proof that its sender intended a fatal confrontation.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "people-3-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "people-3-finding": {
      "title": "A finding you can defend",
      "location": "The printshop collection counter",
      "body": [
        "You keep the appointment and the draft in separate lines of the chronology. The anger on the draft may be relevant background, but it cannot impersonate a delivered statement simply because somebody placed the pages in one envelope later.",
        "The appointment trail gives Shah a concrete question for Mara: what did she mean by the timing, and did she attend? It also gives her a fair chance to answer a document she actually sent, rather than defend a version built out of the most quotable fragment found near it. Etta signs the provenance note and takes her own duplicate home only after the officer authorizes it."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-3-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "people-3-next"
        }
      ]
    },
    "people-3-next": {
      "title": "The investigation moves forward",
      "location": "The closed printshop",
      "body": [
        "At the wardrobe workroom, Beth has arranged for the afternoon clothing record to be checked. A green button was found in Fane’s room, and its coat appears in a publicity portrait of Iris. Someone has already offered that portrait as proof that Iris’s front-door alibi must be false.",
        "You have not spent three careful stages establishing sources merely to abandon the habit when a photograph looks persuasive. You go to the wardrobe worker with the appointment record in its own sleeve. One question concerns a meeting; the next concerns who wore a coat, when, and in what condition. Neither sleeve gets to answer for the other."
      ],
      "routeLabel": "The witness investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "people-4",
          "requires": [
            "people-3-deduction"
          ]
        }
      ]
    },
    "people-4": {
      "title": "The person in the photograph",
      "location": "The wardrobe workroom",
      "body": [
        "The publicity portrait does show Iris wearing Mara’s coat. The green enamel buttons are easy to recognize, and Iris is not denying the loan. The portrait was made at 6:42 and the wardrobe return was signed at 6:50. A second image taken at 7:55 shows Mara wearing the coat, its chipped lower button still attached.",
        "Beth asks the wardrobe assistant to describe ordinary procedure before discussing the suspected significance. A loan is entered when a garment leaves the rack; a return is entered only when the assistant has checked it. The 6:50 return includes a condition box marked complete. These are routine records created before the office was discovered, not a chain assembled to rescue or accuse someone afterward.",
        "The recovered button remains with Shah’s evidence officer. You inspect authorized comparison photographs showing its crescent chip and the same chip in the 7:55 image. A later police photograph shows a fresh gap on Mara’s coat. The loan explains an afternoon image. It does not explain the later attached condition or the subsequent loss."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-4-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "people-4-record"
        }
      ]
    },
    "people-4-record": {
      "title": "An interval account remains an interval account",
      "location": "The small costume store",
      "body": [
        "The assistant brings Iris’s actual interval costume: a plain black jacket from a labeled rack, without any enamel fittings. Beth and the waiting patron saw her in that jacket at the front doors. The door-camera images provide time checks for their continuous account. No one has to pretend Iris never wore the other coat in order to establish that she wore something else at the relevant time.",
        "Shah asks about alternatives. The button might have been planted after it fell elsewhere, but there is no current evidence of that additional sequence. Mara might have lent the coat again after 7:55, but a suggestion is not a record of a loan. Both possibilities can be asked about; neither should be adopted solely because it rescues or condemns a favorite person.",
        "Your finding needs two parts: the earlier portrait does not refute the current alibi, and the later garment connection remains worth investigating. An investigation is allowed to reject a bad accusation without becoming blind to an awkward fact attached to the same object."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-4-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "people-4-question",
          "requires": [
            "people-4-observation",
            "people-4-document"
          ]
        }
      ]
    },
    "people-4-question": {
      "title": "A question worth getting right",
      "location": "The small costume store",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The witness investigation",
      "puzzle": {
        "prompt": "Which account treats the loan and the interval evidence consistently?",
        "options": [
          {
            "id": "sequence",
            "label": "Iris’s documented afternoon loan does not defeat her later alibi; the attached button at 7:55 and subsequent loss create a separate, bounded link involving the coat.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "portrait",
            "label": "Anyone photographed wearing an item must be assumed to wear it throughout the evening.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "ignore",
            "label": "A verified alibi for Iris means no observation about the coat can matter.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "plant",
            "label": "An imaginable planting sequence must be treated as an established event without evidence.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "people-4-finding"
      }
    },
    "people-4-finding": {
      "title": "A finding you can defend",
      "location": "The small costume store",
      "body": [
        "The coat stays in the case, but the portrait stops doing work it cannot support. Beth notes that the wrong accusation had sounded particularly convincing because each of its individual ingredients was real: a portrait, a loan, a missing button, an argument. The error was in quietly removing their dates.",
        "Iris asks whether her name will still be mentioned in the final account. Shah explains that the earlier dispute and the checked alibi both belong there, with their proper scope. Protection from a false allegation does not require erasing the facts that made it reasonable to ask a question in the first place."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-4-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "people-4-next"
        }
      ]
    },
    "people-4-next": {
      "title": "The investigation moves forward",
      "location": "The wardrobe workroom",
      "body": [
        "Kit Sorrell has watched the wardrobe conversation from the door. The apprentice asks whether a witness is allowed to correct something said earlier to a friend. Kit had repeated a company rumor that everyone remained where the announcement made them seem to be. Since then, one remembered detail has stopped fitting.",
        "Shah arranges a quiet room and offers a support person who is not involved in the case. You attend only if Kit wants a second listener. The next location is a rehearsal room without a noticeboard or audience. The absence of an audience may matter more to this investigation than any piece of scenery the theater has built."
      ],
      "routeLabel": "The witness investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "people-5",
          "requires": [
            "people-4-deduction"
          ]
        }
      ]
    },
    "people-5": {
      "title": "A witness who can say I do not know",
      "location": "The small rehearsal room",
      "body": [
        "Kit begins by describing the work rather than a suspect. At interval the apprentice carried a replacement bulb from the lamp store to Beth’s desk. The staff corridor near Fane’s office was quiet. Kit heard Mara’s voice say, “We can finish this before anyone needs the figures,” followed by a lower voice saying, “Then bring the originals.” Kit did not see either face and cannot quote the rest of the exchange.",
        "The earlier rumor Kit repeated came from recognizing Mara’s recorded announcement in the foyer. Hearing the familiar voice from a loudspeaker had made the office-corridor voice seem like a memory from another moment. Kit now distinguishes the directions: the announcement came from the speaker above the stair; the short exchange came from behind the staff door.",
        "Kit is worried about losing the apprenticeship. Shah explains the process, records that concern, and does not promise an outcome he cannot control. The statement remains an account of sounds and words. The officer will ask whether the sounds are independently timed and whether another person could have been speaking. A frightened witness is not automatically right or automatically useless."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-5-observation"
      ],
      "meets": [
        "kit"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "people-5-record"
        }
      ]
    },
    "people-5-record": {
      "title": "The task record outside the interview",
      "location": "Beth’s collection desk",
      "body": [
        "Beth’s signed bulb-delivery slip places Kit at her desk at 8:38 on the checked box-office reference. Kit’s route from the lamp store passes the staff door less than a minute before that desk. An automatically stored contact record, obtained by the technical team, shows that staff door open 8:37:02–8:38:11 on the same reference. The task record was signed before the death was publicly announced.",
        "The technical team also supplies a carefully limited finding: the foyer announcement was a sealed earlier recording played by the controller, not a fresh live performance. It does not establish where Mara stood, but it explains why hearing her in the foyer cannot invalidate an independent voice account from another place. You receive the finding as a sourced team report, not something your route somehow observed without visiting the booth.",
        "Kit cannot uniquely identify the lower voice. Fane is a plausible speaker in his own office, but your statement must leave the uncertainty visible. The next question should seek corroboration of the content and location, not ask Kit to become more certain because certainty would fit the rest of the case."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-5-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "people-5-question",
          "requires": [
            "people-5-observation",
            "people-5-document"
          ]
        }
      ]
    },
    "people-5-question": {
      "title": "A question worth getting right",
      "location": "Beth’s collection desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The witness investigation",
      "puzzle": {
        "prompt": "Which two details provide legitimate corroboration without rewriting Kit’s account?",
        "options": [
          {
            "id": "task",
            "label": "The prior signed delivery and independently logged door opening fit the place and narrow time of Kit’s route.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "recording",
            "label": "The earlier recorded foyer announcement can coexist with a separately heard corridor exchange.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "face",
            "label": "Kit’s recognition of a voice can be rewritten as seeing both speakers’ faces.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "pressure",
            "label": "The account becomes stronger if Kit is promised a job in exchange for greater certainty.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "people-5-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "people-5-finding": {
      "title": "A finding you can defend",
      "location": "Beth’s collection desk",
      "body": [
        "The account gains support without gaining imaginary eyesight. Shah records the quoted words, the direction of the sound, the delivery reference, and the explicit uncertainty about the second speaker. Kit reads each part back. Where the first draft said “saw,” Kit corrects it to “heard” and signs the correction.",
        "Beth offers the apprentice tea without asking for the interesting details. That small restraint matters. A support person can help someone remain steady without turning care into a rehearsal of a preferred account. You send the corroboration sheet to Shah, whose questions now concern the original documents mentioned in the overheard exchange."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-5-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "people-5-next"
        }
      ]
    },
    "people-5-next": {
      "title": "The investigation moves forward",
      "location": "The small rehearsal room",
      "body": [
        "Etta has compared the phrase “bring the originals” with the appointment packet. The packet contains a courier receipt from the late afternoon and two carbon copies that differ in one reference number. A dramatic theory would call every difference a forgery. Etta wants to know whether the copies were made at different stages of an ordinary correction.",
        "You return to the company’s accounts annex, a plain room above the cafe rather than another backstage hiding place. The investigation has left the theater’s machinery behind, yet it keeps returning to the same discipline: establish when a record was made, what it was for, and which person can genuinely attest its next step."
      ],
      "routeLabel": "The witness investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "people-6",
          "requires": [
            "people-5-deduction"
          ]
        }
      ]
    },
    "people-6": {
      "title": "Two carbons and the same original",
      "location": "The accounts annex above the cafe",
      "body": [
        "The first carbon requests appointment packetR-18; the later carbon requestsR-81. Beside the later number Etta has written TRANSPOSED and her initials. The courier’s item manifest describes the packet by contents as well as number: original rent ledger extract, original bank advice, and Fane’s signed grant condition. The physical originals now with the officer match that contents list.",
        "A witness at the cafe remembers an angry visitor demanding “eighty-one” at half past eight. The description has turned the number error into a story about another secret packet. The cafe’s till roll records the visitor’s payment at 8:12, not 8:30. A delivery docket identifies the visitor as a printer collecting the corrected copy for the following morning. The witness had estimated the time after hearing the later office account.",
        "The visitor is not imaginary; the remembered minute and the inferred purpose are unreliable. Correcting those elements is important because an alternative suspect should not survive solely by borrowing a real person from an unrelated time. The original financial demand remains independently established through its signed condition, not through the cafe argument."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-6-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "people-6-record"
        }
      ]
    },
    "people-6-record": {
      "title": "Separate a witness correction from a convenient disappearance",
      "location": "The cafe’s records hatch",
      "body": [
        "Shah obtains the original docket and the till-roll segment rather than asking the cafe staff to tell the story again until it sounds right. The printer’s collection log shows arrival at the workshop at 8:23, after leaving the cafe. The route is consistent with the 8:12 payment and does not place the printer at the theater during the 8:34–8:42 investigation interval.",
        "The clerk admits writingR-81 before seeing Etta’s correction. The same error traveled from a carbon to a collection question; it need not identify a second missing packet. A separate contents check ties the actual originals to the officer’s evidence list. Those documents supply the context of the meeting without depending on an unreliable number copied through several hands.",
        "Mara has now supplied a revised account: she says she briefly approached the staff door to deliver papers but did not enter Fane’s room. That is a material change from continuous booth presence, not a resolution of the case. The appointment, heard exchange, corrected movement window, and garment link give Shah questions that can distinguish a paper delivery from the confrontation that followed."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-6-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "people-6-question",
          "requires": [
            "people-6-observation",
            "people-6-document"
          ]
        }
      ]
    },
    "people-6-question": {
      "title": "A question worth getting right",
      "location": "The cafe’s records hatch",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The witness investigation",
      "puzzle": {
        "prompt": "Which reconstruction best explains the carbon-number conflict and the cafe visitor?",
        "options": [
          {
            "id": "correction",
            "label": "A transposed reference traveled between copies; matched contents identify one packet, while independent till and collection times place the printer’s errand before the relevant interval.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "secret",
            "label": "Different printed numbers establish a second secret packet even when the contents and correction match.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "suspect",
            "label": "An estimated cafe memory overrides both timed commercial records and places the printer in the office.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "erase",
            "label": "Because part of the memory is wrong, the visitor and every paper connected to the cafe must be invented.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "people-6-finding"
      }
    },
    "people-6-finding": {
      "title": "A finding you can defend",
      "location": "The cafe’s records hatch",
      "body": [
        "You preserve the first carbon, the corrected copy, and the path by which the error traveled. Etta is grateful that the correction has not become a reason to discard the original. It is precisely the relationship between the versions that explains what people later thought they heard.",
        "Shah excludes the printer from the interval route on the available location evidence and retains the signed grant condition as a separate source. Mara’s revised delivery account goes into the record with its time, rather than quietly replacing the earlier continuous-booth claim. The investigation can now test a changing explanation without demanding that every innocent clerical mistake become a crime."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-6-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "people-6-next"
        }
      ]
    },
    "people-6-next": {
      "title": "The investigation moves forward",
      "location": "The accounts annex above the cafe",
      "body": [
        "The last interview takes place in the theater’s rehearsal office, with appropriate legal support and without the company waiting outside the door. Shah has the independent records, the witness statements in their original wording, and the full sequence of Mara’s accounts. He will ask the questions; you have been asked to prepare the sourced chronology the questions rely on.",
        "Beth takes Kit home with the officer’s contact details. Etta puts the remaining wages into envelopes that have nothing to do with the case. The company’s practical life continues while the formal account is prepared. You choose the facts that actually distinguish the explanations, rather than every sad or suspicious thing that happened during a difficult season."
      ],
      "routeLabel": "The witness investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "people-7",
          "requires": [
            "people-6-deduction"
          ]
        }
      ]
    },
    "people-7": {
      "title": "What changes when a story changes",
      "location": "The rehearsal office",
      "body": [
        "The timeline now has both events and versions of accounts. Iris’s earlier argument is real, but independent continuous evidence places her at the front doors during the relevant window. The financial shortfall as repeated backstage is unsupported, yet Fane’s signed demand and delivered appointment establish a confrontation worth asking about. The coat’s earlier loan does not explain its later changing condition. Kit’s voice account has independent timing support without acquiring imaginary faces.",
        "Mara first claimed continuous live speech from the booth. The sourced technical finding contradicts the live performance, and her own later account admits leaving the booth to deliver papers. That change is not itself proof of every subsequent act. It opens a narrower question: what happened after she reached the office corridor? The appointment, the heard exchange, the paper originals, and the bounded garment link are relevant to that question together.",
        "Shah asks you to keep people’s fear out of the role of evidence. Kit’s concern about employment, Iris’s anger, and Etta’s defensiveness explain the conditions under which statements were made. They should be recorded so that the statements can be evaluated fairly, not converted into personality tests that decide guilt."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-7-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "people-7-record"
        }
      ]
    },
    "people-7-record": {
      "title": "The formal account and its independent checks",
      "location": "The officers’ interview room",
      "body": [
        "With her solicitor present, Mara admits entering Fane’s room and fatally attacking him during the confrontation over the funding demand. The interview is formally recorded. She describes taking the repaired document wallet from the booth and using her service key while the recorded announcement played. The officer has independent technical records and item records with which to check those details.",
        "Your route did not need to impersonate the technical team. Its own contribution was a carefully referenced witness interval, a net financial calculation, a verified communication trail, a dated garment sequence, a supported voice account, and the removal of a plausible but mistimed alternative visitor. Those findings made a fair confrontation with changing accounts possible and gave the later admission a context the court could inspect.",
        "Shah gives you the draft summary to check for source inflation. In one sentence a clerk has written that Kit “saw Mara in the room.” Another says the angry draft was “delivered.” Both are stronger than the evidence allows. A solved case does not earn permission to leave those errors in place just because the overall conclusion now appears right."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-7-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "people-7-question",
          "requires": [
            "people-7-observation",
            "people-7-document"
          ]
        }
      ]
    },
    "people-7-question": {
      "title": "A question worth getting right",
      "location": "The officers’ interview room",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The witness investigation",
      "puzzle": {
        "prompt": "Which two corrections are essential before signing the final witness-route account?",
        "options": [
          {
            "id": "heard",
            "label": "Preserve Kit’s words as a heard exchange, with the second speaker and faces not directly identified.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "documents",
            "label": "Distinguish the traceable appointment from the draft; the later safeguarded admission, not a falsely promoted draft, establishes the fatal confrontation.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "certainty",
            "label": "Leave the stronger claims because a correct outcome makes source errors harmless.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "all-money",
            "label": "Describe the disproved 2400 shortfall as a true loss because it gives the final account a simpler motive.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "people-7-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "people-7-finding": {
      "title": "A finding you can defend",
      "location": "The officers’ interview room",
      "body": [
        "The summary is corrected before it is signed. Kit’s statement remains Kit’s statement, not an improved performance of what the case would have liked a witness to see. The draft remains a draft. The pressure document remains a real communication based on an unsupported allegation. Mara’s formal admission is recorded as a later source and checked against independent particulars.",
        "Shah thanks you for the corrections rather than treating them as an obstacle to the outcome. The account has become slower to tell, but it can be challenged without collapsing into a dispute over who remembers the most dramatic version. That is the purpose of the work you chose when you left the noticeboard for the front doors."
      ],
      "routeLabel": "The witness investigation",
      "clues": [
        "people-7-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "people-7-next"
        }
      ]
    },
    "people-7-next": {
      "title": "The investigation moves forward",
      "location": "The rehearsal office",
      "body": [
        "Beth returns to collect a scarf she left at the box office. She asks whether the apprentice’s name needs to be placed on the public notice announcing the canceled performances. Shah says no; the formal evidence record and a public audience notice have different purposes. The company will be told what it needs to know without turning a young worker into the evening’s next attraction.",
        "Etta is organizing a meeting about the next payroll and the future of the season. Iris volunteers to help without being asked to reassure everyone that all the damage has ended. You put the corrected chronology in its sleeve and walk with them to the foyer. A witness route ends with people still entitled to privacy after what they know has become important."
      ],
      "routeLabel": "The witness investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "people-ending",
          "requires": [
            "people-7-deduction"
          ]
        }
      ]
    },
    "people-ending": {
      "title": "An account without an audience",
      "location": "The theater foyer after midnight",
      "body": [
        "Beth takes down the canceled-show notice and replaces it with one that gives the ticket-refund number clearly. It says nothing about Kit’s statement or Iris’s earlier argument. Information that belongs in a formal case record does not automatically belong on a public wall.",
        "Mara has left with Shah. Etta and the company will meet tomorrow about the finances without pretending the unsupported shortfall was real. Iris helps Owen close the front doors. The foyer announcement player is silent for once, and the quiet no longer feels like a missing cue. You have followed a route through people who were afraid of being misread, and your last useful act is to leave their words no more dramatic than they actually were."
      ],
      "ending": {
        "title": "Case closed: the story the witnesses could defend",
        "body": [
          "Your witness route checked continuous alibis, financial pressure, document delivery, garment dates, and limited testimony. You resolved a convincing red herring and corrected an overstrong summary after the safeguarded admission established the fatal act. The formal case goes forward while the witnesses keep the privacy that a solved mystery does not erase."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "technical-reconstruction",
      "actions": [
        {
          "type": "choice",
          "id": "begin"
        },
        {
          "type": "choice",
          "id": "sort"
        },
        {
          "type": "answer",
          "id": [
            "boundary",
            "claims"
          ]
        },
        {
          "type": "choice",
          "id": "technical"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "translate"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "performance",
            "prior"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "access"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "door",
            "limit"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "bounded"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "timed",
            "possession"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "reconstruction"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    },
    {
      "id": "witness-reconstruction",
      "actions": [
        {
          "type": "choice",
          "id": "begin"
        },
        {
          "type": "choice",
          "id": "sort"
        },
        {
          "type": "answer",
          "id": [
            "boundary",
            "claims"
          ]
        },
        {
          "type": "choice",
          "id": "witness"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "covered",
            "scope"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "net"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "card",
            "limits"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "sequence"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "task",
            "recording"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "correction"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "heard",
            "documents"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    }
  ]
};
