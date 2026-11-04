/** Original expanded mystery with route-specific evidence and resolutions. */
export default {
  "id": "seven-postcards",
  "title": "Seven Postcards",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "Seven postcards arrive together from a friend nobody has seen for days. Their pictures belong to different seasons, their postmarks form a different order, and one ordinary sentence seems to be a set of directions.",
  "setting": "A coastal post office, the old harbor, and an island archive",
  "contentNote": "Estimated first-play time includes reading and deduction.",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "elin",
      "name": "Elin Marsh",
      "role": "Recipient of the postcards",
      "description": "Knows a friend’s handwriting but is careful about confusing familiarity with certainty.",
      "color": "#b49a7f"
    },
    {
      "id": "arlo",
      "name": "Arlo Penn",
      "role": "Harbor master",
      "description": "Keeps tide tables beside passenger records and never treats the two as interchangeable.",
      "color": "#8da8ad"
    },
    {
      "id": "iris",
      "name": "Iris Rowan",
      "role": "Archive photographer",
      "description": "Has been making copies of records other people assumed nobody wanted to read.",
      "color": "#9b94ad"
    },
    {
      "id": "bea",
      "name": "Bea Lambert",
      "role": "Postmistress",
      "description": "Can explain which marks traveled with a card and which were added later.",
      "color": "#a5967b"
    },
    {
      "id": "len",
      "name": "Len Ash",
      "role": "Island archive steward",
      "description": "Believes public evidence and private addresses need not be published together.",
      "color": "#8fa27f"
    }
  ],
  "clues": [
    {
      "id": "cards",
      "title": "Seven dates and seven back words",
      "description": "By postmark date from3November to9November, the back words read KEEP, THE, COPY, WHERE, WINTER, LIGHT, FALLS. The printed picture numbers use a different order and the seasonal photographs are older stock."
    },
    {
      "id": "limits",
      "title": "What the postcards do not establish",
      "description": "Genuine handwriting and a dated cancellation can support authorship and posting. Neither alone proves the writer’s present location or that the photographed season is current."
    },
    {
      "id": "window",
      "title": "The marked reading window",
      "description": "The harbor plan shows the old signal house’s south-facing winter reading window. The west boathouse window receives afternoon light but is not the building marked as a reading room."
    },
    {
      "id": "crossing",
      "title": "A crossing during the safe interval",
      "description": "The harbor table permits a supervised departure 12:00–12:15 and gives a twenty-minute crossing. The island gate closes 12:40. A 12:10 departure reaches 12:30; a 12:25 departure is outside the safe interval."
    },
    {
      "id": "landing",
      "title": "An independently recorded arrival",
      "description": "Iris’s name appears on a signed island arrival record after the last postcard’s cancellation. The steward checked her identification and retained the work permit reference."
    },
    {
      "id": "consent",
      "title": "A safe-contact instruction",
      "description": "Iris’s written instruction permits Elin to receive confirmation of safety and a copy of the archive evidence. It does not permit publication of her temporary address."
    },
    {
      "id": "island-copy",
      "title": "The protected second copy",
      "description": "The signal-house packet duplicates a ferry-contract record whose original has been threatened with disposal. Its reference numbers can be checked without treating a postcard riddle as legal proof."
    },
    {
      "id": "cancel",
      "title": "A real cancellation in a delayed bag",
      "description": "The numbered post-office dispatch book confirms the cards were canceled on the stated dates, then delayed together by a damaged mailbag. The picture-stock print date has a different purpose."
    },
    {
      "id": "permission",
      "title": "A controlled forwarding request",
      "description": "Iris filed a forwarding request and safe-contact permission with the postmistress. It allows a welfare confirmation and archive copies to Elin, not disclosure of the island lodging address."
    },
    {
      "id": "register",
      "title": "The archive’s reference match",
      "description": "The threatened contract’s dates, parties, and reference numbers match the archive register and Iris’s independently deposited photographic copy."
    },
    {
      "id": "welfare",
      "title": "A current, independently checked message",
      "description": "Bea contacts the island steward using the public directory number, not a number supplied only by the postcards. Iris confirms a private detail Elin requested and authorizes a safety message."
    },
    {
      "id": "public-proof",
      "title": "Evidence without an address",
      "description": "A certified archive copy can preserve the disputed ferry terms publicly while redacting Iris’s current lodging details. Her location is not needed to verify the contract’s reference chain."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "All seven on the same morning",
      "location": "Elin’s coastal sitting room",
      "body": [
        "Elin Marsh has arranged seven postcards around a cold cup of tea. They arrived in one bundle, each in Iris Rowan’s handwriting, though nobody in their shared circle has seen Iris for several days. One picture shows blossom; another shows winter surf; a third carries a summer crowd. Elin fears the changing seasons mean something has happened to the sender.",
        "You notice the postal cancellations before choosing a dramatic explanation. Iris photographs old coastal records for an island archive and often buys whatever postcard stock a village shop has left. The pictures may not be a clock. Elin asks you to help make sense of the sequence and, if possible, establish that her friend is safe without turning a private life into a public spectacle."
      ],
      "meets": [
        "elin"
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
      "title": "Two sequences on seven pieces of card",
      "location": "Elin’s writing desk",
      "body": [
        "Each card has a printed picture number and a dated cancellation. The back carries one emphasized word. Arranged by postal dates3November through9November, the words are KEEP, THE, COPY, WHERE, WINTER, LIGHT, FALLS. Arranged by the printed picture numbers, they make no grammatical instruction. The photographs’ stock dates are older still.",
        "Elin confirms that Iris often asks her to preserve a copy when an archive original is at risk. That familiarity may help interpret the sentence, but it does not prove Iris’s present location. You separate three questions: which order the postal records support, what the sentence might direct someone to do, and how current safety could be checked independently. Answering the first should not let you pretend the other two are already settled."
      ],
      "clues": [
        "cards",
        "limits"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "opening-question"
        }
      ]
    },
    "opening-question": {
      "title": "Let the marks answer their own question",
      "location": "The postcard comparison table",
      "body": [
        "The cards’ old pictures are unsettling because they look like seven contradictory moments. Yet a stock photograph’s season is not the date its blank reverse was written. The cancellation dates describe posting; the print numbers describe a publisher’s catalog. Neither kind of mark becomes more authoritative merely because its sequence is easier to notice.",
        "Choose the method that produces a supported order while preserving the remaining uncertainty. You are not being asked to prove the sender is safe from handwriting alone. Nor should you dismiss the cards because all seven traveled together at the end. A delayed bundle can contain separately dated objects. The first useful deduction tells you how to read the message without turning it into an imaginary eyewitness account."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which reading method is justified?",
        "options": [
          {
            "id": "dates",
            "label": "Use the postal cancellation dates for order, while treating the seasonal pictures as older stock and checking present safety separately.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "seasons",
            "label": "Treat blossom and snow pictures as proof the cards were written in different years.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "numbers",
            "label": "Let printed catalog numbers overrule the posting dates despite the incoherent sentence.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "hand",
            "label": "Treat familiar handwriting as proof of the sender’s present location.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "choice"
      }
    },
    "choice": {
      "title": "Follow the light or follow the post",
      "location": "The coastal lane",
      "body": [
        "The sentence points toward a copy kept where winter light falls. Arlo at the harbor has building plans and safe crossing tables; following that route could take you to a signal house on the island and to a person who can explain the packet there. It will require respecting the water and the sender’s choices about contact.",
        "Bea at the post office can check the cancellations, forwarding instructions, and archive deposit references. That route can establish a current safety message and preserve the threatened evidence without your visiting a private address. Choose which investigation you will complete. Both can answer Elin’s concern, but one resolves the puzzle through a coastal journey and the other through a chain of independently contacted records and people."
      ],
      "choices": [
        {
          "id": "a",
          "label": "Follow the winter-light clue through harbor and island",
          "to": "a00",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "b",
          "label": "Trace the postmarks through the post office and archive",
          "to": "b00",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a00": {
      "title": "A window named for a season",
      "location": "The harbor planning room",
      "body": [
        "Arlo has two relevant buildings on the old plan: a boathouse with a west window and a signal house whose south-facing room is labeled “winter reading.” The phrase is a practical name given when winter daylight was used for examining charts. It is not a promise that every sunny pane on the coast contains a packet.",
        "The postcards include a tiny drawing of the signal house’s stepped sill, matching the plan. That second observation makes the destination more than an attractive interpretation of a poetic sentence. Arlo offers a supervised crossing if the tide interval permits it. Finding a likely place does not give you permission to ignore the conditions of reaching it."
      ],
      "meets": [
        "arlo"
      ],
      "clues": [
        "window"
      ],
      "setFlags": [
        "route-a"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a01"
        }
      ],
      "routeLabel": "The island journey"
    },
    "a01": {
      "title": "Twenty minutes that must fit twice",
      "location": "The harbor tide desk",
      "body": [
        "The departure table allows a supervised boat to leave between 12:00 and 12:15. The crossing takes twenty minutes under the listed conditions. The island path gate is staffed until 12:40, so an arrival must also precede that closing time. Arlo has proposed departures at 12:10 and 12:25 on a general visitor sheet, but only one fits the actual safe interval.",
        "The first proposed boat reaches the island at 12:30; the second would reach 12:45 and was outside the permitted departure interval anyway. You do not need local tide knowledge beyond the supplied table. You need to keep a starting restriction and an arrival restriction separate instead of noticing only whichever one makes a preferred trip look possible."
      ],
      "clues": [
        "crossing"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a02"
        }
      ],
      "routeLabel": "The island journey"
    },
    "a02": {
      "title": "A route that respects the water",
      "location": "The harbor departure board",
      "body": [
        "Select the two observations supporting the appropriate destination and departure. One concerns the building identified by more than poetic resemblance. The other concerns both timing restrictions. A correct plan must fit the marked reading window and the permitted crossing, not simply get you somewhere sunny.",
        "You are not racing a hidden timer. Arlo can make the safe arrangement after you have worked out which proposal satisfies the table. If you choose wrongly, you will reconsider the evidence rather than be sent into dangerous water. A serious investigation treats travel restrictions as part of the reasoning. It also resists the temptation to turn a story about a missing friend into an excuse for an unauthorized expedition."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two entries form the supported travel plan?",
        "options": [
          {
            "id": "house",
            "label": "Use the signal house marked as the winter reading room and matched by the sill drawing.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "time",
            "label": "Choose 12:10, arriving 12:30 within both the departure interval and the staffed gate period.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "late",
            "label": "Choose 12:25 because a later boat automatically has a safer tide.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "west",
            "label": "Use any west-facing window because all light is the same clue.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "a03",
        "wrongFeedback": "This combination leaves one of the established restrictions unexplained. Test the proposed explanation against every source.",
        "minSelections": 2,
        "maxSelections": 3
      },
      "routeLabel": "The island journey"
    },
    "a03": {
      "title": "A name after the last postmark",
      "location": "The island arrival hut",
      "body": [
        "The steward checks your introduction before discussing visitors. The arrival record lists Iris after the last postcard’s cancellation, with an identification check and an archive work permit. That is a later observation than the cards themselves, and it has a named witness rather than relying on a familiar signature.",
        "It does not authorize you to demand Iris’s lodging address. The steward can take a message to her and ask how she wishes to respond. Elin wanted a safety check, not control over every decision her friend made. You leave the note she prepared and wait in the public reading hut. The next stage of the route depends on consent as well as on having solved the direction clue."
      ],
      "clues": [
        "landing"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a04"
        }
      ],
      "routeLabel": "The island journey"
    },
    "a04": {
      "title": "A copy placed within reach",
      "location": "The signal-house reading room",
      "body": [
        "The south window lights a public chart table. In its drawer sits a packet addressed to Elin, with permission for the archive steward to deliver a duplicate. It contains photographs of an old ferry contract threatened with disposal during a redevelopment. The reference numbers are legible, but the images need comparison with an independent register before they can establish the contract’s terms.",
        "Iris arrives after reading Elin’s note. She had left the mainland to finish the copying work quietly after receiving pressure to abandon it. Her messages were meant to preserve a second copy if the first failed, not to make Elin fear a disappearance. She acknowledges that the delayed mailbag made a careful plan look needlessly alarming."
      ],
      "meets": [
        "iris"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a05"
        }
      ],
      "routeLabel": "The island journey"
    },
    "a05": {
      "title": "What the sender permits",
      "location": "The signal-house porch",
      "body": [
        "Iris authorizes you to tell Elin she is safe and to bring the evidence packet to the archive. She asks that her temporary lodging not be published. Those requests are compatible: the contract can be verified by reference numbers and official records without giving a crowd her address.",
        "The steward checks the copied dates and parties against the archive register. They agree. This supplies a public evidence chain independent of the postcard sentence. The sentence led you to the copy; it does not certify its contents by magic. Iris will speak to the proper inquiry with advice available. Your next deduction concerns what to take back, what can be stated confidently, and what should remain private even after a mystery has become interesting to other people."
      ],
      "clues": [
        "consent",
        "island-copy"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a06"
        }
      ],
      "routeLabel": "The island journey"
    },
    "a06": {
      "title": "A solved route is not unlimited permission",
      "location": "The archive packet desk",
      "body": [
        "Choose the resolution that fulfills Elin’s concern and preserves the actual evidence. The later arrival record, direct contact with Iris, and her permission support a safety message. The matched contract references support handing the copy to the archive. None of those facts requires publishing where she sleeps.",
        "A puzzle’s answer can tell you where to look without becoming a warrant. Likewise, a sender’s wish for privacy can coexist with a genuine public interest in a disputed contract. The correct ending should make both distinctions visible. You have made a coastal journey to find a living person and an endangered record; do not reduce the result to either an intrusive address announcement or a reassuring sentence that leaves the evidence unprotected."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "What should you bring back from this route?",
        "options": [
          {
            "id": "consent",
            "label": "A consented current safety message and the independently checked archive copy, keeping the private lodging address out of the public account.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "address",
            "label": "Publish Iris’s lodging because solving the directions gives unlimited permission.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "cards",
            "label": "Claim the postcard riddle itself legally proves every contract term.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "silence",
            "label": "Ignore Elin’s safety concern and leave the only copy unrecorded.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "a07"
      },
      "routeLabel": "The island journey"
    },
    "a07": {
      "title": "A crossing in the other direction",
      "location": "The supervised return boat",
      "body": [
        "Arlo checks the return arrangement rather than assuming the outward table covers every later crossing. You carry an authorized duplicate in a waterproof folder and a short message Iris has written for Elin. The original deposited copy stays with the archive, so one dropped bag cannot destroy the evidence again.",
        "The route feels different now. The signal house was not a theatrical hiding place but a useful public room named for its winter light. The sender was not a solved object but a person with choices about who could know what. You have enough to explain the apparent disappearance, and enough independent source material to prevent the contract story depending on the romance of seven postcards."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a08"
        }
      ],
      "routeLabel": "The island journey"
    },
    "a08": {
      "title": "The message that should have arrived first",
      "location": "Elin’s sitting room",
      "body": [
        "Elin reads Iris’s current message before looking at the contract packet. She is relieved and annoyed, both reasonably. You explain the delay, the later arrival record, and the direct permission rather than claiming you knew her friend was safe from the beginning.",
        "The archive receives the authorized copy under its own reference, and the inquiry into the threatened disposal can proceed separately. Elin keeps the cards in postal order. Their seasonal pictures are allowed to become pictures again instead of seven clues to invented years of danger. Your route resolved the mystery through a harbor, a tide table, a public window, and a conversation that respected the person at its center."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a09"
        }
      ],
      "routeLabel": "The island journey"
    },
    "a09": {
      "title": "Light on an ordinary table",
      "location": "The coastal postbox",
      "body": [
        "Elin posts a reply asking Iris to include one very plain sentence about her safety before sending another elegant puzzle. The request is affectionate and serious. A good method of preserving evidence should not require frightening the people who care about its keeper.",
        "You leave the postcards beside a labeled copy of the archive acknowledgment. The winter light has led somewhere real, but the ending belongs equally to the less picturesque checks: dates, permissions, a supervised crossing, and a register that another person can read without following you onto an island."
      ],
      "ending": {
        "title": "Case closed: the signal-house copy",
        "kind": "solved",
        "body": [
          "A supervised crossing leads to independently recorded contact with Iris and an authorized duplicate of the endangered contract. Elin receives a current safety message; the archive receives evidence it can check. Iris’s lodging stays private because solving a direction clue did not grant unlimited permission."
        ]
      },
      "routeLabel": "The island journey"
    },
    "b00": {
      "title": "The history a cancellation carries",
      "location": "The coastal post office",
      "body": [
        "Bea Lambert recognizes the delayed mailbag before she sees the cards. Its clasp broke during a transfer, and the contents were held together while the route was restored. The dispatch book gives the separate cancellation dates. The old seasonal pictures came from ordinary stock and do not imply a journey through different years.",
        "Bea checks the numbered cancellation sequence against her own record, not merely against the marks you brought. That distinction makes the verification independent. She also has a forwarding request from Iris, which she will discuss only within its stated permissions. You can pursue Elin’s legitimate concern without treating an anxious introduction as authority to see every private item in the post office."
      ],
      "meets": [
        "bea"
      ],
      "clues": [
        "cancel"
      ],
      "setFlags": [
        "route-b"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b01"
        }
      ],
      "routeLabel": "The post and archive trail"
    },
    "b01": {
      "title": "A permission narrower than an address",
      "location": "The post-office inquiry desk",
      "body": [
        "Iris’s request permits a welfare confirmation to Elin and forwarding of archive material. It does not permit disclosure of the lodging address. Bea can contact the island steward at the public directory number and ask Iris to authorize a current message. That procedure is different from assuming a number written on a mysterious card must reach a trustworthy person.",
        "The request predates the delayed delivery and bears an acknowledgment retained by the office. It explains why the cards may lead to the archive without making every recipient an authorized visitor. You record what the office can do and what remains to be checked. The absence of an address in your notebook is not a failure of the investigation; it is a boundary the evidence has supplied."
      ],
      "clues": [
        "permission"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b02"
        }
      ],
      "routeLabel": "The post and archive trail"
    },
    "b02": {
      "title": "Independent contact and limited consent",
      "location": "The post-office telephone alcove",
      "body": [
        "Select the two steps that can produce a reliable current safety check. A public directory supplies an independently sourced contact. Iris’s recorded permission defines what information may be returned. The cards can be authentic without proving where their writer is today.",
        "A persuasive voice at a number supplied only by the same packet would not add much independence. Nor would publishing a forwarding address answer the separate question of whether Iris is presently safe. The two correct choices establish a way to ask a new question through a separately known person, then return the authorized answer. It is a quieter investigation than a coastal expedition, but it requires the same care about the origin and limits of information."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two steps create the sound welfare check?",
        "options": [
          {
            "id": "directory",
            "label": "Contact the island steward through the independently listed public directory number.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "consent",
            "label": "Use the recorded permission to return a safety message without disclosing private lodging details.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "packet",
            "label": "Treat a number supplied only on the cards as independent confirmation of those cards.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "address",
            "label": "Publish a forwarding address as a substitute for checking present safety.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "b03",
        "wrongFeedback": "This combination leaves one of the established restrictions unexplained. Test the proposed explanation against every source.",
        "minSelections": 2,
        "maxSelections": 3
      },
      "routeLabel": "The post and archive trail"
    },
    "b03": {
      "title": "A reference that survives a change of place",
      "location": "The municipal archive reading desk",
      "body": [
        "Len Ash, the island archive steward, speaks with you through the office line and sends a registered copy of the deposit entry. Iris’s photographs concern a ferry contract whose original was scheduled for disposal during redevelopment. The dates, parties, and reference numbers match the archive register.",
        "The postcards’ instruction to keep a copy now has a documented purpose. It still is not the source of the contract’s authority. Len can supply an approved duplicate through the municipal office, so preservation does not depend on your finding the signal-house drawer personally. Your route changes the method of resolution: it secures a checkable public record through institutions rather than requiring a private journey to validate a poetic set of directions."
      ],
      "meets": [
        "len"
      ],
      "clues": [
        "register"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b04"
        }
      ],
      "routeLabel": "The post and archive trail"
    },
    "b04": {
      "title": "A question chosen by the recipient",
      "location": "The post-office telephone desk",
      "body": [
        "Elin supplies a small question Iris would understand from their last conversation, but Bea does not treat shared knowledge alone as conclusive. She also verifies that the independently contacted steward has checked Iris’s identity and recent presence. Iris comes to the office line and gives a current message for Elin.",
        "She explains that the copying work and pressure to abandon it led her to stay near the archive. The delayed bag made the postcards look like a disappearance story. She authorizes the safety message and a copy of the evidence, while asking that her lodging remain private. These are new observations and instructions, not a comforting interpretation placed on old handwriting. Bea records the time and scope of the authorization so the report can say exactly what was checked."
      ],
      "meets": [
        "iris"
      ],
      "clues": [
        "welfare"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b05"
        }
      ],
      "routeLabel": "The post and archive trail"
    },
    "b05": {
      "title": "A public claim without a private address",
      "location": "The archive certification counter",
      "body": [
        "The approved duplicate can show the contract’s terms, parties, dates, and reference chain while omitting Iris’s current lodging information. The redevelopment inquiry needs the former, not the latter. Len explains how the copy will be certified and where the original deposit remains available for inspection.",
        "Elin asks whether the postcard pictures should also be published to prove the discovery. They may be interesting, but the preservation does not rely on their artistic sequence. The archive acknowledgment is a stronger basis for the legal inquiry. You can give the case a satisfying explanation without turning every intimate detail into a public exhibit. Your final deduction concerns which part of the account is evidence, which part was a useful lead, and which part belongs to the person who chose to send it."
      ],
      "clues": [
        "public-proof"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b06"
        }
      ],
      "routeLabel": "The post and archive trail"
    },
    "b06": {
      "title": "The difference between a lead and its proof",
      "location": "The certified-copy desk",
      "body": [
        "Choose the final report that separates the three functions of the material. The dated cards led to a question about a copy; the archive register independently checks that copy; the current authorized contact checks Iris’s safety. None requires publication of the forwarding address.",
        "A wrong report might overstate the cards as proof of the contract or overstate a genuine cancellation as proof of a present location. Another might preserve privacy so completely that it fails to return the authorized safety message at all. The correct resolution can be both useful and restrained. It should let a new investigator examine the threatened contract without having to share your enthusiasm for the puzzle or your access to Elin’s private correspondence."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which final report is supported?",
        "options": [
          {
            "id": "separate",
            "label": "Report the independently authorized safety check and certify the matched archive copy, describing the cards as the lead while withholding private lodging details.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "postmark",
            "label": "Claim a cancellation alone proves Iris’s location today.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "riddle",
            "label": "Treat the sentence’s poetic fit as legal certification of the contract.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "address",
            "label": "Publish the forwarding address because the inquiry concerns a public contract.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "b07"
      },
      "routeLabel": "The post and archive trail"
    },
    "b07": {
      "title": "The packet that no longer needs hiding",
      "location": "The municipal archive intake room",
      "body": [
        "The certified duplicate receives its own intake number. A note explains the connection to the threatened original and the separately retained photographic deposit. Iris’s temporary address is not included because it has no bearing on those references.",
        "Bea sends Elin the authorized message and a record of the contact time. That is a more reliable reassurance than simply saying the postmistress thinks everything is fine. The ferry-contract inquiry can proceed on public sources, and Iris can decide when to return or speak publicly with advice. Your route has changed the ending from a personal expedition to a controlled transfer of evidence and a properly sourced welfare confirmation."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b08"
        }
      ],
      "routeLabel": "The post and archive trail"
    },
    "b08": {
      "title": "The seven pictures become pictures again",
      "location": "Elin’s writing desk",
      "body": [
        "Elin puts the cards in a small album, keeping the postal sequence on a separate sheet. The pictures’ different seasons no longer need to indicate danger. She writes a reply asking for an ordinary sentence about safety next time, even if Iris cannot resist sending a puzzle afterward.",
        "You explain which records did the real verifying: the dispatch book, the independent contact, the consented message, and the archive reference match. The directions toward winter light were useful without being authoritative about everything they touched. That distinction leaves a better story than a confident detective announcing that she decoded a sentence and therefore knew a stranger’s whole life."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b09"
        }
      ],
      "routeLabel": "The post and archive trail"
    },
    "b09": {
      "title": "A reply with a clear first line",
      "location": "The post-office counter",
      "body": [
        "Bea cancels Elin’s reply while you watch. The mark records when this piece of mail entered the system, nothing more and nothing less. After the evening’s confusion, that small limited promise feels reassuring.",
        "The case ended through a dispatch book, an independently chosen telephone number, a living person’s consent, and a certified public copy. You did not follow the shoreline to the signal house, and you did not need to. Another route would have made that journey meaningful. Yours has made the evidence and the reassurance travel safely to the people who needed them."
      ],
      "ending": {
        "title": "Case closed: the independently checked message",
        "kind": "solved",
        "body": [
          "The dispatch book explains the delayed cards, an independently sourced call confirms Iris’s safety with her consent, and the archive certifies the matching contract copy. Your report preserves public evidence without exposing a private address or pretending the postcard sentence itself proved a legal claim."
        ]
      },
      "routeLabel": "The post and archive trail"
    }
  },
  "solutionPaths": [
    {
      "id": "first-route",
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
          "id": "dates"
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
          "id": [
            "house",
            "time"
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
          "id": "consent"
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
      "id": "second-route",
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
          "id": "dates"
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
          "id": [
            "directory",
            "consent"
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
        }
      ]
    }
  ]
};
