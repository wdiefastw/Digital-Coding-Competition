export default {
  "id": "amber-hotel",
  "title": "The Amber Hotel",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "A borrowed brooch disappears during a wet evening at an old hotel. The clocks disagree, a key has the wrong meaning, and somebody is already writing a headline.",
  "setting": "A hotel with service passages, an unreliable lobby clock and a rain-soaked charity evening",
  "revision": 2,
  "flags": [
    "records-route",
    "witness-route"
  ],
  "characters": [
    {
      "id": "ruth",
      "name": "Ruth Bell",
      "role": "Guest and retiring auctioneer",
      "description": "Speaks carefully, but keeps an unexpectedly untidy notebook. She has brought one borrowed family brooch to a charity appraisal.",
      "color": "#ba946e"
    },
    {
      "id": "milo",
      "name": "Milo Chen",
      "role": "Night receptionist",
      "description": "A meticulous trainee who labels keys with paper tags while the brass machine is repaired.",
      "color": "#8fa99c"
    },
    {
      "id": "neve",
      "name": "Neve Holt",
      "role": "Conservator",
      "description": "Has come to inspect the hotel’s old wall paintings and is permanently short of clean pockets.",
      "color": "#ac95ad"
    },
    {
      "id": "tom",
      "name": "Tom Ferris",
      "role": "Maintenance porter",
      "description": "Carries a small notebook in which every repair is logged before he puts his tools away.",
      "color": "#a5a577"
    }
  ],
  "clues": [
    {
      "id": "clock",
      "title": "Three clocks, two times",
      "description": "The lobby clock was seven minutes fast. The independent telephone exchange clock was correct; its operator checked it against the hourly signal."
    },
    {
      "id": "call",
      "title": "The exchange docket",
      "description": "Ruth called the exchange at 9:18 true time. The operator heard her ask for a clean box to protect a borrowed brooch."
    },
    {
      "id": "key",
      "title": "A numbered temporary key",
      "description": "The night log assigned key card 12 to the east service door at 9:12 lobby time, not 9:12 true time. It records Milo lending it to Neve for one trip."
    },
    {
      "id": "timing",
      "title": "A corrected interval",
      "description": "The loan began at 9:05 true time. It therefore preceded the exchange call by 13 minutes; the call cannot itself explain the original loan."
    },
    {
      "id": "authorization",
      "title": "The written authority",
      "description": "Ruth’s signed instruction, dated before supper, permitted Neve to prepare a dry acid-free box. It expressly forbade cleaning, valuation, or removal from the building."
    },
    {
      "id": "carbon",
      "title": "Pressure through the carbon",
      "description": "The words “box to treatment room” are on both original and carbon. The word “store” appears only on a later covering label."
    },
    {
      "id": "scope",
      "title": "A limited instruction",
      "description": "Both copies independently authorize protective packing inside the hotel, rather than a sale or off-site restoration."
    },
    {
      "id": "safe",
      "title": "The internal safe log",
      "description": "The treatment-room cabinet is numbered 8. Its sealed drawer records an unvalued item received under Ruth’s initials at 9:24 true time."
    },
    {
      "id": "inventory",
      "title": "Matched description",
      "description": "A tiny repair on the brooch’s lower leaf matches Ruth’s old photograph. The sealed entry names a brooch, while the auction list names no consignment."
    },
    {
      "id": "steam",
      "title": "The borrowed cloth",
      "description": "Tom lent Neve a dry cotton cloth after he found damp plaster above the guest display. He refused to lend the scented polishing cloth."
    },
    {
      "id": "path",
      "title": "A visible indoor route",
      "description": "A laundry driver saw Neve take a shallow covered tray upstairs. The east exit was sealed during pipe work; there was no open route to the street."
    },
    {
      "id": "tray",
      "title": "A clean tray impression",
      "description": "The impression on the tray lining has the outline of a brooch and its projecting lower leaf. No residue is present on the cotton or the item’s visible surface."
    },
    {
      "id": "damage",
      "title": "Protection, not treatment",
      "description": "Neve used the tray to move a vulnerable object out of falling plaster. No evidence supports a chemical treatment or an off-site delivery."
    },
    {
      "id": "witness-consent",
      "title": "Ruth’s earlier conversation",
      "description": "Tom heard Ruth agree before supper that Neve could box the brooch if the display became unsafe. Ruth remained its authorized borrower and could withdraw that handling permission; ownership stayed with her relative."
    },
    {
      "id": "room",
      "title": "The improvised packing room",
      "description": "A dry room beside the old nursery contains unused conservation boxes, a tray label bearing Ruth’s initials, and no payment paperwork."
    },
    {
      "id": "receipt",
      "title": "The unpriced receipt",
      "description": "Neve’s receipt lists temporary custody, an item description and an internal cabinet number. The price column is crossed out and the authorized borrower’s signature is required on return."
    },
    {
      "id": "custody",
      "title": "A chain without a sale",
      "description": "The witnessed conversation, the internal route and the unpriced receipt together establish limited custody. They do not establish that ownership changed."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A key without a room",
      "location": "The Amber Hotel lobby",
      "body": [
        "The rain has made the old hotel smell of cedar, wet umbrellas and supper. Ruth Bell greets you beside an empty velvet stand. Her borrowed brooch should be on it. In her hand is a paper tag marked 12, which she says must be a room number. The manager is away, the clocks disagree, and a newspaper reporter has already asked whether the brooch was secretly sold. Ruth wants an answer before anyone prints a confident guess. You agree to help on one condition: observations will be separated from assumptions. A little brass key is not, by itself, evidence of a theft."
      ],
      "meets": [
        "ruth"
      ],
      "choices": [
        {
          "id": "enter",
          "label": "Ask the night receptionist what is recorded",
          "to": "briefing"
        }
      ]
    },
    "briefing": {
      "title": "Seven minutes in the wrong direction",
      "location": "The reception desk",
      "body": [
        "Milo puts his training log beside the telephone docket. The lobby clock is seven minutes fast; it has not stopped. The exchange operator uses the correct time and will confirm the call she connected at 9:18. Milo begs you to keep the two clocks separate. He did lend a temporary key earlier, but his log records the number of a door, not a guest bedroom. Ruth admits she made her call because she could not find the empty protective box. You write two columns in your notebook rather than squeezing every event into a single convenient sequence."
      ],
      "meets": [
        "milo"
      ],
      "clues": [
        "clock",
        "call"
      ],
      "choices": [
        {
          "id": "survey",
          "label": "Look at the available lines of inquiry",
          "to": "crossroads"
        }
      ]
    },
    "crossroads": {
      "title": "Two ways through the hotel",
      "location": "The mosaic stair landing",
      "body": [
        "The records office has a carbon copy of Ruth’s instructions and the temporary-key register. Tom can instead lead you through the laundry passage and the rooms Neve used. The office closes for an overnight audit while the porter’s inspection route is in progress, so choose which chain you will establish first. Either can answer Ruth’s question, but you will encounter different witnesses and work toward a different form of resolution. A door tag, a hurried conversation and an empty stand can all be true while the story assembled from them is false."
      ],
      "choices": [
        {
          "id": "a",
          "label": "Follow the paperwork through the records office",
          "to": "a1",
          "excludesFlags": [
            "witness-route"
          ]
        },
        {
          "id": "b",
          "label": "Go with the porter through the service passages",
          "to": "b1",
          "excludesFlags": [
            "records-route"
          ]
        }
      ]
    },
    "a1": {
      "title": "What number 12 opens",
      "location": "The records office",
      "body": [
        "Milo unlocks a narrow cupboard with a wonderfully ordinary door. Card 12 is tied to the east service-door key; it has never identified a guest room. The register says Neve borrowed it at 9:12 according to the lobby clock, with permission to collect boxes. Milo’s supervisor has initialed the entry. Nothing here says when the brooch itself moved. Before linking the loan to Ruth’s call, you need to correct its time. A sequence assembled from uncorrected clocks can create a motive out of nothing. Milo leaves you the original ledger so you can test that distinction without relying on his memory."
      ],
      "clues": [
        "key"
      ],
      "setFlags": [
        "records-route"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a2"
        }
      ]
    },
    "a2": {
      "title": "The operator’s independent minute",
      "location": "The hotel telephone booth",
      "body": [
        "The operator checks the docket with you. Ruth’s call was connected at 9:18 and lasted two minutes. It asked where the clean box had gone, not whether Neve could borrow a key. Milo’s 9:12 entry comes from a clock seven minutes ahead. Subtracting the offset puts the loan at 9:05. The order is now clear, but the meaning is not automatic: the earlier loan could have been authorized for some other reason. A good investigator can rule out one explanation without pretending to have proved every remaining possibility. You keep the arithmetic beside the source of each time."
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a3"
        }
      ]
    },
    "a3": {
      "title": "A cause that arrived too late",
      "location": "The records-office table",
      "body": [
        "Milo asks whether the telephone call made him lend the key. The question is tempting because the two papers lie together. Yet their physical proximity is not their chronology. Work out which event happened first in true time, then decide what the comparison permits you to say. Do not infer where Neve went from a clock alone."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which statement is supported once the clock error is corrected?",
        "options": [
          {
            "id": "claim-1",
            "label": "The key was lent at 9:05 true time, thirteen minutes before the call. The call cannot have caused that loan.",
            "correct": true,
            "feedback": "Separate the source of each time from the conclusion you are being asked to draw."
          },
          {
            "id": "claim-2",
            "label": "The key was lent at 9:19, after the call, because seven minutes must be added.",
            "correct": false,
            "feedback": "Separate the source of each time from the conclusion you are being asked to draw."
          },
          {
            "id": "claim-3",
            "label": "Both 9:12 and 9:18 are exchange times, so the gap is six minutes.",
            "correct": false,
            "feedback": "Separate the source of each time from the conclusion you are being asked to draw."
          },
          {
            "id": "claim-4",
            "label": "The earlier key loan proves the brooch had already left the hotel.",
            "correct": false,
            "feedback": "Separate the source of each time from the conclusion you are being asked to draw."
          }
        ],
        "wrongFeedback": "Separate the source of each time from the conclusion you are being asked to draw.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "a4"
      },
      "routeLabel": "Following the records"
    },
    "a4": {
      "title": "An instruction with an edge",
      "location": "The owners’ correspondence shelf",
      "body": [
        "The corrected interval sends Milo to the afternoon correspondence, not to an invented after-hours bargain. Ruth’s signed note authorizes Neve to prepare protective packing before supper. It limits the arrangement to the building and excludes cleaning, valuation and sale. The note does not prove those limits were obeyed, but it explains why a key could legitimately be borrowed before the telephone call. A further question remains: is the instruction genuine, or has someone quietly broadened it? You ask for its duplicate rather than accepting the neat covering label on the folder. The relative who lent the brooch had expressly allowed Ruth to arrange protective packing during the loan, without authority to sell it."
      ],
      "clues": [
        "timing",
        "authorization"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a5"
        }
      ]
    },
    "a5": {
      "title": "What the carbon did not say",
      "location": "The duplicate-letter cabinet",
      "body": [
        "The duplicate sits beneath an unrelated invoice. Pressure marks transfer the words “box to treatment room” to both sheets. The later covering label substitutes “store,” an ambiguous word that the reporter has taken to mean a shop. Neve arrives and recognizes the carbon’s tear at its upper corner. She does not ask you to believe that recognition without checking it; the fibers align with the original stub. Both documents describe the same limited task. Neither is a bill of sale. The distinction matters because making a valid document sound broader is often easier than forging a whole page."
      ],
      "meets": [
        "neve"
      ],
      "clues": [
        "carbon"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a6"
        }
      ]
    },
    "a6": {
      "title": "Permission is not ownership",
      "location": "The audit desk",
      "body": [
        "You now have a signed instruction and its mechanically produced duplicate. Decide which two observations establish the scope of the arrangement. An opinion that Ruth looked tired may explain a witness’s sympathy, but it cannot expand a written permission. Likewise, the hotel’s impressive letterhead says nothing about a transfer of title."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Select the two observations that support limited protective custody rather than a sale.",
        "options": [
          {
            "id": "claim-1",
            "label": "Both matching copies specify protective boxing inside the hotel.",
            "correct": true,
            "feedback": "Use evidence about the actual agreement, not associations suggested by a label or an object."
          },
          {
            "id": "claim-2",
            "label": "The original expressly excludes sale, valuation and off-site work.",
            "correct": true,
            "feedback": "Use evidence about the actual agreement, not associations suggested by a label or an object."
          },
          {
            "id": "claim-3",
            "label": "The word “store” appears on a later folder label.",
            "correct": false,
            "feedback": "Use evidence about the actual agreement, not associations suggested by a label or an object."
          },
          {
            "id": "claim-4",
            "label": "Neve has an expensive-looking leather tool case.",
            "correct": false,
            "feedback": "Use evidence about the actual agreement, not associations suggested by a label or an object."
          }
        ],
        "wrongFeedback": "Use evidence about the actual agreement, not associations suggested by a label or an object.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "a7"
      },
      "routeLabel": "Following the records"
    },
    "a7": {
      "title": "A cabinet rather than a customer",
      "location": "The internal safe register",
      "body": [
        "Your comparison gives Milo a precise question to put to the manager’s deputy: where is the temporary custody record? The deputy brings the treatment-room register, which lists cabinet 8 and an unvalued item under Ruth’s initials at 9:24 true time. The number 8 is not a sale price. You ask the deputy to preserve the seal until Ruth can attend. In a busy building a record can be perfectly accurate and still be misunderstood when lifted out of the system that gives its numbers meaning. Ruth’s worry begins to ease, but the identity of the sealed object must still be checked."
      ],
      "clues": [
        "scope",
        "safe"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a8"
        }
      ]
    },
    "a8": {
      "title": "The lower leaf",
      "location": "The treatment-room antechamber",
      "body": [
        "Ruth produces an old photograph. A repair to the brooch’s lower leaf is slightly crooked, a detail no generic inventory entry would settle. Through the cabinet’s inspection panel you can see that same repair on the packed object. The sealed receipt describes its weight and number of stones; the charity auction list contains no matching consignment. You have not opened the package or altered the record. Those small restraints will let Ruth reclaim the item without a new argument over whether the investigation itself broke the chain of custody."
      ],
      "clues": [
        "inventory"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a9"
        }
      ]
    },
    "a9": {
      "title": "How much an answer should claim",
      "location": "The quiet breakfast room",
      "body": [
        "The reporter would like a headline about a secret sale. Ruth would like a sentence she can show the relative who lent her the brooch. Neither request permits you to make the evidence say more than it does. You can establish the authorized task, its limits and the identity of the object in internal custody. You cannot establish whether every conversation that evening was courteous or whether the hotel followed every best practice. The practical question is now narrow enough to resolve: what does the missing display actually mean, and what should happen to the sealed item next?"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a10"
        }
      ]
    },
    "a10": {
      "title": "The claim that survives the records",
      "location": "The deputy’s office",
      "body": [
        "Set the corrected chronology beside the two copies of the instruction and the cabinet entry. Choose a conclusion that explains all of them while leaving uncertain matters uncertain. A confident accusation is not automatically a more complete answer."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "What is the strongest justified conclusion?",
        "options": [
          {
            "id": "claim-1",
            "label": "The brooch entered authorized internal protective custody; Ruth should verify and sign its return, and the misleading sale claim should be corrected.",
            "correct": true,
            "feedback": "Test the scope of the conclusion against the scope of the documents."
          },
          {
            "id": "claim-2",
            "label": "A completed sale transferred ownership because the folder says “store.”",
            "correct": false,
            "feedback": "Test the scope of the conclusion against the scope of the documents."
          },
          {
            "id": "claim-3",
            "label": "The telephone call authorized the earlier loan, so the rest of the paperwork is irrelevant.",
            "correct": false,
            "feedback": "Test the scope of the conclusion against the scope of the documents."
          },
          {
            "id": "claim-4",
            "label": "The records prove every hotel employee behaved perfectly throughout the evening.",
            "correct": false,
            "feedback": "Test the scope of the conclusion against the scope of the documents."
          }
        ],
        "wrongFeedback": "Test the scope of the conclusion against the scope of the documents.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "a11"
      },
      "routeLabel": "Following the records"
    },
    "a11": {
      "title": "A careful correction",
      "location": "The Amber Hotel lobby",
      "body": [
        "Ruth attends while the seal is checked, then signs for the brooch. The lower leaf catches the lamplight exactly as it does in her photograph. Milo adds the true-time correction beside the temporary-key entry; he does not erase the original. The reporter replaces a proposed allegation with a short account of a misleading label and a properly documented return. Neve apologizes for leaving the empty stand without a note. The hotel still has a communication problem to fix, but an accusation is no longer being asked to do that work."
      ],
      "ending": {
        "title": "The documented return",
        "kind": "solved",
        "body": [
          "Your route established authority, chronology and identity through records. Ruth leaves with her borrowed brooch and a signed custody trail. A different investigation through the service rooms could have answered her question through people and physical handling instead."
        ]
      },
      "routeLabel": "Following the records"
    },
    "b1": {
      "title": "The cloth Tom would not lend",
      "location": "The linen store",
      "body": [
        "Tom is sorting cloths by use. The scented polishing ones are kept apart from untreated cotton because a borrowed object must not meet an unknown cleaner. He lent Neve a dry cotton square after noticing damp plaster above the display. The request was practical and small, but it contradicts the reporter’s suggestion that an expensive treatment was secretly arranged. Tom cannot tell you what happened inside a room he did not enter. He is willing to identify his own actions and leave the rest for you to establish. That boundary makes his evidence more useful, not less."
      ],
      "meets": [
        "tom"
      ],
      "clues": [
        "steam"
      ],
      "setFlags": [
        "witness-route"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b2"
        }
      ]
    },
    "b2": {
      "title": "A journey that stayed indoors",
      "location": "The east service passage",
      "body": [
        "A laundry driver remembers making space for Neve’s shallow covered tray on the stairs. The east outside door had a temporary seal across its frame during pipe work; Tom shows you the intact seal. Neve therefore had access to a service route without an available exit to the street. That does not by itself prove the brooch was in the tray, nor that every possible exit was watched. The driver’s account and the door inspection establish one visible indoor journey. You resist turning that modest observation into a story about every minute of the evening."
      ],
      "clues": [
        "path"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b3"
        }
      ]
    },
    "b3": {
      "title": "A route without an exit",
      "location": "The service landing",
      "body": [
        "Tom asks which account of the journey is defensible. Look for a conclusion that fits both the driver’s direct observation and the sealed door. Anything claiming an unseen delivery or a sale needs evidence you do not yet possess."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "What can the passage evidence actually establish?",
        "options": [
          {
            "id": "claim-1",
            "label": "Neve carried a covered tray upstairs on an internal route; this sighting does not establish an off-site delivery.",
            "correct": true,
            "feedback": "Distinguish what the witness saw from the larger story someone attached to it."
          },
          {
            "id": "claim-2",
            "label": "The driver saw Neve complete a sale outside the hotel.",
            "correct": false,
            "feedback": "Distinguish what the witness saw from the larger story someone attached to it."
          },
          {
            "id": "claim-3",
            "label": "A sealed east exit means no object anywhere in the hotel could have moved.",
            "correct": false,
            "feedback": "Distinguish what the witness saw from the larger story someone attached to it."
          },
          {
            "id": "claim-4",
            "label": "Borrowing a service key is itself proof that the brooch was stolen.",
            "correct": false,
            "feedback": "Distinguish what the witness saw from the larger story someone attached to it."
          }
        ],
        "wrongFeedback": "Distinguish what the witness saw from the larger story someone attached to it.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "b4"
      },
      "routeLabel": "Following the witnesses"
    },
    "b4": {
      "title": "An outline in clean cotton",
      "location": "The old nursery workroom",
      "body": [
        "The room Neve borrowed has been turned into a temporary packing space. A shallow indentation in the cotton lining matches a brooch with a projecting lower leaf. The tray is dry and unscented. Neve points to unopened cleaning materials still in their case. You cannot prove a negative from unused bottles alone, but their seals and the clean cotton are consistent with protection rather than treatment. She is prepared to explain how the object was handled if you keep the distinction between an observed surface and an assumption about an entire process."
      ],
      "meets": [
        "neve"
      ],
      "clues": [
        "tray"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b5"
        }
      ]
    },
    "b5": {
      "title": "The task before supper",
      "location": "The kitchen doorway",
      "body": [
        "Tom recalls the earlier conversation because Ruth interrupted him while he carried a pot of tea. She agreed that Neve could prepare a box if plaster threatened the display. She did not agree to sell, clean or remove the brooch from the building. Ruth confirms the narrow arrangement when you repeat its terms without naming a culprit. Their accounts are not perfectly identical in wording, but they independently preserve the same boundaries. Agreement does not make them infallible; it gives you a hypothesis that the physical trail and the eventual receipt can test. Ruth shows the loan card authorizing protective care while the brooch is in her custody; ownership remains with the lending relative."
      ],
      "clues": [
        "witness-consent"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b6"
        }
      ]
    },
    "b6": {
      "title": "A theory built from handling",
      "location": "The packing-room bench",
      "body": [
        "Choose the observations that actually support protective boxing. Some details are compatible with several stories and do not discriminate between them. A useful combination should connect the immediate risk to the way the object was handled, rather than the price someone imagines it might fetch."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two observations support protection rather than a secret chemical treatment?",
        "options": [
          {
            "id": "claim-1",
            "label": "Damp plaster was falling above the display when dry cotton was requested.",
            "correct": true,
            "feedback": "Select observations about risk and handling, rather than details equally compatible with unrelated explanations."
          },
          {
            "id": "claim-2",
            "label": "The tray lining and visible brooch surface are clean, while the cleaning materials remain sealed.",
            "correct": true,
            "feedback": "Select observations about risk and handling, rather than details equally compatible with unrelated explanations."
          },
          {
            "id": "claim-3",
            "label": "The hotel’s brass keys look valuable.",
            "correct": false,
            "feedback": "Select observations about risk and handling, rather than details equally compatible with unrelated explanations."
          },
          {
            "id": "claim-4",
            "label": "Neve’s journey upstairs happened after the hotel served supper.",
            "correct": false,
            "feedback": "Select observations about risk and handling, rather than details equally compatible with unrelated explanations."
          }
        ],
        "wrongFeedback": "Select observations about risk and handling, rather than details equally compatible with unrelated explanations.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "b7"
      },
      "routeLabel": "Following the witnesses"
    },
    "b7": {
      "title": "The room beside the nursery",
      "location": "The upper service corridor",
      "body": [
        "With the handling sequence established, Neve shows you the room where the boxes were stored. Its door sticks against a rug, which explains why she carried a small tray rather than a large case. A label bearing Ruth’s initials is folded around an unused packet. There is no valuation sheet or delivery address. The absence of such a sheet would not alone settle the matter, but it fits the limited task you have reconstructed from testimony and physical handling. You ask for the receipt that should close the gap between taking the brooch and returning it."
      ],
      "clues": [
        "damage",
        "room"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b8"
        }
      ]
    },
    "b8": {
      "title": "A receipt with the price crossed out",
      "location": "The conservator’s temporary desk",
      "body": [
        "The receipt names the brooch and the internal cabinet where it is held. Its price column is crossed out, and its final line requires the authorized borrower’s signature on return. Ruth’s permission and the route explain how the object came here; the receipt identifies the remaining custodian. Neve had expected Ruth to fetch it before breakfast and had not considered how an empty display would look to another guest. That carelessness explains an alarm. It does not turn temporary custody into a bargain. You invite Ruth to inspect the packed object rather than asking her to accept reassurance alone."
      ],
      "clues": [
        "receipt"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b9"
        }
      ]
    },
    "b9": {
      "title": "Whose story belongs in the newspaper?",
      "location": "The unused drawing room",
      "body": [
        "Ruth, Tom and Neve sit far enough apart that they must speak deliberately rather than interrupt. You repeat the part each can actually attest: permission before supper, damp plaster, dry cotton, the indoor tray journey, and a receipt requiring return. Ruth corrects one detail about the time without changing the agreement. You leave that correction in your notes. A tidy narrative that removes every inconsistency would be easier to retell, but less trustworthy. The case now asks for a justified resolution, not a performance of certainty."
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b10"
        }
      ]
    },
    "b10": {
      "title": "The purpose of the journey",
      "location": "The service-stair window",
      "body": [
        "You have followed an object through several hands and rooms. The route has established a narrow chain, rather than a complete view of every guest’s evening. Decide which next action follows from that chain and respects the lender’s ownership and Ruth’s authorized custody of the borrowed item."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which resolution fits the witnessed handling and the receipt?",
        "options": [
          {
            "id": "claim-1",
            "label": "Bring Ruth to inspect and reclaim the internally held brooch, document the return, and correct the unsupported sale story.",
            "correct": true,
            "feedback": "Your conclusion should close the supported custody chain without adding a transaction nobody established."
          },
          {
            "id": "claim-2",
            "label": "Treat the unpriced receipt as a bill of sale and send the brooch to auction.",
            "correct": false,
            "feedback": "Your conclusion should close the supported custody chain without adding a transaction nobody established."
          },
          {
            "id": "claim-3",
            "label": "Accuse the laundry driver because he was the only witness near the stairs.",
            "correct": false,
            "feedback": "Your conclusion should close the supported custody chain without adding a transaction nobody established."
          },
          {
            "id": "claim-4",
            "label": "Promise the hotel that no communication or handling mistake occurred.",
            "correct": false,
            "feedback": "Your conclusion should close the supported custody chain without adding a transaction nobody established."
          }
        ],
        "wrongFeedback": "Your conclusion should close the supported custody chain without adding a transaction nobody established.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "b11"
      },
      "routeLabel": "Following the witnesses"
    },
    "b11": {
      "title": "A return with witnesses",
      "location": "The breakfast-room table",
      "body": [
        "Ruth opens the box in Neve’s presence and recognizes the repaired leaf. She signs the receipt while Tom notes that the display cannot be used until the leak is fixed. The newspaper reporter is given the actual chain of events, including the missed courtesy of a note on the stand. Nobody is required to look foolish so that somebody else can seem clever. Neve returns the dry cotton to the packing room, and Ruth moves the brooch to her own bag. For the first time that night, an empty space in the hotel means exactly what it appears to mean."
      ],
      "ending": {
        "title": "The witnessed return",
        "kind": "solved",
        "body": [
          "Your route established the brooch’s handling through people, surfaces and rooms. The same alarm could have been resolved through the records office, but your ending leaves a witnessed return and a repaired conversation, rather than an audit file."
        ]
      },
      "routeLabel": "Following the witnesses"
    }
  },
  "solutionPaths": [
    {
      "id": "a-complete",
      "actions": [
        {
          "type": "choice",
          "id": "enter"
        },
        {
          "type": "choice",
          "id": "survey"
        },
        {
          "type": "choice",
          "id": "a"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "claim-1"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": [
            "claim-1",
            "claim-2"
          ]
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "claim-1"
        }
      ]
    },
    {
      "id": "b-complete",
      "actions": [
        {
          "type": "choice",
          "id": "enter"
        },
        {
          "type": "choice",
          "id": "survey"
        },
        {
          "type": "choice",
          "id": "b"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "claim-1"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": [
            "claim-1",
            "claim-2"
          ]
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "claim-1"
        }
      ]
    }
  ]
};
