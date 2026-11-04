export default {
  "id": "sealed-verdict",
  "title": "The Sealed Verdict",
  "genre": "Historical mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "A sealed court packet seems to contradict a family’s account of an old bridge disaster. Follow the official record or the town’s changing memory before the museum prints its final caption.",
  "setting": "A riverside courthouse and newspaper archive, one evening before an exhibition opens",
  "revision": 2,
  "flags": [
    "records-route",
    "witness-route"
  ],
  "characters": [
    {
      "id": "june",
      "name": "June Calder",
      "role": "Local archivist",
      "description": "Keeps paper sleeves for damaged records and dislikes a label that promises more than its contents.",
      "color": "#b99772"
    },
    {
      "id": "ellis",
      "name": "Ellis Marsh",
      "role": "Descendant of an accused bridge builder",
      "description": "Has inherited a family story and wants it checked, even if the answer becomes less heroic.",
      "color": "#8fa69b"
    },
    {
      "id": "sana",
      "name": "Sana Vale",
      "role": "Newspaper curator",
      "description": "Reads corrected editions against their earlier copies instead of treating an old printed page as a final authority.",
      "color": "#a492ad"
    },
    {
      "id": "mara",
      "name": "Mara Penn",
      "role": "Retired court clerk",
      "description": "Remembers procedures through the work they required, not through the grand names on the doors.",
      "color": "#a4a374"
    }
  ],
  "clues": [
    {
      "id": "packet",
      "title": "A packet registered in 1901",
      "description": "The wrapper’s 1901 stamp records transfer into the town archive. The bridge hearing itself took place in 1894; the wrapper is not a verdict date."
    },
    {
      "id": "summary",
      "title": "The town’s familiar account",
      "description": "An 1894 newspaper summary says bridge builder Evan Marsh was convicted after a flood. It contains no later appeal outcome."
    },
    {
      "id": "register",
      "title": "The registry’s separate columns",
      "description": "The court ledger separates hearing date, decision date and archive-transfer date. The 1901 wrapper number belongs only to the transfer column."
    },
    {
      "id": "appeal-number",
      "title": "One letter, not another defendant",
      "description": "The 1894 trial number 41 became 41-A on appeal. The suffix is defined in the register as appellate review of the same case, not a new accusation."
    },
    {
      "id": "appeal-order",
      "title": "A canceled finding",
      "description": "The appeal entry orders the finding set aside and a corrected bridge survey admitted. It expressly records no pardon application."
    },
    {
      "id": "survey",
      "title": "A reversed flow arrow",
      "description": "The corrected survey relocates the sluice downstream. Its appendix compares synchronized gauge and gate logs: the surge reached the bridge at 18:10, while the sealed sluice first opened at 18:40. That later opening cannot have caused the earlier surge."
    },
    {
      "id": "legal-difference",
      "title": "A finding set aside",
      "description": "The linked order removes the earlier finding on review. It is not a pardon that accepts a valid conviction and forgives its penalty."
    },
    {
      "id": "receipt",
      "title": "A served correction",
      "description": "The newspaper’s receipt records delivery of the appeal order to its editor. An additional enclosed tracing is numbered 41-A and matches the downstream sluice."
    },
    {
      "id": "case-copy",
      "title": "The court’s retained text",
      "description": "A retained copy and its docket reference agree that the 1894 finding was set aside. The later archive wrapper bundled the trial and appeal together."
    },
    {
      "id": "bell",
      "title": "The bell that did not witness the flood",
      "description": "A town reminiscence describes a warning bell ringing at the bridge. Repair notes show that bell was not installed until 1896, two years after the flood."
    },
    {
      "id": "edition",
      "title": "A corrected evening edition",
      "description": "The evening impression of the local paper withdraws the claim about the sluice. The common library clipping comes from the earlier morning impression."
    },
    {
      "id": "plate",
      "title": "A reset line, not faded ink",
      "description": "The evening page has a newly set line and a different press flaw beside it. Its correction cannot be explained as a faded copy of the morning page."
    },
    {
      "id": "two-layers",
      "title": "A legend made from different years",
      "description": "The bell story joins a later installation to an earlier flood, while the surviving clipping omits the correction printed that evening."
    },
    {
      "id": "clerk-note",
      "title": "A clerk’s plain-language note",
      "description": "Mara’s predecessor recorded that the appeal canceled the finding. The handwritten glossary distinguishes a finding set aside from a pardon."
    },
    {
      "id": "public-copy",
      "title": "The reading-room appeal copy",
      "description": "A public copy filed beside the evening paper names 41-A and the corrected engineer’s survey. Its quoted order sets aside the finding."
    },
    {
      "id": "memorial",
      "title": "A proposed careful inscription",
      "description": "The museum’s draft plaque says a later appeal set aside the finding on corrected survey evidence. It does not claim the flood had no other causes."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A packet called verdict",
      "location": "The old courthouse reading room",
      "body": [
        "June Calder places a sealed packet on a support cushion. A museum exhibition opens tomorrow, and its centerpiece is supposed to be the verdict against bridge builder Evan Marsh. Ellis, his descendant, has asked whether the family’s later claim of exoneration is true. Nobody needs a more dramatic legend; the existing stories are dramatic enough. The packet carries a 1901 archive stamp, while the flood occurred in 1894. You have permission to examine the records with June, not to destroy seals or invent missing pages. Your task is to establish what the surviving record can fairly say."
      ],
      "meets": [
        "june",
        "ellis"
      ],
      "choices": [
        {
          "id": "enter",
          "label": "Ask June to separate the dates",
          "to": "briefing"
        }
      ]
    },
    "briefing": {
      "title": "A wrapper is not an event",
      "location": "The catalog desk",
      "body": [
        "The wrapper’s date has been repeated in museum drafts as the year of the verdict. June explains that archive stamps usually record the arrival of a collection. A surviving newspaper summary describes the 1894 conviction, but nobody has yet checked whether the packet also contains later proceedings. Ellis wants the answer to be an unqualified vindication. He agrees, reluctantly, that you must distinguish what the family hoped happened from what a court actually ordered. You can investigate the legal sequence through its registers or follow the changing public story through the newspaper collection and people who maintained it."
      ],
      "clues": [
        "packet",
        "summary"
      ],
      "choices": [
        {
          "id": "survey",
          "label": "Choose how to reconstruct the case",
          "to": "crossroads"
        }
      ]
    },
    "crossroads": {
      "title": "The record and its retelling",
      "location": "The courthouse passage",
      "body": [
        "The court-copy room is opening for a supervised inspection while Sana prepares the newspaper press archive across town. There is enough time to establish either chain carefully before the museum’s deadline. Choose whether to work from the official docket outward or from the town’s familiar account back to its sources. Both routes may correct the exhibition, but they will leave different kinds of evidence and involve different people. June asks that you keep the wrong dates visible in your notes, crossed out rather than rubbed away; they are part of how the misunderstanding began."
      ],
      "choices": [
        {
          "id": "a",
          "label": "Trace the court docket and linked appeal",
          "to": "a1",
          "excludesFlags": [
            "witness-route"
          ]
        },
        {
          "id": "b",
          "label": "Follow the newspapers and the town’s memory",
          "to": "b1",
          "excludesFlags": [
            "records-route"
          ]
        }
      ]
    },
    "a1": {
      "title": "Three columns beneath one cover",
      "location": "The registry room",
      "body": [
        "The ledger’s ruled headings separate hearing, decision and transfer. The archive number on the wrapper appears only in the transfer column. A clerk in 1901 received several papers together; the stamp says nothing about which one was written first. June has you compare two unrelated entries to make sure the column convention is not being guessed from this case alone. Each follows the same arrangement. A date can be perfectly genuine and still be irrelevant to the event someone uses it to date. You need the underlying entries before you can call anything inside a verdict."
      ],
      "clues": [
        "register"
      ],
      "setFlags": [
        "records-route"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a2"
        }
      ]
    },
    "a2": {
      "title": "The meaning of a suffix",
      "location": "The case-index shelves",
      "body": [
        "Trial 41 is followed by 41-A in a separate appeal index. The register’s printed key defines the suffix as review of the same case. It is not a second person with a similar name, nor evidence that the first document was forged. The names and bridge description agree across both entries. June places narrow paper markers beside the references so the link can be found again without her help. The next step is to distinguish the sequence from its administrative packaging: which event belongs to 1894, which belongs to the later review, and which belongs merely to custody?"
      ],
      "clues": [
        "appeal-number"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a3"
        }
      ]
    },
    "a3": {
      "title": "Dating what actually happened",
      "location": "The registry table",
      "body": [
        "Ellis has written “verdict,1901” in the margin of the exhibition draft. You must decide what to correct first. The answer needs to respect both the wrapper and the court’s indexing convention, rather than discarding whichever source is inconvenient."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which reading of the dates and numbers is justified?",
        "options": [
          {
            "id": "claim-1",
            "label": "The 1901 stamp dates archive transfer; trial 41 and appeal 41-A belong to a linked judicial sequence that must be read separately.",
            "correct": true,
            "feedback": "Read the headings and index key before assigning a legal event to an administrative mark."
          },
          {
            "id": "claim-2",
            "label": "All proceedings occurred in 1901 because the wrapper is genuine.",
            "correct": false,
            "feedback": "Read the headings and index key before assigning a legal event to an administrative mark."
          },
          {
            "id": "claim-3",
            "label": "The suffix A proves a different defendant was tried for the same flood.",
            "correct": false,
            "feedback": "Read the headings and index key before assigning a legal event to an administrative mark."
          },
          {
            "id": "claim-4",
            "label": "An archive-transfer stamp invalidates every paper held inside its wrapper.",
            "correct": false,
            "feedback": "Read the headings and index key before assigning a legal event to an administrative mark."
          }
        ],
        "wrongFeedback": "Read the headings and index key before assigning a legal event to an administrative mark.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "a4"
      },
      "routeLabel": "Following the records"
    },
    "a4": {
      "title": "An order with an operative verb",
      "location": "The supervised copy room",
      "body": [
        "The appeal entry uses the phrase “finding set aside” and admits a corrected engineer’s survey. It records no application for a pardon. June asks you to copy the operative words rather than modernize them into a family slogan. The difference is not fussy decoration: one action removes an earlier finding, while another could forgive a penalty without deciding that the finding was unsound. The register alone is a summary, so you will still need to see what the corrected evidence changed and check the text of the retained order."
      ],
      "clues": [
        "appeal-order"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a5"
        }
      ]
    },
    "a5": {
      "title": "The arrow that changes the allegation",
      "location": "The survey cabinet",
      "body": [
        "The original trial sketch places the sluice upstream. The corrected survey identifies the same outfall downstream, but June warns that position alone cannot rule out backwater from an obstruction. The decisive appendix supplies an independent timing test: synchronized gauge and gate logs place the bridge surge at 18:10 and the first sluice opening at 18:40. A sealed pawl confirms that no opening occurred earlier. The trial alleged that opening the sluice drove the earlier surge; that sequence is impossible on the corrected records. This does not prove the entire flood harmless or fully understood. It defeats the particular causal allegation. You copy the time sources beside the landmarks, keeping the hydraulic question separate from the chronological disproof."
      ],
      "clues": [
        "survey"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a6"
        }
      ]
    },
    "a6": {
      "title": "Two parts of a justified correction",
      "location": "The copy-room window",
      "body": [
        "A family can be treated unfairly without every later claim made on its behalf being accurate. Select the observations that support the narrow correction now available. Neither sympathy nor a convenient date can substitute for the order and the defect in the earlier allegation."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Select the two observations that distinguish this appeal from a pardon.",
        "options": [
          {
            "id": "claim-1",
            "label": "The linked appeal entry orders the earlier finding set aside.",
            "correct": true,
            "feedback": "Use the operative order and its evidentiary basis, rather than later feelings or custody dates."
          },
          {
            "id": "claim-2",
            "label": "The corrected survey’s synchronized gate log places the first opening after the earlier surge it was alleged to cause.",
            "correct": true,
            "feedback": "Use the operative order and its evidentiary basis, rather than later feelings or custody dates."
          },
          {
            "id": "claim-3",
            "label": "Ellis would prefer an inscription without qualifications.",
            "correct": false,
            "feedback": "Use the operative order and its evidentiary basis, rather than later feelings or custody dates."
          },
          {
            "id": "claim-4",
            "label": "The archive wrapper was stamped years after the flood.",
            "correct": false,
            "feedback": "Use the operative order and its evidentiary basis, rather than later feelings or custody dates."
          }
        ],
        "wrongFeedback": "Use the operative order and its evidentiary basis, rather than later feelings or custody dates.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "a7"
      },
      "routeLabel": "Following the records"
    },
    "a7": {
      "title": "The correction that reached the editor",
      "location": "The service-of-documents file",
      "body": [
        "A folded receipt establishes that the newspaper received the appeal order. The tracing enclosed with it bears 41-A and the corrected downstream relation. It does not tell you how many readers later saw a correction. It does show that the newer account was not merely a family paper hidden in a drawer. June notes the distinction between delivery, publication and popular memory. You have followed the official sequence far enough to test the wording the museum proposes to put on its wall, but one safeguard remains: compare the summarized entry against the court’s retained copy."
      ],
      "clues": [
        "legal-difference",
        "receipt"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a8"
        }
      ]
    },
    "a8": {
      "title": "Words preserved in two places",
      "location": "The retained-order box",
      "body": [
        "The court’s copy repeats the order to set aside the finding and names the corrected survey. Its docket reference agrees with the appeal index. The handwriting differs from the register because a different clerk made the retained copy; that is not a contradiction in the result. You compare the parties, date and operative language, not the slant of the letters alone. Ellis reads beside you and slowly crosses out the word “pardoned” in the family’s draft caption. A more exact account can be kinder because it is less easy to dismiss."
      ],
      "clues": [
        "case-copy"
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a9"
        }
      ]
    },
    "a9": {
      "title": "A plaque with a limit",
      "location": "The museum preparation room",
      "body": [
        "The exhibition designer wants one clean sentence. You could claim Marsh was pardoned, claim every flood allegation was invented, or describe the later appeal and the evidence that defeated the original finding. Only the last has been established through this route. The challenge is to make the sentence plain without deleting its limits. June suggests keeping the fuller source references in the exhibition guide. Ellis agrees to tell visitors where the changed wording came from, including the family’s own earlier misuse of the archive date."
      ],
      "routeLabel": "Following the records",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "a10"
        }
      ]
    },
    "a10": {
      "title": "What should the museum now say?",
      "location": "The unfinished exhibition wall",
      "body": [
        "Choose the account supported by the chain you have followed from index to retained order. The most satisfying story is not necessarily the one that makes the largest claim about the entire flood."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which caption is warranted?",
        "options": [
          {
            "id": "claim-1",
            "label": "The 1894 finding against Marsh was later set aside on corrected survey evidence; the 1901 mark dates the archive’s receipt of the combined papers.",
            "correct": true,
            "feedback": "Match each clause to a source that actually establishes it."
          },
          {
            "id": "claim-2",
            "label": "Marsh accepted a valid conviction and was pardoned in 1901.",
            "correct": false,
            "feedback": "Match each clause to a source that actually establishes it."
          },
          {
            "id": "claim-3",
            "label": "The appeal establishes that no structure or decision contributed to the flood.",
            "correct": false,
            "feedback": "Match each clause to a source that actually establishes it."
          },
          {
            "id": "claim-4",
            "label": "A suffix in the index proves the entire packet concerns somebody else.",
            "correct": false,
            "feedback": "Match each clause to a source that actually establishes it."
          }
        ],
        "wrongFeedback": "Match each clause to a source that actually establishes it.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "a11"
      },
      "routeLabel": "Following the records"
    },
    "a11": {
      "title": "The caption that can be checked",
      "location": "The courthouse exhibition",
      "body": [
        "June leaves a facsimile of the relevant order beside the new caption and retains the original on its cushion. Ellis does not get the uncomplicated legend he arrived with. He gets something stronger: a corrected judicial account with references another reader can follow. The museum explains the trial, the appeal and the much later archive stamp as three distinct events. At the opening, somebody asks why the old wording changed. Ellis points to the comparison sheets instead of insisting that the family always knew best. The case closes with a public account that welcomes being checked."
      ],
      "ending": {
        "title": "The docket restored",
        "kind": "solved",
        "body": [
          "Your route followed the legal record from its index to its retained text. It corrects the exhibition through a documented appeal sequence, without claiming to have solved every cause of the flood."
        ]
      },
      "routeLabel": "Following the records"
    },
    "b1": {
      "title": "A bell borrowed from a later year",
      "location": "The newspaper reading room",
      "body": [
        "Sana has placed a reminiscence about the flood beside the town’s maintenance notes. The reminiscence describes a warning bell sounding near the bridge. The notes record that this particular bell was installed in 1896, two years after the flood. A vivid memory can combine separate emergencies into one episode. Sana does not call the speaker dishonest; she marks the detail as unsuitable for dating the earlier event. Before using the anecdote to establish who heard a warning, you need to decide what it can and cannot witness."
      ],
      "meets": [
        "sana"
      ],
      "clues": [
        "bell"
      ],
      "setFlags": [
        "witness-route"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b2"
        }
      ]
    },
    "b2": {
      "title": "Morning and evening",
      "location": "The newspaper press archive",
      "body": [
        "The familiar clipping is from the morning impression. A full evening copy has a corrected account of the sluice and a note that later proceedings will be reported when available. Sana aligns the pages beneath a sheet of glass. One line has been reset, and a small press flaw beside it changes between impressions. The difference is a new printing, not fading or a reader’s handwritten alteration. You now have two separate sources of confusion: a memory carrying a later bell backward and an incomplete clipping treated as if it represented the whole day’s reporting."
      ],
      "clues": [
        "edition",
        "plate"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b3"
        }
      ]
    },
    "b3": {
      "title": "The part that memory can prove",
      "location": "The press-room worktable",
      "body": [
        "The old anecdote and the two newspaper impressions are all genuine artifacts. Genuineness does not make every claim drawn from them true. Decide which explanation accounts for their differences without accusing a witness of something your evidence cannot establish."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which interpretation best fits the bell note and the press evidence?",
        "options": [
          {
            "id": "claim-1",
            "label": "The bell anecdote blends a later event into the flood, and the common clipping omits a separately printed correction.",
            "correct": true,
            "feedback": "Distinguish mistaken association from deliberate invention, and a revised edition from a damaged copy."
          },
          {
            "id": "claim-2",
            "label": "A bell installed in 1896 must have warned people during the 1894 flood.",
            "correct": false,
            "feedback": "Distinguish mistaken association from deliberate invention, and a revised edition from a damaged copy."
          },
          {
            "id": "claim-3",
            "label": "The evening correction is only faded ink on a second copy of the morning impression.",
            "correct": false,
            "feedback": "Distinguish mistaken association from deliberate invention, and a revised edition from a damaged copy."
          },
          {
            "id": "claim-4",
            "label": "Every person who repeated the family account must have knowingly lied.",
            "correct": false,
            "feedback": "Distinguish mistaken association from deliberate invention, and a revised edition from a damaged copy."
          }
        ],
        "wrongFeedback": "Distinguish mistaken association from deliberate invention, and a revised edition from a damaged copy.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "b4"
      },
      "routeLabel": "Following the witnesses"
    },
    "b4": {
      "title": "The clerk who remembers the work",
      "location": "Mara Penn’s front room",
      "body": [
        "Mara’s predecessor left a short glossary for new clerks. It distinguishes a finding set aside on review from a pardon of a standing penalty. Mara remembers why that distinction mattered when copying case summaries for the public: changing the word could change what a family believed a court had decided. She will not decide this case from a glossary alone. Instead, she identifies the reading-room reference where the order quoted by the newspaper was retained. Your route through memory has finally provided a testable lead back to a document."
      ],
      "meets": [
        "mara"
      ],
      "clues": [
        "two-layers",
        "clerk-note"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b5"
        }
      ]
    },
    "b5": {
      "title": "The quotation beside the correction",
      "location": "The public reference shelves",
      "body": [
        "Sana finds a filed appeal copy beside the evening paper, numbered 41-A. Its quotation orders the finding set aside and names the corrected engineer’s survey. The quotation is longer than the sentence preserved in the family clipping. You compare its case reference with the clerk’s note and the newspaper’s own source line. The agreement does not turn a journalist into a judge. It gives you independently preserved traces of what the court ordered, and a clear reason to ask the museum to obtain its retained copy before publishing a permanent inscription."
      ],
      "clues": [
        "public-copy"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b6"
        }
      ]
    },
    "b6": {
      "title": "Evidence that changes the story",
      "location": "The reading-room corner",
      "body": [
        "Select the observations that justify changing the museum’s account of the legal result. The bell is useful for evaluating the town’s memory, but a later installation date does not itself tell you how an appeal ended. Your selection must answer the narrower question now being asked."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two observations support a finding set aside rather than a pardon?",
        "options": [
          {
            "id": "claim-1",
            "label": "The filed appeal quotation explicitly cancels the earlier finding and identifies 41-A.",
            "correct": true,
            "feedback": "Choose observations about the legal result and its meaning; do not confuse them with clues about a separate mistaken memory."
          },
          {
            "id": "claim-2",
            "label": "The clerk’s glossary distinguishes canceling a finding from forgiving a standing penalty.",
            "correct": true,
            "feedback": "Choose observations about the legal result and its meaning; do not confuse them with clues about a separate mistaken memory."
          },
          {
            "id": "claim-3",
            "label": "The bell was installed in 1896 rather than 1894.",
            "correct": false,
            "feedback": "Choose observations about the legal result and its meaning; do not confuse them with clues about a separate mistaken memory."
          },
          {
            "id": "claim-4",
            "label": "The family’s clipping has attractive old type and a decorative border.",
            "correct": false,
            "feedback": "Choose observations about the legal result and its meaning; do not confuse them with clues about a separate mistaken memory."
          }
        ],
        "wrongFeedback": "Choose observations about the legal result and its meaning; do not confuse them with clues about a separate mistaken memory.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "b7"
      },
      "routeLabel": "Following the witnesses"
    },
    "b7": {
      "title": "An inscription that leaves room for the river",
      "location": "The museum’s reference desk",
      "body": [
        "June reads the sources you have brought and drafts a careful plaque. It says a later appeal set aside the finding on corrected survey evidence. It does not claim that the flood had only one cause or that every witness deliberately deceived the court. The draft preserves the story of the later bell as an example of how local memory can merge events, clearly labeled as such. Ellis has to decide whether a qualified but defensible correction is enough. He asks you to explain why the qualifications protect the family’s case rather than weaken it."
      ],
      "clues": [
        "memorial"
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b8"
        }
      ]
    },
    "b8": {
      "title": "A second reader’s test",
      "location": "The public reading-room table",
      "body": [
        "You give the draft and its references to a volunteer who has not heard the family’s story. She can find the evening correction, distinguish it from the morning impression, and locate the quoted appeal result. She cannot reconstruct every cause of the flood, which the draft does not ask her to do. That exercise checks something a persuasive conversation cannot: whether the claim is independently recoverable from the cited sources. You keep her one correction to a page reference in the margin. A checkable account is allowed to improve without collapsing."
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b9"
        }
      ]
    },
    "b9": {
      "title": "Whose memory gets to remain?",
      "location": "The exhibition entrance",
      "body": [
        "A visitor argues that correcting the plaque insults everyone who preserved the town’s old story. Sana proposes another arrangement: display the common clipping beside the later material and explain what each can establish. The community does not have to choose between keeping its memories and correcting a legal claim. You must still resist turning this humane compromise into a proof of matters you did not investigate. The final decision is how to describe Marsh’s case plainly, while leaving the river and the town’s later retellings at their proper scale."
      ],
      "routeLabel": "Following the witnesses",
      "choices": [
        {
          "id": "continue",
          "label": "Continue the investigation",
          "to": "b10"
        }
      ]
    },
    "b10": {
      "title": "A public account with its sources",
      "location": "The exhibition caption desk",
      "body": [
        "You have traced the legend backward through memory and print. Choose the resolution that accurately states the appeal and explains why the familiar account remained incomplete. A story can survive correction without keeping every old assertion."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which public explanation follows from the sources?",
        "options": [
          {
            "id": "claim-1",
            "label": "Keep the old clipping as part of the history, but explain that the later appeal set aside the finding and that the familiar bell story combines different years.",
            "correct": true,
            "feedback": "The corrected account must say what changed, why the earlier story was incomplete, and where the evidence stops."
          },
          {
            "id": "claim-2",
            "label": "Treat the morning clipping as the final judgment because it is the best-known version.",
            "correct": false,
            "feedback": "The corrected account must say what changed, why the earlier story was incomplete, and where the evidence stops."
          },
          {
            "id": "claim-3",
            "label": "Call the appeal a pardon because that is easier to fit into a short caption.",
            "correct": false,
            "feedback": "The corrected account must say what changed, why the earlier story was incomplete, and where the evidence stops."
          },
          {
            "id": "claim-4",
            "label": "Claim that the revised account proves nobody anywhere bore responsibility for the flood.",
            "correct": false,
            "feedback": "The corrected account must say what changed, why the earlier story was incomplete, and where the evidence stops."
          }
        ],
        "wrongFeedback": "The corrected account must say what changed, why the earlier story was incomplete, and where the evidence stops.",
        "correctFeedback": "Your explanation accounts for the independent observations.",
        "correctTo": "b11"
      },
      "routeLabel": "Following the witnesses"
    },
    "b11": {
      "title": "Room for an honest retelling",
      "location": "The museum on opening evening",
      "body": [
        "The old clipping remains in the exhibition, but it no longer stands alone. Beside it are the evening correction, the linked appeal extract and a small diagram separating the bell’s installation from the flood. Ellis tells a visitor that his family’s story contained an important truth and some unreliable shortcuts. June makes the references available to anyone who asks. The packet called “verdict” is now described as a bundle of proceedings, its 1901 archive stamp given its correct place. Nobody has to throw away a memory in order to stop using it as evidence for the wrong event."
      ],
      "ending": {
        "title": "The town’s account corrected",
        "kind": "solved",
        "body": [
          "Your route resolved the case through the history of its retelling, then checked that retelling against preserved records. The museum gains a transparent public account rather than a new legend."
        ]
      },
      "routeLabel": "Following the witnesses"
    }
  },
  "solutionPaths": [
    {
      "id": "a-complete",
      "actions": [
        {
          "type": "choice",
          "id": "enter"
        },
        {
          "type": "choice",
          "id": "survey"
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
          "id": "claim-1"
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
            "claim-1",
            "claim-2"
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
          "id": "claim-1"
        }
      ]
    },
    {
      "id": "b-complete",
      "actions": [
        {
          "type": "choice",
          "id": "enter"
        },
        {
          "type": "choice",
          "id": "survey"
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
          "id": "claim-1"
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
            "claim-1",
            "claim-2"
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
          "id": "claim-1"
        }
      ]
    }
  ]
};
