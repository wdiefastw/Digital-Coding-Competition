/** Original case; answer keys and route proofs are never projected into the reading interface. */
export default {
  "id": "perfume-archive",
  "title": "The Perfume Archive",
  "genre": "Historical mystery",
  "difficulty": "Intricate",
  "duration": "10–20 min",
  "setting": "A small scent museum preparing its anniversary display",
  "description": "A handwritten formula has two dates and no credited author. Follow the laboratory papers or the garden deliveries to discover whose work the museum has been preserving.",
  "revision": 2,
  "flags": [
    "laboratory",
    "botanical"
  ],
  "characters": [
    {
      "id": "lena",
      "name": "Lena Hart",
      "role": "Museum archivist",
      "description": "Wears pencil smudges on her cuffs and leaves uncertain dates in square brackets.",
      "color": "#a48d9d"
    },
    {
      "id": "omar",
      "name": "Omar Reed",
      "role": "Laboratory curator",
      "description": "Explains why an old bottle is evidence, not an invitation to smell everything.",
      "color": "#8d9fa6"
    },
    {
      "id": "jules",
      "name": "Jules Vale",
      "role": "Botanical librarian",
      "description": "Records a plant’s accession before admiring its flowers.",
      "color": "#91a17e"
    },
    {
      "id": "eve",
      "name": "Eve Moss",
      "role": "Retired bottler",
      "description": "Remembers the workroom’s routines more readily than its official speeches.",
      "color": "#b4936e"
    }
  ],
  "clues": [
    {
      "id": "pfl-impression",
      "title": "The intact pad impression",
      "description": "The preserved working stack carries the impression “Mina, June 12, trial seven” beneath the later catalogue face."
    },
    {
      "id": "pfl-ratio",
      "title": "The working-unit key",
      "description": "Dash 2, bar 5, circle 10; trial seven is base 10,citrus 10,leaf 5,resin 2, matching the displayed ratio."
    },
    {
      "id": "pfl-batch",
      "title": "A countersigned earlier batch",
      "description": "The June 13 MH-7 entry identifies Mina as mixer and repeats 10:10:5:2 with an independent measurement countersignature."
    },
    {
      "id": "pfl-copy",
      "title": "The June 18 entry is a copy",
      "description": "Julian’s June 18 book explicitly labels MH-7 as copied for presentation, not newly devised."
    },
    {
      "id": "pfl-key",
      "title": "The independent operator key",
      "description": "The contemporary payroll key identifies MH as Mina Hale and predates the present attribution dispute."
    },
    {
      "id": "pfl-credit",
      "title": "The supported division of work",
      "description": "Mina’s named June 12 trial and checked June 13 batch precede Julian’s June 18 copy for presentation."
    },
    {
      "id": "pfl-label",
      "title": "A reproducible label",
      "description": "The facsimiles can show the ordered ratio, named working date, and countersigned earlier use without opening old bottles."
    },
    {
      "id": "pfb-accession",
      "title": "An independently dated concentrate",
      "description": "GL-4 arrived June 10; Mina requested it June 11. One unit of concentrate replaces two units of ordinary leaf infusion."
    },
    {
      "id": "pfb-conversion",
      "title": "The delivered quantity fits the recipe",
      "description": "Mina’s 5 units GL-4 supply 10 ordinary-infusion units under the two-to-one key; the presentation formula specifies the concentrate."
    },
    {
      "id": "pfb-ticket",
      "title": "A contemporaneous bottling ticket",
      "description": "Eve’s June 13 MH-7 work ticket specifies five units of concentrate and matches her recorded shift."
    },
    {
      "id": "pfb-label",
      "title": "A named trial outside the museum",
      "description": "The supplier’s June 14 paid invoice retains a “Mina Hale, trial seven” label with GL-4, independently predating the presentation."
    },
    {
      "id": "pfb-launch",
      "title": "Receipt of finished samples",
      "description": "Julian’s June 18 receipt is for finished MH-7 presentation samples, not a record of invention."
    },
    {
      "id": "pfb-chain",
      "title": "An independent provenance chain",
      "description": "The ingredient issue, named supplier label, and bottling ticket link Mina’s trial before Julian’s receipt of finished presentation samples."
    },
    {
      "id": "pfb-display",
      "title": "The proposed corroborated display",
      "description": "Eve’s recorded account will appear with ingredient records and the external named label, separating memory from documentary support."
    }
  ],
  "start": "arrival",
  "nodes": {
    "arrival": {
      "title": "An anniversary without an author",
      "location": "The scent museum",
      "body": [
        "Lena has paused the anniversary display over one formula card. The museum credits its best-known fragrance to founder Julian Marr, but this card is signed only “M” and bears two different dates. One is printed in the catalogue; the other is faintly impressed through the paper from a page once above it. The fragrance itself is safely sealed. Nobody will open antique bottles to settle a question of authorship. Lena asks you to follow a chain that can distinguish when a formula was devised, when it was copied, and when someone later claimed it."
      ],
      "meets": [
        "lena"
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
      "title": "A narrow historical claim",
      "location": "The archive desk",
      "body": [
        "The accepted claim says Julian devised the formula on June 18. Staff records show that assistant Mina Hale also worked in the laboratory that year, but an initial by itself proves nothing. The catalogue was assembled decades later. Lena will change the display only for evidence that can be described precisely: a dated working recipe, independent use of that recipe, or a record linking its author to a distinctive ingredient choice. Omar can open the laboratory papers now; Jules can instead show the botanical delivery books before the reading room closes. Choose one complete trail rather than borrowing conclusions from both."
      ],
      "meets": [
        "omar"
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
      "title": "Paper or plants",
      "location": "The courtyard passage",
      "body": [
        "The laboratory route follows impressed writing, batch quantities, and the museum’s copy register. The garden route follows accession dates, supply restrictions, and a retired worker’s corroborated account. Each can establish how the disputed recipe existed before the official claim, while leading to a different kind of correction. You will need to distinguish independent evidence from memories repeated after the anniversary publicity. The fact that a story deserves to be true is not evidence that the particular documents support it."
      ],
      "meets": [],
      "choices": [
        {
          "id": "laboratory",
          "label": "Read the laboratory’s working papers",
          "to": "laboratory-0",
          "excludesFlags": [
            "botanical"
          ]
        },
        {
          "id": "botanical",
          "label": "Follow the ingredient deliveries",
          "to": "botanical-0",
          "excludesFlags": [
            "laboratory"
          ]
        }
      ]
    },
    "laboratory-0": {
      "title": "The date beneath the date",
      "location": "The conservation table",
      "body": [
        "Omar places the card beneath an angled lamp. Its catalogue face says June 18, but the impressed writing reads “Mina, June 12, trial seven.” The conservation note explains that this indentation came from writing on the sheet immediately above, not from ink visible on the card itself. The old bound pad still has its page stubs, and the sequence is intact. That links the impression to a particular working stack, but it does not yet show whether trial seven was the same recipe later exhibited. You record the full phrase instead of stopping at a suggestive name."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [
        "omar"
      ],
      "setFlags": [
        "laboratory"
      ],
      "clues": [
        "pfl-impression"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "laboratory-1",
          "requires": []
        }
      ]
    },
    "laboratory-1": {
      "title": "A recipe in four measures",
      "location": "The laboratory bench",
      "body": [
        "Trial seven lists four components using the laboratory’s supplied unit key: one dash equals 2 units, one bar equals 5, and one circle equals 10. The recipe records a circle of base, two bars of citrus, one bar of leaf, and one dash of resin. Converted to ordinary units, its ratio is 10:10:5:2. The displayed formula’s typed ratio is exactly the same. Another trial nearby is 10:5:10:2; its similar appearance is a reminder to compare order as well as totals. No chemical knowledge is required, only the key printed on the working sheet."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "clues": [
        "pfl-ratio"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "laboratory-2",
          "requires": [
            "pfl-impression",
            "pfl-ratio"
          ]
        }
      ]
    },
    "laboratory-2": {
      "title": "Which recipe is actually linked?",
      "location": "The laboratory table",
      "body": [
        "Choose the comparison supported by the supplied measure key. Two formulas can share a total quantity and still use different ingredients in different proportions. You are testing whether the June 12 working record belongs to the displayed recipe, not whether the handwriting looks pleasing or the fragrance sounds similar. Keep the component order fixed while converting the symbols."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "puzzle": {
        "prompt": "Which ordered ratio does trial seven encode?",
        "options": [
          {
            "id": "ratio",
            "label": "Base 10,citrus 10,leaf 5,resin 2, matching the displayed recipe.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "swap",
            "label": "Base 10,citrus 5,leaf 10,resin 2, because equal totals make order irrelevant.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "all",
            "label": "Base 10,citrus 10,leaf 10,resin 10, because every symbol is a circle.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "date",
            "label": "The June 18 catalogue date determines the mixture regardless of symbols.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "laboratory-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "laboratory-0"
        }
      ]
    },
    "laboratory-3": {
      "title": "The trial’s first use",
      "location": "The batch register",
      "body": [
        "The batch register lists trial seven mixed on June 13, one day after the working entry. Its lot code is MH-7, and the register’s key says those letters identify the mixing operator, Mina Hale. The ingredient quantities are 10:10:5:2 in the same order. A second employee checked the measurements and countersigned the line before the founder’s claimed June 18 invention date. The register establishes an earlier use of the recipe; it does not require a modern visitor to decide whether a scent in an antique bottle smells right."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "clues": [
        "pfl-batch"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "laboratory-4",
          "requires": []
        }
      ]
    },
    "laboratory-4": {
      "title": "The founder’s copy",
      "location": "The copy register",
      "body": [
        "Julian’s own book records “copy MH-7 for presentation” on June 18. Its rule distinguishes “copy” from “devise,” using separate columns. The presentation recipe was later catalogued under the date in the copying column, while the working pad and operator register remained in another drawer. This is a possible route for an attribution error, but the positive evidence matters more than the explanation of the mistake. An earlier named working entry and independently checked use support authorship more directly than a later copy supports invention."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "clues": [
        "pfl-copy"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "laboratory-5",
          "requires": []
        }
      ]
    },
    "laboratory-5": {
      "title": "A name in the wage book",
      "location": "The staff archive",
      "body": [
        "Lena brings the staff key that expands the operator codes. MH is Mina Hale, employed in formulation trials; JM is Julian Marr, responsible for presentations and sales. The key was written in the payroll book, years before the anniversary dispute. It is not a new interpretation of two initials. Lena cautions that job titles alone do not prove who wrote a particular recipe, but they independently identify the named operator in the earlier batch record. Your second deduction should combine the work itself with a dated independent use, rather than substituting status for authorship."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "clues": [
        "pfl-key"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "laboratory-6",
          "requires": [
            "pfl-copy",
            "pfl-key"
          ]
        }
      ]
    },
    "laboratory-6": {
      "title": "Choose the authorship evidence",
      "location": "The archive reading desk",
      "body": [
        "Select the two records that most directly support Mina’s earlier work on the exhibited recipe. One links her named working trial to the same ordered ratio; another independently records that recipe’s use before the founder’s presentation date. A job title and the founder’s fame may provide context, but neither establishes this recipe’s origin. Your answer should be strong enough to explain without asking anyone to admire the handwriting."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "puzzle": {
        "prompt": "Which two records most directly establish the earlier formulation?",
        "options": [
          {
            "id": "trial",
            "label": "Mina’s June 12 trial encodes the exhibited ordered ratio.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "batch",
            "label": "The independently countersigned June 13 batch uses that same recipe.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "title",
            "label": "Mina’s job title includes the word formulation.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "fame",
            "label": "Julian was well known when the museum opened.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "laboratory-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "laboratory-4"
        }
      ]
    },
    "laboratory-7": {
      "title": "A correction with a trace",
      "location": "The museum catalogue desk",
      "body": [
        "The earlier named trial and countersigned batch establish a formulation history before June 18. The founder’s book records a later copy for presentation, explaining the date the old catalogue preserved. Lena proposes crediting Mina for the documented formulation while retaining Julian’s presentation role. This does not require claiming that every recipe in the museum was misattributed or that a deliberate conspiracy has been proved. The case concerns one recipe and one paper chain. A precise correction gives visitors more history than replacing one celebrated surname with another unexplained assertion."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "clues": [
        "pfl-credit"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "laboratory-8",
          "requires": []
        }
      ]
    },
    "laboratory-8": {
      "title": "A display label people can check",
      "location": "The anniversary gallery",
      "body": [
        "Omar prepares facsimiles of the unit key and batch line so visitors can reproduce the comparison. The originals remain in conservation sleeves. Lena’s draft says “documented formulation by Mina Hale; presented by Julian Marr,” with dates and archive references. A trustee prefers the grander phrase “all of Julian’s work was stolen.” There is no evidence for that broader accusation in your file. Another wants to keep the old label because certainty is more comfortable than explanation. You have enough evidence to choose a narrower and more useful conclusion."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "clues": [
        "pfl-label"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "laboratory-9",
          "requires": [
            "pfl-credit",
            "pfl-label"
          ]
        }
      ]
    },
    "laboratory-9": {
      "title": "Write the new attribution",
      "location": "The anniversary gallery",
      "body": [
        "Choose the label your laboratory route can defend. It must explain the earlier recipe and the later presentation without expanding a specific finding into a claim about every object in the museum. The strongest historical correction states its sources and limits. You can honor an overlooked worker while leaving unsupported motives and unrelated works outside this case."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "puzzle": {
        "prompt": "Which corrected attribution follows from the evidence?",
        "options": [
          {
            "id": "limited",
            "label": "Credit Mina’s documented formulation and Julian’s later presentation, with source dates.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "all",
            "label": "Declare every museum recipe stolen without further investigation.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "old",
            "label": "Keep Julian as sole inventor because the old label is familiar.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "smell",
            "label": "Open the antique bottles and decide authorship from personal preference.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "laboratory-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "laboratory-7"
        }
      ]
    },
    "laboratory-10": {
      "title": "The first name on the working page",
      "location": "The museum gallery",
      "body": [
        "The anniversary display opens with Mina’s named working trial beside Julian’s presentation copy. Visitors can compare the measure key and ordered quantities for themselves. Lena preserves the superseded catalogue label as part of the attribution history. Your laboratory route established authorship through a recipe, an independent batch, and a properly interpreted copying record. The fragrance stays sealed, but the work that made it is no longer hidden behind the date of its public introduction."
      ],
      "routeLabel": "Read the laboratory’s working papers",
      "meets": [],
      "ending": {
        "title": "Solved through the working formula",
        "kind": "solved",
        "body": [
          "A named trial, a checked batch, and a copying record restored the documented division of work. The museum now lets visitors follow the evidence instead of inheriting a single unexplained credit."
        ]
      }
    },
    "botanical-0": {
      "title": "The plant that dates a trial",
      "location": "The botanical reading room",
      "body": [
        "Jules shows the herbarium accession book for a distinctive leaf extract used in the fragrance. The first local sample arrived June 10 and was assigned reference GL-4. Its accompanying instruction says it replaces two units of ordinary leaf infusion with one unit of concentrate. A signed collection request from Mina on June 11 asks for exactly the amount needed for a trial. The date alone does not establish a completed perfume, but it gives an independently recorded ingredient event before the founder’s June 18 claim. Jules leaves the conversion instruction beside the request so you can test the quantities rather than merely admiring the signature."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [
        "jules"
      ],
      "setFlags": [
        "botanical"
      ],
      "clues": [
        "pfb-accession"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "botanical-1",
          "requires": []
        }
      ]
    },
    "botanical-1": {
      "title": "The quantity on the delivery slip",
      "location": "The glasshouse office",
      "body": [
        "The delivery slip gives Mina 5 units of GL-4. A matching laboratory request says her intended trial needs the equivalent of 10 units ordinary leaf infusion. The published presentation formula uses 5 units of the concentrate, not 5 units of the ordinary infusion. Those are equivalent only if the supplied two-to-one conversion is used. A neighboring slip for another worker requests 5 units ordinary infusion and would produce half the leaf strength. The slips therefore do more than place Mina near a plant. They can connect a specific ingredient choice and quantity to the eventual recipe."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "clues": [
        "pfb-conversion"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "botanical-2",
          "requires": [
            "pfb-accession",
            "pfb-conversion"
          ]
        }
      ]
    },
    "botanical-2": {
      "title": "Compare equivalent amounts",
      "location": "The glasshouse worktable",
      "body": [
        "Choose the statement supported by the supplied conversion rule. The names of the plant species are not needed. You are comparing the effective quantity in a trial with the later recipe’s specified concentrate, while avoiding a superficially similar order for ordinary infusion. A shared numeral does not make two differently concentrated materials the same amount."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "puzzle": {
        "prompt": "Which ingredient comparison matches the supplied conversion?",
        "options": [
          {
            "id": "equivalent",
            "label": "Mina’s 5 units of concentrate equal 10 units ordinary infusion and match the later concentrate specification.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "same",
            "label": "Five units ordinary infusion and five concentrate are identical because the numeral matches.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "double",
            "label": "Five units concentrate equal twenty ordinary units.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "none",
            "label": "The botanical records cannot be compared unless someone opens a perfume bottle.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "botanical-3"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "botanical-0"
        }
      ]
    },
    "botanical-3": {
      "title": "A remembered rehearsal, tested",
      "location": "The retired bottler’s kitchen",
      "body": [
        "Eve remembers labeling a small trial for Mina before the public presentation. You ask what can corroborate the memory. She brings a work ticket kept with her pension papers: June 13, code MH-7, “five concentrate, not ordinary leaf.” The ticket bears a payroll shift number that matches the museum’s roster. Eve is careful not to supply a dramatic conversation she cannot remember. The useful part of her account is a dated handling record tied to a specific formulation, not the vividness of the story she can tell around it."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [
        "eve"
      ],
      "clues": [
        "pfb-ticket"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "botanical-4",
          "requires": []
        }
      ]
    },
    "botanical-4": {
      "title": "A label stored with an invoice",
      "location": "The botanical supply archive",
      "body": [
        "The supplier retained an unused trial label attached to the paid ingredient invoice. It reads “Mina Hale, trial seven,” and carries the same GL-4 ingredient reference. The invoice was settled June 14, four days before Julian’s presentation, with an independent supplier stamp. This record did not originate in the museum’s later catalogue. It connects a named trial to the distinctive concentrate outside the institution now disputing the credit. You copy the invoice reference rather than asking to take the fragile label, which has become part of the evidence chain."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "clues": [
        "pfb-label"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "botanical-5",
          "requires": []
        }
      ]
    },
    "botanical-5": {
      "title": "What the presentation receipt says",
      "location": "The museum delivery desk",
      "body": [
        "The public presentation receipt, dated June 18, records Julian receiving finished samples of MH-7 for the launch. It does not say he devised them that day. Beside it is a later catalogue note that converted the receipt’s event into an invention date. Jules points out that the botanical route has independent dates on both sides of the institutional paperwork: arrival and issue of the concentrate, then the supplier’s settled invoice with a named trial. Your next deduction should use those independent records rather than treating a former worker’s memory as if it were sufficient by itself."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "clues": [
        "pfb-launch"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "botanical-6",
          "requires": [
            "pfb-label",
            "pfb-launch"
          ]
        }
      ]
    },
    "botanical-6": {
      "title": "Separate corroboration from repetition",
      "location": "The museum reading room",
      "body": [
        "Select the two observations that independently link Mina’s named trial to the distinctive recipe before the launch. Eve’s memory is supported and valuable, but a recollection repeated after publicity is weaker than the records that were already dated. The conversion establishes the ingredient link; the external named label establishes attribution. Your answer should not depend on believing that a later catalogue heading can change the meaning of an earlier receipt."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "puzzle": {
        "prompt": "Which two observations provide independent earlier links to Mina’s trial?",
        "options": [
          {
            "id": "issue",
            "label": "Her dated ingredient request and delivery fit the distinctive concentrate quantity.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "label",
            "label": "The outside supplier retained her named trial label on its June 14 invoice.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "fame",
            "label": "The founder’s presentation was attended by important guests.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "memory",
            "label": "A vivid memory alone determines the date regardless of documents.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "multiple",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "botanical-7"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "botanical-4"
        }
      ]
    },
    "botanical-7": {
      "title": "A history with more than one workplace",
      "location": "The glasshouse passage",
      "body": [
        "The concentrate issue, supplier’s named label, and work ticket converge on Mina’s trial before June 18. The presentation receipt records Julian’s later role distributing finished samples. Lena sees that a correction need not be based on a single difficult-to-read laboratory page: your route has reconstructed the case through the garden, a bottler’s records, and an outside supplier. She proposes an oral-history station beside the anniversary display, using Eve’s recorded account alongside facsimiles of the documents that support it. Visitors will be able to distinguish recollection from corroboration."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "clues": [
        "pfb-chain"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "botanical-8",
          "requires": []
        }
      ]
    },
    "botanical-8": {
      "title": "A memory placed beside its sources",
      "location": "The anniversary gallery",
      "body": [
        "Eve records a short interview describing her work rather than claiming to know every conversation in the old laboratory. Jules supplies the concentrate conversion for the display. Lena drafts a label crediting Mina’s documented trial and identifying Julian’s presentation role. The botanical route cannot prove every step in the laboratory’s creative process, but it can defeat the old claim that the recipe first existed on June 18. A sound historical resolution allows a named worker to re-enter the record without making her into an all-knowing hero in a new unsupported legend."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "clues": [
        "pfb-display"
      ],
      "choices": [
        {
          "id": "continue",
          "label": "Follow this lead",
          "to": "botanical-9",
          "requires": [
            "pfb-chain",
            "pfb-display"
          ]
        }
      ]
    },
    "botanical-9": {
      "title": "Choose the historical correction",
      "location": "The anniversary gallery",
      "body": [
        "Select the conclusion supported by your route through plants and deliveries. It should credit the documented earlier trial, preserve the limited meaning of the presentation receipt, and explain how oral history is checked. Neither a familiar founder’s name nor a compelling personal memory can replace that chain. Your ending should leave future researchers with more sources, not merely a different story to repeat."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "puzzle": {
        "prompt": "Which correction follows from the botanical route?",
        "options": [
          {
            "id": "sources",
            "label": "Credit Mina’s documented pre-launch trial, describe Julian’s presentation role, and present oral history with corroborating records.",
            "correct": true,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "launch",
            "label": "Treat receipt of finished samples as proof of sole invention.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "legend",
            "label": "Replace all documents with an unqualified heroic story about the bottler.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          },
          {
            "id": "silence",
            "label": "Leave the old label because the garden and museum filed their records separately.",
            "correct": false,
            "feedback": "Check which observations are independently established; an appealing explanation still needs every relevant fact."
          }
        ],
        "mode": "single",
        "wrongFeedback": "Your theory does not yet account for every established detail. Separate what was recorded from what someone merely assumed.",
        "correctTo": "botanical-10"
      },
      "choices": [
        {
          "id": "review",
          "label": "Review the evidence along this route",
          "to": "botanical-7"
        }
      ]
    },
    "botanical-10": {
      "title": "The garden in the archive",
      "location": "The museum gallery",
      "body": [
        "The new display pairs the formula’s ingredient history with Eve’s carefully sourced oral account. Mina’s name appears with the earlier trial, while Julian’s role is described as the presentation of finished samples. The garden receives a copy of the corrected catalogue, closing the loop between the place that supplied the distinctive ingredient and the institution that preserved its fragrance. You resolved the same attribution through a different set of workplaces and witnesses, establishing a public history people can examine rather than simply inherit."
      ],
      "routeLabel": "Follow the ingredient deliveries",
      "meets": [],
      "ending": {
        "title": "Solved through the garden deliveries",
        "kind": "solved",
        "body": [
          "The earlier recipe reappeared through a plant issue, an external invoice, and a worker’s corroborated record. The museum’s correction now connects several people’s work instead of flattening it into one later date."
        ]
      }
    }
  },
  "solutionPaths": [
    {
      "id": "laboratory-complete",
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
          "id": "laboratory"
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
          "id": "ratio"
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
            "trial",
            "batch"
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
          "id": "limited"
        }
      ]
    },
    {
      "id": "botanical-complete",
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
          "id": "botanical"
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
          "id": "equivalent"
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
            "issue",
            "label"
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
          "id": "sources"
        }
      ]
    }
  ]
};
