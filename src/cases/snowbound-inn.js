/** Expanded, authored mystery. Only earned scenes belong in the reader. */
export default {
  "id": "snowbound-inn",
  "title": "The Snowbound Guest",
  "genre": "Murder mystery",
  "difficulty": "Challenging",
  "duration": "40–60 min",
  "description": "A death during a mountain storm. A seemingly perfect musical alibi. Decide whether to build a documented case through the locked service rooms or protect a frightened witness while unraveling the household’s competing accounts.",
  "setting": "Briar Lodge, a mountain inn cut off by the first winter storm",
  "contentNote": "A non-graphic murder investigation involving debt, frightened witnesses, and disputed testimony.",
  "characters": [
    {
      "id": "ada",
      "name": "Ada Finch",
      "role": "Innkeeper",
      "description": "Is trying to preserve a household as carefully as the room upstairs.",
      "color": "#a18970"
    },
    {
      "id": "julian",
      "name": "Julian Reed",
      "role": "Piano restorer",
      "description": "Answers questions readily until you ask what his words actually establish.",
      "color": "#a18970"
    },
    {
      "id": "eve",
      "name": "Eve Shaw",
      "role": "Traveling surveyor",
      "description": "Keeps measured drawings and is honest about their limits.",
      "color": "#a18970"
    },
    {
      "id": "luca",
      "name": "Luca Bell",
      "role": "Temporary porter",
      "description": "Is reluctant to volunteer a statement that might cost someone else their livelihood.",
      "color": "#a18970"
    },
    {
      "id": "moss",
      "name": "Sergeant Moss",
      "role": "Local police officer",
      "description": "Has reached the valley telephone but cannot reach the inn quickly.",
      "color": "#a18970"
    },
    {
      "id": "chen",
      "name": "Dr. Chen",
      "role": "Village doctor",
      "description": "Insists on distinguishing a witnessed interval from a medical estimate.",
      "color": "#a18970"
    },
    {
      "id": "rhea",
      "name": "Rhea Pike",
      "role": "Housekeeper",
      "description": "Dates her practical work in a little ruled notebook.",
      "color": "#a18970"
    }
  ],
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "clues": [
    {
      "id": "c-interval",
      "title": "A witnessed interval",
      "description": "Ada spoke to Halden at kitchen-clock 9:00 and found him dead at 9:12. The kitchen clock had been checked; Dr. Chen cannot independently choose an exact minute."
    },
    {
      "id": "c-clocks",
      "title": "The hall-clock correction",
      "description": "After real 9:00, the hall clock was four minutes slow. Eve’s hall-clock 9:03 corresponds to kitchen-clock 9:07; kitchen times need no correction."
    },
    {
      "id": "c-roll",
      "title": "The automatic cycle",
      "description": "The engaged roll runs for eight minutes and sounds an end bell. Rhea heard the bell at 9:10 and found the carriage engaged in the empty parlor at 9:11."
    },
    {
      "id": "c-listening",
      "title": "The listeners’ limits",
      "description": "Ada and Eve heard music but could not see the bench. A repeated hesitation and the9:10 end bell are consistent with an automatic cycle beginning at 9:02."
    },
    {
      "id": "c-threshold",
      "title": "An earlier snag",
      "description": "Rhea recorded Julian’s cuff snag during the8:20 shelf move and the needle at 8:25. The thread cannot by itself date a visit after 9:00."
    },
    {
      "id": "c-contamination",
      "title": "The dated runner",
      "description": "A fresh runner was laid at 9:00; Ada saw a new impression at 9:12 before later entries. Existing latch fibers were not removed when the runner was laid."
    },
    {
      "id": "c-letter",
      "title": "The incomplete demand",
      "description": "The surviving carbon copy threatens police action over missing workshop money, but begins at page two. Julian describes the dispute as an ordinary personal loan."
    },
    {
      "id": "c-accounts",
      "title": "The restricted advance",
      "description": "A600-pound customer advance was to remain separate until inspection approval. A matching transfer entered Julian’s personal account; no signed release amendment appears in the supplied correspondence book."
    },
    {
      "id": "c-keys",
      "title": "A latch, not a working deadbolt",
      "description": "The study deadbolt was removed in spring. The9:30 spare-key loan does not establish when someone could first enter the room."
    },
    {
      "id": "c-door",
      "title": "A possible interior route",
      "description": "The ordinary latch allowed entry without a key; the service corridor connects parlor and upstairs stair in under a minute, outside the hall’s front sightline."
    },
    {
      "id": "c-weather",
      "title": "The sketch’s proper limit",
      "description": "At corrected 9:07 Eve saw a figure near the upper service stair but no face or reliable clothing color. Her drawing establishes location and time, not identity."
    },
    {
      "id": "c-inventory",
      "title": "The remaining link",
      "description": "The inquiry still needs an independently supported connection between a particular person and the relevant interval; motive and possible access alone do not supply it."
    },
    {
      "id": "a-preserve",
      "title": "The entry log",
      "description": "Ada began recording necessary study entries immediately after discovery and marked the plank route used to avoid the runner."
    },
    {
      "id": "a-runner",
      "title": "The first tread record",
      "description": "The runner was issued clean at 8:58 and laid at 9:00. Its exposed impression has two broken bars and a crescent gap; the folded corner is unmarked."
    },
    {
      "id": "a-collection",
      "title": "The sealed runner",
      "description": "Moss photographed the runner in place, recorded its orientation, and sealed it under packetB4 with separately limited witness signatures."
    },
    {
      "id": "a-shoes",
      "title": "The footwear comparison",
      "description": "The documented indoor footwear differs. Julian’s overshoe has the broken bars and crescent gap seen inB4; the other recorded pairs do not share that combination."
    },
    {
      "id": "a-drying",
      "title": "The drying-rack interval",
      "description": "Rhea recorded Julian’s overshoes present at 8:50 and one space empty at 9:09. Luca recalls their replacement before the music stopped, without an exact time."
    },
    {
      "id": "a-wax",
      "title": "The cleaned service threshold",
      "description": "A broad heel crossed a finish applied at 8:57 on the lower service threshold, establishing passage after that maintenance task."
    },
    {
      "id": "a-payment",
      "title": "The complete demand",
      "description": "Page one concerns the restricted customer advance and offers independent accounting before a police report; page two’s threat was not the whole demand."
    },
    {
      "id": "a-meeting",
      "title": "The disputed account of the letter",
      "description": "Julian acknowledges reading the independent-accountant offer before supper, despite having described the demand as offering no review."
    },
    {
      "id": "a-medical",
      "title": "The corrected medical attribution",
      "description": "Dr. Chen rejects an exact-minute claim. The9:07 observation belongs to Eve’s corrected sketch, not to a medical determination."
    },
    {
      "id": "a-account",
      "title": "The draft’s exclusions",
      "description": "The report excludes an exact-minute medical claim, a facial identification by Eve, and a late date inferred from the older cuff snag."
    },
    {
      "id": "a-interview",
      "title": "The officer’s recorded admission",
      "description": "After a separate interview supported by the preserved records, Julian admits the upstairs visit and responsibility. Moss records the statement and retains independent evidence."
    },
    {
      "id": "a-handover",
      "title": "The final handover",
      "description": "The officer receives preserved physical and documentary evidence with source attributions, retaining corroboration independent of the admission."
    },
    {
      "id": "b-separate",
      "title": "Separate first accounts",
      "description": "The first witness accounts are taken separately so later agreement cannot be mistaken for independent confirmation."
    },
    {
      "id": "b-luca",
      "title": "Luca’s first account",
      "description": "Luca discloses a prior workplace connection and reports seeing Julian leave by the parlor’s rear door after his9:03 kitchen delivery; he claims no exact minute."
    },
    {
      "id": "b-slip",
      "title": "The independent delivery slip",
      "description": "Ada’s signed9:03 kitchen slip anchors Luca’s earlier chore; his later sighting remains a relative-order observation, not an exact clock time."
    },
    {
      "id": "b-sketches",
      "title": "Unmerged witness accounts",
      "description": "Without hearing Luca’s identification, Eve retains her limited account: an unidentified figure near the upper stair at corrected 9:07."
    },
    {
      "id": "b-routine",
      "title": "An ordinary alternative",
      "description": "The rear stair is also a normal service route. A stair sighting alone does not establish entry into the study."
    },
    {
      "id": "b-questions",
      "title": "The interview boundary",
      "description": "No witness has reported seeing the whole upstairs event. Questions must not invent a study identification or promise control over later police decisions."
    },
    {
      "id": "b-draft",
      "title": "The settlement draft",
      "description": "Julian’s draft proposed replacing the customer advance while calling it a private loan; its amount independently matches the workshop documents."
    },
    {
      "id": "b-folio",
      "title": "A later placement",
      "description": "Ada’s nine-o’clock desk observation and the draft’s jug-shaped water mark support later placement of Julian’s note at the study desk; the paper requires the officer’s examination."
    },
    {
      "id": "b-return",
      "title": "The recorded torn corner",
      "description": "Luca described the note’s torn corner in his first account before the study search; the recovered settlement copy matches that detail."
    },
    {
      "id": "b-limits",
      "title": "The witness route’s open question",
      "description": "The independent accounts and recovered note support questioning about a later visit, while none of the civilian witnesses claims to have seen the death."
    },
    {
      "id": "b-admission",
      "title": "The corroborated admission",
      "description": "Moss records Julian’s admission after questioning supported by separate witness accounts and the recovered draft, then checks it against independent evidence."
    },
    {
      "id": "b-statements",
      "title": "The protected handover",
      "description": "Moss receives each witness’s original limited account, explains the legal process, and avoids turning private testimony into household gossip."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The road disappears",
      "location": "Briar Lodge front hall",
      "body": [
        "The first snow looked decorative when you left the valley. By the time you reach Briar Lodge it has erased the road, the lower fence, and the shape of the bridge behind you. Ada Finch takes your wet scarf and sets a mug beside the stove. In the parlor, an old upright piano is playing a waltz with a charmingly uneven third phrase.",
        "At twelve minutes past nine, Ada returns from the upstairs study without the tray she carried up. Mr. Halden, a guest she spoke to at nine, has been found dead. She has already called Dr. Chen and Sergeant Moss. The doctor is walking from the neighboring cottage; the officer is stranded beyond the bridge. There will be no description of the body and no need for you to disturb it.",
        "Moss asks for help preserving ordinary facts until she arrives. Choose a responsibility: secure the physical evidence and work records with Ada, or keep the witnesses’ first accounts separate and help them speak without a crowd listening. The other tasks will still be done, but you will only have firsthand authority over the route you take."
      ],
      "meets": [
        "ada",
        "moss"
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Preserve the study and reconstruct the service corridor with Ada",
          "to": "a-preserve",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Keep the household apart and earn the witnesses’ accounts",
          "to": "b-separate",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "c-interval": {
      "title": "What the interval really means",
      "location": "The kitchen telephone table",
      "body": [
        "Dr. Chen reaches the inn and speaks to Moss through the kitchen telephone. He is careful with his language. His examination is consistent with a death during the evening, but cannot select a precise minute. The useful interval comes instead from Ada’s observations: she spoke to Halden while setting down fresh logs at nine and found him dead when she returned at 9:12.",
        "Moss asks how those times were obtained. Ada used the kitchen clock both times because the hallway clock had stopped earlier. The kitchen clock was compared with the valley telephone exchange at 8:45 and was within half a minute. There is no reason to replace a witnessed twelve-minute interval with a more impressive-sounding medical estimate.",
        "You write a header for the inquiry: after nine, before 9:12, subject to the limits of the kitchen clock and Ada’s account. Every alibi must be compared with that interval. A person whose whereabouts are uncertain outside it may be irrelevant; a person heard inside it may still not have been seen."
      ],
      "meets": [
        "chen"
      ],
      "clues": [
        "c-interval"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-clocks"
        }
      ]
    },
    "c-clocks": {
      "title": "A clock that lost four minutes",
      "location": "The stair landing",
      "body": [
        "Rhea Pike keeps a maintenance notebook because the inn’s old clocks are temperamental. Her entry says the hall clock stopped at 8:56 while she reset its loose pendulum. She used the kitchen clock to time the repair, restarted the hall clock at 9:00 without moving its hands, and left a notice beneath it: FOUR MINUTES SLOW UNTIL RESET. A guest later removed the notice while clearing the stair rail for luggage.",
        "Eve’s sketch labels a corridor figure at “9:03, hall clock.” Luca’s kitchen delivery slip is marked9:03 from the kitchen clock. Julian gives “about nine” without naming a clock. Those are not three synchronized observations. The maintenance entry establishes a specific correction for one instrument, not permission to alter any inconvenient time.",
        "You copy Rhea’s exact sequence before looking at the witnesses’ interpretations. The clock did not jump ahead. It stopped, lost four minutes, and resumed. A drawing labeled from it after the repair records an actual event later than its written time."
      ],
      "meets": [
        "rhea"
      ],
      "clues": [
        "c-clocks"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-time-puzzle"
        }
      ]
    },
    "c-time-puzzle": {
      "title": "Three entries on one scale",
      "location": "The kitchen worktable",
      "body": [
        "Moss asks you to prepare a single timeline instead of a list that silently mixes clocks. Put Ada’s last conversation at 9:00, Luca’s delivery at kitchen-clock 9:03, Eve’s corridor sketch at hall-clock 9:03, and Ada’s discovery at 9:12. The point is not yet to identify the figure Eve drew. It is to locate her observation honestly within the interval.",
        "A plausible story can be built around almost any uncorrected list. A testable account must retain the instrument behind each time. Choose the ordering that follows Rhea’s maintenance record without changing the kitchen entries. Do not round Eve’s corrected time back to “about nine” merely because Julian used those words."
      ],
      "puzzle": {
        "prompt": "Which order uses the records consistently?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "9:04 last conversation;9:07 kitchen delivery and sketch;9:16 discovery.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "8:59 corridor sketch;9:00 last conversation;9:03 delivery;9:12 discovery.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "9:00 last conversation;9:03 kitchen delivery;9:07 corridor sketch;9:12 discovery.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "9:00 last conversation;9:03 both observations;9:12 discovery.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "c-roll"
      }
    },
    "c-roll": {
      "title": "The automatic instrument",
      "location": "The parlor doorway",
      "body": [
        "The upright is a reproducing piano, built to play punched rolls when its spring motor is engaged. Julian has been repairing its governor. He says he performed continuously from 8:55 until 9:15 and that everyone downstairs heard him. That statement combines two propositions: music sounded, and his hands produced it. Only the first has been confirmed by the listeners so far.",
        "The service sheet explains the controls in ordinary language. A hand performance can continue with the roll carriage disengaged. When the automatic lever is thrown, the carriage takes over after a short settling bar. A marked roll then runs for eight minutes before a small end bell sounds. The lever does not announce itself loudly enough to be heard from the kitchen.",
        "Rhea found the roll carriage engaged at 9:11, when she entered the empty parlor to turn down the lamp. She did not see who engaged it. She recorded the end bell at 9:10 from the kitchen clock. You preserve the service sheet and her observation together, without pretending either one names a murderer."
      ],
      "clues": [
        "c-roll"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-listening"
        }
      ]
    },
    "c-listening": {
      "title": "What traveled through a wall",
      "location": "The kitchen serving hatch",
      "body": [
        "Ada describes what she heard through the kitchen wall: the waltz began before she took the first logs upstairs, continued while she washed cups, and ended with a little bell. She could not see the piano bench from the kitchen. The serving hatch faces the hall, not the parlor.",
        "Eve heard the same third phrase repeat with exactly the same hesitation. She assumed Julian was practicing. When you ask whether she saw him during the repetition, she says no. Her honesty is useful. An interpretation repeated by two people does not become two independent sightings.",
        "The eight-minute roll ending at 9:10 would have begun at 9:02. There could have been live playing before that and an automatic performance afterward. That is a possibility supported by the mechanism and timing, not yet a proof that Julian left. Your next task is to keep the limits of the sound evidence intact while you compare it with actual observations of people."
      ],
      "clues": [
        "c-listening"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-sound-puzzle"
        }
      ]
    },
    "c-sound-puzzle": {
      "title": "An alibi made of sound",
      "location": "The empty parlor",
      "body": [
        "You stand where Ada stood and check the sightline: the wall conceals the bench completely. The governor sheet gives a measured eight-minute cycle; Rhea’s note gives its end time. Nothing requires you to assume Julian never played a note, and nothing allows you to place him continuously at the keyboard on the strength of sound alone.",
        "Choose the two conclusions supported by both the mechanical and observational evidence. A complete account can leave a question open. It is better to mark an unwitnessed interval than to fill it with a confident accusation merely because a device could have supplied cover."
      ],
      "puzzle": {
        "prompt": "Which two conclusions can the music evidence support?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "The automatic roll could account for the music between 9:02 and9:10.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "The mechanism proves Julian entered the study during that interval.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Hearing that music does not establish Julian’s continuous presence at the bench.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "Because a roll was engaged, no live playing could have occurred earlier.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "c-threshold"
      }
    },
    "c-threshold": {
      "title": "The conspicuous blue thread",
      "location": "The study threshold",
      "body": [
        "A blue wool thread is caught in the study door’s latch plate. It is an attractive clue: distinct, easy to describe, and apparently connected to Julian’s torn cuff. Ada remembers that he asked for a needle after supper. The first version of the story practically writes itself.",
        "Rhea interrupts it with a maintenance entry. At8:20 she asked Julian to help carry a small shelf into the study. The latch snagged his cuff then; she handed him the needle at 8:25. The guest was alive afterward, including during Ada’s nine-o’clock conversation. Rhea did not remove every fiber from the plate after the repair.",
        "You record both the thread and the earlier contact. The evidence still connects Julian with the doorway at some time. It cannot, without a new reason, date that contact to the later twelve-minute interval. Moss asks you to keep the thread in place for her to collect, not to throw it away because it is less decisive than it first looked."
      ],
      "clues": [
        "c-threshold"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-contamination"
        }
      ]
    },
    "c-contamination": {
      "title": "A useful comparison must have a date",
      "location": "The linen cupboard",
      "body": [
        "Rhea shows you her threshold-cleaning routine. Before carrying Halden’s logs at nine, Ada laid a fresh pale runner across the study entrance to catch wet shoe marks. The old latch fibers were above it and were not disturbed. At9:12 there was a new tread impression on the runner, which Ada noticed before anyone else entered.",
        "The runner and the wool therefore answer different questions. The thread has a known possible source before the interval. The runner’s impression was made after the fresh cloth was laid and before the room was secured. An impression may still require a careful comparison; its timing does not identify the shoe by itself.",
        "Moss tells Ada to stop further traffic across the cloth and note each necessary entry. Dr. Chen’s shoes were photographed at the threshold before his examination. Rhea places a spare plank over the side of the doorway so emergency access will not add another ordinary tread mark. Preserving an imperfect record is more useful than polishing the room into an empty one."
      ],
      "clues": [
        "c-contamination"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-trace-puzzle"
        }
      ]
    },
    "c-trace-puzzle": {
      "title": "Two traces, two limits",
      "location": "The stair landing bench",
      "body": [
        "An eager guest says the blue thread settles everything. Another says the early snag makes every object at the doorway worthless. Neither response distinguishes an object’s origin from the time at which it could have been left. The new runner has a narrower window than the older latch, but still needs a source comparison.",
        "Moss asks for a sentence she can use in her initial report. It should retain observations that may later matter without promoting a resemblance into a verdict. Which statement gives the thread and the runner their proper, different evidential roles?"
      ],
      "puzzle": {
        "prompt": "Which statement is justified at this stage?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "The runner identifies a murderer even before any shoe comparison.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The earlier snag means the fresh runner must also predate9:00.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The thread proves Julian visited after 9:00 because its color matches.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The thread proves a possible earlier contact; the fresh runner records a later passage whose source still needs comparison.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "c-letter"
      }
    },
    "c-letter": {
      "title": "A demand and its missing first page",
      "location": "Ada’s reception desk",
      "body": [
        "Halden dictated a letter to Ada before supper and asked her to post it in the morning. Its carbon copy names Julian and refers to money missing from their former restoration workshop. The last paragraph threatens to take the accounts to the police. It is a clear source of conflict, but Ada’s copy begins with page two.",
        "Halden kept the first page in his leather folio. Ada heard him say that the missing money involved “the guarantor’s advance,” but she does not know what that phrase means. Julian has told the household that Halden demanded repayment of an ordinary personal loan. Those descriptions might refer to the same transaction, or they might conceal an important difference.",
        "Before you decide that motive supplies proof of a visit, Moss asks you to reconstruct the underlying transaction from documents with independent dates. A debt can explain a quarrel. It does not tell you who acted during an unwitnessed interval, and an incomplete demand should not be made to speak as if all its qualifications had survived."
      ],
      "clues": [
        "c-letter"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-accounts"
        }
      ]
    },
    "c-accounts": {
      "title": "The advance that was not a loan",
      "location": "The inn’s account table",
      "body": [
        "Halden had left copies of three workshop documents with Ada for secure overnight storage. The first records a customer’s advance of 600 pounds for a restoration project. The second requires the firm to hold that money separately until the customer approves the final inspection. The third shows a transfer of 600 pounds into Julian’s personal account, authorized with initials that Halden disputes.",
        "The customer’s advance was not money Halden personally lent Julian. Equally, an unexplained transfer is not by itself proof that Julian forged the authorization; there may be another document. The firm’s correspondence book contains no signed amendment releasing the funds before inspection.",
        "Ada writes each source on a separate slip so the arithmetic cannot swallow the contractual condition. The amount matches, but the condition matters just as much. You need to distinguish an ordinary debt, a possible misuse of restricted customer funds, and an unproved allegation about who signed a particular instruction. All three have been compressed into the word “loan” in the parlor."
      ],
      "clues": [
        "c-accounts"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-money-puzzle"
        }
      ]
    },
    "c-money-puzzle": {
      "title": "What the papers do and do not prove",
      "location": "The reception writing table",
      "body": [
        "The account documents give the quarrel more substance than a rumor about debt. They still do not identify the author of the disputed initials or establish the later physical events at the inn. A careful report can state a contractual condition and a contradictory transaction without deciding every unanswered question.",
        "Select the two conclusions supported by the documents you have actually examined. Do not add a missing authorization merely to make the arithmetic tidy, and do not mistake the absence of one amendment in a supplied book for proof that no other record could ever exist."
      ],
      "puzzle": {
        "prompt": "Which two conclusions belong in a provisional account?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "The customer’s advance was restricted pending inspection approval.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "The transfer alone proves Julian committed the death at the inn.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The disputed initials have already been proved a forgery by handwriting analysis.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The supplied records show a matching transfer to Julian without a release amendment in that correspondence book.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "c-keys"
      }
    },
    "c-keys": {
      "title": "A key that arrives too late",
      "location": "Ada’s key board",
      "body": [
        "The key board has three hooks: reception, cellar, and study spare. The reception key opens a cash drawer. The study spare fits a deadbolt installed years ago. A note on its hook says the deadbolt has been out of service since spring; the room now closes on an ordinary latch. Ada nevertheless lent Julian the spare at 9:30 because he asked whether an old key on his ring matched it.",
        "A hurried guest points to the9:30 entry as proof Julian could not have entered earlier. But that would only follow if a working locked door required that key. Rhea’s spring repair invoice says the deadbolt was removed after jamming. The bolt cavity was covered by a brass plate.",
        "You can inspect the plate from the corridor. Its screws have not been newly disturbed. None of this establishes who entered the room; it does establish that treating the later key loan as the first possible access would import a lock the room no longer had."
      ],
      "clues": [
        "c-keys"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-door"
        }
      ]
    },
    "c-door": {
      "title": "The room that was only closed",
      "location": "The service-corridor entrance",
      "body": [
        "Dr. Chen confirms that Ada opened the study with its ordinary handle when she found Halden. He did not see a key used. Rhea’s invoice explains why the old deadbolt cavity was covered, and the existing plate agrees with it. The door was closed; the evidence does not make it a locked-room puzzle.",
        "A narrow service corridor connects the back of the parlor to the upstairs stair. It can be walked in less than a minute at an ordinary pace. The front hall cannot see its lower door. That gives a possible path during the automatic musical interval, but a possible path is not a record of an actual journey.",
        "Moss asks that both ends be left alone until she arrives. If your route concerns physical records, you may be able to narrow the runner’s source. If it concerns witnesses, you may establish who saw a person near one end. Either kind of link should be found independently, rather than inferred from the mere existence of a convenient corridor."
      ],
      "clues": [
        "c-door"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-room-puzzle"
        }
      ]
    },
    "c-room-puzzle": {
      "title": "Closed does not mean locked",
      "location": "The covered deadbolt",
      "body": [
        "The inn is beginning to repeat the phrase “impossible room.” It is a comforting phrase because it moves responsibility outside the household. You have an ordinary latch, a covered deadbolt cavity, a later loan of an obsolete spare, and a service route hidden from the main hall.",
        "Which conclusion can be accepted without naming a suspect or inventing an entry through the snowy window? The right answer should reduce the problem to what still needs evidence, rather than replace one dramatic story with another."
      ],
      "puzzle": {
        "prompt": "What follows from the access evidence?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "The existence of a corridor proves Julian used it.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The9:30 key loan makes entry during the earlier interval impossible.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Someone could have entered by the interior corridor without the obsolete spare, but the actual visitor remains to be established.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "A closed door proves an unknown person climbed through the window.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "c-weather"
      }
    },
    "c-weather": {
      "title": "The figure in the sketch",
      "location": "The glazed porch",
      "body": [
        "Eve has a sequence of sketches, not one frozen picture. Her page labeled hall-clock 9:03 shows a dark figure at the upper service stair and a pale rectangle at the study threshold. The angle concealed the person’s face. The next sketch shows no figure. Her pencil shading could represent a blue coat, a gray coat, or a dark object held close to the body.",
        "She refuses an invitation to “remember” the color now that other people have mentioned Julian’s cuff. That refusal makes her a better witness. Her drawing supports an observation at corrected 9:07, within the interval and near the relevant route. It does not supply a name.",
        "Outside, the study window ledge carries unbroken snow that began settling at 8:30. From the porch Eve could see the window until she fetched a blanket at 8:50. After that, the undisturbed ledge is a physical observation Ada made, not continuous visual surveillance by Eve. Keep the sources separate even when their conclusions appear to agree."
      ],
      "meets": [
        "eve"
      ],
      "clues": [
        "c-weather"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-inventory"
        }
      ]
    },
    "c-inventory": {
      "title": "A list of uncertainties",
      "location": "The kitchen’s long table",
      "body": [
        "You arrange the case under four headings. Time: a witnessed9:00–9:12 interval and an observation at corrected 9:07. Opportunity: music could run automatically9:02–9:10, and an interior route did not require the old spare. Connection: an older cuff snag is dated before the interval, while a new runner impression has not yet been sourced. Conflict: restricted workshop money and an incomplete demand, with disputed authorization still unresolved.",
        "No single heading proves the complete story. The point of the list is to show exactly what the remaining route must add. A motive without an actual connection is weak. A matching object without a collection record may be challengeable. A frightened witness’s statement can be important without being made in front of the person it concerns.",
        "The stove has burned down. Ada puts on another log and asks you whether the household will ever feel ordinary again. You cannot promise that. You can promise not to fill the empty spaces in the account merely to make everyone’s waiting end sooner."
      ],
      "clues": [
        "c-inventory"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "c-standard"
        }
      ]
    },
    "c-standard": {
      "title": "A conclusion that could survive a question",
      "location": "The kitchen telephone",
      "body": [
        "Moss will reach the lodge soon. She asks what kind of conclusion you intend to give her. An observation should retain its source; an inference should say which observations support it; a serious accusation should not be dressed up as a fact merely because the household wants certainty.",
        "Choose the two commitments that would make either remaining investigative route reliable. Your answer does not decide whose guilt will be established. It decides whether the process you use can distinguish an earned conclusion from a persuasive story."
      ],
      "puzzle": {
        "prompt": "Which two standards should guide the remaining inquiry?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "Seek an independent connection to the relevant interval rather than treating motive as a complete proof.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "Preserve the source and timing of observations, including facts that weaken an attractive theory.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "Ask witnesses to adjust uncertain details until all their accounts match.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Treat a confident confession or a striking resemblance as needing no corroboration.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "c-return"
      }
    },
    "c-return": {
      "title": "The responsibility you accepted",
      "location": "The kitchen doorway",
      "body": [
        "Your first commitment now determines what you can establish directly. Ada still needs help maintaining the collection record if you chose the physical route. The waiting witnesses still need a patient listener if you chose the testimony route. You cannot acquire a secondhand observation merely by imagining how the other investigation must have gone.",
        "Moss checks that each task has someone responsible for it. She is not asking you to solve every uncertainty alone. She is asking for a useful, properly attributed contribution that can be combined with the officer’s own work. You take the pages belonging to your route and leave the others under their original names.",
        "The distinction may feel slower than gathering every possible clue. It is also what will make your eventual account different from the plausible stories already circulating in the parlor. When another person asks how you know something, you will be able to answer with an observation, a source, and a limit."
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the responsibility you chose",
          "to": "a-collection",
          "requiresFlags": [
            "route-a"
          ]
        },
        {
          "id": "continue-b",
          "label": "Continue the responsibility you chose",
          "to": "b-slip",
          "requiresFlags": [
            "route-b"
          ]
        }
      ]
    },
    "a-preserve": {
      "title": "The work before the theory",
      "location": "The study service entrance",
      "body": [
        "Ada gives you a clean notebook and the key to the unused luggage room, where objects can wait without being handled by curious guests. Moss’s instruction is modest: record what is where, prevent unnecessary traffic, and leave collection of significant traces to her. You begin with a sketch of the study entrance and the plank placed beside the runner. Every later visitor will be listed by time and purpose."
      ],
      "clues": [
        "a-preserve"
      ],
      "setFlags": [
        "route-a"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Check the runner’s first recorded condition",
          "to": "a-runner"
        }
      ]
    },
    "a-runner": {
      "title": "Before the second set of feet",
      "location": "The linen service alcove",
      "body": [
        "Rhea’s laundry ledger records this runner as issued clean at 8:58. Ada took it directly upstairs with the logs. A pale corner remains folded beneath the study table, where it has no impression. On the exposed section a broad heel has left two broken parallel bars and a small crescent-shaped gap. You draw, rather than press another object against, the visible pattern."
      ],
      "clues": [
        "a-runner"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Compare all the shared timing and access evidence",
          "to": "c-interval"
        }
      ]
    },
    "a-collection": {
      "title": "Three signatures on a packet",
      "location": "The luggage-room table",
      "body": [
        "Moss arrives through the kitchen, reads your entry log, and takes over the runner’s collection. She labels its orientation, photographs the impression beside a scale, and seals the cloth in a dry paper packet. Ada and Rhea sign only for what each actually witnessed. Neither is asked to certify the unknown source of the tread. You copy the packet number, not a declaration that it belongs to Julian."
      ],
      "clues": [
        "a-collection"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Locate the footwear used in the service corridor",
          "to": "a-shoes"
        }
      ]
    },
    "a-shoes": {
      "title": "A comparison that includes alternatives",
      "location": "The boot-drying room",
      "body": [
        "The boot room contains Ada’s narrow house shoes, Eve’s ridged walking soles, Luca’s smooth rubber overshoes, and Julian’s restoration overshoes. Moss asks permission for photographs of every pair used indoors that evening. Julian’s broad heel has a damaged pair of bars and a crescent-shaped gap where an old metal staple has lifted. The others lack that combination. Similarity deserves documentation, not an improvised press into the original trace."
      ],
      "meets": [
        "julian",
        "luca"
      ],
      "clues": [
        "a-shoes"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Check whether that pair was used during the interval",
          "to": "a-drying"
        }
      ]
    },
    "a-drying": {
      "title": "The rack was not the journey",
      "location": "The boiler-room doorway",
      "body": [
        "Julian says his overshoes were drying beside the boiler all evening. Rhea’s8:50 inspection lists them as present, but her9:09 note says one drying space was empty. Luca independently remembers seeing Julian replace the broad overshoes before the music stopped; he cannot give an exact minute. The notes narrow a claim, but only Rhea’s dated inspection provides an instrument-based time. You keep Luca’s observation in its own column."
      ],
      "clues": [
        "a-drying"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Ask for the service corridor’s cleaning record",
          "to": "a-wax"
        }
      ]
    },
    "a-wax": {
      "title": "An ordinary chore with an exact limit",
      "location": "The back stair cupboard",
      "body": [
        "Rhea cleaned a narrow patch of old polishing wax from the lower service door at 8:57, using the kitchen clock because she had just finished the hall-clock repair. Her cloth and a service note agree about the task. A fresh broad heel mark crosses the still-soft edge of the replacement finish. It is not a second proof of a death; it is another physical observation consistent with movement after that cleaning."
      ],
      "clues": [
        "a-wax"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Compare the two physical observations cautiously",
          "to": "a-physical-puzzle"
        }
      ]
    },
    "a-physical-puzzle": {
      "title": "What a matching pattern can carry",
      "location": "The evidence-packet table",
      "body": [
        "You have two timed surfaces, a documented comparison among indoor shoes, and a gap in the overshoe rack. None of them should be used to claim more than it can establish. Which conclusion gives Moss a sound line of inquiry while retaining the distinction between physical connection and final responsibility?"
      ],
      "puzzle": {
        "prompt": "Which provisional conclusion is supported?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Julian’s recorded overshoe pattern matches the timed study-runner trace and is consistent with the later service-door passage; the circumstances still require questioning.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "The blue cuff conclusively dates Julian’s study visit to after 9:00.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The rack’s8:50 entry proves the overshoes never moved again.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "A matching tread proves the exact minute and every action of its wearer.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "a-payment"
      },
      "routeLabel": "The documented-evidence investigation"
    },
    "a-payment": {
      "title": "The second page finds its first",
      "location": "The reception document safe",
      "body": [
        "Moss opens Halden’s folio with Ada observing. The missing first page describes the customer’s restricted advance and asks Julian to explain its transfer. It also offers a meeting with an independent accountant before any report is made. The surviving second page sounded like an immediate ultimatum because the offer on page one had been omitted. Motive remains relevant, but the actual dispute is now more precise than the household’s version."
      ],
      "clues": [
        "a-payment"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Check the offer against Julian’s account",
          "to": "a-meeting"
        }
      ]
    },
    "a-meeting": {
      "title": "A contradiction worth asking about",
      "location": "The parlor writing desk",
      "body": [
        "Julian told you Halden offered no way to review the accounts and demanded immediate private repayment. Moss shows him the complete letter and asks whether he had read page one before supper. He acknowledges that he had. This contradiction does not replace the physical evidence, but it gives a specific question about why he described the dispute differently. Moss records the answer without asking the room to applaud a trapped suspect."
      ],
      "clues": [
        "a-meeting"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Obtain the limits of the medical evidence",
          "to": "a-medical"
        }
      ]
    },
    "a-medical": {
      "title": "The doctor refuses a more dramatic answer",
      "location": "The kitchen doorway",
      "body": [
        "Dr. Chen reads your draft and crosses out one phrase: “the doctor proved nine-oh-seven.” He has proved no such minute. Eve’s drawing supplies a corrected 9:07 observation near a route, while Ada supplies the witnessed interval. He asks you to restore both sources and leave the face in Eve’s drawing unidentified. It is uncomfortable to weaken a sentence after finding a suspect; it is also necessary."
      ],
      "clues": [
        "a-medical"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Write the supported account without the tempting shortcuts",
          "to": "a-account"
        }
      ]
    },
    "a-account": {
      "title": "A chain with visible joints",
      "location": "The luggage-room desk",
      "body": [
        "Your report separates the witnessed interval, the automatic musical opportunity, the timed runner impression, its documented comparison, and the restricted-funds dispute. You omit a claim that the old cuff snag dates a later visit. You also omit a claim that Eve named Julian. The remaining case is less theatrical than a single perfect clue, but stronger because another person can test each joint.",
        "Moss asks you to identify which statements belong in the core account. Some observations may remain in an appendix without carrying the conclusion. Select every statement that contributes a properly limited part of the chain."
      ],
      "clues": [
        "a-account"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Choose the statements your final account can defend",
          "to": "a-final-puzzle"
        }
      ]
    },
    "a-final-puzzle": {
      "title": "Evidence, with its conditions attached",
      "location": "The inn’s evidence table",
      "body": [
        "There is no need to choose the most dramatic sentence. Select the four properly supported statements. An observation that establishes opportunity does not have to establish guilt on its own; it can still be part of a chain when its limitation is kept visible."
      ],
      "puzzle": {
        "prompt": "Which four statements belong in the documented core account?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "The newly laid runner carries a documented tread comparison with Julian’s overshoe.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "The blue thread proves a visit after nine even though the recorded snag occurred earlier.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The complete letter and account records establish a specific dispute over restricted customer money.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "The piano roll could supply music9:02–9:10 without proving Julian’s presence.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-5",
            "label": "Eve positively identified Julian’s face at an exact medically established minute.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-6",
            "label": "Ada’s checked-clock observations place the relevant interval between 9:00 and9:12.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "a-interview"
      },
      "routeLabel": "The documented-evidence investigation"
    },
    "a-interview": {
      "title": "A question asked by the right person",
      "location": "The private breakfast room",
      "body": [
        "Moss questions Julian separately, with the door closed and the household kept away. She offers the relevant documents and asks him to account for the movements rather than merely deny a conclusion. His first account changes. He acknowledges leaving the piano, going upstairs, and arguing with Halden. After further questioning he admits responsibility for Halden’s death. You hear only the officer’s summary, not private details of the interview."
      ],
      "clues": [
        "a-interview"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Hand over the original records",
          "to": "a-handover"
        }
      ]
    },
    "a-handover": {
      "title": "What stays with the case",
      "location": "The front-hall stove",
      "body": [
        "Moss takes the sealed runner, comparison photographs, clock notebook, complete demand, and workshop documents into police custody. Ada keeps copies of the household maintenance entries so the inn can continue functioning without losing its ordinary history. You add a page identifying which statements you witnessed firsthand. Other facts carry their own names. No one has to borrow your confidence to make the file look complete."
      ],
      "clues": [
        "a-handover"
      ],
      "routeLabel": "The documented-evidence investigation",
      "choices": [
        {
          "id": "continue-a",
          "label": "Wait for morning with the household",
          "to": "ending-a"
        }
      ]
    },
    "b-separate": {
      "title": "A chair outside the conversation",
      "location": "The downstairs breakfast room",
      "body": [
        "You ask Ada to give each guest a separate place to wait. This is not an interrogation, and you make no promise about what the officer will decide. The immediate purpose is to stop uncertain memories becoming a shared story. Eve agrees readily. Julian calls it unnecessary but sits in the parlor. Luca asks whether anything he says will be repeated to the whole room."
      ],
      "meets": [
        "eve",
        "julian",
        "luca"
      ],
      "clues": [
        "b-separate"
      ],
      "setFlags": [
        "route-b"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Give the porter a safe way to state a limited memory",
          "to": "b-luca"
        }
      ]
    },
    "b-luca": {
      "title": "A witness who fears the wrong thing",
      "location": "The pantry stair",
      "body": [
        "Luca took this temporary job after losing work in Julian’s former workshop. He fears that mentioning the connection will make every observation look like revenge. You write the connection at the top of his account rather than hiding it. He says he saw Julian leave the parlor by its rear door after the automatic lever was engaged. He can place this after his9:03 kitchen delivery, but not at a more exact minute."
      ],
      "clues": [
        "b-luca"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Check the shared timing before asking for an interpretation",
          "to": "c-interval"
        }
      ]
    },
    "b-slip": {
      "title": "A delivery that anchors a memory",
      "location": "The kitchen tray shelf",
      "body": [
        "The kitchen slip records Luca collecting clean cups at 9:03. Ada remembers signing it because she discovered she had run out of sugar. The slip does not record the later sighting, but it anchors the earlier chore Luca uses to place it. You ask him to distinguish the order he remembers from a minute he cannot honestly supply. He repeats the order unchanged without adding a clock reading."
      ],
      "clues": [
        "b-slip"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Listen to Eve without importing the porter’s description",
          "to": "b-sketches"
        }
      ]
    },
    "b-sketches": {
      "title": "The second account stays different",
      "location": "The glazed porch",
      "body": [
        "You do not tell Eve whom Luca says he saw. She independently describes a figure near the upper service stair, repeats that the face was hidden, and corrects her sketch using Rhea’s four-minute clock entry. Her account remains less identifying than Luca’s. You resist the temptation to make the witnesses agree more closely. Their different sightlines are precisely why they should not sound like one copied statement."
      ],
      "clues": [
        "b-sketches"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Ask Rhea about the service corridor’s ordinary use",
          "to": "b-routine"
        }
      ]
    },
    "b-routine": {
      "title": "The route people usually take",
      "location": "The service stair landing",
      "body": [
        "Rhea explains that a person carrying cups normally uses the rear stair because the front hall is narrow. That ordinary routine could explain innocent movement along part of the same corridor. She also records placing the clean runner at the study at nine. You keep the ordinary route in mind: seeing someone near the stair is more significant if another observation ties them to the study, but is not that tie by itself."
      ],
      "meets": [
        "rhea"
      ],
      "clues": [
        "b-routine"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose a fair way to test the accounts",
          "to": "b-questions"
        }
      ]
    },
    "b-questions": {
      "title": "The questions you will not ask",
      "location": "The breakfast-room doorway",
      "body": [
        "A guest suggests telling Julian that three people saw him in the study. They did not. Another suggests promising Luca that his statement will never be used. You cannot make that promise. Moss’s telephone advice is to ask narrow factual questions, disclose uncertainties, and let a witness correct their own words without supplying the desired answer."
      ],
      "clues": [
        "b-questions"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Select questions that test rather than manufacture a story",
          "to": "b-method-puzzle"
        }
      ]
    },
    "b-method-puzzle": {
      "title": "A reliable question leaves room for no",
      "location": "The pantry doorway",
      "body": [
        "You have a relative-order sighting, an independently timed sketch, and an ordinary reason someone might use the stair. Which approach can test the accounts without increasing their apparent certainty through suggestion?"
      ],
      "puzzle": {
        "prompt": "Which interview plan keeps the evidence honest?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Tell Julian that several witnesses saw the entire upstairs event.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Tell Eve that Luca named Julian and ask her to remember the coat as blue.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Ask each person separately what they directly saw, preserve their limits, and seek a new independent link to the study.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-4",
            "label": "Promise Luca that nothing he says can have consequences.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "b-draft"
      },
      "routeLabel": "The witness-led investigation"
    },
    "b-draft": {
      "title": "A rejected attempt to settle privately",
      "location": "The guest writing table",
      "body": [
        "At Moss’s request, Julian agrees to show the draft note he prepared for Halden before supper. It offers to replace the restricted customer money if Halden describes it as a private loan. The draft includes the same600-pound amount found in the workshop papers. It gives a reason for his misleading description of the dispute, but it does not establish the later visit or the death. You record both its value and its limit."
      ],
      "clues": [
        "b-draft"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Ask about the note carried upstairs",
          "to": "b-folio"
        }
      ]
    },
    "b-folio": {
      "title": "The folded note with a wet corner",
      "location": "The study’s document shelf",
      "body": [
        "Moss arrives and secures the room. Among Halden’s papers she finds a folded copy of Julian’s settlement draft. Its corner bears a fresh water mark matching the edge of the jug Ada placed on the desk during the nine-o’clock visit. Ada says the space beneath the jug was clear when she set it down. This is a limited but independent reason to question when the note reached the desk."
      ],
      "clues": [
        "b-folio"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Check a witness’s memory against the recovered note",
          "to": "b-return"
        }
      ]
    },
    "b-return": {
      "title": "A detail supplied before the discovery",
      "location": "The pantry bench",
      "body": [
        "In his first separate account, Luca mentioned seeing Julian carry a folded note with a torn left corner. You had written that description before Moss entered the study. The recovered settlement copy has that distinctive tear. Luca could have seen the note earlier; the match does not prove he watched it being delivered. It nevertheless supplies a documented connection between his initial account and an object later recovered from the room."
      ],
      "clues": [
        "b-return"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Separate a useful connection from an invented complete account",
          "to": "b-limits"
        }
      ]
    },
    "b-limits": {
      "title": "The part nobody watched",
      "location": "The quiet breakfast room",
      "body": [
        "Moss asks you to underline the gaps. Luca did not see the death. Eve did not name the figure. The draft shows an attempt to change the description of the funds, not a legal admission of every later event. Ada’s placement observation and the recovered paper support a later visit more directly than a vague claim that someone “looked guilty.” Keeping these limits makes it possible to ask Julian a concrete question."
      ],
      "clues": [
        "b-limits"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose the corroborated statements for Moss",
          "to": "b-final-puzzle"
        }
      ]
    },
    "b-final-puzzle": {
      "title": "A story that was not rehearsed",
      "location": "The breakfast-room table",
      "body": [
        "Select the four statements whose sources have been kept distinct. Their strength comes from agreement on checkable details without pretending that every witness observed the same thing. Statements supplied only by the household’s later discussion do not belong in the core account."
      ],
      "puzzle": {
        "prompt": "Which four points can Moss use as properly limited corroboration?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "Ada’s desk observation and the jug mark support later placement of that note.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "Eve positively named Julian after comparing her memory with Luca’s.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The settlement offer by itself proves what happened during the entire upstairs visit.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Luca’s separately recorded account places a parlor departure after his independently signed9:03 chore.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-5",
            "label": "Eve independently places an unidentified figure near the upper stair at corrected 9:07.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-6",
            "label": "The recovered settlement draft matches a torn-corner detail recorded before the study search.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "b-admission"
      },
      "routeLabel": "The witness-led investigation"
    },
    "b-admission": {
      "title": "The account after the question",
      "location": "The private breakfast room",
      "body": [
        "Moss questions Julian separately about the rear door, the settlement draft, and its later placement. She does not tell him that Luca watched the death. Julian first admits taking the note upstairs to argue about the funds. After Moss compares his account with the independent records, he admits responsibility for Halden’s death. The admission is recorded by the officer and checked against what she has collected."
      ],
      "clues": [
        "b-admission"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Preserve the witnesses’ own words",
          "to": "b-statements"
        }
      ]
    },
    "b-statements": {
      "title": "A witness is not a public exhibit",
      "location": "The kitchen telephone desk",
      "body": [
        "Luca asks whether the village will hear that he worked for Julian. Moss cannot promise that relevant information will stay out of a legal case. She can explain how his statement will be taken, arrange a quiet interview, and ask the household not to repeat private details as entertainment. Eve signs a drawing note that says exactly where her sightline ended. Their accounts remain recognizably their own."
      ],
      "clues": [
        "b-statements"
      ],
      "routeLabel": "The witness-led investigation",
      "choices": [
        {
          "id": "continue-b",
          "label": "Let the waiting household hear only the confirmed outcome",
          "to": "ending-b"
        }
      ]
    },
    "ending-a": {
      "title": "The file beside the stove",
      "location": "Briar Lodge at dawn",
      "body": [
        "The road begins to emerge after sunrise. Moss leaves with Julian and a dry case holding the records you helped preserve. The household does not gather at a window to watch. Ada instead puts breakfast on the long kitchen table, where several people have spent the night learning how much an ordinary clock entry can matter.",
        "Rhea asks for a copy of the corrected timeline. She wants to keep it behind the maintenance pages, not as a trophy but as an explanation of why the missing clock notice caused so much confusion. You write the four-minute correction in a hand as clear as you can manage."
      ],
      "ending": {
        "title": "Resolved through documented evidence",
        "body": [
          "You exposed the musical alibi without pretending that opportunity alone established guilt. The dated runner, documented comparisons, complete financial demand, and preserved collection record supplied a chain the officer could test before obtaining an admission. The earlier cuff snag stayed in the file as a fact that limited an attractive theory.",
          "This route changed the way the case was resolved: physical and documentary continuity carried the inquiry, while witness uncertainty remained visible rather than being repaired to fit the outcome. Ada’s inn has not become innocent of grief, but it has been spared a second invented story."
        ],
        "kind": "solved"
      }
    },
    "ending-b": {
      "title": "The drawing with its empty face",
      "location": "The glazed porch at dawn",
      "body": [
        "Eve gives Ada a copy of the porch drawing. The figure’s face remains blank. Nothing about the eventual outcome requires a witness to have seen more than she saw. Luca takes his cup to the same pantry step where he first trusted you with a careful, limited memory.",
        "Outside, the first cart reaches the lower bridge. Moss has left with Julian, the separate statements, and the recovered papers. Ada asks the household to leave the witnesses alone. For the first time since the music stopped, nobody tries to improve someone else’s account."
      ],
      "ending": {
        "title": "Resolved through independent testimony",
        "body": [
          "You combined separate observations without making them identical. The signed delivery, corrected sketch, previously recorded torn corner, and later placement of the draft gave Moss corroboration for a specific question. Julian’s admission was checked against those records, rather than accepted as a substitute for them.",
          "The underlying truth is the same on either route, but your choices changed whose trust you had to earn and what kind of proof you could responsibly hand over. This route left a stronger record of the witnesses’ limits and an explicit promise to treat their private lives as lives, not clues for a crowd."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "complete-a",
      "actions": [
        {
          "type": "choice",
          "id": "take-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-3"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
            "answer-3"
          ]
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-4"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
            "answer-4"
          ]
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-3"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
            "answer-2"
          ]
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-1"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
            "answer-3",
            "answer-4",
            "answer-6"
          ]
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        }
      ]
    },
    {
      "id": "complete-b",
      "actions": [
        {
          "type": "choice",
          "id": "take-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-3"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
            "answer-3"
          ]
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-4"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
            "answer-4"
          ]
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": "answer-3"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "choice",
          "id": "continue-a"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
            "answer-2"
          ]
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "answer",
          "id": "answer-3"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "answer",
          "id": [
            "answer-1",
            "answer-4",
            "answer-5",
            "answer-6"
          ]
        },
        {
          "type": "choice",
          "id": "continue-b"
        },
        {
          "type": "choice",
          "id": "continue-b"
        }
      ]
    }
  ]
};
