export default {
  "id": "midnight-ferry",
  "title": "The Midnight Ferry",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "Brindle Quay’s last ferry crossing on the final night of October",
  "description": "Eight passengers step ashore, but the gate records nine—and a ticket carries tomorrow’s date. Follow the night crew across the decks or trace the strange name through the waterfront records.",
  "revision": 2,
  "flags": [
    "deck-route",
    "ledger-route"
  ],
  "characters": [
    {
      "id": "nia",
      "name": "Nia Quill",
      "role": "Ferry supervisor",
      "description": "Counts people with a pencil as well as a screen, and keeps the two results separate until they agree.",
      "color": "#93a6a4"
    },
    {
      "id": "emil",
      "name": "Emil Frost",
      "role": "Dock engineer",
      "description": "Draws a mechanism before deciding what its display ought to mean.",
      "color": "#bc977b"
    },
    {
      "id": "june",
      "name": "June Ames",
      "role": "Night ticket clerk",
      "description": "Works from two clocks and dislikes receipts that fail to say which one they use.",
      "color": "#aa94af"
    },
    {
      "id": "ellis",
      "name": "Ellis Reed",
      "role": "Waterfront archivist",
      "description": "Has inherited enough ledgers to know that the same heading can mean two different things.",
      "color": "#a5aa7b"
    }
  ],
  "clues": [
    {
      "id": "two-counts",
      "title": "The counts that disagree",
      "description": "Nia and the landing attendant count eight passengers. The electronic gate registers nine closure pulses. Its displayed heading reads BOARDINGS, not independently identified people."
    },
    {
      "id": "future-ticket",
      "title": "The dated ticket stub",
      "description": "A loose stub reads ROWAN BELL, quantity 1, issued 00:20 Z on Nov 1. Nia’s checked local clock reads 23:20 onOct 31 when the last boat ties up."
    },
    {
      "id": "deck-1-observation",
      "title": "The gate specification",
      "description": "The counter adds beam-clear/latch-close events and has no way to identify people."
    },
    {
      "id": "deck-1-document",
      "title": "The supervised test and actual transfer",
      "description": "A trolley adds one pulse in the control test; the trip camera and crew note independently record one separately gated trolley after eight passengers."
    },
    {
      "id": "deck-1-deduction",
      "title": "The supported ninth pulse",
      "description": "Eight people and one trolley explain nine gate events without requiring a ninth person or declaring every electronic count meaningless."
    },
    {
      "id": "deck-2-observation",
      "title": "The time-reference rule",
      "description": "Brindle uses UTC-minus-one. The printer’s Z suffix is UTC, so 00:20 ZNov 1 equals 23:20 localOct 31."
    },
    {
      "id": "deck-2-document",
      "title": "The matched freight transaction",
      "description": "SerialF-318 matches the trolley tag and a night-freight service named ROWAN BELL; quantity 1 describes an item, not an identified passenger."
    },
    {
      "id": "deck-2-deduction",
      "title": "The corrected operational account",
      "description": "The gate, freight receipt, and passenger headcount describe different categories of one documented transfer."
    },
    {
      "id": "ledger-1-observation",
      "title": "The receipt category",
      "description": "F-318 belongs to the night-freight serial sequence; passenger bookings useP. Both paper layouts inherited the same misleading heading."
    },
    {
      "id": "ledger-1-document",
      "title": "The current service definition",
      "description": "The current contract identifies ROWAN BELL as a freight route with a six-unit charge per sealed item; the manifest records one controller."
    },
    {
      "id": "ledger-1-deduction",
      "title": "The booking’s supported category",
      "description": "Serial, manifest, and current contract establish one freight transaction; the historical ledger explains the name but is not its current authority."
    },
    {
      "id": "ledger-2-observation",
      "title": "The settlement entries",
      "description": "One six-unit charge is followed by zero-value print and duplicate entries. Matching serials connect all paper versions to one item."
    },
    {
      "id": "ledger-2-document",
      "title": "The time rule and sourced gate report",
      "description": "UTC-minus-one converts the receipt date. Emil’s independently documented control test and trip records explain one trolley pulse after eight people."
    },
    {
      "id": "ledger-2-deduction",
      "title": "One event through several records",
      "description": "The booking, settlement, prints, time reference, and physical transfer agree when their categories are retained rather than collapsed."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "One more than the people on the quay",
      "location": "The last-ferry landing",
      "body": [
        "Nia Quill waits until the ferry is secured before asking you to look at the gate display. Eight passengers have come ashore. She counted them, and so did the attendant at the other end of the gangway. The electronic total is nine. A rumor has already reached the night cafe: someone boarded who never stepped off.",
        "Then June brings a loose ticket stub from beneath the counter. It carries the words ROWAN BELL and a date that appears to belong to tomorrow. The last ferry had no booking made in that name on the ordinary passenger list. Nia has checked the accessible cabin and the passenger areas with the crew; this is not a reason for anyone to wander into a dark engine space.",
        "The gate records an event of some kind. The paper records a name, a quantity, and a time reference somebody has failed to explain. Nia wants those things investigated before a story about an extra passenger becomes the waterfront’s only record of the night."
      ],
      "meets": [
        "nia"
      ],
      "clues": [
        "two-counts",
        "future-ticket"
      ],
      "choices": [
        {
          "id": "begin",
          "label": "Decide what the first discrepancy actually establishes",
          "to": "first-question"
        }
      ]
    },
    "first-question": {
      "title": "What exactly was counted?",
      "location": "The landing supervisor’s desk",
      "body": [
        "Two direct headcounts and a mechanical total disagree. The equipment may be wrong, the headcounts may be incomplete, or the equipment may be counting a different kind of event. Your first statement should keep those possibilities distinguishable."
      ],
      "puzzle": {
        "prompt": "Which opening claim is justified by the available evidence?",
        "correctTo": "routes",
        "options": [
          {
            "id": "distinguish",
            "label": "Eight people were independently counted; the gate logged nine pulses whose relationship to people must be tested.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "ghost",
            "label": "The screen establishes a ninth person regardless of what its sensor actually measures.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "erase",
            "label": "Both headcounts must be discarded because electronics cannot count another kind of event.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "time",
            "label": "An unexplained date by itself proves that a passenger traveled from tomorrow.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ]
      }
    },
    "routes": {
      "title": "The boat or the waterfront’s memory",
      "location": "The covered landing",
      "body": [
        "Emil can show you the gate mechanism, the deck service record, and the quay’s two clock references. June can open the ticket accounts and introduce Ellis, who keeps the old waterfront service names. Nia assigns the unchosen task to the other team so that the ferry can resume ordinary work after the checks.",
        "The deck route asks what physical event produced each pulse and how the ticket’s time was printed. The records route asks what kind of transaction produced the paper and why a supposed passenger’s name appears outside the passenger list. The two routes will clear the same night by different evidence. Neither needs an invented stranger to make a good explanation."
      ],
      "choices": [
        {
          "id": "deck",
          "label": "Join Emil for a supervised inspection of deck and gate",
          "to": "deck-1",
          "excludesFlags": [
            "ledger-route"
          ]
        },
        {
          "id": "ledger",
          "label": "Join June in the ticket office and waterfront archive",
          "to": "ledger-1",
          "excludesFlags": [
            "deck-route"
          ]
        }
      ]
    },
    "deck-1": {
      "title": "Nine closures, eight walkers",
      "location": "The supervised gangway gate",
      "body": [
        "Emil’s diagram gives the gate a modest job: each time the beam clears and the latch closes, a pulse is added. It has no face reader and does not know whether the object passing through is a person, a case, or a small service trolley. That limitation is written in the installer’s manual, though the large public display uses the friendlier word boardings.",
        "The departure camera shows eight people and a low trolley carrying a sealed canvas case. A crew member sends the trolley through the gate separately, then walks around the staffed service hinge. The trolley clears the beam and the latch closes after it. Emil has not yet asked you to trust the camera as proof of every movement; he wants a supervised empty-gate test first."
      ],
      "routeLabel": "The deck investigation",
      "clues": [
        "deck-1-observation"
      ],
      "meets": [
        "emil"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "deck-1-record"
        }
      ],
      "setFlags": [
        "deck-route"
      ]
    },
    "deck-1-record": {
      "title": "A control run before a conclusion",
      "location": "The landing test area",
      "body": [
        "With the boat unloaded, Emil records the display at 42 and obtains permission for a test. A person walks through and the total becomes 43. The person remains outside. An empty service trolley is rolled through by the staffed side and the total becomes 44. Opening and closing the service hinge without crossing the beam does not change the total.",
        "The night camera independently shows the sealed case’s trolley crossing after the eighth passenger. Its clock reference has been checked against the landing log; the crew service note records the same transfer. The tests do not prove a screen can never malfunction. They establish a mechanism that predicts this extra pulse and is independently observed on the relevant trip.",
        "Nia asks which two findings should replace the exciting but unsupported phrase “one extra traveler.”"
      ],
      "routeLabel": "The deck investigation",
      "clues": [
        "deck-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "deck-1-question",
          "requires": [
            "deck-1-observation",
            "deck-1-document"
          ]
        }
      ]
    },
    "deck-1-question": {
      "title": "A question worth getting right",
      "location": "The landing test area",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The deck investigation",
      "puzzle": {
        "prompt": "Which two findings explain the extra total without inventing an unseen person?",
        "options": [
          {
            "id": "sensor",
            "label": "The supervised test shows that a trolley can produce the same closure pulse as a person.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "trip",
            "label": "Camera and service records place one separately gated trolley after the eight passengers on this trip.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "name",
            "label": "An unfamiliar printed name necessarily belongs to an unlisted passenger.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "universal",
            "label": "One successful test establishes that the gate can never have any other fault.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "deck-1-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "deck-1-finding": {
      "title": "A finding you can defend",
      "location": "The landing test area",
      "body": [
        "The ninth pulse has a supported physical source. Nia records both the eight-person count and the nine-pulse equipment total, explaining why neither figure needs to be erased. Emil recommends relabeling the display to gate cycles until its software can distinguish authorized freight transfers.",
        "The trolley is still sealed at the baggage desk. Its case tag matches the loose stub’s serial, but the meaning of ROWAN BELL and the strange issue date remains to be checked. Solving the count should not make every other question vanish."
      ],
      "routeLabel": "The deck investigation",
      "clues": [
        "deck-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "deck-1-next"
        }
      ]
    },
    "deck-1-next": {
      "title": "The investigation moves forward",
      "location": "The supervised gangway gate",
      "body": [
        "June joins you at the night-duty clock board. A clock above the gangway shows local harbor time; the ticket printer uses another reference to reconcile overnight freight transactions with the regional office. The stub’s small Z is printed clearly enough to have been read at the beginning, but nobody had yet supplied its key.",
        "The next test will use the declared offset, not a guess about when midnight usually feels as if it ought to happen. Emil carries the trolley tag to the board so the timestamp, serial, and physical transfer can be compared in the same place."
      ],
      "routeLabel": "The deck investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "deck-2",
          "requires": [
            "deck-1-deduction"
          ]
        }
      ]
    },
    "deck-2": {
      "title": "A date in a different reference",
      "location": "The night-duty clock board",
      "body": [
        "The harbor board states that Brindle Quay uses UTC-minus-one all year. The printer’s Z suffix means UTC. June’s operations sheet specifies that a 00:20 Zissue time belongs at 23:20 local on the previous calendar date. The printer is not forecasting tomorrow; it is recording the same event on the regional reference used for overnight freight.",
        "A supervised test at local 23:46 prints 00:46 Z with the following day’s date. The difference remains exactly one hour. The original trolley tag carries serialF-318; the loose stub has the same serial. In the printer’s layout key, F denotes freight service and quantity 1 means one item. An old heading above the name field still says PASSENGER, because the night-freight template inherited the daylight ticket layout."
      ],
      "routeLabel": "The deck investigation",
      "clues": [
        "deck-2-observation"
      ],
      "meets": [
        "june"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "deck-2-record"
        }
      ]
    },
    "deck-2-record": {
      "title": "The name that belongs to a service",
      "location": "The sealed-baggage desk",
      "body": [
        "June opens the current service register. ROWAN BELL is the contracted night-freight route, named after two former ferry boats. Its booking line is separate from passenger names. The sealed case is a replacement pump controller addressed to the west landing, released to the authorized maintenance courier at 23:25. The courier signs the serial, not a claim to be a traveler called Rowan.",
        "The count, the paper, and the cargo now have a common account. A separately gated case created one pulse. Its freight receipt used UTC and a service-name field beneath a misleading old heading. None of those explanations depends on another one merely being comforting: each has a specification, a relevant record, and a control or physical match.",
        "Nia asks you to decide the operational correction. Removing an honest freight transfer from every record would conceal what happened; preserving it under correct categories should make tomorrow’s duty easier."
      ],
      "routeLabel": "The deck investigation",
      "clues": [
        "deck-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "deck-2-question",
          "requires": [
            "deck-2-observation",
            "deck-2-document"
          ]
        }
      ]
    },
    "deck-2-question": {
      "title": "A question worth getting right",
      "location": "The sealed-baggage desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The deck investigation",
      "puzzle": {
        "prompt": "Which complete explanation should the landing record retain?",
        "options": [
          {
            "id": "combined",
            "label": "Record eight passengers plus one separately gated freight trolley;F-318 uses a named freight service and UTC, equivalent to 23:20 local onOct 31.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "missing",
            "label": "Describe a missing passenger called Rowan Bell because the inherited heading says passenger.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "tomorrow",
            "label": "TreatNov 1 UTC as a future local departure without applying the stated offset.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "delete",
            "label": "Delete the trolley’s transaction so every system displays eight.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "deck-2-finding"
      }
    },
    "deck-2-finding": {
      "title": "A finding you can defend",
      "location": "The sealed-baggage desk",
      "body": [
        "The record keeps the freight transfer and its proper reference. Nia adds a note explaining the gate total, while June replaces the misleading template heading in the authorized settings. The change is photographed before and after, so a later auditor will understand why yesterday’s form looks different.",
        "Emil takes the counter recommendation to the maintenance office. He does not promise software before the morning ferry. For now the temporary label says GATE CYCLES and staff keep the separate passenger count. It is a practical correction that admits exactly what the mechanism can measure."
      ],
      "routeLabel": "The deck investigation",
      "clues": [
        "deck-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "deck-2-next"
        }
      ]
    },
    "deck-2-next": {
      "title": "The investigation moves forward",
      "location": "The night-duty clock board",
      "body": [
        "At the west-landing baggage hatch, the maintenance courier confirms receipt of the controller. Its journey is ordinary enough to disappoint the cafe’s most enthusiastic storyteller, until the courier explains that the part will keep the early accessible lift running. An ordinary transfer can matter without turning into a ghost story.",
        "You help Nia put the corrected public note on the covered landing. It gives the verified counts and explains the time reference without naming a passenger who never existed. The next boat’s lights move across the black water, and the gate has one less kind of mystery to invent."
      ],
      "routeLabel": "The deck investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "deck-ending",
          "requires": [
            "deck-2-deduction"
          ]
        }
      ]
    },
    "deck-ending": {
      "title": "A number that means what it says",
      "location": "The covered landing",
      "body": [
        "Nia counts the early crew as they arrive and Emil watches the gate’s plainly labeled cycle counter. The two totals need not be identical to be honest. June leaves the corrected reference sheet beside the ticket printer rather than trusting the night staff to remember a lecture about clocks.",
        "Your deck route followed a mechanical event into a real freight transfer, then translated its date and service name. The night’s mystery ends with a working lift at the far landing and a record that can be read by somebody who was not here to hear the rumor."
      ],
      "ending": {
        "title": "Case closed: the event behind the number",
        "body": [
          "A supervised sensor test and matched cargo records explained the apparent extra traveler. You kept the transfer visible while correcting the categories, time reference, and misleading template."
        ],
        "kind": "solved"
      }
    },
    "ledger-1": {
      "title": "The same heading, a different book",
      "location": "The night ticket office",
      "body": [
        "June shows you the daylight passenger ledger and the separate night-freight book. The loose stub’s serial isF-318; daylight passenger serials beginP. Both printers use paper headed PASSENGER because the freight layout was copied from an older template. The inherited word is a mistake, but the serial system and the relevant ledger remain distinguishable.",
        "The line forF-318 records ROWAN BELL, quantity 1, charge 6, destination WEST MAINTENANCE. The passenger list has eightP-serial bookings and no entry in that name. June will not let you fix the apparent discrepancy by copying a freight line into the passenger list. You need to establish what the unfamiliar words describe."
      ],
      "routeLabel": "The waterfront-records route",
      "clues": [
        "ledger-1-observation"
      ],
      "meets": [
        "june",
        "ellis"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "ledger-1-record"
        }
      ],
      "setFlags": [
        "ledger-route"
      ]
    },
    "ledger-1-record": {
      "title": "Names older than the current template",
      "location": "The waterfront archive reading room",
      "body": [
        "Ellis Reed brings a current service contract and a much older route ledger. ROWAN and BELL were two ferry boats; ROWAN BELL became the name of the combined overnight freight service. The current contract keeps that exact service name and specifies a six-unit charge per sealed equipment item, not per escort passenger.",
        "The courier manifest lists one sealed pump controller againstF-318. Its destination, service charge, and serial agree with the freight book. An ordinary passenger fare is four units, and the contract does not allow a six-unit payment to be used as proof that an extra person boarded. The old route ledger explains the name’s history; the current contract establishes its present operational meaning.",
        "Ellis asks you to choose the two sources that establish this transaction’s category without mistaking historical charm for current authority."
      ],
      "routeLabel": "The waterfront-records route",
      "clues": [
        "ledger-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "ledger-1-question",
          "requires": [
            "ledger-1-observation",
            "ledger-1-document"
          ]
        }
      ]
    },
    "ledger-1-question": {
      "title": "A question worth getting right",
      "location": "The waterfront archive reading room",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The waterfront-records route",
      "puzzle": {
        "prompt": "Which two pieces of evidence identifyF-318 as a freight booking rather than an unknown passenger?",
        "options": [
          {
            "id": "serial",
            "label": "TheF-serial matches the separate freight ledger and courier manifest for one sealed equipment item.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "contract",
            "label": "The current contract defines ROWAN BELL as a freight service and its six-unit item charge.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "heading",
            "label": "The inherited paper heading overrides every current serial and contract field.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "history",
            "label": "An old boat’s name alone establishes what every modern transaction in similar words must mean.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "ledger-1-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "ledger-1-finding": {
      "title": "A finding you can defend",
      "location": "The waterfront archive reading room",
      "body": [
        "You enter the stub in the freight account without creating a ninth passenger. The old ledger explains why the service name sounds like a person; the current records explain what was actually bought tonight. Those are different questions, and both deserve their own source.",
        "June finds a second receipt markedF-318 DUPLICATEand asks whether it means two freight items. Before accepting the reassuring one-item story, you will have to trace the values across both receipts. The records route is about to test its own preferred explanation rather than stop once it has a plausible name."
      ],
      "routeLabel": "The waterfront-records route",
      "clues": [
        "ledger-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "ledger-1-next"
        }
      ]
    },
    "ledger-1-next": {
      "title": "The investigation moves forward",
      "location": "The night ticket office",
      "body": [
        "The waterfront cashier keeps the original settlement journal in a locked counter near the post office. Ellis walks you there under the same awning that connects the archive and ticket office. A screen displays tomorrow’s date, though the clock over the quay remains on the last hour of October.",
        "You have two apparent duplications to examine: two pieces of paper and two calendar dates. It would be easy to blame the whole night on a malfunction. A better account must establish whether each difference follows a documented rule or hides an additional transaction."
      ],
      "routeLabel": "The waterfront-records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "ledger-2",
          "requires": [
            "ledger-1-deduction"
          ]
        }
      ]
    },
    "ledger-2": {
      "title": "Two receipts, one settlement",
      "location": "The waterfront cashier’s counter",
      "body": [
        "The settlement journal listsF-318 CHARGE 6, F-318 PRINT 0, andF-318 DUPLICATE 0. The first paper has a torn lower edge; the cashier reprinted it because the destination was illegible. The duplicate is marked unpaid copy. The six-unit charge appears once in the payment settlement, with the same item serial as the baggage tag.",
        "The date column uses UTC and prints theZsuffix on receipts. The local harbor follows UTC-minus-one throughout the year. Thus a settlement issued 00:20 Z on Nov 1 belongs at local 23:20 onOct 31. The current contract explicitly uses UTC for nightly reconciliation, so a date change at that boundary is expected. It does not create another service or another passenger."
      ],
      "routeLabel": "The waterfront-records route",
      "clues": [
        "ledger-2-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "ledger-2-record"
        }
      ]
    },
    "ledger-2-record": {
      "title": "The evidence the other team can actually supply",
      "location": "The landing supervisor’s desk",
      "body": [
        "Nia brings a sourced report from Emil’s supervised gate test. A person and a separately rolled trolley each produce one beam-clear/latch-close pulse. The trip camera and crew transfer note show the freight trolley passing after the eight passengers. Your route did not conduct that test; its signed record identifies who did, when, and with what control count.",
        "The cargo serialF-318 ties the physical trolley to the single settled charge. Its authorized recipient has signed for the pump controller at the west landing. The second paper is a documented reprint and the later date is a documented time reference. Neither is a second cargo event.",
        "Nia wants a public explanation short enough for the waiting passengers and a corrected paper trail detailed enough for next month’s reconciliation. The two audiences do not require two different truths. They require the same sources, with the levels of detail appropriate to each purpose."
      ],
      "routeLabel": "The waterfront-records route",
      "clues": [
        "ledger-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "ledger-2-question",
          "requires": [
            "ledger-2-observation",
            "ledger-2-document"
          ]
        }
      ]
    },
    "ledger-2-question": {
      "title": "A question worth getting right",
      "location": "The landing supervisor’s desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The waterfront-records route",
      "puzzle": {
        "prompt": "Which complete settlement account survives both apparent duplications?",
        "options": [
          {
            "id": "single",
            "label": "One six-unit freight charge produced a damaged print and unpaid duplicate;UTC 00:20 Nov 1 equals local 23:20 Oct 31, and the matching trolley explains the ninth pulse.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "twice",
            "label": "Two printed receipts establish two paid items regardless of their zero-value print entries.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "future",
            "label": "The UTC date is evidence of a future local voyage even though the offset is specified.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "person",
            "label": "An extra gate pulse overrides the freight serial and independently identifies a ninth passenger.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "ledger-2-finding"
      }
    },
    "ledger-2-finding": {
      "title": "A finding you can defend",
      "location": "The landing supervisor’s desk",
      "body": [
        "The payment settlement remains one charge. June files both paper versions with their zero-value print entries so a later reader can follow why there are two sheets. Ellis adds the current contract reference beside the old route-name explanation rather than allowing the more romantic old ledger to stand in for every part of the account.",
        "The public note names eight passengers and one freight trolley, explains theUTCreference in one sentence, and leaves personal passenger data out. Nia is content to let the cafe keep a story about a strange night, provided its noticeboard keeps the verifiable account beside it."
      ],
      "routeLabel": "The waterfront-records route",
      "clues": [
        "ledger-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "ledger-2-next"
        }
      ]
    },
    "ledger-2-next": {
      "title": "The investigation moves forward",
      "location": "The waterfront cashier’s counter",
      "body": [
        "You deliver the corrected layout to the night office under June’s supervision. The form will say SERVICEforF-serials andPASSENGERforP-serials; the date line will sayUTCexplicitly besideZ. These are small changes, but each removes a category someone had to reconstruct tonight from a different book.",
        "At the west landing, the controller is fitted by the authorized maintenance crew. The early accessible lift works when the first commuter needs it. You return Ellis’s old route ledger to its box. The boats named Rowan and Bell can keep their history without being recruited as a missing person every time the printer changes its date."
      ],
      "routeLabel": "The waterfront-records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "ledger-ending",
          "requires": [
            "ledger-2-deduction"
          ]
        }
      ]
    },
    "ledger-ending": {
      "title": "The names stay in the right book",
      "location": "The night ticket office",
      "body": [
        "June places the two old forms in a training sleeve labeled with a simple question: “What does this field mean in this book?” The next clerk will not need to know which rumor led to the correction. They will have the service definition, the serial key, and a settlement example that explains the duplicate.",
        "Your records route has turned a supposed future passenger into a documented present freight transfer without erasing the confusing papers. Nia waves from the landing as the morning ferry fills. This time the sign distinguishes people from gate cycles before anyone has to count twice."
      ],
      "ending": {
        "title": "Case closed: the voyage inside the paperwork",
        "body": [
          "You followed a service name through a current contract, matched one freight payment across duplicate prints, translated its date, and connected the papers to a sourced physical transfer report. The repair leaves both the public explanation and the accounts usable."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "deck-and-clock-method",
      "actions": [
        {
          "type": "choice",
          "id": "begin"
        },
        {
          "type": "answer",
          "id": "distinguish"
        },
        {
          "type": "choice",
          "id": "deck"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "sensor",
            "trip"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "combined"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    },
    {
      "id": "contract-and-settlement-method",
      "actions": [
        {
          "type": "choice",
          "id": "begin"
        },
        {
          "type": "answer",
          "id": "distinguish"
        },
        {
          "type": "choice",
          "id": "ledger"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": [
            "serial",
            "contract"
          ]
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "examine"
        },
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "single"
        },
        {
          "type": "choice",
          "id": "record"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    }
  ]
};
