/** Expanded, authored mystery. Only earned scenes belong in the reader. */
export default {
  "id": "mosaic-room",
  "title": "The Room of Missing Faces",
  "genre": "Cozy mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "The museum’s new mosaic changes overnight: five faces are missing, and a mirrored sketch points beyond the gallery. Follow the repair work or the last tram carrying a sealed crate.",
  "setting": "A small city museum on the eve of a disputed exhibition",
  "characters": [
    {
      "id": "nila",
      "name": "Nila Hart",
      "role": "Museum curator",
      "description": "Will delay an opening if the explanation under a work cannot be defended.",
      "color": "#a18970"
    },
    {
      "id": "ash",
      "name": "Ash Wren",
      "role": "Mosaic conservator",
      "description": "Keeps numbered fragments in trays and objects to the word “restored” when nothing is recorded.",
      "color": "#a18970"
    },
    {
      "id": "petra",
      "name": "Petra Moss",
      "role": "Tram dispatcher",
      "description": "Knows how a delivery can cross the city without appearing on a passenger schedule.",
      "color": "#a18970"
    },
    {
      "id": "eda",
      "name": "Eda Fen",
      "role": "Village cooperative steward",
      "description": "Wants the names attached to a memorial to matter as much as its colored stones.",
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
      "id": "common-image",
      "title": "The uncropped packing photograph",
      "description": "A P52 adhesive label visible in the full packing photograph could not predate1952; this dates that packing, not the mosaic’s manufacture."
    },
    {
      "id": "common-sketch",
      "title": "The reflected working plan",
      "description": "The transparent-sheet sketch reverses east and west but retains north. A left-right reflection places its destination at the old tile workers’ cooperative."
    },
    {
      "id": "common-record",
      "title": "The memorial inventory",
      "description": "A1928 inventory identifies five named workers in a matching cooperative memorial; a later removal-for-safekeeping entry lacks a completed return."
    },
    {
      "id": "a-backing",
      "title": "The reversible face mounts",
      "description": "The five restored faces sit on modern removable units; taking them out intact would leave clean recesses rather than broken stone."
    },
    {
      "id": "a-order",
      "title": "The signed comparison order",
      "description": "Nila authorized removal of the five detachable faces for comparison at the cooperative before the opening schedule was advanced."
    },
    {
      "id": "a-trays",
      "title": "The intact comparison trays",
      "description": "The five faces are intact in numbered trays at the authorized destination. Back markings and the inventory reveal a previous swap of two neighboring names."
    },
    {
      "id": "a-names",
      "title": "The numbered portrait sheet",
      "description": "A dated cooperative portrait sheet independently pairs the worker names with numbered faces and corrects the later mount swap."
    },
    {
      "id": "a-agreement",
      "title": "The joint conservation record",
      "description": "A documented intact handover, corrected identity map, and joint display agreement preserve the memorial context while provenance questions remain open."
    },
    {
      "id": "b-tram",
      "title": "The separate freight service",
      "description": "The museum crate traveled on a logged8:40 maintenance car, after the last passenger service; its freight reference is preserved."
    },
    {
      "id": "b-depot",
      "title": "The sealed transfer",
      "description": "The depot records the same museum seal entering at 9:02 and leaving for the cooperative at 9:15 without being opened."
    },
    {
      "id": "b-door",
      "title": "The cooperative’s authorization copy",
      "description": "The cooperative holds Nila’s signed comparison order; the advanced opening notice arrived after the crate’s documented departure."
    },
    {
      "id": "b-opening",
      "title": "The joint crate opening",
      "description": "The sealed custody chain ends in a joint opening showing five intact face panels, a mounting diagram, and an identity-comparison request."
    },
    {
      "id": "b-public",
      "title": "The corrected public account",
      "description": "The notice explains the authorized movement and keeps the unresolved historic possession question open for a separate process."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "Five pale spaces",
      "location": "The mosaic gallery",
      "body": [
        "Nila Hart has asked the museum staff to leave the new gallery as it is. Five faces in a restored mosaic have disappeared overnight, leaving pale rectangular spaces. No broken tiles lie on the floor. A mirrored sketch rests where the central figure’s nameplate should be. The official description calls the work an anonymous decorative floor, donated from a private collection.",
        "A conservator has a record of yesterday’s repair, and the dispatch office has a receipt for a sealed crate carried away after closing. You can begin with the object’s changed surface or with the crate’s journey. Nila will hold the opening while you follow one trail properly."
      ],
      "meets": [
        "nila"
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Examine the missing faces and the conservator’s workroom",
          "to": "a-backing",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Trace the sealed crate aboard the last tram",
          "to": "b-tram",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "common-image": {
      "title": "A photograph with an inconvenient edge",
      "location": "The museum’s image library",
      "body": [
        "The donor’s folder contains a photograph said to show the mosaic packed in a crate before 1910. The full print, unlike the cropped catalog image, includes a paper label marked P52. The manufacturer’s reference in the conservation manual identifies P52 as an adhesive first supplied in 1952. That gives the photographed packing an earliest possible date; it does not establish when the mosaic itself was made.",
        "Nila puts the full print beside the crop. A removal at some later time could still involve an old object. The immediate problem is the certainty of the donor’s claim that the crate had remained unopened since 1910."
      ],
      "clues": [
        "common-image"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-date"
        }
      ]
    },
    "common-date": {
      "title": "The object and its story are not one date",
      "location": "The image-library table",
      "body": [
        "A visitor offers two quick conclusions: the mosaic must be modern, or the adhesive mark must be ignored because the object looks old. Neither follows from the photograph’s actual subject. It shows packaging around a work, not the moment every stone was cut.",
        "Which statement limits the evidence to what it can establish? You will need a defensible contradiction before asking anyone to explain a donor’s papers."
      ],
      "puzzle": {
        "prompt": "What does the P52 label contradict?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "The fact that the photograph shows a crate.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The claim that this photographed packing remained unopened and unchanged since 1910.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "Every possible date before 1952 for any tile in the mosaic.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The existence of any historic mosaic in the donor’s collection.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "common-sketch"
      }
    },
    "common-sketch": {
      "title": "A map made for looking from the back",
      "location": "The gallery’s drawing case",
      "body": [
        "The sketch is not written backward, but its street plan is mirrored. A note says it was transferred from the back of a transparent working sheet. The sheet’s key lists a fountain, a tram arch, and a square courtyard. On the ordinary city map, the fountain lies west of the arch and the courtyard north of it. In the sketch those east-west positions are reversed, while north remains at the top.",
        "To compare the maps you must reflect left to right, not rotate the page. The marked destination then falls inside the old tile workers’ cooperative, beyond the tram arch."
      ],
      "clues": [
        "common-sketch"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-record"
        }
      ]
    },
    "common-record": {
      "title": "Names in the lower register",
      "location": "The municipal monument desk",
      "body": [
        "A public inventory from 1928 lists a mosaic memorial in the cooperative courtyard. It names five workers and describes their faces set above matching nameplates. The gallery mosaic’s measured dimensions and broken corner match the inventory drawing. A later register records the memorial removed for “safe keeping” during building work, with no completed return entry.",
        "Eda has petitioned for a comparison for years. The inventory does not by itself show who moved the memorial into the donor’s collection, but it establishes why calling the work an anonymous decorative floor erased a significant documented purpose."
      ],
      "meets": [
        "eda"
      ],
      "clues": [
        "common-record"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-provenance"
        }
      ]
    },
    "common-provenance": {
      "title": "Two kinds of missing information",
      "location": "The monument desk steps",
      "body": [
        "The work’s surface and its paperwork have both lost something: the faces are physically absent, while the catalog omits its memorial purpose. Those losses need not have the same cause or date. Your next move should connect independently measurable features and documented names without treating every missing entry as proof of a particular person’s guilt.",
        "Select the two observations that justify a formal comparison with the cooperative’s memorial. An inference about the donor’s motives must wait for a stronger chain."
      ],
      "puzzle": {
        "prompt": "Which two observations justify comparing the gallery work with the memorial?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "The five missing face spaces correspond to the inventory’s five named workers.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "An incomplete return entry already proves exactly who stole the work.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "A modern packing label makes every older inventory irrelevant.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The inventory’s dimensions and broken corner match the gallery mosaic.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "common-return"
      }
    },
    "common-return": {
      "title": "The comparison that cannot be skipped",
      "location": "The museum side entrance",
      "body": [
        "Nila suspends the anonymous-floor label and arranges a recorded comparison with Eda. That does not yet explain why the faces disappeared last night. A person might have damaged them, moved detachable repairs, or taken them to prevent the opening. The clean edges and absent debris favor some possibilities, but they do not name an actor.",
        "Complete your chosen trail. In the conservation rooms, you can test how the faces were attached and what yesterday’s work record says. Along the tram route, you can establish what the crate carried and who authorized its movement. Both trails must come back to the changed object, not merely end at a persuasive address."
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Return to the trail you chose",
          "to": "a-trays",
          "requiresFlags": [
            "route-a"
          ]
        },
        {
          "id": "continue-b",
          "label": "Return to the trail you chose",
          "to": "b-door",
          "requiresFlags": [
            "route-b"
          ]
        }
      ]
    },
    "a-backing": {
      "title": "A join that does not belong to the old floor",
      "location": "The conservation bench",
      "body": [
        "Ash Wren shows you the detachable backing used for five recently restored face panels. The surrounding original stone sits in old mortar; the face units attach to modern reversible mounts. No chipped edge is needed to remove them intact. Ash gives you yesterday’s mounting diagram before answering why the panels were moved. First, the object should be understood without leaning on a person’s explanation."
      ],
      "meets": [
        "ash"
      ],
      "clues": [
        "a-backing"
      ],
      "setFlags": [
        "route-a"
      ],
      "routeLabel": "The conservation trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Check which work was authorized yesterday",
          "to": "a-order"
        }
      ]
    },
    "a-order": {
      "title": "A signed pause in the work",
      "location": "The conservator’s order rack",
      "body": [
        "Yesterday’s order authorizes Ash to remove the five face panels for a comparison at the cooperative. Nila signed the request before leaving but had not seen the morning display schedule. A later scheduling change moved the public opening forward. The signed order establishes permission for the move, not whether Ash completed the destination handover. You take its reference to the municipal desk."
      ],
      "clues": [
        "a-order"
      ],
      "routeLabel": "The conservation trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Compare the work with the full historical record",
          "to": "common-image"
        }
      ]
    },
    "a-trays": {
      "title": "Five numbers in the repair notebook",
      "location": "The cooperative’s ceramics room",
      "body": [
        "Eda opens the comparison room with Ash present. Five intact faces rest in padded trays numbered to the mounting diagram. On the backs, earlier conservators recorded names that agree with the public inventory. The diagram also records an old reversal: two names had been attached to the wrong neighboring units during a later repair. That mistake needs correction by evidence, not by guessing which face looks older."
      ],
      "clues": [
        "a-trays"
      ],
      "routeLabel": "The conservation trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Compare the names without inventing identities",
          "to": "a-names"
        }
      ]
    },
    "a-names": {
      "title": "A repair that needs a witness",
      "location": "The cooperative archive wall",
      "body": [
        "Eda produces a dated portrait sheet pairing each named worker with a numbered figure. Ash’s current tray numbers refer to that sheet, while the old museum label follows the later swapped mounts. A name should travel with a documented identity, not simply with the space where a tile last happened to sit. Nila asks for a proposal that will correct both the surface arrangement and the public explanation."
      ],
      "clues": [
        "a-names"
      ],
      "routeLabel": "The conservation trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "Choose the repair that the sources support",
          "to": "a-final"
        }
      ]
    },
    "a-final": {
      "title": "What should be put back?",
      "location": "The joint comparison table",
      "body": [
        "The faces were removed under a signed comparison order and arrived intact. The schedule change made their absence look like a theft. Their comparison has also exposed a genuine mistake in the names. Which response respects the authorized move and the older identity record?"
      ],
      "puzzle": {
        "prompt": "Which action should the joint team take?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Keep displaying the work as anonymous because the schedule changed.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Call the clean removal vandalism despite the reversible mounts and signed order.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Return the faces to their last spaces without checking the older names.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Record the intact handover, correct the swapped names using the portrait sheet, and agree a display that restores the memorial context.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "a-agreement"
      },
      "routeLabel": "The conservation trail"
    },
    "a-agreement": {
      "title": "The work no longer stands alone",
      "location": "The museum’s reopened gallery",
      "body": [
        "Eda and Nila agree to show the faces with the portrait sheet while the cooperative considers the memorial’s long-term location. Ash records every reversible join and the corrected names. The unexplained empty spaces have become an accountable conservation event. A separate provenance inquiry will examine the donor’s contradictory packing story rather than pretending that recovering the faces settles every earlier transfer."
      ],
      "clues": [
        "a-agreement"
      ],
      "routeLabel": "The conservation trail",
      "choices": [
        {
          "id": "continue-a",
          "label": "See the first corrected name set beside a face",
          "to": "ending-a"
        }
      ]
    },
    "b-tram": {
      "title": "An ordinary service after passengers leave",
      "location": "The tram dispatch office",
      "body": [
        "Petra Moss keeps the freight register beside the passenger timetable. The last passenger car left at 8:10; a maintenance car with a locked storage compartment left at 8:40. The museum receipt belongs to the later movement. Its absence from the public passenger board does not make the journey unrecorded. Petra will follow the freight reference, not a rumor about a secret midnight tram."
      ],
      "meets": [
        "petra"
      ],
      "clues": [
        "b-tram"
      ],
      "setFlags": [
        "route-b"
      ],
      "routeLabel": "The last tram’s trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Find the receiving signature",
          "to": "b-depot"
        }
      ]
    },
    "b-depot": {
      "title": "A receipt with a precise limit",
      "location": "The western tram depot",
      "body": [
        "The crate was signed into the depot by an attendant at 9:02 and released to the cooperative’s representative at 9:15. The attendant weighed it but never opened it. A seal number matches the museum’s outgoing record. These details establish continuity of custody; the weight alone cannot establish whether the crate contained faces, tools, or something else."
      ],
      "clues": [
        "b-depot"
      ],
      "routeLabel": "The last tram’s trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Check the object’s history before following its destination",
          "to": "common-image"
        }
      ]
    },
    "b-door": {
      "title": "The person who asked for the comparison",
      "location": "The cooperative courtyard",
      "body": [
        "Eda admits receiving the crate but asks you to read the authorization before calling it a theft. Nila signed a comparison order yesterday; the cooperative received a copy. Its destination description is clear, but the museum’s revised public-opening notice arrived after the crate had left. Eda agrees to open the sealed consignment with the museum represented, not privately for an unrecorded reassurance."
      ],
      "clues": [
        "b-door"
      ],
      "routeLabel": "The last tram’s trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Arrange an accountable opening",
          "to": "b-opening"
        }
      ]
    },
    "b-opening": {
      "title": "A seal compared before it is broken",
      "location": "The cooperative meeting room",
      "body": [
        "Nila compares the outgoing seal entry, Petra’s register, the depot release, and the seal still attached to the crate. They agree before the consignment is opened. Inside are five padded face panels, a mounting diagram, and the conservator’s note requesting an identity comparison. No face is broken. The paperwork explains the late misunderstanding without making the earlier donor story true."
      ],
      "clues": [
        "b-opening"
      ],
      "routeLabel": "The last tram’s trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose what the transport chain can prove",
          "to": "b-final"
        }
      ]
    },
    "b-final": {
      "title": "The route of a thing and its ownership",
      "location": "The cooperative’s long table",
      "body": [
        "You can now establish the authorized overnight movement. The older memorial inventory and the donor’s contradictory packing history raise another question: where the work ought to be and who should be consulted. Which conclusion keeps these two inquiries distinct?"
      ],
      "puzzle": {
        "prompt": "Which conclusion is justified by the combined records?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "The faces traveled under an authorized sealed comparison chain; the work’s long-term ownership and memorial context still require a separate joint provenance process.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "A valid overnight receipt proves the donor owned the mosaic in every earlier decade.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Because the crate was sealed, no one needs to record who received it.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The incomplete historic return entry makes the present signed transport chain false.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "b-public"
      },
      "routeLabel": "The last tram’s trail"
    },
    "b-public": {
      "title": "A public explanation without a shortcut",
      "location": "The museum’s street noticeboard",
      "body": [
        "Petra supplies a certified copy of the transport entries. Nila posts a short correction: the faces are intact and their temporary comparison was authorized. Eda adds an invitation to the provenance meeting, where the memorial’s documented names and removal history will be discussed. The public can learn what happened overnight without being told that a delivery receipt resolves decades of disputed possession."
      ],
      "clues": [
        "b-public"
      ],
      "routeLabel": "The last tram’s trail",
      "choices": [
        {
          "id": "continue-b",
          "label": "Walk back through the courtyard",
          "to": "ending-b"
        }
      ]
    },
    "ending-a": {
      "title": "Five names in the right order",
      "location": "The joint gallery display",
      "body": [
        "A school group stops before the portrait sheet. For the first time, the museum guide can explain why there are five faces and how their names were checked."
      ],
      "ending": {
        "title": "Resolved through conservation and comparison",
        "body": [
          "Your route showed how reversible mounts and an authorized comparison made the faces appear stolen. You also corrected a genuine identity swap and helped restore the memorial’s purpose. The older packing contradiction remains a live provenance question, clearly marked rather than hidden beneath a happy repair."
        ],
        "kind": "solved"
      }
    },
    "ending-b": {
      "title": "The crate’s last signature",
      "location": "The cooperative courtyard",
      "body": [
        "Petra folds the freight copy into the meeting file. Eda leaves the courtyard gate open for the announced public visit, while Nila takes down the anonymous-floor label."
      ],
      "ending": {
        "title": "Resolved through the transport chain",
        "body": [
          "You followed an actual recorded route across the city and established the intact, authorized handover. Your choices produced a public correction and a separate provenance process rather than a workshop repair alone. Recovering the faces did not require pretending that their earlier removal from the village had already been justified."
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
          "type": "answer",
          "id": "answer-2"
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
          "type": "answer",
          "id": "answer-2"
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
          "id": "answer-1"
        },
        {
          "type": "choice",
          "id": "continue-b"
        }
      ]
    }
  ]
};
