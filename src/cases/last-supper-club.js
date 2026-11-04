/** A complete authored case. Preview metadata contains no solution. */
export default {
  "id": "last-supper-club",
  "title": "The Last Supper Club",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "Forty places are laid for a farewell benefit, but the report claims fifty-six paid guests. Follow the kitchen’s quantities or the journeys of the extra names before the account leaves the hall.",
  "setting": "A neighborhood supper club preparing what may be its final benefit dinner",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "ada",
      "name": "Ada Wren",
      "role": "Dinner organizer",
      "description": "Wants the club’s final benefit dinner to leave useful accounts rather than a reassuring speech.",
      "color": "#a28e7b"
    },
    {
      "id": "mina",
      "name": "Mina Cole",
      "role": "Club chef",
      "description": "Records ingredients and portions because a good meal should not depend on a guessed headcount.",
      "color": "#91a485"
    },
    {
      "id": "clive",
      "name": "Clive Hart",
      "role": "Club secretary",
      "description": "Prepared the benefit report and hopes it will help secure the hall’s next funding award.",
      "color": "#8d9ea9"
    },
    {
      "id": "elise",
      "name": "Elise Bell",
      "role": "Guest coordinator",
      "description": "Keeps invitation replies separate from tributes sent by families who cannot attend.",
      "color": "#ac8b9c"
    },
    {
      "id": "bram",
      "name": "Bram North",
      "role": "Local printer",
      "description": "Retains proof numbers so a customer can distinguish the file he supplied from the sheet that left the press.",
      "color": "#b19770"
    },
    {
      "id": "lida",
      "name": "Lida Vale",
      "role": "Donor liaison",
      "description": "Asks whose permission accompanies a personal story before agreeing to put it in a program.",
      "color": "#91a19b"
    }
  ],
  "clues": [
    {
      "id": "opening-2-evidence",
      "title": "A report not yet submitted",
      "description": "The draft claims 56 paid places while 40 settings are laid. Ada has paused submission. Headcounts, pledges, tributes, and cleared money must be distinguished before the discrepancy can be interpreted."
    },
    {
      "id": "a01-evidence",
      "title": "The kitchen quantity chain",
      "description": "40 guests×2 portions×3 ouncesrequires 240 ounces. The 270-ounce batch included a separately labeled and signed 30-ounce staff allocation, leaving 240 for benefit tables."
    },
    {
      "id": "a02-evidence",
      "title": "An independently checked headcount",
      "description": "40 numbered admission stubs match 40 paid twelve-coin tickets and the single-sitting booking. Sixteen tribute cards have names but no admission numbers or receipts; their purpose remains separate."
    },
    {
      "id": "a03-evidence",
      "title": "The matching pledge amount",
      "description": "40 paid tickets imply 480 coins;56 would imply 672,a difference of 192. A192-coin pledge exists but is payable next month. Ingredient costs are 220 and belong in a different column from gross income."
    },
    {
      "id": "a05-evidence",
      "title": "The grant’s receipt rule",
      "description": "Paid receipts must be cleared by the report date. The 192-coin pledge is conditional and payable later; the form provides a separate pledge line. Entering it as paid places changes the grant-matching basis."
    },
    {
      "id": "a06-evidence",
      "title": "The cleared benefit amount",
      "description": "The specified club account and reporting period show 480 coins from the ticket batch and no 192-coin receipt. An earlier grant advance is excluded from new income by the form’s rule. The pledge remains a future condition, not cleared funds."
    },
    {
      "id": "a07-evidence",
      "title": "A documented revision difference",
      "description": "Bram’s delivered proof separates 40 paid places and the conditional pledge. The later export changes it to 56 paid places, under the revision signed out by Clive. Version references distinguish the supplier’s proof from the pending submission."
    },
    {
      "id": "a09-evidence",
      "title": "The acknowledged reclassification",
      "description": "Clive acknowledges moving an unpaid conditional pledge into paid places to enlarge the matching basis. Ada’s submission pause means the wrong export has not yet been sent. The error concerns reporting, not unserved meals or a kitchen deficit."
    },
    {
      "id": "a10-evidence",
      "title": "A source-linked correction",
      "description": "The corrected form separates 480 cleared ticket income,192 conditional pledge,and 220 expenses,excluding the earlier advance from new income. It preserves the revision history and assigns governance review rather than erasing responsibility."
    },
    {
      "id": "b01-evidence",
      "title": "Two categories of names",
      "description": "40 numbered replies identify paid dinner guests. Sixteen separate family tributes authorize a remembrance display and contain no ticket or payment promise. The pending report merges categories that the source bundles keep separate."
    },
    {
      "id": "b02-evidence",
      "title": "The missing category key",
      "description": "The original plan labels dining places D,tributes T,and conditional pledges P. The later name-only spreadsheet drops the category column. Sixteen Tcards belonged on the sideboard, not at paid chairs."
    },
    {
      "id": "b03-evidence",
      "title": "Separate print references",
      "description": "Bram delivered a proof with 40 dining places and 16 tributes distinct. The 192-coin pledge schedule has a separate approval reference. His records establish supplied and delivered files, not an unseen later funding export."
    },
    {
      "id": "b05-evidence",
      "title": "The tribute permission",
      "description": "The form authorizes the approved name and short memory for the dinner sideboard only. It does not certify donation, attendance, wider publicity, or a new fundraising contact. Private reasons for those limits need not be demanded."
    },
    {
      "id": "b06-evidence",
      "title": "The equal difference",
      "description": "40×12 is 480;56×12 is 672,an excess of 192. A separate supporter’s conditional future pledge is 192. The matching amount suggests a classification route, not a donation by the tribute families."
    },
    {
      "id": "b07-evidence",
      "title": "The responsible export revision",
      "description": "The delivered proof preserves categories. Clive signed out the later export that lists 56 paid attendees and omits the pledge line. A copying shortcut does not satisfy the grant’s cleared-money rule."
    },
    {
      "id": "b09-evidence",
      "title": "Separate people, separate remedies",
      "description": "Clive acknowledges knowing the pledge was unpaid. The committee retains the record. Tribute families control their own permissions; the funder decides the corrected grant basis; the committee addresses the revision’s responsibility."
    },
    {
      "id": "b10-evidence",
      "title": "A consent-led correction",
      "description": "The combined list is withdrawn. Each family is informed and can keep, change, or withdraw its limited tribute. The funding report is corrected with revision history preserved; private names are not used as a public apology display."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "An extra place in the account",
      "location": "The Last Supper Club dining room",
      "body": [
        "The club calls every final dinner its last supper, then somehow opens again the next season. Tonight may be the real one. A grant decision could save the hall, and secretary Clive has prepared a benefit report describing fifty-six paid places. You can count forty settings before the guests arrive.",
        "Ada Wren finds an anonymous card beside her chair: ask who paid for the people who are not coming. She does not want a public accusation over the soup. She asks you to establish what the numbers mean before the report is sent. An empty seat might represent a mistake, a pledge, a tribute, or money that never arrived. The arithmetic has to follow the evidence."
      ],
      "meets": [
        "ada"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "opening-2"
        }
      ]
    },
    "opening-2": {
      "title": "The report leaves after dessert",
      "location": "The club’s small entrance hall",
      "body": [
        "You can start where meals become quantities: Mina’s kitchen records, portions, receipts, and bank evidence. Or you can follow the guest coordinator’s invitations and the printer’s place cards to learn who the extra names represent. The two routes will support different forms of correction.",
        "Ada has paused the report’s submission, so nobody needs to rush through a choice. She asks for a traceable answer, not a verdict based on whether a person seems nervous about losing the hall. Clive is working in the office. Elise has the invitation bundles across town, and Bram can stay at his press for another hour. You choose the chain you will make complete."
      ],
      "clues": [
        "opening-2-evidence"
      ],
      "choices": [
        {
          "id": "a",
          "label": "Audit the kitchen, admissions, and cleared-money evidence",
          "to": "a01",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "b",
          "label": "Trace the extra names through invitations and print proofs",
          "to": "b01",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a01": {
      "title": "A meal measured in portions",
      "location": "The club kitchen",
      "body": [
        "Mina’s kitchen sheet records forty guests, two small portions per guest, and three ounces per portion. The initial cooked batch weighed two hundred and seventy ounces. Thirty ounces were set aside before service for staff meals, leaving two hundred and forty for the benefit tables.",
        "A volunteer has called the thirty-ounce difference missing food. Mina invites you to check the labeled staff tray and its signed issue sheet rather than rely on her explanation alone. The quantities can establish whether the kitchen prepared forty paid covers. They cannot establish who wrote a financial report or whether every promise to donate became a payment."
      ],
      "meets": [
        "mina"
      ],
      "clues": [
        "a01-evidence"
      ],
      "routeLabel": "The quantity and accounts trail",
      "setFlags": [
        "route-a"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a02"
        }
      ]
    },
    "a02": {
      "title": "The same guests, counted another way",
      "location": "The admission desk",
      "body": [
        "The admission counter has forty numbered stubs, each matched to one collected twelve-coin ticket. The unused stubs are still attached in order. Ada’s seating check records the same forty expected guests, and no separate second sitting appears on the room booking.",
        "A stack of sixteen tribute cards sits beside the tickets. They have names but no ticket numbers or receipts. The cards may have a legitimate purpose, but counting them as paid diners requires evidence that the admission records do not supply. You keep them separate instead of forcing every piece of paper with a name into the same category."
      ],
      "clues": [
        "a02-evidence"
      ],
      "routeLabel": "The quantity and accounts trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a03"
        }
      ]
    },
    "a03": {
      "title": "What a kitchen can prove",
      "location": "The pantry accounting shelf",
      "body": [
        "Mina also keeps the ingredient receipts, which total two hundred and twenty coins. The dinner’s expected ticket income is four hundred and eighty. Before costs or other donations, the draft report’s fifty-six paid places would imply six hundred and seventy-two. The difference is one hundred and ninety-two.",
        "There is a pledge schedule for exactly one hundred and ninety-two coins, but it is dated payable next month. You have not found a cleared payment for it. A matching number is a useful lead, not a permission to count the same category whichever way makes the benefit look successful. Ada asks you to state the actual kitchen and admission conclusions before moving to the bank records."
      ],
      "clues": [
        "a03-evidence"
      ],
      "routeLabel": "The quantity and accounts trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a04"
        }
      ]
    },
    "a04": {
      "title": "Count without inventing missing plates",
      "location": "The kitchen office doorway",
      "body": [
        "Which conclusion follows the portion chain and independent admission records? The answer should explain the kitchen’s quantities without making a financial accusation the kitchen records cannot yet support."
      ],
      "puzzle": {
        "prompt": "What does the meal evidence establish?",
        "options": [
          {
            "id": "o1",
            "label": "Thirty ounces were stolen because the initial batch was larger than the guest requirement.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "Forty paid covers are independently supported; the staff allocation explains the remaining thirty ounces, while the extra sixteen paid places need separate financial evidence.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "The tribute cards prove sixteen additional diners ate unseen in a second sitting.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o4",
            "label": "The ingredient bill should be added to headcount because both concern the dinner.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "a05"
      },
      "routeLabel": "The quantity and accounts trail"
    },
    "a05": {
      "title": "A payment is not a promise",
      "location": "The donor-account desk",
      "body": [
        "Lida has the written terms for the one-hundred-and-ninety-two-coin pledge. It depends on a later review and has not yet been paid. The benefit form defines paid receipts as money cleared by the report date; it has a separate line for conditional pledges.",
        "The draft has entered the amount under paid places and left the conditional line blank. This may have begun as a classification mistake, but the difference matters to the grant calculation. A funder matching cleared receipts would be asked to match money the club does not yet have. Lida asks that you preserve the terms with the draft instead of correcting the total and losing the reason it was wrong."
      ],
      "meets": [
        "lida"
      ],
      "clues": [
        "a05-evidence"
      ],
      "routeLabel": "The quantity and accounts trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a06"
        }
      ]
    },
    "a06": {
      "title": "The bank’s narrow answer",
      "location": "The authorized bank statement folder",
      "body": [
        "Ada supplies the account extract the club is permitted to use for its benefit report. It records four hundred and eighty coins from ticket collection, with the ticket batch reference. The only other entry is an earlier grant advance that the form says must not be counted again as new income.",
        "There is no one-hundred-and-ninety-two-coin receipt. You do not need to search unrelated personal accounts to establish that absence in this specified club account and reporting period. Nor does the absence prove that nobody anywhere will ever honor the pledge. It proves the narrower thing the form asks: the amount had not cleared into the reported account by the cutoff."
      ],
      "clues": [
        "a06-evidence"
      ],
      "routeLabel": "The quantity and accounts trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a07"
        }
      ]
    },
    "a07": {
      "title": "The version the printer never saw",
      "location": "The secretary’s filing cabinet",
      "body": [
        "Bram’s printed draft proof has the correct distinction: forty paid places and a conditional pledge. The export awaiting submission instead says fifty-six paid places. Both files have revision identifiers. The club’s shared account log records Clive signing out the export revision, while Bram’s delivery receipt identifies the earlier proof.",
        "Clive says the printer must have misunderstood his note. The documents let you test that claim without deciding from their personalities. Bram delivered a proof with the categories intact. A later authorized export changed them. You ask Ada to preserve both versions and their references before discussing intent. A correction that deletes the wrong version would erase evidence of how it entered the process."
      ],
      "meets": [
        "bram",
        "clive"
      ],
      "clues": [
        "a07-evidence"
      ],
      "routeLabel": "The quantity and accounts trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a08"
        }
      ]
    },
    "a08": {
      "title": "An amount can be real and in the wrong column",
      "location": "The benefit-report table",
      "body": [
        "Select the two observations that establish the reporting error. A pledge can be genuine and still not qualify as paid receipts today. A printer can produce a paper without being responsible for every later export."
      ],
      "puzzle": {
        "prompt": "Which observations require the draft to be corrected?",
        "options": [
          {
            "id": "o1",
            "label": "The form counts only cleared money in paid receipts, while the 192-coin pledge remains conditional and unpaid at the cutoff.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "The pending export lists 56 paid places despite independent evidence of 40 paid tickets.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "The club hopes to survive another season, so any optimistic total is acceptable.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o4",
            "label": "The report looks polished, which establishes the accuracy of its categories.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "a09"
      },
      "routeLabel": "The quantity and accounts trail"
    },
    "a09": {
      "title": "Ask who changed the category",
      "location": "The club office",
      "body": [
        "Ada asks Clive to explain the revision with both versions on the desk. He acknowledges changing the pledge into paid places because the matching grant would otherwise be smaller. He had expected the pledge to arrive before anyone checked. The signed terms and the form’s cutoff make that expectation irrelevant to the present total.",
        "This admission establishes a deliberate misclassification, not a missing meal and not theft from the kitchen. It also makes the paused submission important: the wrong export has not yet left the club. There is still time to correct it openly, preserve the versions, and let the funder decide what consequence follows its own rules."
      ],
      "clues": [
        "a09-evidence"
      ],
      "routeLabel": "The quantity and accounts trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a10"
        }
      ]
    },
    "a10": {
      "title": "A correction with a visible history",
      "location": "The report-copying desk",
      "body": [
        "Lida drafts a correction showing four hundred and eighty in cleared ticket receipts and one hundred and ninety-two as conditional future support. The two-hundred-and-twenty ingredient cost appears under expenses. The earlier grant advance stays excluded from fresh income. Every figure has a source reference.",
        "Ada does not offer Clive immunity in exchange for a tidy explanation. She retains the revision record and puts the governance question before the club’s committee. The grant office will receive the accurate form and a description of the correction. A community benefit can still be worth saving without being allowed to keep a misleading account of itself."
      ],
      "clues": [
        "a10-evidence"
      ],
      "routeLabel": "The quantity and accounts trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a11"
        }
      ]
    },
    "a11": {
      "title": "The final amount is not the whole answer",
      "location": "The dining room’s quiet end",
      "body": [
        "Which final action solves the account without concealing the deliberate revision? The mystery began with empty places, but the records have identified a category change and a chance to correct it before submission."
      ],
      "puzzle": {
        "prompt": "Which report should Ada submit?",
        "options": [
          {
            "id": "o1",
            "label": "The original 672-coin paid total because a pledge may arrive later.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "A corrected 480-coin cleared-income report with the conditional pledge separate, source references and revision history retained, and the committee and funder told what changed.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "A report blaming Mina’s kitchen for the difference between cooked food and grant income.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o4",
            "label": "No report at all, followed by deletion of both versions so nobody can ask awkward questions.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "a12"
      },
      "routeLabel": "The quantity and accounts trail"
    },
    "a12": {
      "title": "Forty places, accurately kept",
      "location": "The last table after dessert",
      "body": [
        "The benefit report leaves with its correct categories and a covering note. The committee takes responsibility for its review of Clive’s conduct; nobody asks you to make that decision over an empty soup bowl. Mina receives a clear statement that her portions and staff allocation matched the records.",
        "Your account route solved the discrepancy through quantities, cleared funds, and version evidence. The hall may or may not receive the award it hoped for. What it receives from this dinner is a record that no longer counts hoped-for people as paid receipts."
      ],
      "ending": {
        "title": "The corrected account goes forward",
        "kind": "solved",
        "body": [
          "You established forty paid covers, separated a real conditional pledge from cleared income, and identified the later revision that misclassified it. The accurate report and its history now reach the people responsible for the funding decision.",
          "Ada folds the anonymous place card into the file. Its question has an answer, and the answer has sources."
        ]
      },
      "routeLabel": "The quantity and accounts trail"
    },
    "b01": {
      "title": "Names that did not answer an invitation",
      "location": "Elise’s invitation room",
      "body": [
        "Elise opens two clearly separate bundles. Forty paid guests have numbered replies and tickets. Sixteen families supplied a name for a remembrance display connected with the hall’s flood-relief anniversary. Their cards contain no payment promise and no request for a dinner place.",
        "The pending report has combined the bundles into a single list of fifty-six paid attendees. Elise did not prepare that combined list. Before assigning blame, you ask her to explain the purpose and permission attached to each tribute. A name on a card can belong to a carefully limited act of remembrance, not to an invented diner who owes or has donated money."
      ],
      "meets": [
        "elise"
      ],
      "clues": [
        "b01-evidence"
      ],
      "routeLabel": "The invitation and print trail",
      "setFlags": [
        "route-b"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b02"
        }
      ]
    },
    "b02": {
      "title": "The table plan’s little key",
      "location": "The print-proof cabinet",
      "body": [
        "The table plan uses letters around a central circle. Its printed key says D means dining place, T means tribute display, and P means conditional pledge. Sixteen T cards were intended for the sideboard, not chairs. A later spreadsheet strips the letter column and keeps only the names.",
        "That removal would make a careless merge easier, but it does not yet explain who authorized the financial total. You keep the original plan with the spreadsheet so the missing context can be demonstrated. A tidy column of names is not a more reliable source merely because it has lost the distinctions that made its entries useful."
      ],
      "clues": [
        "b02-evidence"
      ],
      "routeLabel": "The invitation and print trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b03"
        }
      ]
    },
    "b03": {
      "title": "The printer’s numbered proof",
      "location": "Bram’s print shop",
      "body": [
        "Bram’s proof book retains the customer’s supplied files and the signed approval. The delivered proof still distinguishes forty dining places from sixteen tributes. He has also printed a pledge schedule for one hundred and ninety-two coins, but that schedule is a different document with a different approval reference.",
        "A person standing beside the press might sincerely remember seeing all fifty-six names and a sum of money without remembering which page contained which. You compare the proof references, not the combined impression. Bram can establish what he received and delivered. He cannot certify how a customer later used the spreadsheet in a funding export he never saw."
      ],
      "meets": [
        "bram"
      ],
      "clues": [
        "b03-evidence"
      ],
      "routeLabel": "The invitation and print trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b04"
        }
      ]
    },
    "b04": {
      "title": "What do the extra names actually represent?",
      "location": "The print shop’s proof table",
      "body": [
        "Which interpretation accounts for the source bundles, table key, and printer’s separate references? Do not let a number shared across documents turn one kind of permission into another."
      ],
      "puzzle": {
        "prompt": "What can you conclude about the sixteen extra names?",
        "options": [
          {
            "id": "o1",
            "label": "They are unpaid diners who must now be invoiced for a meal.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "They are separately authorized tributes, not evidence of sixteen paid dinner places or of a 192-coin receipt.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "They prove Bram secretly added chairs after printing the floor plan.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o4",
            "label": "They automatically transfer all family stories to the grant office because a name was supplied.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "b05"
      },
      "routeLabel": "The invitation and print trail"
    },
    "b05": {
      "title": "A family’s permission has edges",
      "location": "Lida’s donor liaison desk",
      "body": [
        "Lida reads the tribute form with you. Families permitted a name and a short approved memory on a sideboard during the anniversary dinner. It contains no permission to list them as donors, no consent to publish a full private letter, and no agreement to a later fundraising appeal.",
        "The distinction is not a technical obstruction to kindness. One family supplied a name while explicitly declining publicity elsewhere. Another sent a tribute through a friend and did not attend. You will not ask their private reasons as the price of correcting the report. The source permission is enough to establish how narrow the authorized use was."
      ],
      "meets": [
        "lida"
      ],
      "clues": [
        "b05-evidence"
      ],
      "routeLabel": "The invitation and print trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b06"
        }
      ]
    },
    "b06": {
      "title": "The amount beside the names",
      "location": "The club’s pledge desk",
      "body": [
        "The pledge schedule totals one hundred and ninety-two coins, conditional on a review next month. The grant form defines paid receipts as money cleared by its cutoff. Forty guests paying twelve coins each produce four hundred and eighty, not the pending report’s six hundred and seventy-two.",
        "The coincidence is now informative: the unpaid pledge amount exactly equals the inflation produced by counting sixteen extra twelve-coin places. It does not prove the tribute families made the pledge. The schedule names a separate supporter. You must connect the amount to the report’s revision rather than impose a financial role on sixteen people whose only recorded act was contributing a remembrance."
      ],
      "clues": [
        "b06-evidence"
      ],
      "routeLabel": "The invitation and print trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b07"
        }
      ]
    },
    "b07": {
      "title": "The file after the proof",
      "location": "The secretary’s archive folder",
      "body": [
        "Bram’s delivery receipt identifies the proof revision with the categories intact. The club account log identifies Clive as the person signing out the later funding export. That export calls all fifty-six names paid attendees and leaves the conditional-pledge line blank.",
        "Clive says he used the combined spreadsheet because it was easier to paste into the form. Ease of copying explains how category information could disappear; it does not authorize calling an unpaid pledge cleared money. Ada asks for both versions to be preserved. You can now question the person responsible for the actual change without blaming the printer for a document he did not produce."
      ],
      "meets": [
        "clive"
      ],
      "clues": [
        "b07-evidence"
      ],
      "routeLabel": "The invitation and print trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b08"
        }
      ]
    },
    "b08": {
      "title": "Two mistakes, one exact total",
      "location": "The committee’s copying table",
      "body": [
        "Select the observations that show why the report is wrong. You need both the meaning of the names and the financial cutoff. Neither can safely be inferred from the other."
      ],
      "puzzle": {
        "prompt": "Which two distinctions must the corrected report preserve?",
        "options": [
          {
            "id": "o1",
            "label": "Tribute permission is not proof of a paid place, attendance, or donation.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "A conditional 192-coin pledge is not cleared income at the report cutoff.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "A polished spreadsheet replaces the conditions written on every source form.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o4",
            "label": "The number sixteen means the tribute families must collectively pay the difference.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "b09"
      },
      "routeLabel": "The invitation and print trail"
    },
    "b09": {
      "title": "A question asked before an accusation",
      "location": "The club committee room",
      "body": [
        "Ada asks Clive whether the later export was merely an accidental name merge. He admits that he knew the pledge had not cleared and wanted the larger matching basis to keep the hall open. The account log and separate schedule allow that admission to be checked against records prepared before this conversation.",
        "The committee records the answer. It does not ask the tribute families to forgive it on the club’s behalf. Their immediate issue is a misuse of names; the funder’s issue is an inaccurate report; the committee’s issue is responsibility for the revision. A single apologetic speech cannot make those distinct decisions belong to the same person."
      ],
      "clues": [
        "b09-evidence"
      ],
      "routeLabel": "The invitation and print trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b10"
        }
      ]
    },
    "b10": {
      "title": "An invitation to correct, not to perform",
      "location": "The sideboard before service",
      "body": [
        "Elise removes the combined donor list before it is displayed. She prepares a short correction for each affected family explaining which unauthorized use was proposed and how it has been stopped. They can retain, amend, or withdraw their tribute without being asked to justify the choice in public.",
        "Lida prepares the accurate funding categories with Ada and preserves the old export as a marked superseded version. The correction does not hide the error; it keeps private names from becoming the spectacle through which the club proves its remorse. Your chosen route has made consent visible as well as money. That is why its ending differs from an audit conducted only through amounts."
      ],
      "clues": [
        "b10-evidence"
      ],
      "routeLabel": "The invitation and print trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b11"
        }
      ]
    },
    "b11": {
      "title": "Keep the corrections in their own hands",
      "location": "The entrance hall",
      "body": [
        "Choose the resolution that follows the evidence and the limits of each permission. The hall’s future is important, but it cannot be secured by making absent families stand in for money they never promised."
      ],
      "puzzle": {
        "prompt": "Which resolution properly follows your invitation-and-print route?",
        "options": [
          {
            "id": "o1",
            "label": "Ask the tribute families to pay twelve coins each so the old report becomes true.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "Destroy the original tribute forms because they reveal how the report was wrong.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o3",
            "label": "Withdraw the unauthorized combined list, let each family control its tribute, correct paid income and pledge categories, and preserve the export history for committee and funder review.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "Publish every family story as evidence of the club’s charitable spirit.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "b12"
      },
      "routeLabel": "The invitation and print trail"
    },
    "b12": {
      "title": "A place that was never a chair",
      "location": "The dining room after the correction",
      "body": [
        "The sideboard carries only the tributes their families still want displayed. There are forty dinner settings and no invented extra guests. The accurate report goes to the funder with the correction explained, while the committee begins its review of Clive’s conduct.",
        "You followed names and permissions rather than the pantry quantities. The route exposed the same inflated report, but its resolution also restored choices that had been taken from people who were not in the room. Ada thanks you without announcing that a good ending guarantees the hall’s survival. It guarantees only that the next decision will be made from a truthful account."
      ],
      "ending": {
        "title": "The absent guests regain their choices",
        "kind": "solved",
        "body": [
          "Your invitation-and-print route distinguished diners, tributes, and a conditional pledge, then traced the later export that merged them. The funding record is corrected and the families control what remains on display.",
          "The anonymous card stays beside the source forms. Its question about people who were not coming has led to a more careful answer than adding sixteen chairs."
        ]
      },
      "routeLabel": "The invitation and print trail"
    }
  },
  "solutionPaths": [
    {
      "id": "route-a-complete",
      "actions": [
        {
          "type": "choice",
          "id": "continue"
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
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "o2"
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
            "o1",
            "o2"
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
          "id": "o2"
        }
      ]
    },
    {
      "id": "route-b-complete",
      "actions": [
        {
          "type": "choice",
          "id": "continue"
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
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "o2"
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
            "o1",
            "o2"
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
          "id": "o3"
        }
      ]
    }
  ]
};
