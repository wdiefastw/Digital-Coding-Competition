/** Original case; answer keys and route proofs are never projected into the reading interface. */
export default {
  "id": "paper-moon-cafe",
  "title": "The Paper Moon Account",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "A neighborhood cafe after its first community fundraiser",
  "description": "The morning after a fundraiser, the bank envelope is lighter than everyone remembers. Two very different paper trails begin beside an overturned cup.",
  "revision": 2,
  "flags": [
    "accounts",
    "courier"
  ],
  "characters": [
    {
      "id": "mara",
      "name": "Mara Bell",
      "role": "Cafe owner",
      "description": "Remembers regular orders more easily than dates and keeps every returned cup on the warmer.",
      "color": "#ad8865"
    },
    {
      "id": "june",
      "name": "June Park",
      "role": "Volunteer treasurer",
      "description": "A careful student balancing her first public ledger.",
      "color": "#8f9c87"
    },
    {
      "id": "ella",
      "name": "Ella Moss",
      "role": "Community gardener",
      "description": "Organizes things on scraps of card and distrusts conversations held without tea.",
      "color": "#af94a5"
    },
    {
      "id": "tom",
      "name": "Tom Vale",
      "role": "Cycle courier",
      "description": "Checks a delivery seal before he checks the address.",
      "color": "#859ba3"
    }
  ],
  "clues": [
    {
      "id": "pa-cash",
      "title": "Cash and vouchers",
      "description": "The closing sheet records $146 cash and eight $5 seedling vouchers, which cannot be deposited at a bank."
    },
    {
      "id": "pa-sign",
      "title": "The complete sign",
      "description": "The full sign says “$186 raised: cash and garden support.” Its total includes noncash vouchers."
    },
    {
      "id": "pa-gap",
      "title": "The remaining cash difference",
      "description": "After vouchers are separated, the difference requiring explanation is $40 cash, not $80."
    },
    {
      "id": "pa-advance",
      "title": "An authorized advance",
      "description": "Record R-14 authorizes a $40 repayment to Ella for a canceled water-barrel advance."
    },
    {
      "id": "pa-receipt",
      "title": "The recipient’s acknowledgment",
      "description": "Ella signed R-14 for $40 cash, returning her canceled advance before the deposit envelope was sealed."
    },
    {
      "id": "pa-balanced",
      "title": "The reconciled ledger",
      "description": "The supported cash equation is $146 received − $40 authorized reimbursement = $106 deposited; vouchers add $40 of garden support."
    },
    {
      "id": "pa-public",
      "title": "A publishable reference",
      "description": "R-14 is a public garden expenditure reference; private details are unnecessary to explain the reconciliation."
    },
    {
      "id": "pc-seal",
      "title": "The continuous seal",
      "description": "Collection and bank-arrival photographs show the same unbroken signed seal and blue ink spot."
    },
    {
      "id": "pc-count",
      "title": "The preparation count",
      "description": "The cafe preparation image and bank count both show $106 before and after transport."
    },
    {
      "id": "pc-vouchers",
      "title": "Eight restricted vouchers",
      "description": "The shop issued eight $5 seedling vouchers for the fundraiser; they were garden support rather than bankable cash."
    },
    {
      "id": "pc-stub",
      "title": "The reimbursement stub",
      "description": "Ella’s stub identifies a $40 return of a canceled barrel advance at 8:40, reference R-14."
    },
    {
      "id": "pc-sheet",
      "title": "The countersigned cash tray sheet",
      "description": "At 8:45 the cash tray record lists $146 received and $40 reimbursed under R-14, with June’s countersignature."
    },
    {
      "id": "pc-chain",
      "title": "The physical chain reconciles",
      "description": "The earlier reimbursement explains $146 becoming $106; the sealed $106 then reaches the bank unchanged."
    },
    {
      "id": "pc-safe",
      "title": "A summary can protect private records",
      "description": "The amount, times, and public reference R-14 can be cited without publishing addresses, signatures, or raw collection photographs."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "An envelope and a total",
      "location": "Paper Moon Cafe",
      "body": [
        "The cafe is quiet except for the machine cooling behind the counter. Paper moons from last night’s fundraiser still turn over the windows. Mara has kept the bank envelope exactly as the teller returned it: the deposit slip says $106, while the hand-lettered sign beside the till announces $186 raised. Nobody has accused anyone, but a photograph of the sign has already reached the neighborhood message board. Mara asks you to find the explanation before a difference in two numbers becomes a story about a dishonest volunteer. She gives you permission to inspect the fundraiser papers and contact the people who handled deliveries."
      ],
      "meets": [
        "mara"
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
      "title": "What the sign actually promised",
      "location": "The corner table",
      "body": [
        "June spreads the surviving papers across a clean table. The sign was written at closing, after customers had gone; the bank envelope was sealed earlier. She cannot remember which sheet supplied the total. The fundraiser sold tea, accepted gifts, and collected support for the new community garden. Those categories were added on separate pieces of paper. Mara insists on two rules: no private customer addresses should be posted, and nobody should be named merely because they were the last person seen beside the money. June agrees to let you copy figures while leaving the original sheets in their order."
      ],
      "meets": [
        "june"
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
      "title": "Two trails out of the cafe",
      "location": "The front door",
      "body": [
        "The bank’s collection courier is leaving town at noon. Meanwhile June can give you an hour with the accounts before her class begins. You can stay with the receipts and reconstruct the arithmetic, or take the courier’s route and establish what physically left the cafe. The first approach leads through the cafe’s records and a community-office appointment; the second follows the parcel seals, market stall, and gardener’s workshop. Either can settle the matter, but the afternoon appointments mean you will not combine both investigations on this visit. Choose the trail whose kind of evidence you want to test."
      ],
      "meets": [],
      "choices": [
        {
          "id": "accounts",
          "label": "Reconstruct the fundraiser accounts",
          "to": "accounts-0",
          "excludesFlags": [
            "courier"
          ]
        },
        {
          "id": "courier",
          "label": "Follow the sealed envelope’s journey",
          "to": "courier-0",
          "excludesFlags": [
            "accounts"
          ]
        }
      ]
    },
    "accounts-0": {
      "title": "Rows that are not the same thing",
      "location": "The cafe accounts table",
      "body": [
        "June’s closing sheet has two columns: cash received and support pledged. Under cash she has written six identical tea purchases, four larger contributions, and a small handful of coins. The entries have individual till references, so the column is not an estimate. It totals $146. A second column contains eight paper garden vouchers, each marked “five dollars of support.” The vouchers were donated by a neighboring shop and can only be redeemed for seedlings; they were never exchanged for cash at the cafe. June circles the column headings rather than the totals. The wording matters more than the color of the ink."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "setFlags": [
        "accounts"
      ],
      "clues": [
        "pa-cash"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "accounts-1",
          "requires": []
        }
      ]
    },
    "accounts-1": {
      "title": "The photograph has an edge",
      "location": "Mara’s office",
      "body": [
        "Mara finds the photograph used for the neighborhood announcement. The visible sign says “$186 raised,” but the lower line is hidden behind a folded paper moon. In the uncropped photograph, the line reads “cash and garden support.” The sign was not a statement that $186 in notes went to the bank. June’s separate cash total still exceeds the deposit, however. Mara asks you to resist solving only half the discrepancy. An explanation that accounts for the vouchers but leaves forty actual dollars untraced is useful progress, not a completed case."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "clues": [
        "pa-sign"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "accounts-2",
          "requires": [
            "pa-cash",
            "pa-sign"
          ]
        }
      ]
    },
    "accounts-2": {
      "title": "The first reconciliation",
      "location": "The corner table",
      "body": [
        "Set the two documents side by side. The public sign counts two kinds of benefit to the garden; the bank accepts only one of them. You are not being asked to decide whether the sign was attractive or whether June seemed nervous. Establish the amount of actual cash that existed before anyone made a payment or sealed an envelope. When figures have different meanings, subtracting one from the other without naming the categories creates a second mystery rather than solving the first."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "puzzle": {
        "prompt": "How much actual cash existed before the reimbursement?",
        "options": [
          {
            "id": "cash146",
            "label": "$146; the remaining $40 of the sign’s total was restricted vouchers.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "cash186",
            "label": "$186, because every kind of support must have entered the envelope.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "cash106",
            "label": "$106, because a bank deposit proves the event’s original receipts.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "cash40",
            "label": "$40, because the vouchers were printed with a dollar value.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "accounts-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "accounts-0"
        }
      ]
    },
    "accounts-3": {
      "title": "One difference remains",
      "location": "The accounts table",
      "body": [
        "June makes a fresh reconciliation sheet and signs only the facts established so far. The event brought in $146 cash plus $40 of restricted vouchers. The bank received $106. Forty dollars of cash therefore still need an explanation. She has not moved the original closing sheet, and you notice a small transfer symbol beside its cash column: a square with one side open. In the cafe’s ordinary accounts that mark means a payment was supported by another document. The document is not in the fundraiser folder. Mara remembers taking an urgent call from the community office before the envelope was sealed."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "clues": [
        "pa-gap"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "accounts-4",
          "requires": []
        }
      ]
    },
    "accounts-4": {
      "title": "A payment without a recipient",
      "location": "The community office",
      "body": [
        "At the community office, the clerk will show you the garden’s public expenditure book. A canceled supply order appears on the fundraiser date: forty dollars advanced by Ella for a replacement water barrel. The original order was withdrawn when the donated barrel arrived. The entry authorizes repayment of the advance, but an authorization does not establish that money changed hands. The clerk lets you compare serial numbers. The cafe’s transfer mark points to reimbursement record R-14; the expenditure book lists the same reference. You now need the recipient’s acknowledgment, not a second account of the authorization."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "clues": [
        "pa-advance"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "accounts-5",
          "requires": []
        }
      ]
    },
    "accounts-5": {
      "title": "A signature at the back",
      "location": "The office document drawer",
      "body": [
        "The clerk checks the back of the carbon-copy book rather than the loose papers. There is a receipt bearing Ella’s signature and the fundraiser date, time-stamped twenty minutes before the envelope was sealed. Its amount is forty dollars, reference R-14, with the words “advance returned in cash.” June’s copy was never put in the cafe folder because the carbon had stuck to the next page. The signature resembles earlier public receipts, but the useful point is the complete match of amount, reference, purpose, and date. Keep those separate pieces together when you test the payment."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "clues": [
        "pa-receipt"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "accounts-6",
          "requires": [
            "pa-advance",
            "pa-receipt"
          ]
        }
      ]
    },
    "accounts-6": {
      "title": "Permission is not proof of payment",
      "location": "The community office desk",
      "body": [
        "Select the evidence that establishes an actual legitimate cash payment. Several things explain why someone might have wanted a refund; only the records that connect authorization to receipt establish what happened to the money. Do not use the volunteer’s anxiety, the popularity of the garden, or the courier’s appearance as accounting evidence. Your answer should contain the two independent halves of the reimbursement trail."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "puzzle": {
        "prompt": "Which two records together prove the legitimate cash reimbursement?",
        "options": [
          {
            "id": "authorization",
            "label": "R-14 authorizes repayment of the canceled advance.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "signed",
            "label": "Ella’s matching receipt acknowledges $40 cash before sealing.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "nervous",
            "label": "June seemed worried when the discrepancy was mentioned.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "photo",
            "label": "The original photograph received many approving comments.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "accounts-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "accounts-4"
        }
      ]
    },
    "accounts-7": {
      "title": "A balanced page",
      "location": "The cafe accounts table",
      "body": [
        "June writes the completed cash line: $146 received, $40 reimbursement paid, $106 deposited. She adds a separate line for the eight donated seedling vouchers. All values now have a category and a supporting reference. Mara could simply replace the public photograph, but that would leave the neighborhood wondering why the original post vanished. The better question is how to correct the record while preserving what was true: the garden really did receive $186 in combined benefit, and the cash really was accounted for. An honest correction should narrow the misunderstanding without publishing private details."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "clues": [
        "pa-balanced"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "accounts-8",
          "requires": []
        }
      ]
    },
    "accounts-8": {
      "title": "What belongs on the noticeboard",
      "location": "The cafe window",
      "body": [
        "Ella arrives to collect a tray of donated cups. She is willing to confirm receiving her advance back, but asks that her household finances stay out of the public explanation. The expenditure reference is already part of the garden’s public accounts, so Mara can cite it without discussing why Ella had made the advance. June drafts three possible corrections. One admits a theft that never occurred; another pretends the sign was wrong in every respect; the third distinguishes cash, vouchers, and an authorized reimbursement. Decide which conclusion follows from the records rather than from the loudest version of the rumor."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "clues": [
        "pa-public"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "accounts-9",
          "requires": [
            "pa-balanced",
            "pa-public"
          ]
        }
      ]
    },
    "accounts-9": {
      "title": "Your explanation to the neighborhood",
      "location": "The cafe window",
      "body": [
        "Mara gives you the clean side of a paper moon for the new notice. You have not merely found a number that adds up. You have established what the sign counted, how much cash existed, and why the bank received less. Choose an explanation that could be checked by another person from the same records. The aim is not to sound certain; it is to say exactly what the evidence permits and no more."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "puzzle": {
        "prompt": "Which public explanation is supported by the complete trail?",
        "options": [
          {
            "id": "reconciled",
            "label": "Separate $146 cash and $40 vouchers; cite the $40 reimbursement and $106 deposit.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "theft",
            "label": "Report that the courier stole $80 and returned half.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "false-sign",
            "label": "Say the whole $186 total was invented and discard every receipt.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "private",
            "label": "Publish Ella’s private circumstances as the explanation for the fundraiser.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "accounts-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "accounts-7"
        }
      ]
    },
    "accounts-10": {
      "title": "The corrected account",
      "location": "Paper Moon Cafe",
      "body": [
        "Mara posts the revised notice beside the original, leaving both dates visible. June attaches the public account references, and the neighborhood message board receives the same plain explanation. The missing money was a confusion of categories and a reimbursement whose receipt had been filed badly. The volunteers are not asked to pose for a victory photograph. Instead, the next fundraiser begins with a cash column, a noncash column, and a folder for signed repayments. You chose an audit, and the case ends with an account another reader can reproduce."
      ],
      "routeLabel": "Reconstruct the fundraiser accounts",
      "meets": [],
      "ending": {
        "title": "Solved through the accounts",
        "kind": "solved",
        "body": [
          "The garden keeps the full benefit of the fundraiser, and the cafe keeps a paper trail worth trusting. Your route established the truth through independent records rather than through suspicion."
        ]
      }
    },
    "courier-0": {
      "title": "A seal with two signatures",
      "location": "The courier depot",
      "body": [
        "Tom meets you beside racks of undelivered parcels. He remembers the cafe envelope because Mara and June signed across its paper seal. His collection photograph shows both signatures crossing the flap without a break. The bank’s arrival photograph shows the same fibers, signatures, and small blue ink spot. Tom will not let you infer the contents merely from the outside, but the seal gives you a narrower question: if the amount inside was lower than the sign suggested, did that difference arise before collection? You copy the collection and arrival times without assuming the courier knows the fundraiser’s accounting."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [
        "tom"
      ],
      "setFlags": [
        "courier"
      ],
      "clues": [
        "pc-seal"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "courier-1",
          "requires": []
        }
      ]
    },
    "courier-1": {
      "title": "What the bank counted",
      "location": "The bank collection desk",
      "body": [
        "The bank clerk checks the envelope log. It was counted under the overhead camera, which recorded five twenty-dollar notes, one five, and a one-dollar note: $106. No coins or paper vouchers were enclosed. Mara’s preparation photograph, sent to Tom with the pickup request, shows the same six larger notes and the same small note laid out before sealing. You cannot read every denomination from Tom’s phone, so the clerk compares the original attachment at full size. The count matches. Neither photograph explains why the cafe kept other money aside, but the physical journey no longer contains an unexplained loss."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "clues": [
        "pc-count"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "courier-2",
          "requires": [
            "pc-seal",
            "pc-count"
          ]
        }
      ]
    },
    "courier-2": {
      "title": "Locate the moment of the difference",
      "location": "The depot waiting bench",
      "body": [
        "You have evidence from both ends of the journey. A courier could in principle be dishonest, but a plausible accusation must explain the actual seal and preparation image. Ask what these records establish, not what they fail to establish. They can locate the discrepancy in time; they cannot yet explain the fundraiser categories or justify any earlier payment. Choose the strongest conclusion that stays inside those limits."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "puzzle": {
        "prompt": "What do the seal and matched counts establish?",
        "options": [
          {
            "id": "before",
            "label": "The bank received the prepared $106; the unexplained difference arose before sealing.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "never",
            "label": "The courier has never mishandled any delivery in his life.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "cash186",
            "label": "The fundraiser must have received only $106 of total support.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "ella",
            "label": "Ella’s garden packet must have contained the missing banknotes.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "courier-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "courier-0"
        }
      ]
    },
    "courier-3": {
      "title": "Before the envelope closed",
      "location": "The market lane",
      "body": [
        "With transport excluded, Tom remembers a stop that suddenly matters. While he waited outside the cafe, Ella carried away a narrow garden-shop packet. He did not see money handed over and will not pretend he did. The packet bore the same fundraiser moon stamp as the donation materials. At the market, a stallholder explains that the shop had supplied eight vouchers worth five dollars each. Their use was restricted to seedlings; they were not money owed to the bank. This independently explains part of the difference without treating a witness’s uncertain memory as a transaction record."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "clues": [
        "pc-vouchers"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "courier-4",
          "requires": []
        }
      ]
    },
    "courier-4": {
      "title": "The order that never arrived",
      "location": "The gardener’s workshop",
      "body": [
        "Ella lets you into the workshop after she finishes watering. A new donated barrel stands beside a canceled order for another one. Before the donation was confirmed, she had advanced forty dollars for the original order. Its invoice says the order was canceled and the advance returned through fundraiser reimbursement R-14. She can show the cafe’s receipt stub, but you ask for corroboration rather than accepting an explanation because it sounds reasonable. The stub gives a precise time: 8:40, twenty minutes before Tom’s collection photograph. A delivery volunteer may be able to place that exchange without describing any private conversation."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [
        "ella"
      ],
      "clues": [
        "pc-stub"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "courier-5",
          "requires": []
        }
      ]
    },
    "courier-5": {
      "title": "A witness who knows their limits",
      "location": "The garden tool shed",
      "body": [
        "The delivery volunteer remembers collecting the empty cash tray at 8:45. Her sign-out sheet lists $146 received in cash and a separate $40 reimbursement paid, countersigned by June. It does not list the vouchers as cash. The volunteer confirms seeing Ella acknowledge the repayment but cannot say what was in the later bank envelope. That limit is helpful: her record concerns the transaction before sealing, while the photographs concern the subsequent journey. You have two independent chains that meet at the same amount. Choose the pair that establishes the earlier payment, rather than mixing attractive but irrelevant details."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "clues": [
        "pc-sheet"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "courier-6",
          "requires": [
            "pc-stub",
            "pc-sheet"
          ]
        }
      ]
    },
    "courier-6": {
      "title": "Join the two chains",
      "location": "The tool shed bench",
      "body": [
        "Build the explanation from a documented earlier transaction and a documented later envelope. The voucher issue clarifies the public total, but the remaining cash difference needs evidence of a payment. A signed acknowledgment and a countersigned tray sheet are stronger together than two retellings of the same rumor. Your deduction should account for the forty dollars before the transport chain begins."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations establish the earlier legitimate payment?",
        "options": [
          {
            "id": "stub",
            "label": "Ella’s R-14 stub acknowledges the forty-dollar repayment before collection.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "tray",
            "label": "The independently countersigned tray sheet records the same payment.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "packet",
            "label": "A witness remembers a narrow packet without seeing its contents.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "moon",
            "label": "The cafe used a blue moon stamp on its publicity materials.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "courier-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "courier-4"
        }
      ]
    },
    "courier-7": {
      "title": "The amount has a history",
      "location": "The market lane",
      "body": [
        "You write the amounts in order on the back of Tom’s route card: $146 received as cash; $40 paid back on a canceled advance; $106 prepared and sealed; $106 counted by the bank. The eight vouchers explain why the public benefit was advertised as $186 rather than the cash-only $146. None of these statements needs a guess about a person’s character. Tom asks whether he should post his collection photographs to defend himself. They contain an address and two signatures. You can settle the transport question without releasing images that could be reused for another purpose."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "clues": [
        "pc-chain"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "courier-8",
          "requires": []
        }
      ]
    },
    "courier-8": {
      "title": "A useful correction, not a spectacle",
      "location": "The cafe doorway",
      "body": [
        "Mara meets you with the original sign still in the window. You explain that following the envelope has produced a different kind of resolution from a desk audit: the witnesses and timed images establish its uninterrupted journey, while Ella’s stub and the tray sheet establish the earlier reimbursement. The cafe can publish the amounts and document references. The raw photographs can remain with the people entitled to see them. June asks for a short wording that clears the volunteers without overstating what any single witness observed. A good statement should distinguish each stage of the chain."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "clues": [
        "pc-safe"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "courier-9",
          "requires": [
            "pc-chain",
            "pc-safe"
          ]
        }
      ]
    },
    "courier-9": {
      "title": "Close the journey",
      "location": "Paper Moon Cafe",
      "body": [
        "Choose what the evidence permits you to say about the envelope. A broken chain would have required further investigation. Here the preparation and arrival records agree, and the earlier payment has its own support. Your route has not proved that couriers can never make mistakes; it has tested this particular delivery. The explanation should state where each part of the public total went and leave unsupported accusations out of the notice."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "puzzle": {
        "prompt": "How should the cafe close the delivery question?",
        "options": [
          {
            "id": "summary",
            "label": "State that $106 traveled intact; explain vouchers and the earlier reimbursement using references.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "photos",
            "label": "Publish every address and signature from the collection images.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "unknown",
            "label": "Keep accusing the courier because the sign has a larger number.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "allcash",
            "label": "Describe the forty dollars of vouchers as notes that the bank misplaced.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "courier-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "courier-7"
        }
      ]
    },
    "courier-10": {
      "title": "A delivery receipt put away",
      "location": "The cafe window",
      "body": [
        "Mara writes that the bank envelope arrived intact with the amount prepared, and that the difference from the fundraiser sign consists of restricted vouchers and an authorized repayment. Tom keeps the collection originals in the depot’s ordinary retention system. Ella confirms the public reference without describing her finances. The cafe pins up a corrected summary instead of a collage of private photographs. You followed a package through streets and workshops, and the investigation ends by restoring the chain of trust along that route."
      ],
      "routeLabel": "Follow the sealed envelope’s journey",
      "meets": [],
      "ending": {
        "title": "Solved by following the envelope",
        "kind": "solved",
        "body": [
          "The discrepancy was resolved through a physical chain of custody, a market record, and a witnessed repayment. The same truth emerged through a different route, without exposing private documents."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "accounts-complete",
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
          "id": "accounts"
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
          "id": "cash146"
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
            "authorization",
            "signed"
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
          "id": "reconciled"
        }
      ]
    },
    {
      "id": "courier-complete",
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
          "id": "courier"
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
          "id": "before"
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
            "stub",
            "tray"
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
          "id": "summary"
        }
      ]
    }
  ]
};
