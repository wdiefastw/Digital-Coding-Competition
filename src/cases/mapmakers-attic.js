/** Original expanded mystery with route-specific evidence and resolutions. */
export default {
  "id": "mapmakers-attic",
  "title": "The Mapmaker’s Attic",
  "genre": "Historical mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "A folded map in an inherited attic places an orchard on the wrong side of a boundary. Before the surveyors arrive, choose whether to follow the land or the hands that printed it.",
  "setting": "An old mapmaker’s house and the neighboring orchard",
  "contentNote": "Estimated first-play time includes reading and deduction.",
  "revision": 2,
  "flags": [
    "route-a",
    "route-b"
  ],
  "characters": [
    {
      "id": "nora",
      "name": "Nora Fen",
      "role": "Mapmaker’s granddaughter",
      "description": "Inherited careful instruments and a collection of questions nobody labeled.",
      "color": "#b39c7c"
    },
    {
      "id": "ellis",
      "name": "Ellis Rowe",
      "role": "Boundary surveyor",
      "description": "Will measure a line twice before allowing it to become somebody’s wall.",
      "color": "#8fa59f"
    },
    {
      "id": "rowan",
      "name": "Rowan Bell",
      "role": "Retired herdsman",
      "description": "Remembers where paths went before the road was straightened.",
      "color": "#a69a79"
    },
    {
      "id": "agnes",
      "name": "Agnes Pell",
      "role": "County archivist",
      "description": "Keeps a distinction between a document’s age and the authority of its words.",
      "color": "#9c93ae"
    },
    {
      "id": "felix",
      "name": "Felix Dane",
      "role": "Print restorer",
      "description": "Can read the quiet history of a plate that has changed hands.",
      "color": "#bc967d"
    },
    {
      "id": "mara",
      "name": "Mara Holt",
      "role": "Orchard tenant",
      "description": "Has planted enough trees to know that a straight ink line can have crooked consequences.",
      "color": "#8ba278"
    }
  ],
  "clues": [
    {
      "id": "legend",
      "title": "A survey with north at the left",
      "description": "The original compass mark places north along the left margin, not at the top. The deed’s bearings use true north, and its distances are independent of the printed page’s orientation."
    },
    {
      "id": "deed",
      "title": "The two-part boundary description",
      "description": "The signed description runs from the old well 80 paces west to the split ash, then 40 paces north to the stone. A separate sentence grants passage along the boundary; it does not transfer the orchard."
    },
    {
      "id": "well",
      "title": "The old well, not the new pump",
      "description": "A parish maintenance sketch fixes the old well beside the former mill lane. The modern pump was installed later and cannot supply the deed’s starting point."
    },
    {
      "id": "stump",
      "title": "The split ash’s surviving base",
      "description": "Rowan’s dated fencing sketch and the visible divided root base identify the old split ash. The younger tree beside the new road is not the original marker."
    },
    {
      "id": "measure",
      "title": "The measured corner",
      "description": "From the verified old well,80 paces west reach the divided root base;40 paces north then reach the buried stone. The route follows true bearings, not the top of the copied page."
    },
    {
      "id": "land-result",
      "title": "A boundary without a land transfer",
      "description": "The verified corner and deed place the orchard on Mara’s side. The public passage follows its edge; the passage clause does not give the orchard itself to another owner."
    },
    {
      "id": "catalog",
      "title": "An unsigned later legend",
      "description": "The attic copy combines an early survey plate with a later compass legend pasted into its margin. The signed deed does not refer to that added legend."
    },
    {
      "id": "plate",
      "title": "A plate and its mirror",
      "description": "The copper plate’s marked edge was originally the left of the printed north mark. A later restorer placed a conventional top-north rose on the image without rotating the survey itself."
    },
    {
      "id": "proof",
      "title": "A dated proof before the pasted legend",
      "description": "A dated workshop proof matches the original left-north orientation and the deed’s bearings. It predates the disputed attic summary."
    },
    {
      "id": "grant",
      "title": "Passage is not possession",
      "description": "The grant gives walkers access along the boundary for market days. It explicitly reserves the orchard’s trees, produce, and tenancy to the existing holder."
    },
    {
      "id": "copy-chain",
      "title": "A source hierarchy for the dispute",
      "description": "The signed deed and early dated proof agree. The later unsigned pasted compass rose and a shortened ownership summary introduce the discrepancy."
    },
    {
      "id": "registry",
      "title": "An annotatable record",
      "description": "The registry can retain the disputed copy with an annotation and link it to the deed and proof. Replacing or secretly altering it would destroy the history of the error."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A line through someone’s trees",
      "location": "The mapmaker’s attic",
      "body": [
        "Nora Fen has spread a folded map between an instrument box and a window full of pear branches. A new property agent says the map puts half the neighboring orchard on his client’s land. Mara, who tends the trees, has received notice that surveyors will arrive tomorrow. Nora does not want her grandfather’s work used carelessly, but she cannot answer the dispute by insisting he was a good man.",
        "The map has a compass rose, a handwritten scale, and a pasted summary in a different ink. A signed boundary description survives separately. You can follow the physical markers with a surveyor or trace the printed document through the archive and workshop. First, you need to establish how to read the bearings."
      ],
      "meets": [
        "nora"
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
      "title": "The top of a page is not a direction",
      "location": "The attic worktable",
      "body": [
        "The older compass mark places north along the left margin. A later decorative rose points north toward the top. The deed never refers to either decoration; it gives true bearings and distances: from the old well,80 paces west to a split ash, then 40 paces north to a stone. Another sentence grants market-day passage along the resulting boundary.",
        "If you assume every map has north at the top, one route appears to cut through the orchard. If you rotate the bearings correctly, it may follow the edge instead. That is a hypothesis to test, not an entitlement to move a boundary. A signed description and independently identified markers will matter more than the confidence of whichever person can point most dramatically at the printed line."
      ],
      "clues": [
        "legend",
        "deed"
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
      "title": "Choose a frame before choosing a side",
      "location": "The attic survey desk",
      "body": [
        "You cannot begin by measuring toward the top of the paper because two incompatible north marks appear on it. The true bearings in the signed deed provide a frame independent of the disputed illustration. A correct first decision should preserve that frame while leaving the age and identity of the physical markers open to examination.",
        "The passage clause is also separate from ownership. A line people may walk does not necessarily give them the surrounding trees. Do not try to settle both issues with one decorative arrow. Choose the method that will let either later route check its result against the same signed source rather than quietly changing directions whenever a familiar landmark appears."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "What should anchor the investigation?",
        "options": [
          {
            "id": "bearings",
            "label": "Use the deed’s true bearings and separately verify its named starting marker.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "top",
            "label": "Treat the top edge as north because that is usual on newer maps.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "ownership",
            "label": "Treat permission to walk a line as ownership of everything beside it.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "reputation",
            "label": "Ignore the signed description because Nora trusts her grandfather.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "choice"
      }
    },
    "choice": {
      "title": "Boots or printing ink",
      "location": "The mapmaker’s stair",
      "body": [
        "Ellis, a boundary surveyor, can take you through the orchard, the old mill lane, and the surviving marker sites. That route will produce a measured correction the waiting surveyors can check on the land. The physical journey will not explain every later printing decision.",
        "Agnes at the county archive can obtain the deed’s earlier proof and introduce the print restorer who handled the plate. That route can establish how the contradictory map was assembled and prepare a registry annotation. It will rely on documented source history rather than your own walk along the corner. Choose which work you can complete before tomorrow’s visit. Both methods can protect the orchard, but they require different observations and leave different useful records."
      ],
      "choices": [
        {
          "id": "a",
          "label": "Walk the original markers with the boundary surveyor",
          "to": "a00",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "b",
          "label": "Trace the plate and grant through workshop and registry",
          "to": "b00",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "a00": {
      "title": "A newer pump in a more convenient place",
      "location": "The straightened mill road",
      "body": [
        "Ellis refuses to start at the shiny pump beside the present road. It is convenient, conspicuous, and installed seventy years after the deed. The parish maintenance sketch places the old well beside the abandoned mill lane, now hidden behind a hedge. Nora’s map shows both water sources in different inks, which may explain why a hurried reader chose the wrong one.",
        "You walk the old lane with the sketch rather than treating a metal cover as self-identifying. A well can survive after its road disappears. The surveyor records its position and the source that connects it to the deed. That gives the first distance a stable beginning and removes an apparent shortcut that would have produced the desired answer for the wrong reason."
      ],
      "meets": [
        "ellis"
      ],
      "clues": [
        "well"
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
      "routeLabel": "The field survey"
    },
    "a01": {
      "title": "A tree old enough to be a question",
      "location": "The lower orchard",
      "body": [
        "Rowan Bell meets you at the orchard fence with a sketch he made when he repaired it as a young man. The split ash fell years ago. Its divided root base remains near the lower wall, while a younger ash has grown beside the new road. Both are real trees; only one belongs to the deed’s history.",
        "Rowan’s memory alone would be useful but vulnerable. His dated fencing sketch records the divided base before the road changes, and the surviving roots match its shape. Ellis compares the position with the old well rather than accepting resemblance alone. The result is a marker supported by an independent older record, not merely the oldest-looking tree that happens to lie in a convenient direction."
      ],
      "meets": [
        "rowan"
      ],
      "clues": [
        "stump"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a02"
        }
      ],
      "routeLabel": "The field survey"
    },
    "a02": {
      "title": "Keep the starting point and the age together",
      "location": "The orchard measuring bench",
      "body": [
        "Select the two observations that identify the deed’s markers without relying on convenience. You are not choosing whatever makes the orchard safe; you are choosing what another surveyor could check even if the result displeased Mara.",
        "The old well is linked to the deed’s era by the parish sketch. The divided root base is supported by Rowan’s dated fencing record. The modern pump and young roadside ash are easier to see, but visibility is not authority. Nor does a childhood recollection become useless simply because its speaker is old; it becomes stronger when a contemporary drawing and a surviving physical form support it. The two correct observations establish where the measurements can begin and turn."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two sources identify usable original markers?",
        "options": [
          {
            "id": "well",
            "label": "The parish sketch links the abandoned-lane well to the deed’s period.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "ash",
            "label": "The dated fencing sketch and divided root base identify the lost split ash.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "pump",
            "label": "The newest pump must be the old well because it is easiest to reach.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "young",
            "label": "Any ash beside the present road can stand in for the named tree.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "a03",
        "wrongFeedback": "This combination leaves one of the established restrictions unexplained. Test the proposed explanation against every source.",
        "minSelections": 2,
        "maxSelections": 3
      },
      "routeLabel": "The field survey"
    },
    "a03": {
      "title": "Eighty west, forty north",
      "location": "The verified old well",
      "body": [
        "Ellis aligns a compass away from the iron pump fittings and checks its bearing against the parish survey line. You follow the deed’s 80 paces west, using the recorded pace standard rather than everyone’s ordinary stride. The line reaches the divided root base within the survey’s stated tolerance.",
        "Turning 40 paces north leads along the orchard’s edge toward a low stone partly hidden by turf. Starting at the modern pump would have produced a different corner. Reading north as the top of the copied page would have turned the route the wrong way. Two independent corrections now converge on one physical place. Ellis marks the measurements provisionally until the stone’s face can be examined."
      ],
      "clues": [
        "measure"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a04"
        }
      ],
      "routeLabel": "The field survey"
    },
    "a04": {
      "title": "A stone with more than one meaning",
      "location": "The turf-covered boundary stone",
      "body": [
        "The stone bears the survey’s recorded notch on its north face. It also has a much newer painted stripe from a drainage job. Ellis refuses to treat the stripe as the boundary simply because it is brighter. The deed’s marker description concerns the notch, and a drainage plan gives the later stripe its separate purpose.",
        "Mara arrives carrying a basket of windfalls. She does not ask you to move the stone; she asks you to tell her what you can actually establish. The orchard lies on her side of the measured line. The path clause still needs to be respected, so an accurate result will not give her permission to fence off the market route. Protecting one right does not require erasing another."
      ],
      "meets": [
        "mara"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a05"
        }
      ],
      "routeLabel": "The field survey"
    },
    "a05": {
      "title": "The edge people can still walk",
      "location": "The old market path",
      "body": [
        "The market path follows the orchard boundary and reaches the lane without crossing the rows of trees. The signed clause allows walkers to use it on market days. It reserves the orchard’s trees and produce, a distinction the later pasted summary dropped.",
        "You compare the text with the measured corner. The path and ownership provisions can both be true: Mara keeps the orchard while walkers retain their limited access. The property agent’s broad claim had merged them, just as the copied compass merged two orientations. A solution must correct both mistakes rather than simply reverse which person is allowed to be unreasonable. Ellis prepares a measured plan that labels the access strip separately from the land it borders."
      ],
      "clues": [
        "land-result"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a06"
        }
      ],
      "routeLabel": "The field survey"
    },
    "a06": {
      "title": "A boundary with room for two rights",
      "location": "The field survey sheet",
      "body": [
        "The last physical-route deduction asks which result the survey supports. You have verified the old well, the lost tree’s base, the bearing sequence, and the notched stone. You have also read the passage clause in full.",
        "Choose the result that preserves those observations. A good conclusion need not make every party completely happy. It should leave the orchard with its lawful holder while retaining the precisely stated public access. Neither a new pump nor a bright drainage stripe can replace the original markers without authorization. The measured diagram is useful because another surveyor can repeat it, not because it looks more confident than the disputed attic map."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which field conclusion is justified?",
        "options": [
          {
            "id": "rights",
            "label": "The verified line follows the orchard’s edge; Mara’s trees remain hers while the stated market-day passage is preserved.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "fence",
            "label": "Because the orchard is protected, Mara may close every public route.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "top",
            "label": "The new top-north rose overrules the measured deed bearings.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "stripe",
            "label": "The brightest painted stripe automatically changes the legal boundary.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "a07"
      },
      "routeLabel": "The field survey"
    },
    "a07": {
      "title": "A plan that carries its sources",
      "location": "The surveyor’s field board",
      "body": [
        "Ellis labels the old well, the root base, the true bearings, and the stone notch on a new comparison plan. Each label names its source. The newer pump and drainage stripe also appear, in a different layer, so a future reader can see why they were rejected rather than rediscovering the same attractive mistake.",
        "Nora places the disputed map in a protective folder instead of cutting away the later rose. The error has become part of the document’s history. Tomorrow’s surveyors will receive the deed and the repeatable field method, not a silently improved picture. Mara agrees to maintain the market strip, and the agent is invited to repeat the measurements with his own qualified surveyor."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a08"
        }
      ],
      "routeLabel": "The field survey"
    },
    "a08": {
      "title": "The visit before the argument",
      "location": "The orchard gate",
      "body": [
        "The waiting surveyors examine your provisional corner in the morning. They can check the old markers against the sources and repeat the distances. The discussion becomes technical instead of personal, which is a relief to people who still have to share a lane after the case ends.",
        "The agent withdraws the broad ownership claim while the formal plan is filed. Mara keeps the agreed access strip clear. You have changed the practical storyline through a walk on the land: a boundary that could have become an expensive dispute is anchored in repeatable observations before a wall is built. How the later compass rose entered the map remains work for the archive, but it no longer controls tomorrow’s fence."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "a09"
        }
      ],
      "routeLabel": "The field survey"
    },
    "a09": {
      "title": "A line that stays where it belongs",
      "location": "The lower orchard at dusk",
      "body": [
        "Nora watches Ellis set a temporary survey marker beside the old stone. It is labeled provisional and dated, which makes it less dramatic and more trustworthy. Mara gives each of you an apple from a tree that will not be cut down to settle somebody’s mistaken diagram.",
        "Your field route resolved the dispute by checking the original markers and preserving the difference between passage and possession. The map has not become worthless. It has become a question answered by its own sources, with the bright later additions kept in their proper place."
      ],
      "ending": {
        "title": "Case closed: the measured boundary",
        "kind": "solved",
        "body": [
          "The old well, divided ash roots, true bearings, and notched stone support a repeatable field correction. Mara keeps the orchard and respects the stated market-day passage. Your measured source plan stops a rushed boundary change without pretending you traced every later printing decision."
        ]
      },
      "routeLabel": "The field survey"
    },
    "b00": {
      "title": "A card and the agreement beneath it",
      "location": "The county archive",
      "body": [
        "Agnes Pell sets the deed beside an early catalog description and the attic copy. The description refers to a survey whose north mark sits along the left edge. The attic copy’s conventional rose is pasted over a different margin paper and has no signature or revision reference.",
        "Agnes does not declare the older image correct merely because it is older. She points to a stronger comparison: the deed’s bearings agree with the earlier description, while the later ownership summary omits a reservation. The problem may concern the assembly of a copy rather than the original survey. That hypothesis sends you to the print workshop and its dated proofs, where the physical history of the plate can be checked."
      ],
      "meets": [
        "agnes"
      ],
      "clues": [
        "catalog"
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
      "routeLabel": "The print and registry trail"
    },
    "b01": {
      "title": "A mark that survived the printing",
      "location": "The old print workshop",
      "body": [
        "Felix Dane brings out a copper plate and a dated workshop proof. The marked edge corresponds to the left-side north of the early survey. A later restorer added a decorative top-north rose to a copy without rotating the survey itself. The conventional decoration made the unconventional original harder to read.",
        "Felix can show the registration pinholes that link the proof to this plate. He cannot tell you what every owner of every later copy believed. The useful claim is specific: the early printed orientation and the deed agree, while a later added symbol creates the contradiction. He gives Agnes a signed technical note identifying the plate marks, rather than offering his professional confidence as a substitute for explaining them."
      ],
      "meets": [
        "felix"
      ],
      "clues": [
        "plate"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b02"
        }
      ],
      "routeLabel": "The print and registry trail"
    },
    "b02": {
      "title": "A copied symbol and an original bearing",
      "location": "The print registration table",
      "body": [
        "Select the two links that explain why the later rose cannot simply overrule the survey. One connects the plate and dated proof; the other connects the original printed orientation with the signed deed.",
        "The newest mark is not automatically the most authoritative. Nor is every later addition evidence of a deliberate fraud. An attempted improvement can create a damaging error when it is detached from the thing it was meant to clarify. You must establish the discrepancy before deciding what anybody intended. The correct pair lets the archive annotate the map honestly: it identifies the source of the conflict without inventing a forger simply because a mystery feels tidier with one."
      ],
      "puzzle": {
        "mode": "multiple",
        "prompt": "Which two links establish the orientation error?",
        "options": [
          {
            "id": "plate",
            "label": "Registration marks connect the dated left-north proof to the original survey plate.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "deed",
            "label": "The original orientation agrees with the signed true-bearing description.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "new",
            "label": "The latest decorative symbol automatically cancels the deed.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "crime",
            "label": "Any later compass decoration proves criminal intent.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "b03",
        "wrongFeedback": "This combination leaves one of the established restrictions unexplained. Test the proposed explanation against every source.",
        "minSelections": 2,
        "maxSelections": 3
      },
      "routeLabel": "The print and registry trail"
    },
    "b03": {
      "title": "A proof with a date of its own",
      "location": "The workshop proof cabinet",
      "body": [
        "The dated proof predates the attic copy by decades. Its margin contains no top-north rose. The registration holes and a small plate scratch near the orchard line identify it as a print from the same survey, not a different map that happens to favor Mara.",
        "Agnes records the proof’s custody and obtains an approved facsimile. Felix keeps the original in its cabinet. The copy will travel with the deed, so tomorrow’s officials can examine the comparison without removing the very sources they may need to question. You now have an explanation for the directional conflict. A second question remains: did the shortened ownership summary also change the meaning of the passage clause?"
      ],
      "clues": [
        "proof"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b04"
        }
      ],
      "routeLabel": "The print and registry trail"
    },
    "b04": {
      "title": "Read the sentence after the convenient one",
      "location": "The county deed room",
      "body": [
        "The grant’s first relevant sentence permits market-day passage along the boundary. The next reserves the trees, produce, and tenancy to the existing holder. The pasted summary quotes the first and stops before the reservation. It makes a limited access right sound like ownership of a strip and everything beyond it.",
        "Mara reads the reservation quietly. She is willing to maintain the path but had understood the agent to be claiming the trees as well. Agnes will not decide the entire dispute over the desk; a registry officer must issue the formal correction. She can prepare the source comparison that makes such a decision possible. The route through ink and authority is slower than tearing the new rose away, but it leaves a record somebody else can defend."
      ],
      "meets": [
        "mara"
      ],
      "clues": [
        "grant"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b05"
        }
      ],
      "routeLabel": "The print and registry trail"
    },
    "b05": {
      "title": "What can be corrected without erasure",
      "location": "The registry intake desk",
      "body": [
        "The registry officer can attach an annotation to the disputed copy, cross-referencing the signed deed and dated proof. That preserves the document’s later history while preventing the added rose and shortened summary from being treated as authoritative amendments.",
        "Felix offers to remove the pasted paper so the map will look original again. Agnes declines for now. Removing it would make the page prettier while destroying evidence of how the misunderstanding arose. Your route’s practical resolution is a public source hierarchy: the deed governs the rights, the early proof explains the orientation, and the later copy remains available with its limitations stated. A correction should reduce confusion for the next person, not merely hide the part that embarrassed this one."
      ],
      "clues": [
        "copy-chain",
        "registry"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b06"
        }
      ],
      "routeLabel": "The print and registry trail"
    },
    "b06": {
      "title": "A correction another reader can follow",
      "location": "The registry comparison desk",
      "body": [
        "Choose the action that resolves both errors while preserving the evidence. The current copy is not a new signed grant; its rose does not rotate the original survey, and its abbreviation does not remove the reservation. Those conclusions come from linked sources, not from preferring one person’s account.",
        "A proper annotation can stop the broad ownership claim before tomorrow’s work begins and direct surveyors toward the original true bearings. It need not secretly redraw a boundary or declare all later restorers dishonest. The question asks for a record you would be comfortable leaving to a future reader who does not know you, Nora, or Mara. Give that reader the actual basis for the correction instead of another confident sentence detached from its authority."
      ],
      "puzzle": {
        "mode": "single",
        "prompt": "Which archival remedy is supported?",
        "options": [
          {
            "id": "annotate",
            "label": "Retain the disputed copy with an annotation linking the signed deed and dated proof, preserving the limited passage right and orchard reservation.",
            "correct": true,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "erase",
            "label": "Silently remove the pasted rose and pretend no later alteration ever existed.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "summary",
            "label": "Treat the shortened summary as a signed transfer of every tree.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          },
          {
            "id": "favor",
            "label": "Write that Mara owns everything because she was the more sympathetic person.",
            "correct": false,
            "feedback": "Compare the dates, sources, and restrictions already in your notebook."
          }
        ],
        "correctTo": "b07"
      },
      "routeLabel": "The print and registry trail"
    },
    "b07": {
      "title": "A notice arriving before the surveyors",
      "location": "The county dispatch room",
      "body": [
        "The registry sends the source comparison to both parties and to the surveyors scheduled for tomorrow. Its wording postpones any new boundary work based solely on the disputed copy. It does not ask Mara to surrender the public path, and it does not ask the agent to accept a private promise from Nora.",
        "Felix signs the technical explanation of the plate marks. Agnes supplies the deed reference and deposit number. By distributing the same complete account to everyone, the office prevents a new round of partial quotations. Your route has not measured every stone, but it has restored the authority that should govern those measurements. That is enough to stop a rushed and possibly irreversible mistake."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b08"
        }
      ],
      "routeLabel": "The print and registry trail"
    },
    "b08": {
      "title": "The attic acquires a better label",
      "location": "The mapmaker’s house",
      "body": [
        "Nora places the registry annotation beside the attic copy rather than replacing it. The folder now explains the unconventional north, the later decorative addition, and the omitted reservation. A visitor can still admire the map without mistaking its prettiest margin for a new legal agreement.",
        "Mara receives confirmation that the broad claim has been withdrawn pending the correct survey. She agrees that the market strip will stay open. You resolved the storyline through a workshop, an archive, and a registry desk. A different choice would have taken you through wells and old roots. Both methods can protect a boundary, but yours leaves a particularly clear explanation of how an innocent-looking copy became an expensive misunderstanding."
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "b09"
        }
      ],
      "routeLabel": "The print and registry trail"
    },
    "b09": {
      "title": "A map allowed to keep its history",
      "location": "The attic window",
      "body": [
        "From the attic, the orchard looks untidier than any printed plan: branches cross lines, a path curves around a root, and people take care when passing each other. Nora writes the new folder label in plain ink. It gives a source for each correction and leaves the dates visible.",
        "You have not made the past simpler. You have made its competing records readable together. The map remains a beautiful object, the orchard remains protected, and a future investigator will not have to rediscover which little arrow sent everyone the wrong way."
      ],
      "ending": {
        "title": "Case closed: the annotated map",
        "kind": "solved",
        "body": [
          "The signed deed and dated plate proof support a registry annotation preserving both the orchard reservation and limited public passage. The disputed copy remains intact with its history explained. Your documentary route stops a mistaken ownership claim without silently improving the evidence."
        ]
      },
      "routeLabel": "The print and registry trail"
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
          "id": "bearings"
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
            "well",
            "ash"
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
          "id": "rights"
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
          "id": "bearings"
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
            "plate",
            "deed"
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
          "id": "annotate"
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
