/** Original case; answer keys and route proofs are never projected into the reading interface. */
export default {
  "id": "three-black-keys",
  "title": "Three Black Keys",
  "genre": "Murder mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "A small concert hall after its closing rehearsal",
  "description": "A manager is dead behind a self-closing door, and three identical black keys have been returned. Trace the locks or challenge an apparently musical alibi.",
  "revision": 2,
  "flags": [
    "locks",
    "music"
  ],
  "characters": [
    {
      "id": "ward",
      "name": "Inspector Ward",
      "role": "Investigating officer",
      "description": "Asks for the source of a time before putting it on a board.",
      "color": "#8d9ca2"
    },
    {
      "id": "mina",
      "name": "Mina Ellis",
      "role": "Hall caretaker",
      "description": "Knows which doors close themselves and which rumors will not.",
      "color": "#aa9174"
    },
    {
      "id": "kit",
      "name": "Kit Vale",
      "role": "Pianist",
      "description": "Keeps a meticulous rehearsal notebook and dislikes being judged by a missed note.",
      "color": "#a18b9f"
    },
    {
      "id": "rhea",
      "name": "Rhea Moss",
      "role": "Stage carpenter",
      "description": "Measures a latch twice before cutting a replacement.",
      "color": "#91a088"
    },
    {
      "id": "dunn",
      "name": "Galen Dunn",
      "role": "Concert patron",
      "description": "Keeps every engagement on a small black diary card.",
      "color": "#b18e78"
    }
  ],
  "clues": [
    {
      "id": "tbk-permissions",
      "title": "The visitor permission matrix",
      "description": "K1 opens public hall;K2 opens public hall and manager’s corridor;K3 opens store passage. No visitor master was issued."
    },
    {
      "id": "tbk-issued",
      "title": "The independently retained issue numbers",
      "description": "The signed slips and retained carbon record assign K1 to Kit,K2 to Dunn,K3 to Rhea."
    },
    {
      "id": "tbk-entry",
      "title": "A timed and identified corridor entry",
      "description": "Calibrated K2 entry is 8:10; a contemporaneous usher sheet independently identifies Dunn crossing at that time."
    },
    {
      "id": "tbk-alibis",
      "title": "The two confirmed intervals",
      "description": "Independent continuous records place Kit and Rhea away during 8:08–8:14; Dunn claims he stayed outside until 8:25."
    },
    {
      "id": "tbk-meeting",
      "title": "The independently recorded appointment",
      "description": "The hall’s earlier appointment copy and accepted message schedule Dunn with the manager at 8:10."
    },
    {
      "id": "tbk-corroboration",
      "title": "A statement yields a verified new detail",
      "description": "In Ward’s recorded interview,Dunn identifies a hidden compartment containing the missing manager’s account book; officers verify it."
    },
    {
      "id": "tbk-scope",
      "title": "The supported case is cumulative",
      "description": "Access,independent identification,false absence claim,and verified new information support the police case; legal judgment remains with the proper process."
    },
    {
      "id": "tbm-player",
      "title": "A possible automatic performance",
      "description": "The player can run unattended;its test roll repeats a 32 second phrase with a specified missing note."
    },
    {
      "id": "tbm-loop",
      "title": "An actual automated interval",
      "description": "The checked motor log and exact repeating maintenance audio establish automatic playback during 8:06–8:17."
    },
    {
      "id": "tbm-claim",
      "title": "The claimant’s account conflicts with the room record",
      "description": "Dunn claims continuous playing;the supervised video shows automatic playback with the keyboard unoccupied. Rhea is independently located in the loading bay."
    },
    {
      "id": "tbm-corridor",
      "title": "An independently timed movement",
      "description": "The checked corridor camera and independent usher recognition place Dunn at the manager’s door just after the 8:10 announcement."
    },
    {
      "id": "tbm-appointment",
      "title": "The accepted private meeting",
      "description": "Dunn accepted an 8:10 manager appointment about the missing account book;an earlier clerk’s copy independently agrees."
    },
    {
      "id": "tbm-verified",
      "title": "The admission produces corroborated information",
      "description": "In a recorded police interview,Dunn names a concealed location for the account book;officers find it with a matching torn-page detail."
    },
    {
      "id": "tbm-summary",
      "title": "The supported chain beyond the alibi",
      "description": "Automatic playback defeats the claimed human presence;identified corridor movement and corroborated new information support Ward’s investigation."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A door that closes itself",
      "location": "The concert hall foyer",
      "body": [
        "Inspector Ward has secured the manager’s workroom after a fatal assault. There are no graphic details to examine. The relevant interval is 8:08 to 8:14, established by the attending professional and two independently timed communications. The room was locked when found, but Mina explains that its latch closes automatically; a person leaving would not need to turn a key. Three black visitor keys have been returned to the desk. Ward asks you to compare the access chain or a reported musical alibi, while he preserves the room and conducts the formal investigation."
      ],
      "meets": [
        "ward"
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
      "title": "What a locked door does not prove",
      "location": "The caretaker’s desk",
      "body": [
        "The hall has three visitor routes: a public hall, a store passage, and the manager’s corridor. The keys look alike but their permissions differ. Kit, Rhea, and patron Galen Dunn had legitimate reasons to be in the building. A witness heard piano music during part of the relevant interval, and one visitor claims that proves an uninterrupted presence in the rehearsal room. Ward warns that neither owning a key nor lacking a perfect alibi proves murder. The useful question is whether independent records establish a contradiction, an opportunity, and a specific connection worth putting before the officer."
      ],
      "meets": [
        "mina"
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
      "title": "Choose an investigation",
      "location": "The foyer stair",
      "body": [
        "Mina can accompany you through the locksmith’s permission records and the supervised visitor returns. Kit can instead show the rehearsal audio system before the sound technician leaves. The access route follows physical permissions and who used them; the music route tests whether hearing a performance establishes who was in the room. Both can lead Ward to the same supported suspect through different locations and a different form of proof. Choose one chain to complete, keeping guesses about personality outside the evidence."
      ],
      "meets": [],
      "choices": [
        {
          "id": "locks",
          "label": "Trace the returned keys",
          "to": "locks-0",
          "excludesFlags": [
            "music"
          ]
        },
        {
          "id": "music",
          "label": "Test the reported musical alibi",
          "to": "music-0",
          "excludesFlags": [
            "locks"
          ]
        }
      ]
    },
    "locks-0": {
      "title": "Three permissions, one color",
      "location": "The locksmith’s cabinet",
      "body": [
        "Mina opens the permission card kept by the locksmith. Key one opens the public hall only; key two opens the public hall and manager’s corridor; key three opens the store passage only. The issued-copy record shows no visitor master key. The workroom can be entered from the manager’s corridor when its inner door is open, then closes behind anyone leaving. A black finish therefore tells you nothing about access by itself. Your first task is to identify which visitor route could reach the relevant corridor, not to infer guilt from a key lying nearest a person’s name."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [
        "mina"
      ],
      "setFlags": [
        "locks"
      ],
      "clues": [
        "tbk-permissions"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "locks-1",
          "requires": []
        }
      ]
    },
    "locks-1": {
      "title": "The signed issue slips",
      "location": "The visitor desk",
      "body": [
        "Each key was issued with a detachable receipt tab. Kit signed for K1 at 7:40, Dunn for K2 at 7:45, and Rhea for K3 at 7:50. Mina’s original carbon book retains the same numbers in order, so the returned keys cannot be silently reassigned merely by moving the loose tabs. All three people returned their keys after 8:20. The slips establish custody, not use. Ward has asked you to preserve that limit: a person could hold a key and never open its door, or could enter through a legitimate invitation. The permission matrix and issue record answer a narrower first question."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "clues": [
        "tbk-issued"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "locks-2",
          "requires": [
            "tbk-permissions",
            "tbk-issued"
          ]
        }
      ]
    },
    "locks-2": {
      "title": "Which access is established?",
      "location": "The visitor desk bench",
      "body": [
        "Use the permission matrix and custody record together. Choose the visitor who held a key capable of reaching the manager’s corridor. This is a lead, not a verdict. The automatic latch explains why a locked room need not have been sealed from inside, while the different key permissions prevent the three identical black finishes from making everyone’s access look the same."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "puzzle": {
        "prompt": "Whose issued key could reach the manager’s corridor?",
        "options": [
          {
            "id": "dunn",
            "label": "Dunn’s K2,under the retained issue record and permission matrix.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "all",
            "label": "All three,because every returned key is black.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "kit",
            "label": "Kit’s K1,because the public hall shares the same building.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "rhea",
            "label": "Rhea’s K3,because a store passage must be a master route.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "locks-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "locks-0"
        }
      ]
    },
    "locks-3": {
      "title": "An entry with an independent clock",
      "location": "The corridor monitor",
      "body": [
        "The corridor access monitor records K2 opening the outer door at 8:10. Its clock was checked against the foyer time signal at 8:00 and again at 8:20. The record does not identify a face. Mina supplies a separate supervised entry sheet: the on-duty usher recognized Dunn crossing at 8:10 and wrote the name before the discovery of the crime. The monitor and witness have different limitations, but together they connect the key event to a person at a relevant time. You copy the calibration references as carefully as the dramatic-looking entry."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "clues": [
        "tbk-entry"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "locks-4",
          "requires": []
        }
      ]
    },
    "locks-4": {
      "title": "Two other places",
      "location": "The stage manager’s station",
      "body": [
        "Ward provides two independently confirmed intervals. Kit appears continuously on the rehearsal room’s supervised video from 8:07 to 8:16 while another staff member checks the piano mechanism. Rhea appears in the loading-bay delivery video from 8:05 to 8:18 beside the driver’s signed unloading record. Both intervals cover the relevant workroom window. The records do not make either person incapable of wrongdoing in every imaginable circumstance; they give concrete locations for this case. Dunn’s written account, by contrast, says he was outside the building until 8:25. You now have a specific statement to compare with the corridor evidence."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "clues": [
        "tbk-alibis"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "locks-5",
          "requires": []
        }
      ]
    },
    "locks-5": {
      "title": "The diary card’s original",
      "location": "The office evidence counter",
      "body": [
        "Under Ward’s supervision, Dunn supplies the diary card he says proves his late arrival. Its entry reads “8:25 return,” but the hall’s appointment copy made that afternoon lists a private manager meeting at 8:10. The copy bears Dunn’s accepted appointment reference, which matches a message on the manager’s preserved office system. A planned meeting does not prove attendance, but the independent 8:10 entry supplies that missing part. Ward asks you to state which evidence actually contradicts the outside-until 8:25 account rather than allowing the altered-looking diary to carry the entire case."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "clues": [
        "tbk-meeting"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "locks-6",
          "requires": [
            "tbk-alibis",
            "tbk-meeting"
          ]
        }
      ]
    },
    "locks-6": {
      "title": "Select the contradiction that matters",
      "location": "The supervised evidence table",
      "body": [
        "Choose the two independent observations that directly contradict Dunn’s claimed absence. The access monitor supplies a calibrated event; the usher’s contemporaneous recognition supplies identity. The planned appointment supports why he might enter, but a plan alone is not attendance. The keys’ identical appearance is not evidence that everyone used the same one. Your combination should establish more than a reason to be suspicious."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations directly contradict the claimed absence until 8:25?",
        "options": [
          {
            "id": "entry",
            "label": "The calibrated monitor records the relevant K2 corridor opening at 8:10.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "identity",
            "label": "The contemporaneous usher sheet independently identifies Dunn entering then.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "plan",
            "label": "A meeting was scheduled,but no attendance evidence is used.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "color",
            "label": "All keys were painted black.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "locks-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "locks-4"
        }
      ]
    },
    "locks-7": {
      "title": "A lead Ward can lawfully test",
      "location": "The foyer office",
      "body": [
        "You give Ward the permission matrix, retained issue numbers, calibrated entry, and independent identification. Ward conducts the interview himself. Confronted with the established entry rather than a guess about the keys, Dunn admits attending the manager’s private meeting and fatally attacking him during their dispute. In the same recorded statement he reveals a hidden compartment holding the manager’s missing account book. The compartment contains it, exactly where he described. Ward treats the verified new detail as corroboration and records the statement under the proper procedure. You did not need to pronounce a final legal judgment to make the investigation substantially stronger."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "clues": [
        "tbk-corroboration"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "locks-8",
          "requires": []
        }
      ]
    },
    "locks-8": {
      "title": "What the case has and has not proved",
      "location": "The foyer",
      "body": [
        "Ward explains that charging decisions will use the full police investigation. Your route has established relevant access, a false absence account, a confirmed appointment, and a recorded statement with independently verified new information. That is a far stronger case than “he had a black key.” Mina places the return tabs back in their original order. She asks what should be said to the hall staff now. You can identify the evidence given to police without releasing private records, declaring everyone with a key guilty, or treating a suspect’s confession as meaningful only because it sounds dramatic."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "clues": [
        "tbk-scope"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "locks-9",
          "requires": [
            "tbk-corroboration",
            "tbk-scope"
          ]
        }
      ]
    },
    "locks-9": {
      "title": "Give Ward your final account",
      "location": "The foyer office",
      "body": [
        "Choose the account that explains why this suspect, at this time, is supported by this route. It should preserve the distinction between permission and use, and between a planned meeting and witnessed attendance. The solved mystery is the route through the evidence, not a replacement for the legal process that follows. An accusation supported by the wrong reason can damage even a case that ultimately names the right person."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "puzzle": {
        "prompt": "Which final account accurately describes the route’s proof?",
        "options": [
          {
            "id": "cumulative",
            "label": "Dunn’s relevant entry is independently identified,his absence account is false,and his recorded statement yields verified new evidence.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "key",
            "label": "Possessing any black key alone proves murder.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "appointment",
            "label": "A scheduled meeting alone proves the fatal act.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "guilt",
            "label": "Everyone who handled a returned key must be charged together.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "locks-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "locks-7"
        }
      ]
    },
    "locks-10": {
      "title": "The keys in separate envelopes",
      "location": "The concert hall foyer",
      "body": [
        "Ward seals the three keys with their distinct issue records rather than dropping them together in a box. Dunn remains with the officers while the verified account book is added to the formal case. Kit and Rhea are told that the continuous records have established their locations during the relevant interval. You solved the locked-door puzzle through actual permissions, calibrated access, and independent identification. The door’s automatic latch explained the room; the key chain and corroborated interview explained the investigation’s direction."
      ],
      "routeLabel": "Trace the returned keys",
      "meets": [],
      "ending": {
        "title": "Solved through the access chain",
        "kind": "solved",
        "body": [
          "The room was not impossibly sealed. You followed permissions to documented use, then supplied Ward with a specific contradiction he could test and corroborate through the formal investigation."
        ]
      }
    },
    "music-0": {
      "title": "A piano heard through a wall",
      "location": "The rehearsal room",
      "body": [
        "Kit shows the hall’s automatic rehearsal player. A moving paper roll can drive the instrument without a pianist, while an ordinary live performance needs no roll. The witness outside heard music but did not see the player. A technician’s guide explains a diagnostic detail: the installed test roll repeats the same 32 second phrase without variation, including a deliberately missing note. A person could imitate a phrase, so repetition alone is not conclusive. You will need evidence that the mechanism actually operated during the relevant interval rather than merely knowing such a device exists."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [
        "kit"
      ],
      "setFlags": [
        "music"
      ],
      "clues": [
        "tbm-player"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "music-1",
          "requires": []
        }
      ]
    },
    "music-1": {
      "title": "The mechanism’s separate log",
      "location": "The sound booth",
      "body": [
        "The sound booth’s power log records the rehearsal player motor running from 8:06 to 8:17. A maintenance microphone captures the 32 second phrase and missing note in exact repeats. The log and recording have independent time checks against the foyer signal. The witness’s music therefore does not establish uninterrupted human presence at the keyboard. It also does not establish who started the machine. Kit warns you not to turn discovery of an automatic performance into an accusation against whoever understands pianos. Your first deduction should address the alibi’s evidential limit, not a culprit."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "clues": [
        "tbm-loop"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "music-2",
          "requires": [
            "tbm-player",
            "tbm-loop"
          ]
        }
      ]
    },
    "music-2": {
      "title": "What does hearing the piano prove?",
      "location": "The sound booth bench",
      "body": [
        "Choose the conclusion supported by the mechanism record and audio. A sound can be genuine while the inference about a performer is wrong. The automatic interval defeats a claim that music alone continuously locates a person, but it does not tell you where that person went or who activated the roll. You still need an independently established movement and a specific false account."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "puzzle": {
        "prompt": "What does the recorded automatic interval establish?",
        "options": [
          {
            "id": "limit",
            "label": "The music does not prove a person remained at the keyboard during that interval.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "kit",
            "label": "Kit must be guilty because Kit understands the mechanism.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "all",
            "label": "Every sound witness lied about hearing music.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "dunn",
            "label": "The power log alone proves who started the player.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "music-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "music-0"
        }
      ]
    },
    "music-3": {
      "title": "The person who claimed the music",
      "location": "The foyer waiting room",
      "body": [
        "After initially claiming he stayed outside, Dunn’s revised signed account says he stayed at the piano from 8:00 to 8:20 and that listeners can confirm it from the music. Kit’s own video instead places Kit and a technician inspecting the player’s side mechanism during much of that time, with the keyboard unoccupied. The camera does not cover every doorway, so it cannot locate Dunn after he left the room. It does establish that his account’s claimed basis is wrong. Ward also provides Rhea’s loading-bay interval covering 8:05–8:18, independently corroborated by the delivery driver’s record."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "clues": [
        "tbm-claim"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "music-4",
          "requires": []
        }
      ]
    },
    "music-4": {
      "title": "A corridor announcement in the recording",
      "location": "The sound archive desk",
      "body": [
        "The maintenance recording includes the hall’s 8:10 announcement. A separate corridor camera, normally used for delivery security, shows Dunn passing the manager’s outer door immediately afterward. Its clock has been checked against the same announcement, and the image is clear enough for the on-duty usher to identify him without being shown the suspect list first. That puts a person in a place; the medical interval supplied by Ward puts the movement at a relevant time. You preserve the original audio rather than presenting an edited dramatic clip that would hide its timing context."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "clues": [
        "tbm-corridor"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "music-5",
          "requires": []
        }
      ]
    },
    "music-5": {
      "title": "A reason to keep the manager waiting",
      "location": "The appointment desk",
      "body": [
        "The manager’s office system retains an accepted appointment message from Dunn for 8:10 concerning a missing account book. A clerk’s earlier appointment copy agrees. That motive-related topic does not prove a fatal assault, but it supplies a specific meeting that Dunn’s continuous-piano account tries to exclude. You have now moved from an unreliable auditory alibi to a verified absence from the keyboard and a relevant corridor appearance. The next deduction should combine the recorded automation with the independently identified movement, rather than leaning on what kind of music a patron might be able to play."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "clues": [
        "tbm-appointment"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "music-6",
          "requires": [
            "tbm-corridor",
            "tbm-appointment"
          ]
        }
      ]
    },
    "music-6": {
      "title": "Build the contradiction from independent observations",
      "location": "The sound booth",
      "body": [
        "Select the two observations that establish why the musical alibi cannot protect Dunn’s account. One shows that the audible performance ran automatically; the other places him at the relevant corridor instead. The fact that he likes music proves neither skill nor location. A scheduled meeting supports the context but would not, by itself, establish attendance. Your theory should explain how a real sound concealed a false inference."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations defeat Dunn’s continuous-piano account?",
        "options": [
          {
            "id": "automatic",
            "label": "The independently timed motor log and repeating audio establish automatic playback.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "movement",
            "label": "A checked camera and independent identification place Dunn at the manager’s corridor.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "taste",
            "label": "Dunn has often praised the hall’s music program.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "meeting",
            "label": "An appointment existed,but no actual movement is considered.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "music-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "music-4"
        }
      ]
    },
    "music-7": {
      "title": "A question asked by the officer",
      "location": "The supervised interview room",
      "body": [
        "Ward conducts the interview using the full recording, power log, and unedited corridor image. Dunn admits leaving the rehearsal room, attending the private meeting, and fatally attacking the manager during their dispute. He then identifies the manager’s account book in a concealed compartment he says he used afterward. Officers locate it there, including a torn page whose missing corner matches a piece preserved in the workroom. The recorded statement supplies a new checkable detail; its verification matters more than the emotional tone of the admission. Your role is to make the contradiction clear enough for lawful investigation, not to stage an amateur confrontation."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "clues": [
        "tbm-verified"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "music-8",
          "requires": []
        }
      ]
    },
    "music-8": {
      "title": "The music can remain music",
      "location": "The rehearsal room",
      "body": [
        "Kit restarts the player for its ordinary maintenance purpose. The repeated phrase sounds less sinister now that nobody is treating it as a witness with eyes. Ward has a supported case built from a false account, a relevant verified movement, and newly corroborated information. The victim’s family will receive the formal findings through the proper process. You can explain your part without making the audience’s mistaken inference shameful: hearing the music was real, but continuous human presence never followed from that sound alone."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "clues": [
        "tbm-summary"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "music-9",
          "requires": [
            "tbm-verified",
            "tbm-summary"
          ]
        }
      ]
    },
    "music-9": {
      "title": "Explain why the alibi failed",
      "location": "The hall foyer",
      "body": [
        "Choose the final account that follows your music route. It must explain the mechanism, identify the independently supported movement, and distinguish a useful contradiction from a legal verdict. The mystery was not solved by recognizing a song or disliking a patron. It was solved by asking what the sound actually measured and finding the separate evidence needed to locate a person."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "puzzle": {
        "prompt": "Which account accurately describes the solved alibi problem?",
        "options": [
          {
            "id": "evidence",
            "label": "Real automatic music supplied a false inference;verified movement and corroborated new information gave Ward a supported case.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "song",
            "label": "Recognizing the repeated melody alone identified the killer.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "fake",
            "label": "The music recording must be fabricated because no pianist is visible.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "verdict",
            "label": "An amateur investigator’s opinion replaces all further legal process.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "music-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "music-7"
        }
      ]
    },
    "music-10": {
      "title": "The last repetition",
      "location": "The sound booth",
      "body": [
        "Ward preserves the unedited recording and matched time checks with the rest of the case. Dunn’s false keyboard account no longer obscures the documented meeting, and the hidden account book gives the officers a verified detail beyond a bare accusation. Kit files a clearer notice on the rehearsal player: a performance may continue while the room is empty. You solved the case through automation, synchronized sound, and an independently identified movement, reaching the same supported suspect by a different sequence of locations from the key route."
      ],
      "routeLabel": "Test the reported musical alibi",
      "meets": [],
      "ending": {
        "title": "Solved through the false performance",
        "kind": "solved",
        "body": [
          "You separated an audible event from the person it seemed to locate. That distinction opened a different route to a corroborated police case, while preserving the original records that make the reasoning checkable."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "locks-complete",
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
          "id": "locks"
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
          "id": "dunn"
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
            "entry",
            "identity"
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
          "id": "cumulative"
        }
      ]
    },
    {
      "id": "music-complete",
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
          "id": "music"
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
          "id": "limit"
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
            "automatic",
            "movement"
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
          "id": "evidence"
        }
      ]
    }
  ],
  "contentNote": "Non-graphic murder mystery"
};
