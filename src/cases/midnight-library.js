/** Original expanded mystery with route-specific evidence and resolutions. */
export default {
  "id": "midnight-library",
  "title": "The Midnight Library",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "A rare atlas vanishes during a storm. The display is closed, someone has changed the room labels, and the trail divides between the library’s rafters and the town’s old records.",
  "setting": "A village library and its neighboring archive, just before midnight",
  "contentNote": "Estimated first-play time includes reading and deduction.",
  "revision": 2,
  "flags": [
    "roof-route",
    "paper-route"
  ],
  "characters": [
    {
      "id": "finch",
      "name": "Mrs. Finch",
      "role": "Head librarian",
      "description": "Values a careful question more than a quick accusation.",
      "color": "#bf956a"
    },
    {
      "id": "pip",
      "name": "Pip Bell",
      "role": "Evening volunteer",
      "description": "Knows the shelving marks better than the names of some streets.",
      "color": "#8fa994"
    },
    {
      "id": "iona",
      "name": "Iona Reed",
      "role": "Bookbinder",
      "description": "Mends fragile objects without pretending their history is simple.",
      "color": "#ac91b4"
    },
    {
      "id": "martha",
      "name": "Martha Gill",
      "role": "Municipal archivist",
      "description": "Can tell a loan from a gift by the small print everyone skips.",
      "color": "#94a5b3"
    },
    {
      "id": "duncan",
      "name": "Duncan Vale",
      "role": "Library trustee",
      "description": "Is used to people treating his surname as permission.",
      "color": "#b2957b"
    },
    {
      "id": "lena",
      "name": "Lena Ward",
      "role": "School caretaker",
      "description": "Keeps a notebook of names from a building people think has no history.",
      "color": "#8b9e75"
    }
  ],
  "clues": [
    {
      "id": "marks",
      "title": "The library’s movement marks",
      "description": "A circle on a room card means a movement was logged, a square means temporary shelter, and a triangle means a public display. A room number identifies a destination only when written beside a square."
    },
    {
      "id": "drops",
      "title": "Water above an empty stand",
      "description": "Drops fall inside the atlas display from the ceiling. The closed clasp and clean rectangle show the whole volume was lifted, rather than pages being pulled from it."
    },
    {
      "id": "trolley",
      "title": "The padded trolley’s path",
      "description": "A violet tie from the padded trolley catches at the display. Its wheels leave a dry stripe through dusty water on the service stair; the stripe continues upward."
    },
    {
      "id": "roof-card",
      "title": "A movement card with a condition",
      "description": "The circle beside the atlas call number logs movement at 11:43. A square beside room 6 marks temporary shelter. No public-display triangle or exit authorization appears."
    },
    {
      "id": "roof-valve",
      "title": "The wrong valve",
      "description": "The brass lever controls rainwater diversion; the iron wheel controls heating. Only the brass lever’s gutter diagram leads away from the atlas room. The iron wheel would not stop the leak."
    },
    {
      "id": "roof-safe",
      "title": "A controlled dry route",
      "description": "The gutter has been diverted and the service stair cleared. Room6 is dry; the atlas is intact in a padded cradle, with no page removed."
    },
    {
      "id": "roof-condition",
      "title": "A conservation note",
      "description": "Iona’s signed note records an intact atlas moved for storm shelter. Its loose survey insert must remain with it and cannot be flattened without a conservator."
    },
    {
      "id": "paper-copy",
      "title": "Two catalog cards with different authority",
      "description": "The public card says “gift,” but the accession ledger says “loan until the school survey is copied.” The ledger is signed by the original lender and library; the card is an unsigned later summary."
    },
    {
      "id": "paper-register",
      "title": "The shelter register",
      "description": "The library movement register records the atlas in room 6 at 11:43 under a storm-hold square. A temporary shelter entry transfers neither ownership nor public-display permission."
    },
    {
      "id": "paper-deed",
      "title": "The loan’s surviving condition",
      "description": "The lender authorized the library to retain the atlas after a copy of the school survey was deposited in the municipal archive. That copy was never entered in the deposit book."
    },
    {
      "id": "paper-survey",
      "title": "A family name on a public survey",
      "description": "The survey lists the workers who built the old school. Lena’s grandfather appears among them. She wants a copy, not possession of the atlas or removal of its insert."
    },
    {
      "id": "paper-receipt",
      "title": "A lawful way to finish the loan",
      "description": "Martha can record an approved facsimile without detaching the survey. A deposit receipt satisfies the signed condition; Duncan’s unsourced catalog summary cannot waive it."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A return after closing",
      "location": "The library steps",
      "body": [
        "Rain makes the village windows look warmer than they have any right to be. You come to return a borrowed book and find Mrs. Finch on the steps with her cardigan buttoned crookedly. The library’s oldest atlas has disappeared from its display. The case is still closed, the last visitor has gone, and a light burns above the service stairs.",
        "“I can bear a misplaced book,” she says. “I would rather not bear an invented thief.” She offers you a lamp and the movement register. The atlas contains a loose survey of the old school, which attracts people interested in family names as well as maps. You may follow the physical trail upstairs or establish the paper trail next door. First you need to understand the library’s own signs."
      ],
      "meets": [
        "finch"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "hall"
        }
      ]
    },
    "hall": {
      "title": "Not all little symbols mean the same thing",
      "location": "The main reading room",
      "body": [
        "The atlas’s display card has acquired a penciled circle. A square appears beside the number6 in the movement register. A triangle on another volume’s card marks its public exhibition. Mrs. Finch shows you the legend: circle means logged movement, square means temporary shelter, triangle means public display. An exit authorization would require a separate signed slip.",
        "The atlas’s clasp is closed. Fresh water lands on the velvet stand through a ceiling crack, and a clean rectangle remains in the dust. It looks as though somebody lifted the volume carefully rather than tearing anything from it. Yet careful movement can still hide a mistake about authority. The clues tell you where to look; they should not tell you in advance which questions to stop asking."
      ],
      "clues": [
        "marks",
        "drops"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "orientation"
        }
      ]
    },
    "orientation": {
      "title": "Read the card before the room",
      "location": "Mrs. Finch’s desk",
      "body": [
        "A room number beside the wrong symbol could send you on a useless search. Establish what the square means before treating room 6 as an accusation or an exhibition venue. The library uses these marks to keep emergency movements separate from changes in lending status.",
        "You are looking for a conclusion narrower than “everything is fine” and more useful than “someone has stolen it.” If the atlas was sheltered, it still needs to be found and checked. If a loan condition was misunderstood, moving it to a safe place does not remove that condition. The best reading keeps those questions open while giving you a genuine lead. Mrs. Finch waits without pointing to the right line of the legend; she wants you to be able to explain the choice to the next worried visitor."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "What does a square beside room 6 establish?",
        "options": [
          {
            "id": "shelter",
            "label": "Room6 is recorded as a temporary shelter destination; it says nothing by itself about ownership.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "gift",
            "label": "The atlas has become an unconditional gift.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "display",
            "label": "Room6 is open for public display tonight.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "exit",
            "label": "Someone has authorization to take the atlas outside.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          }
        ],
        "correctTo": "choice"
      }
    },
    "choice": {
      "title": "Two ways through the same puzzle",
      "location": "The service-stair landing",
      "body": [
        "A violet thread catches on the stair rail. Upstairs, you hear a chair scrape. Across the courtyard, the municipal archive still has a lamp in its reading room. Mrs. Finch can spare you for one trail before the storm worsens. The other will be checked by the morning staff.",
        "Following the building means taking responsibility for a conservation problem: discover how the volume moved and make its return safe. Following the records means resolving who may authorize its use and why someone has been asking about its survey. Neither path requires a villain to justify a mystery. Your choice will determine whom you meet, which rooms you enter, and what sort of solution you can offer before midnight."
      ],
      "choices": [
        {
          "id": "rafters",
          "label": "Follow the trolley upstairs and make the atlas safe",
          "to": "r00",
          "excludesFlags": [
            "paper-route"
          ]
        },
        {
          "id": "papers",
          "label": "Cross to the archive and trace the atlas’s conditions",
          "to": "p00",
          "excludesFlags": [
            "roof-route"
          ]
        }
      ]
    },
    "r00": {
      "title": "A stripe through the dust",
      "location": "The service stairs",
      "body": [
        "Pip Bell waits halfway up with a stack of towels. He is embarrassed because he saw the trolley pass but did not ask what it carried. A violet thread on its padded side matches the one caught below. Through dusty water on the stairs, its wheels have left a narrow dry stripe.",
        "The stripe continues upward rather than back toward the public door. Pip shows you his own earlier journey carrying a dictionary: that mark is wet and wider because the trolley had no padding on that side then. Different marks can share a cause without sharing a time. You copy the two observations separately. Following the fresher stripe brings you toward the bindery, where a lamp is burning behind a half-open door."
      ],
      "meets": [
        "pip"
      ],
      "clues": [
        "trolley"
      ],
      "setFlags": [
        "roof-route"
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r01"
        }
      ]
    },
    "r01": {
      "title": "The room beneath the roof",
      "location": "The upstairs bindery",
      "body": [
        "Iona Reed stands between pressing boards, holding a folded conservation card. She moved a threatened volume, she says, and then came back for a dry cradle. Before explaining more, she asks you to look at the movement card and tell her which entry records a destination and which merely says something happened.",
        "The atlas call number has a circle at 11:43. Beside it sits a square and room 6. There is no triangle and no signed exit slip. The distinction rules out a public exhibition or authorized removal from the building, but it does not prove that the book has been left in ideal conditions. A roof can leak above more than one room. Iona needs help checking the water path before carrying anything heavy over the service stair."
      ],
      "meets": [
        "iona"
      ],
      "clues": [
        "roof-card"
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r02"
        }
      ]
    },
    "r02": {
      "title": "Follow movement without inventing permission",
      "location": "The bindery card table",
      "body": [
        "Pip wants to announce that the atlas cannot have been stolen because the register contains its number. Iona stops him gently. A record is a claim with a source, not a substitute for looking. What it establishes is a destination to check and a purpose the person entering it declared.",
        "Select the two observations that make a careful temporary movement more likely than a public exit. Neither says that the volume is already safe. The physical trail and the signed record support one another without being identical. If the atlas is found damaged, those same records may be necessary to determine what went wrong. You are building a method for checking the book, not an excuse for leaving it unchecked."
      ],
      "routeLabel": "Through the rafters",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two observations support following a shelter movement upstairs?",
        "options": [
          {
            "id": "trail",
            "label": "The fresh padded-trolley stripe continues upward rather than toward the public exit.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "record",
            "label": "The square names room 6 as temporary shelter and no exit slip is signed.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "circle",
            "label": "A circle alone guarantees a book cannot be missing.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "person",
            "label": "Pip’s embarrassment proves he authorized a public exhibition.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          }
        ],
        "correctTo": "r03",
        "wrongFeedback": "That combination overlooks a restriction in the records. Compare the stated source and the physical observation.",
        "minSelections": 2,
        "maxSelections": 3
      }
    },
    "r03": {
      "title": "A corridor with two taps",
      "location": "The roof service corridor",
      "body": [
        "The corridor has an iron wheel and a brass lever. Old buildings rarely label their mechanisms in the language of a person arriving with wet shoes and a borrowed lamp. Iona finds the maintenance sketch: the iron wheel controls heating, while the brass lever diverts roof rainwater into an outside downpipe.",
        "Turning off heat would stop neither the current leak nor water collecting in the gutter. Turning the brass lever without first checking the overflow could send water onto the service stair. You ask Pip to hold the lamp while you read the arrows. The problem is practical and sequential: inspect the drain, move loose objects from below, then use the control whose diagram actually connects to the threatened room."
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r04"
        }
      ]
    },
    "r04": {
      "title": "Where the arrows go",
      "location": "The covered gutter hatch",
      "body": [
        "The downpipe is open. Leaves caught above the gutter, however, have made a shallow reservoir behind the branch leading toward room 6. Iona clears them with the maintenance pole while you keep the hatch secured. There is no need to climb onto wet tiles or risk a fall for the satisfaction of discovering something personally.",
        "The sketch’s arrows run from the brass lever toward the open downpipe. The heating loop beside the iron wheel never crosses the gutter line. Pip reads the labels aloud, and you check them again against what is physically connected. The right action should account for both documents and observed pipes. You are not choosing the object that looks oldest or most important, only the one that can change the relevant flow."
      ],
      "clues": [
        "roof-valve"
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r05"
        }
      ]
    },
    "r05": {
      "title": "A small engineering deduction",
      "location": "The rainwater controls",
      "body": [
        "There are four proposed ways to deal with the leak. Only one uses the observed system and the precautions you have already taken. A dramatic intervention that leaves the water path unchanged is still a wrong intervention.",
        "The atlas’s location now matters less than the route by which it can be moved safely. If you rush it across the stair before diverting the gutter, you may create the very damage you came to prevent. The maintenance sketch contains enough information; no special knowledge of old plumbing is expected. Trace its labeled arrows and remember which obstacle was removed at the hatch. This is the point where a correct explanation becomes a sequence of actions rather than a guess about a person."
      ],
      "routeLabel": "Through the rafters",
      "puzzle": {
        "mode": "single",
        "prompt": "What safely changes the flow threatening room 6?",
        "options": [
          {
            "id": "divert",
            "label": "With the outlet checked and the obstruction cleared, use the brass rainwater lever before moving the atlas.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "heat",
            "label": "Close the iron heating wheel and assume the gutter will empty.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "carry",
            "label": "Carry the atlas first, leaving the water above its route unchanged.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "roof",
            "label": "Climb the wet roof instead of using the accessible labeled controls.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          }
        ],
        "correctTo": "r06"
      }
    },
    "r06": {
      "title": "A dry crossing",
      "location": "The service-stair landing",
      "body": [
        "Water stops feeding the leak, though old drops continue to fall from saturated plaster. You wait until the stair has been dried and cordoned. This is a brief practical check, not a clock imposed on the player: Pip tests the steps with a towel and confirms that no fresh stream is crossing the planned route.",
        "Iona brings the padded cradle. The trolley’s violet tie has frayed enough to be replaced before the heavy volume travels again. Those details explain the earlier thread without making it a clue to a nonexistent thief. The book has not yet appeared, but your explanation of its journey has become specific. You know which record to follow, which physical marks support it, and which conditions need to change before reversing the movement."
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r07"
        }
      ]
    },
    "r07": {
      "title": "Room six",
      "location": "The former map classroom",
      "body": [
        "Room6 is a former classroom with a wide workbench. Beneath a clean sheet, the atlas rests in a cradle. Its clasp is unbroken, its boards are dry, and the loose school survey remains inside. Iona compares its current condition with the note she wrote at 11:43.",
        "The survey is curled along an old fold. Pip suggests pressing it flat beneath the nearest board, wanting to be helpful. Iona points to the conservation note: that insert should remain with the volume and should not be flattened without preparation. You have found the missing atlas, but finding an object is not the same as knowing how to handle it. The last part of your route concerns what a successful return ought to preserve."
      ],
      "clues": [
        "roof-safe"
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r08"
        }
      ]
    },
    "r08": {
      "title": "A note written before the worry",
      "location": "The classroom workbench",
      "body": [
        "Iona’s note describes the atlas intact at removal, the survey’s old fold, and the leak above the display. Its time precedes Mrs. Finch’s discovery of the empty stand. It explains the careful trolley movement and gives you a condition check that was not invented after you arrived.",
        "There is a space for a second signature when the volume is returned. You can fill it honestly only for things you have checked: the volume is intact now, the return route is controlled, and the loose insert has not been forced apart. You cannot sign that the roof is permanently repaired or that every future display condition has been met. The difference between temporary safety and permanent repair deserves the same care as the difference between a shelter card and an ownership document."
      ],
      "clues": [
        "roof-condition"
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r09"
        }
      ]
    },
    "r09": {
      "title": "What should go back?",
      "location": "The former classroom",
      "body": [
        "Mrs. Finch has sent word that visitors are asking whether the atlas can be displayed immediately. Your solution should return the library’s knowledge of its book, not merely put a heavy object back beneath a leaking ceiling. The display area must remain closed until a permanent repair is checked.",
        "Select the actions supported by the condition note. The survey is part of the volume’s recorded contents, even though it is loose. A school’s curiosity about a family name is not permission to tear it free. The atlas can be rehoused in a dry, documented place while the public card explains its temporary absence. None of that prevents a future authorized facsimile. It simply avoids solving one small mystery by creating another record nobody can trust."
      ],
      "routeLabel": "Through the rafters",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two actions make a responsible return?",
        "options": [
          {
            "id": "intact",
            "label": "Keep the loose survey with the atlas and follow its conservation restriction.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "dry",
            "label": "Record the condition and rehouse the atlas away from the unrepaired display leak.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "press",
            "label": "Flatten the old survey immediately beneath any heavy board.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "display",
            "label": "Return the atlas under the dripping ceiling because a found object is automatically safe.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          }
        ],
        "correctTo": "r10",
        "wrongFeedback": "That combination overlooks a restriction in the records. Compare the stated source and the physical observation.",
        "minSelections": 2,
        "maxSelections": 3
      }
    },
    "r10": {
      "title": "A replacement tie",
      "location": "The bindery doorway",
      "body": [
        "Pip cuts a fresh violet tie for the trolley and logs why the old one was removed. It is a tiny piece of recordkeeping, but tomorrow’s worker will not have to invent an explanation for another stray thread. Iona and Pip move the cradle together while you keep the lamp ahead of the wheels.",
        "Downstairs, the empty display acquires a clear sign: temporarily rehoused after water damage to the ceiling; volume checked intact. It does not claim the storm has finished or the roof has healed. Mrs. Finch reads it twice and smiles. The words are not especially grand, but they are precisely what an anxious library needs: a statement that can be believed without requiring anyone to stop asking reasonable questions."
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r11"
        }
      ]
    },
    "r11": {
      "title": "A story told without a thief",
      "location": "Mrs. Finch’s desk",
      "body": [
        "You explain the trail from the closed clasp through the padded trolley’s marks to the shelter entry and the dry cradle. The explanation accounts for the physical observations and for the temporary gap in communication. It does not accuse Iona of theft or excuse the fact that a clearer message would have saved Mrs. Finch a worrying half hour.",
        "Iona agrees to add a second notification method for future emergency movements. Pip volunteers to check the slate by the desk before checking the dramatic possibilities in his imagination. Your route has resolved the mystery through conservation and a measured reconstruction of movement. Other questions about the survey’s history remain for the archive, but the atlas’s immediate safety is no longer an open question."
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r12"
        }
      ]
    },
    "r12": {
      "title": "The last entry of the night",
      "location": "The main reading room",
      "body": [
        "Mrs. Finch writes your name beside the condition check and asks if you still want to return the book that brought you here. You had almost forgotten it. Its ordinary due-date slip looks reassuring after so many more consequential pieces of paper.",
        "Before closing the register, you write one last distinction: the atlas was moved for shelter, and its safe recovery required more than recognizing the mark. The route, the water controls, and the handling note all mattered. Someone following a different trail could have resolved the question of permission and historical access instead. You followed the building and restored a reliable account of where the book belongs tonight. Outside, the rain has softened to the sound of fingers turning pages."
      ],
      "routeLabel": "Through the rafters",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "r13"
        }
      ]
    },
    "r13": {
      "title": "A place out of the rain",
      "location": "The dry map room",
      "body": [
        "The atlas sleeps behind a new handwritten label while the public display remains closed for repair. Pip puts the old violet tie in a small envelope instead of throwing away the end of the story. Iona signs the condition note and begins clearing her bench.",
        "Mrs. Finch turns out the last unnecessary lamp. The library has not acquired a sensational theft to tell the village. It has acquired better emergency records, a safer route for its oldest book, and an evening in which three people learned how easily a sensible action can look mysterious when its explanation arrives late."
      ],
      "routeLabel": "Through the rafters",
      "ending": {
        "title": "Case closed: the safe return",
        "kind": "solved",
        "body": [
          "Your conservation route finds the atlas intact, controls the building risk, and returns it to documented safe storage. The answer came through the rafters and the movement trail, not an accusation."
        ]
      }
    },
    "p00": {
      "title": "Across the wet courtyard",
      "location": "The municipal archive",
      "body": [
        "Martha Gill admits you through a side door between two cupboards of council minutes. She knows the atlas because its public card says it was a gift from the Vale family. Her accession ledger says something more specific: it was loaned until a copy of the school survey could be deposited in the archive.",
        "Those statements are not automatically compatible. A gift suggests ownership transferred without a remaining condition; this loan specifies an event that must occur first. Martha asks you to check the authority of each record before choosing the one you prefer. The public card is an unsigned later summary. The ledger carries the lender’s signature and the library’s acknowledgment. The discrepancy is a lead toward unfinished business, not proof of a secret theft tonight."
      ],
      "meets": [
        "martha"
      ],
      "clues": [
        "paper-copy"
      ],
      "setFlags": [
        "paper-route"
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p01"
        }
      ]
    },
    "p01": {
      "title": "The lender’s small print",
      "location": "The accession ledger desk",
      "body": [
        "The original entry names a survey folded inside the atlas, drawn when the old village school was built. The lender wanted the names of its workers preserved publicly, so that a future family would not need special permission to discover them. Until a facsimile was deposited, the atlas remained a loan.",
        "A later cataloger reduced the whole entry to the word “gift.” No date or receipt for the required deposit appears beside that summary. Martha points to the signature column, then lets you compare it without further guidance. A tidy card may be easier to read than a signed ledger, but ease of reading does not give it greater authority. You must decide which record can establish the condition and which merely repeats an interpretation."
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p02"
        }
      ]
    },
    "p02": {
      "title": "Which record can change a condition?",
      "location": "The archive comparison table",
      "body": [
        "You are asked to choose the record that should govern your next inquiry. The problem is not whether an old book is always more trustworthy than a new one. The relevant distinction is between an agreement acknowledged by the parties and an unsigned summary of that agreement.",
        "If a later record showed the condition had been fulfilled, it could change the situation. You have not found such a record yet. A later date by itself does not supply the missing deposit. Select the interpretation that retains the actual condition and gives you something testable to seek: the facsimile and its receipt. You should not accuse anyone of bad faith merely because shorthand has outlived the context that once made it understandable."
      ],
      "routeLabel": "Through the paper trail",
      "puzzle": {
        "mode": "single",
        "prompt": "Which record establishes the atlas’s current loan condition?",
        "options": [
          {
            "id": "signed",
            "label": "The signed accession agreement, unless a later deposit record shows its condition was fulfilled.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "card",
            "label": "The unsigned card automatically cancels every earlier condition.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "age",
            "label": "Whichever document is oldest, regardless of signatures or subject.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "wish",
            "label": "Whichever wording makes tonight’s exhibition easier.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          }
        ],
        "correctTo": "p03"
      }
    },
    "p03": {
      "title": "An important surname at a small desk",
      "location": "The library trustees’ room",
      "body": [
        "Duncan Vale has been arranging tomorrow’s donors’ visit. He recognizes his grandfather’s signature in the ledger and admits he repeated the word “gift” from the catalog card without checking it. He had asked Iona to prepare the atlas for display, but she replied that a conservation issue and a documentary condition needed attention first.",
        "He is embarrassed, then defensive, then willing to listen. None of those stages proves he removed the book. He has no signed exit authorization and says he never entered the service stair. Mrs. Finch’s message confirms a storm-hold square beside room 6 at 11:43. The temporary movement and the unfinished loan are separate questions that crossed at an inconvenient hour. You write them in separate columns so neither becomes an explanation for everything."
      ],
      "meets": [
        "duncan"
      ],
      "clues": [
        "paper-register"
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p04"
        }
      ]
    },
    "p04": {
      "title": "A book and a promise",
      "location": "The trustees’ minute shelf",
      "body": [
        "The trustees’ minutes contain an old resolution to arrange a photographic copy of the survey. A resolution is an intention, not a receipt. The next meeting lists roof repairs, and the copying proposal quietly disappears. There is no scandal written between the lines, only ordinary work that was never completed.",
        "Duncan offers to sign a new note calling the atlas an outright gift. Martha explains that he cannot waive a recorded condition simply by being the lender’s descendant; the trustees must verify his authority, and doing so tonight would not preserve the survey publicly. Fulfilling the original modest promise is both clearer and more useful. Before recommending that course, you should check whether the required copy already sits somewhere under a different catalog heading."
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p05"
        }
      ]
    },
    "p05": {
      "title": "The receipt that never arrived",
      "location": "The archive deposit book",
      "body": [
        "Martha searches under the survey’s title, the school’s name, the lender’s surname, and the year. The deposit book is complete for that period, with numbered receipts and no missing leaves. There is no matching facsimile. The fact that the original remains inside the atlas does not meet a requirement for a publicly accessible copy.",
        "A school caretaker named Lena Ward has made several recent inquiries about the workers’ names. She asked for a copy and was directed to the library; the library directed her back to the archive. Her repeated visits are now being described as suspicious persistence. You have enough context to consider another possibility: a person might keep asking a question because two institutions keep sending her away without answering it."
      ],
      "clues": [
        "paper-deed"
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p06"
        }
      ]
    },
    "p06": {
      "title": "Two questions that should stay separate",
      "location": "The archive catalog drawers",
      "body": [
        "Choose the two conclusions the paper trail supports. One concerns tonight’s temporary movement. The other concerns the historical condition. A shelter entry cannot convert a loan into a gift, and the failure to deposit a survey does not prove that the atlas was stolen during the rainstorm.",
        "Both questions can be resolved without inventing a culprit to connect them. The movement register supplies a safe location to verify through Mrs. Finch. The deposit book supplies an unfinished obligation with an attainable remedy. If you merge them, Duncan’s embarrassed exhibition plans may look like an admission and Lena’s inquiries may look like preparation for theft. If you separate them, you can ask what each person actually needs and which document can authorize it."
      ],
      "routeLabel": "Through the paper trail",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two conclusions fit the independently checked records?",
        "options": [
          {
            "id": "shelter",
            "label": "The storm-hold entry records temporary shelter in room 6, not a change of ownership.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "unfinished",
            "label": "The required public facsimile has not been deposited, so the signed loan condition remains unfinished.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "thief",
            "label": "Lena’s repeated inquiries prove she took the atlas tonight.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "gift",
            "label": "An unsigned summary and a shelter mark together erase the original agreement.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          }
        ],
        "correctTo": "p07",
        "wrongFeedback": "That combination overlooks a restriction in the records. Compare the stated source and the physical observation.",
        "minSelections": 2,
        "maxSelections": 3
      }
    },
    "p07": {
      "title": "The names a school forgot",
      "location": "The old school caretaker’s room",
      "body": [
        "Lena sits beside a stove with a box of school photographs. She has been trying to identify the people who built the original classrooms, including her grandfather. The survey inside the atlas lists the contractors and workers together, an unusual record of people often absent from donors’ histories.",
        "She wants a facsimile she can show at the school’s anniversary. She does not want to own the atlas, remove its insert, or have anyone accused on her behalf. When you explain the old loan condition, she laughs with tired surprise: the copy she has been requesting is exactly what should have been provided decades ago. Her persistence now has a documented purpose. You may still verify what she says, but it no longer needs to carry a sinister meaning simply because nobody at the library answered her clearly."
      ],
      "meets": [
        "lena"
      ],
      "clues": [
        "paper-survey"
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p08"
        }
      ]
    },
    "p08": {
      "title": "A photograph with a date",
      "location": "The school assembly hall",
      "body": [
        "Lena shows you the anniversary notice, printed before tonight’s storm, and the request she sent to the library last month. The request specifies a copy of the workers’ portion, with permission and credit. It offers to pay the archive’s usual reproduction charge. The wording supports her stated purpose without depending on your impression of her kindness.",
        "Duncan arrives with Mrs. Finch’s confirmation that the atlas is intact in room 6. Iona has kept the survey with it and recorded its old fold. The book is not available to be pressed flat casually for a convenient photograph. A solution must preserve the original as well as the promise. You have reached a practical question of reproduction and deposit, rather than a choice between refusing access forever and tearing a fragile piece of history free."
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p09"
        }
      ]
    },
    "p09": {
      "title": "A copy that does not take anything away",
      "location": "The archive reproduction bench",
      "body": [
        "Martha has a cradle camera that can photograph the survey while it remains supported in the open atlas. Iona can supervise the handling once the conservation restriction is checked. The archive can issue a numbered deposit receipt for the facsimile, record the lender’s acknowledgment, and supply the school with an approved copy.",
        "The procedure does not require a retroactive statement that the condition was always fulfilled. It records fulfillment now, openly. Duncan agrees to bring the result to the trustees rather than signing a private waiver nobody could later audit. Lena agrees that her school display will credit the atlas and the archive, not imply ownership of the original. All three have given something up: speed, unilateral authority, or the convenience of a loose sheet. What remains is a solution another person can understand and repeat."
      ],
      "clues": [
        "paper-receipt"
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p10"
        }
      ]
    },
    "p10": {
      "title": "Finish the promise, keep the book",
      "location": "The reproduction bench",
      "body": [
        "The final deduction asks which actions actually fulfill the signed condition while respecting the object. Select two. A note calling the book a gift would avoid the question; detaching the survey would change the original; displaying an uncataloged photograph without a deposit receipt would leave the same institutional gap for the next visitor.",
        "You have the loan wording, the complete deposit book, the conservation restriction, and a feasible supported-camera method. There is enough information to resolve the practical problem without a specialist’s secret knowledge. The right combination should leave both the original volume and the public record more secure than you found them. The answer is not merely that everyone should agree to be nicer. It is a particular set of verifiable actions that will stop the school and library sending each other’s questions around in circles."
      ],
      "routeLabel": "Through the paper trail",
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two actions fulfill the agreement without damaging the original?",
        "options": [
          {
            "id": "copy",
            "label": "Make an authorized supported-camera facsimile while keeping the survey with the atlas.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "deposit",
            "label": "Enter that facsimile in the archive with a numbered deposit receipt and provide the approved school copy.",
            "correct": true,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "waive",
            "label": "Replace the signed condition with Duncan’s unsourced private note.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          },
          {
            "id": "detach",
            "label": "Detach and flatten the old survey for the quickest possible display.",
            "correct": false,
            "feedback": "Compare the observation with the library’s written rules; a plausible story must fit both."
          }
        ],
        "correctTo": "p11",
        "wrongFeedback": "That combination overlooks a restriction in the records. Compare the stated source and the physical observation.",
        "minSelections": 2,
        "maxSelections": 3
      }
    },
    "p11": {
      "title": "A receipt with somewhere to go",
      "location": "The archive front desk",
      "body": [
        "Martha writes a new accession number in the deposit book, leaving the earlier pages untouched. The receipt will travel with copies to the library, the trustees, and the school. Nobody has to pretend that a promised task happened decades ago. Its lateness remains part of the record, alongside the fact that it has now been completed.",
        "Lena checks the spelling of the workers’ names from the supported image. Duncan reads a name he remembers from a family story and realizes that donors are only one part of a building’s history. Mrs. Finch telephones to say the atlas is safely housed away from the wet display. You have resolved its apparent disappearance through paperwork and purpose: the shelter movement is accounted for, and the question that drew a persistent visitor to it has finally received a lawful answer."
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p12"
        }
      ]
    },
    "p12": {
      "title": "An opening with better labels",
      "location": "The library’s dry map room",
      "body": [
        "The atlas returns to view only after its safe housing has been checked. A new label distinguishes the original loan, the temporary storm movement, and the completed facsimile deposit. It is longer than the old word “gift” but leaves fewer traps for a person trying to do the right thing.",
        "Lena’s anniversary display will use the approved copy, not a borrowed original carried through rain. Duncan will explain the corrected record to the donors himself. Mrs. Finch thanks you for allowing a mystery to have an answer more useful than an accusation. You took the route through the town’s records and found a promise with a practical ending. Upstairs, the building’s caretakers are still finishing the conservation work that another route would have made your immediate responsibility."
      ],
      "routeLabel": "Through the paper trail",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "p13"
        }
      ]
    },
    "p13": {
      "title": "A place for the missing names",
      "location": "The archive reading room",
      "body": [
        "The first public copy sits in a clean folder under its accession number. Lena slips her grandfather’s photograph beside her own approved school print, keeping personal memory and public evidence clearly distinguishable. The atlas remains intact, and its recorded conditions no longer depend on one librarian remembering the small print.",
        "As Martha turns down the lamp, she asks whether you would like the receipt number for your notebook. You do. It is a pleasantly undramatic ending: a thing found, a promise finished, and the next curious person given a path that will actually lead somewhere."
      ],
      "routeLabel": "Through the paper trail",
      "ending": {
        "title": "Case closed: the promise in the ledger",
        "kind": "solved",
        "body": [
          "Your archive route accounts for the storm movement and fulfills the atlas’s surviving loan condition through an authorized public facsimile. A persistent inquiry becomes access, not an accusation."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "rafters",
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
          "type": "answer",
          "id": "shelter"
        },
        {
          "type": "choice",
          "id": "rafters"
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
            "trail",
            "record"
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
          "id": "divert"
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
            "intact",
            "dry"
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
        }
      ]
    },
    {
      "id": "archive",
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
          "type": "answer",
          "id": "shelter"
        },
        {
          "type": "choice",
          "id": "papers"
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
          "id": "signed"
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
            "shelter",
            "unfinished"
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
            "copy",
            "deposit"
          ]
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    }
  ]
};
