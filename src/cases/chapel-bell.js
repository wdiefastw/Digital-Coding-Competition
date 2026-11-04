/** Expanded, authored mystery. Only earned scenes belong in the reader. */
export default {
  "id": "chapel-bell",
  "title": "The Bell Beneath the Rain",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "The empty chapel rings after every storm, though its bell rope is tied. Follow a hidden mechanism below the hill or an old public footpath through the village’s disputed history.",
  "setting": "A hillside chapel above a village of old water mills",
  "characters": [
    {
      "id": "sel",
      "name": "Sel Rowan",
      "role": "Chapel custodian",
      "description": "Keeps the public keys in a labeled drawer and will not let curiosity endanger a visitor.",
      "color": "#a18970"
    },
    {
      "id": "ivo",
      "name": "Ivo Fen",
      "role": "Water engineer",
      "description": "Brings measurements to a conversation that has become full of rumors.",
      "color": "#a18970"
    },
    {
      "id": "nessa",
      "name": "Nessa Pike",
      "role": "Stone mason",
      "description": "Reads joints and repairs in walls the way others read a paragraph.",
      "color": "#a18970"
    },
    {
      "id": "ben",
      "name": "Ben Ash",
      "role": "Parish archivist",
      "description": "Has promised to distinguish the chapel’s stories from its recorded obligations.",
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
      "id": "common-log",
      "title": "The delayed ringing",
      "description": "The bell rang roughly half an hour after three heavy rains, including one calm day. The log does not directly identify the mechanism."
    },
    {
      "id": "common-plan",
      "title": "The qualified plan",
      "description": "A measured upper channel reaches a chamber marked FLOAT; its dotted lower outflow was copied from an older plan and remains unverified."
    },
    {
      "id": "common-survey",
      "title": "The verified water connection",
      "description": "An authorized tracing test connects the chapel’s incoming ditch to the lower inspection point. The warning calls for clearing the lower grating before any gate is lifted."
    },
    {
      "id": "a-stair",
      "title": "A second sound path",
      "description": "Clicks below the bell wall occur independently of the tied upper rope; the lower water level is recorded before inspection."
    },
    {
      "id": "a-scale",
      "title": "The measured warning level",
      "description": "The float chamber reads 18.5 centimeters above its fixed notch, exceeding the18-centimeter warning mark; the lower grating has not been cleared for six weeks."
    },
    {
      "id": "a-linkage",
      "title": "The separate auxiliary hammer",
      "description": "A supervised float test operates a separate bell hammer; the tied hand rope does not disable that warning linkage."
    },
    {
      "id": "a-grating",
      "title": "The restricted outflow",
      "description": "Debris restricts the lower grating. The approved procedure is to clear it, observe the level, and reassess the gate only after the warning level falls."
    },
    {
      "id": "a-clear",
      "title": "A recorded response",
      "description": "After the crew clears the grating, the level falls to14 and the auxiliary hammer stops. A further inspection is scheduled."
    },
    {
      "id": "b-path",
      "title": "The obstructed inspection path",
      "description": "Three boundary stones match the old public route, but a newer fence blocks it beyond the third marker."
    },
    {
      "id": "b-grant",
      "title": "The retained inspection right",
      "description": "The grant preserves inspection access despite diverted public traffic, assigns grating maintenance to the association, and remains in the later transfer."
    },
    {
      "id": "b-notices",
      "title": "The misfiled notices",
      "description": "Recent warning notices were filed under the alternate stream name and never assigned to a maintenance visit."
    },
    {
      "id": "b-agreement",
      "title": "A joint inspection arranged",
      "description": "The documented reservation restores access for the qualified crew, which finds a restricted grating and a float linkage into the bell wall."
    },
    {
      "id": "b-record",
      "title": "The corrected responsibility record",
      "description": "Connected maps, assigned maintenance, and a marked inspection path now lead future warnings to the responsible crew."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A sound from a locked building",
      "location": "The chapel porch",
      "body": [
        "Sel Rowan unlocks the chapel while its little bell is still moving. The ordinary rope is tied to a cleat, and the building has been empty since morning. This is the third ringing after a storm. People in the village have begun repeating a story about a forgotten promise, but Sel wants an answer that will keep visitors safe.",
        "A stone stair descends toward the old mill works. A nearly vanished path runs toward the parish archive. Sel can arrange access to one route before the evening rain arrives. Choose how you will investigate the sound: through the surviving mechanism or through the places and agreements that once gave it a purpose."
      ],
      "meets": [
        "sel"
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Arrange a supervised inspection of the chapel’s lower works",
          "to": "a-stair",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Follow the old public path and trace the chapel’s obligations",
          "to": "b-path",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "common-log": {
      "title": "Three storms, three delays",
      "location": "The village weather shelter",
      "body": [
        "Ivo shows you an observer’s log. On Monday, heavy rain ended at 4:10, wind ended at 4:18, and the chapel bell rang at 4:37. On Thursday, rain ended at 5:00, wind ended at 4:52, and the bell rang at 5:28. Today, rain ended at 3:25, the air stayed calm, and the bell rang at 3:53.",
        "The log does not identify the mechanism. It does show why the popular explanation of a rope pulled directly by a gust needs another condition: today there was no recorded wind. Ivo points toward a ditch still draining from the hill. Water can arrive later than the weather that started it."
      ],
      "meets": [
        "ivo"
      ],
      "clues": [
        "common-log"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-cause"
        }
      ]
    },
    "common-cause": {
      "title": "A pattern without an invented certainty",
      "location": "The weather shelter bench",
      "body": [
        "One villager says the repeated delay proves a precise clockwork timer. Another says the calm day is impossible because wind must be responsible. Ivo has measured neither a timer nor the chapel’s lower works. Your first task is to choose a hypothesis worth testing without promoting the pattern into proof.",
        "Which statement uses all three observations and leaves the hidden part of the system as a genuine question? Remember that water continuing to drain after rainfall is an observed possibility here, while an uninspected timer is only an invention."
      ],
      "puzzle": {
        "prompt": "Which working explanation best fits the log without claiming too much?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "A calm-day ringing disproves every possible physical mechanism.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The bell must have a half-hour clockwork timer, even though none has been inspected.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "A rain-related process with delayed drainage is worth testing; direct wind action alone does not fit the calm-day event.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "Wind is proved responsible because two rainy days were also windy.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "common-plan"
      }
    },
    "common-plan": {
      "title": "The mark under the later plaster",
      "location": "The chapel’s plan cabinet",
      "body": [
        "Nessa brings a measured drawing made before the chapel floor was raised. It shows a narrow channel entering a chamber below the bell wall, then leaving through a sluice toward the mills. A small circle beside the channel is labeled FLOAT. The legend distinguishes a measured passage from a dotted line copied from an older plan.",
        "The upper part was measured. The lower outflow is dotted and needs checking. You record that distinction. A plan can preserve an excellent lead and still contain an uncertain section. The bell’s ordinary rope being tied does not tell you whether another linkage enters the same wall below it."
      ],
      "meets": [
        "nessa"
      ],
      "clues": [
        "common-plan"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-survey"
        }
      ]
    },
    "common-survey": {
      "title": "A stream with two names",
      "location": "The old mill bridge",
      "body": [
        "From the public bridge, Ivo measures the ditch flowing into the chapel hill. The village map calls the outlet St. Anne’s Drain; the mill map calls it East Supply. A junction stone carries both names on opposite faces. A permitted, harmless tracing test by the water authority confirms that the same stream reaches the lower inspection point, although it does not locate every bend underground.",
        "Ben finds a warning in the old notes: “When the float speaks, clear the lower grating before lifting the gate.” The sentence describes an order of work. It does not authorize an untrained visitor to operate the sluice."
      ],
      "meets": [
        "ben"
      ],
      "clues": [
        "common-survey"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-connection"
        }
      ]
    },
    "common-connection": {
      "title": "A route and a reason",
      "location": "The bridge’s sheltered arch",
      "body": [
        "The plan, the junction stone, and the tracing test answer related but different questions. The two names explain why residents had treated one stream as separate systems. The test supplies a current connection. The old warning suggests that a float was used to call attention to water, but a written purpose alone cannot prove the original linkage still works.",
        "Choose the observations that establish today’s water connection without assuming the hidden mechanism is intact. You will need that boundary whichever route you have chosen."
      ],
      "puzzle": {
        "prompt": "Which two observations support a present connection rather than merely an old intention?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "An old warning gives a visitor permission to lift the gate.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The junction stone identifies the differently named reaches as parts of the same route.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "The authorized tracing test links the upper ditch with the lower inspection point.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "The word FLOAT proves every old rod and wire remains connected.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "common-return"
      }
    },
    "common-return": {
      "title": "Before the next shower",
      "location": "The foot of the chapel hill",
      "body": [
        "The next shower is visible as a gray line beyond the ridge. Ivo asks everyone to keep away from the lower gate until he can confirm its condition. The mystery is no longer only about an unexpected sound. If the bell once warned of backed-up water, misunderstanding it could let a practical maintenance problem grow.",
        "Complete the investigation you began. A mechanism inspection can show how the float presently reaches the bell. A documentary walk can identify the protected inspection path and who has responsibility for keeping it open. Either result must be brought to the people qualified to manage the water."
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Complete your chosen route before the rain returns",
          "to": "a-linkage",
          "requiresFlags": [
            "route-a"
          ]
        },
        {
          "id": "continue-b",
          "label": "Complete your chosen route before the rain returns",
          "to": "b-notices",
          "requiresFlags": [
            "route-b"
          ]
        }
      ]
    },
    "a-stair": {
      "title": "A stair opened by its custodian",
      "location": "The lower chapel stair",
      "body": [
        "Sel accompanies you and Ivo beneath the raised floor. Nessa has checked the stair and marked the safe standing area. You hear water beyond the wall, followed by a faint click that is not made by the tied upper rope. Ivo records the water level before allowing any movement of the inspection cover. Curiosity has a useful place behind the safety rail."
      ],
      "clues": [
        "a-stair"
      ],
      "setFlags": [
        "route-a"
      ],
      "routeLabel": "The underground mechanism",
      "choices": [
        {
          "id": "continue-a",
          "label": "Read the chamber’s original scale",
          "to": "a-scale"
        }
      ]
    },
    "a-scale": {
      "title": "A scale left in the stone",
      "location": "The float-chamber platform",
      "body": [
        "The chamber scale marks NORMAL at 12 and WARNING at 18. Its unit is centimeters above a fixed stone notch, not depth from the current surface. Ivo measures18.5 at the notch while water continues to enter. The float is attached to a narrow rod disappearing into the bell wall. A separate inspection note says the lower grating was last cleared six weeks ago."
      ],
      "clues": [
        "a-scale"
      ],
      "routeLabel": "The underground mechanism",
      "choices": [
        {
          "id": "continue-a",
          "label": "Compare the chapel’s records with the current water route",
          "to": "common-log"
        }
      ]
    },
    "a-linkage": {
      "title": "The ordinary thing inside the wall",
      "location": "The bell-wall inspection slot",
      "body": [
        "From the dry slot, Nessa can see a rod linked to a small auxiliary hammer. The float lifts the rod as water rises; the upper hand rope operates the main hammer separately. Ivo gently tests the float using the approved inspection lever, and the auxiliary hammer produces the sound heard on the porch. You watch without touching the linkage yourself."
      ],
      "clues": [
        "a-linkage"
      ],
      "routeLabel": "The underground mechanism",
      "choices": [
        {
          "id": "continue-a",
          "label": "Inspect the outflow without changing the gate",
          "to": "a-grating"
        }
      ]
    },
    "a-grating": {
      "title": "Leaves where the water slows",
      "location": "The lower inspection walkway",
      "body": [
        "The grating is partly blocked by leaves and a strip of old sacking. Ivo can inspect it from the walkway without entering the channel. The gate itself is closed at its recorded maintenance setting. His procedure says to remove the obstruction, wait for the level to fall below WARNING, and only then reassess the gate. Sudden release into an uncertain lower channel would create a new risk."
      ],
      "clues": [
        "a-grating"
      ],
      "routeLabel": "The underground mechanism",
      "choices": [
        {
          "id": "continue-a",
          "label": "Choose the response to the actual warning",
          "to": "a-decision"
        }
      ]
    },
    "a-decision": {
      "title": "A bell is not an operating instruction",
      "location": "The lower walkway gate",
      "body": [
        "You have demonstrated a working float warning, measured water above the warning mark, and seen the restricted grating. Which recommendation follows both the evidence and the order of work?"
      ],
      "puzzle": {
        "prompt": "What should be done next?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Silence the auxiliary hammer so visitors stop worrying.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Untie the upper rope and ignore the measured water level.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Have the authorized crew clear the grating, monitor the fall in level, and reassess the gate afterward.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "Open the gate immediately because every warning means the same action.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "a-clear"
      },
      "routeLabel": "The underground mechanism"
    },
    "a-clear": {
      "title": "The quiet after the test",
      "location": "The chamber observation rail",
      "body": [
        "The authorized crew clears the debris while Ivo watches the fixed scale. The level falls to14, below WARNING but not yet back to NORMAL. The float lowers and the auxiliary hammer stops. Ivo schedules another inspection rather than declaring the whole system permanently repaired. Sel writes a notice explaining that the small bell is an active water warning, not an invitation to enter the workings."
      ],
      "clues": [
        "a-clear"
      ],
      "routeLabel": "The underground mechanism",
      "choices": [
        {
          "id": "continue-a",
          "label": "Help Sel explain the bell to the village",
          "to": "ending-a"
        }
      ]
    },
    "b-path": {
      "title": "A line beneath the nettles",
      "location": "The parish boundary path",
      "body": [
        "Ben guides you along the public boundary path with Nessa’s survey sheet. The paving disappears beneath nettles, but three numbered boundary stones remain in order. A newer fence crosses the third stone. Its gate is chained by a mill owner who believed the path had become private when the passenger footbridge was removed. Ben has not yet found the document that settles that claim."
      ],
      "clues": [
        "b-path"
      ],
      "setFlags": [
        "route-b"
      ],
      "routeLabel": "The forgotten public path",
      "choices": [
        {
          "id": "continue-b",
          "label": "Read the path’s original grant",
          "to": "b-grant"
        }
      ]
    },
    "b-grant": {
      "title": "A right with a practical purpose",
      "location": "The parish archive room",
      "body": [
        "The grant reserves a passage “for inspection of the warning float and lower grating,” even if other public foot traffic is diverted. It places routine grating maintenance on the mill-water association and requires the chapel custodian to provide inspection access. The document is signed and entered into the later property transfer, where a shorthand note had made the reservation easy to miss."
      ],
      "clues": [
        "b-grant"
      ],
      "routeLabel": "The forgotten public path",
      "choices": [
        {
          "id": "continue-b",
          "label": "Check whether the documentary channel still carries water",
          "to": "common-log"
        }
      ]
    },
    "b-notices": {
      "title": "A complaint sent to the wrong name",
      "location": "The mill association office",
      "body": [
        "The association’s clerk finds two recent notices about ringing at the chapel. They were filed under St. Anne’s Drain instead of East Supply, so no maintenance visit was arranged. The association’s map and the junction stone now connect those names. The missed notices explain a delay in responsibility; they do not explain the physical bell mechanism by themselves."
      ],
      "clues": [
        "b-notices"
      ],
      "routeLabel": "The forgotten public path",
      "choices": [
        {
          "id": "continue-b",
          "label": "Ask for a joint inspection rather than a territorial argument",
          "to": "b-agreement"
        }
      ]
    },
    "b-agreement": {
      "title": "A gate opened by a document",
      "location": "The fence at the third stone",
      "body": [
        "The property clerk reads the retained grant to the mill owner and association representative. The owner agrees to unlock the gate for Ivo’s crew and to mark the reserved path, without conceding unrelated rights over the whole field. An inspection begins under qualified supervision. The crew reports debris at the grating and a float linkage entering the chapel wall."
      ],
      "clues": [
        "b-agreement"
      ],
      "routeLabel": "The forgotten public path",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose the account the records actually establish",
          "to": "b-decision"
        }
      ]
    },
    "b-decision": {
      "title": "A right is not the whole field",
      "location": "The reopened path",
      "body": [
        "The same route has been called public, private, abandoned, and dangerous during one afternoon. Its grant is more precise than any of those single words. What outcome follows from the actual reservation and the current inspection?"
      ],
      "puzzle": {
        "prompt": "Which action respects both the evidence and the grant’s scope?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Declare every surrounding field permanently public because an inspection path exists.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Keep the reserved inspection route accessible, assign the association’s grating maintenance, and leave unrelated property rights unresolved.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "File future warnings separately under both stream names without connecting them.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Treat the diverted footbridge as cancelling every maintenance right.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "b-record"
      },
      "routeLabel": "The forgotten public path"
    },
    "b-record": {
      "title": "Two names, one responsibility",
      "location": "The association’s map table",
      "body": [
        "Ben and the clerk cross-reference the stream names on both maps. Ivo’s crew clears the grating and confirms that falling water lowers the float and stops the auxiliary bell. The register now identifies who must respond to a warning and how to obtain access. The chapel’s mystery has become an obligation that can be found before the next storm."
      ],
      "clues": [
        "b-record"
      ],
      "routeLabel": "The forgotten public path",
      "choices": [
        {
          "id": "continue-b",
          "label": "Walk back to the chapel by the restored path",
          "to": "ending-b"
        }
      ]
    },
    "ending-a": {
      "title": "A bell allowed to mean something",
      "location": "The chapel porch",
      "body": [
        "Rain begins again while Sel fixes the explanatory notice under glass. The little bell remains quiet until the water reaches its warning mark; when it does, the crew knows where to look."
      ],
      "ending": {
        "title": "Resolved through the working mechanism",
        "body": [
          "You traced a separate float-operated hammer and responded to its measured warning. The old story grew around a real sound, but tying the hand rope never silenced the water system. Your route restored a practical response before the obstruction became a larger danger."
        ],
        "kind": "solved"
      }
    },
    "ending-b": {
      "title": "The line kept open",
      "location": "The boundary path",
      "body": [
        "The third stone is visible again. Ben adds a clean copy of the grant to the ordinary maintenance folder, where someone looking for a grating inspection will actually find it."
      ],
      "ending": {
        "title": "Resolved through the forgotten obligation",
        "body": [
          "You proved why the warning had gone unanswered: one stream had two names, an inspection right had been overlooked, and responsibility had slipped between files. Qualified inspection confirmed the float mechanism, while your route restored the access and records that will keep it useful."
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
          "id": "answer-3"
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
            "answer-3"
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
          "id": "answer-3"
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
          "id": "answer-3"
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
            "answer-3"
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
          "id": "answer-2"
        },
        {
          "type": "choice",
          "id": "continue-b"
        }
      ]
    }
  ]
};
