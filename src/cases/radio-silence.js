/** Original long-form branching coastal investigation. */
export default {
  "id": "radio-silence",
  "title": "A Voice on the Night Frequency",
  "genre": "Uncanny mystery",
  "difficulty": "Intricate",
  "duration": "60+ min",
  "description": "Every evening at 11:07, a closed coastal station speaks again. A volunteer broadcaster asks you to follow the signal through old recordings, shoreline secrets, and a decision that could change the town.",
  "setting": "A coastal radio station and a rain-washed harbor in November",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "june",
      "name": "June Avery",
      "role": "Volunteer broadcaster",
      "description": "Runs the evening program with a kettle, a scratched record collection, and concern for her listeners.",
      "color": "#a48caa"
    },
    {
      "id": "eli",
      "name": "Eli Ward",
      "role": "Retired radio technician",
      "description": "Labels spare cables for the people who will use them twenty years later.",
      "color": "#8f9f8d"
    },
    {
      "id": "tom",
      "name": "Tom Mercer",
      "role": "Coastal ranger",
      "description": "Knows the shore paths and distinguishes a checked observation from a confident guess.",
      "color": "#bb967b"
    },
    {
      "id": "cora",
      "name": "Cora Bell",
      "role": "Licensed maintenance engineer",
      "description": "Keeps inspection photographs, including the ones that make her own work difficult to explain.",
      "color": "#7e99a4"
    },
    {
      "id": "mara",
      "name": "Mara Finch",
      "role": "Harbor archivist",
      "description": "Welcomes awkward questions if you keep your mug off the original documents.",
      "color": "#bd9c76"
    },
    {
      "id": "alma",
      "name": "Alma Reed",
      "role": "Council records officer",
      "description": "Writes the exact time a document arrives rather than the time its sender wishes it had arrived.",
      "color": "#a88e9f"
    },
    {
      "id": "ruth",
      "name": "Ruth Keene",
      "role": "Retired lifeboat volunteer",
      "description": "Can describe a difficult landing without making herself its hero.",
      "color": "#83a195"
    },
    {
      "id": "gideon",
      "name": "Gideon Vale",
      "role": "Harbor redevelopment manager",
      "description": "Coordinates the proposed sale of the old station property and answers the project telephone himself.",
      "color": "#9c9a80"
    }
  ],
  "clues": [
    {
      "id": "recordings",
      "title": "Three identical recordings",
      "description": "The same inhale, click, and small drop in volume occur at the same offsets on three nights. June preserved the original files before making listening copies."
    },
    {
      "id": "handbook",
      "title": "B-4 and its test timer",
      "description": "The manual pairs the low–high–low identifier with cliff repeater B-4. A service record restores its solar supply; the retained local test timer is 23:07."
    },
    {
      "id": "repeat",
      "title": "A scheduled replay",
      "description": "The repeated waveform, B-4 identifier, restored power, and timer explain an automatic playback. They do not yet identify who prepared its present contents."
    },
    {
      "id": "maps",
      "title": "Two places called west",
      "description": "The old ferry chart names West Landing at the present North Steps. The modern West Causeway is a different crossing below the same headland."
    },
    {
      "id": "landing",
      "title": "The original landing located",
      "description": "Bell Tower and the pair of water tanks place the old chart north-up. Its West Landing matches the modern North Steps, not West Causeway."
    },
    {
      "id": "voice-record",
      "title": "A catalog and a breath",
      "description": "Original reel H86-4 is cataloged as Helen Avery’s 1986 training exercise. Its first spoken phrase and breath match the repeated broadcast; the later safety disclaimer needs separate comparison."
    },
    {
      "id": "helen",
      "title": "The speaker identified",
      "description": "The original master’s label and independently recorded catalog entry identify Helen Avery. The sound comparison links that master to the broadcast. Family recognition supports, but does not establish, provenance."
    },
    {
      "id": "content",
      "title": "C17 and C18",
      "description": "Approved content C17 is the whole training exercise. C18 omits the training introduction and adds an unqualified claim that the western access is open. Its activation appears later than restoration of power."
    },
    {
      "id": "schedule",
      "title": "A later content change",
      "description": "The log distinguishes power restored Wednesday 14:10, C17 verified at 17:00, and scheduled C18 activation at 22:14. Restoring solar power alone cannot account for the changed words."
    },
    {
      "id": "threshold",
      "title": "Present-day water limits",
      "description": "The current ranger notice closes West Causeway at water heights of 1.4 metres or more. The forecast high water is 1.8 metres; this is a forecast, not proof somebody is stranded."
    },
    {
      "id": "notice",
      "title": "A correction is required",
      "description": "C18 gives current-sounding, unconditional access advice that conflicts with a current closure rule. The 1986 training exercise refers to a different landing and supplies no current clearance."
    },
    {
      "id": "sale",
      "title": "The sale condition",
      "description": "The station sale cannot close the upper public path unless a safe, legally available alternative access is certified. A reassuring broadcast is not an access inspection."
    },
    {
      "id": "a-logs",
      "title": "Licensed listening records",
      "description": "Corrected observation times from the ranger, lighthouse, and harbor receivers agree with the licensed engineer’s B-4 test sheet. Other repeaters were isolated for the authorized comparison."
    },
    {
      "id": "a-source",
      "title": "The active source confirmed",
      "description": "The controlled test confirms the changed message was played by B-4 itself. A separate transmitter mimicking its identifier cannot explain the observed test responses."
    },
    {
      "id": "a-package",
      "title": "Sealed correction package",
      "description": "A sealed correction envelope signed out by the redevelopment office was documented before Cora’s service visit. The engineer stored its contents for a delayed activation without separately verifying its approval."
    },
    {
      "id": "a-match",
      "title": "The stored package matches C18",
      "description": "The certified package inventory and B-4 export have the same file identifier and exact wording. The package existed before the scheduled change; this was supplied content, not a spontaneous recording failure."
    },
    {
      "id": "a-receipt",
      "title": "The quay receipt clock",
      "description": "Cora’s original receipt reads 16:50, but the quay office clock was ten minutes fast. A clock-correction check places the delivery at 16:40, inside her documented service visit."
    },
    {
      "id": "a-delivery",
      "title": "A delivery, not an alibi",
      "description": "A corrected 16:40 delivery, Cora’s identification, and Gideon’s signed receipt place him at the handover. His calendar lists an event; its cancellation notice prevents treating it as an alibi."
    },
    {
      "id": "a-stone",
      "title": "Boundary marker 6",
      "description": "Ranger photographs show the fixed boundary stone marked 6 beside the North Steps. The registered plan retains a public corridor outside the station sale parcel."
    },
    {
      "id": "a-corridor",
      "title": "A retained public route",
      "description": "Matching the fixed marker and registered parcel schedule locates the North Steps corridor outside the land offered for sale. Keeping it available requires review of the physical access, not a broadcast promise."
    },
    {
      "id": "a-redline",
      "title": "The instruction to remove a condition",
      "description": "A signed content request asks for the training introduction and rising-water qualification to be omitted. Its project reference matches the access certificate attached to the station sale."
    },
    {
      "id": "a-intent",
      "title": "The misleading request connected",
      "description": "The signed request, supplied package, and sale condition together establish a deliberate attempt to present conditional historical speech as current unrestricted access advice. They support referral, not a final legal verdict."
    },
    {
      "id": "b-index",
      "title": "Archive filing key",
      "description": "The archive files originals by speaker, year, exercise number; a later network number is a cross-reference only. Helen Avery, 1986, exercise 4 therefore leads to H86-4, not the 1989 B-4 inspection."
    },
    {
      "id": "b-master",
      "title": "The complete exercise found",
      "description": "The correctly indexed master contains an explicit training introduction, a rising-water restriction, and instructions for the old landing. The submitted edit removes the limits while keeping the authoritative voice."
    },
    {
      "id": "b-edit",
      "title": "An authenticated comparison",
      "description": "Mara’s supervised comparison documents the omitted introduction and restriction. No new tide observation or engineer’s access clearance accompanies C18."
    },
    {
      "id": "b-misuse",
      "title": "The authority claim fails",
      "description": "Removing the training label and retaining an old place-name makes historical speech sound like present-day access clearance. Authentication of the voice does not authenticate the new advice."
    },
    {
      "id": "b-register",
      "title": "A late appendix",
      "description": "The approved 12:00 content record lists C17 only. At 18:15 the records office registered a C18 appendix submitted under Gideon Vale’s signed redevelopment-office covering letter."
    },
    {
      "id": "b-approval",
      "title": "Registration is not approval",
      "description": "Alma’s receipt records arrival, not authorization. The C18 appendix was registered after the approval meeting and cannot inherit approval merely by being filed beside the approved C17 minute."
    },
    {
      "id": "b-plan",
      "title": "The corridor in the schedules",
      "description": "The disposal schedule excludes boundary corridor N6. An unsigned publicity drawing shades the whole headland as sale land, while the registered plan keeps North Steps outside the parcel."
    },
    {
      "id": "b-right",
      "title": "The publicity drawing is not title",
      "description": "The signed disposal schedule and registered plan agree on the excluded corridor. The simplified publicity drawing cannot cancel that recorded exclusion."
    },
    {
      "id": "b-witness",
      "title": "A recollection checked",
      "description": "Ruth’s 1986 notebook and a rescue-service log independently date a landing at North Steps. They support the old place-name; they do not establish that the modern causeway is open."
    },
    {
      "id": "b-context",
      "title": "The historical claim bounded",
      "description": "The notebook and service log corroborate the old landing and the purpose of Helen’s exercise. A successful historical landing provides neither a current tide clearance nor permission to close the upper path."
    },
    {
      "id": "b-hearing",
      "title": "The submission acknowledged",
      "description": "At a recorded review Gideon acknowledges supplying the C18 appendix. The covering letter, comparison, and unfulfilled access condition establish the specific misleading submission without relying on a supposed haunting."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The kettle at half past ten",
      "location": "Harbor Community Radio",
      "body": [
        "June Avery has left the studio door open. A hand-lettered card asks visitors to keep the stairs quiet during the weather bulletin. Inside, the kettle clicks off beside three dated sound files and a listener’s envelope. Every evening at 23:07 a woman speaks over the edge of the station’s program. The building people blame has been locked for twelve years. June has kept the listener’s address private and invited people who can check the coast and equipment safely.",
        "“I can tell them it isn’t a ghost,” she says. “I would rather tell them what it is.” She offers you the listening copy, not the only recording. Tonight’s ranger has already confirmed no distress call is awaiting help. There is no reason to race into the rain or break into an abandoned building. You can work through preserved records, ask precise questions, and keep track of which explanations the evidence has actually earned."
      ],
      "meets": [
        "june"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "recordings"
        }
      ]
    },
    "recordings": {
      "title": "Three files and one small breath",
      "location": "The listening desk",
      "body": [
        "June opens the recordings from Wednesday, Thursday, and Friday. Before the word “keep,” each contains a tiny inhale. A dry click follows “visible”; a little dip in the background hiss occurs two seconds later. The same details appear at exactly the same offsets when she aligns the start of the speech. The regular music behind the interruption is different each night, so the complete recordings have not simply been copied and relabeled.",
        "Her log gives the interruption as 23:07 on all three evenings. A listener thinks the voice sounds frightened; another calls it comforting. You put those descriptions in a separate column from the measurable features. June explains that the software display marks elapsed time inside a recording, not the actual time a person spoke. Matching offsets can identify a repeated sound without telling you its age, its source, or whether its present meaning matches the speaker’s intention."
      ],
      "clues": [
        "recordings"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "handbook"
        }
      ]
    },
    "handbook": {
      "title": "A handbook before a theory",
      "location": "The repair corner",
      "body": [
        "Eli Ward arrives carrying a battered service handbook and a bag of plain biscuits. He lets June finish playing the files before asking for the three tones after the speech. The printed key lists B-2 as high–high–low, B-3 as low–low–high, and B-4 as low–high–low. Your recording has the third pattern. Beside B-4 is “cliff emergency repeater; retained voice test, 23:07 local.”",
        "The ranger has emailed a maintenance slip: “B-4 solar supply restored Wednesday 14:10.” An emergency repeater is separate from the locked broadcast building; it can retain stored material while its supply is off. Eli does not touch a transmitter or invite you to try a control. He lays the explanation out on paper. An identifier is a useful lead, he adds, but old signals can be copied. If authorship later matters, someone licensed should check what the actual equipment plays."
      ],
      "meets": [
        "eli"
      ],
      "clues": [
        "handbook"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "mechanism-question"
        }
      ]
    },
    "mechanism-question": {
      "title": "The first explanation",
      "location": "Beside the studio clock",
      "body": [
        "The station clock reaches 23:07 while June is making a note. The same short message crosses the program: “Keep a light visible. Wait for assistance at the west landing. Western access is open.” The little inhale and click sound less strange now that you know exactly where to expect them. June leaves her microphone closed. She has promised listeners an account she can support, not an immediate answer squeezed between records.",
        "On your page are three kinds of observation: a repeated waveform, a tone identifier, and a service schedule. You are deciding the mechanism of the recurring sound. Nothing in these observations yet proves who recorded it, who prepared its present wording, or whether the access instruction is safe today. Eli asks you to make the narrowest conclusion that accounts for all three. Once that foundation is firm, you can investigate the questions it leaves open."
      ],
      "puzzle": {
        "prompt": "Which mechanism fits the matching sound details, equipment identifier, restored supply, and 23:07 schedule?",
        "options": [
          {
            "id": "1",
            "label": "A fresh live speaker enters the locked station at the same time every evening.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "The restored B-4 repeater runs a retained timer and plays a stored recording.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "The sea carries an acoustic echo from a broadcast made decades ago.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "June accidentally copied the whole same evening program onto three dates.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "mechanism-result"
      }
    },
    "mechanism-result": {
      "title": "A mechanism, not a culprit",
      "location": "The station kitchen",
      "body": [
        "The restored repeater and its retained timer account for the regular return of a stored recording. June writes that sentence exactly, without adding a suspect’s name. It explains why a locked, empty building is not an obstacle. It also explains why three evenings carry the same breath. The result feels ordinary enough to be reassuring, but Eli circles the final sentence of the message. “Western access is open” sounds like current advice. A timer cannot certify a path.",
        "Tom Mercer, the coastal ranger, has agreed to bring the current closure notices and the old charts. June asks whether you would prefer to stop at the electrical explanation. The page has already answered that for you: one column says source mechanism, another says meaning. A recording can be genuine and misleading at once. You take the second question seriously because listeners have begun repeating the message as if it were an official update."
      ],
      "clues": [
        "repeat"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "weather"
        }
      ]
    },
    "weather": {
      "title": "A notice with a threshold",
      "location": "The covered station steps",
      "body": [
        "Tom wipes the rain from his tablet before coming inside. He has checked the staffed harbor post and the public paths still open tonight; nobody has reported being stranded. His current notice says the low West Causeway closes when water reaches 1.4 metres. The forecast high water is 1.8 metres. A forecast calls for caution and closure planning; it is not a report of a person in danger. He has already asked the harbor service to use its normal channels for accurate advice.",
        "The name “west landing” bothers him for another reason. On modern maps the West Causeway is the obvious western access. In older ferry records, West Landing may mean a place on the north side of the headland. He will not identify them from a remembered nickname. Tom spreads two dated plans across the table, putting the current notice beside them so an old route description cannot quietly become present-day permission."
      ],
      "meets": [
        "tom"
      ],
      "clues": [
        "threshold"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "maps"
        }
      ]
    },
    "maps": {
      "title": "One headland, two western names",
      "location": "The map table",
      "body": [
        "The ferry chart has no printed north arrow on its worn corner, but it shows two fixed landmarks: Bell Tower inland of the harbor, and the paired water tanks to its east. The modern survey supplies the same landmarks and a north arrow. On both, the tanks lie east of the tower. Once aligned, the old label WEST LANDING falls on the north steps below the former keeper’s garden. The present West Causeway lies southwest, joining a low tidal rock to the shore.",
        "June traces neither with her finger until Tom puts a clean overlay down. The sites are less than half a mile apart, close enough for a casual account to confuse them and far enough for the error to matter. The old chart calls its landing west relative to a vanished ferry route. The modern causeway is west relative to the town. A direction word has outlived the scheme that made it sensible."
      ],
      "clues": [
        "maps"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "leaflet"
        }
      ]
    },
    "leaflet": {
      "title": "An apparently helpful summary",
      "location": "The station noticeboard",
      "body": [
        "A printed redevelopment leaflet says the old radio station will become a small inn. Its access diagram shades the headland in pale blue and labels a single “western route.” No survey number appears beside that label. Tom refuses to use it as a third, deciding map. Publicity often simplifies geography; simplification is not evidence that two physically different crossings are one place. He pins the leaflet beside the dated plans, where its missing detail is visible.",
        "June reads the old message again, this time hearing the phrase “west landing” rather than filling it with the nearest modern place-name. You list the stable landmarks, the old label, and the current path names. There is enough information to locate the historical instruction without consulting a secret key or guessing the author’s intent. The next decision is geographical only. It will not establish that either route is safe to use tonight."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "landing-question"
        }
      ]
    },
    "landing-question": {
      "title": "Place the historical landing",
      "location": "The map table",
      "body": [
        "Eli rotates the listening desk lamp so its base stops holding the modern survey at a misleading angle. The maps share Bell Tower and the water tanks; those are your reference points. North is printed only on the modern sheet, while the old ferry’s word “west” describes a route that no longer operates. Tom asks you to choose a physical match, not whichever modern name most resembles the old words.",
        "June suggests leaving the two sheets available in the case notes. A reader should be able to follow your comparison without having visited the harbor. You write the premises out: tanks east of tower on both maps; align both landmarks; the old landing lies north of the tower-to-tanks line; the causeway lies southwest of Bell Tower. There is no hidden compass convention. Your answer must respect all four observations."
      ],
      "puzzle": {
        "prompt": "After aligning Bell Tower and the water tanks, which present-day place matches the old West Landing?",
        "options": [
          {
            "id": "1",
            "label": "The modern West Causeway, because west must always describe the same place.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "The sold station building, because every old radio instruction must originate there.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "North Steps, north of the tower-to-tanks line; the causeway is a separate southwest crossing.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "Neither place can be identified unless the old sheet itself has an intact north arrow.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "landing-result"
      }
    },
    "landing-result": {
      "title": "The name becomes a location",
      "location": "The station kitchen",
      "body": [
        "The old West Landing aligns with North Steps. Tom outlines it in pencil on the protective overlay, then outlines the modern causeway separately. This does not prove the recording intended to mislead anyone. It proves only that treating its old place-name as the current causeway is a mistake. That distinction will matter when people later claim the voice itself authorized a change of route.",
        "June finds the archive’s opening information and asks Mara Finch to look for coastal training recordings rather than “ghost broadcasts.” The ordinary search phrase gets an ordinary answer: a supervised listening appointment and a request to bring the file dates. Before leaving, June airs a brief correction. The unidentified recording is not a current access notice; listeners should use the harbor service’s published advice. She does not play a dramatic clip or name anyone whose part in the story you have not established."
      ],
      "clues": [
        "landing"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "archive"
        }
      ]
    },
    "archive": {
      "title": "The archive opens at nine",
      "location": "The harbor archive",
      "body": [
        "Mara Finch sets a foam support on the archive table and moves June’s cup to the windowsill. The room smells of dry cardboard and floor polish. It contains far more ordinary work than famous events: rota changes, labels for training cassettes, letters about batteries, photographs sent back with names penciled on them. Mara asks what you can prove already. When you distinguish a repeated file from an identified speaker, she nods and brings two independent finding aids.",
        "The first is a handwritten catalog compiled in 1986. The second is a transfer register made when the reel collection was digitized decades later. A familiar voice is a reason to search, Mara says, never a sufficient label. June has gone quiet over a name in the catalog. You let her keep that reaction private while you check whether the recording, catalog entry, and transfer record genuinely belong together."
      ],
      "meets": [
        "mara"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "master"
        }
      ]
    },
    "master": {
      "title": "H86-4, first phrase",
      "location": "The supervised listening booth",
      "body": [
        "The reel box reads “Helen Avery — coastal volunteer exercise 4 — 1986.” The independent catalog gives H86-4, the same exercise number, and the first spoken phrase. The transfer register links that box to a digital preservation copy, recording its duration and the archivist who checked it. Mara plays a listening copy. The first voice says that the following is a training exercise. Later, the inhale before “keep” matches the station files exactly.",
        "June presses her palms flat on her knees. Helen was her mother, who died years after the training session. She remembers her singing while washing dishes, not announcing safety instructions. Mara stops playback and asks whether June wants a minute. The identification can wait for her, but the evidence cannot be replaced by her emotion. You have a labeled original, a separate catalog, a transfer link, and a sound match. You also have a broadcast whose opening lacks the training introduction."
      ],
      "clues": [
        "voice-record"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "voice-question"
        }
      ]
    },
    "voice-question": {
      "title": "A name the record can support",
      "location": "The archive reading table",
      "body": [
        "June is willing for you to continue. She says the voice sounds like her mother, then corrects herself: “It is her to me. That isn’t the same as your proof.” The distinction is generous and difficult. Mara lays the documents in a row with the original box kept separate from the working copies. Your task is to choose the two independent links that support an attribution. Neither an old typeface nor the fact that the voice is comforting identifies a person.",
        "The sound match connects the repeated broadcast to a particular preservation master. The original label and independently compiled catalog connect that master to a named speaker. Those are different steps, and both are necessary. A broadcast could copy a genuine voice while changing the context around it. Solving the speaker question must not make you stop asking who prepared the version listeners now hear."
      ],
      "puzzle": {
        "prompt": "Select the two independent links that together support attribution of the source voice.",
        "options": [
          {
            "id": "1",
            "label": "The preservation master matches the breath and first phrase in the repeated broadcast.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "The original box and independently compiled catalog identify that master as Helen Avery’s exercise.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "June loves the voice and therefore every sentence in the transmitted edit has her mother’s approval.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "The reel’s aged label proves its advice is still valid on the present coastline.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "voice-result",
        "mode": "multiple",
        "wrongFeedback": "That set either leaves an essential link unsupported or includes a claim the records do not establish. Review the observations; no progress is lost.",
        "minSelections": 2,
        "maxSelections": 2
      }
    },
    "voice-result": {
      "title": "Helen, before she became a memory",
      "location": "The archive window",
      "body": [
        "You can identify Helen Avery as the speaker of the source exercise. June asks Mara to note the family relationship on a separate permissions form rather than the evidence sheet. She would like a private copy of the full exercise later. She does not want the station to use a family story to make listeners care about a misleading instruction. Mara agrees that the investigation and any future broadcast need separate decisions.",
        "The full master continues after the familiar words. “This is practice. At rising water, the low crossing is closed. Use the marked upper path and wait at West Landing.” The transmitted version has lost the first and second sentences, and it ends with a flat claim about open access. The same voice does not make those two messages equivalent. You return to the transfer notes looking for the version history, now with an identified source and a specific difference to investigate."
      ],
      "clues": [
        "helen"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "versions"
        }
      ]
    },
    "versions": {
      "title": "The version that was approved",
      "location": "The archive copy desk",
      "body": [
        "Mara obtains public copies of the maintenance content schedule. C17 is described as a complete historical training exercise, to remain an identified test item until modern replacement guidance is approved. Its attached transcript includes the training introduction and rising-water restriction. An engineering photograph from Wednesday at 17:00 shows C17 listed as active. The present export, supplied by the licensed service team, identifies the broadcast item as C18.",
        "C18’s transcript contains the familiar breath and several unchanged phrases, but omits “This is practice” and the rising-water sentence. A final segment says, “Western access is open.” The source worksheet lists that phrase as assembled from other words on the original exercise; Helen never recorded a current inspection. The paper does not name its editor. You resist treating a visible editing technique as proof of a particular person or motive. First the sequence of events must be established."
      ],
      "clues": [
        "content"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "engineer"
        }
      ]
    },
    "engineer": {
      "title": "Four times, three different acts",
      "location": "The maintenance office",
      "body": [
        "Cora Bell arrives in work trousers with a folder of service photographs. She confirms she restored B-4’s solar circuit at 14:10 on Wednesday. At 17:00, her closing photograph showed C17 active and a later item marked pending. The exported event log reports “scheduled content activation: C18, 22:14.” The first recorded nightly test followed at 23:07. These timestamps identify different acts: restoration, inspection, activation, and playback.",
        "Cora is troubled by the pending item. Her visit included receipt of a sealed corrections package through the project office, which her job sheet treated as preapproved. The preserved files can establish more than she remembers. She has already referred the check to her supervisor and asks you to use the originals, including anything that exposes her own mistake. An activation time does not by itself tell you when a file was delivered, loaded, or authored."
      ],
      "meets": [
        "cora"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "time-question"
        }
      ]
    },
    "time-question": {
      "title": "Do not turn one clock into another",
      "location": "The maintenance records desk",
      "body": [
        "You make four cards: POWER, C17 CHECK, C18 ACTIVATION, FIRST TEST. On them go Wednesday 14:10, 17:00, 22:14, and 23:07. Cora adds a caution: the event log’s activation line is not labeled “editor signed in” or “parcel delivered.” It reports the equipment changing which stored item was active. A scheduled event may occur after the person who supplied it has gone home.",
        "The question is narrower than who changed the file. Could the restoration of power alone explain the present wording? The approved file was still present after power came back. A distinct content activation happened later. June notices how easily a familiar story could collapse those events into “the engineer did something.” She crosses that phrase out of a draft message. Your conclusion should preserve the difference between evidence of a content change and evidence identifying its supplier."
      ],
      "puzzle": {
        "prompt": "What does the documented sequence actually establish?",
        "options": [
          {
            "id": "1",
            "label": "Power restoration at 14:10 necessarily created the new words, so no other event matters.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "C18 activated at 22:14, proving its author was physically beside B-4 at 22:14.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "June must have changed the message because she recorded its later playback.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "The changed content activated after C17 was checked; restoring power alone does not explain the edit.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "time-result"
      }
    },
    "time-result": {
      "title": "The second question survives the first",
      "location": "The maintenance office doorway",
      "body": [
        "The later C18 activation accounts for the changed wording; the afternoon solar restoration does not. Cora’s documented service is therefore part of the chronology, not a complete explanation of the edit. Her unverified handling of a pending correction will need a process review. It does not justify saying she wrote it, nor does her cooperation erase the weakness in the process.",
        "Tom receives a message from the council records office. The redevelopment packet cites “continuing western access” as a reason the upper path can close after a station sale. The familiar phrase now sits in a decision that affects the headland. You have not proved anyone linked the broadcast to that decision deliberately. You have found a reason to preserve both sets of records and meet the person who controls their official dates. June labels the folder CONTENT CHANGE, not CULPRIT."
      ],
      "clues": [
        "schedule"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "council"
        }
      ]
    },
    "council": {
      "title": "A sale with a condition",
      "location": "The council records counter",
      "body": [
        "Alma Reed reads the disposal condition aloud rather than summarizing it from memory. The old station property may be sold, but the upper public path cannot close until a safe, legally available alternative route is certified. No one can substitute an appealing leaflet or an old recording for that certification. The file includes an access appendix supplied by Gideon Vale’s redevelopment office; its exact approval status needs to be checked.",
        "Gideon answers when Alma calls the project number. He says the broadcast is “an unfortunate historical quirk” and that the western route has always been understood to work. He will provide documents and attend a formal review if requested. You record his words as an account, not a fact established by his job title. Alma offers two possible follow-up packages: certified equipment records from the ranger team, or supervised access to the full archive and meeting register."
      ],
      "meets": [
        "alma",
        "gideon"
      ],
      "clues": [
        "sale"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "harbor"
        }
      ]
    },
    "harbor": {
      "title": "What the present water tells you",
      "location": "The harbor service window",
      "body": [
        "Tom checks the most recent notice before handing you a copy. The causeway’s closure threshold remains 1.4 metres, while the forecast high water is 1.8 metres. The harbor service has posted the closure and confirms that routine patrols have not found anyone waiting on the low crossing. The licensed team has taken the obsolete test message out of public service after preserving its export. You do not need to leave misleading advice running to solve its history.",
        "The safe correction can be made before a motive is known. June wants to explain this on air: an authentic historical voice is not the same as current guidance. Tom asks you to distinguish two claims in your report. A forecast above a published threshold supports applying a closure; it does not prove an injury or a concealed rescue. Your case should establish the actual fault without borrowing the drama of an emergency that did not happen."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "safety-question"
        }
      ]
    },
    "safety-question": {
      "title": "Two observations that require a correction",
      "location": "The harbor briefing table",
      "body": [
        "On the left is C18’s current-sounding claim that western access is open. On the right are the dated closure rule and forecast. Beneath them is the aligned chart locating Helen’s old West Landing at North Steps. June asks which pieces of evidence require a practical correction now, before any judgment about the supplier. The answer should connect current conditions to the advice listeners receive, not merely show that the speaker is old.",
        "An old label alone would not make safe advice unsafe. A forecast alone would not identify what the broadcast told people. Together, the unqualified access claim and current closure criteria reveal the problem. The map helps prevent another error: replacing the modern causeway with the old landing by force of a shared word. You can preserve that distinction while selecting the strongest, immediate basis for the correction."
      ],
      "puzzle": {
        "prompt": "Select the two observations that together give the strongest immediate basis to correct the access advice.",
        "options": [
          {
            "id": "1",
            "label": "C18 makes a current-sounding, unconditional claim that western access is open.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "The current causeway rule closes at 1.4 metres, below the forecast 1.8-metre high water.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "Helen recorded the original long ago, which proves every historical safety instruction is false.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "A forecast above the closure level proves somebody has already been injured there.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "safety-result",
        "mode": "multiple",
        "wrongFeedback": "That set either leaves an essential link unsupported or includes a claim the records do not establish. Review the observations; no progress is lost.",
        "minSelections": 2,
        "maxSelections": 2
      }
    },
    "safety-result": {
      "title": "A careful notice goes out",
      "location": "Harbor Community Radio",
      "body": [
        "June records a short notice with Tom. It identifies the returning audio as an obsolete scheduled recording, states that it is not current access advice, and directs listeners to the harbor service’s present closure information. No suspect is named. The station keeps a public correction log so the eventual explanation cannot quietly erase the original mistake. Cora’s supervisor confirms the old test schedule is disabled and a modern approved procedure will replace it.",
        "The immediate risk is addressed, but the two strands remain: how a supplied edit became active, and why an access appendix relied on the claim it made. Eli brings soup from the bakery downstairs. Over paper bowls, you decide how to use the remaining evidence. Both routes can answer the case, but they will ask different questions in different places. One follows the physical package and shoreline survey. The other follows the source recording and official approval trail."
      ],
      "clues": [
        "notice"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "conference"
        }
      ]
    },
    "conference": {
      "title": "The evidence still missing",
      "location": "The station meeting table",
      "body": [
        "You review the page of conclusions already earned. A restored timer repeats a stored voice. A verified master identifies Helen. A later content version strips the exercise’s limits. The modern causeway closes under current conditions, and the old landing is elsewhere. None of those facts alone identifies a dishonest supplier. The sale condition makes the change consequential but does not automatically establish intent. June insists the finished story must say what each source can and cannot show.",
        "Tom can arrange a controlled source check, a sealed-package inventory, and a daylight boundary walk on cleared public ground. Mara and Alma can instead assemble the archival master, registry sequence, and disposal schedules for a recorded review. Access is supervised in either case. You cannot pursue every document on every route, so the choice affects how you prove the conclusion and what final remedy you can support. You keep copies of the shared evidence in both folders."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this evidence to the next question",
          "to": "route-choice"
        }
      ]
    },
    "route-choice": {
      "title": "Choose the next kind of question",
      "location": "The station doorway",
      "body": [
        "Rain has thinned to a gray mist. Tom waits beside the ranger vehicle with a tide notice and a spare notebook. Across the square the archive windows glow; Mara has reserved a table, and Alma has agreed to bring the register. June will accompany either investigation, but she has asked for the private listening copy to stay wrapped in its envelope until the public work is finished. Her mother’s voice is not a shortcut around the remaining questions.",
        "You can follow a piece of supplied material from office to equipment and then check the real shoreline it described. Or you can establish the edit’s provenance, test the official claim of approval, and challenge the access account in a documented hearing. These are different evidential methods with different concluding scenes. Choose the one you want to pursue now. A fresh playthrough can explore the other account without rewriting the underlying truth."
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Follow the equipment package and the shoreline survey",
          "to": "a-source",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Follow the archive, approval register, and public review",
          "to": "b-index",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a-source": {
      "title": "A signal checked in daylight",
      "location": "The staffed ranger observation room",
      "body": [
        "Tom’s first destination is not the cliff box. It is the staffed observation room where the licensed service team has prepared a controlled comparison. You and June receive the signed record after the test, not a set of controls. In test A, only B-4 was enabled and its stored test item was played. In B, all three coastal repeaters were disabled under the team’s temporary procedure. In C, B-4 alone was enabled again. The same edited item was heard in A and C; B was silent.",
        "Three independent receivers logged the first start. The ranger display read 10:02, the lighthouse 09:59, and the harbor 10:00. Each sheet carries a calibration note: ranger two minutes fast, lighthouse one minute slow, harbor correct. Correcting clocks is essential before calling observations contradictory. The comparison narrows the physical source without telling you who prepared the content. Tom preserves the raw sheets as well as the corrected summary, so anyone reviewing your arithmetic can repeat it."
      ],
      "setFlags": [
        "route-a"
      ],
      "clues": [
        "a-logs"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-source-question"
        }
      ]
    },
    "a-source-question": {
      "title": "An identifier is now a tested source",
      "location": "The ranger briefing board",
      "body": [
        "Eli joins the meeting by telephone and asks whether you could simply trust the three tones. Cora says the tones are a claim made by the recording; the controlled equipment state is an independent observation. A copy of an identifier elsewhere could imitate a label, but it would not explain why the item appears when only B-4 is enabled and disappears when every permitted source in the comparison is disabled. The service team checked for unrelated signals throughout the supervised test.",
        "You correct the first observation times in pencil: 10:02 minus two minutes, 09:59 plus one, and 10:00 unchanged. All reach the same start. That agreement does not establish the file’s author, and silence at one receiver alone would be weak. The question asks for the pair of records that together support the narrower source conclusion. A complete answer should use the clock correction and the controlled comparison, while refusing a claim about the supplier that neither can establish."
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "puzzle": {
        "prompt": "Select the two observations that independently support B-4 as the actual playback source in the controlled test.",
        "options": [
          {
            "id": "1",
            "label": "After applying the stated clock offsets, all three receivers log the same first start.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "The item is heard with only B-4 enabled, absent with all compared repeaters disabled, and heard when B-4 returns.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "The recorded identifier proves no other source could ever copy the tones.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "The controlled test identifies the person who originally edited C18.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "a-source-result",
        "mode": "multiple",
        "wrongFeedback": "That set either leaves an essential link unsupported or includes a claim the records do not establish. Review the observations; no progress is lost.",
        "minSelections": 2,
        "maxSelections": 2
      }
    },
    "a-source-result": {
      "title": "The envelope before the machine",
      "location": "The maintenance evidence counter",
      "body": [
        "The test confirms B-4 itself played the changed item. Cora’s supervisor produces the next record: an intake photograph of a sealed envelope marked “project corrections,” taken before the service visit. Its dispatch sheet belongs to the redevelopment office. A second photograph shows the same numbered seal intact when Cora accepted it. The package was not a loose file discovered after the complaint; its existence and custody were documented before the evening activation.",
        "Cora explains her error in precise terms. She checked that the envelope came through the named project channel but did not verify a separate content approval. She placed its file in the pending slot because the cover sheet requested a delayed activation after the evening schedule. Her supervisor records that failure without treating it as proof that she composed the words. The preserved package copy can now be compared with the exported item. You will be comparing certified copies; no original evidence needs to be altered."
      ],
      "clues": [
        "a-source",
        "a-package"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-package-question"
        }
      ]
    },
    "a-package-question": {
      "title": "Match the supplied item",
      "location": "The certified-copy desk",
      "body": [
        "The package inventory identifies a file as C18, records a checked comparison code of 79F2, and prints its entire transcript. The service export identifies the active item as C18 with the same checked code and transcript. The complete C17 exercise has code 24A1 and includes the training introduction. The supervisor explains the code’s limited role: it is an integrity reference supplied by the certified report, not a word puzzle you must solve. In this comparison the transcript and independent custody records matter too.",
        "A file name alone could be copied. A single witness could misremember. Here the numbered seal photographs, dated intake, certified inventory, and exact content comparison form a chain. They establish the supplied package contained the item later played. They cannot establish whether every person who handled the envelope read it. Choose the conclusion the chain supports; do not turn the engineer’s handling error into authorship, or a matching voice into consent by the historical speaker."
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "puzzle": {
        "prompt": "What does the certified package-to-export comparison establish?",
        "options": [
          {
            "id": "1",
            "label": "The delivered package contained the C18 item later activated; it does not by itself establish what every handler knew.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "A matching file name alone proves Helen personally approved the modern access claim.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "The engineer must have composed the file because she stored it.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "C18 arose spontaneously from restored solar power, despite its earlier sealed inventory.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "a-package-result"
      }
    },
    "a-package-result": {
      "title": "A copy with a route through the world",
      "location": "The maintenance evidence counter",
      "body": [
        "The certified package and equipment export match. The supplied content therefore accounts for the changed words; a spontaneous replay fault cannot explain their appearance. You add the seal numbers, copy certificates, and comparison references to your report. June notices that the most useful evidence in the room is boring to look at: an intact seal beside a date, a receipt kept in order, a transcript no one tried to improve after the complaint.",
        "There remains a human link between the redevelopment office and Cora’s visit. The dispatch sheet does not identify its carrier by itself. Cora recalls a face but wants her memory tested against the contemporary receipt, and the quay office that issued it has a known clock problem. Tom arranges to meet Ruth Keene there. She volunteers at its small maritime collection now, and she kept the old clock running long after it stopped keeping good time. You leave the evidence originals in the supervisor’s custody."
      ],
      "clues": [
        "a-match"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-quay"
        }
      ]
    },
    "a-quay": {
      "title": "The clock above the ferry photographs",
      "location": "The old quay office",
      "body": [
        "Ruth Keene has set a chair below a wall of rescue-boat photographs. She remembers the clock because the replacement battery did not fix it: Wednesday’s check against the harbor time signal found it ten minutes fast. The desk ledger records the fault and the correction time. Cora’s handover receipt was stamped by that clock before it was reset. It reads 16:50. Her service sign-out records departure from B-4 at 17:00 using her calibrated work phone.",
        "The receipt bears Gideon Vale’s signature as delivering officer. Cora identifies him from their earlier project meeting, not from a coat glimpsed through rain. He has said that his calendar placed him at the ceremonial access briefing from 16:30 to 17:30. Ruth produces the public cancellation slip: the briefing was canceled at 16:20 that day. A calendar invitation is not an attendance record. You have a correctable time, a signed contemporary receipt, a direct identification, and an apparent alibi with a documented limit."
      ],
      "meets": [
        "ruth"
      ],
      "clues": [
        "a-receipt"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-delivery-question"
        }
      ]
    },
    "a-delivery-question": {
      "title": "A time that fits the service visit",
      "location": "The quay ledger table",
      "body": [
        "You write the wall-clock offset beside the receipt rather than silently changing its photographed time. A ten-minute-fast display reading 16:50 corresponds to 16:40. That lies inside Cora’s documented visit, which ended at 17:00. The later 22:14 event was scheduled activation; no one has shown a handover at that hour. These records fit together once you stop treating every timestamp as the same kind of event.",
        "Ruth is careful about what she did not see. She was sorting photographs in the adjoining room and cannot identify the carrier herself. Her value here is the contemporary clock ledger and cancellation slip. Cora supplies the direct identification; the receipt supplies the signature. Gideon’s calendar still records what was planned, but a canceled event does not prove where he actually was. Choose the explanation that combines the independent links while leaving unsupported claims, such as being at the equipment at night, out of the finding."
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "puzzle": {
        "prompt": "Which handover account fits the corrected clock, receipt, identification, and cancellation notice?",
        "options": [
          {
            "id": "1",
            "label": "The 16:50 display means 17:00 real time, after the service visit.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "Gideon’s listed ceremony proves his attendance even though it was canceled.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "The receipt corresponds to 16:40; his signed delivery and Cora’s identification fit the visit, while the calendar is no alibi.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "The 22:14 scheduled activation proves the parcel was delivered at 22:14.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "a-delivery-result"
      }
    },
    "a-delivery-result": {
      "title": "The handover has a person and a time",
      "location": "The old quay office doorway",
      "body": [
        "The corrected receipt places Gideon’s documented delivery at 16:40, within the service visit. Cora’s identification and his signature agree. His calendar cannot rebut that merely by listing a canceled ceremony. This does not mean you can infer everything he knew from the act of carrying an envelope. The next question is whether he supplied a correction in good faith or requested the misleading changes deliberately.",
        "Ruth asks why the whole dispute depends on a low crossing when the steps above the quay have existed throughout her life. Tom shows her the registered boundary plan. She recognizes marker 6 beside North Steps and offers to join a daylight walk along the cleared public side. No one needs to approach the closed causeway. Before leaving, June photographs the cancellation notice with its source reference. Small limits in a witness’s account have made the account stronger, not weaker; you can now tell exactly which piece of the chronology each person supports."
      ],
      "clues": [
        "a-delivery"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-boundary"
        }
      ]
    },
    "a-boundary": {
      "title": "A six cut into old stone",
      "location": "The cleared North Steps approach",
      "body": [
        "The path smells of wet leaves and the sea, but Tom keeps everyone behind the temporary inspection barrier. From that safe, public side the fixed boundary stone is visible. It carries a weathered 6 below a survey notch. Tom’s dated ranger photographs show the same stone in the same position before the sale was announced. The registered survey uses fixed marker 6 as the southern corner of corridor N6, running along the North Steps approach outside parcel S.",
        "Ruth remembers carrying blankets here after a training day with Helen. You mark that as a memory, separate from the surveyed boundary. The land question is not decided by nostalgia. The disposal schedule excludes N6; the sale drawing’s shaded parcel S stops at the marker. A promotional illustration spreads blue ink over the whole headland but carries no registration number. You have physical reference points for interpreting the legal plan, and a clear reason not to treat a simplified picture as the plan itself."
      ],
      "clues": [
        "a-stone"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-boundary-question"
        }
      ]
    },
    "a-boundary-question": {
      "title": "Read the parcel, not the color",
      "location": "The ranger map case",
      "body": [
        "Tom gives you a clean textual schedule so the puzzle does not depend on seeing a tiny map: “Parcel S: station buildings and garden south of fixed marker 6. Excluded: corridor N6, north of marker 6, giving approach to North Steps. Disposal of S does not dispose of N6.” The photograph identifies the fixed marker, and the registered drawing puts the steps on the excluded side. The publicity leaflet shades both sides alike.",
        "A land boundary does not guarantee that a stair is presently fit to use; that still requires physical inspection and management. Equally, a closed stair during an inspection does not erase the recorded corridor. You need to distinguish ownership, public access rights, and current safety. The question asks which conclusion the combined survey and schedule support. Refusing to overstate it is part of the solution: you are preserving a route for lawful review, not declaring that anybody can cross an unsafe barrier today."
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "puzzle": {
        "prompt": "What do the fixed marker, registered plan, and disposal schedule together establish?",
        "options": [
          {
            "id": "1",
            "label": "The blue publicity shading transfers every path, regardless of the registered exclusion.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "The North Steps corridor N6 is excluded from parcel S; its present safety still needs inspection.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "A retained corridor means every stair on it is safe to use immediately.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "A temporary inspection barrier cancels the registered corridor forever.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "a-boundary-result"
      }
    },
    "a-boundary-result": {
      "title": "An alternative that needs honest inspection",
      "location": "The upper public path",
      "body": [
        "The fixed marker and registered schedule agree: the North Steps corridor is outside the offered sale parcel. It cannot disappear merely because a publicity drawing shades it over. Tom asks the access team to inspect that retained approach as part of any future plan. Until then, the upper public path stays available under the existing condition and the lower crossings remain subject to their current notices.",
        "The practical result matters. The council does not have to choose between closing a public path immediately and trusting a misleading recording. There is a recorded corridor to examine, time to make a lawful access decision, and a reason to stop describing the causeway as an all-weather substitute. June photographs the empty sea below the barrier for her own memory, not for the report. The report gets the marker reference, schedule, and inspection request. You return to the office to ask who requested the edits and why the package used the sale project number."
      ],
      "clues": [
        "a-corridor"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-request"
        }
      ]
    },
    "a-request": {
      "title": "A request with the limits crossed out",
      "location": "The redevelopment records room",
      "body": [
        "Alma has obtained the signed content request from the project file under the council’s review procedure. Gideon’s signature authorizes it. The text asks the contractor to “remove introductory training wording and the rising-water caveat; retain reassuring voice; end on access-open line.” Its project reference matches the station sale’s access certificate. The contractor’s return sheet records supply of the requested edit, without claiming to approve shoreline access or advise the council on land rights.",
        "Gideon’s office also kept the full C17 transcript as an attachment. The restriction was therefore present in the material associated with the request, not a fact concealed in an inaccessible archive. His covering message says a simple open-access statement will avoid delaying the certificate. This is much more specific than a motive inferred from a job title. You preserve the original wording and the contractor’s stated limits. A contractor’s technical ability to assemble a file did not grant it authority to certify a route."
      ],
      "clues": [
        "a-redline"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-intent-question"
        }
      ]
    },
    "a-intent-question": {
      "title": "Separate a mistake from a directed omission",
      "location": "The review preparation room",
      "body": [
        "The hearing officer asks which two records most directly distinguish an accidental old recording from a deliberate misleading request connected to the sale. The delivery chain already establishes how C18 reached B-4. Now you must connect its omissions to a decision. A manager benefiting from a sale would be a reason to inquire, but benefit alone would not prove that he asked anyone to change words. Cora’s failure to check approval matters too, yet it is a different question from why the edit was requested.",
        "On the table are the signed redline, the sale condition, the old family photograph Ruth brought, and June’s personal recognition of Helen. Two are useful here as evidence of a specific request and its decision context. Two explain why people care, but cannot prove intent. The question does not ask you to pronounce a legal verdict. It asks whether the documentary chain is strong enough to refer a defined misleading submission for independent review."
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "puzzle": {
        "prompt": "Select the two documents that most directly connect intentional omissions to the access decision.",
        "options": [
          {
            "id": "1",
            "label": "The signed request explicitly removes the training introduction and rising-water restriction.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "The sale condition requires alternative access, and the request’s project reference matches that certificate.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "A family photograph proves who edited a later digital file.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "June’s emotional recognition establishes why Gideon supplied the package.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "a-intent-result",
        "mode": "multiple",
        "wrongFeedback": "That set either leaves an essential link unsupported or includes a claim the records do not establish. Review the observations; no progress is lost.",
        "minSelections": 2,
        "maxSelections": 2
      }
    },
    "a-intent-result": {
      "title": "The request fits the decision it sought",
      "location": "The council review room",
      "body": [
        "The signed request explicitly removes the historical limits, and its project reference ties the open-access ending to the certificate needed for the sale. Together with the package chain, these records support a deliberate attempt to present qualified historical speech as unrestricted current advice. They do not turn you into a court. Alma frames the referral around specified documents and decisions so the responsible reviewing bodies can test them.",
        "Cora submits her own account of accepting a project package without separate content approval. Her supervisor proposes a two-person sign-off for future stored public guidance. Tom attaches the current closure rule and the retained-corridor schedule. Your investigation has produced more than a person to blame: it has identified the defective handover, the false authority of the edited voice, and the access alternative that needs proper inspection. Gideon has agreed to answer questions with the evidence in front of him. June asks that the private family recording not be played as an appeal for sympathy."
      ],
      "clues": [
        "a-intent"
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-interview"
        }
      ]
    },
    "a-interview": {
      "title": "An account tested against the copies",
      "location": "The recorded council interview",
      "body": [
        "Gideon first says he believed the contractor’s output was merely a tidier version of an approved historical item. Alma shows him his own signed request to remove the training words and rising-water caveat. He acknowledges supplying the package and using the open-access ending in the certificate appendix. He says he feared another delay would cost the buyer and the town a season of work. The explanation supplies his stated motive; it does not make an unverified route safe or restore an approval that was never given.",
        "The officer distinguishes his admissions from your independent evidence. If he later changes his account, the original request, receipt, package copy, event log, and access condition still exist. Cora answers separately about her handover procedure. No one asks June whether she forgives anyone on behalf of her mother. The review is about a misleading public message and a land decision. The family story can remain human without becoming a substitute for the records that establish the case."
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-final-question"
        }
      ]
    },
    "a-final-question": {
      "title": "Choose a remedy the evidence supports",
      "location": "The council review room",
      "body": [
        "You have the final opportunity to recommend a concrete next step. The immediate correction has already gone out; misleading audio is preserved and disabled. The package chain identifies the supplier, the signed request identifies the omissions, and the access condition explains their effect. The North Steps corridor is retained on the registered plan but still needs an inspection. The sale of the station is a separate policy choice once truthful access information and proper approvals exist.",
        "June asks you to avoid an ending that pretends every difficult question has vanished. You can support pausing the defective access certificate, referring the documented submission for independent review, and keeping the current public route available until a lawful alternative is cleared. You cannot support opening a closed crossing on the strength of an old voice, destroying the evidence to protect the station, or declaring the entire inn project criminal merely because one submission was misleading. Choose the remedy proportionate to what you proved."
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "puzzle": {
        "prompt": "Which recommendation follows the established evidence and its limits?",
        "options": [
          {
            "id": "1",
            "label": "Open the closed causeway immediately because the historical speaker sounded confident.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "Destroy the edited file so no listener can ever repeat the mistake.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "Declare every part of the proposed inn illegal without a separate review.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "Pause the defective access certificate, preserve and refer the evidence, retain the current public route, and inspect alternatives.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "a-resolution"
      }
    },
    "a-resolution": {
      "title": "The upper path stays open",
      "location": "The council foyer",
      "body": [
        "The council pauses the access certificate and the proposed closure of the upper public path. Its review referral names the signed request and package chain, while a separate engineering review addresses the unchecked content handover. The access team receives the retained-corridor survey and schedules a real inspection. Gideon is removed from certifying this application while the review proceeds. The decision records what has been established and leaves any legal penalties to the proper process.",
        "Outside, Tom replaces a faded notice with the current official information. Ruth pauses at the photograph of the boundary stone, pleased that something she had always known informally now has a reference anyone can check. Cora thanks you for keeping her documented mistake distinct from writing the edit; she still has to answer for it. June folds the evidence checklist and puts it in the public file. The wrapped listening copy goes into her own bag, where it belongs."
      ],
      "clues": [],
      "routeLabel": "The equipment-and-shoreline investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "a-ending"
        }
      ]
    },
    "a-ending": {
      "title": "A voice introduced by its own history",
      "location": "Harbor Community Radio",
      "body": [
        "At the next evening program June explains the timer, the source exercise, the later edit, and the documentary chain. She gives listeners the correction reference and the public review link without turning the inquiry into a performance. With the family’s permission and the archive’s clearance, she plays a short, complete extract beginning “This is practice.” Helen’s voice is warm, ordinary, and properly introduced. Nothing in it promises that a modern crossing is open.",
        "At 23:07 the music continues. After the program, June listens privately to the parts of the exercise that had nothing to do with the case: a false start, a joke about the microphone, another volunteer setting down a cup. You wash the mugs while she keeps that small piece of her mother’s working life. Outside the station window, the upper path lamps remain on. The solved mystery has changed a public decision and returned a recording to its honest context."
      ],
      "routeLabel": "The equipment-and-shoreline investigation",
      "ending": {
        "title": "The upper path remains",
        "body": [
          "You solved the recurring signal, identified its source, and proved the later misuse through a documented chain of physical delivery and shoreline evidence. The access decision is paused for a lawful review."
        ],
        "kind": "solved"
      }
    },
    "b-index": {
      "title": "The shelf number is a question",
      "location": "The harbor archive",
      "body": [
        "Mara reserves the long table under the ordinary clock rather than the listening booth. This route starts with how a source is found and described. The finding aid gives a printed rule: original exercises are filed by speaker initial, two-digit year, and exercise number; later equipment codes appear only as cross-references. Helen Avery’s fourth coastal exercise was recorded in 1986. A separate entry, B4-89, concerns a repeater inspection in 1989 and happens to mention a replacement cassette.",
        "Alma has brought the public access appendix and asks for the exact source used to support it. The appendix says “historic record confirms western access” without a shelf reference. Mara will not assume that the most promising label is the right original. She gives you four candidate entries and the filing rule, along with an account of the archive’s later equipment-code index. The task is not to crack an arbitrary cipher. It is to follow a stated catalog convention while resisting a plausible but unrelated cross-reference."
      ],
      "setFlags": [
        "route-b"
      ],
      "clues": [
        "b-index"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-index-question"
        }
      ]
    },
    "b-index-question": {
      "title": "Choose the original, not the cross-reference",
      "location": "The archive finding-aid desk",
      "body": [
        "The candidate entries are H86-4, B4-89, H89-6, and H86-3. H86-4 is listed under Helen Avery, 1986, exercise four. B4-89 is the equipment inspection; H89-6 is a later harbor exercise by another speaker; H86-3 is Helen’s third exercise on fog procedure. The numbers share enough features to reward a hasty search with the wrong result. The finding aid puts every distinction in view.",
        "June remembers hearing that a cassette was replaced after a repair, but that memory cannot choose between an original exercise and a later hardware record. Mara asks you to select the entry that the supplied filing rule actually identifies. Once selected, its transfer record can be used to verify the complete master. Searching well is part of reasoning well: if the source is wrong, even an exact transcription would answer a different question. You note the rejected cross-reference so the final report can explain why it was tempting."
      ],
      "routeLabel": "The archive-and-review investigation",
      "puzzle": {
        "prompt": "Which entry follows the printed speaker–year–exercise filing rule for Helen Avery’s fourth 1986 exercise?",
        "options": [
          {
            "id": "1",
            "label": "B4-89, because the current hardware is called B-4.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "H89-6, because all later transfers replace the date of the source.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "H86-4, matching Helen, 1986, exercise four.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "H86-3, because any exercise by the same speaker is equivalent.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "b-index-result"
      }
    },
    "b-index-result": {
      "title": "The exercise in its whole setting",
      "location": "The supervised listening booth",
      "body": [
        "The correct entry leads to the verified master you identified earlier, now played from start to finish under Mara’s supervision. It opens, “This is practice.” Helen addresses a training group at the old landing, asks them to keep a light visible, and says the low crossing closes at rising water. The upper marked path is the fallback. At the end someone asks whether to repeat the exercise with a dimmer lamp. The context is a supervised lesson, not an inspection declaring every future access safe.",
        "B4-89 turns out to be exactly what its index promised: a hardware inspection that says nothing about modern tide thresholds. The word “replacement” describes a physical cassette copy, not new guidance. Mara records that negative finding so it will not become a fresh rumor. June hears Helen pause to correct a trainee kindly and smiles for the first time that morning. You keep the full transcript beside C18. Its omissions and changed ending can now be compared against an authenticated source rather than a remembered version."
      ],
      "clues": [
        "b-master"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-edit-question"
        }
      ]
    },
    "b-edit-question": {
      "title": "A true voice in an untrue frame",
      "location": "The archive comparison desk",
      "body": [
        "Mara sets out a three-column transcript. Column one is the complete exercise. Column two is C17, which keeps the exercise complete and identified. Column three is C18. The third omits the training introduction and the rising-water restriction, retains the familiar reassuring phrases, and ends with “Western access is open.” There is no attached modern tide observation, inspection certificate, or approval from the harbor access team. The contractor’s technical note describes an assembled audio item only.",
        "You are not deciding whether every word was spoken by Helen at some point. The matched source already supports that the voice is hers. The question is whether the edit can carry the authority claimed for it. An authentic voice can be placed into a misleading frame by removing limits and introducing an unsupported conclusion. Select the two concrete defects that establish that problem. The age of the recording and June’s feelings do not themselves make the advice true or false."
      ],
      "routeLabel": "The archive-and-review investigation",
      "puzzle": {
        "prompt": "Select the two concrete defects that prevent the edit from serving as current unrestricted access advice.",
        "options": [
          {
            "id": "1",
            "label": "C18 removes the explicit training introduction and rising-water restriction from the authenticated source.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "No current observation, access inspection, or modern clearance accompanies the new access-open conclusion.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "The voice is old, so none of its original words can ever have been accurate.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "June’s recognition automatically authorizes every later use of the voice.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "b-edit-result",
        "mode": "multiple",
        "wrongFeedback": "That set either leaves an essential link unsupported or includes a claim the records do not establish. Review the observations; no progress is lost.",
        "minSelections": 2,
        "maxSelections": 2
      }
    },
    "b-edit-result": {
      "title": "Authentication does not grant new authority",
      "location": "The archive reading table",
      "body": [
        "The supervised comparison documents the missing training label and safety limit, while the access file contains no present-day clearance to replace them. The preserved voice is authentic; its newly implied authority is not established. Alma asks Mara for a certified comparison rather than a dramatic montage. The two full transcripts, with omissions marked and sources cited, will let a reviewer test the argument without trusting your editing choices.",
        "June drafts a sentence for the eventual station explanation: “We found the real speaker, but we still had to ask whether the message meant what she meant.” She leaves it out of the public correction for now because the formal record is unfinished. Alma has found a potential problem with the claim that C18 was approved. The appendix sits beside an approved minute, but its arrival stamp is later. You move from the sound’s provenance to the paper’s provenance, carrying the same question: does a genuine source justify the authority someone has attached to it?"
      ],
      "clues": [
        "b-edit",
        "b-misuse"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-register"
        }
      ]
    },
    "b-register": {
      "title": "A receipt that promises very little",
      "location": "The council register room",
      "body": [
        "Alma places the original arrival register under a camera and supplies a certified copy. Tuesday at 12:00 the committee approved a content schedule listing C17 only. The signed minute has no C18 attachment. Wednesday at 18:15 Alma registered an appendix delivered under Gideon Vale’s signed covering letter. The office stamp says RECEIVED, not APPROVED. A clerk then filed it beside the approved minute because both used the same project reference.",
        "The covering letter calls it “the approved access audio appendix, with no material change of meaning.” Its attached comparison sheet identifies C18 as a revision prepared after the earlier meeting. Alma did not attend that meeting and cannot create retrospective approval by filing a document. The sender’s assertion is evidence of what he claimed, not independent confirmation that the claim is true. You copy the minute’s attachment list as carefully as the new appendix’s stamp. An absence matters here because the official list is complete and expressly identifies the sole approved version."
      ],
      "clues": [
        "b-register"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-approval-question"
        }
      ]
    },
    "b-approval-question": {
      "title": "Put the authority in the right order",
      "location": "The council register room",
      "body": [
        "You arrange four dated records: the 12:00 approval listing C17; the later revision sheet for C18; Cora’s Wednesday 17:00 photograph of active C17 and a pending item; and Alma’s Wednesday 18:15 receipt of the C18 appendix. The scheduled activation at 22:14 remains a fifth, different event. None of the stamps says a new committee approved the revision. Gideon’s cover describes it that way, but no decision record supports his description.",
        "The trap is an easy one: a late document physically stored with an earlier approved minute can look like an approved attachment if someone reads the folder rather than its chronology. Alma explains her register’s limited promise. It establishes arrival and custody, never a sender’s truthfulness or a committee’s decision. Your answer should identify that precise failure. It should not accuse the clerk of writing the audio or claim that an activation timestamp is the same thing as council authorization."
      ],
      "routeLabel": "The archive-and-review investigation",
      "puzzle": {
        "prompt": "What does the approval and registration chronology establish?",
        "options": [
          {
            "id": "1",
            "label": "The received stamp automatically grants the older meeting’s approval to a newly filed appendix.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "C17 alone was approved; C18’s later receipt beside that minute does not establish approval of the revision.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "The 22:14 activation is itself a council decision authorizing the edit.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "Alma must have edited C18 because she registered its arrival.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "b-approval-result"
      }
    },
    "b-approval-result": {
      "title": "A folder cannot approve its contents",
      "location": "The council records counter",
      "body": [
        "C18’s registration establishes when the appendix entered the file, not that it inherited approval from the C17 minute. The attached version sheet and complete earlier attachment list refute the shortcut. Alma opens a correction record preserving the original arrangement and explaining why it misled; she does not quietly replace the folder and lose the history of the error. The hearing will receive both the wrong authority claim and the records that test it.",
        "Gideon asks whether this is merely a clerical dispute. Alma reads the sale condition back to him: the access certificate supports closing a public route, so its authority is material. He agrees to attend a recorded review with the full comparison available. Before that meeting you need to test his second claim, that the old landing and the current causeway are interchangeable alternatives. The map comparison has located the historical place. The disposal schedules can now establish what land the proposal actually includes."
      ],
      "clues": [
        "b-approval"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-schedule"
        }
      ]
    },
    "b-schedule": {
      "title": "The sheet that was never a survey",
      "location": "The public land-records desk",
      "body": [
        "The disposal file contains two very different pictures. A publicity drawing shades the whole headland and gives a broad label, WESTERN ACCESS. It is unsigned, has no registry number, and says “illustration” below the title. The registered plan names parcel S and shows an excluded corridor N6. The signed disposal schedule states: “N6, giving approach to North Steps north of fixed marker 6, remains excluded from this disposal.” The public path condition is printed on the next page.",
        "You do not need to visit a disputed boundary to see the conflict in the documents. The illustrated shading includes a route the legal schedule expressly retains. Alma checks the revision histories; neither the plan nor schedule has been superseded. A footnote on the publicity draft says colors may be simplified for reproduction. Gideon’s certificate nevertheless describes the shaded area as if it establishes all access arrangements. The documents themselves tell you which carries legal description and which was meant only to explain the project visually."
      ],
      "clues": [
        "b-plan"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-plan-question"
        }
      ]
    },
    "b-plan-question": {
      "title": "Choose the source that describes the disposal",
      "location": "The land-records reading table",
      "body": [
        "Mara asks you to state the document hierarchy without pretending to give a court judgment about every possible future use. The registered plan and signed schedule agree that N6 is excluded. The publicity drawing is explicitly illustrative; no formal revision has replaced the registered plan and schedule. Its color cannot amend those records. A later title decision could be made through the proper process, but no such decision appears here.",
        "There are three separate questions again: what land is in the sale, what rights are retained, and what physical route is safe today. Your documentary route establishes the first two only to the extent the supplied disposal documents state them. It does not certify the stairs. A good answer rejects the false idea that informal shading can erase a named exclusion, while also rejecting the attractive overclaim that a retained corridor automatically opens every barrier. The report will request an access review rather than invite listeners onto uninspected steps."
      ],
      "routeLabel": "The archive-and-review investigation",
      "puzzle": {
        "prompt": "Which conclusion respects the registered disposal records and their limits?",
        "options": [
          {
            "id": "1",
            "label": "An illustrative blue wash cancels a named exclusion in a signed schedule.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "The retained corridor proves the uninspected steps are safe for immediate use.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "Any temporary closure proves the corridor has been sold.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "The registered plan and signed schedule retain N6; the publicity drawing cannot amend that, and safety needs a separate assessment.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "b-plan-result"
      }
    },
    "b-plan-result": {
      "title": "A condition survives the illustration",
      "location": "The council records counter",
      "body": [
        "The retained corridor and upper-path condition remain in the authoritative disposal documents. The promotional drawing cannot substitute for either. Alma adds the schedule reference to the agenda for the review. You can now challenge the proposed closure without relying on a local recollection or on the moral appeal of an old family recording. The current legal description already requires an honest access decision.",
        "Mara has also located Ruth Keene, a retired lifeboat volunteer whose notebook was donated alongside the training collection. Ruth offers to identify her own handwriting at the archive. The historical question still matters because Gideon’s appendix calls Helen’s exercise evidence that the modern causeway has always served as a safe substitute. You have disproved the geographical shortcut with maps. Independent historical context can show what the exercise was actually for, while keeping a strict boundary between an event in 1986 and a current safety clearance."
      ],
      "clues": [
        "b-right"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-notebook"
        }
      ]
    },
    "b-notebook": {
      "title": "The notebook without a legend around it",
      "location": "The archive meeting room",
      "body": [
        "Ruth arrives with her own copy of the donated notebook. She recognizes a page dated 14 November 1986: practice group at North Steps, rising-water reminder, Helen taking the microphone after tea. The rescue-service duty log, kept by someone else, records the same training group at that landing. Neither mentions a crossing of the modern West Causeway. The two sources independently support the exercise’s setting and purpose.",
        "Ruth does not claim perfect memory. She remembers a yellow lamp but the notebook calls it white, and she asks you to trust the contemporary page on that detail. A successful landing in a training session says nothing about today’s water height or the structural state of a different crossing. June asks whether Helen liked broadcasting. Ruth answers as a friend, with a story about a misplaced script, then lets Mara turn back to the records. Personal recollection has a place here, but the case’s factual links remain dated, attributed, and bounded."
      ],
      "meets": [
        "ruth"
      ],
      "clues": [
        "b-witness"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-context-question"
        }
      ]
    },
    "b-context-question": {
      "title": "What a historical success cannot certify",
      "location": "The archive meeting table",
      "body": [
        "You list the corroborated historical facts: the exercise occurred in 1986; the notebook and independent service log place it at North Steps; the safety instruction included a rising-water limit. Beside them you list the modern facts: a different low causeway, a current closure threshold, and a disposal proposal with an unfulfilled alternative-access condition. The old event and present decision relate to one another, but they are not interchangeable.",
        "The question is which use of Ruth’s material is legitimate. Her notebook is not meaningless because memory can err; its contemporary entries can be checked against another source. It is also not a perpetual safety certificate because a training group once arrived safely. The strongest conclusion explains the old message’s setting and rejects its inflation into present permission. June says this is the point she wants listeners to understand: respecting an old voice means preserving its limits, rather than making it answer a question it was never asked."
      ],
      "routeLabel": "The archive-and-review investigation",
      "puzzle": {
        "prompt": "What can the contemporary notebook and independent service log legitimately establish?",
        "options": [
          {
            "id": "1",
            "label": "They corroborate the old exercise at North Steps and its context, but do not certify the modern causeway.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "One successful historical landing proves every future crossing safe at any water height.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "A present memory error about lamp color makes every contemporary document worthless.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "Ruth’s friendship with Helen gives her authority to approve the station sale.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "b-context-result"
      }
    },
    "b-context-result": {
      "title": "The record gets back its own scale",
      "location": "The archive copy desk",
      "body": [
        "The independent log and notebook corroborate the historical landing and the purpose of the exercise. They do not certify modern access. Mara supplies a short contextual statement listing that distinction, and Ruth signs only the identification of her handwriting and her present account. No one asks her to endorse a route she has not inspected. June requests separate permission for a future broadcast extract rather than treating a witness interview as automatic consent.",
        "Your review packet now has four parts: authenticated source and full comparison; version chronology and approval record; registered land description; and bounded historical context. The case no longer depends on an eerie sound or a single dramatic witness. It is strong because each document answers one defined question and its limits are visible. Alma checks that Gideon has received the same packet and a chance to answer. You will test his claim of approval directly, with the original attachment list and the later covering letter side by side."
      ],
      "clues": [
        "b-context"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-hearing"
        }
      ]
    },
    "b-hearing": {
      "title": "The hearing with both transcripts",
      "location": "The recorded council review",
      "body": [
        "Gideon says the edit was intended to make an old item easier for listeners to follow, not to change access policy. Alma asks him to read his signed covering letter calling C18 approved with no material change of meaning. Mara then reads the omitted training introduction and rising-water sentence from the certified comparison. The hearing officer asks what modern clearance replaced them. Gideon cannot produce one. He acknowledges supplying the appendix and seeking a simple access statement because the certificate was holding up the sale.",
        "He says he thought the older approval covered the revision. The complete attachment list shows the approval named C17 only, while his own revision sheet postdates that meeting. The officer records his account and the contradictory documents without asking you for a verdict. The inquiry can test the specific misleading submission and its consequences. June remains a listener in the room; her family connection is disclosed but does not carry any factual link in the chain. The evidence has reached the person entitled to answer it."
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-final-question"
        }
      ]
    },
    "b-final-question": {
      "title": "State the two findings you can defend",
      "location": "The council review room",
      "body": [
        "The officer requests a pair of findings for the formal correction. One must explain why the audio cannot support the access certificate. The other must explain why the claimed approval fails. You have enough to establish both without claiming you personally inspected the shoreline or witnessed the envelope handover. That is the strength and limit of the route you chose: source comparison, registry chronology, and a recorded answer tested against documents.",
        "The final selection should preserve those distinctions. Helen’s genuine voice does not supply current authority after its limits are cut away. A received appendix does not become approved simply because someone files it beside an older minute. Your route does not establish the precise minute of physical delivery at B-4, nor does it declare a retained stair safe. Those are plausible subjects for further inquiry, but adding them now would weaken a report whose actual links are well supported. Select the two findings the packet proves."
      ],
      "routeLabel": "The archive-and-review investigation",
      "puzzle": {
        "prompt": "Select the two findings supported by this route’s evidence.",
        "options": [
          {
            "id": "1",
            "label": "The authenticated source was edited to remove its limits without a current access clearance to replace them.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "2",
            "label": "C18 was registered after the relevant approval, which listed C17 only; filing did not create authorization.",
            "correct": true,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "3",
            "label": "The registry route proves the exact minute Gideon physically delivered the equipment envelope.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          },
          {
            "id": "4",
            "label": "A retained legal corridor guarantees every step is physically safe tonight.",
            "correct": false,
            "feedback": "The explanation must account for every dated record, including the limits printed beside it. Compare the source, its clock, and what it actually proves."
          }
        ],
        "correctTo": "b-resolution",
        "mode": "multiple",
        "wrongFeedback": "That set either leaves an essential link unsupported or includes a claim the records do not establish. Review the observations; no progress is lost.",
        "minSelections": 2,
        "maxSelections": 2
      }
    },
    "b-resolution": {
      "title": "The appendix is withdrawn from the decision",
      "location": "The council records counter",
      "body": [
        "The review removes C18’s appendix from the access certificate, records that the claimed approval was unsupported, and pauses the proposed closure of the upper public path. The council refers the misleading submission and defective approval handling for independent review. It orders a fresh access assessment using the registered schedules and current inspections. Gideon no longer certifies this application while that process proceeds. The hearing transcript preserves his account alongside the documents that contradicted it.",
        "Alma opens a corrected public file that links to the original error instead of burying it. Mara deposits the complete comparison with the archive, leaving family permissions in their proper separate folder. Ruth checks the new contextual caption and asks for one small change: the training group, not just its announcer, should be credited. June smiles and writes every name the duty log supplies. The public remedy is a reliable record and an honest decision process; the personal gift is getting ordinary people back into their own history."
      ],
      "clues": [
        "b-hearing"
      ],
      "routeLabel": "The archive-and-review investigation",
      "choices": [
        {
          "id": "continue",
          "label": "Follow the next link in this investigation",
          "to": "b-ending"
        }
      ]
    },
    "b-ending": {
      "title": "The program with a footnote",
      "location": "Harbor Community Radio",
      "body": [
        "June explains the case on the next evening program using the two transcript versions and the approval dates. The station website links the correction, complete source context, and public review record. Nobody has to believe in the station’s authority to inspect the argument. With the family’s permission and the archive’s clearance, she plays a complete short extract that begins by identifying the exercise as practice. She names Helen Avery, Ruth’s training group, and the year.",
        "At 23:07 a record about an entirely different subject continues playing. Later June stays after the volunteers leave to hear the private copy from beginning to end. You put the annotated comparison into the station file and leave her the room. Through the glass you see her laugh at something too faint for you to hear. The voice has stopped making a promise it could never keep. It has become a piece of a life, with its context restored and its public misuse answered."
      ],
      "routeLabel": "The archive-and-review investigation",
      "ending": {
        "title": "A reliable public record",
        "body": [
          "You solved the recurring signal and proved the misleading edit and unsupported approval through authenticated sources, chronology, and a recorded review. The public decision now requires truthful evidence."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "a-complete",
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
          "type": "answer",
          "id": "2"
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
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "3"
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
            "1",
            "2"
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
          "id": "4"
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
            "1",
            "2"
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
          "id": "take-a"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": [
            "1",
            "2"
          ]
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "1"
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
          "id": "3"
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
          "id": "2"
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
            "1",
            "2"
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
          "id": "4"
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    },
    {
      "id": "b-complete",
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
          "type": "answer",
          "id": "2"
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
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "3"
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
            "1",
            "2"
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
          "id": "4"
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
            "1",
            "2"
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
          "id": "take-b"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": "3"
        },
        {
          "type": "choice",
          "id": "continue"
        },
        {
          "type": "answer",
          "id": [
            "1",
            "2"
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
          "id": "2"
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
          "id": "4"
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
          "id": "1"
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
            "1",
            "2"
          ]
        },
        {
          "type": "choice",
          "id": "continue"
        }
      ]
    }
  ]
};
