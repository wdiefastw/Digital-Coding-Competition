/** An original branching investigation. Solutions stay inside earned scenes. */
export default {
  "id": "winter-pharmacy",
  "title": "A Receipt for Winter",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "A volunteer’s signature appears on a delivery she says never arrived. Follow a trail of winter parcels through the accounts office or the snowbound delivery yards.",
  "setting": "A village pharmacy and its winter-aid collection office after the first heavy snow",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "lucia",
      "name": "Lucia Penn",
      "role": "Pharmacist",
      "description": "Keeps the aid collection separate from the dispensary and wants the volunteers treated fairly.",
      "color": "#9aa994"
    },
    {
      "id": "saff",
      "name": "Saff Cole",
      "role": "Winter-aid volunteer",
      "description": "Has spent the week carrying parcels and can describe a doorway more readily than an invoice.",
      "color": "#c0a084"
    },
    {
      "id": "nolan",
      "name": "Nolan Beck",
      "role": "Delivery-yard supervisor",
      "description": "Measures work by sealed loads, not by the neatness of a signature.",
      "color": "#8f9eae"
    },
    {
      "id": "vera",
      "name": "Vera Shaw",
      "role": "Accountant",
      "description": "Will correct a mistake, but expects a number to survive being checked twice.",
      "color": "#b39aa9"
    },
    {
      "id": "gerard",
      "name": "Gerard Pike",
      "role": "Aid-fund treasurer",
      "description": "Maintains a carefully ruled ledger and dislikes questions about unofficial duplicates.",
      "color": "#a99e77"
    }
  ],
  "clues": [
    {
      "id": "appeal",
      "title": "The disputed claim",
      "description": "The aid fund is being charged for twelve parcels under serial W-418 on Tuesday; Saff disputes that movement."
    },
    {
      "id": "weights",
      "title": "The covered scale ticket",
      "description": "The loaded tray weighed34kg. Empty tray4kg; each finished parcel3kg. Trolley wheels were not on the scale."
    },
    {
      "id": "signature",
      "title": "Monday’s independent diary",
      "description": "The shelter diary and Saff’s account both describe ten parcels delivered Monday."
    },
    {
      "id": "ten",
      "title": "What was weighed",
      "description": "The scale supports ten parcels, not twelve; it does not by itself identify who changed a payment claim."
    },
    {
      "id": "copies",
      "title": "One serial, three copies",
      "description": "W-418’s blue copy says Monday/ten, yellow says Tuesday/twelve. No joint correction was made."
    },
    {
      "id": "supplier",
      "title": "Original supplier entry",
      "description": "The supplier dispatched and invoiced ten parcels under W-418 on Monday, with no matching Tuesday dispatch."
    },
    {
      "id": "bank",
      "title": "The payment difference",
      "description": "The supplier’s original invoice requests £60 for ten parcels; the aid submission requests £72 under the same invoice number."
    },
    {
      "id": "cover",
      "title": "The submitted amendment",
      "description": "Gerard signed the payment cover after a handwritten amendment from10 to12; the accounts timestamp follows that amendment."
    },
    {
      "id": "refund",
      "title": "The holding-account instruction",
      "description": "An attached instruction routes the extra£12 to a holding account controlled by the aid office, rather than to the supplier."
    },
    {
      "id": "tray",
      "title": "The tray’s white copy",
      "description": "Tray34’s white copy lists ten parcels, W-418, delivered Monday; its return seal was signed by the shelter caretaker."
    },
    {
      "id": "route",
      "title": "A vehicle that could not return",
      "description": "Tuesday’s route sheet and bridge closure record place the vehicle north of the river all afternoon; it made no second shelter delivery."
    },
    {
      "id": "carbon",
      "title": "The displaced carbon edge",
      "description": "The office’s yellow copy has a torn edge exactly matching the Monday pad stub, while its Tuesday date was added after the carbon paper had been removed."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A signature on the wrong day",
      "location": "The pharmacy’s collection room",
      "meets": [
        "lucia"
      ],
      "clues": [
        "appeal"
      ],
      "body": [
        "The collection room contains scarves, sealed hand-warmer packs, and tins of donated soup. None of this involves the dispensary; Lucia has kept the winter-aid fund separate so its volunteers can work without entering a medical area. Today she has a different boundary to defend. Saff, a volunteer, has been accused of signing for parcels that the fund paid for but never received.",
        "A receipt bears Saff’s name beside a delivery dated Tuesday. She says she was at the flood shelter all Tuesday afternoon. Lucia asks you to examine the chain before a well-intentioned appeal becomes a convenient accusation."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "first-record"
        }
      ]
    },
    "first-record": {
      "title": "Boxes, weight, and packing",
      "location": "The collection scales",
      "clues": [
        "weights"
      ],
      "body": [
        "The disputed receipt lists twelve winter parcels. The packing specification says each finished parcel weighs three kilograms, and the reusable wooden tray weighs four kilograms empty. The yard’s scale ticket records a loaded tray weighing thirty-four kilograms. Its calibration sticker was checked that morning against the same four-kilogram tray.",
        "A note in the treasurer’s ledger calls the scale difference “snow on the wheels.” But this is a bench scale under a roof; the wheels of the trolley do not stand on it. You set aside the explanation long enough to work out what was actually weighed."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "first-witness"
        }
      ]
    },
    "first-witness": {
      "title": "Where Saff put her name",
      "location": "The shelter’s kitchen doorway",
      "meets": [
        "saff"
      ],
      "clues": [
        "signature"
      ],
      "body": [
        "Saff remembers signing a carbon sheet on Monday, after carrying ten parcels into the shelter. She remembers ten because there were two trips of five, and because a child carefully counted the handles. Her signature was on the top copy of a three-part pad. She was not asked to write a date or a parcel count.",
        "The shelter’s kitchen diary records the same ten parcels on Monday, with an independent caretaker’s initials. That supports her memory without requiring you to believe every detail of it. A copied signature could travel farther than the person who made it."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "first-question"
        }
      ]
    },
    "first-question": {
      "title": "The number the tray can support",
      "location": "The pharmacy’s back table",
      "body": [
        "Use the specified parcel weight and subtract the empty tray before counting. The result will not tell you who altered a record. It can tell you whether the loaded tray supports the disputed count of twelve. Start with that narrower question."
      ],
      "puzzle": {
        "prompt": "How many finished parcels does the covered scale ticket support?",
        "options": [
          {
            "id": "1",
            "label": "Twelve, because34kg rounds up to the nearest full tray.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Ten, after subtracting the4kg empty tray and dividing30kg by3kg per parcel.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Eleven, because the tare should be counted as one parcel.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "No calculation is possible merely because it snowed outside.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "first-result"
      }
    },
    "first-result": {
      "title": "A shortfall in the document",
      "location": "The pharmacy’s back table",
      "clues": [
        "ten"
      ],
      "body": [
        "The loaded weight supports ten parcels: thirty-four minus four gives thirty, and thirty divided by three gives ten. The scale ticket and the independent shelter diary agree. Saff’s signature could belong to a legitimate delivery of ten while being used to support a later claim for twelve.",
        "Lucia will not let that become an accusation against the treasurer merely because his handwriting is tidy. The receipt could have been copied or misunderstood at several points. You need to establish which copy belongs to which movement, and who submitted the bill."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "second-record"
        }
      ]
    },
    "second-record": {
      "title": "A pad with three colors",
      "location": "The aid office counter",
      "meets": [
        "gerard"
      ],
      "clues": [
        "copies"
      ],
      "body": [
        "Gerard explains the office pad: white goes with the goods, blue stays at the collection office, and yellow supports the supplier’s payment claim. He shows you Monday’s blue copy, which says ten, and Tuesday’s yellow copy, which says twelve. Both display the same pad serial, W-418. He suggests the supplier must have reused a number.",
        "The office rule is written inside the pad cover: a serial belongs to one movement; corrections require all three copies to be crossed through together. There are no matching crossings. Gerard has signed Tuesday’s payment cover, but he says he signed a stack without checking the contents."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "cross-check"
        }
      ]
    },
    "cross-check": {
      "title": "The supplier’s quiet answer",
      "location": "The supplier’s telephone alcove",
      "clues": [
        "supplier"
      ],
      "body": [
        "With Lucia present, the supplier reads its original dispatch entry aloud and sends a copy through the office’s normal channel. Serial W-418 covers ten parcels on Monday. There is no Tuesday dispatch under that number. The supplier’s invoice requests payment for ten, not twelve.",
        "There are now two possible ways to strengthen the case. Vera can compare the fund’s payment submission with the supplier’s original invoice at the council accounts room. Nolan can trace the physical tray and its white movement copy through the delivery yard. Each route would establish a different part of the chain."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next lead",
          "to": "route-choice"
        }
      ]
    },
    "route-choice": {
      "title": "Money or movement",
      "location": "The collection-room stairs",
      "body": [
        "The council review starts this afternoon. You can bring a documentary payment trail, or a physical delivery trail with independently signed transfers. Neither requires you to open anyone’s medical records, and neither justifies publicly blaming Saff before the copies are reconciled.",
        "Choose whether to follow what was charged or what actually moved. The other route will remain a useful question for a later investigator, but your own report must stand on the evidence you obtain."
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Go with Vera to the council accounts room",
          "to": "a-arrival",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Follow the tray through Nolan’s delivery yard",
          "to": "b-arrival",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a-arrival": {
      "title": "Two totals for one number",
      "location": "The council accounts room",
      "meets": [
        "vera"
      ],
      "clues": [
        "bank"
      ],
      "body": [
        "Vera puts the supplier’s original beside the aid office submission. Both quote invoice604 and serial W-418. The supplier asks for sixty pounds: ten parcels at six pounds each. The aid submission asks for seventy-two pounds under the same reference. The extra twelve pounds cannot be explained by a higher unit price; both documents use six.",
        "Vera has not yet paid either version. She can stop a mistaken payment, but a disciplinary report needs to show more than an arithmetic difference. The next question is whether the alteration preceded the signed submission or was added afterward."
      ],
      "routeLabel": "The payment trail",
      "setFlags": [
        "route-a"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-question"
        }
      ]
    },
    "a-question": {
      "title": "When a signature commits a claim",
      "location": "The document-viewing terminal",
      "body": [
        "The scanned pages retain an upload sequence. The amended count appears in scan1 at 11:03. The signed payment cover is scan2 at 11:09. A handwritten reminder on the office wall says signatures certify the attached count, not just the envelope. Select the observations that establish what Gerard submitted, rather than what he may have meant privately."
      ],
      "routeLabel": "The payment trail",
      "puzzle": {
        "prompt": "Which TWO facts establish that the amended count was part of Gerard’s signed submission?",
        "options": [
          {
            "id": "1",
            "label": "The amended count is visible in the11:03 upload, before the cover was signed and uploaded at 11:09.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The signed cover explicitly certifies the attached count under the same invoice reference.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Gerard writes more neatly than the volunteers.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "The supplier’s van was red, like the ink used in a correction.",
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
      "title": "The order of the alteration",
      "location": "The council accounts room",
      "clues": [
        "cover"
      ],
      "body": [
        "The timestamp and the signed cover place the altered count before Gerard’s certification, not after it. That contradicts his first explanation that an unidentified office hand might have changed the packet after he signed. It still does not establish the destination of an excess payment.",
        "Vera asks you to inspect the attached routing note rather than guess. An unnecessary theory about a supplier would be unfair when the supplier’s own invoice is consistent with the dispatch and the shelter diary."
      ],
      "routeLabel": "The payment trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-check"
        }
      ]
    },
    "a-check": {
      "title": "A sum with an address",
      "location": "The council payment desk",
      "clues": [
        "refund"
      ],
      "body": [
        "The routing note separates the submission into sixty pounds for the supplier and twelve pounds for an “aid adjustment holding” account. The council’s account-register extract identifies the aid office as controller; the note is in Gerard’s hand and has no corresponding credit authorization. It is not a supplier price change or a second delivery.",
        "Vera can preserve the submitted packet, suspend payment, and clear Saff’s name without inventing a criminal verdict. The appropriate authority can then establish intent from the records and Gerard’s response. Your task is to make the supported finding precise."
      ],
      "routeLabel": "The payment trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "a-deduction"
        }
      ]
    },
    "a-deduction": {
      "title": "A report that adds up",
      "location": "The council review room",
      "body": [
        "The evidence ties one genuine ten-parcel movement to a larger payment claim certified after amendment. The excess was routed away from the supplier. Saff’s signature originated on the legitimate movement. Which action follows without claiming more than your documents prove?"
      ],
      "routeLabel": "The payment trail",
      "puzzle": {
        "prompt": "What finding is justified through the payment route?",
        "options": [
          {
            "id": "1",
            "label": "Saff stole two parcels because her signature appears on a copied receipt.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The supplier overcharged, although its original invoice is correct.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "Preserve the altered certified claim and routing note, halt the excess, and clear Saff’s disputed-delivery accusation.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Destroy the yellow copy now that the arithmetic is understood.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "a-ending"
      }
    },
    "a-ending": {
      "title": "The corrected account",
      "location": "The pharmacy collection room",
      "body": [
        "The council preserves the payment packet, stops the excess, and opens a formal review of the aid office’s submission. Its written notice clears Saff of accepting a twelve-parcel delivery. Gerard is required to explain the alteration and routing note with representation present, rather than face a rumor at the counter. Lucia pins the corrected parcel total beside the collection ledger, where volunteers can see it."
      ],
      "routeLabel": "The payment trail",
      "ending": {
        "title": "The claim corrected, the signer cleared",
        "body": [
          "Your route solved the financial discrepancy through provenance, sequence, and destination. The fund will reconcile its copies under a two-person checking rule; the surviving records remain available for the formal inquiry."
        ],
        "kind": "solved"
      }
    },
    "b-arrival": {
      "title": "Where the tray came back",
      "location": "The covered delivery yard",
      "meets": [
        "nolan"
      ],
      "clues": [
        "tray"
      ],
      "body": [
        "Nolan finds tray34 in the returns rack, still carrying the Monday white copy under a clear cover. Its numbered return seal matches the shelter caretaker’s entry. He lets you photograph the record in place and signs the inspection note. The tray carried ten parcels under W-418; no one at the yard recorded twelve.",
        "He also warns you against assuming that a missing Tuesday entry proves there was no delivery. Sometimes a driver brings back an incomplete sheet. If you want a stronger conclusion, compare the route with an independent limit on where the vehicle could have gone."
      ],
      "routeLabel": "The delivery trail",
      "setFlags": [
        "route-b"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-question"
        }
      ]
    },
    "b-question": {
      "title": "A road and a river",
      "location": "The yard dispatch map",
      "body": [
        "The Tuesday route sheet records the van at North Mill between 13:00 and17:00. The bridge authority closed the only vehicle crossing to the shelter from 12:30 until 18:00; the alternative footbridge cannot carry a van. A volunteer’s photograph shows the van at a northern stop at 14:10. Select the evidence that tests the alleged Tuesday return, not merely its paperwork."
      ],
      "routeLabel": "The delivery trail",
      "puzzle": {
        "prompt": "Which TWO independently supported facts contradict a Tuesday afternoon vehicle delivery to the shelter?",
        "options": [
          {
            "id": "1",
            "label": "The same vehicle was recorded on the northern route during the claimed interval.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "The only vehicle crossing was independently closed throughout that interval.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "A driver sometimes forgets a signature.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "Nolan dislikes the treasurer’s handwriting.",
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
      "title": "An absent delivery, independently checked",
      "location": "The dispatch office",
      "clues": [
        "route"
      ],
      "body": [
        "The timed northern route and the independent crossing closure make the alleged vehicle delivery impossible within the claimed afternoon. This is stronger than an omitted signature: it tests the movement against a physical restriction. Nolan writes down the normal crossing route and attaches the bridge authority’s notice.",
        "The contradiction points back toward the office copies. It does not tell you who held the pad when a date was added. Saff comes with you to look at the original stub, while Lucia asks Gerard to keep the pad intact until the review."
      ],
      "routeLabel": "The delivery trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-check"
        }
      ]
    },
    "b-check": {
      "title": "Paper remembers pressure",
      "location": "The aid office counter",
      "clues": [
        "carbon"
      ],
      "body": [
        "With everybody present, you compare the yellow copy’s torn edge to the Monday pad stub. They match. The date and extra count on the yellow copy made no impression on the retained blue sheet, though Saff’s original signature did. The office clerk who prepared the pad confirms that the carbon was removed before the date was added.",
        "This shows that the disputed document was completed after the genuine signing, not that Saff stood at the counter on Tuesday. Gerard admits adding the later date “to tidy the week,” but the review must determine why the count also changed."
      ],
      "routeLabel": "The delivery trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this line of inquiry",
          "to": "b-deduction"
        }
      ]
    },
    "b-deduction": {
      "title": "What traveled, and what did not",
      "location": "The shelter committee table",
      "body": [
        "Your route has established a genuine Monday movement and independently excluded the alleged Tuesday vehicle delivery. The pad comparison separates the original signature from the later entries. You have not audited the payment destination. Choose a conclusion strong enough to clear the volunteer without pretending you followed the money."
      ],
      "routeLabel": "The delivery trail",
      "puzzle": {
        "prompt": "What can the delivery route responsibly establish?",
        "options": [
          {
            "id": "1",
            "label": "The copied signature proves Saff accepted twelve parcels on Tuesday.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "2",
            "label": "Saff signed a genuine Monday delivery; the later Tuesday quantity was added separately, and a payment review is still needed.",
            "correct": true,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "3",
            "label": "There can be no financial issue because the physical parcels were found.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          },
          {
            "id": "4",
            "label": "All receipts are useless unless every witness remembers every minute.",
            "correct": false,
            "feedback": "That explanation leaves an observation unaccounted for. Re-read the dated records and separate what was observed from what was assumed."
          }
        ],
        "correctTo": "b-ending"
      }
    },
    "b-ending": {
      "title": "Ten parcels, two witnesses",
      "location": "The winter shelter kitchen",
      "body": [
        "The committee corrects its delivery record to ten parcels on Monday and withdraws the accusation against Saff. It preserves the pad and refers the altered claim for a separate accounts review. Nolan introduces a rule that quantity and date must be completed before anyone signs. Saff returns to the kitchen carrying a new donation box, with every field filled in while the caretaker watches."
      ],
      "routeLabel": "The delivery trail",
      "ending": {
        "title": "The movement reconstructed",
        "body": [
          "You solved the accusation through physical custody and independent geography. The financial inquiry will follow the money, but Saff no longer has to prove where a signature went after it left her hand."
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
          "id": "take-a"
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
          "id": "3"
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
          "id": "take-b"
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
        }
      ]
    }
  ]
};
