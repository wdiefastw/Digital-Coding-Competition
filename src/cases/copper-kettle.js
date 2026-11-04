/** Original expanded mystery with route-specific evidence and resolutions. */
export default {
  "id": "copper-kettle",
  "title": "The Copper Kettle Affair",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "The charity supper is over, but one sealed collection has not reached the bank. A copper kettle full of numbered tokens and a very tidy receipt suggest two different stories about the missing money.",
  "setting": "A neighborhood charity kitchen and its closing-night collection",
  "contentNote": "Estimated first-play time includes reading and deduction.",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "elsie",
      "name": "Elsie Wren",
      "role": "Collection treasurer",
      "description": "Keeps careful totals and has learned that a neat account can still conceal an untested assumption.",
      "color": "#a08c76"
    },
    {
      "id": "kit",
      "name": "Kit Mercer",
      "role": "Kitchen steward",
      "description": "Weighs ingredients precisely and dislikes having the kitchen blamed for the accounts.",
      "color": "#9ca985"
    },
    {
      "id": "oren",
      "name": "Oren Pike",
      "role": "Collection courier",
      "description": "Knows the route to the bank and the shortcuts people assume he takes.",
      "color": "#ad927c"
    },
    {
      "id": "ruth",
      "name": "Ruth Bell",
      "role": "Bank clerk",
      "description": "Can explain exactly what her counter stamp certifies and what it does not.",
      "color": "#91a4ad"
    },
    {
      "id": "sadie",
      "name": "Sadie Marsh",
      "role": "Donor representative",
      "description": "Kept the small receipt somebody told her she would never need.",
      "color": "#b59aa7"
    },
    {
      "id": "jude",
      "name": "Constable Jude",
      "role": "Neighborhood constable",
      "description": "Prefers a recorded recovery to an exciting accusation.",
      "color": "#8e9e93"
    }
  ],
  "clues": [
    {
      "id": "tokens",
      "title": "A token is a receipt, not a coin",
      "description": "Each donor paid one dollar at the counter and dropped one numbered token in the copper kettle. Forty red tokens and sixty blue tokens were issued; the corresponding cash went into separate sealed bags."
    },
    {
      "id": "bags",
      "title": "The collection standard",
      "description": "Each empty bag weighs 100 grams. Each counted dollar coin weighs 8.1 grams. Red held 40 coins and blue held 60; labels and original seal impressions were copied before collection."
    },
    {
      "id": "blue-weight",
      "title": "The expected blue total",
      "description": "The blue bag’s expected gross weight is 586 grams:60 coins at 8.1 grams plus the 100-gram bag. Its delivery weight and seal match the original record."
    },
    {
      "id": "red-return",
      "title": "The empty returned red bag",
      "description": "The returned red bag weighs 100 grams, the recorded empty-bag weight. Its label still says 40 coins; a label cannot substitute for contents."
    },
    {
      "id": "seal",
      "title": "A seal made from a different face",
      "description": "The original red seal impression has a chipped crescent beside the number. The returned bag’s smooth crescent matches an unused spare seal retained with the courier’s supplies."
    },
    {
      "id": "recovery",
      "title": "A specific cache and its counted contents",
      "description": "A properly authorized search of Oren’s collection locker recovers40dollar coins beside the spare seal. The original blue delivery remains separately confirmed."
    },
    {
      "id": "closure",
      "title": "The bank’s counter sequence",
      "description": "The bank counter closed at 5:00. Its final issued collection receipt was 433. Receipt 447 had been allocated earlier as an off-counter collection blank, then recorded as unused when that collection was canceled. No accepted deposit was entered against it."
    },
    {
      "id": "receipt",
      "title": "A blank that was completed outside the bank",
      "description": "The alleged receipt 447 lacks the bank’s embossed counter mark. Its printed serial is genuine paper, but a genuine blank does not prove the bank accepted a deposit."
    },
    {
      "id": "donor",
      "title": "The donor counterfoils",
      "description": "Donors’ retained stubs total forty red and sixty blue paid contributions. They match the issue ledger; missing cash is not explained by unpaid pledges."
    },
    {
      "id": "courier-copy",
      "title": "The courier’s retained delivery message",
      "description": "Oren’s own message says the blue bag reached the bank and the red bag would follow later. It contradicts his later claim that receipt 447 covers both at the counter."
    },
    {
      "id": "bank-confirm",
      "title": "The bank’s independently confirmed amount",
      "description": "The signed bank ledger and witnessed bag entry record only the blue 60 dollars that evening. No red deposit or authorized night-box entry exists."
    },
    {
      "id": "restitution",
      "title": "A counted return without an erased record",
      "description": "Oren returns the missing 40 dollars after the bank comparison. The constable records the return and preserves the false receipt; repayment does not make the original discrepancy disappear."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A kettle that sounds wrong",
      "location": "The charity kitchen",
      "body": [
        "Elsie Wren tips the copper kettle carefully onto a table. One hundred numbered tokens spill out instead of coins. That part, she explains, is normal: donors paid at the counter and used the tokens as visible acknowledgments. The corresponding cash was collected in two sealed bags. The problem is that the bank’s confirmed amount covers only one.",
        "Oren, the courier, has supplied a receipt that appears to cover both. Elsie does not want to accuse him on the strength of a delayed entry, but the charity needs to pay for tomorrow’s meals. You offer to follow either the bags’ physical history or the receipt’s documentary history. First you must establish what the tokens actually prove."
      ],
      "meets": [
        "elsie"
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
      "title": "One hundred acknowledgments",
      "location": "The kitchen counting table",
      "body": [
        "The issue book contains forty red and sixty blue paid contributions. Each token represents one dollar already paid, not a promise to pay later. The red and blue cash were counted separately into identical bags. An empty bag weighs 100 grams; a dollar coin in this collection weighs 8.1 grams. Elsie recorded each gross weight and copied the wax impressions before the courier collected them.",
        "The kettle’s contents therefore support the counter’s count, but the tokens did not travel to the bank. Someone saying “the kettle was full” is not describing the contents of either sealed bag at delivery. Keep the acknowledgment, cash, container, and receipt distinct. The mystery will become easier to reason about once they stop being treated as four names for the same thing."
      ],
      "clues": [
        "tokens",
        "bags"
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
      "title": "Count the right object",
      "location": "The supper-room side table",
      "body": [
        "A volunteer proposes searching the kettle for hidden coins. Another thinks the tokens might be unpaid promises. Elsie shows you the paid counterfoils, which mark each exchange. Your first deduction concerns what remains unproved after those records agree.",
        "The records support the amount collected, not the amount eventually deposited. A delivery receipt could establish that second event if its authority and scope check out. A bag label cannot establish its contents after custody changed. Choose the next question that follows the actual gap. The charity deserves a complete account, and the courier deserves not to be accused because people misunderstood the harmless way a copper kettle was used during supper."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "What has the token count not yet established?",
        "options": [
          {
            "id": "delivery",
            "label": "Whether the separately counted cash bags reached the bank with their original contents.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "pledges",
            "label": "Whether any donor ever paid, despite the paid counterfoils.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "kettle",
            "label": "Whether a token secretly becomes a coin when the kettle closes.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "intent",
            "label": "Whether every volunteer intended to take the money.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "choice"
      }
    },
    "choice": {
      "title": "Follow a bag or follow a number",
      "location": "The kitchen back door",
      "body": [
        "Kit can help you compare the copied weights and seals with the returned collection bags, then trace their storage through the courier’s depot. That route can locate the missing cash as a particular physical collection, provided any search is properly authorized.",
        "Ruth at the bank can check the receipt number, counter mark, and evening ledger. The donor representative also kept a counterfoil others dismissed. That route can establish the missing deposit and confront the courier with an independently confirmed account, without treating a good-looking form as a bank’s promise. Choose which trail you will complete tonight. Both can recover the charity’s money, but one ends with a sealed cache and the other with a documented return."
      ],
      "choices": [
        {
          "id": "a",
          "label": "Trace the bags through weights, seals, and the courier depot",
          "to": "a00",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "b",
          "label": "Challenge the receipt through donors and the bank ledger",
          "to": "b00",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a00": {
      "title": "The kitchen’s quiet arithmetic",
      "location": "The kitchen stores",
      "body": [
        "Kit puts two standard weights on the scale before using it. The balance agrees, which prevents a later argument about an instrument that only seemed accurate because it produced the desired result. He lays out the empty-bag standard and the count copied at collection.",
        "Blue contained sixty coins, each 8.1 grams, in a 100-gram bag. Red contained forty of the same coins in another 100-gram bag. You are being asked for gross weight, so the bags matter. Neither token color changes a coin’s mass. The blue bag’s actual bank delivery can be checked independently; establishing its expected weight will help distinguish a correct delivery from a misleading total scribbled over both collections."
      ],
      "meets": [
        "kit"
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
      "routeLabel": "The bags and seals trail"
    },
    "a01": {
      "title": "A delivered bag and a returned one",
      "location": "The collection depot counter",
      "body": [
        "The bank’s acknowledgment for the blue bag records 586 grams and its copied seal mark. The returned red bag weighs 100 grams on the checked scale. Its old label still says forty coins. Oren suggests that a clerk might have used net weight on one record and gross on another.",
        "That explanation is testable. An empty bag has the recorded 100-gram mass; sixty coins add 486 grams to make the blue total 586 grams. A red bag still containing forty coins would weigh 424 grams gross, not 100. You do not infer intent from the arithmetic alone. You establish that the returned object cannot have the contents its unchanged label advertises. The next step concerns who resealed it and whether the original impression survived."
      ],
      "meets": [
        "oren"
      ],
      "clues": [
        "blue-weight",
        "red-return"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a02"
        }
      ],
      "routeLabel": "The bags and seals trail"
    },
    "a02": {
      "title": "Gross, net, and what a label cannot do",
      "location": "The depot weighing bench",
      "body": [
        "Select the two numerical conclusions supported by the stated standards and checked scale. There is no hidden coinage knowledge: all values necessary for the arithmetic were recorded before the collection. A persuasive alternative must fit those same values.",
        "The blue delivery matches its expected gross weight. The returned red bag matches the empty-bag standard, not its advertised forty-coin content. Calling one number net cannot make an empty bag contain cash. At the same time, the calculation cannot tell you where the coins went or who moved them. Keep the result exact enough that the physical trail can continue without being mistaken for a complete accusation."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two conclusions follow?",
        "options": [
          {
            "id": "blue",
            "label": "Blue’s expected gross weight is 586 grams, matching its independently recorded delivery.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "red",
            "label": "Red’s returned100gram gross weight matches the empty bag, not forty coins plus a bag.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "net",
            "label": "Changing the word gross to net makes 100 grams equal forty8.1-gram coins.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "intent",
            "label": "A weighing discrepancy alone establishes the person and intent responsible.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "a03",
        "wrongFeedback": "This combination leaves one of the established restrictions unexplained. Test the proposed explanation against every source.",
        "minSelections": 2,
        "maxSelections": 3
      },
      "routeLabel": "The bags and seals trail"
    },
    "a03": {
      "title": "A crescent with the wrong edge",
      "location": "The depot seal drawer",
      "body": [
        "Elsie’s copied red impression shows a tiny chip beside its crescent. The returned bag’s wax has a smooth crescent. Oren’s spare collection seal, kept for damaged bags, has that smooth face. Using a spare was permitted only if a witness recorded the opening, recount, and resealing.",
        "No such witness entry exists. The difference is more specific than a general resemblance between two red seals. It shows that the original closure did not remain intact. Oren says he resealed a torn corner without touching the money, an explanation the unchanged label and absent recount cannot verify. You preserve the bag and the two impression records rather than repeatedly pressing a seal into fresh wax until somebody produces a pleasing match."
      ],
      "clues": [
        "seal"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a04"
        }
      ],
      "routeLabel": "The bags and seals trail"
    },
    "a04": {
      "title": "A locker with a specific question attached",
      "location": "The constable’s desk",
      "body": [
        "Constable Jude reviews the weight comparison and changed seal. He will not search every volunteer’s house because a charity collection is missing. The courier had custody, used a spare seal without the required record, and returned an empty bag whose label still claimed the full contents. That supports a targeted application concerning the collection locker.",
        "You give Jude the records in their original order, including Oren’s explanation. The point is to make the alternative testable, not to hide it. If the coins are recovered, they must be counted and linked to the missing amount. If they are not, the inquiry must continue. An exciting suspicion is not a substitute for a search whose scope another officer can understand."
      ],
      "meets": [
        "jude"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a05"
        }
      ],
      "routeLabel": "The bags and seals trail"
    },
    "a05": {
      "title": "Forty coins beside a spare seal",
      "location": "The courier’s collection locker",
      "body": [
        "Under the authorized search, Jude finds forty dollar coins in a small tray beside the spare seal. The tray’s location and contents are photographed before counting. The bag label, issue count, coin standard, and recovered amount agree. The blue bag’s separate bank delivery remains confirmed.",
        "Oren acknowledges removing the red collection after discovering a personal shortfall. He had intended to replace it before the charity compared accounts. The admission explains a motive, but the recovery is recorded independently of it. Jude keeps the false receipt for a separate examination; your route has not yet established its entire paper history. Recovering the money does not grant permission to erase the change of custody that made it disappear."
      ],
      "clues": [
        "recovery"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a06"
        }
      ],
      "routeLabel": "The bags and seals trail"
    },
    "a06": {
      "title": "An ending with a counted amount",
      "location": "The depot inventory desk",
      "body": [
        "Choose the conclusion that fits this route’s evidence. The physical chain has established the expected cash, the empty returned bag, the changed seal, and the targeted recovery. It does not establish that every volunteer participated or that a claim to repay would have made the removal harmless.",
        "A responsible ending returns the counted forty dollars through the charity’s records and preserves the exhibits for the constable. It also leaves the sixty-dollar blue deposit separate, so the money is not counted twice during the relief of recovery. The kettle will still contain tokens; there was never anything wrong with that part of the evening. Your explanation should repair the broken custody trail rather than invent a different fundraising method after the fact."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "What should the final physical-route account say?",
        "options": [
          {
            "id": "recover",
            "label": "Record and return the recovered forty dollars against the missing red collection, preserving the changed seal and custody evidence.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "all",
            "label": "Treat the independently deposited blue sixty dollars as missing a second time.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "erase",
            "label": "Erase the discrepancy because Oren says he intended to replace the coins.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "tokens",
            "label": "Accuse the donors because the kettle contains tokens rather than cash.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "a07"
      },
      "routeLabel": "The bags and seals trail"
    },
    "a07": {
      "title": "The right total in the right column",
      "location": "The charity accounts desk",
      "body": [
        "Elsie records forty dollars recovered, not one hundred newly donated. The blue sixty already belongs in the bank-deposit column. Kit watches the arithmetic with the same concentration he gives a recipe that will feed fifty people. Accuracy is not less important because everybody is relieved.",
        "Jude provides a property receipt and records the next legal steps without promising an outcome he cannot decide. Oren’s explanation remains in the file alongside the documents that test it. The charity will change its collection procedure to require witnessed transfer of each numbered bag, rather than hoping that a familiar face is a permanent substitute for a second signature."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a08"
        }
      ],
      "routeLabel": "The bags and seals trail"
    },
    "a08": {
      "title": "A kettle that can keep its ceremony",
      "location": "The supper room",
      "body": [
        "The volunteers ask whether the copper kettle should be retired. Elsie says the visible tokens helped donors see what they had achieved; the missing safeguard was in cash custody, not in the ceremony. The repaired procedure keeps the kettle and adds independent acknowledgments for the bags.",
        "Your route followed weight, wax, and a particular locked place. A different investigation could have challenged the false receipt and secured a recorded repayment through the bank. You can now explain the result to donors without claiming checks you did not perform. The recovered collection is enough to pay for tomorrow’s meals, and the record is clear enough that nobody has to trust a grateful summary in place of the actual figures."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a09"
        }
      ],
      "routeLabel": "The bags and seals trail"
    },
    "a09": {
      "title": "The next supper",
      "location": "The charity kitchen doorway",
      "body": [
        "The kettle returns to its hook, polished but otherwise unchanged. Beside it hangs a new transfer sheet with separate lines for counting, collection, and delivery. It is not an especially beautiful piece of paper. Elsie thinks it may be the most useful object the evening produced.",
        "You leave with a property receipt number in your notebook. The case ended through a physical recovery and a custody correction, not through an assumption that a familiar courier or an impressive label could guarantee what a bag contained."
      ],
      "ending": {
        "title": "Case closed: the sealed collection recovered",
        "kind": "solved",
        "body": [
          "The checked weights, changed seal, and authorized locker search account for the missing red collection. Forty dollars return under a property receipt while the blue deposit remains separate. The cash recovery is recorded alongside the conduct that made it necessary, with no promised exemption from the legal inquiry."
        ]
      },
      "routeLabel": "The bags and seals trail"
    },
    "b00": {
      "title": "A number ahead of its time",
      "location": "The bank side counter",
      "body": [
        "Ruth Bell is closing the counter when Elsie’s introduction reaches her. The final issued charity receipt of the evening was 433. The alleged receipt 447 comes from genuine numbered paper allocated earlier to an off-counter collection. That collection was canceled, leaving the form recorded as unused rather than accepted. It was not part of the evening’s issued counter sequence.",
        "Ruth shows you the embossed counter mark that certifies an accepted deposit. Receipt 447 lacks it. A printed serial identifies paper; it does not establish that a clerk accepted the stated money. You ask Ruth to record the distinction without being told whom you suspect. Her check is useful because it comes from a separately held sequence, not because she is prepared to call somebody dishonest on your behalf."
      ],
      "meets": [
        "ruth"
      ],
      "clues": [
        "closure",
        "receipt"
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
      "routeLabel": "The receipt and bank trail"
    },
    "b01": {
      "title": "A paid slip in a coat pocket",
      "location": "The donor representative’s house",
      "body": [
        "Sadie Marsh kept the paid counterfoil that a volunteer called unnecessary. The donor stubs collectively match forty red and sixty blue contributions. Their numbers agree with the issue book and the tokens in the kettle. The cash shortfall cannot be explained by treating the tokens as unpaid pledges.",
        "Sadie will not identify a culprit from a bank form she does not understand. She can establish what donors paid, which is a useful and limited contribution. You photograph the counterfoils with permission and leave the originals until the constable can collect them properly. The best route through people’s accounts does not demand that each person become an expert in every other person’s record."
      ],
      "meets": [
        "sadie"
      ],
      "clues": [
        "donor"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b02"
        }
      ],
      "routeLabel": "The receipt and bank trail"
    },
    "b02": {
      "title": "Genuine paper, unproved event",
      "location": "The bank ledger room",
      "body": [
        "Select the two observations that distinguish a genuine blank from an accepted deposit. The bank’s paper can be real while the completed claim is false. A donor’s payment can be real while the later delivery is missing.",
        "The issued sequence and counter mark establish what the bank actually processed. The paid stubs establish the collection amount. Neither the neat handwriting nor the printed bank name creates the missing acceptance. You should not infer that a blank could never leave the counter; the question is whether the particular form was issued as a deposit receipt. The two correct entries let the investigation challenge that specific event without accusing donors of failing to pay or assuming every printed form must be forged from scratch."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two observations challenge the alleged full deposit?",
        "options": [
          {
            "id": "sequence",
            "label": "Receipt 447 was still unused when the bank’s issued sequence ended at 433.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "mark",
            "label": "The alleged receipt lacks the embossed mark used to certify accepted counter deposits.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "heading",
            "label": "A genuine bank heading proves all handwritten amounts were accepted.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "pledges",
            "label": "Numbered paid counterfoils establish only unpaid promises.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "b03",
        "wrongFeedback": "This combination leaves one of the established restrictions unexplained. Test the proposed explanation against every source.",
        "minSelections": 2,
        "maxSelections": 3
      },
      "routeLabel": "The receipt and bank trail"
    },
    "b03": {
      "title": "The message the sender kept",
      "location": "The courier’s delivery office",
      "body": [
        "Oren’s retained message says the blue bag reached the bank and the red bag would follow later. Its time follows the bank’s closing counter record. This does not match his later claim that receipt 447 covers both bags accepted together at the counter.",
        "He suggests a night-box deposit. Ruth’s record shows no authorized night-box entry for the collection, and that service uses a different acknowledgment procedure. You give him the chance to identify the box number or witness; he cannot. The investigation is moving from an unreliable piece of paper to a conflict between independently held bank records and the courier’s own earlier statement. A changed explanation can be true, but it needs support beyond being the last one offered."
      ],
      "meets": [
        "oren"
      ],
      "clues": [
        "courier-copy"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b04"
        }
      ],
      "routeLabel": "The receipt and bank trail"
    },
    "b04": {
      "title": "The bank’s side of the exchange",
      "location": "The bank cash ledger",
      "body": [
        "The signed ledger records only the blue sixty dollars, together with its witnessed bag entry. The record does not contain a red deposit waiting under another name. Ruth checks the collection reference, the charity name, and the courier reference rather than relying on a single failed search.",
        "The counter’s final sequence and absence of a night-box acknowledgment support the same conclusion. No one claims the bank could never make an error. What matters is that the specific alternative has been looked for in the places it should appear, while the courier’s own earlier message distinguishes one delivered bag from one undelivered bag. You can now put a defined shortfall to him without treating a late ledger update as proof by itself."
      ],
      "clues": [
        "bank-confirm"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b05"
        }
      ],
      "routeLabel": "The receipt and bank trail"
    },
    "b05": {
      "title": "A return that must still be recorded",
      "location": "The constable’s interview room",
      "body": [
        "Constable Jude asks Oren about the two conflicting delivery accounts with advice available and an accurate record. Presented with the bank’s independently confirmed amount, Oren admits retaining the red forty dollars to cover a personal debt. He produces the money and says the genuine blank was obtained earlier for a canceled collection.",
        "Jude counts the returned coins and issues a receipt. The bank will retain its sequence record and the false completed form. Nobody promises that repayment erases the removal or that a charitable purpose entitles the charity to decide the legal outcome. Your route has reached the money through documentary contradiction and a recorded return, rather than a search of the courier’s locker."
      ],
      "meets": [
        "jude"
      ],
      "clues": [
        "restitution"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b06"
        }
      ],
      "routeLabel": "The receipt and bank trail"
    },
    "b06": {
      "title": "Do not count a repayment twice",
      "location": "The charity’s bank comparison sheet",
      "body": [
        "Choose the final account that preserves the collected hundred dollars, the independently deposited sixty, and the returned forty. It should also preserve the false receipt as evidence of the earlier claim rather than treating it as harmless waste paper now that the money is back.",
        "A solved story needs more than a happy total. If Elsie books the returned forty as a new donation, the records will conceal the missing delivery and overstate fundraising. If she records the whole hundred as newly recovered, the blue deposit is counted twice. The proper entry should make tomorrow’s reader able to trace what happened, including the part that the courier would prefer everybody to forget."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which final accounting is accurate?",
        "options": [
          {
            "id": "trace",
            "label": "Keep the blue sixty as its original deposit and record the returned forty against the missing red collection, retaining the false receipt and return record.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "new",
            "label": "Book the returned forty as an unrelated new donation.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "hundred",
            "label": "Add the whole hundred as recovered cash on top of the existing blue deposit.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "discard",
            "label": "Discard the false receipt because repayment means the earlier delivery happened after all.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "b07"
      },
      "routeLabel": "The receipt and bank trail"
    },
    "b07": {
      "title": "A correction for the donors",
      "location": "The supper-room notice table",
      "body": [
        "Sadie helps Elsie write a donor update stating the verified collection, deposit, shortfall, and return. It gives no private speculation about Oren’s finances and no promise about legal decisions outside the charity’s control. Donors can ask to see the relevant record numbers.",
        "Ruth provides a bank acknowledgment for the returned amount when it is actually deposited. This time the issue number, counter mark, and ledger all refer to the same event. The charity’s total is restored, but its history is not rewritten. You can explain exactly why the original form failed and which independently held records established the gap, which is more useful than saying the mystery ended when somebody confessed."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b08"
        }
      ],
      "routeLabel": "The receipt and bank trail"
    },
    "b08": {
      "title": "A blank form kept as a lesson",
      "location": "The treasurer’s desk",
      "body": [
        "Elsie adds a rule that each courier handover must be matched to the bank’s independently confirmed acknowledgment. A genuine form will no longer stand in for the event it is supposed to certify. The donors’ counterfoils also gain a stated retention period, so the next Sadie is not told to throw away a useful record.",
        "Your route did not examine every seal or open every locker. It followed receipt authority, paid stubs, a retained message, and the bank’s own ledger to a recorded return. A different choice would have produced a physical recovery. Both repair the shortfall, but yours leaves the charity with a particularly clear explanation of how good paper can carry a false claim."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b09"
        }
      ],
      "routeLabel": "The receipt and bank trail"
    },
    "b09": {
      "title": "The kettle and the counterfoil",
      "location": "The kitchen after washing-up",
      "body": [
        "The kitchen is almost quiet. Elsie puts the kettle away and gives Sadie a folder for the counterfoils nobody will call unnecessary again. The new bank acknowledgment sits beside the record of the missing delivery, not on top of it.",
        "The case ended through documents that described different events: payment, collection, handover, acceptance, and return. Once those events stopped being merged into one reassuring total, the money could be followed honestly. The next charity supper will look much the same to its guests, which is a good outcome for a mystery solved behind the scenes."
      ],
      "ending": {
        "title": "Case closed: the deposit reconstructed",
        "kind": "solved",
        "body": [
          "The bank’s issue sequence, paid counterfoils, and courier’s retained message expose the false full-deposit claim. The missing forty dollars are returned and recorded against that shortfall. The original blue deposit and false receipt remain visible so repayment cannot rewrite what happened."
        ]
      },
      "routeLabel": "The receipt and bank trail"
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
          "id": "delivery"
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
            "blue",
            "red"
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
          "id": "recover"
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
          "id": "delivery"
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
            "sequence",
            "mark"
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
          "id": "trace"
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
