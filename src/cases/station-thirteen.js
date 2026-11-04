/** Expanded, authored mystery. Only earned scenes belong in the reader. */
export default {
  "id": "station-thirteen",
  "title": "The Platform That Wasn’t There",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "Passengers keep arriving with tickets for a platform erased from the map. Follow the dispatch records or walk the old railway before the evening service disappears again.",
  "setting": "A provincial railway junction during a week of heavy rain",
  "characters": [
    {
      "id": "mara",
      "name": "Mara Fen",
      "role": "Ticket clerk",
      "description": "Collects contradictory instructions instead of quietly discarding them.",
      "color": "#a18970"
    },
    {
      "id": "oren",
      "name": "Oren Dale",
      "role": "Signal operator",
      "description": "Insists that a cleared signal and an empty platform are different facts.",
      "color": "#a18970"
    },
    {
      "id": "suri",
      "name": "Suri West",
      "role": "District nurse",
      "description": "Travels with a canvas bag and keeps an unusually exact appointment book.",
      "color": "#a18970"
    },
    {
      "id": "ted",
      "name": "Ted Venn",
      "role": "Retired platelayer",
      "description": "Knows where old lines cross beneath newer embankments.",
      "color": "#a18970"
    }
  ],
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "clues": [
    {
      "id": "common-ticket",
      "title": "The relief punch",
      "description": "The clipped-square punch belongs to an uncancelled relief-service batch. Serial numbers alone cannot establish how many passengers traveled."
    },
    {
      "id": "common-map",
      "title": "Two map purposes",
      "description": "Platform 13 is omitted from the public boarding map but remains connected on the engineering plan behind the pump house."
    },
    {
      "id": "common-passenger",
      "title": "The clinic appointments",
      "description": "Independent clinic appointments support the existence of early relief journeys, but do not establish which route or permissions each train used."
    },
    {
      "id": "a-register",
      "title": "Green entries",
      "description": "The relief movements were logged under a goods-service number. The receiving operator’s initials do not identify the authorizing officer."
    },
    {
      "id": "a-slips",
      "title": "Permit R17",
      "description": "The original permit depended on an active flood warning. Later slips reused its number after the recorded withdrawal of that warning."
    },
    {
      "id": "a-block",
      "title": "Tonight’s section card",
      "description": "Tonight’s goods movement has a signed reservation; the relief movement has no recorded protection or release condition."
    },
    {
      "id": "a-call",
      "title": "The supervisor’s confirmation",
      "description": "No renewed permit followed the warning’s withdrawal. The supervisor can suspend the copied entry and issue a new, properly protected service."
    },
    {
      "id": "a-order",
      "title": "The revised movement order",
      "description": "A fresh order separates the relief and goods movements and gives the relief service an explicit reservation and release condition."
    },
    {
      "id": "b-guide",
      "title": "Recent wheel marks",
      "description": "The siding behind the pump house shows recent wheel contact. Its connection can be observed from the public service path."
    },
    {
      "id": "b-gate",
      "title": "Two kinds of control",
      "description": "The new padlock restricts people at the loading platform; it does not lock the points or reserve the railway section."
    },
    {
      "id": "b-box",
      "title": "The disconnected bell wire",
      "description": "The relief-service warning wire is disconnected under a maintenance tag, so an expected bell cannot confirm whether that train has moved."
    },
    {
      "id": "b-witness",
      "title": "An unpublished lamp arrangement",
      "description": "Tonight’s relief driver is waiting for a hand-lamp instruction that does not appear in the junction’s current notices."
    },
    {
      "id": "b-inspection",
      "title": "The joint inspection",
      "description": "Both drivers were contacted before the inspector replaced the private lamp arrangement with a shared protected movement plan."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A ticket with no destination",
      "location": "Junction booking hall",
      "body": [
        "Mara Fen turns a ticket over beneath the lamp. It is valid, newly punched, and printed for Platform Thirteen. The station map stops at Twelve. Three passengers have brought similar tickets this week; each says a short train arrived from somewhere behind the goods yard, then vanished before the ordinary service began.",
        "Mara cannot leave the desk. She can obtain access to the dispatch room or introduce you to someone who remembers the old line. Choose which account of the railway you will trust yourself to check: its written movements or its ground."
      ],
      "meets": [
        "mara"
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Ask permission to examine the dispatch-room records",
          "to": "a-register",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Walk the old line with a local guide",
          "to": "b-guide",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "common-ticket": {
      "title": "A machine’s small accent",
      "location": "The ticket-testing counter",
      "body": [
        "The district inspector brings a gauge used to identify ticket punches. The disputed tickets carry a square hole with one clipped corner. The same shape appears on the relief-service sample issued six years ago, not on ordinary passenger tickets. Their serial numbers run 318, 319, and 321; the missing number does not prove a missing passenger.",
        "An instruction card says relief tickets remain valid until a supervisor cancels the batch in ink. The card has no cancellation date. A dusty form can be obsolete, forgotten, or still legally useful. You need evidence of actual movements before selecting among those explanations."
      ],
      "clues": [
        "common-ticket"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-time"
        }
      ]
    },
    "common-time": {
      "title": "Two clocks and one distance",
      "location": "The station inspector’s desk",
      "body": [
        "A passenger remembers a departure at 5:12 on the yard clock. A signal log records a train entering the eastern loop at 5:24. The old timetable gives a minimum running time of eight minutes between those points. A maintenance card says the yard clock ran four minutes fast throughout the week; the signal clock was checked against the district time signal.",
        "The apparent twelve-minute journey must be converted before it is compared with the eight-minute minimum. You are testing whether the journey is possible, not proving the identity of the train. Which conclusion is justified?"
      ],
      "puzzle": {
        "prompt": "What does the corrected timing establish?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "The signal clock should also be moved back four minutes.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The departure was 5:08, so reaching the loop at 5:24 is physically possible.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "A possible running time proves the service was authorized.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The departure was 5:16, so the train must have been supernatural.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "common-map"
      }
    },
    "common-map": {
      "title": "An erasure with a boundary",
      "location": "The public survey cabinet",
      "body": [
        "The current passenger map removes the old loading platform, but the engineering plan still marks its siding. A footnote explains the difference: passenger maps omit facilities closed to ordinary public boarding; engineering plans must retain any track still connected to the system. A penciled number 13 refers to a loading face behind the pump house.",
        "Someone has crossed out the word PASSENGER beside it. They have not drawn a break in the rails. You copy the plan’s date and its purpose. The absence of a station from one kind of map cannot by itself show that no train can reach it."
      ],
      "clues": [
        "common-map"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-passenger"
        }
      ]
    },
    "common-passenger": {
      "title": "A journey made for someone",
      "location": "The junction waiting room",
      "body": [
        "Suri West arrives with a waterproof bag. She recognizes the relief ticket and says it was used to bring workers from the flood cottages to the clinic. She last traveled on Tuesday, when the main road was underwater. Her appointment book confirms clinic arrivals at 5:40, but it cannot prove which track she used between the cottages and the junction.",
        "She asks you to avoid naming the patients in a public report. You agree to record the service’s purpose without copying diagnoses or addresses. The question is now both narrower and harder: a real helpful journey may still have been dispatched without the protections that keep two trains apart."
      ],
      "meets": [
        "suri"
      ],
      "clues": [
        "common-passenger"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-separate"
        }
      ]
    },
    "common-separate": {
      "title": "A service and its safety",
      "location": "The district inspector’s table",
      "body": [
        "The inspector proposes two separate files. One will establish whether a relief movement really occurred and why. The other will establish whether it had safe control of the line. She says a compassionate purpose does not make an unsafe dispatch harmless, but a missing public timetable does not make every relief journey fraudulent.",
        "Choose the observations that support the existence of a physical railway service without treating authorization as already proved. Keep passengers’ private circumstances out of your answer; the evidence concerns tickets, tracks, and time."
      ],
      "puzzle": {
        "prompt": "Which two observations support a real, physically possible relief movement?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "The public map lists no Platform 13, so no rails can exist.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Corrected departure and loop times allow more than the minimum journey interval.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "A helpful purpose automatically reserves the line against other trains.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The engineering plan retains a connected siding at the disputed platform.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "common-return"
      }
    },
    "common-return": {
      "title": "The next movement matters",
      "location": "The junction platform",
      "body": [
        "You have narrowed the mystery from an impossible destination to a poorly explained relief service. A chalkboard announces that an ordinary goods train will use the eastern loop tonight. That changes what a satisfactory answer requires. Finding the old platform is not enough if another train can enter the same section without warning.",
        "Return to the method you chose. A dispatch-room inquiry can trace who accepted responsibility for the section. A walk along the line can establish whether its physical protection matches the paper plan. Either can produce a useful intervention, but they will not produce identical reports."
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Follow the remaining leads on your chosen route",
          "to": "a-block",
          "requiresFlags": [
            "route-a"
          ]
        },
        {
          "id": "continue-b",
          "label": "Follow the remaining leads on your chosen route",
          "to": "b-box",
          "requiresFlags": [
            "route-b"
          ]
        }
      ]
    },
    "a-register": {
      "title": "Permission in the margin",
      "location": "The dispatch room",
      "body": [
        "Oren Dale unlocks the movement register. Every relief departure is entered in green pencil under the goods-service number, with the note “road closed.” The operator’s initials establish who received the message, not who granted the right to run. Oren has kept the incoming slips because he disliked the ambiguity. He invites you to follow their references in sequence."
      ],
      "meets": [
        "oren"
      ],
      "clues": [
        "a-register"
      ],
      "setFlags": [
        "route-a"
      ],
      "routeLabel": "The dispatch-room inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Compare the incoming slips",
          "to": "a-slips"
        }
      ]
    },
    "a-slips": {
      "title": "The repeated reference",
      "location": "The message-file shelves",
      "body": [
        "Three incoming slips cite Permit R17. The first quotes the permit as “valid while the flood warning remains.” The next two simply repeat its number. An attached gauge reading records the warning’s withdrawal on Monday afternoon. You do not yet know whether a later order restored permission; an old reference copied forward is not evidence that one existed."
      ],
      "clues": [
        "a-slips"
      ],
      "routeLabel": "The dispatch-room inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Check the ticket and timetable evidence independently",
          "to": "common-ticket"
        }
      ]
    },
    "a-block": {
      "title": "A blank that is not a clearance",
      "location": "The block-instrument cabinet",
      "body": [
        "Oren shows you the section card for tonight. The goods train’s reservation has a start, a release condition, and a supervisor’s signature. The relief column has only a copied train number. A blank reservation cannot prove the track is empty, but it does show that this office has not recorded protection for the relief train. The inspector asks for a precise recommendation."
      ],
      "clues": [
        "a-block"
      ],
      "routeLabel": "The dispatch-room inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Trace the final authorization call",
          "to": "a-call"
        }
      ]
    },
    "a-call": {
      "title": "The person who can stop a copy",
      "location": "The district telephone booth",
      "body": [
        "The duty supervisor confirms that she never renewed R17 after Monday. She had assumed the old service ended with the warning and had not inspected the copied movement numbers. Rather than asking her to condemn a mysterious train, you ask her to compare the actual conditions attached to the original permission with the conditions tonight."
      ],
      "clues": [
        "a-call"
      ],
      "routeLabel": "The dispatch-room inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Decide what the written record supports",
          "to": "a-decision"
        }
      ]
    },
    "a-decision": {
      "title": "An order for tonight",
      "location": "The dispatch desk",
      "body": [
        "The service should not be erased from history merely because it was useful; nor should useful journeys continue on an invalid reference. Which recommendation follows from the withdrawn condition and tonight’s unprotected entry while preserving the possibility of safe relief transport?"
      ],
      "puzzle": {
        "prompt": "What should the supervisor do before tonight’s trains move?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Destroy the old slips so the confusion cannot be repeated.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Allow both trains because relief passengers have priority in every circumstance.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Declare that no train existed because the permit was invalid.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Suspend the copied relief entry, confirm the train’s position, and arrange fresh protection before any new relief movement.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "a-order"
      },
      "routeLabel": "The dispatch-room inquiry"
    },
    "a-order": {
      "title": "A new number, openly assigned",
      "location": "The dispatch-room window",
      "body": [
        "Oren receives the revised order and reads it back word for word. The relief train is held at the cottages while the goods movement clears. A new service number, reservation, and release condition are entered in ink. Mara can now tell passengers where to board without pretending the loading platform has always been an ordinary station."
      ],
      "clues": [
        "a-order"
      ],
      "routeLabel": "The dispatch-room inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Deliver the corrected notice to the booking hall",
          "to": "ending-a"
        }
      ]
    },
    "b-guide": {
      "title": "The ground beneath the map",
      "location": "The disused footbridge",
      "body": [
        "Ted Venn waits with a torch and an engineering key. He will walk only the public service path, never an active rail. From the bridge you can see a short siding curving behind the pump house. Its rails are rusty at the edges but bright where wheels have recently passed. That proves use, Ted says, not safety. He points to the section gate beyond the reeds."
      ],
      "meets": [
        "ted"
      ],
      "clues": [
        "b-guide"
      ],
      "setFlags": [
        "route-b"
      ],
      "routeLabel": "The abandoned-line inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Inspect the service path and its warning signs",
          "to": "b-gate"
        }
      ]
    },
    "b-gate": {
      "title": "A lock with the wrong job",
      "location": "The pump-house fence",
      "body": [
        "The gate carries a fresh padlock, but it locks the pedestrian entrance, not the points that direct trains into the siding. Its sign says NO PUBLIC BOARDING. Ted sketches the different mechanisms so you will not confuse access control for people with control of the rail section. A nurse could have boarded legitimately while the section remained poorly protected."
      ],
      "clues": [
        "b-gate"
      ],
      "routeLabel": "The abandoned-line inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Compare your observations with the public records",
          "to": "common-ticket"
        }
      ]
    },
    "b-box": {
      "title": "The unwatched instrument",
      "location": "The old signal cabin",
      "body": [
        "The cabin is accessible from the footpath. Its warning instrument works when Ted tests the separate maintenance circuit, but the relief-service bell wire has been disconnected and tagged for replacement. A train standing at the cottages would not send the expected bell indication here. Ted takes a numbered photograph rather than touching the working circuit."
      ],
      "clues": [
        "b-box"
      ],
      "routeLabel": "The abandoned-line inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Find someone who witnessed the relief boarding",
          "to": "b-witness"
        }
      ]
    },
    "b-witness": {
      "title": "A torch beside the reeds",
      "location": "The flood-cottage path",
      "body": [
        "A cottage warden shows you a dated boarding list and points to the sheltered loading face. The warden has told tonight’s driver to wait for a green hand lamp from the cabin, not for a bell. No current notice at the junction mentions this replacement arrangement. You write the instructions exactly and send Ted to fetch the district inspector before anyone tries them."
      ],
      "clues": [
        "b-witness"
      ],
      "routeLabel": "The abandoned-line inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose the safe meaning of the missing bell",
          "to": "b-decision"
        }
      ]
    },
    "b-decision": {
      "title": "Silence is not an empty line",
      "location": "The cabin’s service path",
      "body": [
        "The goods train is due, the relief bell is disconnected, and a private lamp arrangement may still send the other train toward the loop. You cannot repair or operate the railway yourself. What should you report to the inspector immediately?"
      ],
      "puzzle": {
        "prompt": "Which report treats the physical evidence correctly?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "No bell means the relief train has already arrived safely.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "A private lamp agreement overrides the junction’s notices.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The pedestrian padlock makes the points safe for both trains.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "A disconnected bell gives no train-position information; hold movements until the relief driver is contacted and a single protected plan is confirmed.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "b-inspection"
      },
      "routeLabel": "The abandoned-line inquiry"
    },
    "b-inspection": {
      "title": "A signal everyone can hear",
      "location": "The pump-house siding",
      "body": [
        "The inspector contacts both drivers and holds their movements. She then brings Oren to inspect the disconnected wire and the unpublished lamp instruction. The relief service will resume only under a common written plan. Mara posts a temporary boarding notice beside a supervised path. The missing platform has become a real place with real responsibilities."
      ],
      "clues": [
        "b-inspection"
      ],
      "routeLabel": "The abandoned-line inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Return over the footbridge",
          "to": "ending-b"
        }
      ]
    },
    "ending-a": {
      "title": "A service with a proper name",
      "location": "Junction booking hall",
      "body": [
        "Mara tears up the penciled rumor sheet and posts the signed relief timetable. The clinic passengers will travel later tonight, but on a reserved section rather than a copied assumption."
      ],
      "ending": {
        "title": "Resolved through the dispatch record",
        "body": [
          "You established that Platform 13 was a loading face used by a real relief service, then found the expired condition hidden beneath a repeated permit number. Your route produced a new authorization and an auditable timetable. The apparent disappearance was a gap between different records, not an impossible train."
        ],
        "kind": "solved"
      }
    },
    "ending-b": {
      "title": "The platform behind the reeds",
      "location": "The old footbridge",
      "body": [
        "From the footbridge, the loading face looks ordinary. Ted has placed a numbered marker beside the disconnected wire so the repair crew will identify the correct circuit in daylight."
      ],
      "ending": {
        "title": "Resolved through the physical railway",
        "body": [
          "You located the actual boarding place and showed that a silent instrument could not establish an empty line. Your inspection stopped an unpublished lamp arrangement becoming a collision risk. The relief train can return when everyone shares the same protected plan."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "complete-a",
      "actions": [
        {
          "type": "choice",
          "id": "take-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-2"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-2",
            "answer-4"
          ]
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-4"
        },
        {
          "type": "choice",
          "id": "continue-a"
        }
      ]
    },
    {
      "id": "complete-b",
      "actions": [
        {
          "type": "choice",
          "id": "take-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-2"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-2",
            "answer-4"
          ]
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "answer",
          "id": "answer-4"
        },
        {
          "type": "choice",
          "id": "continue-b"
        }
      ]
    }
  ]
};
