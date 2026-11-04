/** Original case; answer keys and route proofs are never projected into the reading interface. */
export default {
  "id": "silent-violin",
  "title": "The Silent Violin",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "A riverside music school on the afternoon of a benefit concert",
  "description": "An empty violin case and an unsigned instruction interrupt the final rehearsal. Follow a trail through the repair rooms or through the instrument’s disputed history.",
  "revision": 2,
  "flags": [
    "restoration",
    "provenance"
  ],
  "characters": [
    {
      "id": "ines",
      "name": "Ines Vale",
      "role": "Concert organizer",
      "description": "Keeps the rehearsal moving without pretending that musicians are easy to organize.",
      "color": "#a38c72"
    },
    {
      "id": "cal",
      "name": "Cal Merrin",
      "role": "Student violinist",
      "description": "Labels every practice recording with the weather and the room.",
      "color": "#88a0a7"
    },
    {
      "id": "sora",
      "name": "Sora Bell",
      "role": "Instrument restorer",
      "description": "Checks a seam with a mirror before touching a string.",
      "color": "#a58b9f"
    },
    {
      "id": "mrfox",
      "name": "Mr. Fox",
      "role": "Retired school archivist",
      "description": "Remembers donations by the people who carried them through the door.",
      "color": "#93a181"
    }
  ],
  "clues": [
    {
      "id": "svr-record",
      "title": "A documented rattle",
      "description": "The 2:10 recording shows a low-string rattle; K-12 was signed back into its case at 2:18."
    },
    {
      "id": "svr-inspection",
      "title": "The separated old repair",
      "description": "At 2:25 Sora recorded an open internal glue line without fresh exterior damage and ordered the strings relaxed."
    },
    {
      "id": "svr-card",
      "title": "The hold-card key",
      "description": "Letters A, B, C mean first, second, third for room, shelf, and padded slot; the card reads B–C–A."
    },
    {
      "id": "svr-storage",
      "title": "The matched sealed slot",
      "description": "Room B, shelf three, slot one holds a relaxed-string violin behind the seal listed on the K-12 hold card."
    },
    {
      "id": "svr-photo",
      "title": "The intake photograph",
      "description": "The K-12 intake photograph shows the same round repair patch and blue-thread brass tag seen through the sealed cover."
    },
    {
      "id": "svr-continuity",
      "title": "The custody chain holds",
      "description": "The case number, intake patch, decoded hold position, and matching seal establish custody of the borrowed violin without establishing its maker."
    },
    {
      "id": "svr-alternative",
      "title": "An inspected substitute",
      "description": "The school has an approved substitute available; the lender’s receipt guarantees no maker attribution or requirement to play K-12 tonight."
    },
    {
      "id": "svp-catalogue",
      "title": "A change in description",
      "description": "The 1958 entry names donor A. Ashford; the 1981 maker attribution is explicitly marked unconfirmed."
    },
    {
      "id": "svp-letter",
      "title": "The lender’s limits",
      "description": "The lender requested no public maker claim and authorized Sora to hold K-12 for safety."
    },
    {
      "id": "svp-inventory",
      "title": "The estate’s persistent feature",
      "description": "The estate photograph identifies K-12 by a round lower-block patch; the duplicate hold ticket gives room B, third shelf, first slot."
    },
    {
      "id": "svp-register",
      "title": "The documented hold sequence",
      "description": "Sora carried one instrument into the restoration wing, the holding seal was independently checked, and she returned the empty case afterward."
    },
    {
      "id": "svp-note",
      "title": "The note’s author and purpose",
      "description": "Sora wrote the note to stop an unverified label determining the concert’s choice; her hold was authorized, not concealed."
    },
    {
      "id": "svp-chain",
      "title": "Identity and authority established",
      "description": "A physical feature links the held violin to the estate loan, the register supplies custody, and the lender’s letter authorizes the safety hold."
    },
    {
      "id": "svp-wording",
      "title": "The defensible catalogue wording",
      "description": "The supported description is an estate instrument from A. Ashford, maker unconfirmed, with a repair label dated 1894."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The case on the chair",
      "location": "The rehearsal hall",
      "body": [
        "A single velvet-lined case rests on the soloist’s chair. Its catches are open, its violin absent. On the music stand someone has left a pencil instruction: “Do not let the old label choose the instrument.” Ines has locked the public doors without detaining anyone. The school borrowed a violin for tonight’s benefit, and three people have handled it legitimately: a student, a restorer, and the volunteer cataloguer. Ines asks you to establish what can safely be played and what can honestly be announced. A recovered violin would not settle the case if it were attributed to the wrong maker."
      ],
      "meets": [
        "ines"
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
      "title": "Two names for one loan",
      "location": "The corridor noticeboard",
      "body": [
        "The concert program calls the loan “the Ashford violin, 1894.” The school’s receipt names only a case number, K-12. Cal explains that old instruments sometimes carry labels inserted during repairs; he cannot tell you whether this one does. The lender’s message asks for care, not a particular announcement. The restoration wing closes when the caretaker changes shifts, while the retired archivist is about to take the ferry home. You have time for one complete trail. Ines gives you copies of the rehearsal log and loan receipt, asking that no student be blamed simply for using a room after hours."
      ],
      "meets": [
        "cal"
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
      "title": "Choose the kind of proof",
      "location": "The school courtyard",
      "body": [
        "One path follows the instrument’s condition through the practice rooms and restoration wing. It asks when the violin stopped being safe to play and where the handling record points. The other follows the loan through the old catalogue, ferry office, and donor correspondence, asking which description the evidence can support. Both can locate the instrument and settle the announcement, but they use different witnesses and documents. You will make the final recommendation from the trail you choose, rather than collecting every piece of paper in the building."
      ],
      "meets": [],
      "choices": [
        {
          "id": "restoration",
          "label": "Follow the restoration trail",
          "to": "restoration-0",
          "excludesFlags": [
            "provenance"
          ]
        },
        {
          "id": "provenance",
          "label": "Trace the loan’s history",
          "to": "provenance-0",
          "excludesFlags": [
            "restoration"
          ]
        }
      ]
    },
    "restoration-0": {
      "title": "A recording with a limit",
      "location": "Practice room three",
      "body": [
        "Cal plays a rehearsal recording from 2:10. A sharp rattle occurs only on the lowest string. Beside the recording he wrote “room three, dry afternoon, borrowed K-12.” The violin was returned to its case at 2:18, according to a sign-out card carrying both his initials and the supervisor’s. The sound establishes a fault worth inspecting; it does not establish who caused it. Cal shows you the school’s safety rule: an unexplained internal rattle sends an instrument to inspection before the next performance. The rule applies even when an instrument has a valuable label."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [
        "cal"
      ],
      "setFlags": [
        "restoration"
      ],
      "clues": [
        "svr-record"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "restoration-1",
          "requires": []
        }
      ]
    },
    "restoration-1": {
      "title": "An inspection after rehearsal",
      "location": "The repair-room doorway",
      "body": [
        "Sora’s inspection sheet is time-stamped 2:25. A mirror sketch marks an old interior glue line as separated, with no fresh impact damage outside. The school’s guide says seasonal dryness can open an old repair without breaking the varnish. Sora is careful about the distinction: the sheet supports a need for inspection, not a verdict about the instrument’s maker. Her copy also carries the instruction “hold without strings under tension.” A public performance would require the opposite. Read the two times together before deciding whether Cal’s last rehearsal or a later event explains the safety hold."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [
        "sora"
      ],
      "clues": [
        "svr-inspection"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "restoration-2",
          "requires": [
            "svr-record",
            "svr-inspection"
          ]
        }
      ]
    },
    "restoration-2": {
      "title": "The safe conclusion",
      "location": "The repair-room bench",
      "body": [
        "An old repair, an audible rattle, and a handling log form a sequence. None licenses an accusation merely because a student was the last player. Decide what the documents justify before you ask where the violin went. The safety rule supplies the relevant standard, so no knowledge of violin construction is needed. You are distinguishing a supported conservation decision from a story about blame."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "puzzle": {
        "prompt": "What is the strongest supported response to the rattle?",
        "options": [
          {
            "id": "inspect",
            "label": "Keep K-12 out of performance until the documented old repair is inspected.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "blame",
            "label": "Accuse Cal of breaking it because his initials appear last.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "play",
            "label": "Play it anyway because the program names an old maker.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "fake",
            "label": "Declare the violin a modern forgery from the sound alone.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "restoration-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "restoration-0"
        }
      ]
    },
    "restoration-3": {
      "title": "A hold card with three letters",
      "location": "The repair-room bench",
      "body": [
        "Sora retrieves the hold card. The storage field reads “B—C—A,” not a person’s initials. The printed key says that A means first, B means second, and C means third in each coordinate. The three coordinates are room, shelf, and padded slot, in that order. Rooms themselves are lettered A through C; shelves and slots are numbered one through three. Thus a room coordinate B names room B, while a shelf coordinate C names shelf three. You copy the whole key before walking to the wing. Guessing a familiar surname from those letters would send you after a person instead of a storage location."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "clues": [
        "svr-card"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "restoration-4",
          "requires": []
        }
      ]
    },
    "restoration-4": {
      "title": "A cabinet that has not been opened",
      "location": "Restoration room B",
      "body": [
        "The caretaker opens room B for you, leaving the cabinet seals in place. On shelf three, the first padded slot has a narrow sealed cover. Its seal number matches the hold card, while the instrument’s relaxed strings can be seen through a viewing panel. You are not asked to open it. The window also shows a brass case tag K-12 tied to the shoulder rest, and a small round repair patch shown on Sora’s sketch. Another violin on the shelf has a similar brown varnish. Color alone would be a poor identification method."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "clues": [
        "svr-storage"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "restoration-5",
          "requires": []
        }
      ]
    },
    "restoration-5": {
      "title": "The mark that survives a label",
      "location": "The inspection desk",
      "body": [
        "Sora brings her intake photograph. It shows the same round repair patch beneath the lower block and the same brass tag tied with blue thread. The handwritten maker’s label inside is partly covered by a repair ticket. Sora will not certify the maker from that view. She can certify continuity between the photographed instrument and the sealed hold location. The distinction lets you protect the school from one mistake without replacing it with another. Your second task is to combine location decoding with physical identification, using two observations that do not depend on the disputed maker’s name."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "clues": [
        "svr-photo"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "restoration-6",
          "requires": [
            "svr-storage",
            "svr-photo"
          ]
        }
      ]
    },
    "restoration-6": {
      "title": "Identify the held instrument",
      "location": "The restoration wing",
      "body": [
        "Choose the two observations that establish that the held violin is the one checked in under K-12. One observation places it under the correct storage seal; another matches a persistent feature. A printed maker’s name, a similar varnish, or a performer’s affection cannot provide that chain on its own. Your answer should still work if the old label later turns out to be wrong."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations establish K-12’s physical continuity?",
        "options": [
          {
            "id": "seal",
            "label": "The decoded hold position has the seal named on its hold card.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "patch",
            "label": "The intake photograph matches the repair patch and attached tag.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "varnish",
            "label": "Another violin has a similar brown varnish.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "name",
            "label": "The program printed a maker’s name in large letters.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "restoration-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "restoration-4"
        }
      ]
    },
    "restoration-7": {
      "title": "Custody is not attribution",
      "location": "The inspection desk",
      "body": [
        "The decoded storage position and matching physical record establish where the loan is. Ines can stop searching the public rooms. Sora adds that the school’s program went beyond its receipt: K-12 identifies an item, but the receipt did not guarantee an Ashford attribution. She offers an approved modern instrument for the benefit. The held violin can remain safe while its papers are examined after the concert. Your conclusion therefore needs two parts: a present decision about playing and a limited statement about identity. Treating those as the same question caused the confusion in the first place."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "clues": [
        "svr-continuity"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "restoration-8",
          "requires": []
        }
      ]
    },
    "restoration-8": {
      "title": "An announcement worth making",
      "location": "The rehearsal hall",
      "body": [
        "Ines has a new program proof waiting. The original wording claims both that the old violin will be played and that its maker is settled. Neither is supported by the conservation record. A cautious announcement can still be warm: tonight’s soloist will use an inspected school instrument; the borrowed violin is safely held for a documented repair issue; its attribution will be reviewed with the lender. Cal asks whether that makes the concert less interesting. You point to the music still on the stand. A mystery about an object need not be solved by exposing someone to a preventable risk."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "clues": [
        "svr-alternative"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "restoration-9",
          "requires": [
            "svr-continuity",
            "svr-alternative"
          ]
        }
      ]
    },
    "restoration-9": {
      "title": "Make the performance recommendation",
      "location": "The rehearsal hall",
      "body": [
        "Choose a recommendation that follows the established safety rule and stays within the identification evidence. You have found the instrument, but finding it does not make an open internal repair disappear. Equally, uncertainty about the maker does not imply the loan was fraudulent. This is a case where a strong solution consists partly of knowing which claim must wait for different evidence."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "puzzle": {
        "prompt": "What should happen at tonight’s concert?",
        "options": [
          {
            "id": "substitute",
            "label": "Use the inspected substitute; preserve K-12 and qualify the disputed attribution.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "tighten",
            "label": "Tighten K-12’s strings and ignore the inspection order.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "accuse",
            "label": "Announce that a student stole a verified Ashford violin.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "erase",
            "label": "Destroy the hold card so the program needs no correction.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "restoration-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "restoration-7"
        }
      ]
    },
    "restoration-10": {
      "title": "The music continues",
      "location": "The rehearsal hall",
      "body": [
        "Cal plays the inspected substitute. Ines explains the change without naming a suspected wrongdoer, and the lender agrees to a later review of the label. K-12 remains under its recorded seal, strings relaxed. Your route has solved the immediate disappearance through conservation records and physical continuity. The unusual note was a reminder left by Sora when she realized the program had turned a storage identity into a maker’s promise. The audience hears a good performance rather than an unsafe experiment."
      ],
      "routeLabel": "Follow the restoration trail",
      "meets": [],
      "ending": {
        "title": "Solved at the restoration bench",
        "kind": "solved",
        "body": [
          "You located the violin through its condition and custody. The performance goes ahead safely, while the question requiring different expertise remains honestly open."
        ]
      }
    },
    "provenance-0": {
      "title": "A catalogue with two dates",
      "location": "The school archive",
      "body": [
        "Mr. Fox spreads two catalogue pages under a reading lamp. The first lists a violin received in 1958 from the estate of “A. Ashford.” The second, typed in 1981, calls it “Ashford, 1894.” A penciled note beside the later entry reads “taken from repair label; attribution unconfirmed.” The two uses of the surname do not necessarily mean the same thing. Mr. Fox asks you to distinguish the person who donated an instrument from the person who built it. Both might share a name, but these pages do not establish that they do."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [
        "mrfox"
      ],
      "setFlags": [
        "provenance"
      ],
      "clues": [
        "svp-catalogue"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "provenance-1",
          "requires": []
        }
      ]
    },
    "provenance-1": {
      "title": "The lender’s actual request",
      "location": "The ferry office",
      "body": [
        "The current lender has left copies of the estate papers at the ferry office for collection. A covering letter asks that the violin be lent as “the school’s estate instrument, case K-12,” and specifically requests that the maker not be advertised until a certificate is found. Ines received the case but not this separate letter because a courier delivered them on different days. That explains how an old catalogue phrase could enter the program without proving anyone intended to deceive. The letter also authorizes Sora to hold the instrument if playing would be unsafe."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "clues": [
        "svp-letter"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "provenance-2",
          "requires": [
            "svp-catalogue",
            "svp-letter"
          ]
        }
      ]
    },
    "provenance-2": {
      "title": "Separate the two Ashfords",
      "location": "The ferry waiting room",
      "body": [
        "Test the claim the concert program made. A donor’s surname, an unverified later catalogue, and a maker’s certificate are different kinds of evidence. You have two of those things and the conspicuous absence of the third. Decide what the papers justify now. Do not replace an unsupported grand attribution with an equally unsupported accusation of forgery."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "puzzle": {
        "prompt": "What do the historical papers establish about the maker?",
        "options": [
          {
            "id": "unconfirmed",
            "label": "The donor is named, but the maker attribution remains unconfirmed.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "proved",
            "label": "The shared surname alone proves the instrument’s maker.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "fake",
            "label": "An unconfirmed attribution proves a deliberate modern forgery.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "date",
            "label": "The repair date automatically gives the instrument’s construction date.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "provenance-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "provenance-0"
        }
      ]
    },
    "provenance-3": {
      "title": "A repair ticket inside the case",
      "location": "The archive reading desk",
      "body": [
        "The estate inventory describes a repair label dated 1894, not a construction label. It also gives a durable identifying feature: a round patch beneath the lower block. A photograph taken before the loan shows that patch and the tag K-12. Inside the returned empty case is a duplicate restoration ticket listing that same feature. Its location is encoded B–C–A, with a printed A-first, B-second, C-third key for room, shelf, and slot. The case was left in the hall while the instrument went to a controlled room. You can now look for the loan without treating the old maker’s label as an address."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "clues": [
        "svp-inventory"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "provenance-4",
          "requires": []
        }
      ]
    },
    "provenance-4": {
      "title": "The register at the side entrance",
      "location": "The caretaker’s lodge",
      "body": [
        "The caretaker’s register records Sora entering the restoration wing at 2:25 with one instrument and leaving empty-handed. At 2:32 she returned the empty case to the rehearsal hall. The holding seal was checked at 2:28 by another employee. The sequence fits the written safety authorization but does not, by itself, prove which violin went inside. The estate patch supplies the necessary item-level link. A careful chain needs both a timed custody record and something that identifies the object; a doorway count alone could describe any violin."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "clues": [
        "svp-register"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "provenance-5",
          "requires": []
        }
      ]
    },
    "provenance-5": {
      "title": "The label under the label",
      "location": "The restoration viewing panel",
      "body": [
        "Sora lets you compare the estate photograph with the instrument through the sealed cover. The round patch agrees, and the repair ticket’s 1894 date matches the estate inventory. She explains a simple convention: a repair label records work done, whereas an attribution certificate makes a claim about construction. Neither type of document can be silently turned into the other. Sora has written an unsigned note for Ines: “Do not let the old label choose the instrument.” She placed it on the stand because the program was already being folded for the doors."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [
        "sora"
      ],
      "clues": [
        "svp-note"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "provenance-6",
          "requires": [
            "svp-register",
            "svp-note"
          ]
        }
      ]
    },
    "provenance-6": {
      "title": "A chain that does not depend on a name",
      "location": "The caretaker’s lodge",
      "body": [
        "Choose the two observations that connect the estate loan to the present hold. You need the item-level physical match and the independent record of its controlled movement. The mere recurrence of a surname is not that match. The unsigned note explains a communication failure, but it is not a custody receipt. Use the strongest evidence for the particular question."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations establish the loan’s present custody?",
        "options": [
          {
            "id": "patch",
            "label": "The held instrument matches the estate photograph’s durable patch.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "register",
            "label": "The independently checked register documents its controlled movement.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "surname",
            "label": "Two papers happen to contain the surname Ashford.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "note",
            "label": "An unsigned note was placed on a music stand.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "provenance-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "provenance-4"
        }
      ]
    },
    "provenance-7": {
      "title": "What the papers can restore",
      "location": "The archive desk",
      "body": [
        "The estate photograph and caretaker’s record establish that K-12 is safely held in the restoration wing. The lender’s letter establishes that the hold was permitted and that the program’s maker claim was never requested. Mr. Fox takes a blank catalogue correction slip. He wants to change the entry without erasing its history: “estate of A. Ashford; maker unconfirmed; repair label dated 1894.” Keeping the old wording visible as a superseded entry will let future researchers understand how the error arose. Correction is more valuable when it preserves the steps that made it necessary."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "clues": [
        "svp-chain"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "provenance-8",
          "requires": []
        }
      ]
    },
    "provenance-8": {
      "title": "A donor’s name kept properly",
      "location": "The concert office",
      "body": [
        "Ines phones the lender, reads the proposed correction, and offers an inspected substitute for tonight. The lender is relieved: the family wanted the school’s music supported, not a speculative claim made more valuable by repetition. You can close the missing-instrument question through documented authority and provenance, leaving specialist authentication for a later appointment. Mr. Fox asks for the final wording. The entry should honor what the papers truly preserve—a donor’s association, a case identity, and a repair date—without pretending they answer a different question."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "clues": [
        "svp-wording"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "provenance-9",
          "requires": [
            "svp-chain",
            "svp-wording"
          ]
        }
      ]
    },
    "provenance-9": {
      "title": "Correct the historical record",
      "location": "The concert office",
      "body": [
        "Choose the conclusion that respects both the loan authority and the limits of the historical documents. A good provenance investigation does not require a glamorous maker or a villain. It requires that each statement retain the kind of evidence that supports it. Decide what should be entered into the archive and what should be said about the instrument’s location."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "puzzle": {
        "prompt": "Which archive entry and custody conclusion are justified?",
        "options": [
          {
            "id": "corrected",
            "label": "Record the estate donor and unconfirmed maker; record the authorized restoration hold.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "maker",
            "label": "Certify the maker using the donor’s surname.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "stolen",
            "label": "Record a theft because the concert case was empty.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "remove",
            "label": "Remove the loan and every conflicting document from the archive.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "provenance-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "provenance-7"
        }
      ]
    },
    "provenance-10": {
      "title": "A corrected catalogue card",
      "location": "The archive cabinet",
      "body": [
        "Mr. Fox files the correction behind the old entry rather than throwing the old one away. Ines announces the substitute and thanks the estate by its proper name. Sora’s controlled hold is recorded with the loan papers, and the instrument stays safe. Your route has solved the disappearance through authority, identification, and the history of a mistaken description. The mystery ends in an archive entry another investigator can follow, not in a dramatic claim the evidence cannot sustain."
      ],
      "routeLabel": "Trace the loan’s history",
      "meets": [],
      "ending": {
        "title": "Solved through the loan’s history",
        "kind": "solved",
        "body": [
          "You resolved the case through provenance and authority. A donor’s name is preserved honestly, an instrument is protected, and a mistaken description is prevented from becoming an invented certainty."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "restoration-complete",
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
          "id": "restoration"
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
          "id": "inspect"
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
            "seal",
            "patch"
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
          "id": "substitute"
        }
      ]
    },
    {
      "id": "provenance-complete",
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
          "id": "provenance"
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
          "id": "unconfirmed"
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
            "patch",
            "register"
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
          "id": "corrected"
        }
      ]
    }
  ]
};
