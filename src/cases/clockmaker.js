/** Expanded, authored mystery. Only earned scenes belong in the reader. */
export default {
  "id": "clockmaker",
  "title": "The Clockmaker’s Parcel",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "The festival clock has stopped. Two parcels have crossed a crowded town, and the way you follow them will decide who is willing to help you set things right.",
  "setting": "A riverside town on the morning of its lantern festival",
  "characters": [
    {
      "id": "agnes",
      "name": "Agnes Bell",
      "role": "Clockmaker",
      "description": "Listens before she answers, whether the sound comes from a clock or a person.",
      "color": "#a18970"
    },
    {
      "id": "bea",
      "name": "Bea Moss",
      "role": "Apprentice",
      "description": "Writes precise lists and keeps their crossed-out versions.",
      "color": "#a18970"
    },
    {
      "id": "silas",
      "name": "Silas Pike",
      "role": "Baker",
      "description": "Often carries parcels for neighbors on his early rounds.",
      "color": "#a18970"
    },
    {
      "id": "nell",
      "name": "Nell Crane",
      "role": "Festival marshal",
      "description": "Has promised the square a working clock at sunset.",
      "color": "#a18970"
    },
    {
      "id": "iris",
      "name": "Iris Vale",
      "role": "Boatwoman",
      "description": "Keeps delivery receipts in the pocket of her oilskin.",
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
      "id": "register",
      "title": "Two independent weights",
      "description": "Before sealing, the blue box weighed 640 grams and the brown sleeve 910. A copied destination list reverses their destinations but repeats those measurements."
    },
    {
      "id": "wind",
      "title": "Packing materials",
      "description": "The crescent was packed in green tissue; the molds were wrapped in gray felt. The label accident happened after both packages had been filled."
    },
    {
      "id": "acknowledgment",
      "title": "The return rule",
      "description": "A sealed misdelivery can be returned free when the original sender countersigns a release naming its physical description."
    },
    {
      "id": "mechanism",
      "title": "The hidden witness mark",
      "description": "The cleaned crescent’s narrow end must face the red mark. A disconnected test with the brass peg checks orientation without striking the bell."
    },
    {
      "id": "timing",
      "title": "Clock corrections",
      "description": "Before ten, shop time lagged real time by six minutes; the quay was correct; the station watch ran four minutes fast. Minimum walks were eight minutes shop-to-quay and four quay-to-station."
    },
    {
      "id": "a-quay",
      "title": "Silas’s receipt",
      "description": "Silas signed for one sealed blue parcel, then put it in his bakery pantry. The receipt does not identify its contents."
    },
    {
      "id": "a-iris",
      "title": "The quay transfer",
      "description": "Iris witnessed the sealed blue package passing to Silas at 9:06; the brown sleeve stayed for the noon barge."
    },
    {
      "id": "a-pantry",
      "title": "The pantry measurement",
      "description": "The sealed blue box in Silas’s pantry weighs 640 grams and shows green packing tissue beneath a loose outer fold."
    },
    {
      "id": "a-home",
      "title": "An intact return",
      "description": "The countersigned blue package was opened at Agnes’s bench; its contents and packing match the original crescent description."
    },
    {
      "id": "a-ringing",
      "title": "The safe test",
      "description": "The hammer moved freely during a disconnected test with the crescent aligned to the cleaned red mark."
    },
    {
      "id": "a-square",
      "title": "A documented chain",
      "description": "The original measurement, transfer receipts, release, and safe test establish the return without treating a mistaken label as theft."
    },
    {
      "id": "b-bench",
      "title": "Unchanged packing entry",
      "description": "Bea’s original packing entry predates the gust and records the crescent in green tissue; the copied destination entry was written afterward."
    },
    {
      "id": "b-tool",
      "title": "A trial fitting",
      "description": "The wooden trial crescent copies the cleaned part’s red orientation mark but is not strong enough to lift the hammer."
    },
    {
      "id": "b-tracing",
      "title": "A messenger’s description",
      "description": "The tracing gives the crescent’s outline and orientation; green tissue identifies its packing. These details can identify a returned item without trusting its address."
    },
    {
      "id": "b-return",
      "title": "The messenger’s return",
      "description": "A sealed 640-gram blue box returned with signed custody receipts. Its crescent matches Bea’s tracing when opened at the workshop."
    },
    {
      "id": "b-instruction",
      "title": "The dated correction",
      "description": "A dated new drawing records the cleaned red mark and disconnected test; the superseded diagram remains available as a historical record."
    },
    {
      "id": "b-lesson",
      "title": "A complete repair record",
      "description": "The corrected packing account, custody receipts, dated diagram, and safe test can all be checked independently by the next repairer."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A clock without its voice",
      "location": "Bell’s clock shop",
      "body": [
        "Agnes Bell has wound the town clock, polished its hands, and put on the good apron she saves for festival days. Still, the bell will not ring. The brass crescent that lifts its hammer has vanished from the workbench. Two cardboard boxes stand where four stood yesterday. One is tied with blue string; the other has a brown paper sleeve.",
        "Nell, the festival marshal, needs an answer before she orders a replacement bell cart. Agnes offers you two useful beginnings: trace the outgoing parcels along the river, or help Bea reconstruct what happened inside the shop. You cannot do both before Nell makes her decision. Whichever path you choose, promise only what the evidence can support."
      ],
      "meets": [
        "agnes",
        "nell"
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Follow the parcels along the riverside delivery route",
          "to": "a-quay",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Stay in the workshop and reconstruct the repair",
          "to": "b-bench",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "register": {
      "title": "A list with a second life",
      "location": "The public weighing office",
      "body": [
        "The clerk lets you read yesterday’s register. At 8:40 Agnes brought in two packages: a blue box, 640 grams, for a clock fitting, and a brown sleeve, 910 grams, for baking molds. At 8:45 she returned with both because the office had run out of sealing paper. A note in a different hand says, “Labels copied at shop; retain original weights.”",
        "Bea’s copied list reverses the destinations but keeps the weights. That is not enough to say which list is wrong: a copied destination might have been corrected deliberately. You photograph both entries and keep the distinction between a physical measurement and a person’s description. The parcels may have changed labels, contents, or both."
      ],
      "clues": [
        "register"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "wind"
        }
      ]
    },
    "wind": {
      "title": "The unhelpful gust",
      "location": "The shop’s side counter",
      "body": [
        "Bea remembers opening the river door to cool the glue. A gust lifted three loose labels and the corners of the order book. She caught the book; Silas caught one label; the third slid beneath the counter. She did not see where the two loose labels were finally attached.",
        "A chalk sketch on the counter records the packing arrangement. The clock crescent rested on green tissue because polishing wax could stain ordinary paper. The baking molds were wrapped in gray felt to protect their sharp rims. Tissue and felt are workshop observations, not guesses about the parcels’ later owners. Bea gives you the sketch despite being afraid it will make her look careless."
      ],
      "meets": [
        "bea"
      ],
      "clues": [
        "wind"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "identity"
        }
      ]
    },
    "identity": {
      "title": "What can a label establish?",
      "location": "The weighing-office desk",
      "body": [
        "The office clerk asks you to choose a working description for the missing parcel. Choosing incorrectly will send the next messenger to the wrong end of town. The original weights and Bea’s packing sketch predate the gust; the destination labels were loose afterward. There is no sign that either box was opened during the confusion.",
        "You do not yet know who finally received the crescent. First establish what kind of evidence can identify its package. A sound description should survive the possibility that the two destination labels were exchanged. Pick every observation that helps identify the package independently of its written address."
      ],
      "puzzle": {
        "prompt": "Which observations identify the crescent’s package independently of a loose destination label?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "The original blue package weighed 640 grams.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "Agnes wanted the clock finished today.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The crescent was packed against green tissue before the gust.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "The copied address says “bakery.”",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "acknowledgment"
      }
    },
    "acknowledgment": {
      "title": "An instruction worth keeping",
      "location": "The courier notice board",
      "body": [
        "You write “640 grams, blue outer box, green tissue inside” on a fresh inquiry slip. The clerk stamps it as a description, not an accusation. Beside the board is the public rule for misdirected goods: a recipient may return a sealed package without paying another fee if the original sender supplies a countersigned release.",
        "The form matters. Silas has already worried aloud that he will be charged for damaging something valuable, while Bea fears admitting the label mix-up will end her apprenticeship. Either fear could make a witness stop cooperating. You take two blank release forms and leave Agnes’s signature line empty until you know exactly what she is releasing."
      ],
      "clues": [
        "acknowledgment"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "mechanism"
        }
      ]
    },
    "mechanism": {
      "title": "The bell that must not be forced",
      "location": "The old clock tower lobby",
      "body": [
        "Nell takes you into the tower lobby, where a spare drawing of the mechanism hangs under glass. The crescent is not decoration. Its narrow end must face the red witness mark; otherwise the hammer lifts against the retaining spring and may snap it. A brass testing peg can move the hammer safely with the bell disconnected.",
        "Yesterday’s service note says the red mark was hidden under old wax. Bea cleaned the wax away before packing the part. Agnes checked the spring but never saw the newly uncovered mark. If the parcel is recovered, someone must distinguish the old drawing’s orientation from the actual cleaned fitting. Merely finding a curved piece of brass will not finish this repair."
      ],
      "clues": [
        "mechanism"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "timing"
        }
      ]
    },
    "timing": {
      "title": "Three times on one card",
      "location": "The marshal’s temporary office",
      "body": [
        "Nell’s timetable appears contradictory at first. A shop clock says Silas left at 8:52, the quay clock says Iris received a package at 9:02, and the station master records a cart departure at 8:58. Nell has penciled “impossible journey” across the page.",
        "The clock-maintenance card below it is more useful than her pencil. The shop clock was six minutes slow until Agnes corrected it at ten. The quay clock was right. The station master’s watch was four minutes fast and was not corrected until noon. The walk from shop to quay takes at least eight minutes; from quay to station, at least four. No one has provided a witnessed departure from the quay."
      ],
      "clues": [
        "timing"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "chronology"
        }
      ]
    },
    "chronology": {
      "title": "A journey that does not fit",
      "location": "The marshal’s map table",
      "body": [
        "You put all three entries onto a single time scale. Silas’s departure should be placed later than the shop clock suggests; the station cart left earlier than the station watch suggests. The quay entry is already on the correct scale. Be careful not to “correct” the same time twice.",
        "Nell wants to cancel one line of inquiry. A package seen at the quay cannot have joined a cart that had already left the station. That still says nothing about a later boat or a parcel left on a shelf. Which conclusion follows from the corrected times without inventing an unobserved shortcut?"
      ],
      "puzzle": {
        "prompt": "After correcting the clocks, which claim can you safely reject?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "A later boat might have carried a package.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The package could have remained at the quay after 9:02.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Silas could have walked from the shop to the quay before 9:02.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The package received at the quay at 9:02 left on the station cart recorded at 8:58.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "separation"
      }
    },
    "separation": {
      "title": "Facts that can travel together",
      "location": "The bridge between shop and quay",
      "body": [
        "You separate two questions that have become tangled in everyone’s account. The identity of the parcel depends on its weight and packing. Its route depends on witnessed transfers at corrected times. A final clock repair depends on the witness mark and a safe disconnected test. One neat story will not substitute for three small demonstrations.",
        "The river below is bright with lantern frames waiting to be floated at dusk. Nell decides to postpone the replacement cart rather than announce a failure she cannot yet explain. You now have room to finish the route you chose. The other investigation is still being handled by ordinary town workers; you are not expected to have seen their private records."
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Finish the investigation you committed to",
          "to": "a-pantry",
          "requiresFlags": [
            "route-a"
          ]
        },
        {
          "id": "continue-b",
          "label": "Finish the investigation you committed to",
          "to": "b-tracing",
          "requiresFlags": [
            "route-b"
          ]
        }
      ]
    },
    "a-quay": {
      "title": "A receipt that stayed dry",
      "location": "The riverside bakery yard",
      "body": [
        "Silas is stacking cooling trays when you arrive. He admits collecting a box from Agnes but will not open anything without her permission. He signed for “one blue parcel” at the quay before carrying it to his cool pantry. The receipt says nothing about its contents. He asks you not to turn an ordinary favor into a public claim that he stole the clock’s voice."
      ],
      "meets": [
        "silas"
      ],
      "clues": [
        "a-quay"
      ],
      "setFlags": [
        "route-a"
      ],
      "routeLabel": "The delivery trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Ask the boatwoman about the transfer",
          "to": "a-iris"
        }
      ]
    },
    "a-iris": {
      "title": "The second transfer",
      "location": "Iris’s landing stage",
      "body": [
        "Iris keeps receipts beneath a tin saucer to stop the river wind taking them. She received the blue package at 9:02 and handed it to Silas at 9:06. A separate brown sleeve remained under her bench until the noon barge. She did not exchange their contents. She points you toward the public weighing office before she will sign a release."
      ],
      "meets": [
        "iris"
      ],
      "clues": [
        "a-iris"
      ],
      "routeLabel": "The delivery trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Compare the packages with their original measurements",
          "to": "register"
        }
      ]
    },
    "a-pantry": {
      "title": "Something on the cool shelf",
      "location": "Silas’s bakery pantry",
      "body": [
        "The blue package sits above the flour bin, away from heat and steam. On the bakery scale it still reads 640 grams. A corner of green tissue is visible beneath a fold where the outer paper has loosened; the tied inner box remains closed. Silas offers to tear it open, but you remind him that an intact return is easier to document."
      ],
      "clues": [
        "a-pantry"
      ],
      "routeLabel": "The delivery trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Prepare a precise release request",
          "to": "a-release"
        }
      ]
    },
    "a-release": {
      "title": "Two descriptions for one signature",
      "location": "A quiet bakery table",
      "body": [
        "Agnes’s release must identify the parcel, not merely repeat the address that caused the trouble. You have the original physical description, Iris’s witnessed transfer, and the present measurement. Silas wants the form to clear his name without blaming Bea for more than the evidence establishes. Decide which two statements belong in the request."
      ],
      "puzzle": {
        "prompt": "Which two statements justify releasing this sealed parcel back to Agnes?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "Silas expected molds, so its contents must be molds.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Bea’s anxiety proves she deliberately sent it to the wrong place.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Its 640-gram measurement and green tissue match the original clock parcel.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "Iris witnessed this blue package being transferred to Silas.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "a-home"
      },
      "routeLabel": "The delivery trail"
    },
    "a-home": {
      "title": "A favor made official",
      "location": "Bell’s clock shop",
      "body": [
        "Agnes reads the form twice and signs beneath the physical description. Silas carries the box himself, with Iris walking beside him until the bridge. When it is opened on the clean bench, the crescent lies in green tissue exactly as Bea’s sketch shows. You record the successful return separately from the question of whether the mechanism is ready to ring."
      ],
      "clues": [
        "a-home"
      ],
      "routeLabel": "The delivery trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Fit the returned crescent without striking the bell",
          "to": "a-test"
        }
      ]
    },
    "a-test": {
      "title": "An untrustworthy old drawing",
      "location": "The clock tower mechanism",
      "body": [
        "Bea holds the cleaned crescent beside the drawing. The narrow end points the opposite way in the old illustration, where the red mark was hidden under wax. Nell waits with the crowd’s permission to delay the bell. There is time for one safe test before the rope is connected. What should you ask Agnes to do first?"
      ],
      "puzzle": {
        "prompt": "Which procedure follows the actual fitting rather than the outdated illustration?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Polish away the red mark before fitting the crescent.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Face the narrow end toward the red mark and use the testing peg with the bell disconnected.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "Connect the bell first so the sound reveals whether it fits.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Follow the old drawing because a printed diagram outranks a cleaned mark.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "a-ringing"
      },
      "routeLabel": "The delivery trail"
    },
    "a-ringing": {
      "title": "A small permission to begin",
      "location": "The tower landing",
      "body": [
        "The disconnected hammer lifts cleanly. Only then does Agnes connect the bell rope. Nell sends Silas down to tell the square why the first chime will be a little late. He does not mention a theft. He explains a crossed label, a careful return, and an apprentice who kept a useful sketch instead of pretending she remembered everything."
      ],
      "clues": [
        "a-ringing"
      ],
      "routeLabel": "The delivery trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Join the people waiting in the square",
          "to": "a-square"
        }
      ]
    },
    "a-square": {
      "title": "A receipt in a bread basket",
      "location": "The lantern square",
      "body": [
        "Iris returns the signed release inside Silas’s bread basket so it will not blow away. You fold it into the repair register. The inquiry now has a complete chain: original measurement, witnessed custody, matching present package, authorized return, and a tested fitting. The town can correct the copied list without assigning an invented motive to anyone."
      ],
      "clues": [
        "a-square"
      ],
      "routeLabel": "The delivery trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Hear the festival begin",
          "to": "ending-a"
        }
      ]
    },
    "b-bench": {
      "title": "The list Bea did not throw away",
      "location": "The repair bench",
      "body": [
        "Bea has kept both versions of her packing list. The first records a crescent in green tissue; the second copies addresses after the gust. She wants to correct everything immediately, but Agnes asks her to leave the papers as they are until someone understands which details changed. You offer to reconstruct the work rather than follow the recipients."
      ],
      "meets": [
        "bea"
      ],
      "clues": [
        "b-bench"
      ],
      "setFlags": [
        "route-b"
      ],
      "routeLabel": "The workshop trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Inspect the workshop’s trial fittings",
          "to": "b-tool"
        }
      ]
    },
    "b-tool": {
      "title": "The crescent that stayed behind",
      "location": "The spare-parts drawer",
      "body": [
        "The drawer contains a wooden trial crescent, carved for checking clearances before the brass part was finished. Its narrow end bears a red pencil line copied from the newly cleaned fitting. Agnes says it cannot lift the hammer under load. It can, however, demonstrate how the returned brass piece should sit without risking the clock’s spring."
      ],
      "meets": [
        "agnes"
      ],
      "clues": [
        "b-tool"
      ],
      "routeLabel": "The workshop trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Use independent records to separate identity from address",
          "to": "register"
        }
      ]
    },
    "b-tracing": {
      "title": "A rubbing and a wax stain",
      "location": "The polishing corner",
      "body": [
        "Under the lamp, Bea’s tracing paper shows the crescent’s outline and the position of the red witness mark. A duplicate blue box still has a green tissue lining. Neither object proves where the missing piece has gone; together they let you describe it to a messenger without relying on the swapped address. Nell agrees to carry a written inquiry rather than an accusation."
      ],
      "clues": [
        "b-tracing"
      ],
      "routeLabel": "The workshop trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose the evidence a messenger can check",
          "to": "b-message"
        }
      ]
    },
    "b-message": {
      "title": "A useful request, not a rumor",
      "location": "The shop’s writing desk",
      "body": [
        "Nell can send one messenger before the tower is closed for repairs. A vague request for “the clock box” may return the wrong item, while a claim that Silas took it would outrun your evidence. Your inquiry needs details another person can actually test, and a clear limit on what you are claiming."
      ],
      "puzzle": {
        "prompt": "Which two instructions belong in a reliable messenger request?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "Bring any curved fitting that resembles the shape, regardless of packing or weight.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Check the blue parcel against the original 640-gram entry and green tissue.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "Bring back the matching parcel sealed, using Agnes’s countersigned release.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "Tell everyone the baker has hidden a stolen clock part.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "b-return"
      },
      "routeLabel": "The workshop trail"
    },
    "b-return": {
      "title": "A reply with no borrowed certainty",
      "location": "The workshop doorway",
      "body": [
        "The messenger returns with Silas and the sealed blue box. Silas’s receipt and Iris’s signed transfer come with it; their route agrees with the corrected quay time. Agnes opens it in front of Bea. The contents match the tracing and green tissue. Your workshop investigation has recovered the part by specifying an independent test instead of guessing who carried it."
      ],
      "meets": [
        "silas",
        "iris"
      ],
      "clues": [
        "b-return"
      ],
      "routeLabel": "The workshop trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose the safe use of the trial fitting",
          "to": "b-trial"
        }
      ]
    },
    "b-trial": {
      "title": "The temptation of the wooden spare",
      "location": "The mechanism gallery",
      "body": [
        "Nell asks whether the wooden trial piece could ring the bell while Agnes checks the brass one. Bea looks at the thin grain around its narrow end and shakes her head. The trial was made to show clearance, not carry a striking load. You still need a demonstration that the newly recovered part is correctly oriented."
      ],
      "puzzle": {
        "prompt": "What can the workshop’s wooden trial safely establish?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "It can demonstrate clearance and orientation before the brass part is tested with the bell disconnected.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "It proves the brass crescent can face either way.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "It can replace brass for the first strike if everyone stands back.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "It allows you to ignore the red witness mark.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "b-instruction"
      },
      "routeLabel": "The workshop trail"
    },
    "b-instruction": {
      "title": "A drawing with a date on it",
      "location": "The tower worktable",
      "body": [
        "Bea draws a fresh diagram while Agnes aligns the narrow end with the red mark and tests the hammer with the bell disconnected. You ask Bea to date the drawing and preserve the old one behind it. An undated correction would be almost as confusing as the first diagram. Now a later repairer can see exactly why the instruction changed."
      ],
      "clues": [
        "b-instruction"
      ],
      "routeLabel": "The workshop trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Give Nell the corrected service note",
          "to": "b-lesson"
        }
      ]
    },
    "b-lesson": {
      "title": "A repair worth remembering",
      "location": "Bell’s shop window",
      "body": [
        "The old drawing goes into a brown folder marked SUPERSEDED. The crossed-out packing lists stay beside it. Agnes tells Bea that good repairers are not people who never make mistakes; they are people who leave enough evidence for the next person to find and correct them. Nell pins a note explaining the delayed chime in the square."
      ],
      "clues": [
        "b-lesson"
      ],
      "routeLabel": "The workshop trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Watch the lanterns rise",
          "to": "ending-b"
        }
      ]
    },
    "ending-a": {
      "title": "The first chime",
      "location": "The lantern square",
      "body": [
        "The bell rings one clear note over the river. Silas gives Bea a little loaf shaped like a crescent, and she laughs for the first time all morning."
      ],
      "ending": {
        "title": "Solved by following the delivery trail",
        "body": [
          "You recovered the same brass part by proving its identity and custody, then checked the repaired mechanism safely. The lasting change is the town’s new practice: record a package’s physical description before attaching a destination label."
        ],
        "kind": "solved"
      }
    },
    "ending-b": {
      "title": "The apprentice’s drawing",
      "location": "The clock tower",
      "body": [
        "From the gallery, Bea watches the hammer lift exactly as her new drawing shows. The lanterns below are beginning to catch the light."
      ],
      "ending": {
        "title": "Solved by reconstructing the workshop",
        "body": [
          "You recovered the crescent with a testable description and replaced an unsafe old instruction with a documented repair. The parcel’s path was still real; your contribution was to separate it from the workshop mistake that would have caused a second failure."
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
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
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
          "id": "answer-4"
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
            "answer-3",
            "answer-4"
          ]
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
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
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
          "id": "answer-4"
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
          "type": "answer",
          "id": "answer-1"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        }
      ]
    }
  ]
};
