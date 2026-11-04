/** Original expanded mystery with route-specific evidence and resolutions. */
export default {
  "id": "lantern-bridge",
  "title": "The Lanterns of Ash Bridge",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "The bridge lanterns have been lit in the wrong order, its keeper has not returned, and a closure notice is sending festival visitors the long way round. Choose which side of the river to trust.",
  "setting": "Ash Bridge on the evening of the river lantern festival",
  "contentNote": "Estimated first-play time includes reading and deduction.",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "tessa",
      "name": "Tessa Bright",
      "role": "Festival volunteer",
      "description": "Notices practical details while everyone else is admiring the lights.",
      "color": "#ba9b76"
    },
    {
      "id": "miriam",
      "name": "Miriam Holt",
      "role": "Bridge keeper",
      "description": "Knows a public crossing is a promise, not a convenient source of influence.",
      "color": "#91a28b"
    },
    {
      "id": "silas",
      "name": "Silas Wren",
      "role": "Maintenance contractor",
      "description": "Has an answer ready before he has heard the whole question.",
      "color": "#a88c72"
    },
    {
      "id": "nella",
      "name": "Nella Lambert",
      "role": "Parish clerk",
      "description": "Keeps the copies that prevent an important-looking stamp from becoming an argument.",
      "color": "#9c93af"
    },
    {
      "id": "esme",
      "name": "Esme March",
      "role": "Ferry pilot",
      "description": "Records every crossing because weather rarely respects a person’s memory.",
      "color": "#86a7ac"
    }
  ],
  "clues": [
    {
      "id": "legend",
      "title": "The lantern legend",
      "description": "The bridge board defines red as a closed gate, amber as inspection, and white as safe passage. Colors describe individual gates, not people or a coded confession."
    },
    {
      "id": "order",
      "title": "The closure’s stated reason",
      "description": "The posted notice claims order 47 closes every gate after six for structural repairs. It directs all visitors to a paid ferry and bears Silas Wren’s contractor stamp, not a council signature."
    },
    {
      "id": "hinges",
      "title": "Freshly moved notice hooks",
      "description": "The closure board hangs from fresh hooks over an older gate-inspection card. The red lantern wick is dry, while the supposedly long-burning lamp has fresh warm fuel."
    },
    {
      "id": "bolts",
      "title": "A signed inspection interval",
      "description": "Miriam’s retained card cleared the structural bolts at 5:40. The remaining 6:10 inspection concerns one foot-gate hinge, not the whole bridge."
    },
    {
      "id": "authority",
      "title": "The contractor’s limit",
      "description": "Silas may inspect a hinge and report it. Only the council’s duty officer may order a full structural closure; no such authorization appears on the retained dispatch."
    },
    {
      "id": "maker",
      "title": "A supplier’s numbered stub",
      "description": "A notice-board supplier’s stub links the new hooks and closure board to Silas’s afternoon collection. It predates the claimed emergency discovery."
    },
    {
      "id": "finding",
      "title": "A false general closure",
      "description": "Physical inspection and independent supply records show a planned replacement of a limited inspection notice by an unauthorized whole-bridge closure."
    },
    {
      "id": "copy",
      "title": "The parish copy of order 47",
      "description": "Order47 reserves a single inspection gate for ten minutes. Its signed duplicate explicitly keeps the main footpath open unless a separate duty-officer notice is issued."
    },
    {
      "id": "ferry",
      "title": "The ferry’s changed charge",
      "description": "Esme’s ledger adds a festival surcharge only after a message from Silas saying the council had closed the bridge. The pilot retained the message."
    },
    {
      "id": "fees",
      "title": "A proposed division of proceeds",
      "description": "A countersigned proposal gives Silas half the extra surcharge for directing traffic; Esme declined it and retained both copies before the festival began."
    },
    {
      "id": "keeper",
      "title": "The keeper’s downstream check",
      "description": "Miriam went downstream to compare duplicate notices and was delayed by the festival procession. Her dispatch slip and Esme’s crossing record independently fix the journey."
    },
    {
      "id": "repayment",
      "title": "A checkable compensation total",
      "description": "The affected crossings are the individually numbered surcharge entries after Silas’s message; ordinary fares and earlier crossings must not be included."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A festival taking the wrong turn",
      "location": "Ash Bridge east landing",
      "body": [
        "Tessa Bright catches you beneath a string of paper moons. The festival should be sending people across Ash Bridge, but a new board points them toward a paid ferry. Miriam, the keeper, has not returned from checking the downstream lights. Nobody knows whether the absent keeper explains the closure or whether the closure explains her absence.",
        "You offer to investigate before the crowd grows. The crossing is not a place to test bravery: you will obey any genuine safety restriction. Tessa gives you the lantern legend and asks you to separate a closed gate from a closed bridge. A correct distinction could stop a rumor without sending anyone into danger."
      ],
      "meets": [
        "tessa"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "orientation"
        }
      ]
    },
    "orientation": {
      "title": "Three colors and one impressive stamp",
      "location": "The east gate noticeboard",
      "body": [
        "The legend says red marks a closed gate, amber marks inspection, and white marks safe passage. Tonight one small service gate has red above it, while the main footpath has white. A contractor’s board below claims that order 47 closes everything after six for structural repairs. Its arrow points directly to a ferry charging a festival supplement.",
        "A stamp can identify who prepared a notice without identifying who had authority to issue it. Tessa remembers Miriam mentioning a short hinge inspection, not a structural emergency. Her memory is a lead, and the colored lamps are observations. Neither should be allowed to override a signed safety instruction until you have checked what the instruction actually says."
      ],
      "clues": [
        "legend",
        "order"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "opening-question"
        }
      ]
    },
    "opening-question": {
      "title": "Do not turn a light into a verdict",
      "location": "The covered landing",
      "body": [
        "Before choosing a trail, establish the narrowest sound reading of the lights. A red service gate and a white public path are not automatically inconsistent: the legend assigns each color to the gate above which it hangs. The contractor’s wider closure is a separate claim that needs its own authority.",
        "Choose the conclusion that protects both safety and reasoning. You are not being asked to cross immediately, to accuse an absent keeper, or to declare that white light can overrule paperwork. You are being asked which question the disagreement creates. The answer should send you toward a document or an inspection, rather than toward a crowd’s guess about what Miriam must have done."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "What must be checked before treating the whole bridge as closed?",
        "options": [
          {
            "id": "scope",
            "label": "Whether order 47 actually authorizes a full closure rather than inspection of one gate.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "person",
            "label": "Whether the keeper’s absence proves she stole the lanterns.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "white",
            "label": "Whether a white lamp automatically cancels every safety order.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "ferry",
            "label": "Whether every paid ferry must be operating dishonestly.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "choice"
      }
    },
    "choice": {
      "title": "Follow the structure or follow the order",
      "location": "Ash Bridge map shelter",
      "body": [
        "One path runs along the supervised maintenance side to the keeper’s records and the contractor’s stores. It can establish what was inspected, what changed physically, and who prepared the replacement board. That route could restore a lawful crossing after a competent safety check.",
        "The other leads through the parish office to the ferry landing. It can establish the scope of the signed order, how a new charge began, and who paid because of the notice. That route could secure refunds even if a damaged hinge keeps part of the structure closed. You have time to take responsibility for one method before the festival moves on. Your choice changes the places you visit and the practical promise you can make to the people waiting."
      ],
      "choices": [
        {
          "id": "a",
          "label": "Inspect the bridge’s physical notices and maintenance trail",
          "to": "a00",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "b",
          "label": "Trace the council order through the parish and ferry accounts",
          "to": "b00",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a00": {
      "title": "New hooks on old wood",
      "location": "The supervised maintenance gallery",
      "body": [
        "A steward leads you along the maintenance gallery, away from the public crossing. The new board’s hooks have left fresh pale holes. Beneath it, an older card refers to inspection of the narrow service gate. Silas Wren arrives before you have finished reading and says the older card is no longer relevant.",
        "You ask what replaced its authority, rather than asking him to sound more convincing. His answer concerns his own professional judgment, but the new board refers to a numbered council order. If that number is doing persuasive work, its actual scope matters. You photograph both cards in place and the hooks that show one was placed over the other."
      ],
      "meets": [
        "silas"
      ],
      "clues": [
        "hinges"
      ],
      "setFlags": [
        "route-a"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a01"
        }
      ],
      "routeLabel": "The maintenance trail"
    },
    "a01": {
      "title": "Miriam’s duplicate",
      "location": "The keeper’s sheltered desk",
      "body": [
        "Miriam leaves carbon copies because wind can remove a public notice more easily than an official can replace it. Her 5:40 structural card records the bolts checked and the main span cleared. The 6:10 entry concerns a sticky hinge on the separate service gate. Nothing on either card declares a new defect in the main footpath.",
        "Silas says a contractor should not need to ask permission in an emergency. That may be a reasonable argument for a real emergency, but it is not evidence that one occurred. The dispatch copy lists the duty officer who can authorize a general closure and leaves the relevant line blank. You retain the limits instead of turning a limited clearance into a guarantee that the entire bridge will always be safe."
      ],
      "clues": [
        "bolts",
        "authority"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a02"
        }
      ],
      "routeLabel": "The maintenance trail"
    },
    "a02": {
      "title": "A claim with two missing supports",
      "location": "The maintenance desk",
      "body": [
        "The first route deduction asks which observations require the full-closure claim to be tested rather than accepted. You have physical layering of the notices, the retained inspection scope, and the boundary of the contractor’s authority. Select the two direct restrictions on what his board can legitimately mean.",
        "New hooks suggest planning but do not establish a structural condition. A keeper’s absence establishes neither consent nor refusal. The important comparison is between the claimed council order and the signed inspection record, together with the power to expand that order. You still need to learn who prepared the replacement and when. A valid answer identifies a gap in authorization without pretending it has already identified every intention behind it."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two facts directly limit the full-closure notice?",
        "options": [
          {
            "id": "limited",
            "label": "The signed inspection concerns one service-gate hinge, while the main span was separately cleared.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "power",
            "label": "A full closure requires duty-officer authorization that the retained dispatch does not show.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "absence",
            "label": "An absent keeper automatically approves any contractor’s board.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "red",
            "label": "A red light over one gate proves the whole bridge is structurally unsound.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "a03",
        "wrongFeedback": "This combination leaves one of the established restrictions unexplained. Test the proposed explanation against every source.",
        "minSelections": 2,
        "maxSelections": 3
      },
      "routeLabel": "The maintenance trail"
    },
    "a03": {
      "title": "The supplier’s stub",
      "location": "The lantern-maker’s stall",
      "body": [
        "The board-maker keeps numbered stubs for collected orders. Silas collected the new closure board and hooks at four, before the time he later called an unexpected discovery. The stub is signed, and its number matches the label still pasted behind the board. The supplier does not know why it was ordered and wisely declines to guess.",
        "This timing does not prove there could never have been an earlier concern. It does prove that Silas’s account of improvising the sign after a sudden six-o’clock emergency is incomplete. You now have a physical replacement, a limited underlying order, and an independently fixed preparation time. Together they support asking for the message that directed visitors toward the surcharge."
      ],
      "clues": [
        "maker"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a04"
        }
      ],
      "routeLabel": "The maintenance trail"
    },
    "a04": {
      "title": "A sentence that changes when quoted fully",
      "location": "The contractor’s temporary office",
      "body": [
        "Silas produces a draft reading “close gate for inspection.” The public board reads “close bridge for structural repairs.” He calls the difference shorthand. Tessa, who has joined you with a steward, asks which part of that longer warning was merely shorter.",
        "You give him the opportunity to explain before showing the supply stub. He says he wanted the festival traffic shifted away from his work area and expected nobody to suffer by taking the ferry. That is not the same as an authorized structural finding. A convenient route for a contractor and a lawful safety restriction can coincide, but convenience cannot supply the missing authority. You record his explanation as his account, leaving the documents alongside it."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a05"
        }
      ],
      "routeLabel": "The maintenance trail"
    },
    "a05": {
      "title": "A qualified check, not a daring crossing",
      "location": "The duty officer’s inspection station",
      "body": [
        "The duty officer examines the main footpath against Miriam’s record and the current conditions. You stay behind the barrier; solving a mystery does not qualify you to certify a bridge. The officer confirms that the main crossing can remain open while the service gate is repaired and signs a notice saying exactly that.",
        "Your investigation has not replaced a safety professional. It has identified a dishonest expansion of the professional instruction and brought it back to the person authorized to check it. The remaining question is how to explain the false closure without overclaiming. A fair resolution should distinguish preparation of the board, its unsupported wording, and the independently checked condition that allows a practical correction tonight."
      ],
      "clues": [
        "finding"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a06"
        }
      ],
      "routeLabel": "The maintenance trail"
    },
    "a06": {
      "title": "Restore the crossing without rewriting the night",
      "location": "The signed notice table",
      "body": [
        "Choose the account that fits the physical and documentary sequence. There is no need to claim that every contractor’s warning is false, or that a bridge can be reopened by popular vote. This crossing can reopen because the qualified officer has checked the relevant structure and signed a limited instruction.",
        "The false part was the unauthorized expansion of a gate inspection into a whole-bridge structural closure. The supplier’s time and replaced card corroborate deliberate preparation rather than a confused visitor’s rumor. Silas’s motive can be examined separately through the ferry accounts. Your route’s resolution concerns restoring accurate safety information and preserving enough evidence for that later inquiry, instead of announcing a financial sum you have not yet calculated."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which resolution is supported by this route’s evidence?",
        "options": [
          {
            "id": "correct",
            "label": "Replace the unauthorized general closure with the qualified officer’s current limited notice, preserving the replaced boards and supplier record.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "vote",
            "label": "Reopen every gate because festival visitors prefer it.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "ignore",
            "label": "Leave the false warning in place because a contractor ordered the board.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "refund",
            "label": "Declare an exact ferry refund without examining any crossing accounts.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "a07"
      },
      "routeLabel": "The maintenance trail"
    },
    "a07": {
      "title": "A keeper returns to a different question",
      "location": "The west landing",
      "body": [
        "Miriam returns with a packet of downstream duplicate notices. She had followed the altered wording because it did not match her copy, then lost time behind the festival procession. Her dispatch slip fixes the departure; a pilot can independently fix the later crossing. Nobody had to invent a disappearance to explain the delay.",
        "She is relieved that you did not treat her absence as permission to ignore her records. The duty officer asks her to countersign the new limited notice after checking its wording, not to certify a story she did not witness. Silas’s replacement boards are retained for the council inquiry. You can offer the crowd a genuine practical outcome: a checked public route, one still-closed service gate, and an explanation no longer hanging from a contractor’s stamp."
      ],
      "meets": [
        "miriam"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a08"
        }
      ],
      "routeLabel": "The maintenance trail"
    },
    "a08": {
      "title": "The lights above the right gates",
      "location": "The main footpath barrier",
      "body": [
        "The steward reads the new notice aloud before moving the public barrier. White remains over the main footpath; red remains over the service gate. The same colors that began the mystery now make sense because their scope is stated accurately. Tessa writes a short correction for volunteers who had been repeating the wider warning.",
        "You do not add a claim that every ferry fare was improper. That would require the other route’s accounts, messages, and individual crossing numbers. What you can establish is that the bridge closure was unsupported and prepared in advance. Miriam thanks you for bringing a narrow, checkable finding rather than a rumor with a happier ending. The council can now ask the financial questions without leaving visitors stranded in the meantime."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a09"
        }
      ],
      "routeLabel": "The maintenance trail"
    },
    "a09": {
      "title": "A crossing kept in trust",
      "location": "Ash Bridge after lantern-lighting",
      "body": [
        "People cross slowly, carrying lanterns that make their faces look like small portraits. The service gate stays shut for its proper repair. Miriam places the old notice and the new one in separate envelopes, so tomorrow’s inquiry will not have to rely on the memory of an embarrassed contractor.",
        "Your structure route has changed the festival’s path. It followed hooks, inspection limits, preparation times, and the authority to reopen. A different choice would have followed passengers and payments. Tonight you have restored something less spectacular and more important than a dramatic shortcut: a public crossing whose signs once again mean what they say."
      ],
      "ending": {
        "title": "Case closed: the crossing restored",
        "kind": "solved",
        "body": [
          "The physical trail establishes the substituted board, its limited authority, and the advance preparation. A qualified check restores the main crossing while the service gate stays closed. The council retains the notices and supplier record for its inquiry; you do not claim a refund total you never investigated."
        ]
      },
      "routeLabel": "The maintenance trail"
    },
    "b00": {
      "title": "The signed copy across the lane",
      "location": "The parish office",
      "body": [
        "Nella Lambert finds order 47 in a drawer with the dispatch receipt still attached. It reserves the service gate for ten minutes and explicitly keeps the main footpath open unless a separate duty-officer notice is issued. No such separate notice has been filed.",
        "Nella has heard that the bridge is dangerous and refuses to turn an absence of paperwork into a declaration of safety. She will ask the duty officer to check it. Meanwhile, the retained wording establishes a discrepancy worth tracing through the ferry’s messages. Your route will follow what people were told and what they paid because of it. That requires keeping the signed order with its date, not merely announcing that a clerk disagrees with a contractor."
      ],
      "meets": [
        "nella"
      ],
      "clues": [
        "copy"
      ],
      "setFlags": [
        "route-b"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b01"
        }
      ],
      "routeLabel": "The parish and ferry trail"
    },
    "b01": {
      "title": "A pilot’s numbered crossings",
      "location": "The ferry landing office",
      "body": [
        "Esme March has kept every crossing in order: passenger count, ordinary fare, supplement, and the message authorizing the supplement. Silas’s message says the council has ordered a general closure. Esme relied on it, then objected when he proposed dividing the additional proceeds.",
        "The proposal is countersigned only to acknowledge receipt, with Esme’s refusal written beneath. A careless glance could treat her signature as agreement. She asks you to read the whole line before deciding what it means. Her account is supported by the retained message and the sequence of charges, but you still need to establish which transactions followed it. Refunding an ordinary fare paid before the alleged closure would be generous arithmetic, not accurate compensation."
      ],
      "meets": [
        "esme"
      ],
      "clues": [
        "ferry",
        "fees"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b02"
        }
      ],
      "routeLabel": "The parish and ferry trail"
    },
    "b02": {
      "title": "A signature with a qualification",
      "location": "The ferry ledger bench",
      "body": [
        "Select the two statements established by the signed order and the full countersigned proposal. One concerns the bridge instruction; the other concerns the proposal’s acceptance. Neither can be replaced by a general impression of who seems helpful.",
        "Nella’s copy limits the inspection to one gate. Esme’s written refusal rejects the division of proceeds even though her signature appears on the page. The ferry did charge a supplement after receiving a false claim, so passengers may still be owed money. You do not have to choose between calling the pilot entirely blameless and treating every signature as guilt. A complex explanation can identify reliance on a false message, rejection of a later profit-sharing suggestion, and an obligation to correct the resulting charges."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two readings follow the complete documents?",
        "options": [
          {
            "id": "gate",
            "label": "Order47 concerns the service gate, not an authorized whole-bridge closure.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "refusal",
            "label": "Esme acknowledged and refused the profit-sharing proposal; her signature alone does not establish acceptance.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "signature",
            "label": "Any signature proves agreement with every sentence above it.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "fare",
            "label": "Every ordinary fare paid before the message must have been a surcharge.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "b03",
        "wrongFeedback": "This combination leaves one of the established restrictions unexplained. Test the proposed explanation against every source.",
        "minSelections": 2,
        "maxSelections": 3
      },
      "routeLabel": "The parish and ferry trail"
    },
    "b03": {
      "title": "A keeper in the queue",
      "location": "The downstream landing",
      "body": [
        "Esme’s crossing list places Miriam on the downstream trip after the bridge notice changed. Miriam returns with duplicate notices from that landing, where the same wider wording had appeared. She had been trying to trace the discrepancy, not fleeing with the festival funds.",
        "Her dispatch slip from the bridge and the pilot’s numbered trip independently fix the journey. They do not establish who collected every payment; that remains in the ledger. Miriam is annoyed that checking a misleading instruction made her absence look like support for it. You can now explain the apparent disappearance while preserving the main financial question. A person’s unexpected location is sometimes a consequence of investigating the same problem, not a second unexplained offense."
      ],
      "meets": [
        "miriam"
      ],
      "clues": [
        "keeper"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b04"
        }
      ],
      "routeLabel": "The parish and ferry trail"
    },
    "b04": {
      "title": "Count the change, not the crowd",
      "location": "The ferry ticket desk",
      "body": [
        "The supplement begins at crossing118, immediately after Silas’s message. Crossing117 and all earlier numbered trips show ordinary fares only. The affected list ends when Esme suspends the supplement after Nella’s correction. Children traveled free, so counting heads and multiplying by the adult supplement would overstate the sum.",
        "You compare individual ticket stubs with ledger entries. One group returned on the same trip and appears twice in a volunteer’s head count but only once in the paid stubs. This is why a believable grievance still needs careful arithmetic. The passengers deserve their actual money back, not a symbolic total that can be dismissed because somebody counted the same payment twice. Esme agrees to preserve the stubs and prepare refunds against their numbers."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b05"
        }
      ],
      "routeLabel": "The parish and ferry trail"
    },
    "b05": {
      "title": "The contractor’s message in his own words",
      "location": "The parish telephone room",
      "body": [
        "Nella asks Silas to confirm the message before telling him what the council copy says. He acknowledges writing that a general closure had been ordered. When shown the signed gate-only instruction, he admits he expanded it to move the crowd and hoped to recover part of the supplement for his inconvenience.",
        "His admission agrees with documents already held outside his control: the message, the limited order, and the refused proposal. You need not rely on the admission alone. The duty officer will check the public path separately, and the ferry will issue corrections and refunds for the actual affected payments. Your route has revealed the economic consequence of the notice, rather than claiming to certify the bridge’s structure through a telephone conversation."
      ],
      "clues": [
        "repayment"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b06"
        }
      ],
      "routeLabel": "The parish and ferry trail"
    },
    "b06": {
      "title": "A remedy that fits the payments",
      "location": "The ferry accounts desk",
      "body": [
        "Choose the compensation rule that follows the individual records. It must identify payments caused by the false general closure without confusing them with ordinary travel or duplicated head counts. The people who used the ferry before the message received the service they intended to buy.",
        "The supplement entries after the message are numbered and matched to stubs. Those are the amounts that can be refunded and recorded transparently. Children’s free journeys and ordinary fares are separate. The council will investigate Silas’s conduct using his message and the proposal; refunding passengers does not erase that evidence. The right ending repairs the harm you can establish while leaving professional safety decisions to the person responsible for them."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which refund policy is supported by the records?",
        "options": [
          {
            "id": "stubs",
            "label": "Refund the individually recorded supplements after Silas’s false message, using ticket numbers to avoid counting a payment twice.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "everyone",
            "label": "Refund an invented adult supplement for every person seen near the river.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "all",
            "label": "Treat all ordinary fares before the message as fraudulent.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "none",
            "label": "Keep the surcharge because the pilot refused the later profit-sharing proposal.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "b07"
      },
      "routeLabel": "The parish and ferry trail"
    },
    "b07": {
      "title": "Receipts going the other way",
      "location": "The ferry landing",
      "body": [
        "Esme issues numbered refunds and attaches each to the original supplement entry. Miriam carries Nella’s correction to both landings so the ferry’s notice and the bridge’s notice no longer tell competing stories. The duty officer keeps one service gate closed and checks the main path before its status changes.",
        "Silas’s retained message and proposal go to the council with the complete signatures, including the refusal. The distinction matters: a case against the sender is not improved by falsely accusing the recipient. Tessa helps passengers identify their ticket numbers. Some choose to donate the returned coins to the festival voluntarily. That is their decision now, rather than a choice made for them by an invented closure."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b08"
        }
      ],
      "routeLabel": "The parish and ferry trail"
    },
    "b08": {
      "title": "What the records will say tomorrow",
      "location": "The parish dispatch desk",
      "body": [
        "Nella prepares three copies of the correction: one for the bridge, one for the ferry, and one for the council inquiry. The statement identifies the unsupported message, the scope of the actual order, and the compensation paid. It does not claim the whole bridge was unsafe or that a refusal made the pilot’s earlier reliance harmless.",
        "Your route has resolved the keeper’s disappearance through independent journey records and the financial mystery through retained messages and individual payments. You did not need to inspect every bolt to do that. You did need to know when not to claim an engineer’s conclusion. Miriam asks for a copy of the wording, because next year the festival volunteers should be able to tell a temporary gate instruction from a profitable rumor."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b09"
        }
      ],
      "routeLabel": "The parish and ferry trail"
    },
    "b09": {
      "title": "A festival with honest fares",
      "location": "The downstream lantern mooring",
      "body": [
        "The last refund receipt goes into the ledger as the lanterns reach the bend. Miriam stands beside the ferry instead of being described as missing. The pilot takes the ordinary fare from the next passenger and points to the corrected notice before accepting it.",
        "You followed the town’s paperwork and its people rather than the maintenance gallery. That choice produced a remedy centered on payments, reliance, and correction. The council still has the documents it needs to examine Silas’s conduct. As the lights drift past, the river looks mysterious again in the welcome sense: something to watch without having to mistrust the sign beside it."
      ],
      "ending": {
        "title": "Case closed: the misleading fare repaid",
        "kind": "solved",
        "body": [
          "The parish order, retained messages, and individual ticket stubs establish the misleading surcharge and a checkable refund. Miriam’s delayed journey is independently accounted for. Your resolution repairs the financial harm while leaving the bridge’s structural decision to the qualified duty officer."
        ]
      },
      "routeLabel": "The parish and ferry trail"
    }
  },
  "solutionPaths": [
    {
      "id": "first-route",
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
          "type": "answer",
          "id": "scope"
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
          "id": [
            "limited",
            "power"
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
          "id": "correct"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    },
    {
      "id": "second-route",
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
          "type": "answer",
          "id": "scope"
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
          "id": [
            "gate",
            "refusal"
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
          "id": "stubs"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    }
  ]
};
