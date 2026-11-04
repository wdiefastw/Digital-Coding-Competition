export default {
  "id": "scarlet-orchard",
  "title": "The Scarlet Orchard",
  "genre": "Murder mystery",
  "difficulty": "Challenging",
  "duration": "10–20 min",
  "setting": "A heritage apple orchard on the morning of its autumn sale",
  "description": "The orchard’s owner is found dead before the first buyer arrives. Walk the irrigation paths or follow the sale’s disputed provenance records; both routes lead beyond a very tidy account of the morning.",
  "contentNote": "Non-graphic murder mystery",
  "revision": 2,
  "flags": [
    "ground-route",
    "provenance-route"
  ],
  "characters": [
    {
      "id": "lea",
      "name": "Inspector Lea Holt",
      "role": "Investigating officer",
      "description": "Records a witness’s source of time before asking whether two accounts agree.",
      "color": "#8ba4a4"
    },
    {
      "id": "dorian",
      "name": "Dorian Vale",
      "role": "Orchard manager",
      "description": "Knows the irrigation schedule and the names buyers expect to hear at the autumn sale.",
      "color": "#b39a78"
    },
    {
      "id": "sera",
      "name": "Sera Moss",
      "role": "Grafting specialist",
      "description": "Keeps old cultivar names beside modern catalog numbers so a new label cannot quietly replace a tree’s history.",
      "color": "#a2a97e"
    },
    {
      "id": "marta",
      "name": "Marta Quill",
      "role": "Sale registrar",
      "description": "Marks the difference between a paper received today and a statement made today.",
      "color": "#b491a8"
    }
  ],
  "clues": [
    {
      "id": "window",
      "title": "The medically relevant interval",
      "description": "The officer’s preliminary evidence places the fatal confrontation between 09:10 and 09:20 on the checked farm-office clock. The room remains under police control."
    },
    {
      "id": "accounts",
      "title": "Three claims about the same morning",
      "description": "Dorian says he tended the pump throughout that interval. Sera says she remained with the visiting graft examiner. Marta says she was checking registration at the gate; those claims have not yet been independently checked."
    },
    {
      "id": "ground-1-observation",
      "title": "The automatic pump schedule",
      "description": "The timer runs 09:05–09:25 without continuous operator presence. No fault is logged."
    },
    {
      "id": "ground-1-document",
      "title": "The upper-branch event and checked witnesses",
      "description": "Pressure records an upper-yard branch opening at 09:17. Sera’s independently timed examination and Marta’s checked gate sources cover the relevant window."
    },
    {
      "id": "ground-1-deduction",
      "title": "A limited alibi contradiction",
      "description": "Pump sound does not establish continuous presence. The remote event challenges part of Dorian’s claim but does not identify the hose user."
    },
    {
      "id": "ground-2-observation",
      "title": "The limited trail and independent object movement",
      "description": "The sole model is shared. Timed original images trace the distinctive wallet, which Dorian claims to have retained, toward the protected room."
    },
    {
      "id": "ground-2-document",
      "title": "The recorded admission and its checks",
      "description": "With legal support Dorian admits the visit and fatal attack; details are checked against pressure, appointment, and image records."
    },
    {
      "id": "ground-2-deduction",
      "title": "The ground-route reconstruction",
      "description": "Mechanical and physical findings corroborate a visit without being inflated into unseen acts. The later formal admission establishes responsibility."
    },
    {
      "id": "paper-1-observation",
      "title": "The graft’s complete provenance",
      "description": "TreeR-14 has older rootstock and a 2016 graft; the later catalog omits those qualifications present in the source and first proof."
    },
    {
      "id": "paper-1-document",
      "title": "The approval and appointment trail",
      "description": "Dorian approved the changed proof. Rowan’s signed correction demands restoration and proposes a meeting just after nine."
    },
    {
      "id": "paper-1-deduction",
      "title": "A documented dispute, not proof of the act",
      "description": "The papers establish a specific alteration and meeting context; they do not by themselves identify conduct inside the protected room."
    },
    {
      "id": "paper-2-observation",
      "title": "The receipt event",
      "description": "The 09:15 stamp records office receipt. Blank carrier fields, sender initials, and a twice-cleared basket do not establish a runner’s continuous journey."
    },
    {
      "id": "paper-2-document",
      "title": "The independently checked visit evidence",
      "description": "An authenticated 09:12 appointment note and timed 09:18 wallet movement contradict Dorian’s no-visit account; the technical team separately tests the pump claim."
    },
    {
      "id": "paper-2-deduction",
      "title": "The sourced formal outcome",
      "description": "The combined evidence leads to a safeguarded admission of the fatal act. Provenance and estate issues remain assigned to the appropriate separate review."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "Before the sale bell",
      "location": "The farm-office veranda",
      "body": [
        "The first buyers arrive carrying empty fruit boxes. Instead of opening the sale, Inspector Lea Holt asks them to wait at the front gate. Orchard owner Rowan Cale has been found dead in the locked-up tool room. The officer is investigating a fatal confrontation and has secured the room. There is no need for you to enter it or see anything graphic.",
        "You were invited to help record the old orchard varieties for the heritage trust. Lea asks whether you can keep a clear account of the public records and the witnesses willing to speak. The preliminary interval is 09:10 to 09:20 on the checked office reference. The sale bell did not ring, and a buyer’s watch is later discovered to be four minutes fast. Lea wants a source beside every useful time.",
        "Dorian, the manager, claims to have been at the irrigation pump. Sera, the grafting specialist, claims continuous company with a visiting examiner. Marta, the registrar, says she remained at the gate. They are accounts to test, not a multiple-choice menu of guilty people."
      ],
      "meets": [
        "lea"
      ],
      "clues": [
        "window",
        "accounts"
      ],
      "choices": [
        {
          "id": "begin",
          "label": "Establish the first limits before choosing a route",
          "to": "first-question"
        }
      ]
    },
    "first-question": {
      "title": "A reference before a suspect",
      "location": "The farm-office desk",
      "body": [
        "The source of a minute matters when the relevant interval is only ten minutes long. The officer has not asked you to make anyone’s account sound more precise than it was. Begin with the statement the current evidence allows."
      ],
      "puzzle": {
        "prompt": "Which statement should guide the first comparison?",
        "correctTo": "routes",
        "options": [
          {
            "id": "sources",
            "label": "Compare the 09:10–09:20 window with independently checked location evidence, correcting any different clock references before drawing conclusions.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "pump",
            "label": "The sound of a working pump proves its manager remained beside it throughout.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "sale",
            "label": "A witness near a familiar sale bell has an exact time even if the bell did not ring.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "rumor",
            "label": "Choose the person buyers already distrust and fit the time sources afterward.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ]
      }
    },
    "routes": {
      "title": "Two sides of the orchard",
      "location": "The gravel path outside the office",
      "body": [
        "Lea assigns one team to inspect the permitted irrigation paths and another to secure the sale’s documentation. You can accompany either. The ground route will test a mechanical alibi and a physical trail without letting mud become a magical identification. The provenance route will follow the disputed trees and the documents connected to Rowan’s final appointment.",
        "The other team’s work may reach Lea as a separately sourced report, but your notebook will distinguish what your route established directly. Both methods must account for the same death and the same people. The orchard does not acquire a different culprit because you turn left at the gravel path."
      ],
      "choices": [
        {
          "id": "ground",
          "label": "Inspect the irrigation system and orchard paths",
          "to": "ground-1",
          "excludesFlags": [
            "provenance-route"
          ]
        },
        {
          "id": "provenance",
          "label": "Follow the graft records and sale-registration trail",
          "to": "paper-1",
          "excludesFlags": [
            "ground-route"
          ]
        }
      ]
    },
    "ground-1": {
      "title": "The machine that could work alone",
      "location": "The supervised pump enclosure",
      "body": [
        "Dorian says buyers heard the pump between 09:10 and 09:20, which he presents as proof that he stayed beside it. The enclosure’s instruction card distinguishes manual starting from automatic running. A timer set at 08:00 starts the morning cycle at 09:05 and stops it at 09:25 unless a fault intervenes. A steady sound during that interval therefore places the pump, not necessarily an operator.",
        "The fault log records no interruption. A pressure recorder is clocked against the office reference and shows ordinary running until 09:17, when a brief dip occurs. The maintenance key says a dip of that shape indicates the upper-yard hose branch was opened. It does not record who opened it. Dorian’s initial statement said he never left the enclosure or used any remote branch."
      ],
      "routeLabel": "The irrigation investigation",
      "clues": [
        "ground-1-observation"
      ],
      "meets": [
        "dorian",
        "sera"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "ground-1-record"
        }
      ],
      "setFlags": [
        "ground-route"
      ]
    },
    "ground-1-record": {
      "title": "A path with more than one user",
      "location": "The upper-yard hose stand",
      "body": [
        "The upper-yard hose stand lies beside the tool-room approach. Its latch has a fresh wash line across a lower shelf, consistent with use before the ground dried. Sera’s outdoor graft work ended at 09:00; she then entered the examiner’s room. The visitor’s signed inspection sequence and a continuous training recording place her there from 09:06 to 09:24. The recording has its original time reference and the examiner independently confirms the company.",
        "Marta’s gate camera and two sequential buyer-registration receipts place her at the entrance through the relevant window; the officer is checking those sources separately. The hose dip establishes an event at a place. It should not be promoted into the identity of its user merely because two other accounts now have support.",
        "Lea asks which two deductions survive the proper limits of both machine and witness evidence."
      ],
      "routeLabel": "The irrigation investigation",
      "clues": [
        "ground-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "ground-1-question",
          "requires": [
            "ground-1-observation",
            "ground-1-document"
          ]
        }
      ]
    },
    "ground-1-question": {
      "title": "A question worth getting right",
      "location": "The upper-yard hose stand",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The irrigation investigation",
      "puzzle": {
        "prompt": "Which two conclusions follow directly from the pump and hose records?",
        "options": [
          {
            "id": "automatic",
            "label": "The timer can account for continuous pump sound without continuous human presence.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "remote",
            "label": "A pressure event places use of the upper-yard branch at 09:17 and conflicts with a claim that no branch was used, but does not itself identify the user.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "identity",
            "label": "A hose-pressure dip records Dorian’s name as surely as a photograph would.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "sound",
            "label": "The buyers’ pump sound outweighs the explicit automatic-running instructions.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "ground-1-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "ground-1-finding": {
      "title": "A finding you can defend",
      "location": "The upper-yard hose stand",
      "body": [
        "The sound-based alibi is weaker than Dorian presented it. The pressure event creates a specific question about activity near the tool-room approach at 09:17. Neither finding yet establishes who was there or what happened inside the protected room.",
        "Lea takes Dorian’s account again without letting the corrected mechanical interpretation silently replace his earlier wording. He now says he may have checked the upper branch briefly. That revision is recorded with its time and source. An investigation can test a changing account without treating every correction as a confession."
      ],
      "routeLabel": "The irrigation investigation",
      "clues": [
        "ground-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "ground-1-next"
        }
      ]
    },
    "ground-1-next": {
      "title": "The investigation moves forward",
      "location": "The supervised pump enclosure",
      "body": [
        "At the permitted path boundary, Lea’s evidence officer has documented a narrow trail from the upper hose stand to the tool-room threshold. The boot pattern appears elsewhere in the orchard too; Dorian and two seasonal workers wear the same supplied model. You will need a second identifying source before calling the trail his.",
        "Sera brings the graft register to the outdoor table. Rowan had asked Dorian to bring the original cultivar papers to the tool room shortly after nine. The appointment belongs to the provenance team’s work, but a signed copy can establish why a legitimate visitor might have approached that door before the confrontation."
      ],
      "routeLabel": "The irrigation investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "ground-2",
          "requires": [
            "ground-1-deduction"
          ]
        }
      ]
    },
    "ground-2": {
      "title": "A trace and the person it cannot name",
      "location": "The orchard evidence table",
      "body": [
        "The trail’s ridged sole pattern matches three issued pairs. Its clay contains the upper yard’s pale grit, but that grit is not unique to one person. Lea will not let a row of familiar boots turn a class characteristic into an individual identification.",
        "A farm camera provides a separate source. At 09:16 on the checked reference it shows Dorian collecting the repaired document wallet Rowan requested, with its distinctive white strap. At 09:18 a second permitted-path camera shows that wallet carried from the hose stand toward the tool-room approach. The face is obscured by an umbrella. Dorian says he retained the wallet throughout; he has revised the hose visit, but still denies approaching the room.",
        "The appointment and continuous-possession claim make a testable combination with the timed movement. The boot trail can corroborate a possible route, but it is not allowed to identify a person by itself."
      ],
      "routeLabel": "The irrigation investigation",
      "clues": [
        "ground-2-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "ground-2-record"
        }
      ]
    },
    "ground-2-record": {
      "title": "A formal account after the evidence",
      "location": "The farm office interview room",
      "body": [
        "Lea obtains the original images and the wallet’s repair record, then arranges an interview with legal support available. Dorian first admits reaching the tool room and later admits the fatal attack during the argument with Rowan. The officer records the admission and checks its details against the pressure log, the appointment, and the timed wallet movement.",
        "Rowan had discovered that sale papers described a modern graft as an unaltered heritage tree. The disagreement and a threat to report it supply the meeting’s context; the papers do not by themselves prove a killing. Nor does the later admission magically make the umbrella image reveal a face. The signed case summary must keep those differences visible.",
        "Lea asks what your ground route can honestly contribute to the formal case now that the outcome is known."
      ],
      "routeLabel": "The irrigation investigation",
      "clues": [
        "ground-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "ground-2-question",
          "requires": [
            "ground-2-observation",
            "ground-2-document"
          ]
        }
      ]
    },
    "ground-2-question": {
      "title": "A question worth getting right",
      "location": "The farm office interview room",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The irrigation investigation",
      "puzzle": {
        "prompt": "Which final account keeps the physical findings and later admission in their proper roles?",
        "options": [
          {
            "id": "bounded",
            "label": "The automatic alibi fails; a timed branch event and independently traceable wallet movement corroborate a visit, while the later safeguarded admission establishes the fatal act.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "boot",
            "label": "A shared boot model alone identified Dorian and established everything done inside the room.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "image",
            "label": "The later admission turns the obscured image into a direct facial identification.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "paper",
            "label": "A disputed cultivar name is itself proof of homicide regardless of location and interview evidence.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "ground-2-finding"
      }
    },
    "ground-2-finding": {
      "title": "A finding you can defend",
      "location": "The farm office interview room",
      "body": [
        "Lea accepts the corrected account. The boot trail remains a route observation with a shared pattern, the camera remains a timed object movement with an obscured face, and the pressure log remains a branch event. Their conjunction tested Dorian’s account; the properly recorded admission supplied the fatal act and circumstances.",
        "Sera helps mark the path boundary for the officers who will return with the formal examiner. She does not have to defend every rumor about the orchard in order for her own alibi to have been checked. Lea arranges a neutral statement to the waiting buyers that avoids turning the sale into a public interview."
      ],
      "routeLabel": "The irrigation investigation",
      "clues": [
        "ground-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "ground-2-next"
        }
      ]
    },
    "ground-2-next": {
      "title": "The investigation moves forward",
      "location": "The orchard evidence table",
      "body": [
        "The orchard sale is postponed. At the gate, Marta returns deposits through the same numbered system that helped check her movements. Dorian’s case will proceed through the appropriate authorities, and the heritage trust will inspect the disputed trees separately rather than declare every apple dishonest because one manager’s account failed.",
        "You give Lea your original notes, including the earlier uncertainty about the hose user. Leaving that uncertainty visible is not a weakness after the case is solved. It shows how the investigation moved from a sound in the morning to evidence it could actually defend."
      ],
      "routeLabel": "The irrigation investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "ground-ending",
          "requires": [
            "ground-2-deduction"
          ]
        }
      ]
    },
    "ground-ending": {
      "title": "A path that can be retraced",
      "location": "The orchard gate",
      "body": [
        "The pump stops at the end of its ordinary cycle. Without the crowd beside it, its silence seems as unremarkable as its earlier noise should have been. Lea seals the relevant records and leaves the wider orchard for the trust to manage under the proper arrangements.",
        "Your ground route tested the machine before trusting an alibi and the trace before naming its maker. When the formal account moves beyond the orchard, another investigator will be able to follow the same reference times and see where each conclusion came from."
      ],
      "ending": {
        "title": "Case closed: the route through the yard",
        "body": [
          "The supported physical sequence challenged an automatic-sound alibi and corroborated a specific visit. You retained the evidence limits after the formal admission established the fatal confrontation."
        ],
        "kind": "solved"
      }
    },
    "paper-1": {
      "title": "A tree with two histories",
      "location": "The graft-register room",
      "body": [
        "Sera places a field sketch beside the sale catalog. TreeR-14 is described in the catalog as an unaltered 1880 heritage specimen. The field register records a 2016 graft on surviving older rootstock. Both statements can involve old wood; they do not describe the same provenance. The catalog has dropped the word rootstock from the source line.",
        "Rowan discovered the omission during yesterday’s catalog proof. A signed appointment card asks Dorian to bring the original register to the tool room just after nine. The card is a legitimate reason to meet, not proof of what happened there. Sera’s role is to explain the documents without becoming the person who decides a colleague’s guilt from a horticultural disagreement."
      ],
      "routeLabel": "The provenance investigation",
      "clues": [
        "paper-1-observation"
      ],
      "meets": [
        "sera",
        "marta"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "paper-1-record"
        }
      ],
      "setFlags": [
        "provenance-route"
      ]
    },
    "paper-1-record": {
      "title": "The correction before the sale",
      "location": "The registrar’s archive counter",
      "body": [
        "Marta has two proof versions with dated changes. The earlier proof correctly says heritage rootstock with a 2016 graft. Dorian approved a later proof omitting both qualifications; the printer’s returned page and the approval signature match. A note in Rowan’s hand requests correction before bidders arrive and threatens referral to the trust if the change is retained.",
        "The documents establish an alteration and a specific disagreement. They do not establish whether the approval was deceptive, negligent, or based on advice not yet supplied. The proper next interview asks Dorian about the source of the change and the scheduled meeting, rather than asking Sera to choose a motive on his behalf.",
        "Marta also shows how she stamps a paper: RECEIVED describes when it entered her office, not when its author wrote it. That distinction will matter in the next part of Dorian’s account."
      ],
      "routeLabel": "The provenance investigation",
      "clues": [
        "paper-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "paper-1-question",
          "requires": [
            "paper-1-observation",
            "paper-1-document"
          ]
        }
      ]
    },
    "paper-1-question": {
      "title": "A question worth getting right",
      "location": "The registrar’s archive counter",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The provenance investigation",
      "puzzle": {
        "prompt": "Which two claims are established by the provenance chain itself?",
        "options": [
          {
            "id": "change",
            "label": "A later approved proof removed the modern-graft qualification present in the field register and earlier proof.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "meeting",
            "label": "Rowan’s signed correction and appointment establish a specific disagreement and proposed meeting before the sale.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "act",
            "label": "An inaccurate tree label proves the fatal attack without any other evidence.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "age",
            "label": "Old rootstock and an unaltered old graft are necessarily the same provenance claim.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "paper-1-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "paper-1-finding": {
      "title": "A finding you can defend",
      "location": "The registrar’s archive counter",
      "body": [
        "Sera supplies the complete graft description for the trust, and Marta preserves both proof versions. The case will not need to pretend an agricultural label was unimportant in order to avoid letting it prove a death on its own.",
        "Lea has a concrete question for Dorian: he approved the altered version and was asked to discuss it. His answer is that he remained at the irrigation pump throughout the relevant interval and sent the papers by runner. A receipt marked 09:15 has been offered to make that runner story look complete. The stamp’s purpose must be checked before its minute is allowed to move a person."
      ],
      "routeLabel": "The provenance investigation",
      "clues": [
        "paper-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "paper-1-next"
        }
      ]
    },
    "paper-1-next": {
      "title": "The investigation moves forward",
      "location": "The graft-register room",
      "body": [
        "You go with Marta to the gate registration desk, where she made the stamp. A person can receive an envelope while its sender is anywhere else; receipt does not normally authenticate the route of delivery. The paper includes a hand-written name that looks like D.V., and an easy interpretation has already traveled through the buyers’ queue.",
        "Lea asks you to establish the sender, carrier, and receiving event separately. At the gate, the buyer camera and the numbered registration receipts can also test Marta’s account without borrowing her confidence as a substitute for a continuous reference."
      ],
      "routeLabel": "The provenance investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "paper-2",
          "requires": [
            "paper-1-deduction"
          ]
        }
      ]
    },
    "paper-2": {
      "title": "A receipt is not an escort",
      "location": "The gate registration desk",
      "body": [
        "The envelope arrived at 09:15 according to Marta’s RECEIVEDstamp. The carrier line is blank. The handwritten D.V. is part of the sender address, not Marta’s identification of the person who brought it. A delivery basket beside the desk was cleared twice, at 09:08 and 09:15; an envelope inside could have been placed there earlier.",
        "Dorian’s claimed alibi depends on the stronger story that a runner carried the packet from him at the pump during the relevant interval. No runner’s signature supports that journey. The envelope’s internal appointment copy, meanwhile, has a note Rowan made at 09:12: “Dorian brought original; keep corrected proof for trust.” The note is signed with Rowan’s distinctive witness countersignature, checked against the officer’s earlier records. It is a source to authenticate, not an unquestionable final verdict."
      ],
      "routeLabel": "The provenance investigation",
      "clues": [
        "paper-2-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "paper-2-record"
        }
      ]
    },
    "paper-2-record": {
      "title": "A second source and the formal question",
      "location": "The officers’ records desk",
      "body": [
        "The officer obtains the original appointment copy and checks the paper’s custody. A visitor’s timed camera sequence at the permitted courtyard shows Dorian carrying the distinctive repaired register wallet toward the tool-room approach at 09:18. He claims continuous possession of that wallet. The image does not show the fatal act, but it supplies independent movement evidence against a story of papers traveling without him.",
        "Lea’s technical team reports that the pump can run on a timer and that an upper-yard branch was opened at 09:17. Those are separately sourced findings, not observations your route somehow made while it was at the register desk. Faced with the appointment, the movement evidence, and the failing alibi, Dorian admits the fatal attack in a formal interview with legal support present.",
        "The remaining question is how to sign an account that keeps the weak receipt interpretation separate from the stronger combination of independently checked records and later admission."
      ],
      "routeLabel": "The provenance investigation",
      "clues": [
        "paper-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "paper-2-question",
          "requires": [
            "paper-2-observation",
            "paper-2-document"
          ]
        }
      ]
    },
    "paper-2-question": {
      "title": "A question worth getting right",
      "location": "The officers’ records desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The provenance investigation",
      "puzzle": {
        "prompt": "Which account properly distinguishes receiving paper from a person’s movements?",
        "options": [
          {
            "id": "receipt",
            "label": "The 09:15 stamp records office receipt, not a runner’s continuous journey; the authenticated appointment and independent wallet movement contradict the no-visit account, and the formal admission establishes the fatal act.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "runner",
            "label": "Any received envelope proves its sender was simultaneously beside the runner at the claimed starting point.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "initials",
            "label": "The sender initials alone identify the carrier at 09:15.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "motive",
            "label": "The altered cultivar proof makes every question about delivery and location unnecessary.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "paper-2-finding"
      }
    },
    "paper-2-finding": {
      "title": "A finding you can defend",
      "location": "The officers’ records desk",
      "body": [
        "You correct the proposed receipt interpretation before signing. Marta’s stamp was accurate about the event it was built to record. The mistake came from asking it to certify a journey it never observed. The authenticated note, the independent image, and the formal admission remain distinct sources, each with its own evidentiary role.",
        "Lea sends the agricultural records to the heritage trust for their separate review. A corrected tree description does not settle a homicide, and a solved homicide does not settle every ownership and catalog issue on an estate. Keeping both boundaries visible makes it possible for each responsible body to do its work."
      ],
      "routeLabel": "The provenance investigation",
      "clues": [
        "paper-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "paper-2-next"
        }
      ]
    },
    "paper-2-next": {
      "title": "The investigation moves forward",
      "location": "The gate registration desk",
      "body": [
        "Marta draws a line through the word CARRIERon her unofficial copy of the RECEIVEDstamp instruction and replaces it with RECEIPT EVENT. The change is small enough to fit on the card beside the basket. A future clerk will not have to reconstruct tonight’s argument to understand why it matters.",
        "At the orchard gate, Sera pins up the postponed-sale notice and the trust’s contact details. She leaves the disputed trees in the register under their complete descriptions. You carry the provenance chronology to Lea, including the earlier false certainty about the runner. A useful ending keeps the corrected mistake, not merely the final conclusion."
      ],
      "routeLabel": "The provenance investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "paper-ending",
          "requires": [
            "paper-2-deduction"
          ]
        }
      ]
    },
    "paper-ending": {
      "title": "The history left on the tree",
      "location": "The orchard sale board",
      "body": [
        "The corrected description says exactly what can be supported about the rootstock and graft. It is less grand than the later sale proof and more interesting to Sera, who can now explain the tree’s real survival without asking an inaccurate date to do it for her.",
        "Your provenance route followed an alteration into an appointment, then dismantled a receipt-based alibi before independent movement evidence and the formal admission established the case. Lea keeps your sourced chronology. Marta keeps the new receipt instruction. The orchard’s next sale, whenever it comes, will have a different set of questions written beside its names."
      ],
      "ending": {
        "title": "Case closed: the record behind the label",
        "body": [
          "You established the disputed provenance without letting it stand in for homicide evidence. Correcting the meaning of a received stamp made room for independently checked movement and a properly recorded admission."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "irrigation-and-route-method",
      "actions": [
        {
          "type": "choice",
          "id": "begin"
        },
        {
          "type": "answer",
          "id": "sources"
        },
        {
          "type": "choice",
          "id": "ground"
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
            "automatic",
            "remote"
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
          "id": "bounded"
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
      "id": "provenance-and-receipt-method",
      "actions": [
        {
          "type": "choice",
          "id": "begin"
        },
        {
          "type": "answer",
          "id": "sources"
        },
        {
          "type": "choice",
          "id": "provenance"
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
            "change",
            "meeting"
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
          "id": "receipt"
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
