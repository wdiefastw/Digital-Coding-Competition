/** A complete authored case. Preview metadata contains no solution. */
export default {
  "id": "hollow-portrait",
  "title": "The Hollow Portrait",
  "genre": "Murder mystery",
  "difficulty": "Challenging",
  "duration": "10–20 min",
  "description": "A gallery opening ends behind a locked service door. Investigate the installation’s hidden spaces or follow the people and papers moving around the exhibition.",
  "setting": "An art gallery during a halted evening unveiling",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "maud",
      "name": "Inspector Maud Ellis",
      "role": "Investigating officer",
      "description": "Keeps witness accounts separate and asks you to test observations without approaching a suspect alone.",
      "color": "#8f9ea3"
    },
    {
      "id": "cora",
      "name": "Cora Vale",
      "role": "Conservator",
      "description": "Works in the glass loft and keeps a continuous camera record when examining a borrowed picture.",
      "color": "#af927a"
    },
    {
      "id": "jules",
      "name": "Jules Ardent",
      "role": "Collector",
      "description": "Lent the exhibition’s central portrait and wants every movement of it documented.",
      "color": "#aa8c9d"
    },
    {
      "id": "mara",
      "name": "Mara Flint",
      "role": "Installation contractor",
      "description": "Built the transport frame and knows the gallery’s temporary fixtures in detail.",
      "color": "#91a383"
    },
    {
      "id": "ben",
      "name": "Ben Rowan",
      "role": "Evening porter",
      "description": "Logs keys and deliveries, but will tell you when a memory comes from a clock he did not check.",
      "color": "#b09b75"
    }
  ],
  "clues": [
    {
      "id": "opening-2-evidence",
      "title": "The supplied interval",
      "description": "A witnessed call ends 20:09 and discovery is reported 20:16. Investigators set the relevant interval at 20:10–20:14. Cora,Jules,and Maraare installation-access witnesses; access alone does not establish guilt."
    },
    {
      "id": "a01-evidence",
      "title": "A continuous loft record",
      "description": "Gallery dials are 5 minutes fast. The file timestamp places the displayed 20:17 at real 20:12. The continuous sequence keeps Cora in the glass loft 20:07–20:16,covering the supplied interval."
    },
    {
      "id": "a02-evidence",
      "title": "The covered corridor",
      "description": "Continuous synchronized courtyard footage places Jules outside 20:08–20:17 and shows the only connecting corridor empty. It excludes him from reaching the service room during the supplied interval, not from unrelated provenance questions."
    },
    {
      "id": "a03-evidence",
      "title": "An uncorroborated interval",
      "description": "Mara’s 20:05–20:20 workroom claim is self-written. Ben’s return observation uses a dial 5 minutes fast, placing it 20:18. It does not corroborate her location 20:10–20:14."
    },
    {
      "id": "a05-evidence",
      "title": "The temporary opening",
      "description": "The installation plan and officer’s inspection confirm a removable panel connecting the installation passage to the service-room alcove. Its clips have fresh tool marks. The ordinary door latch need not be opened for this access."
    },
    {
      "id": "a06-evidence",
      "title": "A corroborated passage entry",
      "description": "Mara’s equipment includes the panel driver. More specifically, the badge system and steward’s separate tally place her contractor badge in the supervised installation passage at 20:11,contradicting her continuous-workroom claim."
    },
    {
      "id": "a07-evidence",
      "title": "A documented conflict",
      "description": "The disputed certificate was issued by Mara’s company and claims Gideon’s approval. His dated draft disputes that approval and proposes reporting it. This supports a specific conflict, alongside the independently recorded passage opportunity."
    },
    {
      "id": "a09-evidence",
      "title": "The material chain is preserved",
      "description": "The storage cage contains a panel wrapper tied to the passage booking and a replacement certificate under the same company order. Officers preserve location and custody for examination; the items are not treated as self-explanatory public accusations."
    },
    {
      "id": "a10-evidence",
      "title": "The changed account",
      "description": "Mara’s recorded interview acknowledges passage entry after an initial continuous-workroom claim. The admission is handled by the officer and compared with existing records, not used to erase the need for material examination."
    },
    {
      "id": "b01-evidence",
      "title": "A circuit is not continuous observation",
      "description": "Ben’s south-room signature at displayed 20:23 corrects to 20:18 because the dial is 5 minutes fast. It proves a visit then, not Mara’s continuous presence during 20:10–20:14."
    },
    {
      "id": "b02-evidence",
      "title": "Observed absence versus lost view",
      "description": "The guest lost sight of Cora behind a banner but did not see her leave. Continuous loft and courtyard records independently cover Cora and Jules during the relevant interval and exclude the required corridor crossing."
    },
    {
      "id": "b03-evidence",
      "title": "A delivered notice, an unsent draft",
      "description": "The insurer draft was not sent. A separate signed afternoon delivery slip brought Mara an inspection notice naming the disputed certificate reference. Awareness rests on that delivery, not on assuming an unsent draft was read."
    },
    {
      "id": "b05-evidence",
      "title": "A traceable outgoing bundle",
      "description": "The 20:25 collection slip identifies Mara’s company order and an outer bundle of backing sheets. Ben certified collection only. The shared order number supplies a route for officers to check the bundle’s contents."
    },
    {
      "id": "b06-evidence",
      "title": "The panel sleeve diagram",
      "description": "The preserved inner sleeve maps a removable opening from the supervised installation passage into the service-room alcove. It supplies a physical access hypothesis that does not require the ordinary door, but its timing needs independent records."
    },
    {
      "id": "b07-evidence",
      "title": "Badge and wearer at 20:11",
      "description": "The electronic entry and independently taken steward account place Mara wearing her contractor badge in the installation passage at 20:11. This contradicts her continuous-workroom account and connects her to the panel route."
    },
    {
      "id": "b09-evidence",
      "title": "A limited sound recollection",
      "description": "The guest initially could not identify the second voice and suggested Mara only after learning she was questioned. The recollection remains uncertain and is not needed to establish the independently documented access and conflict."
    },
    {
      "id": "b10-evidence",
      "title": "An account checked against prior evidence",
      "description": "Mara’s recorded account describes the panel confrontation and outgoing papers. Officers compare it to the sleeve, independently recorded entry, delivered notice, and preserved bundle rather than relying on a story’s apparent completeness."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The room behind the opening",
      "location": "Alder Gallery entrance",
      "body": [
        "The portrait unveiling has stopped before the speeches. Curator Gideon Shaw has been found dead in a service room, and Inspector Maud Ellis has secured the gallery. There is no need for you to see the body. Maud asks you to help compare the building’s records while her officers handle the scene and the witnesses.",
        "The central portrait hangs in a unusually deep transport frame. Its title gives the exhibition a harmless nickname: the hollow portrait. Tonight, people have begun repeating that phrase as though it explains a locked service room. Maud would prefer measurements, times, and sources. She offers you a legitimate way to gather them without intruding on the investigation itself."
      ],
      "meets": [
        "maud"
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
      "title": "Two investigations within one building",
      "location": "The closed foyer",
      "body": [
        "The known interval is short. Gideon completed a witnessed call at twenty oh-nine; the service-room discovery was reported at twenty sixteen. Maud’s team narrows the relevant attack interval to twenty ten through twenty fourteen. Three people had access to the installation work: conservator Cora, lender Jules, and contractor Mara.",
        "You can follow the frame and temporary building fixtures through the workshop records, or trace the exhibition’s people and papers through the porter’s route. Either method must explain opportunity and test the claim that the service room could not be entered. An unusual frame is a lead, not a supernatural explanation and not evidence against its maker by itself."
      ],
      "clues": [
        "opening-2-evidence"
      ],
      "choices": [
        {
          "id": "a",
          "label": "Reconstruct the frame, clocks, and temporary access",
          "to": "a01",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "b",
          "label": "Follow witness accounts and the outgoing installation papers",
          "to": "b01",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a01": {
      "title": "A clock that photographs well",
      "location": "The foyer photograph station",
      "body": [
        "The exhibition camera shows Cora in the glass loft beside a dial reading twenty seventeen. A visitor has therefore placed her there after the relevant interval and assumed the camera offers no useful alibi. Ben’s clock sheet records the gallery dials as five minutes fast since the afternoon reset.",
        "The camera file carries an independent synchronized time of twenty twelve. More importantly, its continuous sequence shows Cora working from twenty oh-seven through twenty sixteen without leaving the loft. The attractive dial in a photograph can distract from a stronger timestamp and an uninterrupted sequence. You preserve both rather than cropping the dial away and hiding why the first interpretation seemed plausible."
      ],
      "meets": [
        "ben",
        "cora"
      ],
      "clues": [
        "a01-evidence"
      ],
      "routeLabel": "The installation reconstruction",
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
      "title": "A gate across the courtyard",
      "location": "The service-lift camera desk",
      "body": [
        "Jules appears on a separate courtyard camera beside a delivery vehicle from twenty oh-eight until twenty seventeen. The gate reader is synchronized to the same clock standard as the foyer file. An officer has checked the full recording, not only the two stills selected for a visitor’s phone.",
        "The service room cannot be reached from that courtyard without passing the covered corridor in view. The corridor stays empty. You can exclude Jules from that access route during the interval without declaring every statement he has made about the portrait true. The distinction leaves room to investigate its provenance later while narrowing the immediate question of who could reach Gideon."
      ],
      "meets": [
        "jules"
      ],
      "clues": [
        "a02-evidence"
      ],
      "routeLabel": "The installation reconstruction",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a03"
        }
      ]
    },
    "a03": {
      "title": "A maker’s missing quarter hour",
      "location": "The temporary workshop",
      "body": [
        "Mara’s job card says she spent twenty oh-five to twenty twenty repairing a trolley in the south workroom. The card is in her own hand and has no witness or machine timestamp. Ben remembers seeing her return there, but the clock he read was a gallery dial showing twenty twenty-three. Corrected, that is twenty eighteen, after the relevant interval.",
        "There is a tool receipt for the morning, but no evidence that the trolley repair occupied the period she claims. You record a gap rather than writing guilty in its place. The next stage must test how someone with that gap could actually reach the service room without forcing its apparent locked entrance."
      ],
      "meets": [
        "mara"
      ],
      "clues": [
        "a03-evidence"
      ],
      "routeLabel": "The installation reconstruction",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a04"
        }
      ]
    },
    "a04": {
      "title": "What does the timing actually exclude?",
      "location": "The installation desk",
      "body": [
        "A fair timeline must account for each clock and the difference between a continuous observation and a lone statement. Choose the conclusion that narrows the investigation without turning an unexplained gap into a conviction."
      ],
      "puzzle": {
        "prompt": "Which next step follows the timeline?",
        "options": [
          {
            "id": "o1",
            "label": "Investigate Cora because the dial photographed beside her reads 20:17.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "Treat Mara’s self-written job card as equal to a continuous independent recording.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o3",
            "label": "Investigate Mara’s uncorroborated interval while retaining the independent exclusions for Cora and Jules.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "Charge all three because they had access to the exhibition before opening.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "a05"
      },
      "routeLabel": "The installation reconstruction"
    },
    "a05": {
      "title": "The room that was never a sealed box",
      "location": "The gallery service plan",
      "body": [
        "The service room’s ordinary door has a spring latch. Its key log accounts for the issued keys, which helped create the locked-room rumor. The temporary installation plan, however, shows a wide maintenance opening behind the deep portrait frame. That opening joins a supervised installation passage to the room’s storage alcove.",
        "Maud has an officer inspect the opening; you do not crawl into the secured scene. A removable inner panel would permit access during installation, and it has fresh tool marks at its retaining clips. The ordinary door’s latch could remain untouched. You now have a physically documented alternative to the false choice between a missing key and an impossible event."
      ],
      "clues": [
        "a05-evidence"
      ],
      "routeLabel": "The installation reconstruction",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a06"
        }
      ]
    },
    "a06": {
      "title": "The tool that fits more than a story",
      "location": "The contractor’s bench",
      "body": [
        "Mara’s signed equipment list includes the narrow driver specified for the panel clips. Other gallery tools use different heads. Possessing a suitable tool establishes capability, not that a particular person used it during the interval. Maud asks you to connect the capability to a movement or record rather than rely on a dramatic match.",
        "Ben finds a temporary passage booking under Mara’s contractor number at twenty eleven. The booking system requires a badge at the supervised gate; the steward’s handwritten tally records the same badge. These records are independent of her workroom job card. The contradiction is now specific enough to ask about without pretending that a tool list alone solved a death."
      ],
      "clues": [
        "a06-evidence"
      ],
      "routeLabel": "The installation reconstruction",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a07"
        }
      ]
    },
    "a07": {
      "title": "An invoice behind the backing board",
      "location": "The secured evidence desk",
      "body": [
        "An officer supplies a photograph of a document recovered from the frame’s shallow storage recess. It is a restoration certificate bearing Gideon’s supposed approval, issued by Mara’s installation company. Gideon’s dated complaint draft, found at his desk, disputes that approval and says he intended to report the false certificate after the opening.",
        "The document supplies a possible reason for a confrontation; the passage evidence supplies an opportunity. Neither should be allowed to do the other’s job. Jules had an interest in the portrait’s value, but the company reference on the disputed certificate is not his. You keep the provenance inquiry and the timeline connected without collapsing them into whichever person seems easiest to dislike."
      ],
      "clues": [
        "a07-evidence"
      ],
      "routeLabel": "The installation reconstruction",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a08"
        }
      ]
    },
    "a08": {
      "title": "Capability is not presence",
      "location": "The evidence comparison table",
      "body": [
        "Which observations connect the false workroom account to actual access, rather than merely show that a contractor owned useful tools? Select the independent presence evidence. The certificate’s motive will matter, but it cannot substitute for location."
      ],
      "puzzle": {
        "prompt": "Which two records directly contradict Mara’s continuous-workroom account?",
        "options": [
          {
            "id": "o1",
            "label": "The supervised-gate badge record places her contractor badge in the passage at 20:11.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "The steward’s independent tally records the same badge at that passage.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "The portrait has a deep frame and therefore every installer is guilty.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o4",
            "label": "Jules lent a valuable painting and therefore could not be outside with a vehicle.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "a09"
      },
      "routeLabel": "The installation reconstruction"
    },
    "a09": {
      "title": "Preserve the material before the question",
      "location": "The contractor’s storage cage",
      "body": [
        "Maud obtains the proper authority to secure the contractor’s storage cage. A panel wrapper inside carries the passage booking reference, and a replacement certificate lies beneath a proof sheet from the same company order. These items do not need to be waved at Mara in a public gallery. They need their positions and custody recorded.",
        "You provide your chronological summary and identify which copies came from which source. The tool marks and disputed papers will receive professional examination. Your work has made that examination purposeful: it is testing a specific access-and-conflict chain rather than searching an unusual frame for something that could look suspicious in a photograph."
      ],
      "clues": [
        "a09-evidence"
      ],
      "routeLabel": "The installation reconstruction",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a10"
        }
      ]
    },
    "a10": {
      "title": "Ask an answerable question",
      "location": "The inspector’s interview room",
      "body": [
        "Mara is interviewed by Maud, not confronted by an amateur investigator alone. The question is precise: how can her claimed continuous repair in the south room be reconciled with two passage-entry records during the relevant interval and the documented access panel? The certificate conflict supplies context, not an automatic answer.",
        "Mara first repeats the job-card times, then accepts that she entered the passage. Maud pauses to record the change of account properly. You are not asked to decide the legal consequence. You are asked whether your evidence chain still distinguishes what was observed, what was inferred, and what has now been admitted."
      ],
      "clues": [
        "a10-evidence"
      ],
      "routeLabel": "The installation reconstruction",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a11"
        }
      ]
    },
    "a11": {
      "title": "The explanation that can be tested",
      "location": "The inspector’s briefing table",
      "body": [
        "The mystery began with a supposedly impossible room. Choose the report that actually follows the timeline, physical access, and documented conflict. A report that invents a method or turns an alibi gap into a verdict would go beyond the investigation."
      ],
      "puzzle": {
        "prompt": "Which conclusion should your evidence summary support?",
        "options": [
          {
            "id": "o1",
            "label": "The room was impossible to enter because its ordinary door keys were accounted for.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "Mara’s recorded passage entry and false workroom account warrant the focused access-and-certificate inquiry; the panel provides a physical route while independent recordings exclude the other immediate access candidates.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "The matching driver alone proves the precise cause of death without further examination.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o4",
            "label": "Cora’s photographed wall clock overrules its synchronized file record and continuous footage.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "a12"
      },
      "routeLabel": "The installation reconstruction"
    },
    "a12": {
      "title": "The frame has an ordinary depth",
      "location": "The gallery’s closed exhibition room",
      "body": [
        "The follow-up examination and Maud’s formal interview establish the confrontation behind the frame. Mara admits that Gideon’s planned report threatened the false certificate scheme; the secured material supports the account. The case proceeds through the officer’s evidence process rather than the exhibition’s rumors.",
        "Your records-and-fixtures route has turned a locked-room story into a checkable chain of times, access, and conflict. Cora prepares a condition report on the portrait. Nobody asks the picture to explain a death. The people and records around it have done that difficult work."
      ],
      "ending": {
        "title": "A physical route, a preserved case",
        "kind": "solved",
        "body": [
          "You established the false alibi through independent records and identified the temporary access concealed by the frame. Professional examination and a recorded admission completed the case against Mara.",
          "The gallery retains your source-by-source timeline with the installation records. The portrait will return under a shallow display mount whose plan nobody mistakes for a sealed wall."
        ]
      },
      "routeLabel": "The installation reconstruction"
    },
    "b01": {
      "title": "The porter’s circuit",
      "location": "The rear stair landing",
      "body": [
        "Ben begins with what he actually did: a timed circuit from the foyer through the kitchen hatch, loading bay, and south workroom. His checklist has four separate signatures, each made by the person he met. It does not say what those people did between his visits.",
        "At the south room, Mara signed when the nearby dial read twenty twenty-three. The dial’s posted correction is five minutes, placing that visit at twenty eighteen. Her signature therefore cannot establish she was there during twenty ten through twenty fourteen. Ben is relieved that you do not ask him to turn a real visit into a continuous alibi he never claimed to observe."
      ],
      "meets": [
        "ben",
        "mara"
      ],
      "clues": [
        "b01-evidence"
      ],
      "routeLabel": "The porter’s paper trail",
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
      "title": "A statement with a missing source",
      "location": "The gallery hospitality room",
      "body": [
        "A guest says Cora left the loft just before the incident. When Maud asks how the guest knows, he explains that he could no longer see her through a display banner. Losing sight of someone is not observing them leave. The continuous conservation camera shows Cora working in the loft from twenty oh-seven to twenty sixteen.",
        "Jules’s separate courtyard recording covers twenty oh-eight to twenty seventeen and includes the only corridor back to the service room. It remains empty. These checks are supplied by Maud’s team so you can correct the guest’s inference without repeating it as a new eyewitness account. The records do not make either person universally trustworthy; they answer the limited movement question."
      ],
      "meets": [
        "cora",
        "jules"
      ],
      "clues": [
        "b02-evidence"
      ],
      "routeLabel": "The porter’s paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b03"
        }
      ]
    },
    "b03": {
      "title": "The complaint nobody heard read",
      "location": "The curator’s correspondence desk",
      "body": [
        "Gideon’s assistant has printed the morning’s outgoing message list. One draft to the exhibition insurer is marked not sent. It disputes a certificate issued under Mara’s company number and refers to a backing-board compartment in the transport frame. The draft has a timestamp but no delivery receipt.",
        "You cannot assume Mara read the draft merely because Gideon wrote it. Ben, however, kept a signed hand-delivery slip for a related inspection notice taken to the south workroom that afternoon. It names the disputed certificate reference. That notice establishes awareness of the conflict without pretending the unsent draft reached anybody. The distinction is easy to miss when both papers tell a similar story."
      ],
      "clues": [
        "b03-evidence"
      ],
      "routeLabel": "The porter’s paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b04"
        }
      ]
    },
    "b04": {
      "title": "A reason, not yet a verdict",
      "location": "The correspondence table",
      "body": [
        "The inquiry now includes a false continuous-alibi implication and a documented professional conflict. Which two observations should guide further checking without confusing an inferred departure or an unsent message with something actually observed?"
      ],
      "puzzle": {
        "prompt": "Select the supported distinctions.",
        "options": [
          {
            "id": "o1",
            "label": "Ben’s corrected visit time is later than the relevant interval and cannot establish a continuous alibi.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "The guest’s lost view proves Cora crossed the corridor.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o3",
            "label": "The signed inspection-notice slip establishes Mara’s awareness; the unsent draft alone does not.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "The existence of a valuable picture proves its lender committed the attack.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "b05"
      },
      "routeLabel": "The porter’s paper trail"
    },
    "b05": {
      "title": "The paper’s journey through the loading bay",
      "location": "The carrier collection desk",
      "body": [
        "The carrier retained duplicate slips for installation materials removed that evening. A bundle described as spare backing sheets was collected under Mara’s company order at twenty twenty-five. Ben signed only for the outer bundle. He could not see its inner papers and did not certify them.",
        "The order number also appears on a certificate proof in the exhibition office. You ask Maud to preserve the collection route rather than chase the vehicle yourself. If the disputed certificate’s earlier proof traveled with those sheets, it may illuminate the conflict. The slip gives a lawful route to investigate; it does not let you assert that every page you want must be inside."
      ],
      "clues": [
        "b05-evidence"
      ],
      "routeLabel": "The porter’s paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b06"
        }
      ]
    },
    "b06": {
      "title": "The depot’s carbon copy",
      "location": "The approved carrier depot",
      "body": [
        "At Maud’s request, the depot custodian produces the bundle under its original seal. Its carbon collection copy includes a line that the gallery copy lost at the fold: retain inner panel sleeve. The sleeve’s diagram shows a maintenance opening concealed behind the deep transport frame.",
        "Mara’s workroom account described a trolley repair, not a panel removal. The diagram makes it possible to test how the apparently locked service room could have been approached without using its ordinary door. It does not establish when the panel moved. You copy the diagram’s reference and ask for the supervised-passage records that belong to that opening rather than guessing from a remembered sound."
      ],
      "clues": [
        "b06-evidence"
      ],
      "routeLabel": "The porter’s paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b07"
        }
      ]
    },
    "b07": {
      "title": "Two records at the passage gate",
      "location": "The installation steward’s booth",
      "body": [
        "The badge system records Mara’s contractor badge at twenty eleven. The steward’s separate paper tally records the same badge after checking the wearer. That observation is stronger than a badge event alone, since a badge might otherwise be borrowed. Maud has the steward describe the encounter without first showing him the electronic record.",
        "The records agree independently. They place Mara on a route her continuous-workroom account excludes, within the supplied interval. The passage contains the removable opening shown by the panel sleeve. You have connected the papers’ journey to a physical place and a witnessed movement, not merely followed a pile of documents until it began to look ominous."
      ],
      "clues": [
        "b07-evidence"
      ],
      "routeLabel": "The porter’s paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b08"
        }
      ]
    },
    "b08": {
      "title": "When a token needs a person",
      "location": "The steward’s interview table",
      "body": [
        "Which two observations together establish more than the presence of a borrowed access token? The question matters because the strongest-looking electronic line may still omit who carried it."
      ],
      "puzzle": {
        "prompt": "Select the independent evidence of Mara’s passage entry.",
        "options": [
          {
            "id": "o1",
            "label": "The badge system logs her contractor token at 20:11.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o2",
            "label": "The steward independently identifies Mara wearing that badge at the same entry.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o3",
            "label": "Ben saw an unopened bundle leave after 20:25.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          },
          {
            "id": "o4",
            "label": "The portrait’s nickname sounds like a description of an impossible crime.",
            "correct": false,
            "feedback": "Some of those observations do not establish the claim. Check what each source actually proves."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Some of those observations do not establish the claim. Check what each source actually proves.",
        "correctFeedback": "Those independent observations support the inference together.",
        "correctTo": "b09"
      },
      "routeLabel": "The porter’s paper trail"
    },
    "b09": {
      "title": "A voice does not replace a record",
      "location": "The gallery’s music-room doorway",
      "body": [
        "Another guest recalls hearing a disagreement from behind the exhibition wall. She identifies one voice as Gideon’s but is unsure of the second. Mara’s voice would fit, she says, after hearing that Mara is being questioned. Maud records both the initial uncertainty and the later suggestion.",
        "You do not need the voice identification to rescue the evidence chain. It is an untested recollection that may be influenced by new information. The documented notice, false workroom account, witnessed passage entry, and physical opening are stronger. Knowing what not to add to a case is part of solving it; an uncertain flourish can weaken a careful account by making its boundaries disappear."
      ],
      "clues": [
        "b09-evidence"
      ],
      "routeLabel": "The porter’s paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b10"
        }
      ]
    },
    "b10": {
      "title": "Offer the contradiction to the right person",
      "location": "The inspector’s quiet interview room",
      "body": [
        "Maud interviews Mara with the preserved records available. She asks about the passage entry and delivered inspection notice, not about a ghostly sound through a frame. Mara first blames a borrowed badge. The steward’s independent identification makes that explanation testable rather than merely convenient.",
        "After the proper interview safeguards, Mara gives an account of confronting Gideon through the removable panel and attempting to hide the disputed certificate papers in the outgoing bundle. Maud has the bundle examined against that account. The confession is not accepted simply because it produces a neat ending; it must fit details already secured before the interview."
      ],
      "clues": [
        "b10-evidence"
      ],
      "routeLabel": "The porter’s paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b11"
        }
      ]
    },
    "b11": {
      "title": "What does a reliable resolution retain?",
      "location": "The inspector’s briefing table",
      "body": [
        "Your witness-and-paper route has reached a different method of resolution. Choose the report that preserves the independently established contradiction and the material checks, rather than allowing a dramatic confession or uncertain voice to rewrite how the case was solved."
      ],
      "puzzle": {
        "prompt": "Which final summary is supported?",
        "options": [
          {
            "id": "o1",
            "label": "The uncertain voice identification proves the entire case and makes the earlier records unnecessary.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o2",
            "label": "An unsent draft establishes that every suspect knew every detail of Gideon’s complaint.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          },
          {
            "id": "o3",
            "label": "The delivered notice, witnessed passage entry, false workroom account, and panel route support the inquiry; the recorded admission is then checked against preserved papers and physical details.",
            "correct": true,
            "feedback": "That explanation fits the evidence."
          },
          {
            "id": "o4",
            "label": "A badge event always identifies its wearer without requiring any other observation.",
            "correct": false,
            "feedback": "Compare the complete chain of observations, rather than relying on one suggestive detail."
          }
        ],
        "correctTo": "b12"
      },
      "routeLabel": "The porter’s paper trail"
    },
    "b12": {
      "title": "A public correction, a private loss",
      "location": "The gallery courtyard",
      "body": [
        "Maud’s team confirms the interview account against the secured material. The false certificate scheme and the confrontation become part of the formal case against Mara. Gideon’s family receives the explanation before the gallery issues a statement about its exhibition.",
        "You followed the porter’s route, tested the source of each account, and traced a document bundle to the physical access it described. The ending does not make the loss tidy. It prevents an invented locked-room legend from becoming the account people repeat in place of what the evidence actually established."
      ],
      "ending": {
        "title": "An admission tested against its sources",
        "kind": "solved",
        "body": [
          "Your witness-and-paper route exposed a false alibi and gave Maud a focused, independently supported interview. The admission was checked against records and material preserved before it was made.",
          "Cora reopens the gallery’s work log at a clean page. Its next heading is simply sources, a modest word for the discipline that kept this case from becoming another rumor."
        ]
      },
      "routeLabel": "The porter’s paper trail"
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
  ],
  "contentNote": "Non-graphic murder mystery"
};
