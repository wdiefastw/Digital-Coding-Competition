/** Original case; answer keys and route proofs are never projected into the reading interface. */
export default {
  "id": "saffron-market",
  "title": "The Saffron Seal",
  "genre": "Detective mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "An old covered market before the harvest supper",
  "description": "A prized spice shipment carries the right name and the wrong contents. Follow the weighed consignments or the maker’s marks to discover where the promise changed.",
  "revision": 2,
  "flags": [
    "weights",
    "printing"
  ],
  "characters": [
    {
      "id": "noor",
      "name": "Noor Sen",
      "role": "Market coordinator",
      "description": "Keeps disputes away from customers until there is evidence worth showing them.",
      "color": "#b18b67"
    },
    {
      "id": "tali",
      "name": "Tali Dar",
      "role": "Spice grower",
      "description": "Records harvest lots by field and drying rack, never by a customer’s reputation.",
      "color": "#ad8c9f"
    },
    {
      "id": "dev",
      "name": "Dev Hall",
      "role": "Public weighmaster",
      "description": "Will explain a scale’s limits before reading its dial.",
      "color": "#8d9e91"
    },
    {
      "id": "rafi",
      "name": "Rafi Moss",
      "role": "Packaging printer",
      "description": "Keeps rejected printing proofs because small mistakes have long memories.",
      "color": "#8b9eac"
    },
    {
      "id": "mira",
      "name": "Mira Lane",
      "role": "Market carrier",
      "description": "Knows which loading doors were open and which claims were merely shouted across a lane.",
      "color": "#ac9d78"
    }
  ],
  "clues": [
    {
      "id": "sfw-dispatch",
      "title": "The received gross weight",
      "description": "Twelve 30 g full tins plus a 200 g crate should weigh 560 g; both grower and broker-receiving tickets record 560 g."
    },
    {
      "id": "sfw-jars",
      "title": "The outgoing contents calculation",
      "description": "The measured 300 g jars include 180 g of empty glass, leaving 120 g contents; the advertised twelve 20 g portions would require 240 g."
    },
    {
      "id": "sfw-window",
      "title": "The broker’s handling window",
      "description": "The intact crate, empty jars, and display-only cellulose were logged into the broker’s secured cage before the 300 g jars left."
    },
    {
      "id": "sfw-reserve",
      "title": "The retained half and sales instruction",
      "description": "The broker declares 120 g authentic S-14 in reserve and instructs his account to retain half while maintaining the full portion claim."
    },
    {
      "id": "sfw-code",
      "title": "The disputed jars’ account link",
      "description": "Jar code B-27 matches the broker’s outgoing ticket and account containing the retain-half/full-portion instruction."
    },
    {
      "id": "sfw-remedy",
      "title": "A bounded enforcement basis",
      "description": "B-27’s recorded contents and sales instruction support a false-quantity finding and targeted hold; composition remains for professional testing."
    },
    {
      "id": "sfw-alternative",
      "title": "A traceable alternative exists",
      "description": "The committee can use separately sealed, traceable stock; the disputed jars do not need to be consumed to investigate them."
    },
    {
      "id": "sfp-proof",
      "title": "The registered and rejected designs",
      "description": "The genuine numbered seal has six petals and an open circle; the jar strips match a five-petal, closed-circle display proof."
    },
    {
      "id": "sfp-numbers",
      "title": "One number copied twelve times",
      "description": "The original seals had twelve distinct numbers; all twelve disputed jar strips repeat S14-01 and lack authorized replacement entries."
    },
    {
      "id": "sfp-die",
      "title": "The broker’s limited die loan",
      "description": "After Tali dispatched the genuine seals, the broker borrowed the rejected die under a signed display-only restriction."
    },
    {
      "id": "sfp-ticket",
      "title": "The closure-strip print run",
      "description": "B-27 ordered twelve strips matching the disputed design and repeated number, delivered to the broker’s cage."
    },
    {
      "id": "sfp-approval",
      "title": "The approved use contradicts the restriction",
      "description": "The broker approved using the display-only strips on repacked jars while retaining grower-certified wording."
    },
    {
      "id": "sfp-finding",
      "title": "The certification chain is broken",
      "description": "Registered proof, numbering, die restriction, print delivery, and broker approval together establish unsupported certification of B-27."
    },
    {
      "id": "sfp-public",
      "title": "A precise notice is possible",
      "description": "A notice can name B-27 and unsupported grower certification without claiming untested toxicity or condemning authentic numbered tins."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The jar nobody will open",
      "location": "The covered market",
      "body": [
        "Noor has set aside a shipment sold as Tali’s premium saffron. Its sealed display jar contains short red fibers unlike the long intact threads in Tali’s reference sample. Nobody will taste it to settle a dispute. The seller is an independent broker using the market’s consignment service, and the harvest supper begins tonight. Noor needs evidence strong enough to isolate the disputed stock without discrediting every spice seller under the roof. You may follow the market’s weight records or the origin of the printed seals. Each route can establish what changed and where responsibility belongs."
      ],
      "meets": [
        "noor"
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
      "title": "A seal is a claim",
      "location": "The market office",
      "body": [
        "Tali’s dispatch form identifies lot S-14, twelve sealed tins, each with twenty grams of contents and a ten-gram empty-tin weight. Her seal is a numbered paper strip, not merely a printed flower. The broker received the closed crate yesterday morning and delivered a different set of display jars this afternoon. This does not prove a swap; repacking can be legitimate if the source lot and weights remain traceable. Noor gives you copies of both delivery forms. The broker’s own sales pitch is not independent certification, however confidently it repeats the grower’s name."
      ],
      "meets": [
        "tali"
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
      "title": "Two traces through the market",
      "location": "The loading arch",
      "body": [
        "Dev can take you through the public weighing stations while their signed tickets are available. Rafi is closing his print workshop and can instead show how original and copied seals differ. The weight route leads through loading cages, scales, and a broker’s inventory reconciliation. The print route follows paper, die marks, and delivery times to the workshop where the claim was reproduced. Choose one complete chain. Your conclusion will name the supported handling point and remedy rather than treating an unfamiliar-looking fiber as enough to accuse a particular person."
      ],
      "meets": [],
      "choices": [
        {
          "id": "weights",
          "label": "Audit the consignment weights",
          "to": "weights-0",
          "excludesFlags": [
            "printing"
          ]
        },
        {
          "id": "printing",
          "label": "Trace the origin of the seals",
          "to": "printing-0",
          "excludesFlags": [
            "weights"
          ]
        }
      ]
    },
    "weights-0": {
      "title": "What a full crate should weigh",
      "location": "The public scale",
      "body": [
        "Dev lays out the dispatch specification. Twelve tins at twenty grams of contents plus ten grams of tin weigh 360 grams before the crate. The empty crate is 200 grams, giving a sealed dispatch weight of 560 grams. The grower’s weigh ticket reads 560, and the receiving ticket signed at the broker’s cage also reads 560. Both scales have current check certificates. These figures support continuity of gross weight at receipt, not proof that no later change could occur. A false conclusion would treat the same number as an invisible guarantee extending beyond the time it was measured."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [
        "dev"
      ],
      "setFlags": [
        "weights"
      ],
      "clues": [
        "sfw-dispatch"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "weights-1",
          "requires": []
        }
      ]
    },
    "weights-1": {
      "title": "A lighter outgoing package",
      "location": "The broker’s loading cage",
      "body": [
        "The broker’s outgoing form lists twelve jars with a combined gross weight of 300 grams. Their empty weights total 180 grams, as confirmed by the jar supplier’s specification. The broker advertises that every jar still contains the original twenty grams. That claim would require 240 grams of contents plus 180 grams of glass, or 420 grams total. The form’s own 300 grams therefore cannot support it. You copy the actual measured figure and the independent empty-weight specification before considering the fibers’ color. Arithmetic can expose a claim’s inconsistency without identifying the substitute material."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "clues": [
        "sfw-jars"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "weights-2",
          "requires": [
            "sfw-dispatch",
            "sfw-jars"
          ]
        }
      ]
    },
    "weights-2": {
      "title": "Test the amount, not the advertisement",
      "location": "The weighmaster’s desk",
      "body": [
        "Use the measured outgoing total and the independently specified empty jars. The broker’s printed portion size is the claim being tested, so it cannot be substituted for a measurement. Choose the conclusion that accounts for the entire package rather than comparing the outgoing glass jars directly with incoming metal tins. Different containers are the reason the empty weights matter."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "puzzle": {
        "prompt": "What does the outgoing package actually contain by weight?",
        "options": [
          {
            "id": "half",
            "label": "120 g total contents, half the advertised 240 g.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "full",
            "label": "240 g because twelve labels each promise 20 g.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "all",
            "label": "300 g contents because the jars weigh 300 g altogether.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "none",
            "label": "No contents, because the incoming metal package was heavier.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "weights-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "weights-0"
        }
      ]
    },
    "weights-3": {
      "title": "The period between two tickets",
      "location": "The loading log shelf",
      "body": [
        "Mira’s loading ledger places the closed 560 gram crate in the broker’s secured cage at 9:10. At 9:30 the broker signed for twelve empty display jars and a separate bag labeled “dyed cellulose, display use only.” At 10:15 the 300 gram jars left the cage under his consignment number. The ledger proves these items entered his control, not that every strand in a jar came from that bag. It does establish a handling window and an available nonfood material that need investigation. Mira’s statement carefully distinguishes what she carried from what she did not see inside the cage."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [
        "mira"
      ],
      "clues": [
        "sfw-window"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "weights-4",
          "requires": []
        }
      ]
    },
    "weights-4": {
      "title": "A reserve that should not remain",
      "location": "The inventory counter",
      "body": [
        "The broker’s end-of-day inventory declares 120 grams of lot S-14 still held in reserve. Tali’s lot began with 240 grams of spice, so that reserve matches exactly the 120 grams absent from the outgoing jars if no other use occurred. An attached instruction in the broker’s own account says “retain half authentic stock; maintain full portion statement.” Noor obtains it from the sales-platform record through the market’s dispute process. The wording is more specific than an innocent container change. You still need to connect the disputed jars to that account rather than assume every red product at the stall is part of the same transaction."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "clues": [
        "sfw-reserve"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "weights-5",
          "requires": []
        }
      ]
    },
    "weights-5": {
      "title": "The number beneath the label",
      "location": "The delivery table",
      "body": [
        "Each disputed jar carries consignment code B-27 under its decorative sleeve. Mira’s outgoing ticket and the broker’s sales account both name B-27. Tali’s original paper seals instead used S-14 with consecutive individual numbers; none remains intact across the jar closures. The matching broker code supplies the item-level link, while the altered sales instruction supplies intent concerning the portion claim. You do not need to know the exact composition of the substitute fibers before withdrawing the unsupported food claim. Noor can hold the stock for professional testing under the same documented reference."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "clues": [
        "sfw-code"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "weights-6",
          "requires": [
            "sfw-reserve",
            "sfw-code"
          ]
        }
      ]
    },
    "weights-6": {
      "title": "Link handling to the false promise",
      "location": "The market dispute desk",
      "body": [
        "Select the two observations that connect these specific jars to a knowingly unsupported portion statement. The broker’s unfamiliar manner is irrelevant. A package of display fiber is grounds for further testing, not automatic proof of its contents. The strongest combination is an item-level code link and the recorded instruction about quantities. Together they let the market act precisely without making a chemical claim it has not tested."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations link these jars to a knowingly false quantity statement?",
        "options": [
          {
            "id": "code",
            "label": "Their B-27 codes match the broker’s outgoing ticket and account.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "instruction",
            "label": "That account explicitly says to retain half but keep the full portion statement.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "manner",
            "label": "The broker did not seem friendly to a passing customer.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "fiber",
            "label": "A carried bag’s label alone proves the chemical identity of every strand.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "weights-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "weights-4"
        }
      ]
    },
    "weights-7": {
      "title": "A remedy narrower than a rumor",
      "location": "The market office",
      "body": [
        "Noor isolates B-27 and suspends its full-portion and grower-certified descriptions pending testing. Tali’s separately sealed tins remain on sale under their own verified records. The broker must account for the 120 gram reserve and refund the quantity he promised but did not supply. Professional testing will decide the contents and any wider food-safety response. Your investigation already establishes a false quantity statement and a broken certification chain. Those findings are enough to stop this sale without saying that every vendor’s saffron is suspect."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "clues": [
        "sfw-remedy"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "weights-8",
          "requires": []
        }
      ]
    },
    "weights-8": {
      "title": "The supper committee’s question",
      "location": "The cafe beside the market",
      "body": [
        "The supper committee asks whether to use the disputed jars if their color looks convincing when cooked. Noor says the market is not conducting a tasting experiment. You can recommend separately traceable sealed stock or a different menu. The committee has both options. The case has grown from a striking visual difference into a documented trade claim, and the final recommendation must reflect that stronger evidence rather than sliding back toward judging spice by its color alone."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "clues": [
        "sfw-alternative"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "weights-9",
          "requires": [
            "sfw-remedy",
            "sfw-alternative"
          ]
        }
      ]
    },
    "weights-9": {
      "title": "State the supported finding",
      "location": "The market office",
      "body": [
        "Choose a finding that distinguishes what the weights and account prove from what still requires testing. The quantity calculation is exact. The code connects the jars to the broker’s recorded instruction. The identity of every fiber is not established by a loading label or an observer’s guess. A defensible case can be decisive about one wrong while remaining careful about another question."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "puzzle": {
        "prompt": "Which market finding is justified now?",
        "options": [
          {
            "id": "bounded",
            "label": "Hold B-27 and act on its documented false quantity; test composition independently.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "all",
            "label": "Declare every spice seller dishonest.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "taste",
            "label": "Ask buyers to taste the disputed fibers as a test.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "chemistry",
            "label": "Name the precise substitute chemical without analysis.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "weights-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "weights-7"
        }
      ]
    },
    "weights-10": {
      "title": "The market keeps its own measure",
      "location": "The loading arch",
      "body": [
        "The market records a targeted false-quantity finding against consignment B-27, refunds the affected buyers, and preserves samples for independent testing. Tali’s authenticated tins retain their separate identity. The supper uses replacement stock from a traceable lot. You solved the case through weights, inventory, and an account instruction: the promise was changed after the intact shipment entered the broker’s control. Noor posts the specific finding instead of a general warning that would punish everyone selling under the same roof."
      ],
      "routeLabel": "Audit the consignment weights",
      "meets": [],
      "ending": {
        "title": "Solved at the weighing stations",
        "kind": "solved",
        "body": [
          "The market acts on a proved quantity deception while preserving samples for the questions that need specialist testing. Your route separated a measured false promise from an untested suspicion."
        ]
      }
    },
    "printing-0": {
      "title": "A flower with a missing petal",
      "location": "The print workshop",
      "body": [
        "Rafi shows the grower’s registered seal proof. Its printed flower has six complete petals and a tiny open circle beneath the stem. The disputed jar strips have five petals and a closed circle. He supplies the workshop’s rejection book: an early demonstration die had exactly those two faults and was marked DISPLAY ONLY. A similar design does not automatically prove the same physical die was used, but the registered proof establishes that the jar strips are not faithful numbered grower seals. The individual dispatch numbers are absent as well."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [
        "rafi"
      ],
      "setFlags": [
        "printing"
      ],
      "clues": [
        "sfp-proof"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "printing-1",
          "requires": []
        }
      ]
    },
    "printing-1": {
      "title": "Numbers that should not repeat",
      "location": "The seal ledger",
      "body": [
        "Tali’s twelve dispatch strips were numbered S14-01 through S14-12. The market’s photo record shows every disputed jar using the same printed number S14-01 as part of its design. The strips were not recorded as replacements by the grower. Rafi explains that a seal number identifies a particular closure; repeating one number across twelve newly packed containers cannot preserve the twelve original closures. You can reject that certification claim without yet deciding who printed the copies or what was inside the jars. Keeping those questions separate prevents a counterfeit label from becoming an accusation without a chain."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "clues": [
        "sfp-numbers"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "printing-2",
          "requires": [
            "sfp-proof",
            "sfp-numbers"
          ]
        }
      ]
    },
    "printing-2": {
      "title": "What the strips can certify",
      "location": "The workshop desk",
      "body": [
        "Choose the strongest conclusion supported by the proof and numbering records. The decorative design may resemble the grower’s, but certification depends on the registered form and individual closure record. Your first deduction should say exactly which claim has failed, leaving the identity of the printer and the contents for later evidence. A misleading label is a useful beginning, not permission to guess the whole case."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "puzzle": {
        "prompt": "What do the design and number records establish now?",
        "options": [
          {
            "id": "uncertified",
            "label": "The repacked jars do not preserve the grower’s registered individual certification.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "toxic",
            "label": "The contents must be toxic because the flower has five petals.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "printer",
            "label": "Every counterfeit mark must have been personally printed by Rafi.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "genuine",
            "label": "A familiar grower name makes repeated seal numbers acceptable.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "printing-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "printing-0"
        }
      ]
    },
    "printing-3": {
      "title": "The demonstration die’s last loan",
      "location": "The workshop counter",
      "body": [
        "Rafi’s tool ledger records a loan of the rejected demonstration die to the broker at 4:10 yesterday, for a market display. The broker signed the return clause: it could print exhibition cards but not certify repacked goods. The genuine dispatch crate had already left Tali’s workshop at 2:00 with its individually numbered seals photographed. This sequence puts the original and copied marks in different documented chains. It does not require you to assume that the broker forged Tali’s own die; he had a rejected demonstration tool whose permitted use was explicitly limited."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "clues": [
        "sfp-die"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "printing-4",
          "requires": []
        }
      ]
    },
    "printing-4": {
      "title": "A print run with a delivery address",
      "location": "The paper supplier",
      "body": [
        "The paper supplier’s job ticket lists twelve closure strips ordered under the broker’s consignment account B-27. An attached proof photograph shows the same five-petal design and repeated S14-01 number found on the disputed jars. The ticket says “deliver to broker cage, not grower.” Mira’s delivery record acknowledges that sealed packet at 8:30 this morning. These records connect a particular print run to a particular account and destination. They are stronger than guessing that whoever owned a printer must have produced every misleading label in the market."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [
        "mira"
      ],
      "clues": [
        "sfp-ticket"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "printing-5",
          "requires": []
        }
      ]
    },
    "printing-5": {
      "title": "The instruction behind the proof",
      "location": "The market dispute office",
      "body": [
        "Through the market’s formal dispute process, Noor obtains the broker’s approval of the print proof. His message says “place these over the new jars; retain grower-certified wording.” The signed die-loan restriction is attached to the same job because Rafi had warned him that the design was for display use. The two records establish knowledge of the limit and a contrary sales instruction. They do not identify the substitute fibers, which still need testing. You can now build a precise case about false certification without borrowing authority from an unperformed chemical examination."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "clues": [
        "sfp-approval"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "printing-6",
          "requires": [
            "sfp-ticket",
            "sfp-approval"
          ]
        }
      ]
    },
    "printing-6": {
      "title": "A label’s route to responsibility",
      "location": "The dispute office desk",
      "body": [
        "Select the two observations that establish the broker’s knowing misuse of the marks. One identifies his limited authority to use the die; the other connects his approved instruction to the jar closures. The printer’s skill and the grower’s reputation are background, not the relevant contradiction. A fair finding follows the documented instruction rather than inferring intention solely from a flawed flower."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "puzzle": {
        "prompt": "Which two records establish knowing misuse by the broker?",
        "options": [
          {
            "id": "restriction",
            "label": "His signed die loan limits the rejected design to display use.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "approval",
            "label": "His matching approval orders those strips on jars with grower-certified wording.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "skill",
            "label": "Rafi is experienced at printing attractive flowers.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "fame",
            "label": "Tali’s spice has won a local award.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "printing-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "printing-4"
        }
      ]
    },
    "printing-7": {
      "title": "Certification withdrawn, evidence retained",
      "location": "The covered market",
      "body": [
        "Noor withdraws the grower-certified description from B-27 and secures the disputed jars for independent examination. Tali’s own intact numbered tins remain distinct. Rafi provides the rejected proof and loan original to the dispute file, while the public notice uses document references instead of private messages. The market can establish misuse of its certification chain even before the contents are chemically identified. Your route has located the misleading promise in a print order and an approved instruction, rather than in the weight calculation used by another possible investigation."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "clues": [
        "sfp-finding"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "printing-8",
          "requires": []
        }
      ]
    },
    "printing-8": {
      "title": "The limits of the public notice",
      "location": "The market noticeboard",
      "body": [
        "A draft notice calls the jars “poisoned fake saffron.” You cross out both unsupported words. The evidence proves that the grower’s certification was copied onto repacked goods without authority; it does not prove toxicity or the exact material. Another draft merely says “printing issue,” which understates the broker’s knowing instruction. The final notice needs to be accurate in both directions. Tali asks that buyers be told how to distinguish her intact numbered tins from the held consignment, so the remedy follows the same item-level separation as the investigation."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "clues": [
        "sfp-public"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "printing-9",
          "requires": [
            "sfp-finding",
            "sfp-public"
          ]
        }
      ]
    },
    "printing-9": {
      "title": "Choose the finding supported by the marks",
      "location": "The market office",
      "body": [
        "Select the conclusion established by your route. It should identify the false certification, connect responsibility through documents, and leave composition testing to the proper examination. A copied mark can support a serious finding without becoming evidence for every alarming phrase that might be attached to it. Your recommendation should also protect buyers from using the disputed stock while the remaining question is answered."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "puzzle": {
        "prompt": "Which finding and remedy follow from this route?",
        "options": [
          {
            "id": "precise",
            "label": "Record unauthorized certification of B-27, hold it and arrange testing, while separating genuine numbered tins.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "poison",
            "label": "Announce proven poison without testing.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "minor",
            "label": "Call the knowing certification instruction merely a harmless typographical error.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "all",
            "label": "Withdraw every seller’s stock because one consignment used copied marks.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "printing-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "printing-7"
        }
      ]
    },
    "printing-10": {
      "title": "The proper seal returned",
      "location": "The print workshop",
      "body": [
        "Rafi locks the rejected die in a drawer labeled for exhibition work, with a new rule requiring every display proof to remain visibly unnumbered. Noor records the broker’s unauthorized certification instruction and holds B-27 for testing and refunds. The supper buys traceable replacement stock. You solved the case through marks, numbering, and a print-order trail. The same consignment was responsible, but the route to a defensible finding traveled through a workshop and supplier rather than through the public scales."
      ],
      "routeLabel": "Trace the origin of the seals",
      "meets": [],
      "ending": {
        "title": "Solved through the copied marks",
        "kind": "solved",
        "body": [
          "You traced the misleading claim from a rejected die to a knowing approval. A specific documentary case replaces rumor, while the untested material remains safely out of the supper."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "weights-complete",
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
          "id": "weights"
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
          "id": "half"
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
            "code",
            "instruction"
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
          "id": "bounded"
        }
      ]
    },
    {
      "id": "printing-complete",
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
          "id": "printing"
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
          "id": "uncertified"
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
            "restriction",
            "approval"
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
          "id": "precise"
        }
      ]
    }
  ]
};
