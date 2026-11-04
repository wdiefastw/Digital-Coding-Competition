/** Original case; answer keys and route proofs are never projected into the reading interface. */
export default {
  "id": "salt-marsh",
  "title": "The Lantern Beyond the Marsh",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "Saltmere’s tidal reserve during an autumn sea mist",
  "description": "A lantern shines in a hut that should be empty, and a reserve guide has not returned. Follow the water markers or recover the old walking route before the tide turns.",
  "revision": 2,
  "flags": [
    "water",
    "causeway"
  ],
  "characters": [
    {
      "id": "beth",
      "name": "Beth Orr",
      "role": "Reserve warden",
      "description": "Distinguishes weather reports from the weather outside her own door.",
      "color": "#8b9e92"
    },
    {
      "id": "dan",
      "name": "Dan Eves",
      "role": "Boat pilot",
      "description": "Mends his own marker buoys and writes every crossing in pencil.",
      "color": "#869ba8"
    },
    {
      "id": "ada",
      "name": "Ada Pike",
      "role": "Retired surveyor",
      "description": "Still carries a folded map whose corrections matter more than its printed lines.",
      "color": "#b19572"
    },
    {
      "id": "lew",
      "name": "Lew Moss",
      "role": "Birdwatching guide",
      "description": "Leaves careful notes for visitors who arrive late.",
      "color": "#a48eaa"
    }
  ],
  "clues": [
    {
      "id": "smw-tide",
      "title": "The local entry rule",
      "description": "Enter the survey channel only while marker B’s white strip is visible; the 6:50 photograph shows it fully exposed."
    },
    {
      "id": "smw-map",
      "title": "The shape-marked channel plan",
      "description": "The permit route is square post, inland side of triangle, then round post; water arrows indicate downstream flow rather than a destination."
    },
    {
      "id": "smw-battery",
      "title": "A supplied battery at the hut channel",
      "description": "A wrapper with Lew’s check number reached the round marker; the hut lamp is steady only with a charged connected battery."
    },
    {
      "id": "smw-reply",
      "title": "A deliberate welfare reply",
      "description": "The hut answers the reserve’s two-short welfare request with the documented one-long assistance signal."
    },
    {
      "id": "smw-voice",
      "title": "An identified, stable caller",
      "description": "The caller supplies Lew’s verified daily check phrase and reports a collapsed south step, an injured ankle, and a clear north window."
    },
    {
      "id": "smw-platform",
      "title": "An approved north-window platform",
      "description": "The reserve’s inspected lifting platform can reach the clear north window without using the broken south step."
    },
    {
      "id": "smw-return",
      "title": "The return remains monitored",
      "description": "The crew observes the white strip before entry and continuously; the apparent mud shortcut is prohibited drainage ground."
    },
    {
      "id": "sml-map",
      "title": "The corrected causeway entrance",
      "description": "Ada’s signed correction places the service causeway east of the drainage gate; use it only while the lower blue bar remains dry."
    },
    {
      "id": "sml-times",
      "title": "The service-gate times",
      "description": "High water was 4:00; inspections were gate 1 2:10, gate 2 4:40, gate 3 3:05. The lower blue bar at gate 2 is dry."
    },
    {
      "id": "sml-notebook",
      "title": "Lew’s revised job note",
      "description": "Lew’s notebook warns of the unsafe south step and points to the hut’s maintenance approach; it does not establish his present condition."
    },
    {
      "id": "sml-shutter",
      "title": "A deliberate signal from the causeway window",
      "description": "The one-crossbar east window opens over the causeway and gives the documented circular assistance signal."
    },
    {
      "id": "sml-identity",
      "title": "An identified caller at the east window",
      "description": "The caller gives Lew’s verified phrase and reports that he cannot bear weight; the low east sill can take an approved transfer seat."
    },
    {
      "id": "sml-seat",
      "title": "An inspected transfer method",
      "description": "The transfer seat is approved for the hard service causeway and low east sill; the crew will monitor the dry blue bar throughout."
    },
    {
      "id": "sml-return",
      "title": "The return constraint",
      "description": "The apparent shortcut is a thin-surfaced drainage basin; the same inspected causeway and live blue-bar limit govern the return."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A light beyond the reeds",
      "location": "Saltmere reserve office",
      "body": [
        "At dusk a visitor photographs a steady light in the old survey hut. The hut stands beyond a channel that most maps call impassable, and Lew has not returned from checking a damaged bird hide. Beth does not call it a ghost story. She has his departure note, a visitor photograph, and an out-of-date map. The reserve’s emergency team is available, but they need a usable approach rather than a guess at a glowing square. You agree to establish where Lew could have gone and which route can safely reach the hut."
      ],
      "meets": [
        "beth"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Hear the account in full",
          "to": "briefing"
        }
      ]
    },
    "briefing": {
      "title": "The useful limits of a photograph",
      "location": "The reserve noticeboard",
      "body": [
        "Beth marks the photograph’s position on the office map. It proves a light was visible in the hut window, not who lit it. Lew’s note names two jobs: check the east hide and leave spare batteries at the survey hut. A failed boardwalk is marked in red, while the old maintenance causeway is absent from the modern visitor sheet. The tide turns later tonight. Nobody will reward you for arriving quickly by an unsafe route. You can work with Dan along the water or follow Ada’s corrected land records; the emergency crew can act on either verified plan."
      ],
      "meets": [
        "dan"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Choose your investigation",
          "to": "crossroads"
        }
      ]
    },
    "crossroads": {
      "title": "Two ways to reach a light",
      "location": "The reserve gate",
      "body": [
        "Dan can take one investigator to inspect the channel markers before his permit window closes. Ada can instead walk the service side of the reserve while the drainage keeper is still on duty. Water evidence will establish a navigable approach and confirm the hut’s channel frontage. Land evidence will reconstruct a maintenance route the visitor map omitted. Both are complete ways to locate the missing guide. Choose which chain you will verify; tonight’s visibility means the team will follow one established approach rather than improvise a combination in the mist."
      ],
      "meets": [],
      "choices": [
        {
          "id": "water",
          "label": "Follow the channel markers",
          "to": "water-0",
          "excludesFlags": [
            "causeway"
          ]
        },
        {
          "id": "causeway",
          "label": "Recover the maintenance walking route",
          "to": "causeway-0",
          "excludesFlags": [
            "water"
          ]
        }
      ]
    },
    "water-0": {
      "title": "The tide card in its case",
      "location": "The boat landing",
      "body": [
        "Dan shows the reserve’s local tide card. At the outer landing the water is falling until 7:20, then rising. The survey channel can be entered only while the white strip on marker B remains above the water; a painted notice makes that rule independent of anyone’s memory. Dan’s photograph at 6:50 shows the white strip fully visible. The outer sea may still look calm after the strip disappears, but the channel’s return current will then be unsafe. You record the local marker rule before studying distances or listening to any tale about the hut."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [
        "dan"
      ],
      "setFlags": [
        "water"
      ],
      "clues": [
        "smw-tide"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-1",
          "requires": []
        }
      ]
    },
    "water-1": {
      "title": "Three posts in a bend",
      "location": "The outer channel",
      "body": [
        "A fixed diagram on Dan’s permit shows the route: start at the square post, pass the triangular post on its inland side, and stop at the round post. A note says the arrowheads on the water point downstream, not toward the hut. Through the mist you can see an arrow at the triangular marker pointing left, while the hut lies beyond the right-hand branch. Following arrows as if they were direction signs would put you on the wrong channel. The diagram names shapes precisely so a faded color does not defeat the instructions."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "clues": [
        "smw-map"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-2",
          "requires": [
            "smw-tide",
            "smw-map"
          ]
        }
      ]
    },
    "water-2": {
      "title": "Read the channel, not the rumor",
      "location": "The boat landing",
      "body": [
        "Choose the safe interpretation of the marker evidence. The route has a physical entry condition and a shape-based navigation rule. You do not need to know a regional tide timetable; the reserve has supplied the local standard. An answer that gets the branch right but ignores the entry condition is not a safe plan, and an answer that follows the current arrow mistakes a measurement for an instruction."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "puzzle": {
        "prompt": "Which plan correctly interprets the local navigation rules?",
        "options": [
          {
            "id": "safe",
            "label": "Enter while the white strip is visible, then follow square–inland triangle–round.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "arrow",
            "label": "Follow the downstream arrows until the hut appears.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "later",
            "label": "Ignore marker B because the open sea looks calm.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "mud",
            "label": "Cross the pale mud area because the visitor sheet colors it as land.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "water-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "water-0"
        }
      ]
    },
    "water-3": {
      "title": "A battery packet on the bank",
      "location": "The round marker",
      "body": [
        "At the round post, Dan points to a reserve battery wrapper caught above the mud. It carries Lew’s check number and a time written before the office closed. There are no footprints to interpret on the hard landing, so you do not invent any. The wrapper establishes that Lew’s supply packet reached this place. Its printed replacement instruction says a hut lamp will pulse when its battery is low and shine steadily when a charged battery is connected. The visitor’s photograph shows a steady light. That fact is consistent with someone using the delivered batteries, but does not yet identify the person."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "clues": [
        "smw-battery"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-4",
          "requires": []
        }
      ]
    },
    "water-4": {
      "title": "A reply in the window",
      "location": "The channel beside the hut",
      "body": [
        "Dan uses the reserve’s posted signal: two short flashlight flashes request a welfare reply, answered by one long flash if a person needs assistance but can wait. From the hut window comes one long flash, then a torch disappears. You can now distinguish a human reply from the original photograph’s passive light. Beth confirms by radio that no other team is in the hut. Do not turn that absence into a name, however. A visitor could also be inside. The rescue team will need a direct voice or a personal detail supplied by the respondent."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "clues": [
        "smw-reply"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-5",
          "requires": []
        }
      ]
    },
    "water-5": {
      "title": "A voice over the spare set",
      "location": "The moored reserve boat",
      "body": [
        "Dan’s spare radio works on the short reserve channel. The person inside identifies himself as Lew and gives the day’s check phrase from his departure card; Beth confirms the phrase privately. He says the hut’s outside step has collapsed and his ankle will not take a jump to the bank. He is warm, has a working lamp, and can wait. His message adds a small but vital restriction: the north window opens outward above clear water, while the south door opens over the broken step. Your evidence now supports a rescue plan, not a search for a supernatural explanation."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [
        "lew"
      ],
      "clues": [
        "smw-voice"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-6",
          "requires": [
            "smw-reply",
            "smw-voice"
          ]
        }
      ]
    },
    "water-6": {
      "title": "Which observations establish a person in need?",
      "location": "The moored boat",
      "body": [
        "Select the two observations that move the case beyond a photograph of a light. One demonstrates intentional response; the other verifies identity and condition. A battery wrapper alone would not establish who is present, and a local legend does not become evidence because the weather is dramatic. Your explanation should remain valid even if the lamp could have been left on unattended."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations verify an identified person requiring assistance?",
        "options": [
          {
            "id": "signal",
            "label": "The hut gives the documented deliberate welfare reply.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "phrase",
            "label": "The radio caller supplies Lew’s verified phrase and reports his condition.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "wrapper",
            "label": "A battery wrapper bears a reserve check number.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "legend",
            "label": "Visitors repeat an old story about the light.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "water-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "water-4"
        }
      ]
    },
    "water-7": {
      "title": "A rescue with a limit",
      "location": "The round marker",
      "body": [
        "Beth authorizes the reserve rescue crew to use your verified channel plan. The boat cannot land at the broken south step, and nobody will ask Lew to jump with an injured ankle. Dan’s permit includes a low lifting platform for the north window, used during hut maintenance. Its safety inspection is current. You have the right approach, the right window, and a caller who can follow instructions. A final check concerns the return: marker B’s strip is still visible, but the crew must observe it at departure rather than rely on your earlier photograph."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "clues": [
        "smw-platform"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-8",
          "requires": []
        }
      ]
    },
    "water-8": {
      "title": "The check at the turning point",
      "location": "The square marker",
      "body": [
        "The rescue crew reports marker B’s white strip still above water before entering. They record the time and assign one person to watch the marker throughout the operation. Dan asks whether the crew should take a shortcut across the mud on the return, since the water route took longer than expected. The permit forbids it: the area between the triangular and round markers is soft drainage ground, not a bank. The visitor’s map color made it look solid. You remind the crew that a plan’s constraints still apply after its most dramatic moment has passed."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "clues": [
        "smw-return"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-9",
          "requires": [
            "smw-platform",
            "smw-return"
          ]
        }
      ]
    },
    "water-9": {
      "title": "Choose the complete rescue plan",
      "location": "The reserve radio channel",
      "body": [
        "You have enough evidence to state a plan with both a way in and a way out. Choose the one that respects the verified channel markers, live entry condition, injured caller, and inspected equipment. The wrong plan may contain one attractive detail—a nearby door or a shorter-looking patch of ground—but a safe explanation must fit all the established restrictions at once."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "puzzle": {
        "prompt": "Which complete plan fits the evidence?",
        "options": [
          {
            "id": "north",
            "label": "Use the monitored marked channel and inspected platform at the north window; return by the same verified route.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "jump",
            "label": "Ask Lew to jump from the broken south step into the boat.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "shortcut",
            "label": "Rescue through the window, then save time over the prohibited mud.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "wait",
            "label": "Leave the caller until morning because the first photograph proved nothing.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "water-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "water-7"
        }
      ]
    },
    "water-10": {
      "title": "A lantern carried home",
      "location": "Saltmere boat landing",
      "body": [
        "The crew brings Lew back through the north window on the approved platform. Dan follows the shape-marked channel while the observer keeps the tide strip in sight. The spare lamp returns with Lew, still shining steadily. Beth logs an ordinary equipment failure with a serious consequence: the collapsed step and the outdated visitor map will both be corrected. Your water route resolved the mystery by turning a photograph into a verified signal, a verified identity, and a monitored rescue approach."
      ],
      "routeLabel": "Follow the channel markers",
      "meets": [],
      "ending": {
        "title": "Solved by the water route",
        "kind": "solved",
        "body": [
          "A careful chain of navigation, signaling, and identity checks brought the guide home. The light was never the explanation; it was the beginning of an investigation."
        ]
      }
    },
    "causeway-0": {
      "title": "A map with corrections",
      "location": "Ada’s survey room",
      "body": [
        "Ada’s old plan shows a service causeway where the visitor sheet shows blank marsh. A written correction moves its entrance east of the drainage gate, not west as printed. The causeway is passable only while the gate’s lower blue bar is dry. Ada’s photograph from an hour ago shows the bar, but she insists you will have to check it again at the gate. Maps describe positions; old photographs describe earlier conditions. You need both the corrected geography and a current physical check before recommending that anyone walks beyond the visitor boundary."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [
        "ada"
      ],
      "setFlags": [
        "causeway"
      ],
      "clues": [
        "sml-map"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "causeway-1",
          "requires": []
        }
      ]
    },
    "causeway-1": {
      "title": "The gatekeeper’s sequence",
      "location": "The drainage gate",
      "body": [
        "The keeper has three numbered service gates. The maintenance instruction reads “take the only gate whose inspection is later than the last high water.” Gate one was inspected at 2:10, gate two at 4:40, and gate three at 3:05. The last high water recorded on the board is 4:00. Only one inspection therefore verifies a route after that event. The blue bar is currently dry at that gate. Ada points out that “highest gate number” and “most recent inspection” would give different answers. Use the supplied times rather than guessing from how sturdy a gate looks."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "clues": [
        "sml-times"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "causeway-2",
          "requires": [
            "sml-map",
            "sml-times"
          ]
        }
      ]
    },
    "causeway-2": {
      "title": "The route after high water",
      "location": "The keeper’s desk",
      "body": [
        "Choose the entrance supported by the corrected map and the post-high-water inspection. The relevant comparison is not which number is largest or which path seems shortest. You are verifying that someone checked the route after the event that could have changed it. A historic map can tell you that a causeway exists without proving it is safe tonight."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "puzzle": {
        "prompt": "Which gate provides the verified approach tonight?",
        "options": [
          {
            "id": "two",
            "label": "Gate two, east of the drainage gate, with its post-4:00 inspection and currently dry bar.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "three",
            "label": "Gate three because its number is highest.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "one",
            "label": "Gate one because the earliest inspection leaves the longest margin.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "photo",
            "label": "Any gate that looked dry in Ada’s hour-old photograph.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "causeway-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "causeway-0"
        }
      ]
    },
    "causeway-3": {
      "title": "A notebook beside a drain",
      "location": "The service causeway",
      "body": [
        "Beyond gate two, Ada finds a reserve notebook under the shelter of an inspection box. Its page lists Lew’s two intended jobs and an addition: “south step unsafe; use maintenance approach.” The paper is dry beneath the lid, with his pencil attached by its familiar cord. This places his notebook on the causeway but does not prove his present location. A later line contains the hut’s service symbol and the word “lamp.” You record the sequence without promoting an abandoned object into a witness. There is still a person to find."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "clues": [
        "sml-notebook"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "causeway-4",
          "requires": []
        }
      ]
    },
    "causeway-4": {
      "title": "Two sets of shutters",
      "location": "The causeway’s end",
      "body": [
        "The old maintenance key describes the hut shutters: the north window has two vertical slats and opens over water; the east window has one crossbar and opens above the causeway. From the end of the path you can see a hand moving the crossbar window’s torch in a deliberate circle. Ada’s card says a circle means “cannot walk, assistance needed,” whereas a steady light has no welfare meaning. The position identifies the east window without relying on mist-obscured compass directions. You ask Beth to confirm that no second reserve party is already at the hut."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "clues": [
        "sml-shutter"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "causeway-5",
          "requires": []
        }
      ]
    },
    "causeway-5": {
      "title": "A question only the guide can answer",
      "location": "Outside the east window",
      "body": [
        "You call the departure-card challenge through the window. The response matches Lew’s private check phrase, which Beth confirms by radio. Lew has twisted his ankle after the outside step gave way. He can sit and move his arms but cannot put weight on the foot. The east window’s sill is low enough for the reserve’s wheeled transfer seat; the south door is not usable. Ada refuses to improvise a stretcher from a rotten shutter. The keeper has an inspected transfer seat at the gate, and the crew can bring it along the verified causeway."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [
        "lew"
      ],
      "clues": [
        "sml-identity"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "causeway-6",
          "requires": [
            "sml-shutter",
            "sml-identity"
          ]
        }
      ]
    },
    "causeway-6": {
      "title": "From a found notebook to a located person",
      "location": "The hut wall",
      "body": [
        "Select the two observations that establish an identified person currently needing help. The notebook supports the route but could have been left earlier. The shutter signal establishes intentional communication now; the verified private reply establishes who is communicating. Good rescue evidence can accumulate without making every earlier object carry more meaning than it actually has."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations locate an identified person needing assistance now?",
        "options": [
          {
            "id": "signal",
            "label": "The east window gives the documented intentional circle signal.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "challenge",
            "label": "The caller answers Lew’s private challenge and reports his condition.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "notebook",
            "label": "A notebook was found earlier in an inspection box.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "glow",
            "label": "A visitor photographed a steady light through the mist.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "causeway-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "causeway-4"
        }
      ]
    },
    "causeway-7": {
      "title": "The equipment the path allows",
      "location": "The drainage gate",
      "body": [
        "The crew brings the inspected wheeled transfer seat. Its record says it is suitable for the hard service causeway and a low window sill, but not for carrying over open mud. The gatekeeper closes visitor access so nobody follows without a safety briefing. Before leaving, the crew checks that the lower blue bar is still dry and assigns a member to monitor the gate by radio. You have converted an omitted line on a visitor map into an independently checked route with a live limit, rather than simply treating an older map as automatically more trustworthy."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "clues": [
        "sml-seat"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "causeway-8",
          "requires": []
        }
      ]
    },
    "causeway-8": {
      "title": "The shortest line is not a path",
      "location": "The east hut window",
      "body": [
        "The seat reaches the east sill without crossing broken timber. Lew asks after his notebook, relieved that someone found the warnings he had written before his fall. A visitor suggests cutting across the mud to the public boardwalk on the way back. Ada’s plan marks that area as a drainage basin with a thin surface, so the shorter line is not an alternative route. The crew should leave by the same inspected causeway while the blue bar permits it. Your final recommendation must include the return, not merely the successful arrival."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "clues": [
        "sml-return"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "causeway-9",
          "requires": [
            "sml-seat",
            "sml-return"
          ]
        }
      ]
    },
    "causeway-9": {
      "title": "Give the crew a complete instruction",
      "location": "The reserve radio channel",
      "body": [
        "Choose the rescue plan justified by the current gate check, shutter identification, caller verification, and equipment record. A plan is not made safe by its destination alone. It needs a permitted entrance, a suitable transfer point, and a return that remains within the same conditions. The case began with a light, but the answer is a sequence of verifiable decisions."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "puzzle": {
        "prompt": "Which plan satisfies the complete land-route evidence?",
        "options": [
          {
            "id": "seat",
            "label": "Use the monitored inspected causeway and transfer seat at the east sill, returning by the same route.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "door",
            "label": "Force the broken south door and carry Lew across the damaged step.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "mud",
            "label": "Use the causeway in, then shorten the return over the drainage basin.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "oldmap",
            "label": "Ignore the current bar because the route appears on an old map.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "causeway-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "causeway-7"
        }
      ]
    },
    "causeway-10": {
      "title": "The old route on the new map",
      "location": "Saltmere reserve office",
      "body": [
        "Lew returns along the hard causeway in the transfer seat, notebook on his lap. The blue bar remains dry until the crew is back at the gate. Beth records the broken step and updates the visitor guidance to explain that the service causeway exists but is not an unsupervised shortcut. Ada gives the corrected survey a new date. You resolved the case through land records, current inspections, and a verified window reply: the same missing guide reached safely by a different chain of places and reasoning."
      ],
      "routeLabel": "Recover the maintenance walking route",
      "meets": [],
      "ending": {
        "title": "Solved by the maintenance path",
        "kind": "solved",
        "body": [
          "Your route recovered the safe meaning of an old survey, checked it against present conditions, and brought the guide back without turning a map omission into a dangerous shortcut."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "water-complete",
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
          "id": "water"
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
          "id": "safe"
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
          "id": [
            "signal",
            "phrase"
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
          "id": "north"
        }
      ]
    },
    {
      "id": "causeway-complete",
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
          "id": "causeway"
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
          "id": "two"
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
          "id": [
            "signal",
            "challenge"
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
          "id": "seat"
        }
      ]
    }
  ]
};
