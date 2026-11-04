/** Original case; answer keys and route proofs are never projected into the reading interface. */
export default {
  "id": "observatory",
  "title": "The Observatory’s Missing Minute",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "A hilltop observatory during a public clock demonstration",
  "description": "An observatory’s public signal seems to arrive before it is sent. Follow the electrical route through the hill or reconstruct the records in the transit room.",
  "revision": 2,
  "flags": [
    "cables",
    "records"
  ],
  "characters": [
    {
      "id": "nina",
      "name": "Nina Grey",
      "role": "Observatory director",
      "description": "Explains measurements in ordinary language and expects the same care in return.",
      "color": "#8c96b0"
    },
    {
      "id": "eli",
      "name": "Eli Rowe",
      "role": "Signal technician",
      "description": "Draws cable runs on the backs of weather forms.",
      "color": "#ad956e"
    },
    {
      "id": "rose",
      "name": "Rose Venn",
      "role": "Transit observer",
      "description": "Marks the instant she sees a star rather than the instant someone expects it.",
      "color": "#92a08c"
    },
    {
      "id": "sam",
      "name": "Sam Ellis",
      "role": "Town clock keeper",
      "description": "Maintains the public clock without claiming it never drifts.",
      "color": "#aa8e9d"
    }
  ],
  "clues": [
    {
      "id": "obc-input",
      "title": "Two readings at one switch press",
      "description": "The calibrated input recorder reads 12:00:00 when the unchecked gallery clock reads 11:59:00."
    },
    {
      "id": "obc-junction",
      "title": "A calibrated downstream interval",
      "description": "The same pulse reaches the synchronized junction recorder at 12:00:02, two seconds after the input mark."
    },
    {
      "id": "obc-branch",
      "title": "The active route",
      "description": "The live branch reaches the town test socket at 12:00:04; the disconnected fog-bell wire carries no demonstration pulse."
    },
    {
      "id": "obc-flash",
      "title": "The town display’s event",
      "description": "The calibrated controller flashes at 12:00:05 after the 12:00:04 socket input; its public face is correctly synchronized."
    },
    {
      "id": "obc-lag",
      "title": "A directly measured minute lag",
      "description": "At reference 12:20 the gallery face reads 12:19; its minute hand was reseated without a documented calibration."
    },
    {
      "id": "obc-repeat",
      "title": "The controlled repeat",
      "description": "A second test reproduces the five-second forward signal sequence; the corrected gallery face now agrees with the reference."
    },
    {
      "id": "obc-wording",
      "title": "A reproducible public explanation",
      "description": "The video shows a lagging gallery face; calibrated instruments independently establish a five-second forward signal path."
    },
    {
      "id": "obr-transit",
      "title": "An independent observation clock",
      "description": "The signed transit entry agrees with the supplied reference value at 11:58:30, verifying the observation clock for this session."
    },
    {
      "id": "obr-slip",
      "title": "Two clock fields for one event",
      "description": "The contemporaneous switch slip records observation 12:00:00 and gallery 11:59:00 in separately labeled fields."
    },
    {
      "id": "obr-telegram",
      "title": "An event report, not its envelope time",
      "description": "The calibrated controller report records input 12:00:04 and flash 12:00:05; the envelope’s 12:03 stamp is later handling."
    },
    {
      "id": "obr-components",
      "title": "The event intervals reconcile",
      "description": "The synchronized switch is 12:00:00, town input 12:00:04, and flash 12:00:05: four seconds plus one equals five."
    },
    {
      "id": "obr-categories",
      "title": "Three kinds of time",
      "description": "The 11:57 access note is a schedule, calibrated strips record events, and the 12:03 envelope stamp records document handling."
    },
    {
      "id": "obr-timeline",
      "title": "The supported documentary timeline",
      "description": "The checked observation clock proves the gallery lag; the independently calibrated switch and town reports establish a five-second forward signal."
    },
    {
      "id": "obr-card",
      "title": "A checkable public timeline",
      "description": "The visitor card names each instrument and separates event measurements from schedules and document-handling stamps."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A signal before its switch",
      "location": "The public gallery",
      "body": [
        "The observatory’s demonstration has gone wrong in a very precise way. The town display flashed its noon signal while the gallery clock still showed 11:59. Visitors began filming, and someone called it a message arriving before it was sent. Nina has paused the demonstration, not the clocks. She wants an explanation of the discrepancy before the next public session. You may inspect either the signal equipment or the independent observation records. Nobody needs to know astronomy in advance: the observatory’s guides explain what each instrument measures and which clock a particular record uses."
      ],
      "meets": [
        "nina"
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
      "title": "One event, several clocks",
      "location": "The director’s desk",
      "body": [
        "Nina gives you three definitions. An observation clock times an event against the sky; a gallery clock is a visitor display; a signal recorder logs electrical pulses at its own input. “Noon” on a sign is a label unless a clock’s calibration is known. The demonstration used a manual switch and a line to the town display, so any extraordinary explanation must first survive ordinary timing checks. The equipment inspection window overlaps the transit-record appointment. Choose one route to completion, and keep the distinction between an event and its displayed time visible in every note."
      ],
      "meets": [
        "eli"
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
      "title": "Choose a chain of comparison",
      "location": "The stair landing",
      "body": [
        "Eli offers a walk down the cable route to a junction shelter and the town clock. Rose can instead guide you through the transit notebook and independent timing slips. The electrical path tests which pulse traveled where; the records path tests what each written time actually means. Both end with a reproducible explanation of the public demonstration. They will introduce different witnesses and verification steps, because a correct conclusion can be reached by tracing a mechanism or by comparing independent measurements."
      ],
      "meets": [],
      "choices": [
        {
          "id": "cables",
          "label": "Trace the signal through the hill",
          "to": "cables-0",
          "excludesFlags": [
            "records"
          ]
        },
        {
          "id": "records",
          "label": "Reconstruct the independent timing records",
          "to": "records-0",
          "excludesFlags": [
            "cables"
          ]
        }
      ]
    },
    "cables-0": {
      "title": "The switch is not the clock",
      "location": "The signal cabinet",
      "body": [
        "Eli shows the manual switch beside a strip-chart recorder. Its input trace has a mark at 12:00:00 on the recorder’s calibrated scale. A separate camera of the gallery clock shows 11:59:00 at that same physical switch press. The calibration card, checked before opening, states the recorder agrees with the reference source within one second. Nobody has checked the gallery display that day. The two times describe the same act through different clocks. Before looking for a fast signal, establish whether the apparently early minute exists inside the comparison you are making."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [
        "eli"
      ],
      "setFlags": [
        "cables"
      ],
      "clues": [
        "obc-input"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "cables-1",
          "requires": []
        }
      ]
    },
    "cables-1": {
      "title": "The delay built into the line",
      "location": "The junction shelter",
      "body": [
        "At the junction shelter, a second strip marks the received test pulse at 12:00:02. Its calibration was checked against the same reference source as the input recorder. Eli’s guide states that a downstream pulse cannot be compared to a display clock unless both are synchronized; here the two strip recorders are. The interval from cabinet to junction is therefore two seconds forward. A scratched label saying “one minute” belongs to an old heating relay no longer connected to the signal line. Read the present wiring diagram, not the nearest interesting inscription."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "clues": [
        "obc-junction"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "cables-2",
          "requires": [
            "obc-input",
            "obc-junction"
          ]
        }
      ]
    },
    "cables-2": {
      "title": "Did anything travel backward?",
      "location": "The junction shelter bench",
      "body": [
        "Choose the conclusion supported by synchronized records. The unchecked gallery display may still be wrong, but that is a different proposition from an electrical pulse moving backward in time. A strong diagnosis identifies exactly which comparison is valid and which remains unverified. Do not let an old cabinet label outweigh a current input trace."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "puzzle": {
        "prompt": "What do the calibrated input and junction strips establish?",
        "options": [
          {
            "id": "forward",
            "label": "The pulse takes two seconds forward to the junction; the gallery face is not yet a valid comparison.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "backward",
            "label": "The pulse arrives a minute before the switch was pressed.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "relay",
            "label": "The scratched relay label proves a live one-minute delay.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "allwrong",
            "label": "Every clock must be inaccurate because two readings differ.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "cables-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "cables-0"
        }
      ]
    },
    "cables-3": {
      "title": "A branch no longer in use",
      "location": "The lower cable path",
      "body": [
        "The current diagram shows two outgoing lines: the live copper line to the town clock and a disconnected wire to the old fog bell. The live branch has a stamped connector number matching the junction log. You follow it to a test socket where the pulse reads 12:00:04 against a calibrated portable reference. The fog-bell wire carries no voltage at any point in the demonstration. This excludes a second earlier trigger on that branch, but does not yet tell you when the public display flashes. Eli keeps the distinction between a carried pulse and the display it controls on your route sketch."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "clues": [
        "obc-branch"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "cables-4",
          "requires": []
        }
      ]
    },
    "cables-4": {
      "title": "The display’s own record",
      "location": "The town clock room",
      "body": [
        "Sam opens the display controller. It records a flash at 12:00:05 against the portable reference. Its public face reads twelve because that face is synchronized each morning. The controller does not receive a secret earlier instruction; its single recorded input matches the cable socket’s pulse one second before the flash. Sam has kept the raw controller strip rather than a handwritten summary. The records now let you account for a total five-second forward sequence from switch to public flash, independently of the gallery’s decorative clock."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [
        "sam"
      ],
      "clues": [
        "obc-flash"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "cables-5",
          "requires": []
        }
      ]
    },
    "cables-5": {
      "title": "The clock above the audience",
      "location": "The public gallery",
      "body": [
        "Back at the observatory, Nina compares the gallery clock directly with the portable reference. At true 12:20 it reads 12:19, confirming a one-minute lag. Its minute hand had been reseated after cleaning, while the seconds mechanism kept ordinary time. The maintenance slip records that work but does not say the display was calibrated afterward. Eli asks you to keep the electrical investigation’s two strongest comparisons together. You have an independent forward signal chain and a direct measurement of the gallery lag; neither depends on the audience remembering the flash correctly."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "clues": [
        "obc-lag"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "cables-6",
          "requires": [
            "obc-flash",
            "obc-lag"
          ]
        }
      ]
    },
    "cables-6": {
      "title": "Select the comparisons that settle it",
      "location": "The gallery bench",
      "body": [
        "Choose the two observations that explain the apparent early arrival. One must establish the signal’s actual order using synchronized measurements. The other must establish the error in the clock the audience watched. The silent fog-bell wire helps rule out an alternative mechanism but cannot, by itself, explain a one-minute display difference. The scratched relay label is not connected evidence at all."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "puzzle": {
        "prompt": "Which two comparisons explain the apparent early arrival?",
        "options": [
          {
            "id": "chain",
            "label": "Synchronized instruments place the signal events in a five-second forward sequence.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "lag",
            "label": "A direct reference comparison shows the gallery face one minute slow.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "fog",
            "label": "A disconnected fog-bell wire carries no voltage.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "label",
            "label": "An old relay has a scratched one-minute label.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "cables-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "cables-4"
        }
      ]
    },
    "cables-7": {
      "title": "A demonstration can be repeated",
      "location": "The signal cabinet",
      "body": [
        "Nina authorizes a controlled repeat with the audience clock temporarily covered. The input recorder, junction strip, socket, and controller again produce zero, two, four, and five seconds relative to the reference. Sam watches the town display while Eli reads the cabinet strip over the radio. Repetition is useful here because the suspected cause predicts exactly the same forward sequence without needing another dramatic discrepancy. The gallery clock is then adjusted against the reference and its maintenance slip signed. You still need to decide how to describe the original event without implying that the adjustment changed the past."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "clues": [
        "obc-repeat"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "cables-8",
          "requires": []
        }
      ]
    },
    "cables-8": {
      "title": "The explanation beside the switch",
      "location": "The gallery noticeboard",
      "body": [
        "The original video will continue circulating. Nina wants a small card visitors can compare with what it shows: an apparently early flash against an unchecked local display. You can explain the error without calling the people who noticed it foolish. Their observation was real; the conclusion that the signal preceded its cause was the unsupported step. A useful account gives the clocks, their calibrations, and the measured interval, so another visitor could reconstruct the comparison rather than simply trust the director’s authority."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "clues": [
        "obc-wording"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "cables-9",
          "requires": [
            "obc-repeat",
            "obc-wording"
          ]
        }
      ]
    },
    "cables-9": {
      "title": "Explain the missing minute",
      "location": "The public gallery",
      "body": [
        "Choose the account supported by your entire route. It must preserve the audience’s real observation, distinguish an unchecked clock from calibrated recorders, and give the signal a measured direction and duration. A statement that merely says “the equipment was wrong” loses the central lesson: different instruments can be right about different things until their scales are compared properly."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "puzzle": {
        "prompt": "Which public explanation accurately resolves the event?",
        "options": [
          {
            "id": "calibrated",
            "label": "The gallery clock lagged a minute; independently calibrated records show a five-second forward signal.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "reverse",
            "label": "The display predicted the switch press and then time corrected itself.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "video",
            "label": "The audience video must have been fabricated because its clock looked wrong.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "secret",
            "label": "An unused fog-bell wire carried a secret advance message.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "cables-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "cables-7"
        }
      ]
    },
    "cables-10": {
      "title": "A clock returned to the present",
      "location": "The public gallery",
      "body": [
        "The next demonstration begins with a calibration check visitors can watch. The signal takes five seconds to reach the town display, just as the strips predict. The gallery clock now shows the same minute as the reference. Your route through the hill solved the apparent paradox by tracing actual hardware, finding a display lag, and repeating the mechanism under controlled conditions. Nina pins up the old maintenance slip beside the new one, with no trace of a claim that time itself needed repairing."
      ],
      "routeLabel": "Trace the signal through the hill",
      "meets": [],
      "ending": {
        "title": "Solved along the electrical route",
        "kind": "solved",
        "body": [
          "You followed the pulse through real locations and separated a clock’s reading from an event’s order. The extraordinary claim dissolved under ordinary measurements that anyone could repeat."
        ]
      }
    },
    "records-0": {
      "title": "The observation notebook",
      "location": "The transit room",
      "body": [
        "Rose’s notebook records a reference transit at 11:58:30 on the observation clock. A printed guide supplies the comparison value: the same transit should occur at reference 11:58:30 for that day’s demonstration. The agreement establishes that this clock was synchronized for the session; it does not certify every clock in the building. Rose wrote the star’s crossing when she saw it, then signed the page before the public switch was used. The contemporaneous entry is stronger than a later recollection of what the gallery face looked like."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [
        "rose"
      ],
      "setFlags": [
        "records"
      ],
      "clues": [
        "obr-transit"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "records-1",
          "requires": []
        }
      ]
    },
    "records-1": {
      "title": "A runner’s duplicate slip",
      "location": "The time desk",
      "body": [
        "A runner carried the switch event on a duplicate slip: observation clock 12:00:00, gallery face 11:59:00. The slip was stamped before the runner left the room. The form has separate labeled boxes for each clock, so the difference is not a copied digit in a single time field. Rose’s observation clock has already been independently checked. This establishes the gallery face’s lag without requiring you to inspect its gears or believe a later adjustment. Do not silently compare the label “noon” on the public sign with either box; use the named instruments."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "clues": [
        "obr-slip"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "records-2",
          "requires": [
            "obr-transit",
            "obr-slip"
          ]
        }
      ]
    },
    "records-2": {
      "title": "Which clock carries the comparison?",
      "location": "The transit room desk",
      "body": [
        "Choose the strongest inference from the observation and switch records. You are not deciding whether a bright flash looked early to a visitor; it did. You are deciding which clock has been independently verified and what its simultaneous comparison tells you about the gallery face. The supplied transit value makes this a documentary reasoning problem, not a test of astronomical knowledge."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "puzzle": {
        "prompt": "What does the checked observation clock and simultaneous slip establish?",
        "options": [
          {
            "id": "lag",
            "label": "At the switch press, the gallery face was one minute behind the independently checked clock.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "sky",
            "label": "The sky itself moved backward for one minute.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "all",
            "label": "Every clock in town is verified by the one transit record.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "sign",
            "label": "The word noon on a public sign overrides instrument measurements.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "records-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "records-0"
        }
      ]
    },
    "records-3": {
      "title": "The town’s telegram copy",
      "location": "The town records counter",
      "body": [
        "Sam has deposited a controller telegram with the town records counter. It lists receipt at 12:00:04 and flash at 12:00:05, with a reference calibration code printed before the event. The observatory’s copy of that code matches the one Rose used. The telegram was transmitted after the flash, so its arrival time at the counter is not the flash time. A clerk has written “received 12:03” on the envelope; that later administrative stamp tells you when the counter obtained the report. Separate the event times inside from the handling time outside."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [
        "sam"
      ],
      "clues": [
        "obr-telegram"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "records-4",
          "requires": []
        }
      ]
    },
    "records-4": {
      "title": "The manual switch log",
      "location": "The instrument records shelf",
      "body": [
        "The manual switch strip has an event at 12:00:00 against the same reference calibration code. Rose compares its paper edge to the duplicate slip, confirming both refer to the demonstration rather than a test earlier that morning. Between the strip and town report, the elapsed event time is five seconds forward. The page also lists a four-second cable transit and one-second controller response. Those component values agree with the total, giving you a second way to check the arithmetic. None of the documents needs the gallery clock to establish the event order."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "clues": [
        "obr-components"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "records-5",
          "requires": []
        }
      ]
    },
    "records-5": {
      "title": "A tempting but irrelevant stamp",
      "location": "The dispatch drawer",
      "body": [
        "The dispatch drawer holds an earlier unsigned note marked 11:57. It says the town display “will show noon at the demonstration,” a scheduled prediction, not a claim that the flash has already occurred. The clerk can identify its purpose from the form heading: arrangements for public access. Your case now contains three kinds of time: a scheduled plan, measured events, and later document handling. Confusing those categories could manufacture an apparent advance message even if every individual document were genuine. You sort them by what they record, rather than arranging every visible number into one unexplained line."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "clues": [
        "obr-categories"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "records-6",
          "requires": [
            "obr-components",
            "obr-categories"
          ]
        }
      ]
    },
    "records-6": {
      "title": "Build the event timeline",
      "location": "The records counter",
      "body": [
        "Select the two records that establish the signal’s actual forward interval. You need the calibrated switch event and the calibrated town event report. A schedule is not proof of an early flash, and the clerk’s later stamp cannot move an earlier event. The evidence should remain sufficient even if the gallery clock were removed from the building altogether."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "puzzle": {
        "prompt": "Which two records establish the actual signal interval?",
        "options": [
          {
            "id": "switch",
            "label": "The calibrated switch strip records 12:00:00.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "town",
            "label": "The calibrated town report records the flash at 12:00:05.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "schedule",
            "label": "The 11:57 access schedule predicts the demonstration.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "receipt",
            "label": "The envelope was stamped received at 12:03.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "records-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "records-4"
        }
      ]
    },
    "records-7": {
      "title": "The page that resolves the video",
      "location": "The director’s desk",
      "body": [
        "Rose lays the switch slip beside the town report. The video’s apparent minute now has an ordinary documentary explanation: the gallery face was one minute behind the independently verified observation clock. The signal itself took five seconds after the switch. Nina asks whether they need to demonstrate the error in public by repeating the fault. You suggest a simpler archival resolution: preserve the original records, correct the clock, and publish a compact timeline with each instrument named. The case can be closed through independent records without treating a new performance as proof of an old one."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "clues": [
        "obr-timeline"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "records-8",
          "requires": []
        }
      ]
    },
    "records-8": {
      "title": "An explanation with sources",
      "location": "The public gallery",
      "body": [
        "The planned visitor card has three columns: event, calibrated reference time, and the gallery reading where available. Rose adds a note explaining why the envelope’s receipt stamp and advance schedule do not belong in the event-time column. Sam signs the town report, and Nina keeps the video in the teaching file. You have taken a route through people and documents instead of through cable shelters. The final wording should show that those are distinct methods reaching the same physical conclusion, not rival stories that become true merely because a reader chose them."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "clues": [
        "obr-card"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "records-9",
          "requires": [
            "obr-timeline",
            "obr-card"
          ]
        }
      ]
    },
    "records-9": {
      "title": "Close the documentary case",
      "location": "The public gallery",
      "body": [
        "Choose the account that respects the time categories and independent calibrations. It must explain both the audience’s comparison and the measured signal interval. A conspiracy theory built from a schedule or envelope stamp would need evidence you do not have. An honest answer can be surprisingly simple only after the investigation has done the difficult work of establishing which simplicity is justified."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "puzzle": {
        "prompt": "Which explanation follows from the complete documentary chain?",
        "options": [
          {
            "id": "timeline",
            "label": "The gallery face lagged a minute; named calibrated events show a five-second forward signal.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "prediction",
            "label": "The 11:57 schedule proves the flash happened before the switch.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "receipt",
            "label": "The clerk’s 12:03 stamp is the actual instant of the public flash.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "erase",
            "label": "Remove conflicting papers so only the video remains.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "records-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "records-7"
        }
      ]
    },
    "records-10": {
      "title": "The record kept intact",
      "location": "The transit room",
      "body": [
        "Rose files the complete timeline behind the original signed observation sheet. The clock is corrected, and the next visitors can compare the records themselves. The apparent missing minute belonged to an unchecked display, while the forward signal occupied five measured seconds. You solved the case through transit observations, a duplicate slip, and a town report. The result agrees with the hardware route, but the archive now contains a separate and reproducible proof rather than a retelling of someone else’s explanation."
      ],
      "routeLabel": "Reconstruct the independent timing records",
      "meets": [],
      "ending": {
        "title": "Solved in the timing archive",
        "kind": "solved",
        "body": [
          "You resolved the event by comparing independent records and keeping their meanings distinct. A preserved paper trail now explains the video without asking anyone to take an instrument’s authority on trust."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "cables-complete",
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
          "id": "cables"
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
          "id": "forward"
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
            "chain",
            "lag"
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
          "id": "calibrated"
        }
      ]
    },
    {
      "id": "records-complete",
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
          "id": "records"
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
          "id": "lag"
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
            "switch",
            "town"
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
          "id": "timeline"
        }
      ]
    }
  ]
};
