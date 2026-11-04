export default {
  "id": "butterfly-cabinet",
  "title": "The Butterfly Cabinet",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "A small natural-history museum before its autumn reopening",
  "description": "The cabinet is still sealed, but its famous blue butterfly no longer looks blue. Follow the conservator through light and glass, or trace a naturalist’s journey beyond the museum walls.",
  "revision": 2,
  "flags": [
    "optics-route",
    "field-route"
  ],
  "characters": [
    {
      "id": "joss",
      "name": "Joss Mercer",
      "role": "Museum keeper",
      "description": "Prefers admitting a label is incomplete to letting a visitor leave with a tidy mistake.",
      "color": "#a2a680"
    },
    {
      "id": "tessa",
      "name": "Tessa Quill",
      "role": "Conservator",
      "description": "Keeps photographs of routine changes as carefully as photographs of rare objects.",
      "color": "#a58da7"
    },
    {
      "id": "raf",
      "name": "Raf Lane",
      "role": "Field botanist",
      "description": "Can follow an old collector’s journey from the flowering dates in a notebook.",
      "color": "#91aaa0"
    },
    {
      "id": "mina",
      "name": "Mina Vale",
      "role": "Photographic archivist",
      "description": "Writes the camera angle beside the exposure setting because both can change what a picture appears to say.",
      "color": "#ba9178"
    }
  ],
  "clues": [
    {
      "id": "seals",
      "title": "The cabinet seals",
      "description": "Two numbered paper seals bridge glass and frame. Yesterday’s photograph shows the same intact numbers and the specimen’s distinctively nicked left wing."
    },
    {
      "id": "photographs",
      "title": "The apparent change",
      "description": "Yesterday’s frontal flash photograph looks blue; today’s side-lit view looks brown. The nicked wing and mounting-pin bend match in both views."
    },
    {
      "id": "optics-1-observation",
      "title": "The lamp geometry trial",
      "description": "A ridged reference changes blue to brown with lamp direction; the gray control remains gray."
    },
    {
      "id": "optics-1-document",
      "title": "The four documented specimen images",
      "description": "The same sealed specimen reversibly changes apparent color with lamp/camera geometry while the neutral reference stays neutral."
    },
    {
      "id": "optics-1-deduction",
      "title": "The reversible optical finding",
      "description": "The observed effect follows viewing geometry and is inconsistent with a simple permanent recoloring; no destructive specimen test was performed."
    },
    {
      "id": "optics-2-observation",
      "title": "The tested display alternatives",
      "description": "Only the broad low-heat plan fits the conservation constraints while documenting the different angle views."
    },
    {
      "id": "optics-2-document",
      "title": "The complete maintenance history",
      "description": "The installer moved the lamp to reduce glare and left the case seals intact; angle sensitivity was missing from the work specification."
    },
    {
      "id": "optics-2-deduction",
      "title": "A repair someone else can maintain",
      "description": "The approved plan combines a reversible lighting change, labeled angle images, and a maintenance requirement instead of suppressing the brown view."
    },
    {
      "id": "field-1-observation",
      "title": "The unshortened notebook description",
      "description": "Ada describes a brown-winged specimen becoming blue when river light catches it; the later label retains only BLUE REGENT."
    },
    {
      "id": "field-1-document",
      "title": "The checked date and paired views",
      "description": "PostmarkMay 14 and a signed two-day interval support May 12. Paired contact images retain the nicked wing under changed viewing conditions."
    },
    {
      "id": "field-1-deduction",
      "title": "A documented shorthand, not a second specimen",
      "description": "Independent wording and images support a conditional appearance that the later label shortened."
    },
    {
      "id": "field-2-observation",
      "title": "Two dated viewing arrangements",
      "description": "Ada’s river-side geometry and the 1932 museum diagram describe different installations, not an impossible single layout."
    },
    {
      "id": "field-2-document",
      "title": "The identifying accession record",
      "description": "The nicked wing and bent pin were recorded before donation, supporting continuity with the present sealed object."
    },
    {
      "id": "field-2-deduction",
      "title": "A sourced public interpretation",
      "description": "The restored complete wording and images explain the nickname’s limits; current lighting remains an explicitly separate conservation task."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "The butterfly that changed overnight",
      "location": "The museum’s cedar gallery",
      "body": [
        "Joss Mercer is waiting beneath an enormous painted dragonfly. The museum reopens tomorrow, and its small autumn exhibition has acquired a problem no visitor should be asked to solve by guesswork. The cabinet’s famous blue butterfly appears brown this morning. The glass remains sealed. A donor has already suggested that someone secretly replaced the specimen with a cheaper one.",
        "Joss does not want the donor reassured by an explanation that cannot be tested. Yesterday’s photograph and today’s cabinet view show the same small nick in the left wing and the same crooked mounting pin. Both numbered seals remain intact. Neither detail makes replacement impossible by every imaginable means, but both make the dramatic allegation less straightforward than it sounds.",
        "The labels call the butterfly the Blue Regent. The newly installed lighting has a maintenance note, while the collector’s original field notebook is held at the village archive. You can investigate the object’s present appearance or trace how its original description was made. First, Joss asks you to record what actually changed in the comparison."
      ],
      "meets": [
        "joss"
      ],
      "clues": [
        "seals",
        "photographs"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Separate the observations from the first accusation",
          "to": "first-question"
        }
      ]
    },
    "first-question": {
      "title": "A comparison with a missing variable",
      "location": "The cabinet desk",
      "body": [
        "Joss has placed the two photographs side by side. The specimen’s identifying imperfections match, but the lighting directions do not. Choose the statement that preserves both facts without deciding the remaining question in advance."
      ],
      "puzzle": {
        "prompt": "What can the initial comparison establish?",
        "correctTo": "routes",
        "options": [
          {
            "id": "variables",
            "label": "The apparent color changed under different viewing conditions; the matching imperfections and seals support continuity, while the cause still needs testing.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "theft",
            "label": "Any difference in color proves that a thief replaced the specimen.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "nothing",
            "label": "The matching nick establishes that lighting can have no effect on the image.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "name",
            "label": "The words Blue Regent guarantee that every viewing angle must look blue.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ]
      }
    },
    "routes": {
      "title": "Two ways into the same cabinet",
      "location": "The museum entrance hall",
      "body": [
        "Tessa can investigate the glass, lamp, and viewing angles in the conservation rooms. Raf can take you to the photographic archive and the collector’s river route. The museum has time for both teams to work, but you will accompany one. Joss will retain the other team’s notes separately rather than pretending you observed them yourself.",
        "On the conservation route you must isolate an optical variable and design a valid comparison. On the field route you must establish whether the old name described a constant color, a viewing effect, or a later misunderstanding. Either route can settle the exhibition’s immediate problem. The ending you earn depends on whether you repair the display or restore the story that belongs beside it."
      ],
      "choices": [
        {
          "id": "optics",
          "label": "Work with Tessa through the conservation rooms",
          "to": "optics-1",
          "excludesFlags": [
            "field-route"
          ]
        },
        {
          "id": "field",
          "label": "Follow Raf to the archive and the river path",
          "to": "field-1",
          "excludesFlags": [
            "optics-route"
          ]
        }
      ]
    },
    "optics-1": {
      "title": "Change one thing at a time",
      "location": "The conservation workroom",
      "body": [
        "Tessa does not begin by opening the cabinet. She has the same lamp model on a workbench and a permitted test photograph taken through the sealed glass. The old arrangement placed a broad source near a viewer’s eye line. The new arrangement puts a narrow source far to the left. The lamp labels both say white; that describes neither their direction nor the angle from which a wing is viewed.",
        "A small demonstration tile has a microscopic ridged surface rather than blue pigment. With the light at thirty degrees and the viewer directly ahead it reflects blue. Moving the light to sixty degrees while keeping the viewer fixed makes it brown. A neutral gray card alongside it remains gray. Tessa records the angles, so an interesting effect can become a repeatable observation."
      ],
      "routeLabel": "The conservation route",
      "clues": [
        "optics-1-observation"
      ],
      "meets": [
        "tessa",
        "mina"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "optics-1-record"
        }
      ],
      "setFlags": [
        "optics-route"
      ]
    },
    "optics-1-record": {
      "title": "The control card",
      "location": "The photographic alcove",
      "body": [
        "Mina Vale supplies four labeled images of the specimen, all through the same unopened glass. A: frontal lamp, frontal camera, blue wing, gray control gray. B: side lamp, frontal camera, brown wing, gray control gray. C: frontal lamp, frontal camera, blue wing again. D: side lamp, shifted camera toward the reflected angle, blue wing.",
        "A defective color filter would be expected to affect the neutral reference as well. A permanent dye change would not reverse merely when the light returned to its earlier position. These are predictions, not decorative scientific words. A useful selection should use the reversible condition and the unchanged control, rather than the fame of the specimen or a donor’s certainty."
      ],
      "routeLabel": "The conservation route",
      "clues": [
        "optics-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "optics-1-question",
          "requires": [
            "optics-1-observation",
            "optics-1-document"
          ]
        }
      ]
    },
    "optics-1-question": {
      "title": "A question worth getting right",
      "location": "The photographic alcove",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The conservation route",
      "puzzle": {
        "prompt": "Which two observations most directly distinguish a viewing-angle effect from a permanent recoloring?",
        "options": [
          {
            "id": "reverse",
            "label": "Returning to the earlier lamp position restores the earlier apparent blue.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "control",
            "label": "The gray control remains neutral while the wing’s appearance changes with geometry.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "label",
            "label": "The old exhibit label includes the word blue.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "sealed",
            "label": "The numbered seals alone establish the optical mechanism.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "optics-1-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "optics-1-finding": {
      "title": "A finding you can defend",
      "location": "The photographic alcove",
      "body": [
        "The reversible trial supports an angle-dependent reflection rather than a newly brown pigment. It does not yet identify the specimen’s microscopic structure, and Tessa will not invent a destructive test to strengthen a harmless display finding. The practical issue is how the lamp and the visitor’s position now meet.",
        "Mina adds the angle labels to the archive rather than keeping a single “correct” photograph. A picture that records its conditions can teach more than a picture that silently promotes one appearance into an object’s only possible color."
      ],
      "routeLabel": "The conservation route",
      "clues": [
        "optics-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "optics-1-next"
        }
      ]
    },
    "optics-1-next": {
      "title": "The investigation moves forward",
      "location": "The conservation workroom",
      "body": [
        "The gallery has visitors of different heights and people using wheelchairs. Restoring yesterday’s effect for one tall standing viewer would not solve the exhibition’s problem. Tessa takes you to a cardboard model of the cabinet with measured eye lines and a broad reflector. The next choice will concern a display that tells the truth from more than one place, rather than a trick that makes the donor’s favorite photograph come back."
      ],
      "routeLabel": "The conservation route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "optics-2",
          "requires": [
            "optics-1-deduction"
          ]
        }
      ]
    },
    "optics-2": {
      "title": "A display is an argument too",
      "location": "The gallery planning table",
      "body": [
        "Three lighting plans are on the table. Plan A uses the new narrow side lamp and prints “always blue.” Plan B restores a broad, low-heat source near the central sight line and includes two reference photographs labeled with their angles. Plan C adds a blue filter to make the entire cabinet blue, including the specimen label and the gray reference.",
        "The conservator’s limits are explicit: no opening the case without authorization, no heat increase, and no presentation that hides an inconvenient observation. Plan B’s test shows the effect from both the lower seated eye line and the usual standing one. It does not promise every ray will look identical. It allows the exhibit to describe structural color as conditional rather than counterfeit."
      ],
      "routeLabel": "The conservation route",
      "clues": [
        "optics-2-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "optics-2-record"
        }
      ]
    },
    "optics-2-record": {
      "title": "The maintenance note in full",
      "location": "The keeper’s desk",
      "body": [
        "Joss reads the installer’s note. The new side lamp was chosen to reduce glare on a nearby beetle label; nobody had recorded the butterfly’s angle-dependent appearance as a display constraint. The installer had not opened the case or selected a different specimen. The work photographs show the unchanged seals and the move from broad to narrow source.",
        "The repair therefore needs both a physical adjustment and an honest label. A permanent theft accusation cannot be justified merely because the first image looked alarming. Equally, changing the lamp without recording why would invite the same mystery at the next maintenance visit. Tessa asks you to recommend the plan that a future keeper could understand without needing today’s investigators present."
      ],
      "routeLabel": "The conservation route",
      "clues": [
        "optics-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "optics-2-question",
          "requires": [
            "optics-2-observation",
            "optics-2-document"
          ]
        }
      ]
    },
    "optics-2-question": {
      "title": "A question worth getting right",
      "location": "The keeper’s desk",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The conservation route",
      "puzzle": {
        "prompt": "Which complete exhibition repair follows the findings and the conservation limits?",
        "options": [
          {
            "id": "plan-b",
            "label": "Use the tested low-heat broad-source plan, retain the documented angle views, and explain the conditional color on the label and maintenance record.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "filter",
            "label": "Apply a blue filter and keep claiming the specimen always has one visible color.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "force",
            "label": "Open the cabinet immediately and repaint any brown-looking surface.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "accuse",
            "label": "Keep the narrow lamp and publicly identify the installer as a thief based on color alone.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "optics-2-finding"
      }
    },
    "optics-2-finding": {
      "title": "A finding you can defend",
      "location": "The keeper’s desk",
      "body": [
        "Joss approves the reversible lighting adjustment after Tessa records the test. The label now invites visitors to notice how the apparent color changes rather than treating their own eyes as a mistake. Mina keeps the brown image in the exhibit alongside the blue one. Neither has to pretend to be the specimen without conditions.",
        "The donor returns and stands in three positions before saying anything. The slow discovery is better than a public correction delivered as a scolding. Joss writes the lamp requirement into the next service order, attaching both pictures instead of a single adjective."
      ],
      "routeLabel": "The conservation route",
      "clues": [
        "optics-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "optics-2-next"
        }
      ]
    },
    "optics-2-next": {
      "title": "The investigation moves forward",
      "location": "The gallery planning table",
      "body": [
        "In the unopened case, the butterfly remains exactly where it was. What has changed is the question the museum asks a visitor to bring to it. Instead of “Can you see the famous blue?” the card says, “What happens when you change where you stand?” The answer is available without turning a mystery into a secret held by the people who already know.",
        "Tessa asks you to file the working notes in the conservation register. You give the exhibit one final look from the lower viewing position, where the old side lamp had made its most misleading shadow."
      ],
      "routeLabel": "The conservation route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "optics-ending",
          "requires": [
            "optics-2-deduction"
          ]
        }
      ]
    },
    "optics-ending": {
      "title": "A color with room to move",
      "location": "The reopened cedar gallery",
      "body": [
        "A child in the first visiting group announces that the butterfly is brown. Then she shifts her chair and sees blue. Her teacher begins to correct the first statement, reads the new label, and changes the correction into a question. Joss pretends to be checking the visitor counter so nobody can see how pleased he is.",
        "Your conservation route has solved the immediate display problem by testing a variable rather than choosing a favorite witness. The specimen does not need to be a different butterfly every time somebody sees it differently. The museum now has a record that explains why."
      ],
      "ending": {
        "title": "Case closed: a more truthful light",
        "body": [
          "The display was changed through a tested, reversible conservation plan. The missing condition—viewing geometry—became part of the public exhibit and the maintenance specification."
        ],
        "kind": "solved"
      }
    },
    "field-1": {
      "title": "The collector’s careful words",
      "location": "The village photographic archive",
      "body": [
        "Raf meets you at the archive rather than the butterfly cabinet. The specimen’s donor was a nineteenth-century teacher, Ada Vale, whose field notebook survives with four photographs. The polished museum label was written much later. In the notebook she calls the insect “our brown-winged regent, suddenly blue when the river light catches it.” The later catalog shortened that phrase to BLUE REGENT.",
        "The notebook’s date is faded. One page says May 12, another appears to say June 12. Raf suggests checking the walk against the flowering notes before using either transcription. The notes list hawthorn in full flower, fresh beech leaves, and a daffodil bed finished but not yet removed. Those are contextual clues, not a license to identify any insect from a charming sentence."
      ],
      "routeLabel": "The field-notebook route",
      "clues": [
        "field-1-observation"
      ],
      "meets": [
        "raf",
        "mina"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "field-1-record"
        }
      ],
      "setFlags": [
        "field-route"
      ]
    },
    "field-1-record": {
      "title": "A dated photograph and a reversed caption",
      "location": "The archive contact-print table",
      "body": [
        "Mina has the original contact sheet. Its envelope is postmarked May 14, and a signed letter says the outing took place two days before posting. The image sequence records Ada beside the same cabinet specimen’s nicked wing, first photographed against the light and then after the camera was moved. A later caption transcribed “June” because a loop in Ada’s M looked like a J.",
        "The postmark cannot establish every detail of the outing, but together with the signed interval it fixes May 12 for this record. The two views show different apparent colors without a change in the nicked wing or mounting position. The full notebook phrase describes that effect. The shortened later label omitted the conditional words, not a missing specimen.",
        "Raf asks which two sources make the historical reading stronger than simply preferring an old story over a new one."
      ],
      "routeLabel": "The field-notebook route",
      "clues": [
        "field-1-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "field-1-question",
          "requires": [
            "field-1-observation",
            "field-1-document"
          ]
        }
      ]
    },
    "field-1-question": {
      "title": "A question worth getting right",
      "location": "The archive contact-print table",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The field-notebook route",
      "puzzle": {
        "prompt": "Select the two independent checks supporting the conditional-color description.",
        "options": [
          {
            "id": "date",
            "label": "A postmark and signed two-day interval establish the outing date despite the ambiguous handwriting.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "views",
            "label": "The original contact sequence and the unshortened field phrase both describe different appearances under changed viewing conditions.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "short",
            "label": "The later shortened label is automatically more accurate because it is neatly printed.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "flowers",
            "label": "A general mention of flowers establishes the exact species and every photograph date without other records.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "field-1-finding",
        "mode": "multiple",
        "wrongFeedback": "Some selected observations do not establish this link, or an essential one is missing. Use only evidence that bears directly on the question."
      }
    },
    "field-1-finding": {
      "title": "A finding you can defend",
      "location": "The archive contact-print table",
      "body": [
        "You restore the conditional sentence to its source and date. The apparent contradiction between an old brown description and a blue exhibit name is no longer evidence of two different specimens. It is a documented change in how an observation was summarized.",
        "Mina marks the late caption as a transcription issue, preserving it so the error’s path can be explained. Raf suggests walking the public river route, where Ada made a sketch of the light and the position from which she watched. A historical explanation can now be tested against the place it describes."
      ],
      "routeLabel": "The field-notebook route",
      "clues": [
        "field-1-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "field-1-next"
        }
      ]
    },
    "field-1-next": {
      "title": "The investigation moves forward",
      "location": "The village photographic archive",
      "body": [
        "The path lies behind the old ferry garden. Raf has checked that it is open and level enough for the visit. Ada’s notebook marks the viewing point by a stone seat and a three-branched willow; the tree is gone, but the seat’s position survives on a dated plan. On the walk you discuss what a place comparison can show and what two centuries of altered vegetation must leave uncertain.",
        "At the river, a broad reflection comes from the same direction drawn in the notebook. It does not recreate the past exactly. It does explain why an observer could have noticed a conditional flash and later used a very short nickname for a much longer description."
      ],
      "routeLabel": "The field-notebook route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "field-2",
          "requires": [
            "field-1-deduction"
          ]
        }
      ]
    },
    "field-2": {
      "title": "The story a label can leave out",
      "location": "The river seat",
      "body": [
        "Raf places a copy of Ada’s sketch beside the modern plan. It shows the observer south of the cabinet, facing north toward a broad reflected light. A late museum diagram puts the lamp west of the viewer because the cabinet moved to a different wall in 1932. The compass labels concern two installations; superimposing them without their dates creates a disagreement that neither original record contains.",
        "The notes also explain the specimen’s nicked wing: damage recorded before donation, not evidence of a recent swap. A signed accession description lists that nick and the crooked pin. Those identifying details connect the field record to the object whose seals you saw this morning. The historical account can therefore explain continuity as well as the misleading shorthand."
      ],
      "routeLabel": "The field-notebook route",
      "clues": [
        "field-2-observation"
      ],
      "choices": [
        {
          "id": "examine",
          "label": "Read the related record and ask a closer question",
          "to": "field-2-record"
        }
      ]
    },
    "field-2-record": {
      "title": "An exhibit built from sources",
      "location": "The museum interpretation room",
      "body": [
        "Joss offers four proposed labels. One calls the butterfly stolen and replaced. Another says Ada had been mistaken to see brown. A third presents her complete description with the dated paired views, the documented identifying imperfections, and a note that current lighting differs from the old arrangement. The fourth quietly removes the old name and every record associated with it.",
        "Raf favors the third because it gives visitors a way to inspect the claim. It also tells the conservator exactly which condition should be checked next, without pretending a historical route performed a laboratory trial it never did. Your branch can settle the identity allegation and restore the provenance record now; a separate conservation task can adjust the physical lighting under its own authority."
      ],
      "routeLabel": "The field-notebook route",
      "clues": [
        "field-2-document"
      ],
      "choices": [
        {
          "id": "compare",
          "label": "Make a deduction from these observations",
          "to": "field-2-question",
          "requires": [
            "field-2-observation",
            "field-2-document"
          ]
        }
      ]
    },
    "field-2-question": {
      "title": "A question worth getting right",
      "location": "The museum interpretation room",
      "body": [
        "Take the two records together. A useful explanation must fit their dates, sources, and limitations. Your notebook keeps the observations separate from the conclusion; a detail can be true without proving the particular claim being tested."
      ],
      "routeLabel": "The field-notebook route",
      "puzzle": {
        "prompt": "Which interpretation preserves what your historical route actually established?",
        "options": [
          {
            "id": "sources",
            "label": "Use the full dated field wording, paired views, and identifying accession details; refer the changed present lighting for its own documented conservation check.",
            "correct": true,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "replace",
            "label": "Declare a recent replacement while ignoring the accession imperfections and intact seals.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "erase",
            "label": "Remove every older record so future visitors cannot notice a disagreement.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          },
          {
            "id": "certain",
            "label": "Claim your river walk exactly reproduced all nineteenth-century environmental conditions.",
            "correct": false,
            "feedback": "That account leaves part of the evidence unexplained. Compare the records before deciding."
          }
        ],
        "correctTo": "field-2-finding"
      }
    },
    "field-2-finding": {
      "title": "A finding you can defend",
      "location": "The museum interpretation room",
      "body": [
        "Joss chooses the sourced interpretation. He does not present your route as a substitute for Tessa’s conservation work, and he does not need to wait for that work to withdraw an unsupported theft allegation. The old nickname stays, but it no longer does the work of an entire observation.",
        "Mina donates a high-quality copy of the contact sequence for the visitor desk. Visitors can now see the difference between the original record, a later caption, and a present interpretation. The route has given the museum a story it can tell without hiding the very change that made the case interesting."
      ],
      "routeLabel": "The field-notebook route",
      "clues": [
        "field-2-deduction"
      ],
      "choices": [
        {
          "id": "record",
          "label": "Record the finding and decide the next step",
          "to": "field-2-next"
        }
      ]
    },
    "field-2-next": {
      "title": "The investigation moves forward",
      "location": "The river seat",
      "body": [
        "Raf returns the field notebook to its protective box before the reopening. On the last page Ada had written a list of questions for her pupils, none of them answered with a single color. Joss copies one onto the visitor card with its source: “What did the light do that the name did not tell us?”",
        "You bring the dated viewing diagram to Tessa. It will help her investigate the current lamp arrangement, but it is not an instruction to force a particular photograph into being. The historical explanation and the physical repair can now be separate honest tasks instead of rival stories about who should be blamed."
      ],
      "routeLabel": "The field-notebook route",
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead to the next location",
          "to": "field-ending",
          "requires": [
            "field-2-deduction"
          ]
        }
      ]
    },
    "field-ending": {
      "title": "The name becomes a question",
      "location": "The museum visitor desk",
      "body": [
        "The first person to ask about the Blue Regent is the donor who feared a theft. Joss shows him Ada’s full sentence and the two contact views. The donor reads the phrase “when the river light catches it” twice, then asks whether the museum could display both photographs instead of choosing the brighter one.",
        "Your field route has not changed a bulb or opened a seal. It has traced a nickname back through a misread month and a shortened observation to an identifiable object. Beside the cabinet, a new card makes room for the visitor who sees something different. Curiosity, rather than an accusation, can begin there."
      ],
      "ending": {
        "title": "Case closed: the observation behind the name",
        "body": [
          "You restored the specimen’s historical continuity and conditional description through dated records and identifying details. The public interpretation keeps both views and leaves the separate conservation question properly assigned."
        ],
        "kind": "solved"
      }
    }
  },
  "solutionPaths": [
    {
      "id": "conservation-method",
      "actions": [
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "variables"
        },
        {
          "type": "choice",
          "id": "optics"
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
            "reverse",
            "control"
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
          "id": "plan-b"
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
      "id": "field-provenance-method",
      "actions": [
        {
          "type": "choice",
          "id": "compare"
        },
        {
          "type": "answer",
          "id": "variables"
        },
        {
          "type": "choice",
          "id": "field"
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
            "date",
            "views"
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
          "id": "sources"
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
