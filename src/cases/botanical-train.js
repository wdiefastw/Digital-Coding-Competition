/** A complete authored case. Preview metadata contains no solution. */
export default {
  "id": "botanical-train",
  "title": "The Botanical Express",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "A living exhibit disappears between mountain stations. Stay aboard to follow the freight chain, or step off and trace the shaded service route before the next transfer.",
  "setting": "A mountain railway carrying a traveling botanical exhibition",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "ivo",
      "name": "Ivo March",
      "role": "Train conductor",
      "description": "Keeps a neat departure book and insists that a parcel receipt records a handover, not its contents.",
      "color": "#8e9eaa"
    },
    {
      "id": "sethi",
      "name": "Dr. Amita Sethi",
      "role": "Botanical courier",
      "description": "Travels with living specimens and a collection of thermometers in padded sleeves.",
      "color": "#9aa57b"
    },
    {
      "id": "nell",
      "name": "Nell Finch",
      "role": "Freight porter",
      "description": "Can follow a consignment through a platform without guessing what is inside it.",
      "color": "#b29273"
    },
    {
      "id": "orla",
      "name": "Orla Moss",
      "role": "Station keeper",
      "description": "Checks the station clock every morning because her father taught her to distrust a punctual-looking dial.",
      "color": "#aa8b9c"
    },
    {
      "id": "ana",
      "name": "Ana Vale",
      "role": "Conservatory gardener",
      "description": "Asks about moisture and temperature before asking how rare a plant is.",
      "color": "#8ca39b"
    }
  ],
  "clues": [
    {
      "id": "opening-2-evidence",
      "title": "Two identifiers",
      "description": "The missing exhibit is F17. Its insulated carrier has a separate consignment number. A receipt for the carrier must be linked to the exhibit tag before it identifies the missing fern."
    },
    {
      "id": "a01-evidence",
      "title": "The manifest pairing",
      "description": "The original manifest pairs F17 with C42 and the dried-flower display with C24. Both carriers are green, but C42 has a water reservoir and higher listed weight."
    },
    {
      "id": "a02-evidence",
      "title": "A controlled release",
      "description": "The bracket shows a normal lever movement rather than force. Transport rules permit removal above 28 degrees, but require a recorded temperature and authorized transfer. A clean release alone proves neither permission nor theft."
    },
    {
      "id": "a03-evidence",
      "title": "The recorded heat peak",
      "description": "The paired scales show 86 Fequals 30 C, above the 28 Ctransport threshold. The peak was recorded before the last collection. This supports a required cooling transfer but does not identify its recipient."
    },
    {
      "id": "a05-evidence",
      "title": "A holding entry",
      "description": "C42 was logged into the bonded parcel room at 11:12. This is a holding entry, not final delivery. The depot route to the conservatory requires a separate release and siding handover."
    },
    {
      "id": "a06-evidence",
      "title": "The slow clock correction",
      "description": "The bonded-room clock is 20 minutes slow. Its 11:15 release corresponds to 11:35 master time, after the 11:12 arrival. Page position is not a chronological guarantee."
    },
    {
      "id": "a07-evidence",
      "title": "The authorized transfer chain",
      "description": "The signed heat transfer cites the conservatory authorization and C42. The siding handover names the porter and F17; the weight matches a live carrier within the reservoir allowance. The signed chain supports a controlled inspection."
    },
    {
      "id": "a09-evidence",
      "title": "The inspected carrier",
      "description": "Controlled inspection links the intact transfer seal,C42,and exhibit F17. The fern is present and physically compatible with the recorded water loss. The heater defect remains absent from the repair book."
    },
    {
      "id": "a10-evidence",
      "title": "Two repairs to the system",
      "description": "The physical fault needs a repair entry and isolation. The authorized movement needs a cross-reference in the exhibition log. Neither task is replaced by recovering the plant or by a general accusation."
    },
    {
      "id": "b01-evidence",
      "title": "A fixed platform feature",
      "description": "The old Fern Haltinstruction identifies a rock cutting and stone culvert, matching the shaded service platform. The new visitor platform faces the valley; its modern sign does not fix the historic freight route."
    },
    {
      "id": "b02-evidence",
      "title": "The corrected photograph",
      "description": "The station dial was 20 minutes slow, so the photograph labeled 11:00 was taken at 11:20 master time. That fits the 11:18 arrival; its shadows place the carrier on the service platform."
    },
    {
      "id": "b03-evidence",
      "title": "The path’s paired identifiers",
      "description": "The trolley rubbing reads C42. The conservatory dispatch note pairs C42 with live exhibit F17;C24 contains dried specimens. The rubbing identifies a route lead, not the sealed contents."
    },
    {
      "id": "b05-evidence",
      "title": "The gate receipt",
      "description": "Ana accepted sealed carrier C42 from the named railway porter under a cooling authorization. Dr.Sethiadded F17 as the expected exhibit. The inner case remains unverified in the quarantine room."
    },
    {
      "id": "b06-evidence",
      "title": "Different storage requirements",
      "description": "Dried sheets need dry air;F17’s live system needs reservoir moisture, shade, and temperature below 28 C. The reservoir diagram and dispatch weight identify the live load despite the broad phrase botanical material."
    },
    {
      "id": "b07-evidence",
      "title": "A justified cool destination",
      "description": "The railway peak was 30 C, above the 28 Cthreshold. The quarantine room stayed 20–23 C. The authorization number can connect the railway cooling note, gate receipt, and placement entry."
    },
    {
      "id": "b09-evidence",
      "title": "Verified conservatory receipt",
      "description": "The matched seal,C42 carrier,and F17 inner tag were checked together at the conservatory. Reservoir condition and intact stems are documented before the next move. The field route proves arrival and care, not just dispatch."
    },
    {
      "id": "b10-evidence",
      "title": "The unrecorded heater fault",
      "description": "Repeated overheating remains absent from the repair book despite a verbal report. The incident needs a durable fault reference, isolation decision, and links to both dispatch and receiving temperature records."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The empty fastening",
      "location": "The Botanical Express, carriage three",
      "body": [
        "The mountain train carries a small exhibition of living plants between two conservatories. At the first halt, Dr. Sethi notices that a numbered fern case is missing from its bracket. The fastening is closed again. Nobody has reported an accident, and the passengers remember several people carrying perfectly ordinary boxes through the aisle.",
        "Ivo March asks you to help trace the movement before he issues an allegation over the railway radio. Two consignments were changed at the last station, and the display-car heater has been unreliable. Those facts may be connected, but a rare plant is not automatically proof of a daring theft."
      ],
      "meets": [
        "ivo",
        "sethi"
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
      "title": "Two stops, two methods",
      "location": "The carriage vestibule",
      "body": [
        "The train is approaching a junction where you must choose how to investigate. You can stay with the freight staff and trace documents through the depot, requesting a controlled unload at the next stop. Or you can get off at the old station and follow the conservatory service route, catching up with the consignment beyond the junction.",
        "Ivo can arrange either, but not both before the evening transfer. He gives you the visible case number, F17, and a warning: the exhibition crate and its insulated carrier have separate labels. A signed receipt for a carrier does not prove which exhibit it contains. You choose the chain you intend to test."
      ],
      "clues": [
        "opening-2-evidence"
      ],
      "choices": [
        {
          "id": "a",
          "label": "Stay with the freight staff and request a depot inspection",
          "to": "a01",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "b",
          "label": "Leave the train and follow the conservatory service route",
          "to": "b01",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a01": {
      "title": "A manifest in two colors",
      "location": "The train’s freight desk",
      "body": [
        "Nell Finch spreads the morning manifest across a packing board. Exhibit F17 is recorded inside carrier C42. A separate display of dried flowers occupies C24. Someone has circled C24 in red after hearing a passenger describe a green box, but both carriers are green.",
        "The weights differ. C42 contains a live case, water reservoir, and insulated sleeve. C24 holds flat sheets. Nell will not open either during transit without an authorized reason. Matching the exhibit to a carrier is the first step toward giving her one, and color alone will not do it."
      ],
      "meets": [
        "nell"
      ],
      "clues": [
        "a01-evidence"
      ],
      "routeLabel": "The freight chain",
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
      "title": "What the fastening remembers",
      "location": "The display-car bracket",
      "body": [
        "The bracket’s release lever leaves a short clean stripe in its dusty guide when opened normally. There is such a stripe today. The screw heads have not moved, and the retaining lip is unbent. This does not establish permission, but it makes a forced removal less likely than an ordinary release.",
        "Dr. Sethi shows you the transport instructions. A living case must leave the display bracket if its temperature crosses twenty-eight degrees. It can then go into the insulated carrier pending a cooler position. The instruction demands a temperature note and a transfer signature; it does not permit someone to assume that every hot afternoon requires the same response."
      ],
      "clues": [
        "a02-evidence"
      ],
      "routeLabel": "The freight chain",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a03"
        }
      ]
    },
    "a03": {
      "title": "A number on a second scale",
      "location": "The instrument shelf",
      "body": [
        "The carriage thermometer has two scales. Its red marker sits beside eighty-six on the Fahrenheit side; the matching Celsius mark is thirty. A passenger remembered seeing eighty-six and thought it must be a serial number. The minimum-maximum card records that peak at the last station, before the carrier was collected.",
        "A second instrument in the shaded vestibule reads twenty-three Celsius. It explains why moving the plant might be sensible, but not who did it or which box was used. You keep those questions separate. The manifest, bracket, and temperature card together now support a narrower next step than searching every passenger’s luggage."
      ],
      "clues": [
        "a03-evidence"
      ],
      "routeLabel": "The freight chain",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a04"
        }
      ]
    },
    "a04": {
      "title": "Which box deserves the inquiry?",
      "location": "The freight desk",
      "body": [
        "You can ask Nell to trace one consignment at the depot. Choose the request that links the missing exhibit to a carrier and treats the heat evidence as a reason to investigate rather than as a complete explanation."
      ],
      "puzzle": {
        "prompt": "Which inquiry is supported by the records?",
        "options": [
          {
            "id": "o1",
            "label": "Trace C24 because a witness remembers a green box.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "Trace C42 because the original manifest links it to F17,and seek the required heat-transfer signature.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "Search every passenger because a normal bracket release proves an intentional theft.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o4",
            "label": "Ignore the movement because the heat reading proves every later action was authorized.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "a05"
      },
      "routeLabel": "The freight chain"
    },
    "a05": {
      "title": "The railway’s own geography",
      "location": "The junction depot office",
      "body": [
        "The depot plan marks a through platform, a bonded parcel room, and a conservatory siding. Goods for the siding are first received in the bonded room; they are not carried directly from a passenger carriage to the garden gate. Nell finds C42 entered at eleven twelve, with a holding mark rather than a delivery mark.",
        "The entry matters because a rumor has already placed the fern in a visitor’s car. Nothing in the depot record supports that story. Yet a holding mark is also not evidence that the carrier remains where it was placed. You will need the release side of the ledger and the person who received it."
      ],
      "clues": [
        "a05-evidence"
      ],
      "routeLabel": "The freight chain",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a06"
        }
      ]
    },
    "a06": {
      "title": "The clock above the hatch",
      "location": "The bonded parcel room",
      "body": [
        "The room clock reads eleven twenty when the railway master clock reads eleven forty. Orla’s maintenance slip, pinned beside the hatch, records that it has been twenty minutes slow since the morning power cut. The parcel-room release note is stamped eleven fifteen by that local clock.",
        "Nell initially lays it before the eleven twelve arrival because the handwritten line is above it. You compare time systems instead of page order. Corrected to the master clock, the release occurred at eleven thirty-five. The carrier could arrive, be held, and then leave without any impossible journey. You still need to establish where it went."
      ],
      "clues": [
        "a06-evidence"
      ],
      "routeLabel": "The freight chain",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a07"
        }
      ]
    },
    "a07": {
      "title": "A signature with a duty",
      "location": "The siding office",
      "body": [
        "The release is signed Sethi, with a conservatory authorization number beside it. Dr. Sethi confirms the signature but has not claimed the carrier personally stayed in her hands throughout. She authorized a cooling transfer after checking the peak-temperature card. A railway porter carried it under the same number.",
        "The siding handover lists that porter, C42, and the expected fern exhibit. Its weight agrees with the morning water-filled carrier, within the allowance for reservoir use. The record is more than a familiar surname: it connects the exhibit, a valid reason, the carrier, and the authorized route. Nell is ready to request a controlled inspection at the depot instead of allowing it to continue unseen."
      ],
      "clues": [
        "a07-evidence"
      ],
      "routeLabel": "The freight chain",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a08"
        }
      ]
    },
    "a08": {
      "title": "A sequence without a vanished interval",
      "location": "The siding records table",
      "body": [
        "Select the observations needed to test whether the apparent timing contradiction is real. The corrected chronology must use the depot’s master-time arrival and the documented local-clock offset, not the order in which a clerk wrote the lines."
      ],
      "puzzle": {
        "prompt": "Which facts establish that the release can follow the arrival?",
        "options": [
          {
            "id": "o1",
            "label": "The bonded room records a 20-minute slow offset.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "The 11:15 local release is 11:35 master time, after the 11:12 master arrival.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "The release line appears above the arrival line on one copied page.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o4",
            "label": "The two carriers share a green color.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "a09"
      },
      "routeLabel": "The freight chain"
    },
    "a09": {
      "title": "Opened where it can be checked",
      "location": "The controlled inspection bay",
      "body": [
        "Nell brings C42 to the inspection bay with Dr. Sethi present. The outer seal matches the release ledger. Inside the insulated sleeve is the numbered case F17, its reservoir slightly lower than the morning measurement. The fern is upright; the leaves have not been snapped to fit a smaller box.",
        "This verifies the consignment. It also reveals an unfinished task: the display-car heater fault was reported verbally and never entered in the repair book. Without that record, the next courier might face the same heat emergency and the same apparently unexplained movement. Recovering an object does not mean the conditions that caused its disappearance have been corrected."
      ],
      "clues": [
        "a09-evidence"
      ],
      "routeLabel": "The freight chain",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a10"
        }
      ]
    },
    "a10": {
      "title": "The report that travels next",
      "location": "The depot repair desk",
      "body": [
        "Ivo asks how to describe the incident. You have evidence of a required cooling move and an authorized chain, followed by a genuine failure to communicate the movement to the exhibition staff. You have no basis for naming a passenger as a thief.",
        "Dr. Sethi wants the heater isolated and the fern carried onward in a verified cool compartment. Nell wants the transfer form copied to the exhibition log as well as the freight ledger. Those requests address different failures. The case is not resolved by calling everyone careless, and it is not resolved by pretending there was no problem because the plant has been found."
      ],
      "clues": [
        "a10-evidence"
      ],
      "routeLabel": "The freight chain",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a11"
        }
      ]
    },
    "a11": {
      "title": "Explain what was actually missing",
      "location": "The depot office",
      "body": [
        "Your final conclusion must account for the object, the movement, and the misleading gap in the exhibition log. Choose the actions that follow from the verified chain rather than from the first dramatic explanation."
      ],
      "puzzle": {
        "prompt": "Which conclusions and next steps are supported?",
        "options": [
          {
            "id": "o1",
            "label": "Record an authorized cooling transfer of F17 in C42 and correct the exhibition log’s missing cross-reference.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "Accuse the passenger who remembered a green carrier because the case was temporarily unaccounted for.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o3",
            "label": "Isolate the faulty heater and arrange verified cool onward transport.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "Erase the transfer entries so the exhibition appears never to have suffered a disruption.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "a12"
      },
      "routeLabel": "The freight chain"
    },
    "a12": {
      "title": "A checked departure",
      "location": "The conservatory siding",
      "body": [
        "The fern leaves the depot under a new receipt naming both its exhibit and carrier. The heater stays isolated. Ivo walks the exhibition staff through the cooling note before the next departure, and Nell keeps the corrected time on the release copy.",
        "You solved the case by staying with the freight chain and insisting that each handover be evidenced. The plant’s safety was real, and so was the original uncertainty. Neither required an invented villain to make the investigation worthwhile."
      ],
      "ending": {
        "title": "The depot chain is complete",
        "kind": "solved",
        "body": [
          "Your records route recovered the fern at a controlled inspection and turned a confusing absence into a verified transfer. The repairs and cross-references travel with the next train.",
          "Dr. Sethi offers you a seat in the cool compartment. From its window, the mountain flowers look less like cargo and more like a landscape the train is borrowing for an afternoon."
        ]
      },
      "routeLabel": "The freight chain"
    },
    "b01": {
      "title": "The platform that lost its name",
      "location": "Old Cedar Station",
      "body": [
        "Orla Moss meets you at the quiet end of the platform. The modern board calls it Cedar, but a conservatory instruction still refers to Fern Halt. The old guide describes a platform facing a steep rock cutting, while the passenger platform across the tracks faces an open valley.",
        "You resist matching a place by its current name alone. A stone culvert, cut into the rock face, appears on both the guide and the surviving engineering plan. It connects the older service platform to a shaded loading path. If the live carrier went toward the conservatory, that protected path is more relevant than a bright new visitor sign."
      ],
      "meets": [
        "orla"
      ],
      "clues": [
        "b01-evidence"
      ],
      "routeLabel": "The station paths",
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
      "title": "A photograph with two shadows",
      "location": "The station’s history case",
      "body": [
        "A tourist photograph shows a green carrier on a trolley. The photographer wrote eleven o’clock on the back after checking the station dial. Orla’s maintenance notice records that dial as twenty minutes slow. A master-time train notice places the same trolley’s arrival at eleven eighteen, which first appears inconsistent with the photograph.",
        "The corrected photograph time is eleven twenty. Its shadow falls toward the valley, placing the trolley by the rock-facing service platform. The witness may have described the time sincerely while using the wrong clock. You can preserve the useful observation without adopting its uncorrected timestamp."
      ],
      "clues": [
        "b02-evidence"
      ],
      "routeLabel": "The station paths",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b03"
        }
      ]
    },
    "b03": {
      "title": "The number beneath the handle",
      "location": "The shaded loading path",
      "body": [
        "A trolley handle has a chalk rubbing left by a consignment tag. It reads C42, not F17. Orla explains that exhibition and transport numbers are separate. The conservatory’s copy of the dispatch note pairs C42 with F17 and lists a live fern with a water reservoir.",
        "There is another green box on the passenger platform, C24, holding dried specimens. Choosing by color would take you to the wrong parcel and the wrong path. The physical route, corrected time, and paired identifiers now make a coherent lead. It is still a lead rather than proof of what is inside the sealed carrier."
      ],
      "clues": [
        "b03-evidence"
      ],
      "routeLabel": "The station paths",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b04"
        }
      ]
    },
    "b04": {
      "title": "Follow a path that exists",
      "location": "The culvert steps",
      "body": [
        "Which investigation follows all three observations: the fixed service-platform landmarks, the corrected photograph time, and the linked exhibit and carrier numbers? A familiar sign or box color cannot replace the complete chain."
      ],
      "puzzle": {
        "prompt": "Where should you follow the carrier?",
        "options": [
          {
            "id": "o1",
            "label": "To the new visitor platform because its sign is newest.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "Along the shaded culvert service path, tracing C42 as the carrier paired with F17.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "Into the valley with C24 because every green box is interchangeable.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o4",
            "label": "Nowhere, because the uncorrected photograph makes the journey impossible.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "b05"
      },
      "routeLabel": "The station paths"
    },
    "b05": {
      "title": "A receipt at the wet gate",
      "location": "The conservatory service entrance",
      "body": [
        "Ana Vale is rinsing propagation trays when you reach the wet gate. A carrier arrived under a cooling authorization. She remembers its green shell but offers a signed receipt instead of asking you to trust the color. The receipt names C42 and the railway porter; the live-case number is written beneath in a second hand.",
        "The second hand belongs to Dr. Sethi, who checked the temperature card before approving the move. Ana has not opened the inner case. She has placed the carrier in the shaded quarantine room, as the instructions require. There is a clear distinction between accepting a sealed carrier and verifying its inner exhibit."
      ],
      "meets": [
        "ana"
      ],
      "clues": [
        "b05-evidence"
      ],
      "routeLabel": "The station paths",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b06"
        }
      ]
    },
    "b06": {
      "title": "A fern is not a pressed flower",
      "location": "The quarantine anteroom",
      "body": [
        "The carrier instruction lists two very different storage conditions. Dried herbarium sheets require dry air. The live fern requires a moist reservoir and a shaded temperature below twenty-eight Celsius. The railway copy abbreviates the load as botanical material, which does not distinguish them.",
        "Ana will not place the sealed case in the dry archive merely because an older instruction uses that broad description. She compares the reservoir diagram and morning weight to the conservatory dispatch note. Both identify the live system. The difference can be reasoned out from supplied information; nobody needs specialist knowledge about the species to recognize that drying and living storage are incompatible instructions."
      ],
      "clues": [
        "b06-evidence"
      ],
      "routeLabel": "The station paths",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b07"
        }
      ]
    },
    "b07": {
      "title": "The reading that justified the change",
      "location": "The temperature-record cabinet",
      "body": [
        "Dr. Sethi arrives with the railway’s peak card. Eighty-six Fahrenheit aligns with thirty Celsius on the paired-scale thermometer, exceeding the case’s threshold. The record precedes the authorized collection. Ana’s quarantine-room chart stays between twenty and twenty-three Celsius through the relevant hour.",
        "The two charts do not prove a theft, nor do they make every later action automatically correct. They establish a reason for cooling and a suitable temporary destination. You ask to match the authorization number across the railway note, the gate receipt, and the quarantine placement entry before requesting that the seals be opened."
      ],
      "meets": [
        "sethi"
      ],
      "clues": [
        "b07-evidence"
      ],
      "routeLabel": "The station paths",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b08"
        }
      ]
    },
    "b08": {
      "title": "An appropriate place, not merely a close one",
      "location": "The quarantine desk",
      "body": [
        "Select the conditions that justify the quarantine room for this carrier. The correct answer must identify the load as live and compare its actual requirements to the measured destination, not simply trust a room’s reassuring name."
      ],
      "puzzle": {
        "prompt": "Which observations support the temporary placement?",
        "options": [
          {
            "id": "o1",
            "label": "The reservoir diagram and dispatch pairing identify a live fern rather than dried sheets.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "The dry archive is nearest to the gate, so its conditions do not matter.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o3",
            "label": "The quarantine chart stays below the live case’s 28 Cthreshold, with moisture maintained.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "The words botanical material mean every plant-related parcel can be stored identically.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "b09"
      },
      "routeLabel": "The station paths"
    },
    "b09": {
      "title": "The seal at the conservatory",
      "location": "The quarantine room",
      "body": [
        "With Dr. Sethi present, Ana compares the outer seal to the railway release record and opens C42. The inner tag reads F17. The reservoir shows a modest loss consistent with travel, and the fern’s stems are intact. Ana photographs the tag beside the receiving record before anyone moves the plant to a new display.",
        "Your field route has reached the object later than a depot inspection would have. It has also established its actual arrival at the conservatory and the conditions in which it was held. That difference gives the final record a different endpoint: not merely safe dispatch, but checked receipt and onward care."
      ],
      "clues": [
        "b09-evidence"
      ],
      "routeLabel": "The station paths",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b10"
        }
      ]
    },
    "b10": {
      "title": "The fault that can repeat",
      "location": "The conservatory communications room",
      "body": [
        "Ivo’s radio message reaches you: the display-car heater has again climbed above its setting. The repair book still says no written fault reported. Dr. Sethi had informed a staff member verbally before arranging the transfer, but the fault never acquired a durable reference.",
        "You ask Ana to attach her receiving chart and the railway peak card to a written incident entry. The missing exhibit is now accounted for, yet the same combination of faulty heating and unlinked records could endanger the next collection. The useful ending is not to assign a dramatic blame from incomplete evidence. It is to connect the safety observation to a record someone is responsible for acting on."
      ],
      "clues": [
        "b10-evidence"
      ],
      "routeLabel": "The station paths",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b11"
        }
      ]
    },
    "b11": {
      "title": "Close the chain where you actually followed it",
      "location": "The receiving office",
      "body": [
        "Choose the report that fits the evidence your route obtained. It should state where the plant was verified, why it moved, and what remains to be repaired. Do not pretend that a photograph proved the sealed contents before inspection."
      ],
      "puzzle": {
        "prompt": "Which final report is supported?",
        "options": [
          {
            "id": "o1",
            "label": "The carrier’s green color established the fern’s identity from the first photograph.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "F17 was verified inside C42 at conservatory receipt after an authorized cooling transfer; record and isolate the heater fault and cross-reference the handovers.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "The missing exhibition entry proves a passenger stole the plant before changing their mind.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o4",
            "label": "Because the plant arrived safely, the temperature records and repair entry can be discarded.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "b12"
      },
      "routeLabel": "The station paths"
    },
    "b12": {
      "title": "A plant received, not merely found",
      "location": "The conservatory’s shaded house",
      "body": [
        "Ana places the fern in a verified shaded bay. The receiving label carries the exhibit number, carrier reference, and cooling authorization, so a later reader can follow the journey without guessing which green box anyone meant. Ivo confirms that the heater is isolated pending inspection.",
        "The train curves away above the glass roof. You chose to follow the service paths rather than remain with the depot papers, and you ended by proving the plant’s actual condition at its destination. The mystery closes with a living thing cared for and a record that finally travels as well as the train."
      ],
      "ending": {
        "title": "The service route reaches its destination",
        "kind": "solved",
        "body": [
          "Your field route verified the fern’s arrival through fixed landmarks, corrected clocks, paired identifiers, and a controlled receiving inspection. The conservation team has both the plant and the record of why it moved.",
          "The next exhibition label includes an unremarkable phrase: received and checked. It is exactly the kind of ending this journey needed."
        ]
      },
      "routeLabel": "The station paths"
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
          "id": "o2"
        }
      ]
    }
  ]
};
