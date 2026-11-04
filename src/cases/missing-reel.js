/** An original branching investigation. Solutions stay inside earned scenes. */
export default {
  "id": "missing-reel",
  "title": "The Missing Seventh Reel",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "An old cinema is about to reopen, but the restored film has a gap nobody can explain. Choose whether to follow the physical print or the people who remember its first screening.",
  "setting": "The Bell Cinema and its neighboring film archive, the morning before a restoration premiere",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "etta",
      "name": "Etta Vale",
      "role": "Projectionist",
      "description": "Knows a print by its splices and dislikes a mystery being mistaken for a technical fault.",
      "color": "#ad9578"
    },
    {
      "id": "mae",
      "name": "Mae Lin",
      "role": "Archive registrar",
      "description": "Insists that a label, a memory, and a signed receipt are three different kinds of evidence.",
      "color": "#9baba1"
    },
    {
      "id": "ben",
      "name": "Ben Firth",
      "role": "Sound technician",
      "description": "Has kept the old booth diagrams because new equipment still has to fit through old doors.",
      "color": "#b497a8"
    },
    {
      "id": "rosa",
      "name": "Rosa Bell",
      "role": "Retired picture editor",
      "description": "Remembers the people outside the camera frame as clearly as those inside it.",
      "color": "#b8a06f"
    },
    {
      "id": "gideon",
      "name": "Gideon Marsh",
      "role": "Premiere sponsor",
      "description": "Speaks confidently about the town’s history and expects the program to be punctual.",
      "color": "#8f9eb0"
    }
  ],
  "clues": [
    {
      "id": "invitation",
      "title": "The advertised complete day",
      "description": "The premiere invitation promises an unabridged restoration, including the factory’s afternoon."
    },
    {
      "id": "timings",
      "title": "Two clocks, one offset",
      "description": "The porter’s wall clock is documented three minutes fast; booth entries use station time."
    },
    {
      "id": "receipt",
      "title": "The sealed collection",
      "description": "Can 7 left at 09:18 station time and was sealed by 09:20. A later visitor arrived at 09:24 corrected time."
    },
    {
      "id": "aligned",
      "title": "A movement excluded",
      "description": "The visitor’s arrival cannot account for the fragment already inside the sealed collection vehicle."
    },
    {
      "id": "frames",
      "title": "A labeled omission",
      "description": "The scan jumps from frame403 to528; its folder labels this a sponsor reference version, not damage loss."
    },
    {
      "id": "terms",
      "title": "The restoration agreement",
      "description": "Historical sequence must be retained. Gideon initialed acceptance of the shorter reference version."
    },
    {
      "id": "lab-order",
      "title": "The laboratory instruction",
      "description": "A signed order asks the laboratory to examine the fragment, not destroy it; its inventory still includes every delivered frame."
    },
    {
      "id": "lab-match",
      "title": "An exact join",
      "description": "The fragment starts at404 and ends at527, with matching edge marks on both neighboring sections of the scan."
    },
    {
      "id": "lab-account",
      "title": "The sequence retained",
      "description": "A supervised digital inspection shows a work stoppage, followed by negotiation and a return to work. The material is intact and properly cataloged."
    },
    {
      "id": "rosa-book",
      "title": "Rosa’s continuity book",
      "description": "Rosa recorded the afternoon as three distinct scenes: machines stopped, wage negotiation, machines restarted. Her dated carbon predates the sponsor version."
    },
    {
      "id": "union-pair",
      "title": "Independent witnesses to the edit",
      "description": "The union screening minutes list the same three scenes, and a newspaper review independently describes the pause and settlement."
    },
    {
      "id": "credit-sheet",
      "title": "The credit that moved",
      "description": "A modern credit sheet replaces “workers’ committee” with “factory hospitality.” Its delivery cover is signed by the sponsor’s office."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "An interval with no music",
      "location": "The Bell Cinema foyer",
      "meets": [
        "etta"
      ],
      "clues": [
        "invitation"
      ],
      "body": [
        "A velvet rope divides the freshly painted foyer from a floor still waiting for its last polish. Etta Vale has called you before the audience arrives. The restored documentary should show a complete day at the town’s old factory. Instead, its last scene jumps from lunch to closing time. She is certain there should be another sequence, and equally certain that accusing somebody of stealing a can would be premature.",
        "The sponsor has supplied a new program saying the factory never stopped work during that summer. Etta asks for something less grand than a theory: a defensible account of what the surviving print actually contains."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "first-record"
        }
      ]
    },
    "first-record": {
      "title": "Two clocks on one sheet",
      "location": "The projection booth",
      "clues": [
        "timings"
      ],
      "body": [
        "The booth log lists three events in Etta’s handwriting: the sponsor entered at 09:12; the courier departed at 09:18; the projection test began at 09:26. A second page, completed by the archive porter, records his own clock at 09:15 when the sponsor entered. Beside it is a clock-service note: “Porter’s wall clock runs three minutes fast. All booth times use the station time signal.”",
        "The porter’s page puts the courier’s departure at 09:21 and a visitor carrying an empty canvas bag at 09:27. Etta wants you to align the records before anybody builds an alibi around a number."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "first-witness"
        }
      ]
    },
    "first-witness": {
      "title": "A receipt and a recollection",
      "location": "The archive hatch",
      "meets": [
        "mae"
      ],
      "clues": [
        "receipt"
      ],
      "body": [
        "Mae Lin finds a signed receipt for one collection at 09:18 station time: “Print fragment, can 7, restricted examination.” The courier’s vehicle sealed at 09:20; its depot camera records the same seal unbroken later that morning. She will verify a request to inspect the item’s paperwork, but only after the timing is consistent.",
        "Mae does not know which images are on the fragment. She explains that “can 7” is an inventory container, not necessarily a seventh projection reel. The distinction seems pedantic until you notice that the program has quietly used the two terms as if they meant the same thing."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "first-question"
        }
      ]
    },
    "first-question": {
      "title": "A common time",
      "location": "The archive reading table",
      "body": [
        "Lay the porter’s fast clock beside the booth’s corrected one. The visitor with the bag may be interesting, but a theory about that visitor must fit the independently sealed collection. Nothing in the record yet proves that an object was taken unlawfully."
      ],
      "puzzle": {
        "prompt": "Which statement is supported after correcting the porter’s clock?",
        "options": [
          {
            "id": "1",
            "label": "The bag-carrying visitor arrived before the courier’s collection.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Both logs place the courier’s departure at 09:18 station time, before the visitor arrived.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "The courier must have left at 09:21 station time because that is the later entry.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "A three-minute error makes the entire signed receipt unusable.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "first-result"
      }
    },
    "first-result": {
      "title": "The useful limit of an alibi",
      "location": "The archive reading table",
      "clues": [
        "aligned"
      ],
      "body": [
        "With three minutes removed from the porter’s times, the courier’s departure matches 09:18 in both accounts. The visitor arrived at 09:24 station time, after the vehicle had sealed. The visitor therefore cannot explain the fragment leaving with that courier. Mae writes this carefully: it excludes one proposed movement, not every possible act by the visitor.",
        "That narrow distinction earns her cooperation. She brings out the original restoration folder and suggests you examine why the fragment was set aside at all. Etta stays behind to keep the booth available for the evening."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "second-record"
        }
      ]
    },
    "second-record": {
      "title": "The frames that do not match",
      "location": "The restoration catalog",
      "meets": [
        "ben"
      ],
      "clues": [
        "frames"
      ],
      "body": [
        "Ben Firth joins you with a scan made before the current restoration. The image numbers run 401, 402, 403, then 528. At the join, the screen shows the same factory whistle twice, although the waveform on the original sound sheet contains it only once. A catalog annotation calls the cut “sponsor reference version,” not “damage loss.”",
        "Ben can arrange a supervised comparison at the accredited film laboratory. Alternatively, Rosa Bell, who cut the first version decades ago, still has her paper continuity book at the union hall. There is time for one formal line of inquiry before the premiere committee meets."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "cross-check"
        }
      ]
    },
    "cross-check": {
      "title": "A promise in small print",
      "location": "The cinema manager’s office",
      "meets": [
        "gideon"
      ],
      "clues": [
        "terms"
      ],
      "body": [
        "Gideon Marsh shows you his sponsorship agreement. One clause permits cleaning and a temporary safety hold; another expressly requires the restoration to retain the historical sequence. The approval slip beneath it bears his initials beside “reference version accepted.” He calls the missing afternoon uneventful, then changes the subject to the new seats.",
        "The original publicity photograph behind his desk includes a union banner half cropped at its edge. It is not proof of a strike, or of wrongdoing by Gideon. It is a reason to check the sources rather than let a polished program become the source itself."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "route-choice"
        }
      ]
    },
    "route-choice": {
      "title": "A print, or the people around it",
      "location": "The cinema side door",
      "body": [
        "Mae can authorize one escorted visit before the committee assembles. The laboratory route can establish exactly how the supplied version differs from the surviving material. Rosa’s continuity book may explain what the afternoon meant to the people who filmed it. Both routes require evidence, and they will lead to different recommendations for tonight.",
        "Choose the question you want to answer first. You will stay with that investigation until you have an account strong enough to put before the committee."
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Follow the print to the film laboratory",
          "to": "a-arrival",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Visit the union hall and the retired editor",
          "to": "b-arrival",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a-arrival": {
      "title": "A sealed box behind a glass partition",
      "location": "The accredited film laboratory",
      "clues": [
        "lab-order"
      ],
      "body": [
        "The laboratory supervisor lets you inspect the paperwork and a digital reference copy. Nobody hands old stock to a visitor or opens a container on a whim. The current inventory has no disposal entry, and the collection seal matches Mae’s receipt. Etta’s missing afternoon has not vanished from the historical record; it is being examined under a legitimate safety hold.",
        "The supervisor asks you to identify which observations would demonstrate that this is the omitted passage rather than another fragment. The answer must rest on a match, not on a familiar-looking factory wall."
      ],
      "routeLabel": "The laboratory comparison",
      "setFlags": [
        "route-a"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-question"
        }
      ]
    },
    "a-question": {
      "title": "What makes a match?",
      "location": "The comparison screen",
      "body": [
        "On the left screen are the scan’s last frames before the jump. On the right is the fragment’s first page of inspection notes. The factory gate appears in both, but the gate was filmed repeatedly. The edge-mark ledger gives positions and stock characteristics. Select the observations that actually establish continuity across the gap."
      ],
      "routeLabel": "The laboratory comparison",
      "puzzle": {
        "prompt": "Which TWO observations establish the fragment’s exact place in the scan?",
        "options": [
          {
            "id": "1",
            "label": "Its frames run404–527, precisely filling the missing numbered interval.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Its paired edge marks match the neighboring sections on both sides.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "The factory gate looks like the gate on the program cover.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "The supervisor says the fragment feels important.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "a-result",
        "mode": "multiple",
        "wrongFeedback": "The selected observations do not form a complete, consistent explanation. Keep direct evidence separate from a plausible story. You can try again without losing your place.",
        "minSelections": 2,
        "maxSelections": 2
      }
    },
    "a-result": {
      "title": "The interval restored",
      "location": "The comparison screen",
      "clues": [
        "lab-match"
      ],
      "body": [
        "The frame numbers and paired edge marks join without an extra or missing frame. A familiar gate would have been merely suggestive; these independent correspondences identify the omitted interval. The laboratory supplies a signed comparison sheet and preserves its chain of custody.",
        "The digital reference can now be reviewed without turning this into a story about a stolen can. Mae contacts the committee to explain that the relevant question is which version they were asked to show, and whether they knew what the shorter one omitted."
      ],
      "routeLabel": "The laboratory comparison",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-check"
        }
      ]
    },
    "a-check": {
      "title": "An afternoon that mattered",
      "location": "The laboratory screening room",
      "clues": [
        "lab-account"
      ],
      "body": [
        "The surviving interval shows workers sitting down beside silent machines. A handwritten slate identifies a wage discussion. Later images show the foreman and two representatives signing a paper, followed by the line restarting. The film does not prove every later claim about the dispute, but it plainly contradicts the program’s assertion that work never stopped.",
        "Gideon’s approval marks connect him to the supplied reference version. His motive still requires caution; his responsibility for checking what he approved does not. The committee needs a recommendation limited to what you can establish."
      ],
      "routeLabel": "The laboratory comparison",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-deduction"
        }
      ]
    },
    "a-deduction": {
      "title": "What should the committee be told?",
      "location": "The committee’s temporary office",
      "body": [
        "Your report has three independent supports: the restoration agreement, the sponsor’s acceptance slip, and a laboratory comparison identifying an intact omitted sequence. Choose a recommendation that preserves that evidence and does not turn uncertainty about motive into certainty about theft."
      ],
      "routeLabel": "The laboratory comparison",
      "puzzle": {
        "prompt": "Which finding and action are justified by the documented evidence?",
        "options": [
          {
            "id": "1",
            "label": "Declare every sponsor a thief and destroy the shorter copy.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Keep the premiere unchanged because a safety hold erases historical obligations.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Document the omitted interval, correct the program, and restore the agreed sequence under professional supervision.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Call the late visitor responsible because the bag was large enough.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "a-ending"
      }
    },
    "a-ending": {
      "title": "The version the town can examine",
      "location": "The Bell Cinema auditorium",
      "body": [
        "The committee postpones the premiere for one evening, corrects the program, and commissions a documented restoration that includes the afternoon. Gideon must answer for approving a misleading account, but the report does not falsely accuse him of stealing a reel. Etta threads a rehearsal copy while Ben checks the sound. The audience will see the work, the disagreement, and the settlement in sequence."
      ],
      "routeLabel": "The laboratory comparison",
      "ending": {
        "title": "An audited restoration",
        "body": [
          "You solved the case through a physical comparison and a documented chain of custody. The complete restoration will carry a note explaining the omission and the correction, so the next historian need not reconstruct the same missing afternoon."
        ],
        "kind": "solved"
      }
    },
    "b-arrival": {
      "title": "The book with pencil arrows",
      "location": "The union hall’s upstairs room",
      "meets": [
        "rosa"
      ],
      "clues": [
        "rosa-book"
      ],
      "body": [
        "Rosa Bell has not worked at the cinema for years, but her continuity book is still wrapped in a cloth shopping bag. She places a dated carbon beneath a desk lamp and asks you not to treat her memory as a substitute for it. The afternoon has three entries: machines stopped; wage negotiation; machines restarted.",
        "Rosa remembers being asked recently to call the sequence an extended meal break. She refused. A refusal is testimony about a conversation, she says, not proof that every frame survives. She points you toward records written by people who did not work in her cutting room."
      ],
      "routeLabel": "The continuity book",
      "setFlags": [
        "route-b"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-question"
        }
      ]
    },
    "b-question": {
      "title": "A memory needs company",
      "location": "The union reading table",
      "body": [
        "Four possible supports lie before you: an undated anniversary leaflet, minutes made after the first screening, a contemporary newspaper review, and a modern sponsor caption. Select the pair whose dates and independence can test Rosa’s account rather than simply repeat it."
      ],
      "routeLabel": "The continuity book",
      "puzzle": {
        "prompt": "Which TWO sources independently test Rosa’s description of the original sequence?",
        "options": [
          {
            "id": "1",
            "label": "The dated minutes of the first union screening.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The contemporary newspaper review written by another observer.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "The sponsor’s newly supplied caption, which makes the disputed claim.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "An undated anniversary leaflet copied from that caption.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "b-result",
        "mode": "multiple",
        "wrongFeedback": "The selected observations do not form a complete, consistent explanation. Keep direct evidence separate from a plausible story. You can try again without losing your place.",
        "minSelections": 2,
        "maxSelections": 2
      }
    },
    "b-result": {
      "title": "More than one person remembered",
      "location": "The union reading table",
      "clues": [
        "union-pair"
      ],
      "body": [
        "The minutes and newspaper review independently place the work stoppage before the negotiation and the return to work. Neither source relies on the current sponsor caption, and both existed before the new print. Rosa’s account is now supported by documents that were not written to defend her.",
        "The case changes shape. You cannot certify the physical fragment from this room, but you can show that tonight’s program misrepresents a sequence that contemporary viewers saw. The committee’s chair agrees to meet you at the old newspaper office, where the modern paperwork was delivered."
      ],
      "routeLabel": "The continuity book",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-check"
        }
      ]
    },
    "b-check": {
      "title": "The words under the pictures",
      "location": "The newspaper archive office",
      "clues": [
        "credit-sheet"
      ],
      "body": [
        "The office retains a delivery copy of the new credit sheet. “Workers’ committee” has become “factory hospitality,” without a citation or explanation. A cover signed by the sponsor’s office describes the revision as a condition of its approved reference copy. The alteration does not prove that all the sponsor’s historical opinions are false. It does establish who supplied these particular words.",
        "Rosa wants the audience to know why the disagreement mattered, but she asks that workers’ names be checked before they are spoken publicly. The committee can make a correction tonight without pretending your route established the laboratory condition of an old can."
      ],
      "routeLabel": "The continuity book",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-deduction"
        }
      ]
    },
    "b-deduction": {
      "title": "A public account with limits",
      "location": "The newspaper meeting room",
      "body": [
        "You have a dated continuity carbon, two independent contemporary accounts, and the modern caption’s delivery record. Your evidence supports an honest account of the work stoppage and of the sponsor’s editorial pressure. It does not establish the fragment’s physical state. What recommendation respects both sides of that boundary?"
      ],
      "routeLabel": "The continuity book",
      "puzzle": {
        "prompt": "What can this route responsibly recommend for tonight?",
        "options": [
          {
            "id": "1",
            "label": "Announce that the physical film has been destroyed, although nobody inspected it.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Correct the historical account using independent records and hold a documented discussion while the print is verified.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Repeat the sponsor caption because memory is always unreliable.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Publish every worker’s name immediately without checking their identities.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "b-ending"
      }
    },
    "b-ending": {
      "title": "People outside the frame",
      "location": "The Bell Cinema stage",
      "body": [
        "The committee changes the event into a documented discussion with Rosa and the local historians, postponing the claim of a complete film until the laboratory reports. The program names the workers’ committee accurately and acknowledges how the modern caption was supplied. Gideon is invited to respond to the written record rather than control it. Rosa reads one line from her old book, then lets a former machinist’s daughter describe the people whose names she has checked."
      ],
      "routeLabel": "The continuity book",
      "ending": {
        "title": "The record returned to its witnesses",
        "body": [
          "You solved the case through independent testimony and provenance. Tonight becomes a conversation rather than a falsely complete premiere. The film’s future restoration will have an account of the workers beside it, not a caption written over them."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "a-complete",
      "actions": [
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
          "id": "2"
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
          "type": "choice",
          "id": "take-a"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": [
            "1",
            "2"
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
          "type": "answer",
          "id": "3"
        }
      ]
    },
    {
      "id": "b-complete",
      "actions": [
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
          "id": "2"
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
          "type": "choice",
          "id": "take-b"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": [
            "1",
            "2"
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
          "type": "answer",
          "id": "2"
        }
      ]
    }
  ]
};
