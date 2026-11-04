/** An original branching investigation. Solutions stay inside earned scenes. */
export default {
  "id": "glasshouse",
  "title": "The Glasshouse Hour",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "Your host is missing from a winter opening. A note, an altered plan, and a response behind the glass lead toward two very different ways of understanding the morning.",
  "setting": "A botanical garden preparing its January opening",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "bea",
      "name": "Bea Mercer",
      "role": "Apprentice gardener",
      "description": "Knows the daily routines and keeps plant labels that other people throw away.",
      "color": "#8b9e73"
    },
    {
      "id": "ellis",
      "name": "Ellis Rowe",
      "role": "Glasshouse caretaker",
      "description": "Records faults even when they seem too small to interest a committee.",
      "color": "#b79871"
    },
    {
      "id": "sol",
      "name": "Dr. Sol Arden",
      "role": "Botanist and host",
      "description": "Invited you to see a winter orchid and has not appeared at the public gate.",
      "color": "#8ea8a6"
    },
    {
      "id": "rhea",
      "name": "Rhea Fenn",
      "role": "Buildings engineer",
      "description": "Distinguishes a route drawn on paper from one inspected and cleared for use.",
      "color": "#aa97af"
    },
    {
      "id": "wren",
      "name": "Wren Holt",
      "role": "Visiting conservator",
      "description": "Keeps the history of the building beside the history of its plants.",
      "color": "#bca173"
    }
  ],
  "clues": [
    {
      "id": "invite",
      "title": "The before-opening invitation",
      "description": "Sol invited you for08:15 in the winter propagation house, before the public opening."
    },
    {
      "id": "labels",
      "title": "A changed room numbering",
      "description": "Before renovation, West2 meant the winter propagation room. The new visitor plan uses West2 for the display gallery and West3 for propagation."
    },
    {
      "id": "message",
      "title": "A limited response",
      "description": "Three taps are answered with three taps from the frosted propagation-room glass. An authorized responder has been called; visitors will be held at the gate."
    },
    {
      "id": "appointment",
      "title": "The route through the morning",
      "description": "Sol’s08:00 work note uses the old West2 designation and mentions a flask and winter orchid inspection."
    },
    {
      "id": "place",
      "title": "A location established",
      "description": "The older label and responsive tapping put Sol in the propagation room, not the new West2 display gallery."
    },
    {
      "id": "latch",
      "title": "A documented latch fault",
      "description": "The propagation door self-latches without an inside release. Ellis reported its replacement twice before the frost."
    },
    {
      "id": "two-plans",
      "title": "The visitor map’s limits",
      "description": "The new visitor plan omits staff connections and inspection panels. It cannot establish there is no second approach."
    },
    {
      "id": "permit",
      "title": "Two professional approaches",
      "description": "The old approved plan shows a staff service door from the potting shed and an engineer-only inspection approach from the herbarium."
    },
    {
      "id": "a-key",
      "title": "A key with a specific fitting",
      "description": "The staff register pairs keyP7 with the outward-opening potting-shed door; keyP2 opens the gallery only."
    },
    {
      "id": "a-support",
      "title": "A route currently inspected",
      "description": "Rhea’s current inspection clears the potting-shed approach and rules out the loose western roof walkway."
    },
    {
      "id": "a-connect",
      "title": "The shared doorway",
      "description": "The service drawing and Rhea’s current inspection identify an internal connecting door from the potting shed to propagation."
    },
    {
      "id": "a-order",
      "title": "A purchase held back",
      "description": "The approved latch replacement was marked routine and deferred when visitor signage took its budget; Ellis’s repeated fault report remained open."
    },
    {
      "id": "b-sequence",
      "title": "The three inspection symbols",
      "description": "The approved panel sequence is leaf, square, circle; the old key labels say leaf=herbarium, square=inspection lobby, circle=propagation."
    },
    {
      "id": "b-support",
      "title": "The inspected alternate approach",
      "description": "Rhea confirms the herbarium inspection lobby is clear. The boiler walkway is not an access route and remains restricted."
    },
    {
      "id": "b-connect",
      "title": "A release behind the correct panel",
      "description": "The inspected square-to-circle panel includes an approved engineer-operated release into propagation, independent of the frozen outer latch."
    },
    {
      "id": "b-history",
      "title": "The omitted safety instruction",
      "description": "A renovation handover omitted the staff orientation sheet that identified the interior release and required two-person opening checks."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "An invitation in green ink",
      "location": "The botanical garden gate",
      "meets": [
        "bea"
      ],
      "clues": [
        "invite"
      ],
      "body": [
        "Bea Mercer has put a kettle on in the gate lodge, but she has not put the OPEN sign out. Dr. Sol Arden invited you to see a winter orchid before the January visitors arrived. The botanist has not answered the office telephone, and the frost makes the paths shine like folded silver. Bea wants help establishing where Sol actually went, not an audience for a frightening guess.",
        "The public opening can be postponed. You agree to stay on supervised paths, use the staff’s knowledge, and call the appropriate responder if there is evidence that someone cannot get out. The garden is beautiful, but beauty does not make an old doorway safe."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the coordinated inquiry",
          "to": "workroom"
        }
      ]
    },
    "workroom": {
      "title": "Two names for the same room",
      "location": "Sol’s workroom",
      "clues": [
        "labels",
        "appointment"
      ],
      "body": [
        "Sol’s notebook is open at an08:00 entry: “West2, flask, winter orchid before guests.” A yellowing plant label says WEST2 PROPAGATION. The new visitor plan on the wall calls the display gallery West2 and the propagation room West3. Bea explains that the rooms were renumbered for the new exhibition last month; Sol still uses the older labels in their working notes.",
        "A coat remains on its hook, and the small flask is missing from the drying rack. Neither object proves that Sol is trapped, but the note supplies a planned indoor destination. The old label and new map must be reconciled before the search follows a neat new sign into the wrong room."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the coordinated inquiry",
          "to": "west"
        }
      ]
    },
    "west": {
      "title": "An answer through the frost",
      "location": "Outside the propagation room",
      "clues": [
        "message"
      ],
      "body": [
        "A warm flask stands on the bench beside the propagation-room door. You call Sol’s name and hear a deliberate tap on the frosted glass. Bea taps three times; three taps answer. She speaks slowly through the door, explaining who is outside and that help is being arranged. There is no useful reason to pull hard on a frozen latch or strike the warm glass.",
        "Bea follows the garden’s response procedure and phones the buildings engineer and the appropriate assistance contact. Visitors will remain outside the public gate. You can still help by finding the approved plan and the room’s access history while trained staff coordinate the response."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the coordinated inquiry",
          "to": "response"
        }
      ]
    },
    "response": {
      "title": "The question you can answer",
      "location": "The covered western path",
      "body": [
        "The response contact asks Bea for a precise room name, whether someone has answered, and which approaches are known to be open. Bea can confidently report the tapping. The room name is less simple because the notebook predates the new signs. You lay the old label beside the current visitor map rather than letting either sheet silently replace the other.",
        "No one is asking you to diagnose Sol’s condition or improvise a rescue. Your useful task is to establish a location and obtain the records that qualified staff can act on. A good investigation sometimes begins by narrowing what it is competent to decide."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the coordinated inquiry",
          "to": "first-question"
        }
      ]
    },
    "first-question": {
      "title": "Which West2?",
      "location": "The gate lodge map table",
      "body": [
        "The notebook uses the name on the old plant label, while the visitor map uses the new numbering. The tapping comes from the propagation-room glass. Which statement identifies the likely room without treating a renamed space as a new physical building?"
      ],
      "puzzle": {
        "prompt": "Which room name should the response note use?",
        "options": [
          {
            "id": "1",
            "label": "The new display gallery, because any latest map overrides the observed tapping.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The propagation room, Sol’s old West2 and the visitor map’s new West3.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Both rooms must contain Sol because their numbers once matched.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "The café, because the coat is still in the workroom.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "first-result"
      }
    },
    "first-result": {
      "title": "A room, rather than a number",
      "location": "The gate lodge map table",
      "clues": [
        "place"
      ],
      "body": [
        "Sol’s old West2 is the winter propagation room, now labeled West3 for visitors. The notebook and the response agree once the renumbering is recognized. Bea writes the room’s physical name on the response note and leaves both numbering systems beside it so another worker will not repeat the confusion.",
        "The correction does not explain why the door will not open. Ellis Rowe, the caretaker, arrives carrying his fault book. He looks relieved that nobody has treated the glass as an obstacle to be broken. “Start with what the latch is designed to do,” he says, “then ask what the cold changed.”"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the coordinated inquiry",
          "to": "caretaker"
        }
      ]
    },
    "caretaker": {
      "title": "A fault written down twice",
      "location": "The caretaker’s sheltered bench",
      "meets": [
        "ellis"
      ],
      "clues": [
        "latch"
      ],
      "body": [
        "Ellis shows two fault reports about the propagation door. Its spring catches automatically when it closes, and its original frame lacks an inside handle. He requested a modern release before winter. The response column says the replacement was approved but deferred. Overnight frost has now fixed the outside latch in its socket.",
        "This is an access problem with a documented history, not evidence that someone deliberately shut Sol in today. Ellis will not rule out every possible human decision behind it, but he insists on distinguishing today’s mechanism from the earlier administrative choices that left it in service."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the coordinated inquiry",
          "to": "visitor-plan"
        }
      ]
    },
    "visitor-plan": {
      "title": "What a visitor map leaves out",
      "location": "The exhibition office",
      "clues": [
        "two-plans"
      ],
      "body": [
        "The new map is designed to guide visitors between displays, cafés, and accessible exits. Staff doors and engineer-only inspection approaches are intentionally absent. It is useful for its purpose and incomplete for this one. Bea finds the renovation handover box, where the approved service plan should have been kept beside the new signs.",
        "A note on its lid says “staff orientation sheet to follow.” The sheet is not inside. That absence may matter later, but it does not prove nobody ever received instructions. Ellis asks you to use the approved architectural plan rather than infer a dead end from a simplified public diagram."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the coordinated inquiry",
          "to": "approved-plan"
        }
      ]
    },
    "approved-plan": {
      "title": "Two routes in thin blue lines",
      "location": "The records cupboard",
      "clues": [
        "permit"
      ],
      "body": [
        "The approved plan shows a shared doorway from the potting shed into propagation. A second approach connects the herbarium to an inspection lobby, where a qualified engineer can reach an interior release panel. The plan also shows a roof walkway, but a red maintenance annotation closes it pending repair. A drawn line is not a currently usable route.",
        "Rhea Fenn, the buildings engineer, has arrived and will check either permitted approach. She asks you to obtain one complete set of route-specific records while Ellis remains by the door speaking to Sol. Wren, a visiting conservator, can help interpret the older inspection labels if you choose the herbarium."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the coordinated inquiry",
          "to": "route-choice"
        }
      ]
    },
    "route-choice": {
      "title": "One useful set of records",
      "location": "The central fountain shelter",
      "body": [
        "You can help Rhea establish the potting-shed connection, its actual key, and its current inspection status. Or you can follow the herbarium records and identify the approved interior release approach. Both routes require professional clearance and both avoid the closed roof walkway.",
        "The choice also determines which part of the garden’s paperwork you will understand best afterward: the deferred purchase, or the missing staff handover. Bea postpones the opening without argument. There is time to be prompt without being careless."
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Investigate the staff service-door approach",
          "to": "a-arrival",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Follow the herbarium’s inspection records",
          "to": "b-arrival",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a-arrival": {
      "title": "The key ring with two labels",
      "location": "The staff key cabinet",
      "setFlags": [
        "route-a"
      ],
      "meets": [
        "rhea"
      ],
      "clues": [
        "a-key"
      ],
      "body": [
        "The register assigns P7 to the outward-opening potting-shed door and P2 to the display gallery. The key ring in Bea’s pocket contains both. P2 has a newer brass tag and would be the easiest number to match to the newly labeled West2, which is precisely why the physical fitting matters more than the visitor room number.",
        "Rhea checks the register before selecting anything. She will not rely on a guess made from an attractive tag. You copy the connection between P7, the named door, and the service plan while Bea keeps the original key ring with the authorized staff."
      ],
      "routeLabel": "The potting-shed approach",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "a-record"
        }
      ]
    },
    "a-record": {
      "title": "The route that is open now",
      "location": "The potting shed’s covered entrance",
      "clues": [
        "a-support"
      ],
      "body": [
        "Rhea’s morning inspection records the potting-shed floor and shared doorway as clear. Its separate roof-walkway entry says CLOSED: loose panel, inspection outstanding. The visitor map’s dashed scenic line across that roof cannot override the current closure.",
        "The outward-opening shed door stands in a cleared work area. Rhea asks you which two records together support this approach: one must identify the correct connection, and another must show that the route is currently cleared. A historical drawing by itself does only half that work."
      ],
      "routeLabel": "The potting-shed approach",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "a-question"
        }
      ]
    },
    "a-question": {
      "title": "A route needs two kinds of evidence",
      "location": "The service-plan board",
      "body": [
        "The key register, the service plan, and the current inspection tell related but different things. Choose the two observations that establish the usable approach, without relying on the roof shortcut or assuming a matching room number identifies a door."
      ],
      "routeLabel": "The potting-shed approach",
      "puzzle": {
        "prompt": "Which TWO observations establish the approved service approach?",
        "options": [
          {
            "id": "1",
            "label": "The service plan identifies a shared doorway from the potting shed into propagation.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Rhea’s current inspection clears the shed approach and connecting doorway.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "The visitor map draws a scenic line over a roof now marked closed.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "P2 looks newer than P7, so it must fit every newly named room.",
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
      "title": "The connection confirmed",
      "location": "The potting shed",
      "clues": [
        "a-connect"
      ],
      "body": [
        "The plan identifies the shared door, and Rhea’s current inspection clears its approach. With the correctly identified staff key, the engineer opens the potting-shed entrance and checks the internal connection. Ellis continues explaining to Sol what the staff are doing. You stay in the cleared work area, carrying no improvised tool.",
        "There is now an approved way to reach the room. The frozen outer latch need not be defeated, and the closed roof walkway need not be used. Bea exhales when she sees that the solution was neither a dramatic shortcut nor a matter of pulling harder."
      ],
      "routeLabel": "The potting-shed approach",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "a-account"
        }
      ]
    },
    "a-account": {
      "title": "The replacement that remained a line item",
      "location": "The maintenance office",
      "clues": [
        "a-order"
      ],
      "body": [
        "While Rhea completes the coordinated access, Ellis asks you to preserve the purchase history. The replacement latch was approved before the frost. A later budget sheet moved its allocation to visitor signage and marked the fault “routine, defer.” His second report remained open when management signed off the exhibition opening.",
        "That is evidence of a process failure, not evidence that the person who printed a sign intended to trap the botanist. Bea asks for the wording of your report to make the difference plain. The safety issue needs an owner and an action, not a convenient villain."
      ],
      "routeLabel": "The potting-shed approach",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "a-deduction"
        }
      ]
    },
    "a-deduction": {
      "title": "Access and accountability",
      "location": "The maintenance office table",
      "body": [
        "Choose the recommendation supported by this route. The response team has a verified, cleared service approach. The administrative record shows an approved safety replacement was deferred while the fault remained open. A complete response should address both the immediate access and the system that left the latch in place."
      ],
      "routeLabel": "The potting-shed approach",
      "puzzle": {
        "prompt": "What should the garden do on the evidence you obtained?",
        "options": [
          {
            "id": "1",
            "label": "Use the verified service approach and formally address the deferred latch replacement and open fault.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Force the frozen outer door and ignore the purchase history.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Blame Bea for every administrative decision because she carries the keys.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Reopen all routes because a historical plan once showed them.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "a-rescue"
      }
    },
    "a-rescue": {
      "title": "A familiar voice, directly heard",
      "location": "The propagation-room threshold",
      "meets": [
        "sol"
      ],
      "body": [
        "The authorized team reaches Sol through the shared doorway. The botanist is relieved, embarrassed, and ready to follow the response team’s advice. Ellis records the faulty door as out of use until repaired. Nobody needs to celebrate a risky improvisation; the approved connection and coordinated checks did the work.",
        "Sol’s notebook lies beside a tray of winter orchids. They had expected a brief inspection and allowed the door to catch behind them. The old room number caused the first search to drift toward the gallery, but the faulty fitting caused the confinement. Both will be addressed separately."
      ],
      "routeLabel": "The potting-shed approach",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "a-ending"
        }
      ]
    },
    "a-ending": {
      "title": "An opening that can wait",
      "location": "The gate lodge",
      "body": [
        "The garden records the incident, isolates the defective fitting, and assigns the replacement to a named responsible officer. The trustees review why an approved safety task was deferred. Bea writes a new staff note using physical room names alongside both numbering systems. Only after the response and engineering checks are complete does she turn the public sign."
      ],
      "routeLabel": "The potting-shed approach",
      "ending": {
        "title": "The overlooked service door",
        "body": [
          "Sol is safely out, and the garden has an auditable account of the fault and the delayed replacement. The opening resumes only when the engineer and garden management are satisfied. Your route solved an access problem without turning a plausible accusation into an unearned conclusion."
        ],
        "kind": "solved"
      }
    },
    "b-arrival": {
      "title": "Leaves, squares, and circles",
      "location": "The public herbarium desk",
      "setFlags": [
        "route-b"
      ],
      "meets": [
        "wren"
      ],
      "clues": [
        "b-sequence"
      ],
      "body": [
        "Wren Holt brings the original inspection legend from a folder of architectural conservation notes. It uses a leaf for the herbarium, a square for the inspection lobby, and a circle for propagation. The approved access sequence is leaf, square, circle. None of the symbols is a decorative clue left for visitors; they are practical labels from the building’s older maintenance system.",
        "The recent handover index includes a staff orientation sheet explaining those symbols, but the sheet was not in the opening pack. Wren asks you to distinguish the missing explanation from the actual condition of the rooms, which Rhea must still inspect."
      ],
      "routeLabel": "The herbarium inspection route",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "b-record"
        }
      ]
    },
    "b-record": {
      "title": "A lobby that has been checked",
      "location": "The herbarium inspection entrance",
      "meets": [
        "rhea"
      ],
      "clues": [
        "b-support"
      ],
      "body": [
        "Rhea’s current inspection clears the herbarium and its adjoining lobby. The boiler walkway remains a restricted plant area and is not an access path. An old sketch places a dotted line near it, but the sketch is a services diagram, not permission to walk through the equipment.",
        "Rhea wants the intended sequence identified before she checks the release panel. You have the symbol legend and the independent clearance record. The two should agree with each other and with the named destination, rather than merely produce a continuous line on paper."
      ],
      "routeLabel": "The herbarium inspection route",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "b-question"
        }
      ]
    },
    "b-question": {
      "title": "The complete sequence",
      "location": "The herbarium plan stand",
      "body": [
        "Choose the two observations that jointly support the engineer’s approach. One identifies the sequence of spaces; the other establishes that the relevant approach is currently cleared. A symbol without its legend is as easy to misread as a renamed room."
      ],
      "routeLabel": "The herbarium inspection route",
      "puzzle": {
        "prompt": "Which TWO records together support the inspected herbarium route?",
        "options": [
          {
            "id": "1",
            "label": "The approved legend gives leaf→square→circle as herbarium→inspection lobby→propagation.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Rhea’s current inspection clears the herbarium and lobby approach.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "A dotted services line means the restricted boiler walkway is a public shortcut.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "The orientation sheet appears in an index, which proves every member of staff received it.",
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
      "title": "The release is a separate mechanism",
      "location": "The cleared inspection lobby",
      "clues": [
        "b-connect"
      ],
      "body": [
        "With the legend and current inspection aligned, Rhea checks the square-to-circle panel from the authorized lobby. The approved release is independent of the frozen outside latch. She coordinates its use with the response contact and Ellis, who continues speaking through the outer door.",
        "You do not operate the mechanism or enter the restricted plant walkway. Your useful work was to locate the correct instruction and ensure the drawing referred to an inspected route. Wren notes the panel’s physical name on the incident sheet so the old symbols are no longer the only way to identify it."
      ],
      "routeLabel": "The herbarium inspection route",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "b-account"
        }
      ]
    },
    "b-account": {
      "title": "The page after the index",
      "location": "The renovation records desk",
      "clues": [
        "b-history"
      ],
      "body": [
        "Wren locates the missing orientation master. It specifies the inside release and a two-person opening check whenever the propagation door’s latch remains unreplaced. The opening team received an index listing the sheet, but not the sheet itself; the dispatch checklist records “pack pending” rather than a completed handover.",
        "This does not cancel the underlying fitting defect. It explains why a compensating instruction was not available when Sol made an ordinary morning inspection. The failure belongs in the handover process and maintenance record, not in a story about a botanist who should have guessed a hidden symbol."
      ],
      "routeLabel": "The herbarium inspection route",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "b-deduction"
        }
      ]
    },
    "b-deduction": {
      "title": "What the missing page changes",
      "location": "The records desk",
      "body": [
        "The cleared inspection approach gives the team an approved release. The recovered master shows an instruction was listed but not handed over. Which response follows from both findings while recognizing that instructions alone are not a permanent substitute for repairing the defective latch?"
      ],
      "routeLabel": "The herbarium inspection route",
      "puzzle": {
        "prompt": "What conclusion and remedy does the handover route support?",
        "options": [
          {
            "id": "1",
            "label": "There was no fitting defect because an interior release existed elsewhere.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Use the checked authorized release, repair the defective latch, and correct the incomplete staff handover.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Publish a visitor riddle instead of distributing a staff instruction.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Assume Sol intentionally staged the incident without any supporting evidence.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "b-rescue"
      }
    },
    "b-rescue": {
      "title": "Across the final threshold",
      "location": "The propagation-room entrance",
      "meets": [
        "sol"
      ],
      "body": [
        "The authorized response reaches Sol using the checked interior release. The botanist follows the team’s directions and lets the engineer isolate the defective fitting. Wren explains the old symbols only after the immediate response is complete, while Bea supplies the incident notebook.",
        "Sol had read the new visitor plan as an exhibition document, not as a complete staff handover. That distinction was reasonable, but the missing instruction still mattered. The garden’s records now contain exactly what each person received, rather than what an index made management assume had been distributed."
      ],
      "routeLabel": "The herbarium inspection route",
      "choices": [
        {
          "id": "continue",
          "label": "Continue this coordinated approach",
          "to": "b-ending"
        }
      ]
    },
    "b-ending": {
      "title": "A sheet no longer left to follow",
      "location": "The herbarium desk",
      "body": [
        "The garden reinstates a checked staff handover, attaches the release instruction to the current physical plan, and keeps the defective door out of use until replaced. Wren labels the master with a review date and a responsible officer. The winter orchid remains a small wonder, but no one has to solve an architectural puzzle to work beside it again."
      ],
      "routeLabel": "The herbarium inspection route",
      "ending": {
        "title": "The release behind the old labels",
        "body": [
          "You solved the case through the building’s inspection history and a missing handover instruction. The garden restores the ordinary safeguards that should make such a mystery impossible, while keeping the public opening secondary to a safe response."
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
          "id": "1"
        },
        {
          "type": "choice",
          "id": "continue"
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
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    }
  ]
};
