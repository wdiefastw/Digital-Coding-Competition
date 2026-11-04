/** A complete authored case. Preview metadata contains no solution. */
export default {
  "id": "lost-weather",
  "title": "The Weather That Went Missing",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "Rain falls across town, but its weather board insists on a clear day. Audit the instruments or follow the river to discover where the missing day went.",
  "setting": "A hillside town, two catchments, and a weather message that keeps returning",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "tess",
      "name": "Tess Rowan",
      "role": "Volunteer weather keeper",
      "description": "Maintains the town board and writes down a measurement’s source before its value.",
      "color": "#9d9277"
    },
    {
      "id": "leon",
      "name": "Leon Ash",
      "role": "Relay technician",
      "description": "Likes a reproducible fault more than a clever theory, especially when the two disagree.",
      "color": "#889eaa"
    },
    {
      "id": "mina",
      "name": "Mina North",
      "role": "Hill farmer",
      "description": "Has records from the upper catchment and dislikes having her field described by a town-center gauge.",
      "color": "#a58a92"
    },
    {
      "id": "omar",
      "name": "Omar Vale",
      "role": "River warden",
      "description": "Knows which tributaries share a catchment and checks them on foot when a screen looks too certain.",
      "color": "#8ca38a"
    },
    {
      "id": "elsie",
      "name": "Elsie Park",
      "role": "School science teacher",
      "description": "Keeps simple control experiments that children can repeat with clean containers.",
      "color": "#b79772"
    }
  ],
  "clues": [
    {
      "id": "opening-2-evidence",
      "title": "Two times in a report",
      "description": "A report has a measurement time and a delivery time. The public board shows only current delivery. The upper catchment and town-center gauge cover different places, and the river warden has already closed uncertain paths as a precaution."
    },
    {
      "id": "a01-evidence",
      "title": "Repeated measurement fields",
      "description": "Six packets have new delivery times but repeat R7,sequence 814,and all measurement fields. The supplied protocol requires a new sequence for each measurement, including unchanged weather."
    },
    {
      "id": "a02-evidence",
      "title": "The independently dated drum",
      "description": "A calibration notch witnessed at 08:00 dates today’s paper trace, which shows accumulating rain. The paper recorder is independent of the radio sensor and relay, so it provides a separate observation rather than another copy of the screen."
    },
    {
      "id": "a03-evidence",
      "title": "Sensor and relay disagree",
      "description": "Direct R7 service returnssequence 839,measured 10:40,with 12 mmrain. The relay deliverssequence 814 and zero at 10:41. A current sensor report exists while the board receives an older sequence."
    },
    {
      "id": "a05-evidence",
      "title": "An incomplete return to live mode",
      "description": "The outage checklist confirms reconnection but leaves the public-output live-mode step unchecked. Its fallback path points to the previous day’ssequence 814 file. The active output source still needs verification."
    },
    {
      "id": "a06-evidence",
      "title": "The active archive output",
      "description": "The public console reads the archivedsequence 814 file and adds a new delivery time. Its payload matches the preserved old packet, including an outdated battery field. The display does not expose measurement age."
    },
    {
      "id": "a07-evidence",
      "title": "The controlled source test",
      "description": "On the same isolated receiver, archive mode repeats the old measurement while live mode advances with the sensor and preserves its measured time. Only the source setting changes. The public output remains untouched during the test."
    },
    {
      "id": "a09-evidence",
      "title": "Location and age must remain visible",
      "description": "R7 and the town-center gauge cover different places and can report different valid totals. The repaired display should show station, measured time, delivery time, and live-or-fallback status rather than a bare number and current clock."
    },
    {
      "id": "a10-evidence",
      "title": "A separate reopening decision",
      "description": "The repaired feed does not replace the warden’s repeated-measurement and bridge-inspection rule. The source fault can be reported as solved while uncertain path closures remain under independent safety checks."
    },
    {
      "id": "b01-evidence",
      "title": "Two connected catchments",
      "description": "The northern tributary drains the ridge and service path. The southern one drains the town slopes and picnic route. They meet above the low bridge, so town-center rainfall does not measure the entire upstream basin."
    },
    {
      "id": "b02-evidence",
      "title": "A matched measurement control",
      "description": "Mina’s calibrated gauge reads 14 mmand a matched control 13.5 mmover the same interval, within stated tolerance. A differently shaped kitchen jug cannot be compared by water depth alone."
    },
    {
      "id": "b03-evidence",
      "title": "An independent river change",
      "description": "Matched-view photographs show a rise from band 1 to band 2 at the fixed northern post. The supplied rule calls for bridge inspection at that transition. The bands are action thresholds, not a rainfall-depth measurement."
    },
    {
      "id": "b05-evidence",
      "title": "The dated background change",
      "description": "The displayed image includes a chimney independently documented as removed yesterday. Its delivery time is current, but the image itself is older. Numeric data still needs its own timestamp check."
    },
    {
      "id": "b06-evidence",
      "title": "The payload’s own date",
      "description": "The displayed image reference and numeric weather payload carry yesterday’ssequence 814. The relay adds a current delivery field. A direct R7 service response advances to 839 with today’s measured time."
    },
    {
      "id": "b07-evidence",
      "title": "A temporary direct chain",
      "description": "The active public output reads the fallback file after line reconnection. Until controlled repair, matched collectors and direct river-band reports can supply current, limited observations with named sources and measured times."
    },
    {
      "id": "b09-evidence",
      "title": "Different views of one bridge",
      "description": "The upstream opening is narrowed by debris while the downstream side looks ordinary. The two witness descriptions can both be sincere. The bridge’s local condition needs inspection and clearance independent of the automated rainfall feed."
    },
    {
      "id": "b10-evidence",
      "title": "Separate observations, separate decisions",
      "description": "The temporary notice names source, location, measured time, and review. Ridge rain, bridge status, and automated-feed recovery are separate entries. A repaired source does not itself clear a local obstruction."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The day the rain disappeared",
      "location": "The town weather board",
      "body": [
        "Rainwater runs from your coat onto the pavement. On the public weather board, a bright line says no measurable rain and clear conditions at Ridge Seven. Tess Rowan has changed the board twice, and each replacement message returns to the same values. The delivery time on the screen is always current.",
        "Somebody has begun calling it the lost-weather day. Tess would rather find out whether the town has a broken instrument, a bad location assumption, or a misleading message. She asks you to investigate the chain before anyone treats the screen as advice about the paths above the river. You can take your time to reason; the warden is already using ordinary precautionary closures."
      ],
      "meets": [
        "tess"
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
      "title": "A screen and a landscape",
      "location": "The weather hut doorway",
      "body": [
        "The hut contains a paper recording drum and the radio relay that supplies the public board. Outside, the upper valley has its own gauges and a different catchment from the town square. Tess offers two starting points. Leon can open the relay service records, while Omar can take you along the river measurements.",
        "The paths will establish different things. An instrument audit can identify why the message repeats. A field investigation can establish what the water is actually doing and what temporary advice is safe while the message is disputed. Both must distinguish the time a report was measured from the time somebody delivered it."
      ],
      "clues": [
        "opening-2-evidence"
      ],
      "choices": [
        {
          "id": "a",
          "label": "Trace the report through its instruments and relay source",
          "to": "a01",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "b",
          "label": "Follow the catchments and test what the water is doing",
          "to": "b01",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a01": {
      "title": "The columns behind the message",
      "location": "The relay service bench",
      "body": [
        "Leon prints six received packets. Every delivery row has a new clock time, but the measurement fields repeat station R7, sequence 814, and the same four values. A protocol sheet says the sequence number advances for each new measurement even when the weather is unchanged.",
        "The next possibility is a stopped sensor rather than a replaying relay. Leon points out that a receive log alone cannot separate them. He has a service port that reads the sensor directly, provided you can identify the station and preserve the original packets before changing anything. A repair that destroys the evidence of the fault may leave you unable to show whether it stayed repaired."
      ],
      "meets": [
        "leon"
      ],
      "clues": [
        "a01-evidence"
      ],
      "routeLabel": "The instrument audit",
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
      "title": "A drum that cannot update a screen",
      "location": "The paper recorder cabinet",
      "body": [
        "The recording drum turned through the morning beneath a working pen. Its paper shows a rising rain trace. Tess dates the paper by a fresh calibration notch made at eight, when Leon inspected it with her. The notch prevents you from mistaking an old wet-day sheet for today’s record.",
        "The paper recorder and radio sensor are separate instruments. Agreement would be reassuring, but disagreement does not yet identify which one is wrong. You copy the calibrated sheet and keep its independence in mind. The radio message’s current delivery stamp cannot overrule it without establishing when the repeated measurement was actually taken."
      ],
      "clues": [
        "a02-evidence"
      ],
      "routeLabel": "The instrument audit",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a03"
        }
      ]
    },
    "a03": {
      "title": "A direct reading",
      "location": "The ridge sensor service port",
      "body": [
        "The service port identifies the instrument as R7 and returns sequence 839 with a measured time of ten forty. Its rain total is twelve millimeters. The relay screen beside it still displays sequence 814 and zero, delivered at ten forty-one.",
        "The direct port uses the measurement clock; the display adds a delivery clock after receiving a stored value. Leon asks you not to confuse a recent delivery with a recent observation. You now have evidence that the sensor can advance its sequence and record rain while the relay continues to repeat an older report. A replacement sensor would be an expensive response to a fault that may sit elsewhere."
      ],
      "clues": [
        "a03-evidence"
      ],
      "routeLabel": "The instrument audit",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a04"
        }
      ]
    },
    "a04": {
      "title": "Choose the faulty part of the chain",
      "location": "The service bench",
      "body": [
        "The same weather might produce repeated values, but the protocol still requires advancing measurement sequences. Which diagnosis best accounts for the direct port, independent drum, and repeating receive log?"
      ],
      "puzzle": {
        "prompt": "What should Leon investigate first?",
        "options": [
          {
            "id": "o1",
            "label": "Replace the rain sensor, because any disagreement proves it is broken.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "Treat the new delivery stamp as proof that sequence 814 is a new measurement.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o3",
            "label": "Investigate the relay’s stored-report path: the sensor advances while an older measurement repeats downstream.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "Publish zero rain because two copies of one radio report outvote one independent drum.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "a05"
      },
      "routeLabel": "The instrument audit"
    },
    "a05": {
      "title": "A repair note with one omitted step",
      "location": "The relay configuration cabinet",
      "body": [
        "A power interruption yesterday required the relay to use a local file until the line recovered. The service checklist has two boxes: reconnect the live port, then return the public output to live mode. Only the first box is checked.",
        "Leon reads the file path aloud: archive, previous-day, sequence 814. That explains a possible source for the repeated values. It is still important to test the actual output path rather than conclude from a suggestive filename. A technician might have saved an archive file during a perfectly successful repair. The public output’s source field will show whether this one is still being used."
      ],
      "clues": [
        "a05-evidence"
      ],
      "routeLabel": "The instrument audit",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a06"
        }
      ]
    },
    "a06": {
      "title": "A source field that makes the choice",
      "location": "The public-output console",
      "body": [
        "The console’s source field names the archive file, not the live port. Its delivery routine adds the current time whenever it republishes the file. You compare its payload byte for byte with the preserved sequence 814 packet. They match, including a small battery value that has since changed at the direct sensor.",
        "Tess says the board’s display design encouraged everyone to read the new time as a new observation. The fault is therefore partly in a source selection and partly in how uncertainty is shown. Switching the source may restore fresh numbers, but a durable correction should also stop an old measurement from looking newly measured merely because somebody sent it again."
      ],
      "clues": [
        "a06-evidence"
      ],
      "routeLabel": "The instrument audit",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a07"
        }
      ]
    },
    "a07": {
      "title": "A harmless control message",
      "location": "The isolated test receiver",
      "body": [
        "Before touching the public board, Leon sends a clearly labeled test payload to an isolated receiver. With archive mode selected, repeated deliveries retain the same measurement sequence. With live mode selected, the next sensor sequence arrives and the measured-time field agrees with the direct port.",
        "Nobody needs to invent severe weather for this test. The control changes one source setting while preserving the receiver and delivery routine. That is why its comparison is informative. A successful live result on a different machine under a different route would be harder to interpret; you would not know which difference had repaired the problem."
      ],
      "clues": [
        "a07-evidence"
      ],
      "routeLabel": "The instrument audit",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a08"
        }
      ]
    },
    "a08": {
      "title": "Separate cause from a coincidence",
      "location": "The relay service desk",
      "body": [
        "Select the observations that locate the replay in the public-output source rather than merely show that the weather is wet. Several facts are true, but not every true fact identifies this particular failure."
      ],
      "puzzle": {
        "prompt": "Which two checks directly identify the source-selection fault?",
        "options": [
          {
            "id": "o1",
            "label": "The active output names the old archive file and reproduces its unchanged payload.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "Your coat is wet when you enter the weather hut.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o3",
            "label": "A controlled switch on the same isolated receiver changes repeated archive sequences to advancing live sequences.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "The public board is painted blue, the color used on many weather maps.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "a09"
      },
      "routeLabel": "The instrument audit"
    },
    "a09": {
      "title": "A fresh report still needs a name",
      "location": "The board’s maintenance hatch",
      "body": [
        "Leon moves the public output to live mode after the test. The first packet names R7 and carries the next advancing sequence. Tess notices that the panel’s small station label has been covered by a fundraising sticker. The public cannot tell whether the rain total belongs to the ridge or the town center.",
        "A source repair without a visible location could create a second misleading impression. The town-center gauge has recorded three millimeters, not twelve. Both readings can be correct because they describe different places. Tess removes the sticker and proposes showing station, measured time, delivery time, and source status together. You verify the proposed fields against the actual packet instead of approving them because the layout looks professional."
      ],
      "clues": [
        "a09-evidence"
      ],
      "routeLabel": "The instrument audit",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a10"
        }
      ]
    },
    "a10": {
      "title": "Advice while a repair settles",
      "location": "The river warden’s office",
      "body": [
        "Omar is using independent river markers and the upper-valley gauges to keep the uncertain path closure in place. He welcomes the repaired feed but does not reopen a crossing because one packet finally looks plausible. His reopening rule requires repeated measurements and a physical inspection of the low bridge.",
        "The investigation has not turned you into a forecaster. It has given the town a trustworthy distinction between a stale report and a fresh one. Tess can publish a correction about the lost-weather message without issuing a promise about conditions she has not measured. A good ending respects the remaining operational decisions rather than borrowing authority from a solved technical mystery."
      ],
      "meets": [
        "omar"
      ],
      "clues": [
        "a10-evidence"
      ],
      "routeLabel": "The instrument audit",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a11"
        }
      ]
    },
    "a11": {
      "title": "What should return to the board?",
      "location": "The public weather panel",
      "body": [
        "Select the commitments that keep the repaired system honest. Restoring live data is one task; preventing a fresh delivery from disguising an old observation is another."
      ],
      "puzzle": {
        "prompt": "Which changes follow the investigation?",
        "options": [
          {
            "id": "o1",
            "label": "Use the verified live source and show station, measurement age, delivery time, and fallback status.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "Erase the preserved old packets so nobody remembers the board displayed an error.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o3",
            "label": "Keep the warden’s separate reopening checks rather than treating one new packet as universal permission.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "Label the ridge value as town-center rainfall because most viewers live in town.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "a12"
      },
      "routeLabel": "The instrument audit"
    },
    "a12": {
      "title": "Weather with a date attached",
      "location": "The square at evening",
      "body": [
        "The board now says where and when its numbers were measured. Tess pins a short correction beside it, explaining the replay without pretending the town somehow experienced a day with no rain. Leon retains the old packets with the repair record. Omar continues his bridge checks.",
        "Your instrument route identified the fault at its source and changed the display that helped hide it. The clouds have not become more cooperative. The town has become less willing to mistake a confident clock for a recent observation."
      ],
      "ending": {
        "title": "The live chain is restored",
        "kind": "solved",
        "body": [
          "You traced the repetition from output to archive source, verified a controlled repair, and made measurement age visible. Fresh data no longer borrows the authority of a newly added delivery stamp.",
          "The mystery of the missing rain ends with a correction, a preserved test, and a board that admits what it actually knows."
        ]
      },
      "routeLabel": "The instrument audit"
    },
    "b01": {
      "title": "A town is not a catchment",
      "location": "The upper river path",
      "body": [
        "Omar leads you above the bridge, where two tributaries join. The northern branch drains the ridge; the southern branch drains the town slopes. A gauge in the square cannot describe the whole northern basin. Mina North has measured rain in her upper field, but her notebook has not yet been compared with an independent control.",
        "You mark both catchments on Omar’s supplied sketch. The service path to the ridge follows the northern branch, while the riverside picnic path stays south. Treating the landscape as one unlabeled number could send people to a place the number never described. The first stage is to establish which measurements belong to which route."
      ],
      "meets": [
        "omar"
      ],
      "clues": [
        "b01-evidence"
      ],
      "routeLabel": "The river investigation",
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
      "title": "A gauge and a kitchen jug",
      "location": "Mina’s hillside field",
      "body": [
        "Mina’s gauge reads fourteen millimeters. She shows you yesterday’s emptying mark and today’s notebook entry. Elsie Park has put an identical clean collector beside it as a control, measured over the same interval. It reads thirteen and a half millimeters, within the gauge’s stated tolerance.",
        "Mina also has a wide kitchen jug that looks impressively full. Its mouth and body have different areas, so its depth cannot be compared directly to a calibrated rain gauge. Elsie supplied that warning in the school experiment sheet. A dramatic volume of water may be visually persuasive without being a usable rainfall total. The paired calibrated collectors are the stronger evidence."
      ],
      "meets": [
        "mina",
        "elsie"
      ],
      "clues": [
        "b02-evidence"
      ],
      "routeLabel": "The river investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b03"
        }
      ]
    },
    "b03": {
      "title": "The marker below the alder",
      "location": "The northern measuring post",
      "body": [
        "Omar records the river height at a post fixed to stone. The post has three numbered bands, not a depth scale. Its instruction card says a rising transition from band one to band two triggers inspection of the low bridge; band three is not required before that inspection begins.",
        "You compare time-stamped photographs taken by two wardens. The same stone notch fixes their viewpoints. The water rose from band one to band two during the gauge interval. It is a second kind of observation, independent of the rain collectors. It supports a local action under the posted rule without proving exactly how much rain fell at every point upstream."
      ],
      "clues": [
        "b03-evidence"
      ],
      "routeLabel": "The river investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b04"
        }
      ]
    },
    "b04": {
      "title": "Use a number where it belongs",
      "location": "The path junction",
      "body": [
        "The public screen says zero, but you have paired ridge collectors and an independent river change. Choose the immediate interpretation that respects locations, instrument comparability, and the inspection rule without claiming to have solved the screen’s technical fault."
      ],
      "puzzle": {
        "prompt": "Which field conclusion is supported?",
        "options": [
          {
            "id": "o1",
            "label": "Use the kitchen jug as the official ridge total because it contains the most visible water.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "Treat the town-center screen as a measurement of every upstream slope.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o3",
            "label": "Accept the matched ridge collectors as local evidence of rain and follow the band-two inspection rule while investigating the disputed screen separately.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "Wait for band three before inspecting because a larger number is always the first action point.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "b05"
      },
      "routeLabel": "The river investigation"
    },
    "b05": {
      "title": "The image that stayed too still",
      "location": "The old survey shelter",
      "body": [
        "A camera view attached to the weather message shows a dry roof and an intact chimney behind the ridge sensor. Mina points across the slope: the chimney was removed yesterday, and its bricks are stacked under a tarpaulin. The image might be old even if its delivery time is new.",
        "You check the contractor’s public work note and a before-and-after photograph. Both establish the removal day. This does not by itself prove the numeric report is replaying too; images and numbers could have separate faults. It gives you a reason to inspect their original measurement fields rather than accepting the shared display timestamp as the age of both."
      ],
      "clues": [
        "b05-evidence"
      ],
      "routeLabel": "The river investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b06"
        }
      ]
    },
    "b06": {
      "title": "The message underneath the picture",
      "location": "The shelter’s radio terminal",
      "body": [
        "Omar’s terminal can show the plain report fields hidden by the public layout. The image reference and weather payload both carry sequence 814 from the previous day. The relay adds a current delivery field to the package before sending it. A direct service response from R7 is now sequence 839 with today’s measured time.",
        "The field investigation has caught up with the technical distinction. One old picture would not establish an old rain value, but the original numeric field supplies that missing link. You preserve the packet instead of typing a new number into the board by hand. The next person needs a source they can check, not a correction resting entirely on your reputation."
      ],
      "clues": [
        "b06-evidence"
      ],
      "routeLabel": "The river investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b07"
        }
      ]
    },
    "b07": {
      "title": "A route to the source cabinet",
      "location": "The relay hut outside town",
      "body": [
        "Leon meets you with the outage checklist. The line was reconnected after yesterday’s power cut, but the public output remained pointed at a fallback file. The filename alone could be a distraction; its active source field and preserved payload show that it is actually being read.",
        "Leon can repair that source after a controlled test. Meanwhile, Omar needs a temporary information chain that the field team can explain now. Mina and Elsie can continue paired collectors at fixed intervals. The warden can report river-band changes directly. These are narrower observations than a complete automated forecast, but they are current and auditable, which makes them more useful than a stale message with an impressive clock."
      ],
      "meets": [
        "leon"
      ],
      "clues": [
        "b07-evidence"
      ],
      "routeLabel": "The river investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b08"
        }
      ]
    },
    "b08": {
      "title": "Do not let one old picture prove everything",
      "location": "The relay hut desk",
      "body": [
        "Select the evidence that establishes the message’s age rather than merely making it suspicious. The chimney offers a useful independent check, and the numeric payload must still speak for itself."
      ],
      "puzzle": {
        "prompt": "Which observations justify rejecting the package as a fresh measurement?",
        "options": [
          {
            "id": "o1",
            "label": "The image contains a chimney removed before today’s independently dated work photographs.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "The numeric payload’s own sequence and date are yesterday’s, while only delivery advances.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "The town board has a brighter screen than the field terminal.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o4",
            "label": "Mina dislikes the automated system and therefore its contents are automatically false.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "b09"
      },
      "routeLabel": "The river investigation"
    },
    "b09": {
      "title": "A bridge inspected from both sides",
      "location": "The low bridge",
      "body": [
        "Omar follows the band-two rule and inspects the bridge before considering its reopening. Debris has narrowed one upstream opening. The downstream side looks ordinary, which explains why a person standing only by the picnic path could report nothing unusual in good faith.",
        "The obstacle’s position matters more than how alarming either viewpoint feels. Omar records the blocked opening and keeps the closure while a qualified crew clears it. You now understand why the field route cannot be replaced by a repaired data feed alone. A current rain number does not reveal every local obstruction, and a calm downstream view does not inspect an upstream aperture."
      ],
      "clues": [
        "b09-evidence"
      ],
      "routeLabel": "The river investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b10"
        }
      ]
    },
    "b10": {
      "title": "An honest temporary notice",
      "location": "The path’s public information box",
      "body": [
        "Tess brings a handwritten notice with space for the observer, location, measured time, and the next review. She proposes publishing ridge rain from the paired collectors and the warden’s bridge status as separate entries. Neither should masquerade as the town’s complete weather forecast.",
        "Leon’s controlled receiver test identifies and corrects the fallback-source fault. You ask that the temporary notice remain until successive live packets are checked against direct readings, and that the bridge decision remain with the warden. This is the ending your chosen route can support: a working field chain and a local response, with the technical correction folded into it rather than allowed to erase it."
      ],
      "clues": [
        "b10-evidence"
      ],
      "routeLabel": "The river investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b11"
        }
      ]
    },
    "b11": {
      "title": "Which story does the notice tell?",
      "location": "The town’s notice board",
      "body": [
        "Your investigation followed water, viewpoints, and the age of a message. Choose the notice that preserves those distinctions. Its purpose is to help people act on checked information, not to announce that every uncertainty vanished when you found a faulty setting."
      ],
      "puzzle": {
        "prompt": "Which public conclusion is supported by the field route?",
        "options": [
          {
            "id": "o1",
            "label": "The river is safe everywhere because one new live packet finally arrived.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "The old message was replayed; current ridge and river observations are separately sourced, and the bridge stays closed until its own clearance checks are complete.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "Every downstream witness lied because they did not see the upstream obstruction.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o4",
            "label": "The old camera image proves that no weather instrument can ever be trusted again.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "b12"
      },
      "routeLabel": "The river investigation"
    },
    "b12": {
      "title": "A day returned to its landscape",
      "location": "The upper path after inspection",
      "body": [
        "The bridge reopens only after the obstruction is cleared and the warden’s checks are complete. Mina’s measured intervals and Elsie’s control sheets are clipped beside the repair note in the weather hut. The public board shows where and when its live values were measured.",
        "You chose the field route, so your ending includes more than a source setting. It includes the catchment the number describes, the hidden side of a bridge, and a temporary chain that worked when the screen did not. The rain never disappeared. Its context was what the town had lost."
      ],
      "ending": {
        "title": "The field chain keeps its meaning",
        "kind": "solved",
        "body": [
          "You established current local conditions, rejected a stale package through independent and internal dates, and kept bridge decisions tied to actual inspection. The repaired feed joins a tested chain rather than replacing it.",
          "Tess leaves one handwritten line below the display: a measurement always comes from somewhere. After today, nobody in town thinks that line is decorative."
        ]
      },
      "routeLabel": "The river investigation"
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
          "id": "o3"
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
            "o3"
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
          "id": [
            "o1",
            "o3"
          ]
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
          "id": "o3"
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
    }
  ]
};
