/** An original branching investigation. Solutions stay inside earned scenes. */
export default {
  "id": "blue-umbrella",
  "title": "The Blue Umbrella Witness",
  "genre": "Murder mystery",
  "difficulty": "Challenging",
  "duration": "10–20 min",
  "description": "A witness remembers a blue umbrella outside a museum after a death. Choose whether to test the street’s strange reflections or follow the witness’s interrupted evening.",
  "setting": "A riverside museum and the rain-lit arcade opposite it",
  "contentNote": "Non-graphic murder mystery; the investigation concerns records and testimony, not examination of a body.",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "ames",
      "name": "Inspector Ames",
      "role": "Investigating officer",
      "description": "Asks witnesses where they stood before asking what they think they saw.",
      "color": "#8a9fa5"
    },
    {
      "id": "rowan",
      "name": "Rowan Dale",
      "role": "Night porter",
      "description": "Watched the arcade from a locked office and is troubled by one image he cannot explain.",
      "color": "#b19a7b"
    },
    {
      "id": "oren",
      "name": "Oren Hale",
      "role": "Museum assistant",
      "description": "Prepared the late collection audit and says he spent the relevant interval away from the museum.",
      "color": "#9d95b2"
    },
    {
      "id": "linh",
      "name": "Linh Sato",
      "role": "Architectural glazier",
      "description": "Maintains the arcade’s angled glass and uses small diagrams when words become misleading.",
      "color": "#8fa184"
    },
    {
      "id": "tess",
      "name": "Tess Quinn",
      "role": "Florist",
      "description": "Carried a bright umbrella through the arcade while finishing an ordinary delivery.",
      "color": "#ba8c98"
    }
  ],
  "clues": [
    {
      "id": "interval",
      "title": "The established interval",
      "description": "The examiner places the death between 21:10 and21:20. The investigation does not require inspecting the body."
    },
    {
      "id": "view",
      "title": "Rowan’s actual viewpoint",
      "description": "He saw the umbrella in an angled panel with reversed RAB lettering at 21:16, not directly through the museum door."
    },
    {
      "id": "reflection",
      "title": "The verified reflection",
      "description": "The panel is a mirror, and its reflected cart can appear to approach the passage while remaining in the arcade."
    },
    {
      "id": "limited",
      "title": "What the umbrella account proves",
      "description": "A blue umbrella was in the arcade at 21:16; the reflection does not prove entry into the museum."
    },
    {
      "id": "alibi",
      "title": "Keys and an audio-only call",
      "description": "Oren claims a Crescent Hotel call at 21:05 and return of a key at 20:50; the register says F2, the service plan S4."
    },
    {
      "id": "audit",
      "title": "The21:10 appointment",
      "description": "The auditor scheduled a private21:10 meeting with Oren about acquisition payments; an appointment is not proof it occurred."
    },
    {
      "id": "keys",
      "title": "Two physically different keys",
      "description": "Linh demonstrates that F2 opens only the front office; S4 is a separate restricted service key issued to Oren and not recorded as returned."
    },
    {
      "id": "access-log",
      "title": "The restricted-key record",
      "description": "The service access register records Oren’s S4 credential at 21:12. The door officer confirms the logger was synchronized and the credential had not been reported lost."
    },
    {
      "id": "meeting-note",
      "title": "The recorded arrival",
      "description": "A duty officer’s authenticated recovery of the auditor’s recorder contains a21:13 spoken greeting to Oren, followed by discussion of his acquisition invoice. The examiner confirms the voice identification separately."
    },
    {
      "id": "florist",
      "title": "Tess’s independently timed route",
      "description": "A delivery receipt and shop camera place Tess under the arcade at 21:16, then back at the florist at 21:19 without entering the museum."
    },
    {
      "id": "sound",
      "title": "A clock that did not ring",
      "description": "The Crescent Hotel’s four-note clock was disconnected for repairs all evening. The museum telephone system used a recording of that same clock as a line-test cue."
    },
    {
      "id": "call-origin",
      "title": "The locally originated connection",
      "description": "The conference provider’s authenticated record places Oren’s21:05 call on the museum office line, not the hotel; the museum’s local logger corroborates the connection."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "An image across the street",
      "location": "The museum’s police reception point",
      "meets": [
        "ames"
      ],
      "clues": [
        "interval"
      ],
      "body": [
        "The museum’s collection auditor has been killed. Inspector Ames has secured the rooms, and your work will stay with witness interviews, public sightlines, and records supplied by the officers. There is no need to inspect the body. A medical examiner has placed the death between 21:10 and21:20.",
        "The night porter recalls a blue umbrella entering the museum’s rear passage at 21:16. The assistant, Oren Hale, says he left for a conference call across town at 21:00. Ames wants the umbrella account tested before officers let one vivid color decide whom to question next."
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
      "title": "What Rowan actually saw",
      "location": "The porter’s locked office",
      "meets": [
        "rowan"
      ],
      "clues": [
        "view"
      ],
      "body": [
        "Rowan shows you his chair beside the office window. He saw the umbrella in the large angled panel across the arcade, not through the museum doorway itself. Behind it were three letters he read as RAB. The bar opposite displays BAR in gold letters when viewed directly from the pavement.",
        "He remembers the umbrella moving from his left to his right. He is less certain which way the person’s feet pointed. The clock beside his desk matched the station signal that evening, so the time is not the uncertain part of his account. The route is."
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
      "title": "A useful small demonstration",
      "location": "The covered arcade",
      "clues": [
        "reflection"
      ],
      "body": [
        "Ames lets you compare the scene from Rowan’s position with a photograph taken on the pavement. The gold BAR sign faces the pavement; in the angled panel, its letters appear in reverse order. A posted maintenance diagram identifies that panel as a reflective wall at forty-five degrees, not a window through the building.",
        "A delivery cart moving along the arcade appears to move toward the museum’s rear passage in the panel, even though its real path stays on the public arcade. The demonstration does not tell you who owned the umbrella, but it changes what Rowan’s account can establish."
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
      "title": "A direction is not a destination",
      "location": "The arcade shelter",
      "body": [
        "Rowan supplied an honest time and a sincere image. The panel changed the relation between that image and the street. Which part of his account survives the sightline test, and which part requires a different source?"
      ],
      "puzzle": {
        "prompt": "What is the strongest conclusion supported by the sightline test?",
        "options": [
          {
            "id": "1",
            "label": "Rowan deliberately invented the umbrella.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The umbrella definitely entered the rear door because the time was accurate.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "The umbrella was in the arcade at 21:16, but the reflected direction does not prove museum entry.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Every event seen in a mirror must have happened at a different time.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "first-result"
      }
    },
    "first-result": {
      "title": "The account with a boundary",
      "location": "The police reception point",
      "clues": [
        "limited"
      ],
      "body": [
        "The reflection preserves the presence of a blue umbrella somewhere along the arcade at 21:16. It does not establish entry into the museum’s rear passage. Rowan is relieved that correcting the inference does not require calling him a liar. Ames records the distinction and removes “entered museum” from the witness summary.",
        "That leaves the assistant’s claimed absence to test. A person can be absent from a particular reflected image and still have access to a building. You need a separate physical route or an independent record of where Oren actually was."
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
      "title": "The assistant’s account",
      "location": "The museum interview room",
      "meets": [
        "oren"
      ],
      "clues": [
        "alibi"
      ],
      "body": [
        "Oren says his conference call began at 21:05 from the Crescent Hotel, two kilometers away. He remembers hearing the hotel’s distinctive four-note clock in the background. The call was audio-only; the participants did not see his room. He says the rear service door required a key he returned at 20:50.",
        "Ames produces the key register. It records a returned front-office key, F2. The service door is marked S4 on the museum’s emergency plan. Oren says the letters are interchangeable office shorthand, a claim that can be checked with someone who maintains the building."
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
      "title": "Two directions for the inquiry",
      "location": "The museum records desk",
      "clues": [
        "audit"
      ],
      "body": [
        "The auditor’s appointment book schedules a private discussion with Oren at 21:10 about missing acquisition payments. The book alone is not proof that they met, or that a dispute became a killing. It provides a reason to test the claimed hotel call carefully.",
        "Linh, the glazier who also maintains service-door fittings, can meet you at the rear court with the authorized officer. Alternatively, Ames can arrange contact with the blue umbrella’s owner, identified through a florist’s ordinary delivery receipt. Each route could give an independently testable account of the interval."
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
      "title": "Test a doorway, or follow a delivery",
      "location": "The museum steps",
      "body": [
        "The public must not hear an accusation based on the umbrella’s color. You can follow the building’s actual access arrangements, or trace the delivery and the supposed hotel sound. Choose which chain you will build for Ames.",
        "The two investigations will lead through different parts of the town. Whichever you choose, keep the same rule: a plausible motive is not an alibi, and a disproved alibi is not by itself a conviction. Look for evidence that connects a person, a place, and the relevant interval."
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Test the museum’s rear access with Linh",
          "to": "a-arrival",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Follow the umbrella owner and the supposed hotel sound",
          "to": "b-arrival",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a-arrival": {
      "title": "The door behind the reflection",
      "location": "The restricted service court",
      "meets": [
        "linh"
      ],
      "clues": [
        "keys"
      ],
      "body": [
        "An officer escorts you to the service court. Linh brings the maintenance register and two approved demonstration blanks. F2 and S4 have different profiles and open different fittings. The front-office return cannot stand in for a service-key return. The restricted-key register still assigns S4 to Oren.",
        "Linh does not speculate about the killing. She points to the access logger and explains what it records: a credential used, not a face. An officer will retrieve its record through the proper procedure. Your next deduction must distinguish possession, use, and personal identification."
      ],
      "routeLabel": "The service court",
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
      "title": "Which facts test the absence?",
      "location": "The service office",
      "body": [
        "The authorized record gives a21:12 use of Oren’s S4 credential. Its clock was checked against station time that afternoon. The door officer records no lost-key report, but a missing report would not rule out every possible borrowing. Consider the claims you can contradict now, and the question that still needs personal evidence."
      ],
      "routeLabel": "The service court",
      "puzzle": {
        "prompt": "Which TWO observations directly undermine Oren’s claim that he had returned all access and could not re-enter?",
        "options": [
          {
            "id": "1",
            "label": "F2 and S4 are different restricted fittings, so returning F2 does not return S4 access.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "His still-assigned S4 credential was used at 21:12 during the relevant interval.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "The umbrella was blue rather than black.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "The auditor scheduled a meeting, which proves it happened regardless of other evidence.",
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
      "title": "Access at the relevant minute",
      "location": "The service office",
      "clues": [
        "access-log"
      ],
      "body": [
        "The key-profile distinction disproves the claim that the returned front-office key established return of service access. The21:12 record places Oren’s restricted credential in use during the death interval. Together they justify testing Oren’s absence, but the logger alone cannot identify the hand that used the key.",
        "Ames asks her evidence team to review a recorder recovered through the investigation. You remain outside the sealed rooms. The next relevant fact comes with a documented source, rather than with a conveniently discovered object handled by a visitor."
      ],
      "routeLabel": "The service court",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-check"
        }
      ]
    },
    "a-check": {
      "title": "A greeting with a time",
      "location": "The police evidence briefing room",
      "clues": [
        "meeting-note"
      ],
      "body": [
        "Ames supplies an authenticated transcript from the auditor’s work recorder: at 21:13 he greets Oren by name and asks him to sit down beside invoiceA17. A speaker specialist has compared the assistant’s response with a consented interview recording. The recorder’s clock is independently checked.",
        "The transcript connects the person to the credential’s use and to the appointment. It is not necessary to embellish it with imagined dialogue. Faced with the converging evidence in a formal interview, Oren admits attending and contradicts his hotel story. Ames now has grounds to pursue the killing through the proper process."
      ],
      "routeLabel": "The service court",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-deduction"
        }
      ]
    },
    "a-deduction": {
      "title": "The evidence that belongs together",
      "location": "The police briefing room",
      "body": [
        "Choose the justified resolution of your inquiry. The reflected umbrella has been removed as an unsupported entry claim. The service credential and authenticated meeting record place Oren with the auditor in the established interval. A signed correction should preserve those distinctions rather than turn the porter’s mistake into the case’s foundation."
      ],
      "routeLabel": "The service court",
      "puzzle": {
        "prompt": "Which account best fits all evidence gathered on this route?",
        "options": [
          {
            "id": "1",
            "label": "The umbrella owner is responsible because a witness remembered a color.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Oren’s absence is disproved by separate credential and personally identified meeting evidence; the umbrella-entry inference should be withdrawn.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "A key logger alone proves every detail of a killing.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "The reversed sign invalidates the examiner’s time interval.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "a-ending"
      }
    },
    "a-ending": {
      "title": "A doorway, properly understood",
      "location": "The museum’s closed foyer",
      "body": [
        "Ames arrests Oren on the combined evidence and the admissions made during his recorded interview. Further evidence and a court will determine the charge; your report makes no private verdict. Rowan reads the corrected statement and signs it without the sentence that put an umbrella through a door. The museum’s trustees suspend the disputed acquisitions pending an independent audit."
      ],
      "routeLabel": "The service court",
      "ending": {
        "title": "The service-door case",
        "body": [
          "You resolved the investigation through access records and a personally identified encounter. The porter’s observation remains in the file for what it actually showed, and no more."
        ],
        "kind": "solved"
      }
    },
    "b-arrival": {
      "title": "The woman with the ordinary errand",
      "location": "Tess’s flower shop",
      "meets": [
        "tess"
      ],
      "clues": [
        "florist"
      ],
      "body": [
        "Tess Quinn sets a wet blue umbrella in a stand and shows Ames the delivery receipt she kept because the recipient changed the order. A shop camera recorded her departure at 21:14 and return at 21:19. The signed receipt from the arcade café falls between them. Neither her route nor Rowan’s reflection requires her to enter the museum.",
        "She remembers hearing the four-note hotel clock through an open office vent as she passed. That sounds like support for Oren’s hotel story until you ask why a clock two kilometers away would be audible through a museum vent."
      ],
      "routeLabel": "The florist’s delivery",
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
      "title": "A sound is not an address",
      "location": "The flower shop counter",
      "body": [
        "Ames calls the Crescent Hotel’s duty manager on its published number. The clock’s repair sheet says it was disconnected at 18:00 and reconnected the next morning. The museum telephone manual lists a recording of its four-note chime as a test cue. Select the pair that tests the claim that hearing the chime proves a hotel location."
      ],
      "routeLabel": "The florist’s delivery",
      "puzzle": {
        "prompt": "Which TWO facts show that the four-note sound cannot by itself prove Oren was at the hotel?",
        "options": [
          {
            "id": "1",
            "label": "The actual hotel clock was independently documented as disconnected that evening.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The museum telephone system held a recording of the same chime.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Tess’s umbrella was a common shade sold in several shops.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "A conference participant described Oren as sounding confident.",
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
      "title": "The familiar sound moved",
      "location": "The hotel’s public service desk",
      "clues": [
        "sound"
      ],
      "body": [
        "The independent repair sheet rules out the actual hotel clock ringing that evening. The museum’s documented line-test recording explains how the same sound could come from its office equipment. Neither fact alone identifies Oren’s location, but together they remove the sound as a reliable hotel alibi.",
        "The duty manager cannot provide private guest records to a visitor. Ames obtains the relevant call-origin record through the investigation. You follow the evidence to a lawful source instead of trying to trick a receptionist into disclosing somebody’s stay."
      ],
      "routeLabel": "The florist’s delivery",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-check"
        }
      ]
    },
    "b-check": {
      "title": "The line behind the voice",
      "location": "The police communications room",
      "clues": [
        "call-origin"
      ],
      "body": [
        "The authenticated conference-provider log identifies the origin of Oren’s21:05 connection as the museum’s fixed office line. The museum logger confirms an outgoing connection at the same time and duration. The audio-only participants heard the line-test chime; they did not witness a hotel room.",
        "In a formal interview, Oren first calls the museum connection a routing error, then admits staying for the auditor’s meeting. The meeting’s subject and subsequent admissions allow Ames to act on a case that no longer depends on an umbrella seen in reflection."
      ],
      "routeLabel": "The florist’s delivery",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-deduction"
        }
      ]
    },
    "b-deduction": {
      "title": "A witness fairly corrected",
      "location": "The police interview corridor",
      "body": [
        "Your route has independently accounted for Tess’s ordinary delivery, disproved the chime as a hotel-location marker, and placed Oren’s call on the museum line. Choose the conclusion that fits those sources without turning a mistaken inference into an accusation against its witness."
      ],
      "routeLabel": "The florist’s delivery",
      "puzzle": {
        "prompt": "Which conclusion is supported by the delivery-and-sound route?",
        "options": [
          {
            "id": "1",
            "label": "Tess must have entered the museum because reflections never distort direction.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The chime proves Oren was at the hotel despite the independent call-origin record.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Tess’s delivery explains the umbrella, while the repaired clock and two call logs undermine Oren’s hotel alibi.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "A visitor should publish private hotel guest lists to settle the matter.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "b-ending"
      }
    },
    "b-ending": {
      "title": "The umbrella returned",
      "location": "The riverside arcade",
      "body": [
        "Ames arrests Oren after his recorded admissions and the corroborating communications evidence. Tess receives her umbrella back, no longer treated as an identifying token of guilt. Rowan’s statement is amended to distinguish the reflected movement from an actual entry. At the arcade café, the delivered flowers remain in their vase: one ordinary part of an evening that deserved a more careful account."
      ],
      "routeLabel": "The florist’s delivery",
      "ending": {
        "title": "The alibi behind the sound",
        "body": [
          "You solved the inquiry through an ordinary delivery and the provenance of a familiar sound. A witness’s vivid memory became useful once you separated what she heard from where she assumed it originated."
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
          "id": "3"
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
          "id": "3"
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
          "id": "3"
        }
      ]
    }
  ]
};
