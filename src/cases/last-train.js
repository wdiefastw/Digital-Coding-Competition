/** Original expanded mystery with route-specific evidence and resolutions. */
export default {
  "id": "last-train",
  "title": "The Last Train to Bellweather",
  "genre": "Murder mystery",
  "difficulty": "Challenging",
  "duration": "60+ min",
  "setting": "Bellweather railway station and the snowbound town, winter 1936",
  "description": "The last train has gone. A passenger is dead, the clocks disagree, and the snow is closing every way out. Choose which trail to follow before the morning inquiry begins.",
  "contentNote": "Non-graphic murder mystery involving coercion and wrongful accusation. Estimated first-play time includes reading and deduction.",
  "revision": 2,
  "flags": [
    "rail-route",
    "town-route"
  ],
  "characters": [
    {
      "id": "ward",
      "name": "Inspector Ward",
      "role": "Local police inspector",
      "description": "Listens twice before writing once. He treats an attractive theory as something to test, not something to defend.",
      "color": "#8b9b9b"
    },
    {
      "id": "ellen",
      "name": "Dr. Ellen March",
      "role": "Town physician",
      "description": "Carries a black medical bag and is careful to distinguish an estimate from a timed observation.",
      "color": "#b29b87"
    },
    {
      "id": "owen",
      "name": "Owen Pike",
      "role": "Train conductor",
      "description": "Knows the final departure by its duties: lantern, doors, whistle, and the long walk back.",
      "color": "#b49272"
    },
    {
      "id": "ada",
      "name": "Ada Shaw",
      "role": "Station porter",
      "description": "Keeps the station working in weather that defeats everybody else. Her answers are precise until a question turns personal.",
      "color": "#ab8e9d"
    },
    {
      "id": "vale",
      "name": "Celia Vale",
      "role": "Stranded commercial traveler",
      "description": "Saves receipts in date order and dislikes being mistaken for a person who never notices anything.",
      "color": "#8ea889"
    },
    {
      "id": "ruth",
      "name": "Ruth Moss",
      "role": "Signal operator",
      "description": "Has responsibility for a railway clock whose mistakes would be more serious than embarrassment.",
      "color": "#8fadb0"
    },
    {
      "id": "miles",
      "name": "Miles Trent",
      "role": "Freight clerk",
      "description": "A young clerk with careful ledgers and an unfortunate habit of agreeing with whoever sounds senior.",
      "color": "#bd9b76"
    },
    {
      "id": "ben",
      "name": "Ben Shaw",
      "role": "Relief telegraph assistant",
      "description": "Ada’s younger brother. He wants to clear his name without making his sister’s difficult life harder.",
      "color": "#8da190"
    },
    {
      "id": "edith",
      "name": "Edith Crane",
      "role": "Boardinghouse keeper",
      "description": "Has learned the difference between keeping a confidence and keeping someone in danger.",
      "color": "#b19aab"
    }
  ],
  "clues": [
    {
      "id": "medical",
      "title": "An interval, not a minute",
      "description": "Dr. March spoke with Halden alive and uninjured at 10:15 and returned to find him dead at 10:20. Her watch had been checked against the telegraph clock. Those recorded observations bound the interval; she cannot date the act to one exact minute or identify the visitor."
    },
    {
      "id": "clocks",
      "title": "Three clocks with different authority",
      "description": "The booking-hall clock is four minutes slow; the kitchen clock is two minutes fast. The telegraph clock and Dr. March’s checked watch agree. A time must be normalized before comparing accounts."
    },
    {
      "id": "window",
      "title": "The normalized interval",
      "description": "Use station standard time: 10:15–10:20. Booking-hall readings for the same interval would be 10:11–10:16; kitchen readings would be 10:17–10:22."
    },
    {
      "id": "accounts",
      "title": "What the first statements establish",
      "description": "Owen claims platform duty, Vale claims a telephone call, and Ada claims ringing the platform bell. Only independently confirmed intervals can establish an alibi; their motives and manner establish none."
    },
    {
      "id": "standard",
      "title": "The investigation standard",
      "description": "A charge needs a reliable opportunity window, a demonstrated false account, and corroboration linking a person to the confrontation. Opportunity or a confession on its own will not satisfy Ward."
    },
    {
      "id": "signal-book",
      "title": "The signal cabin’s duplicate",
      "description": "Ruth’s signal book records Owen on the platform from 10:14 to 10:22. Its numbered carbon counterpart was sent to the junction at 10:25, before the death was announced."
    },
    {
      "id": "platform-view",
      "title": "A continuous sight line",
      "description": "Ruth and the adjacent cabin operator separately observed Owen beneath the platform lamps throughout 10:15–10:20. Their windows did not cover the service passage."
    },
    {
      "id": "yard-plan",
      "title": "A route that bypasses the platform",
      "description": "A dated yard plan shows a porter’s passage from the west store to the waiting-room service door. It takes ninety seconds at an ordinary walk and stays outside both cabin sight lines."
    },
    {
      "id": "crate-entry",
      "title": "Freight entry418",
      "description": "Consignment418 was received at 9:40 and placed in west-store bayC. The much later 22:18 figure is an accounts posting, not a delivery time. No train entered then."
    },
    {
      "id": "audit-carbon",
      "title": "The independent wage carbon",
      "description": "The paymaster’s carbon shows relief wages released in full. A later station total removes twelve pounds while preserving the original overall sum by shifting a parcel charge."
    },
    {
      "id": "ledger-proof",
      "title": "A documented diversion",
      "description": "Matching voucher numbers and the bank carbon establish that Halden redirected twelve pounds of relief pay. They explain a grievance but do not identify who entered the waiting room."
    },
    {
      "id": "key-pattern",
      "title": "The service key’s limits",
      "description": "Only the porter’s issued service key opens both the west-store passage and waiting-room service door. A display duplicate opens only the public cupboard; its shortened final tooth cannot operate either door."
    },
    {
      "id": "key-custody",
      "title": "The key ledger and a witnessed return",
      "description": "Ada signed out the issued service key at 10:12 and returned it at 10:24. Miles saw her make the return. The key opens the route outside the platform sight lines."
    },
    {
      "id": "bell-work",
      "title": "Work orderB17",
      "description": "The bell rope was removed at 10:10 and replaced at 10:30 standard time. The damaged rope is attached to a numbered work order signed independently before the medical interval."
    },
    {
      "id": "bell-failure",
      "title": "The bell account cannot be literal",
      "description": "Ada’s continuous bell-ringing account 10:12–10:25 cannot be true: the necessary rope was absent throughout. This eliminates the stated task, not every innocent explanation for her movements."
    },
    {
      "id": "letter-stub",
      "title": "A missing private enclosure",
      "description": "Halden’s document inventory lists enclosureC, a wage complaint signed by Ben Shaw. The numbered cover remains in his case; the enclosure itself is missing."
    },
    {
      "id": "wardrobe-trace",
      "title": "A matching transfer",
      "description": "A loose brass notice pin recovered from the service-door mat fits a recent empty hole in Ada’s porter’s badge. Its broken head is distinctive; it is not a generic resemblance."
    },
    {
      "id": "protected-exhibits",
      "title": "Independent custody of the exhibits",
      "description": "The junction carbon, bank carbon, original work order and recovered pin are separately logged and sealed. Copies used for comparison are marked as copies; none has replaced an original."
    },
    {
      "id": "recovered-letter",
      "title": "The recovered enclosure",
      "description": "A search authorized on the documented route and transfer finds enclosureC in Ada’s locked personal tin. Its torn corner joins the numbered cover retained in Halden’s case."
    },
    {
      "id": "full-chain",
      "title": "The railway proof chain",
      "description": "Independent time clears the public platform; the issued key permits the unseen route; the bell account fails; a distinctive badge pin connects Ada to the service door; the recovered enclosure joins Halden’s file."
    },
    {
      "id": "call-log",
      "title": "A connected call, not a receipt time",
      "description": "The post-office log places Vale in a connected call 10:13–10:23 standard time. The clerk watched the glass booth throughout. The receipt printed at 10:27 records payment afterward."
    },
    {
      "id": "ben-line",
      "title": "A live exchange on the other line",
      "description": "Ben answered the junction operator’s spoken test at 10:16 and 10:19 while connecting a storm warning. The independently held receiving strip records those exchanges; a prewritten telegram could not answer new questions."
    },
    {
      "id": "boarding-note",
      "title": "An invitation, not an admission",
      "description": "Edith’s retained note invited Ben to collect corrected wage papers from the boardinghouse before 10:00. Its paper and delivery were witnessed; it contains no admission about Halden’s later death."
    },
    {
      "id": "letter-order",
      "title": "The order of the two letters",
      "description": "A landlord’s delivery book places the invitation before 9:30. Halden’s demand arrived after 10:00, when Ben was already assigned to the telephone exchange. Similar envelopes conceal different messages and times."
    },
    {
      "id": "vale-ticket",
      "title": "Vale’s route through the hall",
      "description": "The call log and the glass-booth witness cover Vale 10:13–10:23. Her earlier waiting-room ticket proves a meeting before the interval, not a later return."
    },
    {
      "id": "wet-boots",
      "title": "Two kinds of wet ground",
      "description": "Ben’s boots carry pale road salt and coal dust consistent with the post-office approach. The red canal clay in a rumor belongs to a separate laundry bundle delivered before supper."
    },
    {
      "id": "canal-copy",
      "title": "A complaint kept elsewhere",
      "description": "A copy of Ben’s wage complaint was left with Edith before the evening confrontation. Its voucher number matches Halden’s inventory and challenges an alleged advance that the paymaster did not record."
    },
    {
      "id": "identity-check",
      "title": "The sender and the signer",
      "description": "Ben signed the wage complaint; Ada delivered it to Halden. Two witnesses and a retained copy distinguish authorship of the complaint from the person who confronted its recipient."
    },
    {
      "id": "bell-carbon",
      "title": "A maintenance carbon from before the alarm",
      "description": "The boardinghouse’s repairman retained a carbon of work orderB17: platform bell rope removed 10:10, replaced 10:30 standard. It had been delivered with a requisition before the death was reported."
    },
    {
      "id": "town-contradiction",
      "title": "A task that could not occupy the interval",
      "description": "Ada’s claim of ringing the platform bell 10:12–10:25 conflicts with the independently fixed repair interval. The locomotive whistle at 10:22 was a different instrument."
    },
    {
      "id": "protected-promise",
      "title": "A promise kept narrow",
      "description": "Ward offers Ben safe accommodation and separate examination of the wage allegation. He promises neither immunity for Ada nor a predetermined verdict; the witness can speak without bargaining away another inquiry."
    },
    {
      "id": "ada-account",
      "title": "A cautioned account",
      "description": "With an independent witness present, Ada describes entering by the service door with the issued key, confronting Halden over the complaint, and removing enclosureC afterward. Her account is a lead until corroborated."
    },
    {
      "id": "town-recovery",
      "title": "The detail checked outside the interview",
      "description": "Ada names the locked tin and the missing corner of enclosureC before seeing the police inventory. A recorded search recovers the matching paper, whose tear joins the fragment already held in Halden’s case."
    },
    {
      "id": "town-access",
      "title": "Access checked separately",
      "description": "The key ledger records Ada’s issue 10:12 and witnessed return 10:24. A measured service route bypasses the public platform. Those facts are obtained separately from her interview."
    },
    {
      "id": "town-case",
      "title": "The corroborated witness route",
      "description": "Vale and Ben have independent time checks; Ada’s task account fails; her cautioned account contains a withheld detail confirmed by the recovered enclosure and the service-key record."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The lamps after departure",
      "location": "Bellweather booking hall",
      "body": [
        "The final train’s tail lamps vanish beyond the cutting, leaving the station with a silence larger than the building. Snow settles on the platform numbers. You have missed the connection east and expected your worst problem tonight to be finding a room. Instead, Inspector Ward comes through the doors carrying his hat in both hands. A passenger named Edmund Halden has been found dead in the waiting room.",
        "Ward has secured the room and called the county police. The road is blocked, so help will not arrive before morning. He asks whether you will assist with documents and interviews. You will not be asked to examine a body. “The snow makes people imagine we have a locked room,” he says. “What we actually have is a small station with ordinary doors and an extraordinary number of stories.” He offers you a clean notebook and asks you to record where each statement came from."
      ],
      "meets": [
        "ward"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "scene"
        }
      ]
    },
    "scene": {
      "title": "Two ways into one room",
      "location": "The waiting-room threshold",
      "body": [
        "The platform entrance stands opposite the station’s broadest lamp. A narrower service door opens into the porter’s passage behind the waiting room. Ward has placed a constable at each threshold. There is no secret door, and the high ventilation window cannot admit a person. Nobody needs a clever hidden passage to make this case difficult; a perfectly ordinary route can be enough when its timing is misunderstood.",
        "Halden had occupied the room since the train was delayed. A cup, an unopened newspaper, and a leather document case have been photographed in place. Ward will not let anyone search the case until ownership and authority have been recorded. The newspaper bears tomorrow’s date, but the station receives the first edition with the late freight. That apparent oddity is routine. You note it anyway, alongside the explanation. A mystery grows less reliable whenever an investigator keeps the strange detail but loses the ordinary reason."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "doctor"
        }
      ]
    },
    "doctor": {
      "title": "What a careful estimate means",
      "location": "The station surgery",
      "body": [
        "Dr. Ellen March has turned the parcel office into a temporary surgery for stranded travelers. Her signed note describes two timed observations: she gave Halden a glass of water at 10:15, speaking with him while he was alive and uninjured; at 10:20 she returned for her bag and found him dead. The five-minute interval comes from those recorded visits, not an impossibly precise examination of the body. She cannot tell you what was said during the intervening confrontation or at which exact minute it happened.",
        "Her watch was checked against the telegraph clock at ten. She stresses that point because the booking-hall clock has been losing time for several days. Ward asks whether her estimate can be widened to include an earlier suspect. She looks offended on behalf of arithmetic. “If another observation changes my conclusion, I shall change it,” she says. “A convenient suspect is not an observation.” You copy the interval and the authority behind its clock. That will matter more than writing the five minutes in a heavy underline."
      ],
      "meets": [
        "ellen"
      ],
      "clues": [
        "medical"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "clockroom"
        }
      ]
    },
    "clockroom": {
      "title": "A station does not share one time",
      "location": "Outside the telegraph office",
      "body": [
        "A card pinned beside the telegraph clock lists three readings taken at the same instant: telegraph 10:30, booking hall 10:26, kitchen 10:32. The telegraph instrument receives the railway’s standard time signal. Its checking sheet was signed at nine, ten, and half past ten. The booking clock is a convenience for passengers; nobody is meant to dispatch a train by it.",
        "There are practical consequences. A porter who says she left the hall when its hands showed 10:14 may mean standard 10:18. A kitchen witness who remembers 10:18 may mean standard 10:16. You cannot choose whichever reading makes a theory work. Dr. March’s interval is already standard time. Before comparing the other accounts, put the conversions on paper. Ward would rather wait while you subtract correctly than spend the rest of the night defending a beautifully assembled mistake."
      ],
      "clues": [
        "clocks"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "clock-question"
        }
      ]
    },
    "clock-question": {
      "title": "One interval, three displays",
      "location": "The telegraph clock",
      "body": [
        "You draw a column for each clock and a line beneath Dr. March’s interval. It is tempting to convert the medical estimate because she works in the surgery, but location does not determine which clock someone used. She explicitly checked her watch against railway standard. The names of rooms are therefore not enough; the provenance of a time is part of the evidence.",
        "Ward places four possible pairs of booking-hall readings on the table. Only one represents the whole medical interval without widening or shifting it. The kitchen’s faster hands are irrelevant to this particular conversion. Work from the simultaneous check card: at standard 10:30 the booking clock displayed 10:26. Whatever operation you use must produce that relationship as well as the answer below. You may reread the notebook; there is no penalty for taking a difficult detail seriously."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which booking-hall interval corresponds to standard 10:15–10:20?",
        "options": [
          {
            "id": "slow",
            "label": "10:11–10:16",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "fast",
            "label": "10:19–10:24",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "wide",
            "label": "10:11–10:24",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "same",
            "label": "10:15–10:20",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "clock-result"
      }
    },
    "clock-result": {
      "title": "A common language for the night",
      "location": "The inspector’s table",
      "body": [
        "The booking-hall interval is 10:11 to 10:16. You write the standard interval above it and resist the urge to discard the original readings. Keeping both lets another investigator check the conversion instead of taking your authority on trust. Ward adds a note that all later times in your working chronology will be standard unless a witness’s uncorrected wording is quoted.",
        "This does not remove the uncertainty of memory. Someone who glanced at a clock “around quarter past” has not suddenly given you a second-by-second record. It does remove an avoidable source of false contradictions. You have established a method rather than discovered a culprit. Outside, the railway staff are moving a stranded family into the warmest carriage. The night has other duties, and every person you interview is trying to continue living inside it. Ward asks you to keep that in mind when somebody sounds impatient."
      ],
      "clues": [
        "window"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "witnesses"
        }
      ]
    },
    "witnesses": {
      "title": "Three statements in separate rooms",
      "location": "The booking hall",
      "body": [
        "Owen Pike, the conductor, says he remained on the illuminated platform until the train left at 10:22. Celia Vale, a traveling buyer, says she was on a telephone call in the post-office booth. Ada Shaw, the porter, says she rang the platform bell continuously from 10:12 until 10:25. None has yet supplied you with independent confirmation of the complete five-minute interval.",
        "They are not equally relaxed. Owen is angry at being delayed from his crew. Vale is brisk and almost too ready with her little packet of receipts. Ada keeps asking whether anyone has seen her younger brother. Those impressions may explain how each person behaves, but they do not locate anybody at 10:17. Ward has written each account on a separate sheet, including the question that produced it. You meet them one by one rather than letting a confident person teach everyone else what they supposedly remember."
      ],
      "meets": [
        "owen",
        "vale",
        "ada"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "first-comparison"
        }
      ]
    },
    "first-comparison": {
      "title": "The difference between a claim and a check",
      "location": "The booking-hall stove",
      "body": [
        "You set the statements side by side. Owen refers to two workers who should have seen him. Vale refers to a call log that should exist elsewhere. Ada describes a task whose physical apparatus should be inspectable. Each statement therefore offers a different kind of test. None should be accepted merely because it comes with an obvious test; the test still has to be performed.",
        "Halden’s luggage includes a printed notice about missing relief wages at the railway. It may explain why he was here, but it supplies no time and no visitor. A rumor says Vale argued with him at supper. A traveler says Owen looked furious on the platform. You put these in a separate column headed “leads,” not “facts about the fatal interval.” The distinction protects innocent people and protects a genuine investigation from being overturned by the first detail it exaggerated."
      ],
      "clues": [
        "accounts"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "initial-question"
        }
      ]
    },
    "initial-question": {
      "title": "Choose the tests, not the person",
      "location": "Ward’s notebook",
      "body": [
        "Ward asks you to choose the observations that would genuinely test location during the medical interval. He is not asking whom you like, whom you suspect, or whose account sounds most polished. He wants the first independent checks, before a night of interviewing gives everyone a chance to absorb the same version of events.",
        "A useful check must connect a person or necessary task to the relevant period. A document can do that only if you establish what its time means and how it was produced. A witness can do it only for the period actually observed. An argument earlier in the evening is a reason to ask another question, not a substitute for either kind of record. Select every proposed test below that could establish or contradict location; leave out items that concern demeanor or general motive instead."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which checks can test location during the fatal interval? Select all supported methods.",
        "options": [
          {
            "id": "platform",
            "label": "Interview the two workers separately about Owen’s continuous platform presence.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "phone",
            "label": "Obtain the telephone connection log and ask who could see the booth.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "bell",
            "label": "Inspect the bell and its dated maintenance record.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "anger",
            "label": "Treat Owen’s anger as proof he left the platform.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "argument",
            "label": "Use Vale’s supper argument as a complete night-long alibi.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "mandate",
        "wrongFeedback": "That set does not account for every restriction. Compare the documents before committing to a conclusion.",
        "minSelections": 2,
        "maxSelections": 4
      }
    },
    "mandate": {
      "title": "What it would take to make a case",
      "location": "The inspector’s borrowed desk",
      "body": [
        "Your three proposed checks establish a useful division of labor. Ward will have his constable preserve the original statements and keep the waiting room closed. You can either follow the railway’s physical and documentary trail or take the less predictable route through the town’s witnesses. The county team cannot spare a second investigator tonight. Choosing one first means the other set of leads will be handled later by different officers, after the immediate witnesses have gone home.",
        "Ward is clear about the standard for an ending. You must establish opportunity using reliable time, identify a contradiction that survives correction, and obtain corroboration linking someone to the confrontation. A lonely person with a motive is not a solution. Neither is an untested confession. Your route can change how the truth is proved and how the people involved are treated. It must not change the facts simply because those facts would be more convenient elsewhere."
      ],
      "clues": [
        "standard"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "route"
        }
      ]
    },
    "route": {
      "title": "Which trail will you own?",
      "location": "Under the station departure board",
      "body": [
        "Beyond the glass doors, the signal cabin remains lit. Its records will lead toward the freight yard, the audit office, and the service passages. That route promises tangible exhibits, but it will put the investigation’s authority in public view. People who know where documents are hidden may retreat before you reach them.",
        "Across the lane, the post office is still sheltering telephone customers. Starting there will take you into boardinghouse rooms, the closed market, and a riverside refuge. Witnesses may tell you things they would never put in an official ledger, but memories need corroboration and promises need care. Ward will authorize either approach. Once you leave with its evidence seals or its interview letters, you are committing the remaining night to that method. Both can resolve the case; they will not tell the same story of how you arrived at the truth."
      ],
      "choices": [
        {
          "id": "rail",
          "label": "Take evidence seals and follow the railway records",
          "to": "a00",
          "excludesFlags": [
            "town-route"
          ]
        },
        {
          "id": "town",
          "label": "Take introduction letters and follow the town witnesses",
          "to": "b00",
          "excludesFlags": [
            "rail-route"
          ]
        }
      ]
    },
    "a00": {
      "title": "A cabin above the snow",
      "location": "The signal cabin",
      "body": [
        "Ruth Moss lets you climb the wooden steps only after Ward’s constable records who has custody of the evidence seals. The cabin is warm, sharp with coal dust, and arranged around instruments that are meant to prevent people improvising. Ruth explains the signal book before discussing the murder. The time column records observed events in railway standard; the tiny figures in the margin are page numbers, not a second set of times.",
        "She remembers Owen beneath the platform lamp. An adjacent operator saw the same thing from a different angle. Ruth does not say either could see into the porter’s passage, and you do not ask her to improve the view retrospectively. She offers her carbon book and points to the rack where a duplicate page was dispatched to the junction before anyone knew that a passenger was dead."
      ],
      "meets": [
        "ruth"
      ],
      "setFlags": [
        "rail-route"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a01"
        }
      ]
    },
    "a01": {
      "title": "A page that left before the news",
      "location": "The cabin record rack",
      "body": [
        "The duplicate carries a junction stamp of 10:25. The first call reporting Halden’s death was logged at 10:31. This does not make every entry in the book infallible. It does make a coordinated alteration after the news much harder to maintain: the original and a separately held counterpart would have to agree. You ask Ruth which events she personally observed and which were reported by another cabin.",
        "Her entries for Owen are observations, not messages. She saw him at 10:14 when he checked the carriage door, then continuously in the lamp’s circle as he waited for the whistle. The adjacent operator confirms his presence through departure at 10:22. The small gap before 10:14 remains a gap, but it falls outside Dr. March’s interval. Ward’s lesson returns: an alibi is only as broad as the period actually covered, and here the covered period is enough."
      ],
      "clues": [
        "signal-book",
        "platform-view"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a02"
        }
      ]
    },
    "a02": {
      "title": "The weight of a duplicate",
      "location": "The signal cabin desk",
      "body": [
        "A copied page can tempt an investigator into two opposite mistakes. One is to dismiss it because it is not unique; the other is to treat duplication as proof that no one could ever be wrong. The value here is more precise. The copy establishes an earlier fixed version of the account, and two observers establish the actual sighting during a defined interval.",
        "Choose the conclusion that uses all of those limits. You are checking Owen’s location, not certifying his character. He might have argued with Halden, borrowed money, or behaved badly at another time without having entered the waiting room during these five minutes. Equally, his presence on the public platform tells you nothing about who used a service door outside the observers’ view. A sound inference can clear one route while leaving another completely open."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "single",
        "prompt": "What do the independently held page and two sight lines establish?",
        "options": [
          {
            "id": "clear",
            "label": "Owen remained on the public platform during the entire medical interval; the unseen service route remains untested.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "all",
            "label": "Nobody could have entered either waiting-room door.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "character",
            "label": "Owen has never had any disagreement with Halden.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "late",
            "label": "The junction stamp proves that the death occurred at 10:25.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a03"
      }
    },
    "a03": {
      "title": "What the cabin cannot see",
      "location": "The western signal window",
      "body": [
        "Ruth takes you to the second window and asks you to point to the waiting-room service door. You cannot: the parcel store hides it. She seems relieved that you have noticed. An earlier officer in another inquiry once turned “I did not see anyone” into “nobody went there,” and she has since become painfully exact about geography.",
        "You copy the visible area onto a plan, shading the lamp’s circle and leaving the blind passage white. The map is not itself proof that anyone used the passage. It is proof that a person could use it without contradicting the platform observations. A freight clerk has the current passage plan in the west store. Ruth offers to telephone him ahead, but you ask her only to say you need the plan, without mentioning your emerging theory. An unprompted explanation is more useful than a witness rehearsing the explanation you have already supplied."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a04"
        }
      ]
    },
    "a04": {
      "title": "Ninety seconds behind the wall",
      "location": "The west-store passage",
      "body": [
        "Miles Trent unlocks the store and produces a plan dated last month. The service passage runs behind the parcels wall and ends at the waiting room. It requires the issued porter’s key at two locks. A walk with the constable takes ninety seconds; a return takes the same, provided nothing is carried that would delay a person. You record the conditions rather than treating the measurement as an exact account of a journey no one witnessed.",
        "Miles points out that the freight ledger has an entry at 10:18. He thinks it may prove he and Ada were receiving a crate then. You look toward the rails. No engine has arrived since the passenger train, and the snow over the goods line is undisturbed. The ledger may still be truthful; perhaps you have not yet understood what its time column measures."
      ],
      "meets": [
        "miles"
      ],
      "clues": [
        "yard-plan"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a05"
        }
      ]
    },
    "a05": {
      "title": "When a time is not an arrival",
      "location": "The freight counter",
      "body": [
        "The ledger heading reads “posted,” in ink so faded it nearly disappears into the ruling. A separate receiving sheet uses “received.” Consignment418 appears on both:9:40 on the receiving sheet,10:18 in the accounts book. Miles says he routinely posts charges after helping with departures. He had let the neater, later book stand in for his memory of the earlier work.",
        "The receiving sheet gives the engine number and the driver’s signature. The accounts book gives a fee column and no engine details. Neither is necessarily false. They describe different events. You ask Miles to write his actual recollection before seeing the matching sheet again. He remembers Ada requesting a storage bay earlier, but cannot honestly say he saw her beside the counter during the medical interval. His willingness to narrow a claim makes him more useful, not less."
      ],
      "clues": [
        "crate-entry"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a06"
        }
      ]
    },
    "a06": {
      "title": "Place and possibility",
      "location": "The west-store plan table",
      "body": [
        "You have a tested ninety-second passage and two records describing one consignment at different stages. Those observations can answer a limited question about opportunity. They cannot tell you who made the journey or whether the traveler intended a confrontation. A three-minute return trip could fit inside five minutes; that is a possibility, not a confession written by the building.",
        "Ward has asked you to mark which pieces of information should survive into the working chronology. Keep the meaning of the freight record attached to its time. Keep the route’s measurement attached to its assumptions. Do not erase the independent platform observations just because a blind route has appeared. Select the two statements that can coexist without turning a clerical posting into a train movement or a possible path into an identified person."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two statements belong in the corrected reconstruction?",
        "options": [
          {
            "id": "posting",
            "label": "The 10:18 figure is an accounts posting and does not locate Ada at a delivery.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "possible",
            "label": "The service passage makes an unseen return journey physically possible within the medical interval.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "train",
            "label": "A goods train arrived at 10:18 because the ledger contains that time.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "identity",
            "label": "The passage plan alone proves who used the service door.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a07",
        "wrongFeedback": "That set does not account for every restriction. Compare the documents before committing to a conclusion.",
        "minSelections": 2,
        "maxSelections": 4
      }
    },
    "a07": {
      "title": "A correction made in daylight ink",
      "location": "The freight clerk’s desk",
      "body": [
        "Miles signs a short correction to his first statement: he had confused a posting with a receipt, and he cannot independently place Ada at the counter after 10:12. You staple neither statement over the other. Both remain visible in order, so the correction cannot later look like a convenient deletion. The constable gives Miles a copy and asks him not to discuss the details with other witnesses.",
        "The crate itself is still in bayC. Its label bears the relief fund’s routing code, although its contents should be ordinary lamp fittings. Halden had asked to inspect that consignment earlier in the evening. This gives you another lead, but not permission to open anything at random. Ward obtains the storekeeper’s consent to examine the exterior and the freight office’s authority to verify the inventory. A case built on careful timing should not become careless about every other rule."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a08"
        }
      ]
    },
    "a08": {
      "title": "Bay C",
      "location": "The west-store freight bay",
      "body": [
        "The crate’s two seals are intact. One bears the supplier’s mark; the other was added at the junction and carries a number printed on the receiving sheet. A penciled notation on the outside says “fund12,” but the manifest describes six replacement lamps weighing forty-eight pounds. “Pounds” has two meanings here, and the ambiguity has already generated an enthusiastic rumor about money arriving in a wooden box.",
        "Miles finds the unit-price line: eight shillings per lamp, six lamps, total forty-eight shillings. The gross weight is forty-eight pounds. The relief fund’s separate entry is twelve pounds sterling. The three quantities are not interchangeable. Your job is to follow a real mismatch without inventing one through vocabulary. The crate may explain an accounting disguise even if it never contained a single coin."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a09"
        }
      ]
    },
    "a09": {
      "title": "A small sum moved twice",
      "location": "The freight accounts shelf",
      "body": [
        "Three documents lie together: a supplier’s invoice for forty-eight shillings, the station’s charge sheet for the same consignment, and a relief-wage carbon that Halden had requested from the paymaster. The station charge is inflated by twelve pounds; the relief total is reduced by twelve. The combined total shown to the district office is unchanged.",
        "The voucher numbers, not the nearby dates, connect the entries. A later annotation claims the relief difference was an advance to Ben Shaw, Ada’s brother. The paymaster’s carbon has no such advance and records the full wages released. You have found a reason for investigating Halden’s role in a diversion. You have not yet found a reason for treating a relative’s grievance as proof of murder. Keep those two questions separate even when the same names appear on both pages."
      ],
      "clues": [
        "audit-carbon"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a10"
        }
      ]
    },
    "a10": {
      "title": "Follow the quantities",
      "location": "The accounts comparison table",
      "body": [
        "The false trail would be attractive: a mysterious crate arrives, a number matches a sum, and somebody must have carried money out. The sealed crate and its earlier arrival do not support that story. The papers support something less picturesque and more demonstrable: one charge was raised while another obligation was reduced, concealing a diversion in an unchanged combined total.",
        "Choose the explanation that fits the units and the independent carbon. You do not need to calculate an entire annual account. Six lamps at eight shillings establish the genuine lamp charge; the paymaster’s duplicate establishes what was released for relief wages. If a proposed theory requires treating gross weight as currency, it has stopped explaining the evidence. If it names a killer before establishing access to the room, it has gone beyond the question."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "single",
        "prompt": "What does the matched voucher trail demonstrate?",
        "options": [
          {
            "id": "diversion",
            "label": "A twelve-pound wage diversion was hidden by an inflated lamp charge; it supplies motive evidence, not the killer’s identity.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "cratecash",
            "label": "Forty-eight pounds of stolen cash arrived in the crate at 10:18.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "benpaid",
            "label": "The carbon proves Ben personally collected a twelve-pound advance.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "none",
            "label": "An unchanged combined total proves no money was diverted.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a11"
      }
    },
    "a11": {
      "title": "Keeping the original dry",
      "location": "The freight office safe",
      "body": [
        "Ward seals the genuine paymaster’s carbon separately from the altered station sheet. You label your comparison as a working copy and write the supplier’s units in full. Miles admits he initially thought “fund12” was a legitimate district instruction. The notation is in Halden’s hand, according to letters already held in the district office, but handwriting resemblance alone is not the foundation of your inference.",
        "The bank’s transfer reference on the carbon gives a stronger connection. The relief payment was acknowledged by an account Halden controlled on behalf of the inspection team. Ward can obtain a formal bank statement in the morning. For tonight, the numbered carbon and the mismatched charges justify preserving the documents. They do not authorize you to tell the stranded passengers a finished story. Outside the office, rumor is already running faster than any train could."
      ],
      "clues": [
        "ledger-proof"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a12"
        }
      ]
    },
    "a12": {
      "title": "An accusation with a history",
      "location": "The closed audit office",
      "body": [
        "The audit office smells of sealing wax and a coal fire put out too early. A notice on the wall names Ben Shaw in a pending inquiry into missing wages. The underlying file does not show a completed finding against him. It shows an allegation made by Halden, then requests for records that had not yet been answered.",
        "Ada had asked three times to see the papers, once through the stationmaster and twice by letter. You can imagine several reasons for a frightened sister to confront an accuser. Imagination is not a substitute for choosing between them. Ward reminds you that motive can explain why a meeting might happen, but cannot tell whether a meeting became a murder. You need a route, an identified visitor, and corroboration of what was removed. The key cabinet may answer the next part of that chain."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a13"
        }
      ]
    },
    "a13": {
      "title": "The limit of a motive",
      "location": "The audit-office desk",
      "body": [
        "You have enough financial evidence to suspect that Halden used the wage allegation to pressure Ben and Ada. A less careful inquiry might now make every ambiguous detail fit the sister. Ward asks you to state, explicitly, what the papers cannot establish. That discipline is not an academic exercise. If you know the missing link, you can search for it instead of pretending it is already present.",
        "The appropriate next action must preserve the distinction between a financial wrong and a fatal confrontation. The papers may justify questioning people about an argument. They may also exonerate someone wrongly blamed for missing money. They cannot place the questioning person at either door of the waiting room. Four possible next steps lie below. Choose the one that adds a genuinely new kind of evidence rather than polishing the motive you already possess."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "single",
        "prompt": "What missing link should the investigation test next?",
        "options": [
          {
            "id": "access",
            "label": "Establish who controlled a key capable of opening the unseen service route during the medical interval.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "rumor",
            "label": "Announce that the strongest family grievance identifies the killer.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "weight",
            "label": "Reweigh the sealed crate until its weight proves a visitor’s name.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "erase",
            "label": "Discard the bank carbon because it concerns a separate offense.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a14"
      }
    },
    "a14": {
      "title": "Two keys that look alike",
      "location": "The station key cabinet",
      "body": [
        "The issued service key hangs from a red leather tag. A display duplicate, kept for training new staff, hangs beside it on blue cord. From a distance their bows and shafts look identical. Up close, the duplicate’s final tooth is shortened deliberately. A maker’s card says it can demonstrate the public cupboard lock but cannot open the porter’s passage or the waiting-room service door.",
        "The sign-out ledger gives Ada the red-tagged key at 10:12 and records a return at 10:24. Miles saw the return while posting his late accounts. He remembers the red tag because it landed on his wet sleeve and left a mark. You record that recollection before showing him the cabinet. A demonstrably different key matters more than an argument about whether someone could have borrowed “a key” in the abstract."
      ],
      "clues": [
        "key-pattern"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a15"
        }
      ]
    },
    "a15": {
      "title": "A trial with witnesses",
      "location": "The unoccupied service passage",
      "body": [
        "With Ward and the constable present, you test the blue-cord duplicate at both service locks. It fails without turning. The issued red-tagged key opens each. Nobody oils the locks, files a tooth, or takes the keys out of sight between tests. The constable records the maker’s marks and returns each key to a separate labeled envelope.",
        "This is not a theatrical reenactment of a murder. It is a modest test of a claim about access. The ledger tells you who signed for the working key, but a signature does not prove that person kept it every second. Miles’s witnessed return narrows the uncertainty at the end. You still need to ask whether any evidence connects the signed-out key’s custodian with the service threshold. For now, distinguish a functional result from an ownership inference. Both are useful, and they are not the same thing."
      ],
      "clues": [
        "key-custody"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a16"
        }
      ]
    },
    "a16": {
      "title": "The key is not the whole case",
      "location": "The key-cabinet counter",
      "body": [
        "You put three propositions in separate boxes: the issued key can operate the route; Ada signed it out during the interval; and someone using the route must have crossed the service threshold. Only the first two have evidence so far. A blue-cord key borrowed by an unknown traveler cannot account for the locks, but that does not magically supply the identity of every person who touched the red tag.",
        "Select the statements you can preserve without exaggeration. There should be two. The tests have ruled out a tempting alternative about the display duplicate. They have not ruled out every imaginable exchange of the issued key, and the disappearance of an alibi would not by itself prove a killing. A clear explanation of those limits will make later physical evidence more persuasive because it shows that you did not begin by deciding what the key ought to mean."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two conclusions survive the witnessed key tests?",
        "options": [
          {
            "id": "function",
            "label": "The red-tagged issued key opens the unseen route; the blue training duplicate does not.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "custody",
            "label": "Ada signed for the working key during the relevant interval and was seen returning it.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "everysecond",
            "label": "The sign-out signature proves uninterrupted second-by-second custody.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "blueworks",
            "label": "Any visually similar key could have opened the service doors.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a17",
        "wrongFeedback": "That set does not account for every restriction. Compare the documents before committing to a conclusion.",
        "minSelections": 2,
        "maxSelections": 4
      }
    },
    "a17": {
      "title": "A work order with a loose end",
      "location": "The maintenance locker",
      "body": [
        "The maintenance locker contains a frayed length of bell rope tied to work orderB17. The order has two times: removal at 10:10, replacement at 10:30. Both are standard time, copied from the maintenance foreman’s checked pocket watch. A carbon went to the signal cabin at 10:11, and Ruth confirms receiving it before the train’s final departure.",
        "You do not have to rely entirely on the carbon. The detached rope is attached to the numbered order, its repair knot documented before anyone reported a death. There is no electric substitute bell in this station. The old handbell in the booking hall is a different instrument and cannot be rung from the platform position Ada described. Ward asks you to quote her exact words again. She had said the platform bell, continuously, from 10:12 to 10:25. That precision is about to become important."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a18"
        }
      ]
    },
    "a18": {
      "title": "What a missing rope changes",
      "location": "Under the platform bell",
      "body": [
        "The platform bell is mounted above head height. Its pull runs through a wooden guide into the maintenance locker. During the recorded work it could not be sounded from the ground. The carpenter’s ladder was locked in the yard, and neither Ada nor any witness claims she climbed to the bell. You need not invent an acrobatic alternative to preserve an account its own speaker has not offered.",
        "The signal cabin’s records do include a departure sound at 10:22, but the notation is “whistle,” not “bell.” Owen’s locomotive whistle was functioning. A hurried reader could fuse the two sounds into a general memory of ringing; the written distinction prevents that mistake. You now have a contradiction involving a task, the apparatus necessary to perform it, and a dated record made before the murder investigation began. It is stronger than saying somebody looked evasive when you asked about the time."
      ],
      "clues": [
        "bell-work"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a19"
        }
      ]
    },
    "a19": {
      "title": "A contradiction worth challenging",
      "location": "The empty platform",
      "body": [
        "You are ready to tell Ward which statement cannot stand as originally made. Take care to identify the statement rather than announce the verdict. Ada may attempt to revise her account, and the revision will itself need testing. The significance of the contradiction is that it removes her claimed task during the exact period when she had access to the unseen route.",
        "The same maintenance record also prevents an unfair inference against Owen. A train could depart on its whistle while the station’s platform bell was unavailable. The departure itself therefore does not prove Ada was ringing anything. Choose the conclusion that integrates the apparatus, the recorded interval, and the two separate sounds. A case becomes complicated when different records refer to different things; it becomes solvable when you stop forcing them to be interchangeable."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "single",
        "prompt": "Which account is physically contradicted by the maintenance record?",
        "options": [
          {
            "id": "ada",
            "label": "Ada’s claim of continuously ringing the platform bell between 10:12 and 10:25.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "owen",
            "label": "Owen’s claim that the locomotive whistle sounded at departure.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "ruth",
            "label": "Ruth’s statement that she watched the illuminated platform.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "doctor",
            "label": "Dr. March’s estimate, because bell maintenance changes a medical interval.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a20"
      }
    },
    "a20": {
      "title": "A mark close to the floor",
      "location": "The waiting-room service threshold",
      "body": [
        "Ward authorizes a second examination of the secured threshold, with the original photograph beside you. A small brass piece near the mat was noted but not identified during the first survey. It is a broken notice pin, the sort used to fasten the metal number on a porter’s badge. The break is crooked and unusually close to the head.",
        "Ada’s badge was visible in her first interview. One corner of its number sits loose above a bright empty hole; the other pin has the same domed head. Ward does not permit you to press the recovered piece into her badge yourself. The constable photographs the badge in place, then obtains it by consent for a witnessed comparison. The eventual fit can be tested without the person who favors the theory performing an undocumented little adjustment. Small evidence demands large patience because it is so easy to mishandle."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a21"
        }
      ]
    },
    "a21": {
      "title": "The paper that should have been there",
      "location": "Halden’s secured document case",
      "body": [
        "The document case is opened under the stationmaster’s authority, with Ward inventorying each item. A numbered cover marked enclosureC contains only a torn corner of paper. The inventory, written earlier by Halden, describes a wage complaint signed by Ben Shaw. A matching reference appears in the relief-pay file. The complaint itself is missing.",
        "The badge pin’s broken surfaces match under a magnifier without pressure or alteration. It establishes a transfer at the service threshold more specifically than the simple presence of a porter’s uniform would. Together, the pin and the absent enclosure give Ward a route toward corroboration. Neither should be made to do the other’s job. The transfer links Ada to a doorway she omitted from her account; the paper identifies a particular item worth searching for under proper authority. The motive remains an explanation to test, not a reason to abandon procedure."
      ],
      "clues": [
        "letter-stub",
        "wardrobe-trace"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a22"
        }
      ]
    },
    "a22": {
      "title": "Means, opportunity, and a missing page",
      "location": "The inspector’s table",
      "body": [
        "Your notebook now contains more than one plausible-sounding story. Perhaps the missing paper was moved lawfully before the confrontation. Perhaps the badge pin arrived by an innocent visit. Those alternatives cannot be wished away. What matters is whether a specific next action can distinguish them from a confrontation followed by removal of the complaint.",
        "The best action should follow the evidence you have, using authority proportionate to its limits. It should not turn Ben’s relationship to Ada into permission to search an entire town. Nor should it confuse discovering Halden’s dishonesty with proving that Ada killed him. The distinctive transfer, her route access, and her contradicted task account provide a basis to seek a defined search. The object of that search is the particular missing enclosure whose torn corner remains secured in Halden’s file."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "single",
        "prompt": "What is the properly targeted next step?",
        "options": [
          {
            "id": "search",
            "label": "Seek authority to search Ada’s personal station storage for the specifically identified missing enclosure.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "ben",
            "label": "Arrest Ben because his name appears on the absent complaint.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "announce",
            "label": "Tell the passengers the badge pin alone proves murder.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "cancel",
            "label": "Stop investigating the confrontation because Halden diverted wages.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a23"
      }
    },
    "a23": {
      "title": "Statements that do not improve each other",
      "location": "The railway staff room",
      "body": [
        "Before seeking the search, Ward interviews Miles and Ruth separately once more. He does not tell either about the badge pin. Miles repeats that Ada returned the red-tagged key at 10:24. Ruth repeats the platform observation and identifies the carbon she received before the death was known. Their accounts do not acquire a new dramatic detail merely because the inquiry is close to an answer.",
        "You ask each person what would make them uncertain. Miles cannot say who held the key between issue and return. Ruth cannot see through the parcel-store wall. Those limits remain in the statements. Ward includes them in his application rather than hoping no one will ask. A search authorized on a candid description is stronger than one authorized on an attractive summary that omits every weakness. Ada is given the opportunity to have a representative present when her storage is examined."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a24"
        }
      ]
    },
    "a24": {
      "title": "A chain that can be checked",
      "location": "The evidence-sealing bench",
      "body": [
        "The evidence bench holds originals from four places: the junction’s signal carbon, the paymaster’s wage carbon, the maintenance order with its rope, and the recovered pin. Each has a separate label recording who obtained it, when, and from whom. Your penciled chronology is not placed among them as though it were another independent witness. It is a tool for explaining the exhibits.",
        "Ward asks you to select the safeguards that prevent one mistaken or dishonest station clerk from manufacturing the entire case. Miles’s assistance has been useful, but useful is not the same as indispensable. The documents were created and retained by different people for different duties before anyone had a murder theory. Their independence is not a magical guarantee; it is a reason discrepancies can be examined rather than all roads leading back to one person’s unchecked memory."
      ],
      "clues": [
        "protected-exhibits"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a25"
        }
      ]
    },
    "a25": {
      "title": "Keep the links separate",
      "location": "The evidence inventory",
      "body": [
        "A defense solicitor will eventually ask whether the same person supplied every crucial fact. That is a reasonable question. If the only key ledger, bell account, and platform observation all depended on Miles agreeing with you, the neat diagram would hide a serious weakness. Your labels show why that is not the case.",
        "Select the safeguards that matter. There are three: the signal duplicate was already elsewhere; the wage carbon has a separate origin; and the maintenance record was fixed before the death was reported. A confident handwriting opinion may supplement a document but cannot replace those origins. Recopying everything in your own neat hand would make the case less transparent. Your own chronology should remain visibly secondary, so another investigator can disagree with your inference without losing access to the observations on which it was built."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which safeguards support an independently checkable case? Select three.",
        "options": [
          {
            "id": "signal",
            "label": "Use the junction-held carbon rather than only the station’s present book.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "bank",
            "label": "Preserve the paymaster’s carbon separately from the altered station total.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "work",
            "label": "Retain the work order and dispatch time fixed before the death was reported.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "rewrite",
            "label": "Replace all originals with one clean summary in your handwriting.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "confidence",
            "label": "Treat Miles’s confidence as a substitute for independent origin.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a26",
        "wrongFeedback": "That set does not account for every restriction. Compare the documents before committing to a conclusion.",
        "minSelections": 2,
        "maxSelections": 4
      }
    },
    "a26": {
      "title": "Authority written down",
      "location": "The stationmaster’s office",
      "body": [
        "Ward receives the authorization by telephone and has the wording repeated to the stationmaster as a second listener. The search is limited to Ada’s station storage and to objects connected with the missing enclosure and the confrontation. A constable will perform it while another records the sequence. Ada may observe without being asked to identify which object the police should prefer.",
        "She says very little when told about the search. You cannot turn that silence into evidence of guilt; a person facing police authority has many reasons to be quiet. She asks whether Ben is under arrest. Ward answers accurately: the wage allegation against him is being separately examined, and no decision about Ada will be bargained against a promise to ignore it. Whatever happened in the waiting room, two inquiries must remain distinct enough for an innocent person to be cleared of one without purchasing an acquittal in the other."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a27"
        }
      ]
    },
    "a27": {
      "title": "The corner that fits",
      "location": "Ada’s station storage cupboard",
      "body": [
        "Inside a locked personal tin, beneath a folded repair apron, the constable finds a paper headed with the same voucher number as enclosureC. Its corner is missing. Nobody joins the pieces immediately. The paper is photographed where it lies, removed with its surrounding contents recorded, and compared later under the same light as the secured fragment from Halden’s case.",
        "The tear fits without overlap. Ben’s signature, the wording of the wage complaint, and a note demanding withdrawal of the allegation agree with Halden’s inventory. Ada acknowledges owning the tin and says no one else has its small key. She is cautioned before further questions. The discovery does not erase the earlier uncertainties; it supplies the corroboration for which you deliberately looked. A particular visitor had access, gave a demonstrably false task account, left a specific transfer, and possessed a particular item missing after the confrontation."
      ],
      "clues": [
        "recovered-letter"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a28"
        }
      ]
    },
    "a28": {
      "title": "Five minutes, reconstructed modestly",
      "location": "The cleared audit-office wall",
      "body": [
        "Your final diagram begins at 10:12 with the issued service key and ends at 10:24 with its witnessed return. Within that interval, the fatal window is 10:15–10:20. The service passage permits a journey outside the platform observers’ view. The claimed platform task cannot occupy those minutes because its necessary rope was detached. The badge transfer and joined enclosure connect the access theory to Ada rather than leaving it as an anonymous possibility.",
        "You do not draw an exact minute for the confrontation or invent Halden’s final words. The evidence does not provide them. You do draw a separate line for the wage diversion, because it explains the pressure surrounding the complaint. Ward asks whether you can present the proof without depending on Ada confessing. That is the defining opportunity of this route: a case whose core remains checkable even if the person accused never explains herself."
      ],
      "clues": [
        "full-chain"
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a29"
        }
      ]
    },
    "a29": {
      "title": "A case that does not need a guess",
      "location": "The county officer’s arrival room",
      "body": [
        "The county officer reaches the station on foot before dawn. She reads the originals first, then your chronology. She asks you to choose the account you would be prepared to defend when every word is separated from the warmth of the room and tested by someone who does not share your confidence. The correct account must preserve the medical interval, the blind route, the limits of the key ledger, and the corroborating transfer and paper.",
        "Do not rely on Halden’s dishonesty to justify what happened to him. Do not use Ben’s innocence of the wage diversion as proof that everyone in his family is innocent of everything else. And do not improve your evidence by adding an exact fatal minute that no witness or instrument recorded. The strongest resolution below is the one that says enough, and no more than enough."
      ],
      "routeLabel": "The railway records route",
      "puzzle": {
        "mode": "single",
        "prompt": "Which final case is supported by the complete exhibit chain?",
        "options": [
          {
            "id": "chain",
            "label": "Ada had the working service key; her bell account fails; the threshold transfer and recovered enclosure corroborate an unseen confrontation during the medical interval.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "motive",
            "label": "Halden diverted wages, so any killing of him needs no further investigation.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "precise",
            "label": "The accounts posting proves Ada struck at exactly 10:18 beside a newly arrived train.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "family",
            "label": "Ben’s complaint proves that Ben and Ada jointly committed the murder.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "a30"
      }
    },
    "a30": {
      "title": "The question after the accusation",
      "location": "The stationmaster’s office at dawn",
      "body": [
        "Ward arrests Ada on the combined evidence, not on her answer to one last question. She is told the allegation and the rights attached to the interview. A solicitor will be able to inspect the chain you preserved. Ada eventually confirms that she went to confront Halden about Ben and took the complaint after the fatal encounter. Her statement adds human detail to an already supported case; it does not rescue a case that would otherwise be nothing but suspicion.",
        "The county officer also opens an inquiry into Halden’s handling of the wage fund. Relief workers must not lose their money because the auditor who diverted it is dead. Ben’s allegation will be corrected on documentary grounds. You see how two truths can coexist without canceling one another: Halden wronged people who depended on the railway, and his death still demands a lawful, independently supported account."
      ],
      "routeLabel": "The railway records route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a31"
        }
      ]
    },
    "a31": {
      "title": "The first departure after the snow",
      "location": "Bellweather platform one",
      "body": [
        "The morning train arrives behind a plow, coughing steam into a sky the color of new paper. A clerk pins up a revised relief-pay notice. Its cautious wording is less satisfying than a public declaration of innocence, but Ward insists that the corrected records will be sent to every office that received the original allegation. Repairing a wrong includes repairing its paperwork.",
        "Ruth returns to her cabin. Miles goes through the accounts book with a ruler, marking the difference between received and posted so nobody inherits his mistake. You keep your working chronology, now signed by the county officer as a comparison aid rather than an official exhibit. The case was solved through a network of independent records and a carefully limited physical reconstruction. Somewhere behind you, the platform bell rings once: repaired, recorded, and for the first time tonight exactly what it sounds like."
      ],
      "routeLabel": "The railway records route",
      "ending": {
        "title": "Case closed: the independent record",
        "kind": "solved",
        "body": [
          "The railway route produces a corroborated arrest without requiring an untested confession. Ada’s responsibility for the fatal confrontation is investigated alongside a separate, documented correction of the wage accusation against Ben. Your ending rests on preserved exhibits that another person can challenge, rather than on one persuasive story told before dawn."
        ]
      }
    },
    "b00": {
      "title": "The town is still awake",
      "location": "The post-office steps",
      "body": [
        "Ward gives you introduction letters rather than evidence seals. The post office has become a refuge for people whose calls cannot be completed, and its clerk is trying to distinguish emergencies from impatience. Celia Vale waits beneath a notice about storm damage. She recognizes you from the station and asks whether the police have remembered that a receipt can be printed after a call ends.",
        "That is an excellent question to have answered by someone other than Vale. You ask the clerk to explain the machine before showing her receipt. The glass booth is visible from the counter, and the connection log is written by hand at the switchboard. You have chosen a route where people may supply useful distinctions before they supply useful secrets. Your task is to test both with equal courtesy."
      ],
      "setFlags": [
        "town-route"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b01"
        }
      ]
    },
    "b01": {
      "title": "A receipt that arrived too late",
      "location": "The post-office counter",
      "body": [
        "Vale’s receipt shows 10:27, seemingly outside the fatal interval. The clerk says that is when she paid. The connection log records 10:13 to 10:23 in railway standard time, checked by the post-office clock signal at ten. Throughout that interval the clerk sat facing the glass booth and saw Vale speaking. The booth’s rear panel is a solid wall, not an exit.",
        "Vale had argued with Halden earlier over a disputed invoice. She does not deny it. The argument might explain why someone remembered her sharply, but it cannot move her out of a watched booth. You retain the receipt alongside the log because the two describe different stages, not because the later slip is worthless. A good chronology can accommodate a document without making it say something it was never designed to say."
      ],
      "clues": [
        "call-log"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b02"
        }
      ]
    },
    "b02": {
      "title": "What the receipt actually dates",
      "location": "The post-office writing desk",
      "body": [
        "Ward’s first question by telephone is whether Vale’s slip proves she arrived at 10:27. It does not. Nor would the slip, on its own, prove she remained inside the booth through the medical interval. The useful evidence is the connection period joined to the clerk’s uninterrupted view.",
        "Choose the conclusion that preserves all three observations. Calling a family member is ordinary, but the ordinariness of the activity is not what gives Vale an alibi. Having an argument is suspicious only in a vague sense, and vague suspicion cannot outweigh a specific independently observed location. You are not deciding whether she told the truth about every earlier meeting. You are deciding whether she could have entered the waiting room during the known five-minute window without contradicting the record and witness now before you."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "single",
        "prompt": "What can be inferred from the log, receipt, and clerk?",
        "options": [
          {
            "id": "booth",
            "label": "Vale was observed in the connected-call booth throughout 10:15–10:20;10:27 dates payment, not arrival.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "late",
            "label": "Vale first reached the post office at 10:27 because that appears on her receipt.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "argument",
            "label": "Her earlier argument proves she left the watched booth unnoticed.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "receipt",
            "label": "A payment receipt alone establishes every minute of an alibi.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b03"
      }
    },
    "b03": {
      "title": "A voice answering back",
      "location": "The relief switchboard",
      "body": [
        "The clerk mentions Ben Shaw, who helped connect a storm warning to the junction. He is still in the sorting room, asleep over a coat. When awakened, he looks first for Ada, not for a way to defend himself. He admits meeting Halden earlier in the day about missing wages, then asks whether an accusation can follow someone even after the money has been found.",
        "Before discussing that history, you establish his movements. The junction operator asked him two unexpected questions at 10:16 and 10:19 about a severed line. The receiving office’s strip contains both questions and his answers. This is stronger than a prewritten telegram bearing a later stamp: it requires a live response at each time. It does not prove that Ben never moved between them, but the post-office clerk saw him at the board throughout the five-minute interval."
      ],
      "meets": [
        "ben"
      ],
      "clues": [
        "ben-line"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b04"
        }
      ]
    },
    "b04": {
      "title": "A confidence with a boundary",
      "location": "Crane’s boardinghouse kitchen",
      "body": [
        "Edith Crane answers the side door with a lamp shielded in her hand. She recognizes Ward’s letter and lets you in, but asks whether she is being asked to gossip about guests or to help establish something specific. You tell her the interval and the narrow questions about Ben’s earlier visit. She relaxes when you do not demand every private conversation she has ever overheard.",
        "Edith kept a copy of a note inviting Ben to collect corrected wage papers before ten. She delivered it through the station’s ordinary messenger round. Later she received a second, harsher letter from Halden addressed to Ben. Both envelopes were cream and sealed with cheap blue paste. A neighbor saw the envelopes together and assumed their messages were the same. The similarity of containers has become a rumor about the contents."
      ],
      "meets": [
        "edith"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b05"
        }
      ]
    },
    "b05": {
      "title": "Two cream envelopes",
      "location": "The boardinghouse account desk",
      "body": [
        "Edith’s delivery book records the invitation sent at 9:20 and acknowledged at 9:28. Her kitchen clock is two minutes fast, but the book uses the messenger’s station slips, which are standard time. The threatening letter arrived at 10:04 on that same system. Ben had been sent to assist the post office before 10:00 and did not collect the later letter until after the alarm.",
        "The invitation says only that corrected wage papers can be examined. The later demand orders Ben to withdraw a complaint or face dismissal. One is a chance to inspect records; the other is pressure from the man named in those records. You keep both without merging their dates or their tone. Ada could have learned of the demand through a different route, but you do not yet know whether she did. The first useful result is simply that the town’s most repeated envelope story is inaccurate."
      ],
      "clues": [
        "boarding-note",
        "letter-order"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b06"
        }
      ]
    },
    "b06": {
      "title": "Do not let the envelopes do the talking",
      "location": "Edith’s kitchen table",
      "body": [
        "You have the invitation, the demand, the messenger’s acknowledgments, and the live switchboard evidence. Select the facts that separate an earlier documentary visit from the later fatal interval. This is a chronology exercise, not an exercise in finding the most sinister sentence.",
        "An invitation before ten does not place Ben anywhere at 10:17. A demand delivered at 10:04 does not prove he received it immediately. A live exchange supported by a visible operator can establish the relevant period even if the operator later becomes a suspect in a different financial inquiry. Do not select a claim merely because it would make the story simpler. Select the observations with independent links between person, place, and time. The two correct entries let you question the letter’s influence without turning it into an invented alibi or an invented confession."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two observations keep the letters in their proper chronology?",
        "options": [
          {
            "id": "earlier",
            "label": "The invitation was acknowledged before 9:30 and concerned inspecting papers before ten.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "live",
            "label": "The independently recorded live exchanges and clerk’s view place Ben at the post office during the fatal interval.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "same",
            "label": "Similar envelopes prove the messages had the same sender and purpose.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "instant",
            "label": "Delivery of the demand at 10:04 proves Ben read it at 10:04.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b07",
        "wrongFeedback": "That set does not account for every restriction. Compare the documents before committing to a conclusion.",
        "minSelections": 2,
        "maxSelections": 4
      }
    },
    "b07": {
      "title": "A room prepared for someone else",
      "location": "The boardinghouse spare room",
      "body": [
        "Edith shows you the room she offered Ben after the inquiry began damaging his reputation. It contains a washed blanket, a chair, and a folder of wage slips. She does not ask you to treat a clean room as proof of a clean conscience. What matters is a retained copy of Ben’s complaint and a date stamp from before tonight.",
        "The copy identifies voucherR12 and says no twelve-pound advance was paid to him. It asks for the paymaster’s carbon to be compared with the station total. The language is measured, not threatening. In the margin Ben has written that Ada will deliver the complaint because he is covering the relief shift. That note makes her a possible messenger. It does not establish what either sibling did after the paper changed hands. The question remains open, and you carry it that way."
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b08"
        }
      ]
    },
    "b08": {
      "title": "An old ticket in a new argument",
      "location": "The closed market arcade",
      "body": [
        "Vale meets you beneath the market roof because the post-office clerk has finally persuaded her to get some air. She produces a waiting-room ticket dated earlier in the evening. Someone at the station has begun saying it proves she returned to Halden during the fatal interval. The ticket has no exit time and no record of a second admission.",
        "She admits the earlier meeting concerned an invoice Halden had refused to honor. She disliked him. She also says that dislike does not confer the ability to be in two places at once. Her sharper tone is understandable, but you test the ticket on its own terms rather than accepting her point because it is well put. A document proving a meeting at 9:15 does not rebut independent observation of a call at 10:17. The apparent conflict exists only if one gives the ticket a duration it does not contain."
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b09"
        }
      ]
    },
    "b09": {
      "title": "A traveler’s inconvenient honesty",
      "location": "The market tea stall",
      "body": [
        "The tea stall owner has left a kettle on for railway staff. Vale tells you that she withheld the argument at first because she feared her business name would become the evening’s entertainment. She is not proud of that choice. You record the omission without enlarging it into proof that the call log is false.",
        "Ward, reached through the stall’s telephone, confirms the log with the receiving exchange. The operator remembers Vale complaining about the storm while waiting for her sister to answer. This independent confirmation belongs to the connection evidence. Her earlier meeting belongs in the motive-and-contact column. A fair investigation can criticize an omission and still recognize an alibi. Vale asks whether you will write that down too. You do, because accuracy is sometimes experienced by a witness as an unexpected kindness."
      ],
      "clues": [
        "vale-ticket"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b10"
        }
      ]
    },
    "b10": {
      "title": "Which record answers which question?",
      "location": "The market stall telephone",
      "body": [
        "It would be easy to let the investigation become a competition in candor: whoever withheld a fact must be the killer, whoever supplied a receipt must be innocent of every wrong. Neither rule is reliable. The actual records answer narrower questions. The ticket confirms earlier contact. The live connection and continuous view address the medical interval.",
        "Choose the explanation that does not ask either record to prove an unsupported duration. A correct answer should leave room to investigate the earlier dispute without pretending that an earlier meeting cancels a later alibi. The case is becoming more complicated because you have learned that truthful and untruthful behavior can belong to the same person at different moments. It is also becoming more solvable, because the relevant question has become precise enough for particular evidence to answer."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "single",
        "prompt": "How should Vale’s earlier ticket and later telephone evidence be combined?",
        "options": [
          {
            "id": "separate",
            "label": "The ticket establishes earlier contact; the independently watched call still excludes her during 10:15–10:20.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "cancel",
            "label": "An earlier ticket cancels every later observation.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "alltruth",
            "label": "A valid call alibi proves she never omitted anything.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "duration",
            "label": "The ticket proves she occupied the waiting room until midnight.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b11"
      }
    },
    "b11": {
      "title": "A bundle tied before supper",
      "location": "The station laundry annex",
      "body": [
        "A laundry bundle has produced another rumor. It contains trousers marked with red clay, and someone saw Ben carry it from the station. The annex attendant’s docket says it was handed in before supper, long before the last train. The name on a bundle identifies its customer, not necessarily the most recent wearer of each garment inside.",
        "Ben’s boots, which he agrees to show you, carry pale road salt over coal dust. The post-office approach is salted; the canal path is not. You ask the attendant to keep the bundle untouched and write down the time she received it. The object may have an innocent explanation, but that explanation should not depend solely on Ben. The docket, the earlier delivery, and the two different deposits provide ways to test the town’s increasingly elaborate version of a midnight journey by the water."
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b12"
        }
      ]
    },
    "b12": {
      "title": "Road salt and red clay",
      "location": "The laundry sorting bench",
      "body": [
        "The attendant turns out to have washed Ada’s work trousers in Ben’s weekly bundle because the siblings share an account. The red clay came from a drainage job near the goods yard that afternoon. A repair docket lists the work and the workers before the station clock trouble began. None of this tells you where Ada was in the fatal interval, and none places Ben beside the canal at that time.",
        "You compare the rumor’s three leaps: a shared account became personal ownership, an old deposit became a fresh one, and a type of clay became one particular route. Each leap could have misled you if it were not tested. This is a red herring, but not a meaningless scene. Disproving it prevents a vulnerable witness being frightened into silence and leaves your reconstruction with fewer unsupported accusations masquerading as observations."
      ],
      "clues": [
        "wet-boots"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b13"
        }
      ]
    },
    "b13": {
      "title": "The tempting trail that stops here",
      "location": "The laundry doorway",
      "body": [
        "Your next choice concerns what to keep from the laundry visit. An innocent explanation should be supported just as carefully as a suspicious one. Select the conclusion that respects both the docket and the limits of surface deposits. It should not claim that the absence of canal clay proves a person has never visited the canal, nor claim that any red clay must have been laid down tonight.",
        "The bundle was handed in before supper and contained shared household washing. Ben’s present boots match the salted post-office approach, while his live alibi has its own independent support. Those are separate observations that fit together. The clay does not connect him to Halden’s later death. That does not make the clay fictitious; it makes the story built around it wrong. Sometimes resolving a mystery requires deciding which apparent mystery no longer deserves your time."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "single",
        "prompt": "Which conclusion is justified by the laundry evidence?",
        "options": [
          {
            "id": "old",
            "label": "The red-clay bundle predates the fatal interval and cannot place Ben on a midnight canal journey.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "never",
            "label": "Cleaned clay proves that no Shaw has ever walked beside water.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "fresh",
            "label": "Any red clay must come from the canal during the murder.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "guilt",
            "label": "A shared laundry account establishes joint guilt.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b14"
      }
    },
    "b14": {
      "title": "The path beside the frozen water",
      "location": "The canal boathouse",
      "body": [
        "Edith asks you to visit the boathouse where the relief workers keep a duplicate wage petition. This is the first time your investigation actually takes you to the canal. Snow sits on the mooring ropes; a lamp burns in a locked office rented by the workers’ committee. Edith has the committee’s written permission to let Ward inspect the folder, and you take a constable rather than turn an informal invitation into an undocumented search.",
        "The complaint copy matches the voucher number in the boardinghouse folder. A covering note says Ada delivered the original to Halden after Ben’s shift was extended. The note was countersigned earlier in the evening by the committee secretary. It distinguishes the author of a complaint from its messenger. Halden had threatened to treat the complaint as an admission of theft, which helps explain why someone might remove it without helping prove who actually did."
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b15"
        }
      ]
    },
    "b15": {
      "title": "A complaint with two roles",
      "location": "The workers’ committee room",
      "body": [
        "The petition’s wording is unusually cautious. Ben denies receiving the alleged advance and asks for the paymaster’s carbon. He does not threaten Halden and does not promise that money can purchase silence. Ada’s marginal delivery note is practical: she will take it while Ben attends the storm-warning exchange. Two separate people saw her carry the numbered folder to the station.",
        "This gives you a fair reason to ask Ada about contact that she did not mention during the first interview. It also gives you a fair reason to protect Ben from the idea that writing the complaint made him responsible for every later action involving it. The retained copy can be compared with what remains in Halden’s case. If the original is missing, its removal becomes a question grounded in a particular object, not a suspicion attached generally to a family."
      ],
      "clues": [
        "canal-copy"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b16"
        }
      ]
    },
    "b16": {
      "title": "The signer and the messenger",
      "location": "The committee’s long table",
      "body": [
        "Choose the pair of facts that establishes distinct roles in the delivery of the complaint. One concerns authorship; the other concerns transport. Neither is a finding about the fatal confrontation. A witness may be relevant without having seen a murder, provided you do not quietly enlarge the relevance afterward.",
        "Ben’s signature identifies the complaint he wrote. The countersigned note and two independent sightings identify Ada as the person taking the folder to Halden. The shared surname is not the link, and the shared laundry account is no substitute for these observations. Once the roles are separated, you can ask the right person the right question. Why did Ada initially omit delivering the folder? Where did she go afterward? Those questions are sharper than asking both siblings to explain a rumor about a bundle of clay-stained clothes."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two observations establish the complaint’s separate author and messenger?",
        "options": [
          {
            "id": "signature",
            "label": "Ben’s signature and retained copy identify the complaint he wrote.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "delivery",
            "label": "The countersigned delivery note and independent sightings identify Ada carrying it to Halden.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "surname",
            "label": "The siblings’ surname proves they took every later action together.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "clay",
            "label": "The laundry clay establishes authorship of the complaint.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b17",
        "wrongFeedback": "That set does not account for every restriction. Compare the documents before committing to a conclusion.",
        "minSelections": 2,
        "maxSelections": 4
      }
    },
    "b17": {
      "title": "A room where a witness can think",
      "location": "The old ferryman’s cottage",
      "body": [
        "Ward arranges a quiet room in the ferryman’s cottage for Ben, who has begun receiving hostile questions from stranded passengers. Edith brings a blanket and leaves before the interview. This is protective accommodation, not an escape route or an unrecorded detention. Ben is told he may leave and may ask for another person to be present while speaking.",
        "He says Ada saw Halden’s later demand even though Ben did not receive it before the alarm. She had collected the post while covering his station duties. He cannot tell you what she did after that, and Ward refuses to fill the gap for him. Instead he asks Ben to identify any record that could check Ada’s first account about the platform bell. Ben remembers a repair requisition sent to the boardinghouse because its carpenter sometimes helps the railway. That is a lead you can test without using Ben’s fear as proof."
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b18"
        }
      ]
    },
    "b18": {
      "title": "A repairman’s copy",
      "location": "The boardinghouse repair cupboard",
      "body": [
        "The requisition carries a carbon of work orderB17. It records removal of the platform bell rope at 10:10 and replacement at 10:30 standard time. The repairman acknowledged receiving the order at 10:11, before the death was reported. Edith had filed it with his evening bill because she paid for some of the replacement cord on the railway’s behalf.",
        "Ward confirms the order number against the station’s maintenance index without telling the clerk which witness’s account it may affect. The carbon’s times agree. A note distinguishes the platform bell from the locomotive whistle, which remained in use. This small technical distinction matters: the departure sounded, but that does not mean the disabled station apparatus sounded. Ada’s original statement was about ringing that platform bell continuously. You now have a way to challenge the task through a document that existed before her account became important."
      ],
      "clues": [
        "bell-carbon"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b19"
        }
      ]
    },
    "b19": {
      "title": "Two sounds in the snow",
      "location": "The ferryman’s cottage kitchen",
      "body": [
        "Ben remembers hearing a departure sound and worries that the repair record must be wrong. You explain the distinction between the train’s whistle and the station’s bell without asking him to adopt a theory about his sister. He can remember a sound accurately and still have misidentified its source. That is why the maintenance note’s language matters.",
        "The deduction below concerns Ada’s stated task, not whether Ben loves or fears her. A continuous bell-ringing account cannot occupy minutes when the necessary rope was removed. The whistle can still announce departure at 10:22. Choose the explanation that allows both technical facts to be true. If a later interview produces a revised account, it must be recorded as a revision, with the reason and the earlier wording preserved. A frightened family should not be asked to make its memories fit an officer’s preferred ending."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "single",
        "prompt": "What follows from the repair carbon and the separate whistle?",
        "options": [
          {
            "id": "task",
            "label": "Ada’s continuous platform-bell account fails, even though the locomotive whistle could still sound at departure.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "death",
            "label": "The existence of a whistle proves nobody died in the waiting room.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "ben",
            "label": "Ben must have fabricated every memory because he named the wrong sound.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "clock",
            "label": "Bell maintenance makes all standard clock readings four minutes slow.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b20"
      }
    },
    "b20": {
      "title": "Promises that must mean what they say",
      "location": "The cottage front room",
      "body": [
        "The next interview will be with Ada. Ben asks Ward to promise she will not be charged if he explains where the demand letter went. Ward refuses to make a promise he cannot keep. He can promise separate examination of the wage allegation, safe accommodation for Ben, access to advice, and an accurate record. He cannot promise immunity for an offense he has not yet established.",
        "You help Ben distinguish protection from a bargain about evidence. The complaint’s validity should not depend on Ada’s cooperation, and Ada’s legal position should not depend on Ben surrendering a genuine claim to wages. That separation gives the witness something sturdier than a comforting lie. He agrees to identify the delivery of the demand, and Ward records the point at which Ben learned of it. No one is asked to provide the next part of the story on another person’s behalf."
      ],
      "clues": [
        "town-contradiction"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b21"
        }
      ]
    },
    "b21": {
      "title": "A narrow offer",
      "location": "The cottage interview table",
      "body": [
        "Ada comes to the cottage with a representative of the railway staff. Ward tells her that the bell account conflicts with a repair record, and that the demand letter and complaint have been distinguished by independent witnesses. He does not tell her what is missing from Halden’s case or what was found at the service threshold. Those withheld details may later help test whether an account comes from knowledge rather than suggestion.",
        "The offer is simple: speak with advice available and have the account recorded accurately. Ben will not be used as leverage, but neither will the police promise a verdict. Ada asks whether the wage complaint will finally be read properly. Ward shows her the procedure for comparing it with the paymaster’s carbon. He has not exchanged that obligation for her silence or her cooperation. You can see the moment she understands that accuracy may be possible without a bargain."
      ],
      "clues": [
        "protected-promise"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b22"
        }
      ]
    },
    "b22": {
      "title": "Protection without a purchased answer",
      "location": "The cottage hearth",
      "body": [
        "Select the safeguards that keep this interview useful and fair. Two concern the promises already made; one concerns the handling of information the interviewee has not yet supplied. The strongest account will be one that can be tested outside the room, not one that repeats a story you accidentally taught her.",
        "A promise to clear Ben regardless of the documents would corrupt the wage inquiry. A promise never to charge Ada would be one Ward has no authority to give. By contrast, safe accommodation, separate examination, and access to advice do not determine the answers. Keeping the missing enclosure’s details out of the opening question may allow an independently checkable disclosure. The aim is not to trick someone into a dramatic speech. It is to leave a record in which you can identify which details came from the witness and which came from the investigators."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which safeguards should remain in place? Select three.",
        "options": [
          {
            "id": "separate",
            "label": "Examine Ben’s wage allegation separately on its documents.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "advice",
            "label": "Keep Ada’s access to advice and Ben’s safe accommodation independent of any desired answer.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "withhold",
            "label": "Avoid supplying the missing enclosure’s details before Ada gives her own account.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "immunity",
            "label": "Promise Ada immunity if her story sounds plausible.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "teach",
            "label": "Read the full police reconstruction aloud and ask Ada to repeat it.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b23",
        "wrongFeedback": "That set does not account for every restriction. Compare the documents before committing to a conclusion.",
        "minSelections": 2,
        "maxSelections": 4
      }
    },
    "b23": {
      "title": "An account that needs checking",
      "location": "The cottage interview room",
      "body": [
        "After consulting her representative, Ada describes using the red-tagged service key to reach the waiting room. She says Halden threatened to have Ben dismissed and prosecuted unless the complaint disappeared. The confrontation became fatal. She took the paper and hid it in her locked station tin. Her account includes a torn corner and the number of the enclosure’s cover, details Ward had not supplied.",
        "Ward records the statement without treating the relief of hearing an explanation as corroboration. Ada may know the missing paper because she delivered it earlier; she may be mistaken about the order of events; she may be accepting responsibility for somebody else. The account creates specific tests. Where is the tin? Does the paper fit the fragment already secured? Does the key record independently permit the journey? You have reached a different kind of progress from a warrant-led investigation: a person has spoken, but the truth still has to survive leaving the room."
      ],
      "clues": [
        "ada-account"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b24"
        }
      ]
    },
    "b24": {
      "title": "A check beyond the room",
      "location": "Ada’s station storage cupboard",
      "body": [
        "With proper authorization and the representative present, the constable opens the personal tin Ada identified. A paper bearing the complaint’s voucher number lies beneath a repair apron. Its corner is missing. The officers photograph it in place before a different constable brings the secured fragment from Halden’s document case for comparison.",
        "The tear fits. The enclosure number agrees with both the retained copy and Halden’s earlier inventory. The key ledger, obtained separately, records Ada’s issue at 10:12 and witnessed return at 10:24. A timed walk through the service passage takes ninety seconds each way and avoids the public platform’s sight lines. These observations do not depend on believing Ada because she cried, seemed composed, or gave an account you found emotionally satisfying. They answer particular claims in the statement with records and objects that existed before she made it."
      ],
      "clues": [
        "town-recovery",
        "town-access"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b25"
        }
      ]
    },
    "b25": {
      "title": "When an admission becomes evidence",
      "location": "The evidence comparison bench",
      "body": [
        "Not every detail in an admission has the same value. Ada could have known about Ben’s complaint from delivering it; that fact alone would not show a later confrontation. The withheld torn-corner detail, its location in a locked tin she identified, and the independent access record provide stronger corroboration. Even these should be described precisely rather than summarized as “she knew everything.”",
        "Select the two checks that move the account beyond mere agreement with your theory. There is no need to punish a person for not performing remorse in an expected way, and no need to reward a persuasive account by abandoning verification. The person’s rights and the strength of the evidence are not opposing interests here. A statement tested against independently preserved objects is less likely to be either a false confession or a true account weakened by careless handling."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two checks materially corroborate the account?",
        "options": [
          {
            "id": "paper",
            "label": "The paper is recovered where Ada said, and its tear matches the fragment withheld from her interview.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "key",
            "label": "The separately obtained key record and measured blind route fit the described journey.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "emotion",
            "label": "Her emotional reaction proves every part of the account.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "theory",
            "label": "The account resembles your preferred theory, making outside checks unnecessary.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b26",
        "wrongFeedback": "That set does not account for every restriction. Compare the documents before committing to a conclusion.",
        "minSelections": 2,
        "maxSelections": 4
      }
    },
    "b26": {
      "title": "Bring back more than a story",
      "location": "The station booking hall",
      "body": [
        "By the time you return, the county team has reached the station. Ward gives them the caution record, the witness’s representative’s name, the precise questions asked, and the independently recovered enclosure. He also gives them Ben’s live exchange record and Vale’s watched telephone interval. A confession does not make alternative-location evidence irrelevant; it helps show whether the account fits the whole known night.",
        "The crowd wants a name and a moral. Ward supplies neither in the booking hall. He announces only that a suspect is being interviewed and that the wage inquiry will be corrected through the district office. You have learned enough about shared envelopes and shared laundry to distrust the speed at which a town can turn a fragment into a finished accusation. The people who need notice will receive it in a form they can check, rather than through the station’s loudest storyteller."
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b27"
        }
      ]
    },
    "b27": {
      "title": "A correction that does not buy silence",
      "location": "The county team’s temporary office",
      "body": [
        "The paymaster’s carbon arrives by railway messenger at dawn. It supports Ben’s complaint: the alleged advance does not appear, and the full relief wages were released before being diverted in the station accounts. Ward gives Ben a written acknowledgment that the allegation will be reviewed on that basis. He does not condition the acknowledgment on Ben endorsing Ada’s statement.",
        "Ada reads the complaint once more before her formal interview. She says she had believed Halden could make the accusation permanent simply by keeping the original. That belief helps explain why she removed it; it does not excuse the fatal confrontation. The recovered copy and the independent carbon mean the financial truth no longer depends on who controls one sheet. Your route has changed the human circumstances of the resolution: protection and careful interviewing produced an account that the physical records could then test."
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b28"
        }
      ]
    },
    "b28": {
      "title": "Separate truths, one reconstruction",
      "location": "The station surgery table",
      "body": [
        "Dr. March reads your normalized chronology and confirms that it has not turned her five-minute estimate into an invented exact time. Vale’s call covers the interval. Ben’s live exchange and the clerk’s view cover it separately. Ada’s claimed task fails because the rope was absent. Her recorded account describes an unseen service journey and removal of a particular enclosure; that paper and the key record corroborate the account independently.",
        "You leave space for questions the county team will still examine. The motive concerns coercion and a wage allegation; the legal outcome concerns a fatal act; the repair of Ben’s reputation requires its own notices. A solved storyline need not pretend that every consequence ends when a detective finds an answer. It needs to establish the answer well enough that the remaining work can be done honestly. Ward asks you to choose the final explanation you would put beneath your name."
      ],
      "clues": [
        "town-case"
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b29"
        }
      ]
    },
    "b29": {
      "title": "The explanation you can stand behind",
      "location": "The county interview table",
      "body": [
        "Your final choice must say why Ada’s account is supported, not merely repeat that she gave it. It must also preserve the independent alibis and the limits of the medical estimate. You have not established an exact fatal minute, and you have not established that Ben shared responsibility for a confrontation simply because he wrote its background complaint.",
        "The town route has given you a resolution through protected witnesses and a properly checked admission. Its ending differs from the railway route’s exhibit-led arrest, but the underlying facts do not change to reward your preference. Choose the account that makes clear how the statement was obtained, which withheld detail was corroborated, and why correcting a separate financial wrong does not make an unlawful killing disappear. A good ending should be more exact than the rumor with which the night began."
      ],
      "routeLabel": "The town witnesses route",
      "puzzle": {
        "mode": "single",
        "prompt": "Which account resolves the case without confusing testimony, corroboration, and motive?",
        "options": [
          {
            "id": "supported",
            "label": "Ada’s cautioned account is corroborated by the withheld enclosure detail and independent service-key record; the wage wrong and Ben’s alibi remain separate findings.",
            "correct": true,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "alone",
            "label": "Ada’s admission makes all outside checks and all other alibis unnecessary.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "family",
            "label": "Ben wrote the complaint, so the siblings must share responsibility for its later confrontation.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          },
          {
            "id": "excuse",
            "label": "Proof of Halden’s diversion means no fatal act needs a legal explanation.",
            "correct": false,
            "feedback": "Reconsider which observations are independently timed and which are only claims."
          }
        ],
        "correctTo": "b30"
      }
    },
    "b30": {
      "title": "A morning that allows correction",
      "location": "The cottage breakfast table",
      "body": [
        "Edith brings bread to the cottage after Ben has finished giving his own statement. He asks whether Ada will be all right. Nobody gives him the easy answer. Ward says she has advice, an accurate record, and a case that will be tested rather than decided by the platform crowd. Ben will receive the district’s correction when the wage records have been formally compared.",
        "You realize how much of the night has concerned who gets to know what, and when: a witness must not be taught the detail used to test her; a frightened brother must not trade away a true complaint; a town must not receive an accusation before the evidence can support it. Your choices have brought people into rooms where they could speak, and then brought their words back into contact with objects that could resist them. The answer mattered. The route by which you made it reliable mattered too."
      ],
      "routeLabel": "The town witnesses route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b31"
        }
      ]
    },
    "b31": {
      "title": "The train that carries the records",
      "location": "Bellweather station at first light",
      "body": [
        "The first outgoing carriage takes the county officers, sealed records, and Ada toward the district inquiry. Ward remains on the platform with Ben until it has gone. Their conversation is quiet, and you give it the privacy it has earned. Across the lane, the post office opens its shutters on an ordinary working day.",
        "Vale leaves a note thanking you for writing down that an omission is not the same thing as an impossible alibi. Edith collects the borrowed blankets. A notice about relief wages is prepared with names and dates checked twice. The case has ended through a corroborated account obtained without using one family member as leverage against another. The town will still need to live with what happened. It has, at least, a record more dependable than the story a crowd told itself in the snow."
      ],
      "routeLabel": "The town witnesses route",
      "ending": {
        "title": "Case closed: a statement that survived checking",
        "kind": "solved",
        "body": [
          "Your witness route produces Ada’s informed surrender and a cautioned account corroborated outside the interview. Ben’s protection and the correction of the wage allegation remain independent of that account. The same fatal confrontation is resolved through different locations, relationships, and proof, without turning a compassionate method into an exemption from the law."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "railway-records",
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
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "slow"
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
            "platform",
            "phone",
            "bell"
          ]
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "rail"
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
          "id": "clear"
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
            "posting",
            "possible"
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
          "id": "diversion"
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
          "id": "access"
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
            "function",
            "custody"
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
          "id": "ada"
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
          "id": "search"
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
            "signal",
            "bank",
            "work"
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
          "id": "chain"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    },
    {
      "id": "town-witnesses",
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
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "slow"
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
            "platform",
            "phone",
            "bell"
          ]
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "town"
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
          "id": "booth"
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
            "earlier",
            "live"
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
          "id": "separate"
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
          "id": "old"
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
            "signature",
            "delivery"
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
          "id": "task"
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
            "separate",
            "advice",
            "withhold"
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
            "paper",
            "key"
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
          "id": "supported"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    }
  ]
};
