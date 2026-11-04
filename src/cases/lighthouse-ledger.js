/** Expanded, authored mystery. Only earned scenes belong in the reader. */
export default {
  "id": "lighthouse-ledger",
  "title": "The Lighthouse Ledger",
  "genre": "Murder mystery",
  "difficulty": "Challenging",
  "duration": "10–20 min",
  "description": "A harbor auditor is dead, a ship’s arrival has been entered twice, and the lighthouse sent a signal nobody will claim. Follow the light along the coast or trace the numbers inland.",
  "setting": "A working harbor during the last evening tide",
  "contentNote": "Non-graphic murder mystery. The investigation focuses on records, witnesses, and navigation evidence.",
  "characters": [
    {
      "id": "imani",
      "name": "Inspector Imani Vale",
      "role": "Harbor police inspector",
      "description": "Wants each account checked against a source beyond the person giving it.",
      "color": "#a18970"
    },
    {
      "id": "ren",
      "name": "Ren Ash",
      "role": "Relief lighthouse keeper",
      "description": "Can explain the lamp’s controls but refuses to guess who used them.",
      "color": "#a18970"
    },
    {
      "id": "bea",
      "name": "Bea Fen",
      "role": "Harbor pilot",
      "description": "Knows the limits printed on the tide board and keeps her own route sketches.",
      "color": "#a18970"
    },
    {
      "id": "tomas",
      "name": "Tomas Reed",
      "role": "Accounts clerk",
      "description": "Has retained cancelled vouchers as well as the entries people prefer to quote.",
      "color": "#a18970"
    },
    {
      "id": "elias",
      "name": "Elias Wren",
      "role": "Shipping agent",
      "description": "Handles berth bookings and warehouse accounts for several competing firms.",
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
      "id": "common-tide",
      "title": "The arrival tide",
      "description": "At the recorded arrival, water level was1.8m. East inlet requires at least 1.6m; west passage requires below 1.4m for clearance."
    },
    {
      "id": "common-pilot",
      "title": "The independently recorded arrival",
      "description": "Bea’s east-inlet sketch and the dock ledger identify one arrival at Berth 4 under movement referenceB217. Her separately recorded unusual signal predates news of the death."
    },
    {
      "id": "common-vouchers",
      "title": "The repeated movement reference",
      "description": "Two uncancelled90-pound charges in the supplied books reuse unique movementB217 and its same crane tally and berth receipt, with no intervening departure recorded."
    },
    {
      "id": "a-lamp",
      "title": "The shutter access record",
      "description": "Ren recorded the demonstration shutter sealed at 4:30; the seal is now broken, and Elias signed for its key at 5:10."
    },
    {
      "id": "a-pattern",
      "title": "The demonstration pattern",
      "description": "Two white flashes followed by red is a maintenance instruction toward the warehouse reach and requires watch-room coordination absent from the supplied message book."
    },
    {
      "id": "a-custody",
      "title": "The attendant’s prior entry",
      "description": "A preexisting delivery entry independently places Elias at the lighthouse service steps with the key pouch; it does not establish events inside the watch room."
    },
    {
      "id": "a-tally",
      "title": "The cargo-hold instruction",
      "description": "Elias’s signed instruction held cargo against a secondB217 arrival fee; Dale refused certification without evidence of a separate movement."
    },
    {
      "id": "a-safe",
      "title": "The combined police result",
      "description": "The officer combines the documented signal and fee evidence with her separate scene investigation; Elias’s recorded admission is checked against those independent records."
    },
    {
      "id": "b-books",
      "title": "The destination of the second charge",
      "description": "The duplicateB217 amount is posted to an Elias-controlled warehouse-hold account; a filed note anticipates a west-passage description."
    },
    {
      "id": "b-signature",
      "title": "The commission condition",
      "description": "Elias earns commission for distinct documented arrivals, not two descriptions of one movement; his signed cargo-hold instruction demands the second fee."
    },
    {
      "id": "b-letter",
      "title": "The unsigned certificate",
      "description": "Dale requested independent pilot and berth evidence for a second service; Elias’s signed pre-death reply supplied a rewritten route summary instead."
    },
    {
      "id": "b-payment",
      "title": "The unpaid second fee",
      "description": "The second charge was demanded but unpaid; its blank draft receipt prevents claiming a completed double payment while leaving the attempted benefit documented."
    },
    {
      "id": "b-correction",
      "title": "The retained correction",
      "description": "The unsupported fee is cancelled with its audit trail retained. The officer’s recorded admission is corroborated against the independent financial and scene records."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "An arrival written twice",
      "location": "The harbor watch room",
      "body": [
        "Inspector Imani Vale has secured the little room where auditor Arthur Dale was found dead. She confirms that this is a criminal investigation and asks you to leave the medical and scene work to the police. What she needs checked is a puzzle in the ordinary harbor records: the vessel Rowan Star appears to have arrived by two different routes on the same tide.",
        "A witness also reports an unusual lighthouse signal. Imani can arrange a supervised coastal inspection with Ren, or access to the accounts Tomas kept for the auditor. Choose the trail you are prepared to document. Elias Wren, the shipping agent named on both entries, is waiting for a formal interview."
      ],
      "meets": [
        "imani",
        "elias"
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Follow the unauthorized signal with the relief keeper",
          "to": "a-lamp",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Trace the disputed arrival through the accounts office",
          "to": "b-books",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "common-tide": {
      "title": "A table with physical limits",
      "location": "The public tide board",
      "body": [
        "The board gives the evening water level as 1.8 meters above the harbor datum, confirmed by the gauge at the watch room. The east inlet is usable at 1.6 meters or higher. The west rock passage is permitted only below 1.4 meters, when its overhead stone opening has enough clearance. These limits are printed for this small harbor; no outside knowledge of seamanship is needed.",
        "The pilot’s signed route sketch shows the east inlet. The agent’s later summary says west passage. Both name the same arrival time and vessel. A disagreement between documents should be tested against the physical constraint before it becomes a vote about which writer seems more respectable."
      ],
      "clues": [
        "common-tide"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-route"
        }
      ]
    },
    "common-route": {
      "title": "An impossible route is not an impossible ship",
      "location": "The watch-room chart table",
      "body": [
        "Imani asks which part of the record can already be challenged. The vessel may have arrived normally even if one summary is wrong. A safe conclusion should retain that distinction. Use the supplied limits exactly; do not assume that deeper water makes every route safer, because the west passage has an overhead clearance restriction.",
        "Which conclusion follows from the measured1.8-meter level?"
      ],
      "puzzle": {
        "prompt": "Which route account is consistent with the harbor’s stated limits?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Both routes are equally consistent because1.8 is greater than both printed numbers.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "An incorrect route summary proves the vessel never arrived.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The east inlet is physically consistent; the west-passage summary contradicts its clearance limit.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "Neither route can be used unless the level equals a threshold exactly.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "common-pilot"
      }
    },
    "common-pilot": {
      "title": "One vessel, one recorded berth",
      "location": "The pilot shelter",
      "body": [
        "Bea Fen has retained the departure slip from her pilot boat. It names Rowan Star, the east inlet, and Berth 4. A separate dock worker’s ledger records the same vessel secured at Berth 4. The berth receipt carries the unique movement referenceB217. Those observations are consistent with one arrival, not evidence for a second journey through the rock passage.",
        "Bea cannot explain why the summary was rewritten. She also remembers two white flashes followed by a red one from the lighthouse before the ship turned toward the warehouse reach. The public lamp normally shows a steady white light. She recorded the pattern before hearing about Dale’s death."
      ],
      "meets": [
        "bea"
      ],
      "clues": [
        "common-pilot"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-vouchers"
        }
      ]
    },
    "common-vouchers": {
      "title": "Two entries beneath one number",
      "location": "The auditor’s copied work file",
      "body": [
        "Tomas brings the copies Dale asked him to preserve. One voucher charges90 pounds for arrivalB217 at Berth 4. Another charges90 pounds for a supposed separate movement but repeats B217, the same crane tally, and the same berth receipt. No return departure or second pilot booking appears between them.",
        "Matching amounts alone would be weak: two legitimate services may cost the same. Reuse of a unique movement reference and supporting receipt is a different problem. A cancellation mark could still resolve it, so Tomas supplies the cancelled-voucher book as well. Neither of these two entries is cancelled there. You record the search’s actual scope, not a claim to have inspected every account in the world."
      ],
      "meets": [
        "tomas"
      ],
      "clues": [
        "common-vouchers"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-duplicate"
        }
      ]
    },
    "common-duplicate": {
      "title": "A duplicate needs more than matching sums",
      "location": "The accounts-copy table",
      "body": [
        "The agent’s summary calls the second charge a different arrival by the west passage. The tide constraint challenges that route, and the supporting references appear to be reused. Select the two documentary observations that support investigating a duplicate charge independently of a mere coincidence in price.",
        "A useful report can say where a search found no cancellation without claiming that the absence proves every aspect of a criminal motive. Imani needs a checkable discrepancy, not an accusation assembled from equal numbers alone."
      ],
      "puzzle": {
        "prompt": "Which two observations support a duplicate-charge inquiry?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "Neither charge is cancelled in the supplied cancellation book, and no intervening departure is recorded.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "The identical90-pound amounts alone prove fraud in every context.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "An impossible route summary proves who caused the auditor’s death.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Both charges reuse unique movementB217 and the same supporting berth and crane records.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "common-return"
      }
    },
    "common-return": {
      "title": "The question the auditor was asking",
      "location": "The harbor office corridor",
      "body": [
        "Dale’s last written question asked Elias to reconcile B217 with the second charge before the accounts were certified. It did not accuse him of murder, and his death does not answer the financial question. The unexplained signal and the unsupported second movement remain two possible routes toward the reason for the rewritten record.",
        "Complete the inquiry you began. The coast can establish what equipment was changed, who had access, and whether the signal directed a real movement. The accounts can establish who benefited from the duplication and what Dale intended to certify. Imani will combine your properly limited findings with the police investigation rather than asking you to enter the secured room."
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Follow your chosen trail to its independent evidence",
          "to": "a-custody",
          "requiresFlags": [
            "route-a"
          ]
        },
        {
          "id": "continue-b",
          "label": "Follow your chosen trail to its independent evidence",
          "to": "b-letter",
          "requiresFlags": [
            "route-b"
          ]
        }
      ]
    },
    "a-lamp": {
      "title": "The light that should have stayed white",
      "location": "The lighthouse service gallery",
      "body": [
        "Ren meets you at the supervised service entrance. The normal lamp is intact. A separate demonstration shutter can produce flashes for maintenance tests, but its switch should be locked during navigation hours. Ren’s checklist records it sealed at 4:30. The seal is broken now, and the cabinet register shows Elias borrowing its service key at 5:10 for a claimed inspection."
      ],
      "meets": [
        "ren"
      ],
      "clues": [
        "a-lamp"
      ],
      "setFlags": [
        "route-a"
      ],
      "routeLabel": "The coastal signal investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Inspect the public signal instructions",
          "to": "a-pattern"
        }
      ]
    },
    "a-pattern": {
      "title": "A pattern with a local meaning",
      "location": "The lighthouse notice case",
      "body": [
        "The public maintenance card lists two white flashes and a red one as “approach warehouse reach for test berth.” The card explicitly says it is not an ordinary navigation signal and must be coordinated with the harbor watch. The watch-room message book contains no corresponding coordination entry. Ren will preserve the cabinet untouched for the police rather than reseal it and lose the sequence."
      ],
      "clues": [
        "a-pattern"
      ],
      "routeLabel": "The coastal signal investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Test the arrival records against the tide",
          "to": "common-tide"
        }
      ]
    },
    "a-custody": {
      "title": "An independent view from the quay",
      "location": "The warehouse approach",
      "body": [
        "A quay attendant wrote Elias’s arrival beside the lighthouse service steps in a routine delivery book, before the signal was discussed publicly. The attendant saw him carry the service-key pouch back toward the watch office afterward. This corroborates part of the key register; it does not place him inside Dale’s secured room. Imani asks you to keep those two propositions apart."
      ],
      "clues": [
        "a-custody"
      ],
      "routeLabel": "The coastal signal investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Ask why the ship was sent toward the warehouse",
          "to": "a-tally"
        }
      ]
    },
    "a-tally": {
      "title": "The cargo held for a second fee",
      "location": "The warehouse tally shelter",
      "body": [
        "The warehouse clerk produces an instruction signed by Elias: hold Rowan Star’s cargo pending payment of a second arrival charge. Its reference isB217 again. Dale’s penciled reply refuses to certify the repeated service without separate movement evidence. The altered route summary would have made the extra charge appear legitimate. You now have a financial reason to explain the otherwise unnecessary demonstration signal."
      ],
      "clues": [
        "a-tally"
      ],
      "routeLabel": "The coastal signal investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Choose the conclusion the coastal chain supports",
          "to": "a-final"
        }
      ]
    },
    "a-final": {
      "title": "A signal, a benefit, and a limit",
      "location": "The harbor watch-room steps",
      "body": [
        "The key register, prior attendant entry, recorded signal pattern, and signed hold instruction form a checkable chain. They still do not permit you to describe the unseen criminal event. Which finding should Imani carry into the formal interview?"
      ],
      "puzzle": {
        "prompt": "Which finding is supported without inventing a witness to the death?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "The pilot caused the death because she obeyed a signal she recorded.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The broken seal alone proves every action inside Dale’s room.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Elias had independently corroborated shutter access linked to a signal that served his signed duplicate-fee hold, creating specific grounds for questioning him about Dale’s refusal.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "A helpful maintenance purpose cancels the need for watch-room coordination.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "a-safe"
      },
      "routeLabel": "The coastal signal investigation"
    },
    "a-safe": {
      "title": "A light returned to its ordinary meaning",
      "location": "The lighthouse observation rail",
      "body": [
        "Imani takes the register, prior entries, and signed instruction into police custody. Her separate investigation places Elias with Dale after the certification refusal. When confronted in a recorded interview with the combined evidence, he admits responsibility for Dale’s death and the false fee. Ren restores the normal light only after the cabinet is documented and released for safe operation."
      ],
      "clues": [
        "a-safe"
      ],
      "routeLabel": "The coastal signal investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Watch a later ship enter under the ordinary light",
          "to": "ending-a"
        }
      ]
    },
    "b-books": {
      "title": "The pages Dale wanted kept",
      "location": "The inland accounts room",
      "body": [
        "Tomas has kept original vouchers, not just totals copied into the annual book. The secondB217 charge is posted to a warehouse-hold account controlled by Elias. A note says it will be described as a west-passage service when the summary is rewritten. Tomas gives you the note’s filing date and does not pretend to know who dictated it without another source."
      ],
      "meets": [
        "tomas"
      ],
      "clues": [
        "b-books"
      ],
      "setFlags": [
        "route-b"
      ],
      "routeLabel": "The inland accounts investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Compare the signed instruction with the posting",
          "to": "b-signature"
        }
      ]
    },
    "b-signature": {
      "title": "A commission that cannot create a journey",
      "location": "The shipping agents’ registry",
      "body": [
        "Elias’s contract pays him a commission for distinct, documented arrival services. It does not pay twice for alternative descriptions of one arrival. The warehouse clerk’s signed hold instruction demands the extra fee before cargo is released. A commission motive is now documented, although it still does not establish what happened to Dale. You take the relevant clauses rather than copying unrelated customers’ balances."
      ],
      "clues": [
        "b-signature"
      ],
      "routeLabel": "The inland accounts investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Check the voyage against physical and independent records",
          "to": "common-tide"
        }
      ]
    },
    "b-letter": {
      "title": "The certificate that stayed unsigned",
      "location": "The auditor’s correspondence desk",
      "body": [
        "Dale drafted a certificate refusing the second fee because its supporting reference duplicatedB217. He offered Elias the chance to supply a distinct pilot movement and berth receipt. Elias’s signed reply instead supplied the rewritten route summary. The reply was delivered before Dale’s death, so the disagreement is documented independently of later accounts of their meeting."
      ],
      "clues": [
        "b-letter"
      ],
      "routeLabel": "The inland accounts investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Compare the draft with the money already demanded",
          "to": "b-payment"
        }
      ]
    },
    "b-payment": {
      "title": "Demanded is not necessarily collected",
      "location": "The warehouse cashier’s counter",
      "body": [
        "The cashier confirms the second fee was demanded but had not yet been paid. A draft receipt remained blank. That means the report must not say Elias had already received both commissions. The signed hold still creates an attempted benefit and explains the pressure on Dale’s certification. Imani thanks you for keeping this inconvenient limit rather than rounding an attempted transaction into a completed one."
      ],
      "clues": [
        "b-payment"
      ],
      "routeLabel": "The inland accounts investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose a financial account that retains its limits",
          "to": "b-final"
        }
      ]
    },
    "b-final": {
      "title": "The amount that should stay conditional",
      "location": "The accounts registry table",
      "body": [
        "The financial trail has a repeated movement, a signed hold, a commission condition, a refusal, and an unpaid second demand. Which statement connects those records honestly enough for Imani to test against her separate criminal investigation?"
      ],
      "puzzle": {
        "prompt": "Which financial conclusion is justified?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Dale’s refusal establishes the exact physical circumstances of his death.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Elias sought a commission-bearing second fee unsupported by a distinct arrival, and Dale’s documented refusal obstructed that attempted benefit.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "A new route description automatically creates a new service.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Elias had certainly collected both commissions because two charges were written.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "b-correction"
      },
      "routeLabel": "The inland accounts investigation"
    },
    "b-correction": {
      "title": "Two inquiries meet",
      "location": "The harbor police desk",
      "body": [
        "Imani combines your copies with the shutter register and her separate scene evidence. During a recorded interview Elias admits the false fee and responsibility for Dale’s death. Tomas cancels the unsupported charge under the auditor’s reference, preserving its old entry rather than erasing it. The archive will show what was attempted, what was collected, and why the corrected total differs."
      ],
      "clues": [
        "b-correction"
      ],
      "routeLabel": "The inland accounts investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Return the corrected berth account to the pilot shelter",
          "to": "ending-b"
        }
      ]
    },
    "ending-a": {
      "title": "One steady light",
      "location": "The public lighthouse path",
      "body": [
        "A later vessel comes through the east inlet under an ordinary white light. Ren’s new log explains the documented cabinet interruption and who authorized its return to service."
      ],
      "ending": {
        "title": "Resolved through the coastal signal trail",
        "body": [
          "Your route connected an unauthorized signal to a signed duplicate-fee hold, without pretending the signal alone proved a murder. Imani combined that chain with her own scene evidence and a corroborated admission. The light is safe again, and Dale’s unanswered accounting question has a documented answer."
        ],
        "kind": "solved"
      }
    },
    "ending-b": {
      "title": "The line left visible",
      "location": "The harbor accounts office",
      "body": [
        "Tomas draws one line through the second charge and writes the cancellation reference beside it. He leaves the original figure readable, including the fact that it was never paid."
      ],
      "ending": {
        "title": "Resolved through the financial trail",
        "body": [
          "You established the attempted duplicate benefit, its contractual condition, and Dale’s refusal while preserving the difference between demanded and collected money. The police connected those records to the criminal event through their separate evidence. Your chosen route leaves a particularly clear audit trail rather than an erased mistake."
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
            "answer-1",
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
            "answer-1",
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
