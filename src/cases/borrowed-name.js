/** Expanded, authored mystery. Only earned scenes belong in the reader. */
export default {
  "id": "borrowed-name",
  "title": "The Borrowed Name",
  "genre": "Historical mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "description": "A celebrated artist signs a picture after the date of her death. Follow a paper trail across town or earn the confidence of the family guarding her last address.",
  "setting": "An old printing district preparing its first public art archive",
  "characters": [
    {
      "id": "elise",
      "name": "Elise Rowan",
      "role": "Archive assistant",
      "description": "Checks dates against original records instead of accepting a tidy catalog.",
      "color": "#a18970"
    },
    {
      "id": "tomas",
      "name": "Tomas Ives",
      "role": "Paper conservator",
      "description": "Recognizes repair habits as readily as watermarks.",
      "color": "#a18970"
    },
    {
      "id": "ruth",
      "name": "Ruth Vale",
      "role": "Retired theater dresser",
      "description": "Asks why you want a name before she gives you one.",
      "color": "#a18970"
    },
    {
      "id": "mina",
      "name": "Mina Orr",
      "role": "Family representative",
      "description": "Has brought a locked portfolio and a carefully limited promise.",
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
      "id": "common-rule",
      "title": "The expanded initials",
      "description": "The original picture and sale slip use only L. Vale. A later catalog expanded the initials to Lydia without supplying a source."
    },
    {
      "id": "common-code",
      "title": "The ordered landmarks",
      "description": "The supplied key maps LAMP, ARCH, WELL, IVY to2,7,1,4 in that written order; it identifies address2714 without identifying who worked there."
    },
    {
      "id": "common-account",
      "title": "Two authorized bearers",
      "description": "The supply book permitted either of two authorized bearers to collect on the L. Vale account. The attached authority is missing, but its place on the page is visible."
    },
    {
      "id": "a-paper",
      "title": "The ink and seam",
      "description": "The date and initials belong to one original ink layer on paper consistent with1934; no later patch carries the signature."
    },
    {
      "id": "a-printer",
      "title": "A named material order",
      "description": "Mounting paper matching the picture was ordered in 1934 for Leon Vale at address2714, as part of six street studies."
    },
    {
      "id": "a-proof",
      "title": "Leon’s submitted drawing",
      "description": "A signed union application links Leon to the matching working drawing and numbered mounting sheet; its permission concerns a professional account, not impersonating Lydia."
    },
    {
      "id": "a-catalog",
      "title": "The lost question mark",
      "description": "A draft questioned whether L. Vale meant Lydia; the final catalog removed the question mark without recording new evidence."
    },
    {
      "id": "a-label",
      "title": "A sourced public attribution",
      "description": "The label cites the material order and working drawing while explaining the unsupported earlier expansion of the initials."
    },
    {
      "id": "b-theater",
      "title": "Ruth’s limited account",
      "description": "Ruth can connect the family to address2714 but does not claim to have watched the disputed picture being painted."
    },
    {
      "id": "b-portfolio",
      "title": "The estate’s limited permission",
      "description": "Leon’s estate permits examination of work records to correct an attribution while reserving unrelated family letters from publication."
    },
    {
      "id": "b-book",
      "title": "The practice-book link",
      "description": "A dated practice book with the picture’s specific details is tied by receipt to Leon at 2714; Ruth independently identifies his workroom."
    },
    {
      "id": "b-authority",
      "title": "The estate statement",
      "description": "The estate will publicly attest the work-record comparison and authorized professional-name use while withholding unrelated private correspondence."
    },
    {
      "id": "b-agreement",
      "title": "A restricted but accountable source",
      "description": "A signed public statement names the work-record comparison, while the agreement preserves the estate’s unrelated private papers."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "A signature after the last page",
      "location": "The new district archive",
      "body": [
        "Elise Rowan lays a little street painting beside a death notice. The picture is signed “L. Vale, 1934.” The notice says Lydia Vale died in 1931. An anonymous donor wants the picture displayed under that famous name, but the archive has promised not to publish disputed attributions as settled facts.",
        "There are two ways to begin. Tomas, a conservator, can help trace the picture’s physical history. Ruth, a retired dresser at the theater, may know why the donor used Lydia’s old address. The opening exhibition is tomorrow; choose whose evidence you will spend the evening learning to understand."
      ],
      "meets": [
        "elise"
      ],
      "choices": [
        {
          "id": "take-a",
          "label": "Trace the disputed picture through paper and printing records",
          "to": "a-paper",
          "excludesFlags": [
            "route-b"
          ]
        },
        {
          "id": "take-b",
          "label": "Visit the family’s old theater contacts",
          "to": "b-theater",
          "excludesFlags": [
            "route-a"
          ]
        }
      ]
    },
    "common-rule": {
      "title": "What the name did not promise",
      "location": "The municipal record room",
      "body": [
        "The archivist produces the district’s old registration rules. A legal name belongs in a birth or death register. A professional name may be used by another person if a contract authorizes it and a commercial claim does not pretend that the first person remains alive. The rule does not tell you whether such permission existed here.",
        "The picture’s seller described it as “an original work signed L. Vale,” while a later catalog expanded the initials to Lydia without citing a source. You underline the expansion. It is a claim made by a later writer, not a word written by the painter."
      ],
      "clues": [
        "common-rule"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-dates"
        }
      ]
    },
    "common-dates": {
      "title": "A journey the dates cannot make",
      "location": "The district chronology table",
      "body": [
        "A theater program puts Lydia on stage in Northborough at eight on March12, 1930. A receipt supposedly proves that she collected this canvas personally in Southport at seven that evening. The fastest scheduled journey took five hours. Both records use local time, and neither place changed its clocks that week.",
        "The receipt bears only “L. Vale, account authorized.” It does not say that Lydia appeared in person. You are not yet entitled to call either original record false. Which later inference is inconsistent with the actual wording and travel limit?"
      ],
      "puzzle": {
        "prompt": "Which claim cannot be maintained without adding evidence?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "The receipt by itself proves Lydia collected the canvas personally before performing in Northborough that night.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "The theater program and the account receipt can both be genuine.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "The initials on a receipt may identify an account rather than a person’s physical presence.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "An authorized person might have collected material on an account.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "common-code"
      }
    },
    "common-code": {
      "title": "An instruction for finding a door",
      "location": "The old street-map counter",
      "body": [
        "Inside a copied envelope is a four-word direction: LAMP, ARCH, WELL, IVY. A map key from the same envelope assigns street numbers to those landmarks: lamp=2, arch=7, well=1, ivy=4. The note adds, “Read the way a person walks, not the way a clerk sorts a list.” The words therefore preserve an order; they are not a collection to arrange alphabetically.",
        "The corresponding address is2714 in the district’s four-block directory. You still need a witness or a document to connect that address to the picture. A solved direction identifies a place, not an artist."
      ],
      "clues": [
        "common-code"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-account"
        }
      ]
    },
    "common-account": {
      "title": "The account that had two hands",
      "location": "The artists’ supply counter",
      "body": [
        "The shop’s old account book contains bills to L. Vale in two distinct hands. One uses a broad pen and writes pounds before shillings; the other uses a fine pen and writes a total at the end. A note from the shopkeeper says, “Either authorized bearer may collect; settle monthly.” A folded authorization once pinned to the page is missing, leaving only two rust marks.",
        "Elise reminds you that handwriting can distinguish two writers without naming either. A damaged authorization is not the same thing as no authorization. You record the visible permission and its missing attachment separately."
      ],
      "clues": [
        "common-account"
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Continue the investigation",
          "to": "common-claims"
        }
      ]
    },
    "common-claims": {
      "title": "Permission, authorship, and a later guess",
      "location": "The archive’s quiet stair",
      "body": [
        "There are three questions now: who painted the disputed work, whether that person was permitted to use the professional name, and whether a later catalog misidentified the initials. Those questions can have different answers. A genuine canvas does not settle an attribution; an authorized account does not prove permission to sell under a professional name.",
        "Choose the observations that make a shared account possible without establishing the identity of the later painter. This is a boundary exercise: a careful investigator needs to know what the present evidence cannot yet say."
      ],
      "puzzle": {
        "prompt": "Which two observations support a shared account while leaving authorship unresolved?",
        "mode": "multiple",
        "wrongFeedback": "This combination leaves a documented observation unexplained. Compare the source, timing, and physical limits before choosing again.",
        "options": [
          {
            "id": "answer-1",
            "label": "Two handwriting styles tell you the writers’ legal names without another comparison.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "The supply book explicitly permits two authorized bearers.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "A later catalog expands the initials, so its guess must be correct.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "The original documents use initials rather than Lydia’s full name.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          }
        ],
        "correctTo": "common-choice"
      }
    },
    "common-choice": {
      "title": "The proof you chose to seek",
      "location": "The printing district at dusk",
      "body": [
        "The shutters are coming down along the supply street. Elise can hold the display label until morning, but she cannot invent a signature comparison or ask a family witness to appear without preparation. Return to the route you began.",
        "A physical-paper inquiry may establish the maker through a traceable professional record. A family inquiry may establish the same history through private testimony and a limited legal statement. Neither route licenses you to publish every personal detail you happen to discover. The question is how to justify a truthful label without claiming more authority than your sources allow."
      ],
      "choices": [
        {
          "id": "continue-a",
          "label": "Complete the inquiry you began",
          "to": "a-proof",
          "requiresFlags": [
            "route-a"
          ]
        },
        {
          "id": "continue-b",
          "label": "Complete the inquiry you began",
          "to": "b-book",
          "requiresFlags": [
            "route-b"
          ]
        }
      ]
    },
    "a-paper": {
      "title": "The seam below the signature",
      "location": "The conservation workroom",
      "body": [
        "Tomas places the painting under a raking lamp. The signature lies above an old paper seam, not beneath a later restoration patch. The numerals belong to the same ink layer as the initials. The paper is consistent with1934, although a watermark can establish an earliest possible date rather than the exact day a painter worked."
      ],
      "meets": [
        "tomas"
      ],
      "clues": [
        "a-paper"
      ],
      "setFlags": [
        "route-a"
      ],
      "routeLabel": "The archive inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Visit the printer who supplied the mount",
          "to": "a-printer"
        }
      ]
    },
    "a-printer": {
      "title": "The order beneath the mount",
      "location": "The printer’s delivery hatch",
      "body": [
        "A surviving invoice identifies the mounting paper by a torn corner retained as a sample. It was ordered for Leon Vale at address2714, not for Lydia. The invoice describes “six street studies for local sale.” Tomas cautions that an invoice places paper with a customer, not a brush in that customer’s hand. You need the next link before attributing the painting."
      ],
      "clues": [
        "a-printer"
      ],
      "routeLabel": "The archive inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Read the original account rules",
          "to": "common-rule"
        }
      ]
    },
    "a-proof": {
      "title": "A working drawing kept flat",
      "location": "The printers’ union archive",
      "body": [
        "The union archive has an application submitted by Leon Vale. Attached is a street drawing with the same repaired balcony and misplaced rainpipe as the disputed picture. Its pencil instructions describe transferring the sketch onto the numbered mounting sheet. A signed statement gives Leon permission to use the family’s professional account, but not to pretend he is Lydia."
      ],
      "clues": [
        "a-proof"
      ],
      "routeLabel": "The archive inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Compare the source with the later catalog",
          "to": "a-catalog"
        }
      ]
    },
    "a-catalog": {
      "title": "How a reasonable guess became a fact",
      "location": "The catalog editor’s cupboard",
      "body": [
        "The editor’s draft has “Lydia?” written in the margin beside L. Vale. In the printed version the question mark disappeared. No new source was added. You can now explain how uncertainty became a confident label without accusing the editor of inventing the picture itself. Elise asks which attribution your chain of physical and documentary evidence supports."
      ],
      "clues": [
        "a-catalog"
      ],
      "routeLabel": "The archive inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "Write an attribution with a source",
          "to": "a-deduction"
        }
      ]
    },
    "a-deduction": {
      "title": "The name under the picture",
      "location": "The exhibition-label desk",
      "body": [
        "The original ink, named order, matching working drawing, and catalog draft do different jobs. Pick the label that respects their different limits. A truthful correction need not turn an unsigned assumption into a new unsupported certainty."
      ],
      "puzzle": {
        "prompt": "Which label best fits the documented chain?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Attributed to Leon Vale,1934; the earlier identification as Lydia arose from an unsupported expansion of the initials.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-2",
            "label": "Artist unknown forever, because a single document can never prove every link.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-3",
            "label": "Painted by Lydia after 1931 because the ink is original.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "A modern forgery, because Leon used an account with the same initials.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "a-label"
      },
      "routeLabel": "The archive inquiry"
    },
    "a-label": {
      "title": "A note that shows its workings",
      "location": "The archive gallery",
      "body": [
        "Elise places the new label beside a facsimile of the union drawing and a short explanation of the catalog correction. She does not display the supply account’s private balances. The original work becomes more interesting when its evidence is visible: not a miracle after a death, but a younger painter trying to work under the shadow of a familiar name."
      ],
      "clues": [
        "a-label"
      ],
      "routeLabel": "The archive inquiry",
      "choices": [
        {
          "id": "continue-a",
          "label": "See the first visitor read the corrected label",
          "to": "ending-a"
        }
      ]
    },
    "b-theater": {
      "title": "A question before an answer",
      "location": "The theater wardrobe stair",
      "body": [
        "Ruth Vale asks whether the archive plans to call the picture a fraud before anyone has spoken to the family. You say only what is known: the printed full name outruns the initials. She agrees to introduce Mina, who holds the papers for a former resident of 2714. Ruth herself remembers costumes, not the act of painting."
      ],
      "meets": [
        "ruth"
      ],
      "clues": [
        "b-theater"
      ],
      "setFlags": [
        "route-b"
      ],
      "routeLabel": "The family inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Meet the person authorized to speak for the papers",
          "to": "b-portfolio"
        }
      ]
    },
    "b-portfolio": {
      "title": "The promise on a locked case",
      "location": "A theater rehearsal room",
      "body": [
        "Mina Orr brings a locked portfolio and a written instruction from Leon Vale’s estate. A legal representative may examine its contents to correct an attribution, but letters about illness and family arguments must remain private. Mina is willing to show work records if the archive accepts those limits. You agree that an accurate label does not require publishing a person’s entire life."
      ],
      "meets": [
        "mina"
      ],
      "clues": [
        "b-portfolio"
      ],
      "routeLabel": "The family inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Compare the available records without exposing private letters",
          "to": "common-rule"
        }
      ]
    },
    "b-book": {
      "title": "The practice book",
      "location": "A borrowed theater table",
      "body": [
        "Mina opens a dated practice book. It contains the balcony and rainpipe from the disputed picture, alongside notes about mixing its blue shadows. A receipt pinned into the book names Leon at 2714. Ruth recognizes the room where he worked but carefully distinguishes recognition of the room from witnessing the finished brushwork. The separate statements reinforce each other without becoming identical."
      ],
      "clues": [
        "b-book"
      ],
      "routeLabel": "The family inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Ask what may be stated publicly",
          "to": "b-authority"
        }
      ]
    },
    "b-authority": {
      "title": "A name used with permission",
      "location": "The estate solicitor’s waiting room",
      "body": [
        "The solicitor confirms that the professional account was shared with permission and that Leon’s estate will issue a signed attribution statement after comparing the canvas with the practice book. She will not authorize publication of private correspondence. The archive can cite the statement and record its scope, instead of demanding the letters as the price of correcting a mistake."
      ],
      "clues": [
        "b-authority"
      ],
      "routeLabel": "The family inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Choose a truthful and proportionate account",
          "to": "b-deduction"
        }
      ]
    },
    "b-deduction": {
      "title": "Enough truth for a label",
      "location": "The archive’s closing room",
      "body": [
        "You can now explain the initials and the later mistaken expansion without printing private medical or family details. What should Elise publish, and what should she keep as an appropriately restricted source?"
      ],
      "puzzle": {
        "prompt": "Which action is justified by the family evidence?",
        "mode": "single",
        "options": [
          {
            "id": "answer-1",
            "label": "Retain Lydia’s name to spare the archive an embarrassing correction.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-2",
            "label": "Publish the estate-backed attribution to Leon, cite the comparison and its limits, and keep unrelated private letters closed.",
            "correct": true,
            "feedback": "That explanation accounts for the observations."
          },
          {
            "id": "answer-3",
            "label": "Call the painting stolen because two people used a professional account.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          },
          {
            "id": "answer-4",
            "label": "Publish every letter because correcting one label removes all privacy interests.",
            "correct": false,
            "feedback": "Look for an explanation that fits every recorded condition, not just a persuasive motive."
          }
        ],
        "correctTo": "b-agreement"
      },
      "routeLabel": "The family inquiry"
    },
    "b-agreement": {
      "title": "The folder with the right boundary",
      "location": "The archive records counter",
      "body": [
        "Mina signs a public statement identifying the practice book and its comparison with the canvas. Elise files the permission terms beside it. Ruth asks to see the picture before the exhibition opens; she stands quietly in front of the painted balcony, then points out the actual building across the square. A work has found its maker without a family losing every boundary."
      ],
      "clues": [
        "b-agreement"
      ],
      "routeLabel": "The family inquiry",
      "choices": [
        {
          "id": "continue-b",
          "label": "Open the gallery with a corrected name",
          "to": "ending-b"
        }
      ]
    },
    "ending-a": {
      "title": "A question mark restored",
      "location": "The public gallery",
      "body": [
        "The first visitor reads both labels: the old one crossed through on a facsimile, the new one showing where its confidence comes from. Elise leaves the question mark visible in the editor’s draft."
      ],
      "ending": {
        "title": "Resolved through provenance research",
        "body": [
          "Your route linked original material, a named commission, and a matching working drawing. Lydia did not paint after her death; a later catalog had expanded a shared professional initial without evidence. The archive now makes its attribution and its reasoning available for others to check."
        ],
        "kind": "solved"
      }
    },
    "ending-b": {
      "title": "The name the family could give",
      "location": "The theater square",
      "body": [
        "Mina watches the public label being fixed beside the frame. The private letters go back into the portfolio. Ruth tells Elise where to find the building in the painting, and no one asks for a key to every locked drawer."
      ],
      "ending": {
        "title": "Resolved through the estate’s testimony",
        "body": [
          "You reached the same history through an authorized comparison and a limited public statement. Leon’s authorship can be acknowledged without turning unrelated family correspondence into an exhibition. The route you chose changed how the truth was proved and who retained control of its personal details."
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
          "type": "answer",
          "id": [
            "answer-2",
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
          "id": "answer-1"
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
          "type": "answer",
          "id": [
            "answer-2",
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
          "id": "answer-2"
        },
        {
          "type": "choice",
          "id": "continue-b"
        }
      ]
    }
  ]
};
