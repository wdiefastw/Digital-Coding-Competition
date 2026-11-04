/** Original case; answer keys and route proofs are never projected into the reading interface. */
export default {
  "id": "counterfeit-spring",
  "title": "The Counterfeit Spring",
  "genre": "Detective mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "A hillside spa reopening its long-dry public fountain",
  "description": "A celebrated spring runs clear through the driest week of the year. Follow the hidden water line or the restoration payments to test the promise behind the opening ceremony.",
  "revision": 2,
  "flags": [
    "water-line",
    "work-orders"
  ],
  "characters": [
    {
      "id": "ruth",
      "name": "Ruth Vale",
      "role": "Village clerk",
      "description": "Keeps the public noticeboard level even when every notice starts an argument.",
      "color": "#a78c74"
    },
    {
      "id": "hana",
      "name": "Hana Reed",
      "role": "Water engineer",
      "description": "Labels a valve by what it does, not by what someone painted beside it.",
      "color": "#8b9f9b"
    },
    {
      "id": "otto",
      "name": "Otto Grey",
      "role": "Retired caretaker",
      "description": "Remembers how much a tank held because he once had to clean it by hand.",
      "color": "#9a927b"
    },
    {
      "id": "mila",
      "name": "Mila Fen",
      "role": "Restoration apprentice",
      "description": "Saves her work sheets even when nobody asks for them.",
      "color": "#a28cab"
    }
  ],
  "clues": [
    {
      "id": "csw-capacity",
      "title": "The stored-water limit",
      "description": "A1000L tank cannot alone supply the measured 2880L over two hours while every natural inlet remains dry."
    },
    {
      "id": "csw-valves",
      "title": "The live connection",
      "description": "The sealed catchment valve is shut and the temporary town-main valve open; stamped hardware arrows contradict the wall paint."
    },
    {
      "id": "csw-meter",
      "title": "The dedicated meter follows the fountain",
      "description": "The isolated temporary-main branch records no use with the basin shut and matches basin output when open; it serves no other outlet."
    },
    {
      "id": "csw-order",
      "title": "A knowingly temporary supply",
      "description": "The contractor signed the testing connection order requiring removal before natural-source completion; no disconnection was certified."
    },
    {
      "id": "csw-certificate",
      "title": "The signed source claim",
      "description": "The contractor certified main removal and natural catchment flow under the same job number as the temporary connection order."
    },
    {
      "id": "csw-remedy",
      "title": "The two contract items can be separated",
      "description": "Basin repair and natural-source restoration are separate; a targeted payment hold and honest source label preserve legitimate work."
    },
    {
      "id": "csw-explanation",
      "title": "A source finding, not a water-quality verdict",
      "description": "The evidence establishes town-main supply contrary to the certificate; chemical safety and individual worker intent are separate questions."
    },
    {
      "id": "csd-length",
      "title": "The supplied quantities",
      "description": "The approved source route needs 120 m; only 20 m for basin work were delivered, plus a temporary town-main hose."
    },
    {
      "id": "csd-sheets",
      "title": "What the crew actually installed",
      "description": "Five 4 m sections complete the basin’s 20 m interior; the old source pipe was removed without reuse and no 120 m source installation is recorded."
    },
    {
      "id": "csd-account",
      "title": "The temporary supply remains on the account",
      "description": "The dedicated temporary-main service is still open under the restoration project, with no required closure instruction."
    },
    {
      "id": "csd-checklist",
      "title": "Only one independently certified item",
      "description": "The inspector signed basin repair only and noted that no source-route inspection was requested; disconnection was not certified."
    },
    {
      "id": "csd-invoice",
      "title": "A specific inspection claim is contradicted",
      "description": "The contractor bills a Tuesday independent source inspection; the surveyor’s signed records place him elsewhere throughout Tuesday."
    },
    {
      "id": "csd-split",
      "title": "A supported partial-payment decision",
      "description": "The contract permits payment for certified basin work while unsupported source and disconnection items are held and investigated."
    },
    {
      "id": "csd-notice",
      "title": "The documentary finding has limits",
      "description": "Records support incomplete natural-source certification and a contradicted inspection claim; engineering and water-quality checks remain distinct."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "Water in a dry week",
      "location": "The spring pavilion",
      "body": [
        "The village has reopened its old spring pavilion beneath a banner promising “natural hillside water restored.” The basin is full, the new tiles shine, and the hill above has had no rain for weeks. Ruth is pleased to see people using the square again, but an unsigned note says the opening celebrates the wrong pipe. The restoration contractor has already invoiced the village for reconnecting the natural catchment. You are asked to test that specific promise, not to declare the water unsafe because its source is uncertain. The drinking outlet is closed pending the ordinary professional checks."
      ],
      "meets": [
        "ruth"
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
      "title": "What was bought",
      "location": "The village office",
      "body": [
        "The contract distinguishes two jobs. Restoring the spring means reconnecting the hillside catchment without a town-main supply. Repairing the public basin is a separate, cheaper item. The contractor claims both were completed. A legitimate temporary main connection would have been allowed during construction, but it could not be advertised or invoiced as the restored natural source. Ruth gives you the public contract and access permissions. Hana can inspect the water route while the crew is present; Mila can instead show you the archived work orders before the contractor collects them."
      ],
      "meets": [
        "hana"
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
      "title": "Follow water or follow work",
      "location": "The pavilion steps",
      "body": [
        "The physical route goes uphill through the old catchment, valve chamber, and metered town connection. The documentary route follows purchase quantities, signed work sheets, and the contract’s separate payment items. Both can test the same promise, but their decisive evidence will come from different places. Choose one chain to complete before the afternoon meeting. The village wants a truthful fountain, not a new feud based on a photograph of wet stone."
      ],
      "meets": [],
      "choices": [
        {
          "id": "water-line",
          "label": "Trace the actual water supply",
          "to": "water-line-0",
          "excludesFlags": [
            "work-orders"
          ]
        },
        {
          "id": "work-orders",
          "label": "Reconstruct the restoration work",
          "to": "work-orders-0",
          "excludesFlags": [
            "water-line"
          ]
        }
      ]
    },
    "water-line-0": {
      "title": "The tank’s useful limit",
      "location": "The hillside catchment",
      "body": [
        "Otto shows the original tank specification: its maximum usable capacity is 1000 liters. Hana records the fountain flowing at 24 liters per minute for a continuous two-hour observation, with the flow meter checked against a certified reference. That is 2880 liters, well above one full tank. The catchment inlet remains visibly dry throughout the observation and the inspection log records no other natural inlet. This does not tell you which artificial supply is operating, but it rules out the claim that the fountain is merely emptying a tank filled during an earlier shower."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [
        "otto"
      ],
      "setFlags": [
        "water-line"
      ],
      "clues": [
        "csw-capacity"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-line-1",
          "requires": []
        }
      ]
    },
    "water-line-1": {
      "title": "The map behind the tiles",
      "location": "The valve chamber",
      "body": [
        "Hana opens the authorized service chamber. The current pipe diagram shows one old line from the catchment and one temporary line from the town main. A pressure gauge alone could not prove which source feeds the basin because both lines meet downstream. The catchment valve is shut and tagged with an unchanged inspection seal. The temporary-main valve is open. Painted arrows on the chamber wall point in the opposite direction to the stamped arrows on the actual valves; Hana explains that the hardware markings, not decorative paint, identify the direction of permitted flow."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [
        "hana"
      ],
      "clues": [
        "csw-valves"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-line-2",
          "requires": [
            "csw-capacity",
            "csw-valves"
          ]
        }
      ]
    },
    "water-line-2": {
      "title": "What can the tank account for?",
      "location": "The chamber worktable",
      "body": [
        "Test the simplest remaining explanation before considering the contractor’s motives. The measured two-hour output and maximum storage are supplied in ordinary units. You must also use the observed dry inlet. Choose the conclusion that follows from those values without treating an impressive flow as evidence of a miraculous underground recovery."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [],
      "puzzle": {
        "prompt": "What does the two-hour observation establish?",
        "options": [
          {
            "id": "external",
            "label": "The measured 2880L cannot come solely from a 1000L tank with dry natural inlets.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "stored",
            "label": "One full 1000L tank can provide 2880L without another source.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "miracle",
            "label": "A strong flow proves the natural spring has recovered.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "quality",
            "label": "The volume measurement proves the water is chemically unsafe.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "water-line-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "water-line-0"
        }
      ]
    },
    "water-line-3": {
      "title": "A meter that moves with the basin",
      "location": "The town-main kiosk",
      "body": [
        "The licensed crew conducts an approved isolation check while you observe the meter readings. With the basin supply closed, the dedicated temporary-main meter does not change. With the basin open for the documented interval, that meter records the same volume as the basin’s calibrated flow total. The kiosk serves no other outlet on this branch. The test identifies the operating source without needing you to manipulate any public valve yourself. It is a paired observation: an isolated meter linked only to this branch, then a matching volume when the basin runs."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [],
      "clues": [
        "csw-meter"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-line-4",
          "requires": []
        }
      ]
    },
    "water-line-4": {
      "title": "A connection the contract allowed temporarily",
      "location": "The construction store",
      "body": [
        "Mila brings the installation ticket for the temporary-main hose and valve assembly. It was signed by the contractor for testing the basin tiles, a legitimate construction purpose. The work order required its removal before claiming natural-spring restoration. Her later closeout sheet has a blank space where the disconnection should have been signed. A blank alone would not prove the connection remained; your physical inspection already established that. The ticket instead supplies the contractor’s knowledge of the connection and the agreed limit of its use."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [
        "mila"
      ],
      "clues": [
        "csw-order"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-line-5",
          "requires": []
        }
      ]
    },
    "water-line-5": {
      "title": "The claim on the final certificate",
      "location": "The pavilion office",
      "body": [
        "The final certificate signed by the same contractor states “town-main connection removed; natural catchment feeding basin.” Ruth compares the signature and job number with the temporary installation ticket. Your observed open main valve and paired meter test directly contradict the signed completion statement. The finding concerns the source and invoice, not the chemical quality of the water. Hana keeps the ordinary water-quality process separate so nobody mistakes a source dispute for a safety analysis that has not been performed."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [],
      "clues": [
        "csw-certificate"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-line-6",
          "requires": [
            "csw-order",
            "csw-certificate"
          ]
        }
      ]
    },
    "water-line-6": {
      "title": "Connect source to the false certificate",
      "location": "The service office",
      "body": [
        "Select the two observations that establish a false completion claim. One identifies the current operating source through an independent physical test. The other identifies what was signed as complete. The dry weather is a reason to investigate, but weather alone cannot establish what happened beneath the tiles. Otto’s memory is useful context, not a substitute for the paired measurements."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations establish the false source-completion claim?",
        "options": [
          {
            "id": "meter",
            "label": "The dedicated isolated main meter tracks the basin’s measured output.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "certificate",
            "label": "The signed final certificate claims the main was removed and natural flow restored.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "weather",
            "label": "Neighbors remember a dry summer.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "memory",
            "label": "Otto thinks the basin sounded different when he was young.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "water-line-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "water-line-4"
        }
      ]
    },
    "water-line-7": {
      "title": "The pavilion does not have to close forever",
      "location": "The village office",
      "body": [
        "Ruth can suspend the natural-source completion payment while leaving the separately completed basin repair available for ordinary use after its checks. Hana proposes labeling the fountain honestly as town-supplied until the catchment is genuinely restored. The contractor is asked to respond to the physical measurements and signed certificate, with the original test records retained. Your route does not require the village to choose between accepting a false story and losing its public square. It establishes which part of the work can be kept and which promise has not been fulfilled."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [],
      "clues": [
        "csw-remedy"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-line-8",
          "requires": []
        }
      ]
    },
    "water-line-8": {
      "title": "The meeting in the shade",
      "location": "The pavilion steps",
      "body": [
        "Neighbors gather under the new awning, some angry at the contractor and some worried that the whole restoration will be torn out. You show a simple diagram of the two pipes and the paired meter test. Otto brings the old 1000 liter specification, while Hana explains why it was only the beginning of the argument. The decisive proof is where the water presently comes from and what the contractor certified. Ruth asks for a final recommendation that preserves that distinction and avoids making claims about water quality or every worker’s intentions."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [],
      "clues": [
        "csw-explanation"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "water-line-9",
          "requires": [
            "csw-remedy",
            "csw-explanation"
          ]
        }
      ]
    },
    "water-line-9": {
      "title": "Choose the defensible recommendation",
      "location": "The village meeting",
      "body": [
        "Your route has a physical source test, a signed temporary-use agreement, and a contradictory final certificate. Choose a response that addresses the unsupported natural-source payment without condemning the independently completed basin repair. Precision is useful to the village: it tells them what can be enjoyed now, what must be corrected, and which further checks still belong to qualified staff."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [],
      "puzzle": {
        "prompt": "Which response fits the established contract and source evidence?",
        "options": [
          {
            "id": "targeted",
            "label": "Hold the natural-restoration payment, retain the separate basin work, and label the actual supply pending correction.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "destroy",
            "label": "Remove the whole pavilion because one source claim is false.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "pay",
            "label": "Pay for natural restoration because water is visibly flowing.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "unsafe",
            "label": "Announce a chemical danger without the required testing.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "water-line-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "water-line-7"
        }
      ]
    },
    "water-line-10": {
      "title": "The fountain with an honest name",
      "location": "The spring pavilion",
      "body": [
        "The natural-source completion payment is withheld pending the contractor’s response. The basin is labeled as town-supplied and reopens after its ordinary safety clearance. Hana documents the remaining catchment work as a separate job, and Mila’s sheets remain in the public project file. You solved the case by following water through hardware and a dedicated meter. The village keeps its repaired pavilion, while the promise that made the spring “natural” is no longer confused with the fact that water runs from a tap."
      ],
      "routeLabel": "Trace the actual water supply",
      "meets": [],
      "ending": {
        "title": "Solved through the working pipes",
        "kind": "solved",
        "body": [
          "A live source test exposed a false completion statement. The public basin survives with an honest label, while the unfulfilled restoration promise receives a specific and documented remedy."
        ]
      }
    },
    "work-orders-0": {
      "title": "The length the hillside required",
      "location": "The project archive",
      "body": [
        "Mila’s approved survey calls for 120 meters of pipe between the natural catchment and pavilion. The completed basin repair requires 20 meters of separate internal pipe. The purchase ledger lists only 20 meters delivered, and the delivery ticket is countersigned by the village storekeeper. A separate hire form lists a temporary hose to the town main. The absence of a purchase is not by itself proof that no reused pipe existed, so you mark the quantity mismatch as a question to check against the work records rather than immediately calling it the whole case."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [
        "mila"
      ],
      "setFlags": [
        "work-orders"
      ],
      "clues": [
        "csd-length"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "work-orders-1",
          "requires": []
        }
      ]
    },
    "work-orders-1": {
      "title": "The crew’s measured progress",
      "location": "The apprentice workroom",
      "body": [
        "The daily crew sheets name every section installed. Five four-meter sections complete the 20 meter basin interior. No sheet records work on the hillside route, and the supervisor’s material-return form says the old catchment pipe was removed and not reused. Together those records close the reused-pipe alternative left by the purchase ledger. The fountain’s visible tiles could have been finished without reconnecting its natural source. You compare the completed 20 meter item to the separately specified 120 meter route before considering the final bill."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "clues": [
        "csd-sheets"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "work-orders-2",
          "requires": [
            "csd-length",
            "csd-sheets"
          ]
        }
      ]
    },
    "work-orders-2": {
      "title": "Which job do the quantities support?",
      "location": "The village project table",
      "body": [
        "Use the survey, delivery, and crew sheets to identify the completed item. A finished surface can conceal an uncompleted connection, while a missing purchase alone would leave a reuse possibility. The work records address that possibility explicitly. Your first deduction should separate the supported basin repair from the unsupported natural-source reconstruction without claiming that nobody performed useful work."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "puzzle": {
        "prompt": "Which completed work do the material and crew records support?",
        "options": [
          {
            "id": "basin",
            "label": "The 20 m basin interior, with no established 120 m natural-source installation.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "source",
            "label": "The full 120 m route because the basin looks finished.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "reuse",
            "label": "The old source pipe must have been reused despite its recorded removal.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "nothing",
            "label": "No work at all, because one major item remains unsupported.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "work-orders-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "work-orders-0"
        }
      ]
    },
    "work-orders-3": {
      "title": "A temporary service account",
      "location": "The town accounts counter",
      "body": [
        "The town’s service account charges the project for a dedicated temporary-main connection. Its meter was opened for testing the basin and remains on the current service list, with no closure instruction. The contract required the contractor to submit a closure form before natural-source completion. This account does not by itself measure the fountain’s present source, but it independently shows the temporary service was not administratively closed. The bill identifies a continuing facility under the same project number as the work sheets."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "clues": [
        "csd-account"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "work-orders-4",
          "requires": []
        }
      ]
    },
    "work-orders-4": {
      "title": "The surveyor’s checkpoint",
      "location": "The old catchment path",
      "body": [
        "The village surveyor’s completion checklist has three fields: basin repaired, new 120 meter source route pressure-tested, and temporary main disconnected. Only the basin field bears an independent inspector’s signature. The other two fields are blank, and the attached visit note says no source-line inspection was requested. An unsigned field might reflect lost paperwork; here the visit note states the missing event. You photograph the checklist with permission and copy the reference. A payment certificate should not quietly replace a check the contract explicitly required another person to perform."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "clues": [
        "csd-checklist"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "work-orders-5",
          "requires": []
        }
      ]
    },
    "work-orders-5": {
      "title": "The invoice joins what the checks separated",
      "location": "The village finance desk",
      "body": [
        "The contractor’s final invoice charges for all three completed fields. His attached declaration says the independent source-line inspection took place on Tuesday, but the surveyor’s travel ledger and signed village appointment book place the surveyor at another district all Tuesday. The conflict is not merely an empty box. It is a specific claimed event contradicted by independent contemporary records. Ruth asks whether the invoice can be split so the completed basin work is not held hostage to the unsupported source items. The contract’s separate prices allow exactly that."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "clues": [
        "csd-invoice"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "work-orders-6",
          "requires": [
            "csd-checklist",
            "csd-invoice"
          ]
        }
      ]
    },
    "work-orders-6": {
      "title": "Distinguish missing papers from a false statement",
      "location": "The finance desk",
      "body": [
        "Select the two observations that justify withholding the unsupported source completion rather than simply requesting a duplicate form. One establishes what was independently certified; the other contradicts a specific inspection claim. A neighbor’s impression of flowing water cannot stand in for the contractual checkpoint. Your reasoning should remain sound without assuming that every missing sheet is dishonest."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "puzzle": {
        "prompt": "Which two records move this beyond a request for missing paperwork?",
        "options": [
          {
            "id": "checklist",
            "label": "The independent checklist certifies only basin work and records no source inspection request.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "contradiction",
            "label": "The claimed Tuesday inspection conflicts with the surveyor’s independent whereabouts records.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "banner",
            "label": "The opening banner calls the spring natural.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "water",
            "label": "Visitors could see water flowing in the basin.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "work-orders-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "work-orders-4"
        }
      ]
    },
    "work-orders-7": {
      "title": "A public account of partial completion",
      "location": "The village clerk’s room",
      "body": [
        "Ruth prepares a split account: pay the independently certified basin repair, suspend the source-route and disconnection items, and require a documented response to the false inspection declaration. The temporary service remains labeled as such until engineering checks establish the actual supply and correction plan. Your documentary route supports a contractual finding without pretending to replace a physical hydraulic inspection. It also protects Mila and the crew from being blamed for work they accurately recorded as partial. The records tell a more precise story than either the opening banner or a blanket allegation of a wholly fake project."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "clues": [
        "csd-split"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "work-orders-8",
          "requires": []
        }
      ]
    },
    "work-orders-8": {
      "title": "The wording the village can stand behind",
      "location": "The pavilion noticeboard",
      "body": [
        "The new public notice explains that basin repairs are certified, natural-source restoration is not, and the final inspection claim conflicts with independent records. It does not assert a laboratory result about the water. Otto recognizes the honesty of saying what is still unknown; the old pavilion’s history has always included repairs, interruptions, and renamed supplies. Ruth asks you to choose the final administrative action. The aim is to stop payment for an unsupported promise while preserving the evidence needed to decide whether and how the contractor can remedy it."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "clues": [
        "csd-notice"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "work-orders-9",
          "requires": [
            "csd-split",
            "csd-notice"
          ]
        }
      ]
    },
    "work-orders-9": {
      "title": "Close the contract investigation",
      "location": "The village finance desk",
      "body": [
        "Choose the action justified by your trail. A good contractual conclusion names the supported work, the unmet checkpoint, and the exact claim requiring an answer. It neither pays every item because the opening looked successful nor refuses to pay honest work merely to make the response dramatic. The separate line items are part of the evidence and part of the fair remedy."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "puzzle": {
        "prompt": "Which contract action is supported?",
        "options": [
          {
            "id": "partial",
            "label": "Pay the certified basin item; hold unsupported source items and investigate the contradicted inspection claim.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "full",
            "label": "Pay every line because visitors enjoyed the opening.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "zero",
            "label": "Withhold even certified work without distinguishing the line items.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "chemical",
            "label": "Declare a proven water-quality hazard from the invoice alone.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "work-orders-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "work-orders-7"
        }
      ]
    },
    "work-orders-10": {
      "title": "A payment held for the right reason",
      "location": "The village office",
      "body": [
        "The village pays the certified basin item and holds the two unsupported source items. The contractor receives the contradictory inspection records and a formal request to respond. An engineering visit is commissioned before any new source claim is made, and the temporary supply remains honestly described. You solved the case through purchases, measured crew work, an independent checklist, and a false dated declaration. The same promise has been tested through an entirely different chain from the physical pipe route, ending in a documented contract decision rather than a valve-room demonstration."
      ],
      "routeLabel": "Reconstruct the restoration work",
      "meets": [],
      "ending": {
        "title": "Solved through the work records",
        "kind": "solved",
        "body": [
          "Your route separated completed work from an unsupported certificate. A specific payment hold and documented inspection dispute replace both the opening’s easy promise and a blanket accusation against the crew."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "water-line-complete",
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
          "id": "water-line"
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
          "id": "external"
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
            "meter",
            "certificate"
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
          "id": "targeted"
        }
      ]
    },
    {
      "id": "work-orders-complete",
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
          "id": "work-orders"
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
          "id": "basin"
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
            "checklist",
            "contradiction"
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
          "id": "partial"
        }
      ]
    }
  ]
};
