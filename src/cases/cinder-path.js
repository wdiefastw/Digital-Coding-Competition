/** An original branching investigation. Solutions stay inside earned scenes. */
export default {
  "id": "cinder-path",
  "title": "The Cinder Path",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "At dawn, dark footprints cross a locked pottery yard and vanish at a bricked arch. Follow an old map or a forgotten delivery round to discover what the village has paved over.",
  "setting": "A hillside pottery village on the week its disused kiln is due for demolition",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "nell",
      "name": "Nell Rowan",
      "role": "Village walking guide",
      "description": "Knows the legal paths and refuses to treat an abandoned doorway as an invitation.",
      "color": "#93a390"
    },
    {
      "id": "kit",
      "name": "Kit Bell",
      "role": "Pottery caretaker",
      "description": "Sweeps the yard each evening and has kept an honest record of the strange morning marks.",
      "color": "#b59c7c"
    },
    {
      "id": "june",
      "name": "June Fenn",
      "role": "Council surveyor",
      "description": "Carries old plans rolled inside new ones and checks the north arrow before comparing them.",
      "color": "#999fb5"
    },
    {
      "id": "asha",
      "name": "Asha Cole",
      "role": "Village recorder",
      "description": "Has preserved the delivery books because ordinary journeys sometimes become public history.",
      "color": "#b69aa8"
    },
    {
      "id": "bran",
      "name": "Bran Holt",
      "role": "Retired parcel carrier",
      "description": "Remembers people by the doors where he used to stop and is slow to trust a microphone.",
      "color": "#a59e78"
    }
  ],
  "clues": [
    {
      "id": "notice",
      "title": "The approaching consultation",
      "description": "The kiln and bricked arch are scheduled for demolition after this week’s consultation."
    },
    {
      "id": "sweep",
      "title": "New marks over swept dust",
      "description": "Kit’s dated photographs put the marks between 18:00 and07:00; they begin by the service drain."
    },
    {
      "id": "maps",
      "title": "A west-up sketch",
      "description": "The old sheet has west at its top, north at its right; its service line points down the page toward the canal."
    },
    {
      "id": "orientation",
      "title": "The service line points east",
      "description": "Independent chapel and canal landmarks show the old line leads toward the canal outfall, not south into the hillside."
    },
    {
      "id": "drain",
      "title": "An authorized service passage",
      "description": "A contractor cleared the surface passage last month. The demolition plan and old schedule disagree over the arch’s public status."
    },
    {
      "id": "petition",
      "title": "A prepared pattern",
      "description": "An envelope asks that the route be read before demolition. Its patterned paper matches gaps in a photographed footprint."
    },
    {
      "id": "easement",
      "title": "The retained public access",
      "description": "An1894 signed schedule grants a public foot route from canal to chapel through Cinder Way. The recent transfer plan carries that schedule forward."
    },
    {
      "id": "lock",
      "title": "The maintenance-lock issue",
      "description": "The lock log records Bran Holt borrowing the outfall maintenance key on all three evenings before the marks, with return receipts each morning."
    },
    {
      "id": "stencil",
      "title": "The matched stencil sheet",
      "description": "Bran supplies the reusable footprint sheet voluntarily; its repaired tear matches Kit’s photographs and the paper left under the notice."
    },
    {
      "id": "round",
      "title": "The old delivery sequence",
      "description": "Asha’s route book lists canal bench, scalehouse, chapel, then pottery. Its note defines east as increasing column letters and south as increasing row numbers."
    },
    {
      "id": "destination",
      "title": "The scalehouse stop",
      "description": "On the route grid, start B1, move one column east, then two rows south. C3 is the scalehouse; B3 is the chapel, D1 the depot, C1 the weighbridge."
    },
    {
      "id": "pattern-owner",
      "title": "The carrier’s prepared trail",
      "description": "At the scalehouse Bran identifies his reusable footprint pattern and demonstrates its matched tear. His route photographs record the old arch’s public sign before it was covered."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The yard at first light",
      "location": "The pottery’s public gate",
      "meets": [
        "nell"
      ],
      "clues": [
        "notice"
      ],
      "body": [
        "Nell Rowan meets you at the public gate of the old pottery. Beyond it, a row of dark footprints crosses the swept yard and stops at a bricked arch. The yard is locked overnight, so people have begun calling the marks the kiln walker’s return. Nell would prefer an explanation that does not frighten the children on her history walk.",
        "A demolition notice hangs beside the gate. The kiln and its bricked service arch are due to be removed after the week’s consultation. Nobody needs to enter an unsafe building to ask why this particular doorway has suddenly acquired a story."
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
      "title": "Swept at six, marked at seven",
      "location": "The caretaker’s covered bench",
      "meets": [
        "kit"
      ],
      "clues": [
        "sweep"
      ],
      "body": [
        "Kit Bell shows you his daily record. He sweeps the public-facing yard at 18:00 and takes a photograph from the gate. The marks appear between that photograph and his07:00 opening check. They begin beside a drain cover inside the yard, not at the locked front gate. A thin gray seam runs between the drain and the wall.",
        "Kit has asked the council to inspect the service drainage; he has not lifted covers or invited anyone below the surface. His photographs record impressions on top of the swept dust, rather than the bare patches a century-old mark might leave underneath it."
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
      "title": "The north arrow that moved",
      "location": "The village map board",
      "clues": [
        "maps"
      ],
      "body": [
        "The modern map is north-up. The old pottery sketch beside it has west at the top, with a clear arrow labeling north along the right edge. Both show the chapel north of the kiln and the canal east of it. A penciled service line runs from the kiln toward the canal, although on the old sheet it points downward.",
        "A visitor has circled the line and written “south tunnel?” Nell asks you to check that inference. A line’s direction on a page cannot be read as a compass direction until the page’s orientation is known."
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
      "title": "Which way does the paper point?",
      "location": "The map board shelter",
      "body": [
        "The chapel and canal are independent landmarks, so you need not guess how the old sketch is rotated. Match those landmarks, then interpret the service line. The answer will determine which public records and fenced paths are relevant; it is not permission to explore beneath the pottery."
      ],
      "puzzle": {
        "prompt": "On the west-up historic sketch, which real direction does the downward service line follow?",
        "options": [
          {
            "id": "1",
            "label": "South, because the bottom of every map is south.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "East toward the canal, after matching the independently labeled landmarks.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "North toward the chapel, regardless of the arrow.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "No direction can be established even with two known landmarks.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "first-result"
      }
    },
    "first-result": {
      "title": "Toward water, not the hillside",
      "location": "The village map board",
      "clues": [
        "orientation"
      ],
      "body": [
        "On a west-up sheet, downward points east. The service line therefore runs toward the canal, where the modern map places an inspection outfall. The circled “south tunnel” was an interpretation of a rotated page, not a separate historic feature.",
        "Nell telephones June, the council surveyor, who agrees to compare the approved plans. Kit asks you to note another limit: the line’s existence does not show that anyone has recently used it. That will need a current inspection record or a witness whose route can be checked."
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
      "title": "What was sealed, and what was not",
      "location": "The council’s public plan table",
      "meets": [
        "june"
      ],
      "clues": [
        "drain"
      ],
      "body": [
        "June brings an inspection report from the previous month. A licensed contractor cleared a surface service passage leading from the canal outfall to the pottery yard’s drain. The report explicitly excludes the unstable kiln interior. Its access gate uses the council maintenance lock, whose issue log is public for this project.",
        "The demolition plan labels the bricked arch “redundant private delivery entrance.” An older schedule calls it “Cinder Way, public foot access.” The difference may be a drafting mistake or something that matters. June will not settle it from a ghost story."
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
      "title": "A mark with a purpose",
      "location": "The pottery notice board",
      "clues": [
        "petition"
      ],
      "body": [
        "Tucked beneath the demolition notice is a clean envelope marked “Please read the route before you erase it.” It contains no threat, no name, and no claim to own the yard. A pressed bit of black paper carries the same pebble-shaped gaps visible in one of Kit’s photographed footprints. Somebody has prepared a pattern, not merely walked through ash.",
        "June offers to trace the land schedule and maintenance-lock issue. Asha, the village recorder, can instead compare the old parcel route with the paper pattern. Either route can test a human explanation without entering the kiln."
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
      "title": "A boundary or a journey",
      "location": "The village square",
      "body": [
        "You can follow the council’s boundary documents to find what the demolition drawing omitted, or follow the old delivery journey to learn why somebody wants it remembered. Those are different questions, and each demands more than a good story.",
        "Choose your route. Nell will keep the investigation on authorized ground, and Kit will preserve the next morning’s yard photograph. If you find the person behind the footprints, you will still need to explain the mechanism, the access, and the request beneath the notice."
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Trace the public path through the council records",
          "to": "a-arrival",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Follow the parcel route with the village recorder",
          "to": "b-arrival",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a-arrival": {
      "title": "A line that survived the sale",
      "location": "The council deeds room",
      "clues": [
        "easement"
      ],
      "body": [
        "June places the recent transfer plan beside the1894 schedule it expressly incorporates. The schedule preserves a public foot route from the canal to the chapel through Cinder Way. A later map simplifies the courtyard but does not revoke that route. The demolition drawing’s word “private” therefore needs a formal correction before work proceeds.",
        "The plan alone does not explain the footprints. It does give a coherent reason for someone to focus attention on the arch. June asks you to compare it with the maintenance-lock issue log, while keeping the two questions distinct."
      ],
      "routeLabel": "The boundary documents",
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
      "title": "The right, and the recent access",
      "location": "The council inspection desk",
      "body": [
        "The lock log lists Bran Holt borrowing the outfall maintenance key on the three relevant evenings and returning it each morning. His borrowing was authorized for taking route photographs, not for entering the unstable kiln. Select the pair of observations that jointly explains a possible motive and a practicable way into the yard without a phantom passing through brick."
      ],
      "routeLabel": "The boundary documents",
      "puzzle": {
        "prompt": "Which TWO records jointly explain a possible purpose and an ordinary means of access?",
        "options": [
          {
            "id": "1",
            "label": "The transfer schedule retains public access through Cinder Way.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The lock log records Bran’s authorized outfall-key visits on the relevant evenings.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "A child drew a ghost on an unsigned leaflet.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "The old sketch is brown, which proves it is legally superior to every newer document.",
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
      "title": "A request with a route",
      "location": "The inspection desk",
      "clues": [
        "lock"
      ],
      "body": [
        "The retained public access supplies a reason to object to the demolition label; the issued key supplies a current, ordinary route as far as the yard drain. These facts make Bran an appropriate person to ask about the prepared paper. They do not prove that every visitor using the key made marks.",
        "June arranges a meeting rather than treating a record of authorized access as grounds for an accusation. Nell brings Kit’s original photographs, not copies printed from village gossip. Bran agrees to meet at the public canal bench."
      ],
      "routeLabel": "The boundary documents",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-check"
        }
      ]
    },
    "a-check": {
      "title": "The paper with the little tear",
      "location": "The canal bench",
      "meets": [
        "bran"
      ],
      "clues": [
        "stencil"
      ],
      "body": [
        "Bran admits laying the marks through a reusable paper pattern after his authorized photography visits. He wanted the arch noticed before its public history was erased, and thought people would attend a hearing if they were curious. The repaired tear on his sheet matches a distinctive break in the photographed sole.",
        "He also admits the story frightened people and distracted from the documented access right. June takes a voluntary statement and adds the pattern to the consultation file with his permission. You have a mechanism, a route, and a stated purpose that can be checked against independent records."
      ],
      "routeLabel": "The boundary documents",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-deduction"
        }
      ]
    },
    "a-deduction": {
      "title": "What the correction should preserve",
      "location": "The consultation room",
      "body": [
        "The evidence supports a staged footprint trail connected to a genuine omitted access right. It does not support unsafe exploration or treating the entire demolition as unlawful merely because a label is wrong. Choose the recommendation that addresses both the factual error and the avoidable fear."
      ],
      "routeLabel": "The boundary documents",
      "puzzle": {
        "prompt": "What resolution best fits the boundary-route evidence?",
        "options": [
          {
            "id": "1",
            "label": "Treat the marks as supernatural and open the kiln to visitors.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Correct the public-access issue through consultation and explain the admitted stencil mechanism without preserving the hoax.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Ignore the access schedule because a prank was involved.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Destroy the plans so no further disagreement can arise.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "a-ending"
      }
    },
    "a-ending": {
      "title": "A name restored to the drawing",
      "location": "The village map board",
      "body": [
        "The council pauses the affected work, corrects the access schedule for consultation, and arranges a lawful replacement walking route around the unsafe structure. Bran apologizes for the staged haunting. Kit posts the verified explanation beside his photographs, and Nell changes her walk: Cinder Way becomes a story about public access and who notices when a small line disappears."
      ],
      "routeLabel": "The boundary documents",
      "ending": {
        "title": "Cinder Way put back on the map",
        "body": [
          "Your route resolved the mystery through deeds, lawful access, and a matched physical pattern. The village gains a usable route and a more accurate record, rather than a dangerous attraction."
        ],
        "kind": "solved"
      }
    },
    "b-arrival": {
      "title": "Addresses older than the houses",
      "location": "Asha’s village reading room",
      "meets": [
        "asha"
      ],
      "clues": [
        "round"
      ],
      "body": [
        "Asha Cole opens the parcel carrier’s route book. The door numbers have changed, but the stops still make sense: canal bench, scalehouse, chapel, pottery. A marginal note says “from B1, one east, two south; ask where the weight was written.” The grid legend defines east as increasing column letters and south as increasing row numbers.",
        "Asha remembers Bran Holt donating the book when the round closed. She will accompany you to the indicated public stop, but she wants the position worked out from the printed key rather than from a guess about what sounds poetic."
      ],
      "routeLabel": "The remembered delivery round",
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
      "title": "Where the weight was written",
      "location": "The route-book table",
      "body": [
        "The grid labels A through D from west to east and1 through4 from north to south. The legend marks C3 as the scalehouse, B3 as the chapel, D1 as the depot, and C1 as the weighbridge. Work from the stated starting point, and distinguish the intermediate position from the destination. Select the observations that establish the final square."
      ],
      "routeLabel": "The remembered delivery round",
      "puzzle": {
        "prompt": "Which TWO steps correctly establish the route-book destination?",
        "options": [
          {
            "id": "1",
            "label": "The first eastward step from B1 reaches C1, not B2.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Two southward steps from C1 reach C3, identified as the scalehouse.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "The first step reaches C1, so the journey must end at the weighbridge.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Increasing row numbers means north even though the supplied legend says south.",
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
      "title": "A stop beyond the first step",
      "location": "The public canal path",
      "clues": [
        "destination"
      ],
      "body": [
        "The eastward step takes B1 to C1; the two southward steps then take C1 to C3. The scalehouse is the destination, while the weighbridge is only the intermediate stop. Asha calls Bran through the village office and asks whether he will meet you there.",
        "Nell joins you on the public path. The investigation has no reason to enter the unsafe kiln. A route can be recovered through testimony and documents without reenacting every old shortcut, and Asha is particularly firm about that distinction when a curious crowd begins to follow."
      ],
      "routeLabel": "The remembered delivery round",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-check"
        }
      ]
    },
    "b-check": {
      "title": "An impression made deliberately",
      "location": "The scalehouse’s open porch",
      "meets": [
        "bran"
      ],
      "clues": [
        "pattern-owner"
      ],
      "body": [
        "Bran brings his old parcel bag and a folded paper sole. He acknowledges laying the yard marks after authorized route-photography visits through the cleared service passage. The tiny repaired tear matches Kit’s images. He also shows dated photographs of the public Cinder Way sign before a construction notice covered it.",
        "His aim was to make someone ask what the bricked arch had once meant. The haunting was his invention, not evidence that the old path was imaginary. Asha records his account with permission and separates his historical photographs from the effect he hoped to create with them."
      ],
      "routeLabel": "The remembered delivery round",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-deduction"
        }
      ]
    },
    "b-deduction": {
      "title": "A story that need not remain a hoax",
      "location": "The scalehouse porch",
      "body": [
        "You can explain the marks and identify their maker through the matched pattern and voluntary account. You also have old route photographs and a route book, but you have not audited the legal access schedule. Choose a resolution that preserves the evidence and sends that remaining question to the proper review."
      ],
      "routeLabel": "The remembered delivery round",
      "puzzle": {
        "prompt": "What can the remembered-route investigation responsibly conclude?",
        "options": [
          {
            "id": "1",
            "label": "The route book alone proves every present legal right and authorizes entering the kiln.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The matched pattern and voluntary account explain the staged marks; preserve the historical route evidence for a separate lawful access review.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "A deliberate hoax makes all older photographs false.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "The scalehouse must be demolished because its square appears in a clue.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "b-ending"
      }
    },
    "b-ending": {
      "title": "The route spoken aloud",
      "location": "The village meeting hall",
      "body": [
        "Asha hosts a recorded route-history session, beginning with Bran’s apology and the verified pattern demonstration. The council receives the photographs and route book for its formal access review. No visitor is sent toward the unstable kiln. Nell’s next walk ends at the public scalehouse porch, where the old addresses can be heard without being confused with a ghost’s instructions."
      ],
      "routeLabel": "The remembered delivery round",
      "ending": {
        "title": "A walking story, without a haunting",
        "body": [
          "You solved the mystery through a reconstructed journey and a maker who could be heard without being believed blindly. The village keeps its history while the surveyors establish what its current rights require."
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
          "id": "2"
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
