export default {
  "id": "quiet-harbor",
  "title": "The Quiet Harbor",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "20–30 min",
  "setting": "A small fishing harbor on the first morning of autumn",
  "description": "An empty boat comes home under an unfamiliar name. Choose the tide-marked shore or the village’s paper trail, and uncover what the harbor has failed to notice.",
  "revision": 2,
  "flags": [
    "shore-route",
    "records-route"
  ],
  "characters": [
    {
      "id": "ruth",
      "name": "Ruth Cale",
      "role": "Harbormaster",
      "description": "Keeps her tide tables in a coat pocket and distinguishes an unanswered call from an unmade one.",
      "color": "#8ea8af"
    },
    {
      "id": "tomas",
      "name": "Tomas Wren",
      "role": "Boat painter",
      "description": "Dates every job card, even the repairs he does for neighbors in exchange for fish.",
      "color": "#b99b78"
    },
    {
      "id": "nell",
      "name": "Nell Avery",
      "role": "Ferry mechanic",
      "description": "Looks after the harbor’s least fashionable machines and writes unusually clear maintenance notes.",
      "color": "#a49cb8"
    },
    {
      "id": "esme",
      "name": "Esme Holt",
      "role": "Lifeboat navigator",
      "description": "Will explain a decision twice rather than let someone mistake confidence for certainty.",
      "color": "#a9a17b"
    },
    {
      "id": "kit",
      "name": "Kit Dunn",
      "role": "Ferry clerk",
      "description": "Keeps the old carbon forms because the new computer still dislikes the weather.",
      "color": "#c18d80"
    },
    {
      "id": "sol",
      "name": "Sol Mercer",
      "role": "Retired telephone engineer",
      "description": "Knows the names people used for the headlands before those names reached a map.",
      "color": "#a3ac87"
    }
  ],
  "clues": [
    {
      "id": "boat-number",
      "title": "The plate beneath the new paint",
      "description": "The bow says WREN. The riveted brass registration reads H-27; the ledger lists H-27 as TERN, Nell Avery’s boat. A dated painter’s card authorizes the name change."
    },
    {
      "id": "last-seen",
      "title": "A crossing without a matching return",
      "description": "Nell took tools to Beacon Island yesterday at 14:20. The afternoon return launch was canceled. A handwritten return mark on the office summary has no matching passenger ticket or skipper’s signature."
    },
    {
      "id": "shore-1-observation",
      "title": "The overnight arrival interval",
      "description": "The checked camera shows no boat at 01:10 and the boat present at 01:20."
    },
    {
      "id": "shore-1-document",
      "title": "The current survey",
      "description": "Beacon’s western landing feeds eastward flow toward the steps during the compatible travel window; oyster-pen flow runs outward."
    },
    {
      "id": "shore-1-deduction",
      "title": "A defensible drift origin",
      "description": "Two independent timed observations support Beacon’s western service landing as the likely drift origin, not an exact departure time."
    },
    {
      "id": "shore-2-observation",
      "title": "A timed window-lamp pattern",
      "description": "Four repetitions were short,short,long. A shutter moved and a sleeve was briefly visible."
    },
    {
      "id": "shore-2-document",
      "title": "The dated service signal card",
      "description": "Short-short-long requests mechanical assistance. Automatic station testing is one long pulse each full minute; reply procedure is separately defined."
    },
    {
      "id": "shore-2-deduction",
      "title": "A current two-way response",
      "description": "The station acknowledged a new reply. Someone is signaling now, but identity and medical condition remain unconfirmed."
    },
    {
      "id": "shore-3-observation",
      "title": "The approach clearances",
      "description": "East requires 1.8 meters; West requires 0.9 meters. The expected live range at arrival is near 1.1–1.2 meters."
    },
    {
      "id": "shore-3-document",
      "title": "The current landing inspection",
      "description": "Upper west landing is approved subject todepth. The outer pier ladder is currently removed, regardless of old photographs."
    },
    {
      "id": "shore-3-deduction",
      "title": "A conditional safe recommendation",
      "description": "West Cut fits both current constraints. Live contradictions require reassessment by the qualified crew."
    },
    {
      "id": "shore-4-observation",
      "title": "A three-column evidence report",
      "description": "Direct observations, inferences, and questions still requiring confirmation are recorded separately."
    },
    {
      "id": "shore-4-document",
      "title": "What the return tick meant",
      "description": "The original heading is MESSAGE RETURNED, not PASSENGER RETURNED. The outward journey is confirmed separately by the skipper’s signature."
    },
    {
      "id": "shore-4-deduction",
      "title": "The sourced rescue account",
      "description": "The combined report supports assistance to Beacon using the approved west approach without inventing identity, medical findings, or rope-failure causes in advance."
    },
    {
      "id": "paper-1-observation",
      "title": "The outward passenger record",
      "description": "A signed sheet records Nell and a toolbox on the 14:20 outward crossing; the 16:10 return launch is canceled."
    },
    {
      "id": "paper-1-document",
      "title": "The message-sheet heading",
      "description": "The 17:05 mark belongs to MESSAGE RETURNED TO DUTY OFFICE. A control passenger’s completed crossing has separate ticket and skipper evidence."
    },
    {
      "id": "paper-1-deduction",
      "title": "An unconfirmed return, accurately described",
      "description": "The visible tick does not establish a passenger return. The next task is the failed callback, not an invented secret mainland journey."
    },
    {
      "id": "paper-2-observation",
      "title": "The two site references",
      "description": "The failed call went to B-7. Nell’s signed work permit identifies island site B-4."
    },
    {
      "id": "paper-2-document",
      "title": "The current routing diagram",
      "description": "B-4 requires coast trunk C 2; B-7 uses town group T 1. The corrected test reaches the island terminator but carries no voice."
    },
    {
      "id": "paper-2-deduction",
      "title": "One corrected routing fault",
      "description": "The destination error is established. A response tone confirms equipment, not a person, and does not establish that the voice circuit works."
    },
    {
      "id": "paper-3-observation",
      "title": "The two circuit specifications",
      "description": "Voice needs 12 V/0.8 A; isolated emergency signaling uses 6 V/0.05 A. The delivered part’s serial belongs to signaling."
    },
    {
      "id": "paper-3-document",
      "title": "The supervised return pulse",
      "description": "Each fresh two-pulse query received one manual return pulse, not the three-pulse automatic test pattern; sheltered waiting was separately confirmed."
    },
    {
      "id": "paper-3-deduction",
      "title": "A limited current contact",
      "description": "A person is responding through the low-power pair. Identity and full condition remain to be checked, and the silent voice set is not thereby repaired."
    },
    {
      "id": "paper-4-observation",
      "title": "A reconstructed administrative chain",
      "description": "Signed outward trip, canceled return, misrouted callback, ambiguous summary, and present manual contact are distinct sourced events."
    },
    {
      "id": "paper-4-document",
      "title": "The operational handover",
      "description": "The crew needs B-4/C 2, a 12 V voice-set part, and the limits of current contact. Identity and rope cause require direct checks."
    },
    {
      "id": "paper-4-deduction",
      "title": "The confirmed cause and the repair",
      "description": "Crew contact confirms Nell on the island; inspected wear explains the parted rope. Corrected routing and properly specified parts address the communication failure."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The name the tide brought in",
      "location": "The eastern slipway",
      "body": [
        "At six in the morning the harbor smells of rope, coffee, and last night’s rain. A small empty boat lies against the eastern slipway. Its name, WREN, has been painted in careful new letters. Nobody at the steps remembers a boat called Wren. The loose rope has no neat cut through it, but a rough burst of pale fibers at one end.",
        "Ruth Cale has already reported the empty craft to the coastguard. She does not ask you to put to sea or conduct a rescue. She asks for something slower and perhaps just as useful: a reliable account of whose boat has returned, where it came from, and what help might be needed. A search started on a rumor can send the right people to the wrong place.",
        "Someone behind the bakery suggests a stolen boat. Someone else remembers a storm years ago. Ruth writes neither story in her log. Instead, she hands you a pencil and says, “Let’s begin with something that can’t be changed by a tin of paint.”"
      ],
      "meets": [
        "ruth"
      ],
      "choices": [
        {
          "id": "begin",
          "label": "Look beneath the painted name",
          "to": "identity"
        }
      ]
    },
    "identity": {
      "title": "Two names, one hull",
      "location": "Beside the painter’s drying rack",
      "body": [
        "The registration plate is bolted into old wood: H-27. Ruth’s bound ledger identifies that number as Nell Avery’s Tern. Tomas, the painter, produces a job card requesting the new name. Nell inherited the boat from her grandfather and wanted a fresh name for it; the request was signed last Tuesday. Yesterday’s fog interrupted the varnishing, not the registration.",
        "Tomas has a sketch showing an old shallow scrape on the port side. The scrape on the empty boat matches it. A stencil in the bow locker matches the fresh lettering. Those details do not tell you why the boat is empty, but they give you two independent ways to test its identity.",
        "Ruth also brings a ferry summary. Nell was carried to Beacon Island with tools at 14:20. The regular return launch was canceled with engine trouble. Someone has drawn a return tick on the summary, yet the passenger-ticket envelope for that trip is empty. A tick is not the same kind of record as an actual crossing."
      ],
      "meets": [
        "tomas"
      ],
      "clues": [
        "boat-number",
        "last-seen"
      ],
      "choices": [
        {
          "id": "consider",
          "label": "Decide which identity is supported",
          "to": "identity-question"
        }
      ]
    },
    "identity-question": {
      "title": "The first useful distinction",
      "location": "The harbormaster’s desk",
      "body": [
        "Before the investigation divides, Ruth wants the boat identified in the report. An uncertain journey should not turn a known vessel into an unknown one. Select the account that separates identity from the unanswered question of what happened afterward."
      ],
      "puzzle": {
        "prompt": "Which statement is justified before either route is investigated?",
        "correctTo": "routes",
        "options": [
          {
            "id": "identity",
            "label": "The boat is Nell’s H-27 under an authorized new name; Nell’s return still needs confirmation.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "stolen",
            "label": "The unfamiliar name establishes that another owner stole Nell’s boat.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "returned",
            "label": "The return tick proves Nell came home, regardless of the canceled launch.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "unregistered",
            "label": "The new name invalidates the old registration plate.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ]
      }
    },
    "routes": {
      "title": "Two ways to listen to a harbor",
      "location": "The harbor steps",
      "body": [
        "Ruth updates the coastguard with the vessel’s identity. The duty officer will use either good shore observations or properly checked communications records; she does not need you to chase every possibility at once. Esme Holt, the lifeboat navigator, is preparing a cautious daylight assessment. Kit Dunn is opening the ferry office and the old telephone exchange still has a caretaker on duty.",
        "Choose the work you will do. On the shore route you will reconstruct the drift and help the authorized crew choose a safe approach. On the records route you will trace the canceled journey and restore a dependable line to the island. Both can reach Nell. They lead through different places, and neither choice authorizes you to cross dangerous water.",
        "Once you commit, Ruth will assign the other task to a harbor worker. You cannot be in two places at once, but useful teamwork does not require it."
      ],
      "choices": [
        {
          "id": "shore",
          "label": "Walk the shore with Esme and reconstruct the drift",
          "to": "shore-1",
          "excludesFlags": [
            "records-route"
          ]
        },
        {
          "id": "records",
          "label": "Follow the ferry records and the island’s broken telephone line",
          "to": "paper-1",
          "excludesFlags": [
            "shore-route"
          ]
        }
      ]
    },
    "shore-1": {
      "title": "What the water left behind",
      "location": "The tide steps",
      "body": [
        "Esme arrives with a chart folded to the scale rather than the prettiest coastline. She has photographed the boat in place and has asked everyone to leave the rope alone. The near end has a tidy loop still fastened to the boat. The far end is frayed, swollen, and dark beneath its new pale fibers. Tomas recognizes it as Nell’s old outer mooring line; the fresh paint has not made the rope younger.",
        "A harbor camera photographed the eastern steps every ten minutes overnight. At 01:10 the boat is absent; at 01:20 it is present. That is an arrival interval, not an exact minute. A red plastic float remains tangled in the fray. Similar floats mark two places: Beacon’s western service landing and the inner oyster pens. Only one place has a current path reaching these steps during that interval.",
        "Esme asks you to resist choosing the island because you already know Nell visited it. The tide needs to make that route possible. A familiar destination is a hypothesis, not a shortcut around a chart."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-1-observation"
      ],
      "meets": [
        "esme"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "shore-1-record"
        }
      ],
      "setFlags": [
        "shore-route"
      ]
    },
    "shore-1-record": {
      "title": "The table and its reference point",
      "location": "The chart shelter",
      "body": [
        "The local table gives high water at 00:40, all times harbor time. A handwritten current survey reads: from 00:40 to 01:40, surface flow runs east from Beacon’s western landing to the harbor steps, taking roughly twenty to forty minutes. In the same hour, the oyster channel flows away from the steps toward the outer sandbar.",
        "The route across the eastern shoal is not shown as navigable. Its arrows describe where a floating object can move, not where a lifeboat may go. Esme underlines that distinction. A pencil note beside the camera monitor says “clock checked at midnight; no correction.” The two records therefore use the same time reference.",
        "If the craft arrived between 01:10 and 01:20 and traveled for twenty to forty minutes, release from Beacon could have happened between 00:30 and 01:00. At least part of that window overlaps the recorded eastbound flow. A release from the oyster pens would need the current to reverse. The chart documents no such reversal."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "shore-1-question",
          "requires": [
            "shore-1-observation",
            "shore-1-document"
          ]
        }
      ]
    },
    "shore-1-question": {
      "title": "A question worth getting right",
      "location": "The chart shelter",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The shore investigation",
      "puzzle": {
        "prompt": "Which pair of observations directly supports a drift from Beacon rather than the oyster pens?",
        "options": [
          {
            "id": "camera",
            "label": "The camera’s 01:10–01:20 arrival interval.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "flow",
            "label": "The documented eastbound surface flow from Beacon during the compatible travel window.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "name",
            "label": "The word WREN in fresh paint.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "shoal",
            "label": "The shoal arrow can be used as a safe navigation route.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "shore-1-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "shore-1-finding": {
      "title": "A finding you can defend",
      "location": "The chart shelter",
      "body": [
        "You place the camera interval alongside the current survey. Together they support a drift from Beacon’s western landing without claiming an exact departure minute. Esme marks the likely starting area in pencil. She leaves the oyster possibility in the margin with the reason it is weaker, rather than crossing it out as if a chart could tell you everything.",
        "The frayed rope is consistent with a mooring failure, but it does not establish whether anyone was aboard when the line broke. Ruth sends that careful wording to the coastguard. It is more useful than the first excited report of a theft because it gives the crew a place to look and the limits of your confidence."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "shore-1-next"
        }
      ]
    },
    "shore-1-next": {
      "title": "The investigation moves forward",
      "location": "The tide steps",
      "body": [
        "The service landing can be seen from the old lookout above the net sheds. Esme asks you to help observe from land while she reviews the launch plan with the coxswain. At the foot of the steps you pass Nell’s bicycle, locked to its ordinary rail, with a bag of bread still in the basket. It has no magical answer hidden in it. It does, however, remind you that an absence belongs to a person who meant to finish an ordinary afternoon.",
        "Ruth promises to ask someone to put the bread indoors. You take the binoculars and a blank signal sheet up to the lookout. The next question is whether anything on the island is asking to be noticed now."
      ],
      "routeLabel": "The shore investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "shore-2",
          "requires": [
            "shore-1-deduction"
          ]
        }
      ]
    },
    "shore-2": {
      "title": "The light between the shutters",
      "location": "The old lookout",
      "body": [
        "Beacon’s large navigation light sweeps steadily. Below it, in the weather-station window, a smaller light appears and disappears in groups. Esme explains over the radio that the two lights have different jobs. The sweep marks a fixed hazard. A lamp in a window can be operated by a person, a fault, or a testing circuit. You must record the pattern rather than decide its meaning from brightness alone.",
        "You time four repetitions: short, short, long; a pause; short, short, long. Each short lasts about one second and each long about three. There is no single continuous beam. A shutter moves inward between two groups, and for a moment you see the pale shape of a sleeve. The observation is worth reporting, though it is not enough to identify the person.",
        "A wet plaque at the lookout contains three old signals. The word ASSISTANCE is legible, but its row is partly covered by a maintenance sticker. You copy what you can see rather than peeling anything that might destroy the print underneath."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-2-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "shore-2-record"
        }
      ]
    },
    "shore-2-record": {
      "title": "Read the whole key",
      "location": "The coastguard signal cabinet",
      "body": [
        "Ruth has the current local signal card, dated this spring. Its rows read: short-long-short means landing unsafe; short-short-long means mechanical assistance requested; long-long-short means medical assistance requested. The reverse explains that an answer should repeat the received group once and then show a steady light for five seconds. The card warns that these are local service signals, not an international code for casual use.",
        "The old lookout plaque prints the same patterns in a different order. Your half-covered row began with the word “landing,” not “assistance.” Guessing from a fragment would have reversed its meaning. Ruth reads your timed observations back before using the current card.",
        "The weather station stores a hand lamp for a worker isolated by equipment failure. Its automatic test is one long pulse every full minute. Four repeated short-short-long groups are not that test. The moving shutter is another observation consistent with someone deliberately adjusting the signal, though it still does not tell you exactly who."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "shore-2-question",
          "requires": [
            "shore-2-observation",
            "shore-2-document"
          ]
        }
      ]
    },
    "shore-2-question": {
      "title": "A question worth getting right",
      "location": "The coastguard signal cabinet",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The shore investigation",
      "puzzle": {
        "prompt": "Which response follows the current signal card and your recorded pattern?",
        "options": [
          {
            "id": "mechanical",
            "label": "Report a deliberate local request for mechanical assistance and repeat short-short-long once, then show a five-second steady answer.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "medical",
            "label": "Treat every long flash as a medical emergency and answer long-long-short.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "unsafe",
            "label": "Read the partly covered old plaque as more authoritative than the dated complete card.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "automatic",
            "label": "Dismiss the repeated groups as the station’s one-pulse automatic test.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "shore-2-finding"
      }
    },
    "shore-2-finding": {
      "title": "A finding you can defend",
      "location": "The coastguard signal cabinet",
      "body": [
        "Ruth repeats the group once and holds the answer light steady. The little window lamp answers with two slow circles, the acknowledgment printed on the current card. A living person is now responding to a fresh action, not simply replaying an old recording.",
        "You do not write “Nell is safe.” You write that someone at the station has responded, that the mechanical-assistance code was observed, and that identity and condition remain unconfirmed. Esme thanks you for not turning a reassuring sign into a medical judgment. The reply narrows the rescue task while leaving room for the crew to check what a distant observer cannot."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "shore-2-next"
        }
      ]
    },
    "shore-2-next": {
      "title": "The investigation moves forward",
      "location": "The old lookout",
      "body": [
        "The coastguard prepares to send the harbor’s shallow-draft service launch with the authorized crew. Esme asks for a tide calculation at the launch house. The eastern route is shorter on the tourist map, but yesterday’s rain and tonight’s falling water have changed the safe approach.",
        "On the way down, a man asks whether the island is haunted. Ruth answers with the facts you established and no more. The man goes to help move a trailer out of the launch lane. It is the first useful thing the rumor has done all morning. You enter the launch house with the current card, keeping the lamp signal distinct from the chart you are about to read."
      ],
      "routeLabel": "The shore investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "shore-3",
          "requires": [
            "shore-2-deduction"
          ]
        }
      ]
    },
    "shore-3": {
      "title": "The shorter route is not the safer one",
      "location": "The launch house",
      "body": [
        "Esme lays out two approach cards. East Shoal takes twelve minutes from the harbor mouth and requires at least 1.8 meters of charted water above its sill. West Cut takes twenty-three minutes and requires at least 0.9 meters. The service launch’s published clearance already includes its loaded draft and the crew’s safety allowance; you must not add or subtract that allowance twice.",
        "The tide gauge reads 1.3 meters at 06:30. A board beside it predicts falling water: 1.2 at 06:45, 1.1 at 07:00, and 1.0 at 07:15. Esme expects departure at 06:40. The eastern sill would be reached around 06:52, the western sill around 07:03. These are planning estimates, not permission to ignore a real gauge or the coxswain’s judgment.",
        "A handwritten tourist guide calls the east approach “easy at a full tide.” Today is neither a full tide nor an outing without equipment. Your role is to identify the contradiction before someone mistakes a familiar phrase for current clearance."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-3-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "shore-3-record"
        }
      ]
    },
    "shore-3-record": {
      "title": "The second limiting condition",
      "location": "The maintenance shed",
      "body": [
        "The western landing has two steps into the station yard. The lower step is damaged, but a new inspection record approves the upper landing for the service launch when water at the sill remains above 0.9 meters. It also closes the outer pier because its ladder has been removed. An old photograph on the wall shows that ladder in place. The photograph is not evidence of its condition today.",
        "At 07:03 the tide will be near 1.1 meters, giving the west approach about 0.2 meters above its required threshold. At 06:52 the eastern route will have about 1.15 meters, well below its 1.8 meter threshold. The exact interpolated digit is less important than the clear difference. West is supported by both water and current landing inspection; east is supported by neither.",
        "Esme asks for a recommendation with an abort condition: if the live gauge or the coxswain’s depth sounder reads below the required threshold, the crew waits or changes plan. A sound deduction includes what would make it no longer sound."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-3-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "shore-3-question",
          "requires": [
            "shore-3-observation",
            "shore-3-document"
          ]
        }
      ]
    },
    "shore-3-question": {
      "title": "A question worth getting right",
      "location": "The maintenance shed",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The shore investigation",
      "puzzle": {
        "prompt": "Select the two statements a responsible approach recommendation must contain.",
        "options": [
          {
            "id": "west",
            "label": "Use West Cut, subject to the crew confirming at least 0.9 meters at its sill and the current upper-landing inspection.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "abort",
            "label": "Reassess if live depth or conditions contradict the planning estimate.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "east",
            "label": "Use East Shoal because its shorter journey compensates for missing depth.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "pier",
            "label": "Use the outer pier because an old photograph shows a ladder.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "shore-3-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "shore-3-finding": {
      "title": "A finding you can defend",
      "location": "The maintenance shed",
      "body": [
        "Esme adds the live-depth condition to the plan and gives the coxswain the approved landing record. The service launch will take West Cut. Nobody asks you to be aboard: a good contribution from the chart table is still a contribution.",
        "The reasoning has now passed three different tests. The drift points toward a likely starting area; a new signal establishes a current person at the station; the approach calculation identifies a route the crew can actually use. None is a substitute for the others. Ruth prepares the incident report with space for the crew’s later findings, so the part learned by inference will not be confused with the part eventually seen close up."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-3-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "shore-3-next"
        }
      ]
    },
    "shore-3-next": {
      "title": "The investigation moves forward",
      "location": "The launch house",
      "body": [
        "At the radio desk, Ruth has received a competing claim from a shopkeeper: Nell was seen buying a train ticket yesterday, so perhaps the island signal belongs to somebody else. The shopkeeper remembers a blue coat, a time near four, and the clerk saying the name Avery. Those details deserve a check, not a contest in confidence.",
        "Kit brings the ticket carbon from the station’s delivery bag. The initials are M.A., not N.A., and the destination is the county veterinary clinic. Ruth remembers Nell’s mother taking her old terrier there. You will need to decide which facts belong in the report before the launch leaves the harbor mouth."
      ],
      "routeLabel": "The shore investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "shore-4",
          "requires": [
            "shore-3-deduction"
          ]
        }
      ]
    },
    "shore-4": {
      "title": "A useful report is not the longest report",
      "location": "The harbor radio desk",
      "body": [
        "Ruth spreads the notes in three columns: observed, inferred, and unverified. The boat’s number belongs under observed. Its likely drift origin belongs under inferred. The distant person’s identity remains unverified until contact is made. The train-ticket rumor can be tested against a document whose initials and destination do not fit Nell’s journey.",
        "The coastguard asks for a concise update: last confirmed worker location, nature of current contact, recommended authorized approach, and what still needs checking. It does not ask for a confident story about why a mooring failed. The fray may have been worn before the tide pulled it; an inspection on the island must establish that.",
        "For the first time you notice that Ruth has left the top of the report blank. It will say “Person isolated after return failure,” not “Theft,” unless later evidence supports a theft. An early category can steer the questions people remember to ask."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-4-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "shore-4-record"
        }
      ]
    },
    "shore-4-record": {
      "title": "The words before the transmitter opens",
      "location": "The communications alcove",
      "body": [
        "Kit checks the actual ferry skipper’s log with Ruth. It confirms Nell’s outward trip at 14:20 and the canceled return. The loose tick was placed in a column headed MESSAGE RETURNED: it recorded an unanswered callback being relayed to the duty office, not a passenger coming back. The computer summary hid that heading when it was printed.",
        "That correction does not make every record unreliable. The original log has named signatures and a specific journey; the ambiguous summary has a different purpose. Meanwhile the fresh acknowledgment from the weather station remains a current observation, independent of paperwork. The crew can ask whoever answers for a name, condition, and safe access on arrival.",
        "You arrange the report so that each sentence can be traced to its source. First: Nell’s last signed journey. Second: current mechanical-assistance signal with a two-way acknowledgment. Third: West Cut and the live-depth condition. Fourth: identity and cause of the broken mooring still to be confirmed. The rest can wait until the crew has news."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-4-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "shore-4-question",
          "requires": [
            "shore-4-observation",
            "shore-4-document"
          ]
        }
      ]
    },
    "shore-4-question": {
      "title": "A question worth getting right",
      "location": "The communications alcove",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The shore investigation",
      "puzzle": {
        "prompt": "Which report preserves all the evidence without turning inference into certainty?",
        "options": [
          {
            "id": "measured",
            "label": "Nell’s last confirmed trip was to Beacon; someone there requests mechanical help and acknowledged us; approach by approved West Cut while verifying depth, identity, condition, and the mooring.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "stolen",
            "label": "Nell stole a renamed boat and left the island, because both a tick and a blue coat were reported.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "medical",
            "label": "We have remotely confirmed Nell’s health and the precise cause of the rope failure.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "wait",
            "label": "No report is possible until every rumor in the village has been disproved.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "shore-4-finding"
      }
    },
    "shore-4-finding": {
      "title": "A finding you can defend",
      "location": "The communications alcove",
      "body": [
        "Ruth transmits your sourced summary. The launch crew reads back the approach and the remaining questions, a useful final check that your careful qualifications survived the radio. Then the harbor waits without inventing more certainty to make the waiting easier.",
        "A few minutes later the coxswain reports a person at the upper west landing. It is Nell. She is tired, thirsty, and well enough to explain what happened, but the crew checks her before taking her account. The weather station kept her dry. Her return launch had failed, and the older mooring line parted while she was indoors trying to repair a radio circuit. The tide carried H-27 away without her."
      ],
      "routeLabel": "The shore investigation",
      "clues": [
        "shore-4-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "shore-4-next"
        }
      ]
    },
    "shore-4-next": {
      "title": "The investigation moves forward",
      "location": "The harbor radio desk",
      "body": [
        "There is one more detail for the log. Nell’s radio repair notes use a landing name that differs from the tourist chart. Ruth records both names with the registration area, so next time a caller will not have to guess which of two “west landings” somebody means. The point is not to erase local language; it is to connect that language to a shared reference.",
        "Tomas offers to finish the varnish after the crew has inspected and replaced the rope. Kit redraws the summary so that MESSAGE RETURNED cannot be mistaken for PASSENGER RETURNED. You carry the completed shore notes to the slipway. A solved case should leave the harbor slightly less likely to need the same deduction again."
      ],
      "routeLabel": "The shore investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "shore-ending",
          "requires": [
            "shore-4-deduction"
          ]
        }
      ]
    },
    "shore-ending": {
      "title": "The next boat home",
      "location": "The eastern slipway",
      "body": [
        "The service launch noses alongside the steps. Nell accepts a blanket before accepting a mug. She recognizes the new name immediately and asks whether her grandfather’s brass registration survived the paint. Ruth points to your first note, the one that kept the harbor from turning an unfamiliar word into a theft.",
        "Nell thanks you for the signal acknowledgment. Being seen, she says, felt different from merely seeing a boat somewhere in the distance. Esme thanks you for the abort condition; she would rather carry a cautious plan than an impressive one. When the tide reaches the bottom step, the empty craft no longer looks like the beginning of a tragedy. It looks like a boat that needs a better rope."
      ],
      "meets": [
        "nell"
      ],
      "ending": {
        "title": "Case closed: a careful way home",
        "body": [
          "Your shore investigation connected identity, drift, a current two-way signal, and a conditional safe approach. The authorized crew brought Nell home, and your report left uncertainty visible until it could be checked. The harbor keeps the revised log and the new landing reference."
        ],
        "kind": "solved"
      }
    },
    "paper-1": {
      "title": "The wrong kind of return",
      "location": "The ferry office",
      "body": [
        "Kit Dunn lets you into the ferry office before the ticket machine has warmed. The front desk holds a clean summary printed from three older forms. It looks more authoritative than the older forms because it has straight margins. Kit is not impressed by margins. “Tell me which box you mean,” she says, placing the originals beneath it.",
        "The passenger sheet has Nell Avery, one toolbox, outward 14:20, fare paid. The return-service sheet cancels the 16:10 launch because of a failed engine. A third sheet records duty messages, including a tick at 17:05 beside Nell’s name. The heading on this sheet is folded beneath a staple. It could explain why the summary seems to place someone home who has no return ticket.",
        "Kit will let you compare the documents, but she will not let you write a replacement passenger entry to make the figures balance. The absence of an entry is part of what you are investigating."
      ],
      "routeLabel": "The records investigation",
      "clues": [
        "paper-1-observation"
      ],
      "meets": [
        "kit"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "paper-1-record"
        }
      ],
      "setFlags": [
        "records-route"
      ]
    },
    "paper-1-record": {
      "title": "Which system made the mark?",
      "location": "The ticket archive cupboard",
      "body": [
        "The third sheet’s full heading reads MESSAGE RETURNED TO DUTY OFFICE. At 17:05 the clerk sent the failed callback back to the person covering the harbor radio. No passenger name was added to the return-service sheet. The summary program placed both kinds of tick beneath a single heading, RETURNED.",
        "The records also provide a useful control. A passenger named Olly Fry has a signed outward ticket, a return ticket serial, and the skipper’s initials. His line shows what a confirmed return looks like across the system. Nell’s line has only the outward ticket and a returned message. You are not proving an absence from the entire mainland, only a failure to establish the particular crossing.",
        "The distinction changes the next task. Instead of asking why Nell left a boat unattended after coming home, you need to find out why the callback failed and where the island’s communications route now goes. Kit brings the switchboard’s extension sheet out of the cupboard. Two entries for “Beacon” are printed in different ink."
      ],
      "routeLabel": "The records investigation",
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
      "location": "The ticket archive cupboard",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The records investigation",
      "puzzle": {
        "prompt": "Which two records establish what is known about Nell’s journey?",
        "options": [
          {
            "id": "outward",
            "label": "The signed passenger sheet confirms the outward 14:20 journey.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "meaning",
            "label": "The original message heading explains that the 17:05 tick is a returned callback, not a passenger crossing.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "summary",
            "label": "The clean computer summary is decisive because its margins are straight.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "absence",
            "label": "No return ticket proves Nell cannot be anywhere on the mainland by any means.",
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
      "location": "The ticket archive cupboard",
      "body": [
        "You annotate the summary with its source headings rather than striking it through. Kit wants the repair to survive after the investigation, and a crossed-out number would not tell the next clerk what happened. The evidence supports an unconfirmed return following a definite cancellation. It does not require either a secret journey or a dishonest witness.",
        "Ruth relays that distinction to the coastguard. The case is still open, but its question is clearer. Your branch will now follow the failed line to Beacon rather than repeat the shore search already assigned to Esme. Kit phones Sol Mercer, who maintained the old exchange before the printed extension sheet existed."
      ],
      "routeLabel": "The records investigation",
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
      "location": "The ferry office",
      "body": [
        "Sol is in the little telephone museum behind the post office, repairing a bell that nobody has asked him to repair. He listens to the facts, including the exact 17:05 heading. That earns a nod. A report that admits a heading problem is more interesting to him than one that calls every disagreement a lie.",
        "On a wall map, two sites carry the name Beacon. One is the original coast station on the island; the other is a mainland storage yard that adopted the name when the weather office moved. The modern directory lists only one. The canceled return and the failed callback may meet at a problem of names again, but this time a brass boat plate cannot settle it."
      ],
      "routeLabel": "The records investigation",
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
      "title": "Two Beacons on one page",
      "location": "The old telephone exchange",
      "body": [
        "Sol Mercer keeps the old switchboard not as a monument to better times, but because its penciled corrections often explain newer mistakes. The extension sheet has B-4 beside “Beacon station,” B-7 beside “Beacon depot,” and a note that the depot inherited the station’s postal name. Someone updating the directory copied the postal name into the operational column.",
        "Kit’s failed call was dialed through the new directory entry. Its recorded destination was B-7. Nell’s maintenance permit, signed that morning, gives work site B-4. The two addresses are not interchangeable, even though a delivery driver could honestly call either place Beacon. Sol finds a trunk-test book with a simple rule: calls to B-4 must go through the coast exchange, not the town extension group.",
        "That rule is old enough to deserve checking. Sol does not simply restore a connection on remembered authority. He asks Ruth for the current line diagram, which the weather service has supplied with its permit."
      ],
      "routeLabel": "The records investigation",
      "clues": [
        "paper-2-observation"
      ],
      "meets": [
        "sol"
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
      "title": "The diagram that still applies",
      "location": "The post-office map table",
      "body": [
        "The current diagram shows B-4 as the island weather station, reached through trunk C 2. B-7 is the mainland stores, reached through town group T 1. The weather service’s permit carries the same B-4 reference and authorizes an engineer to isolate and test the line. The old book’s routing rule agrees with the current diagram, though its place names differ.",
        "Sol points to two tempting but invalid shortcuts. Dialing B-7 again with a more urgent voice will still reach the wrong place. Calling the island extension directly from a town socket will not necessarily reach trunk C 2. A correct number without a correct route can be just as useless as a wrong number.",
        "Ruth arranges an authorized line test. It produces a response tone from the island terminator, followed by silence. The circuit reaches the right shore now; it still cannot carry a normal conversation. That is new information. The first fault was in the directory, but identifying one fault does not oblige the world to contain only one."
      ],
      "routeLabel": "The records investigation",
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
      "location": "The post-office map table",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The records investigation",
      "puzzle": {
        "prompt": "Which route reaches the work site on Nell’s signed permit?",
        "options": [
          {
            "id": "island",
            "label": "B-4 through coast trunk C 2, as confirmed by both the current diagram and the work-site reference.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "postal",
            "label": "B-7 because the postal name Beacon appears in the new directory.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "direct",
            "label": "B-4 through any town extension socket, because digits alone determine a route.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "repeat",
            "label": "Repeat the 17:05 call to B-7 until the storage-yard staff answer.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "paper-2-finding"
      }
    },
    "paper-2-finding": {
      "title": "A finding you can defend",
      "location": "The post-office map table",
      "body": [
        "You record the number, the route, and the source that justifies each. Sol labels the corrected line with both the old name and the current site reference. The response tone confirms a test path to the island terminator, not a person at the station and not a healthy voice circuit.",
        "Nell’s permit includes a service note for a battery-backed message lamp. It was designed for the days when a voice line could fail while its low-current signaling pair still worked. Ruth asks the weather office for the operating sheet rather than inviting anyone to improvise with the switchboard. The next deduction will concern the power budget, not the place name."
      ],
      "routeLabel": "The records investigation",
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
      "location": "The old telephone exchange",
      "body": [
        "Kit carries the corrected extension reference back to the ferry office. Sol walks you to the weather-service annex, where a replacement-parts register is waiting. You pass the mainland depot on the way. Its caretaker has been receiving calls for island visitors for months and thought the callers were simply confused.",
        "He is relieved to be asked about a system instead of blamed for not knowing a stranger’s location. He signs a short factual statement: no Nell Avery arrived at his desk yesterday. That still does not settle where Nell is, but it removes a misleading answer the faulty directory has been offering the harbor for far too long."
      ],
      "routeLabel": "The records investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "paper-3",
          "requires": [
            "paper-2-deduction"
          ]
        }
      ]
    },
    "paper-3": {
      "title": "What the spare battery can power",
      "location": "The weather-service annex",
      "body": [
        "The weather service’s maintenance sheet describes two electrically separate circuits. The voice radio needs 12 volts and 0.8 amps while transmitting. The emergency message lamp needs 6 volts and 0.05 amps. Its dedicated signaling pair is isolated from the voice equipment and can be tested by an authorized technician without powering the radio.",
        "A delivery docket says a 6 volt battery was sent to B-4 yesterday. The clerk had marked it “communications restored” because the package contained a communications part. But the serial number belongs to the lamp circuit, not the voice set. The radio therefore could remain silent even if a person installed the delivered battery correctly. A repaired light is not necessarily a repaired radio.",
        "The operating sheet defines a supervised query: two pulses request acknowledgment; one returned pulse confirms an operator has pressed the station’s local button. An automatic terminator response is three pulses. The difference will matter more than a reassuring word in a delivery summary."
      ],
      "routeLabel": "The records investigation",
      "clues": [
        "paper-3-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "paper-3-record"
        }
      ]
    },
    "paper-3-record": {
      "title": "A supervised test, not a guess",
      "location": "The authorized line-test desk",
      "body": [
        "With Ruth and the weather-service technician on the line, Sol sends the two-pulse query over the isolated signaling pair. Nothing happens for eight seconds. Then a single pulse returns. The technician repeats the test after a different interval; again there is a single returned pulse, not the automatic three-pulse pattern. The station’s local button is being operated in response to a new request.",
        "No one treats a button press as a complete medical interview. The operating sheet provides another limited exchange: one query for “able to wait under shelter,” another for “urgent medical help needed.” Their reply keys must be read back before use. The technician gets the first confirmation and no medical request. That narrows urgency without claiming more than the system can communicate.",
        "The route you chose has produced a form of contact the shore watchers could not establish by paperwork alone. It is still evidence to combine with the last confirmed journey, rather than a substitute for asking the operator’s identity when a voice connection becomes available."
      ],
      "routeLabel": "The records investigation",
      "clues": [
        "paper-3-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "paper-3-question",
          "requires": [
            "paper-3-observation",
            "paper-3-document"
          ]
        }
      ]
    },
    "paper-3-question": {
      "title": "A question worth getting right",
      "location": "The authorized line-test desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The records investigation",
      "puzzle": {
        "prompt": "Select the observations that support contact with a current operator while keeping the equipment findings separate.",
        "options": [
          {
            "id": "battery",
            "label": "The delivered 6 volt part serves the lamp circuit and cannot establish restoration of the 12 volt voice transmitter.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "response",
            "label": "A single pulse answered each new supervised query, unlike the automatic three-pulse terminator response.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "identity",
            "label": "Any electrical response proves Nell’s name and full medical condition.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "summary",
            "label": "The delivery summary overrides the circuit specifications because it says restored.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "paper-3-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "paper-3-finding": {
      "title": "A finding you can defend",
      "location": "The authorized line-test desk",
      "body": [
        "Ruth logs a current manual response and a sheltered-wait confirmation, with the system’s limited vocabulary attached. She does not convert the result into a quotation Nell never spoke. The weather-service technician arranges the correct 12 volt part with the next authorized crew.",
        "Meanwhile, Kit finds the reason the return message never reached the skipper. The canceled-launch form directed the office to a mainland site alias, and that alias fed the same wrong directory entry. The boat’s drift, the canceled service, and the failed communication were different events; the duplicated name made their records look like one settled return. You now have enough pieces to reconstruct the administrative chain without accusing the wrong person of making them all happen deliberately."
      ],
      "routeLabel": "The records investigation",
      "clues": [
        "paper-3-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "paper-3-next"
        }
      ]
    },
    "paper-3-next": {
      "title": "The investigation moves forward",
      "location": "The weather-service annex",
      "body": [
        "At the harbor office, Ruth asks you to draft the sequence for both the coastguard and the weather service. The rescue priority is clear enough to act on, but repairing the records needs a different level of detail. If the report simply says “Nell forgot to call,” the same faulty route will fail the next worker who does everything correctly.",
        "Kit places the original forms on a long table. Sol adds the current diagram. The technician sends the supervised-test record with its pulse key. You have chosen the paper route, but the work has been anything but an exercise in trusting paper: each document has had to meet a physical system it could actually describe."
      ],
      "routeLabel": "The records investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "paper-4",
          "requires": [
            "paper-3-deduction"
          ]
        }
      ]
    },
    "paper-4": {
      "title": "An account that repairs the system",
      "location": "The long table in the harbor office",
      "body": [
        "Kit has drawn the sequence across four sheets. At 14:20 Nell’s outward trip is signed. At 16:10 the return launch is canceled. At 17:05 a failed callback is marked returned to duty; the summary hides the difference between a message and a passenger. Today the corrected B-4 route produces manual responses through the low-power signaling pair. None of those facts requires a worker secretly traveling through the night.",
        "There is also a true but incomplete story about the boat. Esme’s shore team has established that it likely drifted from Beacon’s western service landing. They have not yet inspected the parted rope on the island. Your records do not tell you its exact condition either. The right report can combine two teams’ findings without pretending each team established every detail.",
        "Ruth asks what to send first. A long account of directory history can follow. The operational message must direct the correct people to the correct site with the correct parts and the current contact status."
      ],
      "routeLabel": "The records investigation",
      "clues": [
        "paper-4-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "paper-4-record"
        }
      ]
    },
    "paper-4-record": {
      "title": "The handover and the remaining questions",
      "location": "The coastguard liaison desk",
      "body": [
        "The duty officer reads back B-4, coast trunk C 2, manual response confirmed, worker last signed outward to the island, sheltered waiting reported,12 volt voice equipment not restored. The officer has an authorized crew already checking the western approach. The weather service can send the correct part with them and preserve the failed one for inspection.",
        "You add two questions that the records cannot answer: who operated the local button, and why did the boat’s rope part? Ruth has a place in the log for the crew’s replies. She also wants an immediate correction to both directories. The operational code must not disappear beneath the name Beacon again.",
        "Sol proposes keeping the old forms beside the new ones for a month, so a clerk can explain why a familiar heading has changed. Kit prefers a source note to a fresh legend about a careless predecessor. They are agreeing on a remedy, not an alibi for the system. The case has become complicated enough that a neat accusation would now be the least accurate ending."
      ],
      "routeLabel": "The records investigation",
      "clues": [
        "paper-4-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "paper-4-question",
          "requires": [
            "paper-4-observation",
            "paper-4-document"
          ]
        }
      ]
    },
    "paper-4-question": {
      "title": "A question worth getting right",
      "location": "The coastguard liaison desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The records investigation",
      "puzzle": {
        "prompt": "Which handover is supported by the complete records route?",
        "options": [
          {
            "id": "handover",
            "label": "Send authorized help to B-4 with the correct voice-set part; report limited manual contact and separately confirm identity, condition, and the drift cause on arrival.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "blame",
            "label": "Mark Nell returned and close the case because a message tick is present.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "replace",
            "label": "Send another 6 volt lamp battery and treat that as proof the 12 volt transmitter will work.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "identity",
            "label": "State that the pulse sequence proves the operator’s name and every circumstance of the night.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "paper-4-finding"
      }
    },
    "paper-4-finding": {
      "title": "A finding you can defend",
      "location": "The coastguard liaison desk",
      "body": [
        "The handover survives its read-back without losing a code or a qualification. When the crew reaches the island, the operator is confirmed as Nell. She is sheltering in the weather station after the canceled launch, and she had been using the low-power circuit exactly as its sheet describes. Her attempts to call through the voice set failed because the promised replacement was for the wrong circuit.",
        "The crew inspects the mooring. Its worn line parted while Nell was inside, and H-27 drifted toward the harbor. That finding joins your record after the inspection, not before. Ruth makes a separate entry for it, dated and sourced, so tomorrow’s reader can see when a sensible inference became a confirmed observation."
      ],
      "routeLabel": "The records investigation",
      "clues": [
        "paper-4-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "paper-4-next"
        }
      ]
    },
    "paper-4-next": {
      "title": "The investigation moves forward",
      "location": "The long table in the harbor office",
      "body": [
        "The weather service restores the voice link under the technician’s supervision. Nell’s first call is to ask whether someone has rescued the bread from her bicycle. Kit tells her yes, though the bakery may have supplied a better loaf by now. Ordinary questions return to the channel one by one.",
        "Your last stop is the public noticeboard. Ruth has posted both the place name and the operational site reference, the right emergency number, and a short explanation of the new return heading. There are no accusations on it. There is an account of what people can do differently next time. You take the carbon copies down to the slipway, where Nell has agreed to meet the people who answered her one small pulse."
      ],
      "routeLabel": "The records investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "paper-ending",
          "requires": [
            "paper-4-deduction"
          ]
        }
      ]
    },
    "paper-ending": {
      "title": "A line kept open",
      "location": "The harbor telephone booth",
      "body": [
        "Nell stands in the old booth with its door open, speaking to the weather-service apprentice who packed the battery. She tells the apprentice exactly how to read the serial field without blaming them for a summary designed to hide it. Kit writes the corrected directions on a card. Sol screws the card beside the handset, leaving room below it for the next honest correction.",
        "At the slipway, the repaired boat still carries its unfamiliar name. You recognize it now without needing the village to agree on the spelling. Ruth gives you a copy of the sourced report, including the parts learned by the shore team and the parts your route established. A good mystery, she says, sometimes ends with a person home and a form nobody will misread again."
      ],
      "meets": [
        "nell"
      ],
      "ending": {
        "title": "Case closed: the harbor’s missing connection",
        "body": [
          "You traced the canceled journey through a mistaken heading, an ambiguous place name, and two different circuits. Your current-contact evidence brought the right equipment with the authorized crew, and your record repair kept the island connected after Nell came home."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "shore-investigation",
      "actions": [
        {
          "type": "choice",
          "id": "begin"
        },
        {
          "type": "choice",
          "id": "consider"
        },
        {
          "type": "answer",
          "id": "identity"
        },
        {
          "type": "choice",
          "id": "shore"
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
            "camera",
            "flow"
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
          "id": "mechanical"
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
          "id": [
            "west",
            "abort"
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
          "id": "measured"
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
      "id": "records-investigation",
      "actions": [
        {
          "type": "choice",
          "id": "begin"
        },
        {
          "type": "choice",
          "id": "consider"
        },
        {
          "type": "answer",
          "id": "identity"
        },
        {
          "type": "choice",
          "id": "records"
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
            "outward",
            "meaning"
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
          "id": "island"
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
          "id": [
            "battery",
            "response"
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
          "id": "handover"
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
