# PLOTLINE — a place for curious minds

A cozy reading room for **40 complete, branching mysteries**, with a separate **writing desk** for creating your own stories. Pick an illustrated cover, meet people gradually, collect evidence, and work through several deductions. Your actions lead through different locations, evidence, and earned endings. The warm, readable design stays familiar, and the shelf keeps each solution inside its story.

Built with **HTML, CSS, and JavaScript**. No database, external libraries, API keys, or paid services are required. The stories, original SVG cover illustrations, and application assets are local files. Publish the site on GitHub Pages, Netlify, or another static host.

## Download the project or publish the website

- **For VS Code:** open [PLOTLINE-source.zip on GitHub](https://github.com/wdiefastw/-/blob/main/downloads/PLOTLINE-source.zip), then click **Download raw file** (the download-arrow button). This is the complete editable project, packaged inside one folder named **PLOTLINE**.
- **For publishing without editing:** [download PLOTLINE-website.zip](https://github.com/wdiefastw/-/raw/refs/heads/main/downloads/PLOTLINE-website.zip). It contains the built website, all 40 cases and covers, and the writing desk.

To publish immediately, extract the website ZIP and drag the extracted folder containing `index.html` into [Netlify Drop](https://app.netlify.com/drop). Netlify supplies the live URL after upload. You can also use GitHub Pages as described below. No secret key or database is needed.

The website ZIP is a prepared snapshot. After editing source files, run `npm run build` and publish the new `dist/` folder. The source ZIP excludes generated ZIP archives so it does not contain nested downloads; all editable site files and build tools are included.

## Open the right folder in Visual Studio Code

1. Install [Node.js 22 or later](https://nodejs.org/) and [Visual Studio Code](https://code.visualstudio.com/). If VS Code was already open when you installed Node.js, close and reopen it.
2. Download **PLOTLINE-source.zip** using **Download raw file** on the GitHub file page above.
3. In Windows File Explorer, right-click the ZIP and choose **Extract All**. Work in the extracted files, not inside the ZIP.
4. Open the extracted location and find the inner **PLOTLINE** folder. Windows may place it inside another folder named `PLOTLINE-source`.
5. In VS Code, choose **File → Open Folder** and select **PLOTLINE**. The VS Code Explorer must show **`package.json`**, `index.html`, `studio.html`, and `src` together at the top level.
6. Choose **Terminal → New Terminal**. To check that the terminal is in the project folder, run:

```powershell
dir package.json
```

7. Once that command lists `package.json`, start the website:

```sh
npm run dev
```

8. Open `http://localhost:5173` in your browser. The story shelf is the homepage; **Your writing desk** opens the editor. Keep the terminal running while using the local site. Press **Ctrl+C** to stop it.

There are no npm dependencies to install. Use the local HTTP server instead of double-clicking `index.html`, because browser JavaScript modules require HTTP.

### If you see `ENOENT` or “Could not read package.json”

The terminal is open in a folder that does not contain the project. For example, `Downloads` or an outer `--main` archive folder may contain **PLOTLINE** rather than its files. Choose **File → Open Folder** again, open the folder that actually contains **`package.json`**, and create a new terminal. Check with `dir package.json`, then run `npm run dev`. Creating a new `package.json` is not the fix; use the one included in the project.

You can also press **F5** in VS Code and select **Start PLOTLINE** to launch the included debug configuration and open the site. Node.js must be installed and port 5173 must be free; stop an existing terminal server first. Press **Ctrl+Shift+B** to build the site with the included build task.

If port 5173 is already in use:

```sh
npm run dev -- --port 5174
```

Then open `http://localhost:5174`.

## 40 mysteries, no spoilers

Every case has at least two investigation routes. Committing to an approach changes the places you visit, the evidence you use, and the conclusion you earn. Routes establish a consistent underlying mystery through different methods; they do not merely rename the final scene. Murder mysteries are non-graphic and identified in their previews.

Use **Time to unwind** on the shelf to filter by **10–20 min**, **20–30 min**, **40–60 min**, or **60+ min**. These are estimated first-play lengths for **one completed route**, including reading and reasoning. They are not measured completion promises or enforced timers. Reading speed, time spent comparing evidence, and retries can change your play time; another route adds more to explore.

<!-- CASE-CATALOG-START -->
| Story | Estimated first play | A first glimpse |
| --- | --- | --- |
| **A Receipt for Winter** | 10–20 min | A volunteer’s signature appears on a delivery she says never arrived. Follow a trail of winter parcels through the accounts office or the snowbound delivery yards. |
| **A Voice on the Night Frequency** | 60+ min | Every evening at 11:07, a closed coastal station speaks again. A volunteer broadcaster asks you to follow the signal through old recordings, shoreline secrets, and a decision that could change the town. |
| **Behind the Velvet Curtain** | 40–60 min | An opening night ends before the final bow. Choose the theater’s hidden machinery or its guarded human stories, then build an account that survives more than applause. |
| **Seven Postcards** | 10–20 min | Seven postcards arrive together from a friend nobody has seen for days. Their pictures belong to different seasons, their postmarks form a different order, and one ordinary sentence seems to be a set of directions. |
| **The Amber Hotel** | 10–20 min | A borrowed brooch disappears during a wet evening at an old hotel. The clocks disagree, a key has the wrong meaning, and somebody is already writing a headline. |
| **The Bell Beneath the Rain** | 10–20 min | The empty chapel rings after every storm, though its bell rope is tied. Follow a hidden mechanism below the hill or an old public footpath through the village’s disputed history. |
| **The Blue Umbrella Witness** | 10–20 min | A witness remembers a blue umbrella outside a museum after a death. Choose whether to test the street’s strange reflections or follow the witness’s interrupted evening. |
| **The Borrowed Name** | 10–20 min | A celebrated artist signs a picture after the date of her death. Follow a paper trail across town or earn the confidence of the family guarding her last address. |
| **The Botanical Express** | 10–20 min | A living exhibit disappears between mountain stations. Stay aboard to follow the freight chain, or step off and trace the shaded service route before the next transfer. |
| **The Butterfly Cabinet** | 10–20 min | The cabinet is still sealed, but its famous blue butterfly no longer looks blue. Follow the conservator through light and glass, or trace a naturalist’s journey beyond the museum walls. |
| **The Cinder Path** | 10–20 min | At dawn, dark footprints cross a locked pottery yard and vanish at a bricked arch. Follow an old map or a forgotten delivery round to discover what the village has paved over. |
| **The Clockmaker’s Parcel** | 10–20 min | The festival clock has stopped. Two parcels have crossed a crowded town, and the way you follow them will decide who is willing to help you set things right. |
| **The Copper Kettle Affair** | 10–20 min | The charity supper is over, but one sealed collection has not reached the bank. A copper kettle full of numbered tokens and a very tidy receipt suggest two different stories about the missing money. |
| **The Counterfeit Spring** | 10–20 min | A celebrated spring runs clear through the driest week of the year. Follow the hidden water line or the restoration payments to test the promise behind the opening ceremony. |
| **The Glasshouse Hour** | 10–20 min | Your host is missing from a winter opening. A note, an altered plan, and a response behind the glass lead toward two very different ways of understanding the morning. |
| **The Hollow Portrait** | 10–20 min | A gallery opening ends behind a locked service door. Investigate the installation’s hidden spaces or follow the people and papers moving around the exhibition. |
| **The Lantern Beyond the Marsh** | 10–20 min | A lantern shines in a hut that should be empty, and a reserve guide has not returned. Follow the water markers or recover the old walking route before the tide turns. |
| **The Lanterns of Ash Bridge** | 10–20 min | The bridge lanterns have been lit in the wrong order, its keeper has not returned, and a closure notice is sending festival visitors the long way round. Choose which side of the river to trust. |
| **The Last Supper Club** | 10–20 min | Forty places are laid for a farewell benefit, but the report claims fifty-six paid guests. Follow the kitchen’s quantities or the journeys of the extra names before the account leaves the hall. |
| **The Last Train to Bellweather** | 60+ min | The last train has gone. A passenger is dead, the clocks disagree, and the snow is closing every way out. Choose which trail to follow before the morning inquiry begins. |
| **The Lighthouse Ledger** | 10–20 min | A harbor auditor is dead, a ship’s arrival has been entered twice, and the lighthouse sent a signal nobody will claim. Follow the light along the coast or trace the numbers inland. |
| **The Mapmaker’s Attic** | 10–20 min | A folded map in an inherited attic places an orchard on the wrong side of a boundary. Before the surveyors arrive, choose whether to follow the land or the hands that printed it. |
| **The Midnight Ferry** | 10–20 min | Eight passengers step ashore, but the gate records nine—and a ticket carries tomorrow’s date. Follow the night crew across the decks or trace the strange name through the waterfront records. |
| **The Midnight Library** | 10–20 min | A rare atlas vanishes during a storm. The display is closed, someone has changed the room labels, and the trail divides between the library’s rafters and the town’s old records. |
| **The Missing Seventh Reel** | 10–20 min | An old cinema is about to reopen, but the restored film has a gap nobody can explain. Choose whether to follow the physical print or the people who remember its first screening. |
| **The Observatory’s Missing Minute** | 10–20 min | An observatory’s public signal seems to arrive before it is sent. Follow the electrical route through the hill or reconstruct the records in the transit room. |
| **The Orchard House Letters** | 20–30 min | An inherited house comes with unfinished letters and a promise nobody can quite explain. Follow its paper trail or its living garden, and decide what should pass to the next generation. |
| **The Paper Moon Account** | 10–20 min | The morning after a fundraiser, the bank envelope is lighter than everyone remembers. Two very different paper trails begin beside an overturned cup. |
| **The Perfume Archive** | 10–20 min | A handwritten formula has two dates and no credited author. Follow the laboratory papers or the garden deliveries to discover whose work the museum has been preserving. |
| **The Platform That Wasn’t There** | 10–20 min | Passengers keep arriving with tickets for a platform erased from the map. Follow the dispatch records or walk the old railway before the evening service disappears again. |
| **The Quiet Harbor** | 20–30 min | An empty boat comes home under an unfamiliar name. Choose the tide-marked shore or the village’s paper trail, and uncover what the harbor has failed to notice. |
| **The Room of Missing Faces** | 10–20 min | The museum’s new mosaic changes overnight: five faces are missing, and a mirrored sketch points beyond the gallery. Follow the repair work or the last tram carrying a sealed crate. |
| **The Saffron Seal** | 10–20 min | A prized spice shipment carries the right name and the wrong contents. Follow the weighed consignments or the maker’s marks to discover where the promise changed. |
| **The Scarlet Orchard** | 10–20 min | The orchard’s owner is found dead before the first buyer arrives. Walk the irrigation paths or follow the sale’s disputed provenance records; both routes lead beyond a very tidy account of the morning. |
| **The Sealed Verdict** | 10–20 min | A sealed court packet seems to contradict a family’s account of an old bridge disaster. Follow the official record or the town’s changing memory before the museum prints its final caption. |
| **The Silent Violin** | 10–20 min | An empty violin case and an unsigned instruction interrupt the final rehearsal. Follow a trail through the repair rooms or through the instrument’s disputed history. |
| **The Snowbound Guest** | 40–60 min | A death during a mountain storm. A seemingly perfect musical alibi. Decide whether to build a documented case through the locked service rooms or protect a frightened witness while unraveling the household’s competing accounts. |
| **The Violet Envelope** | 20–30 min | An unopened letter surfaces after forty years. Two ways through a changed town may lead you to its family, but every confident memory needs something to test it against. |
| **The Weather That Went Missing** | 10–20 min | Rain falls across town, but its weather board insists on a clear day. Audit the instruments or follow the river to discover where the missing day went. |
| **Three Black Keys** | 10–20 min | A manager is dead behind a self-closing door, and three identical black keys have been returned. Trace the locks or challenge an apparently musical alibi. |
<!-- CASE-CATALOG-END -->

## Play at your own pace

- Browse by mood or estimated length, search the shelf, or return through **My bookmarks**. A cover preview explains the premise, setting, estimated first-play length, and difficulty.
- Choose **Begin the story** and follow the available leads. An investigation choice can commit you to a route with its own locations, people, and evidence. Restart to explore the alternative route.
- **The notebook** lists characters only after you meet them, and clues only after you discover them. Future characters, evidence, and outcomes stay out of the visible notebook.
- Some leads require earlier discoveries. Explore the available scenes to unlock them; there is no timer.
- Deductions build on earlier discoveries. Compare testimony, chronology, documents, maps, or other supplied evidence. Some questions ask for one explanation; others require selecting the complete set of supporting observations. A wrong answer gives feedback and lets you reconsider without revealing the correct choice.
- Add private observations under **Your own hunches**. Use **Text size** to switch between three reading sizes. On a smaller screen, **Notebook** takes you to your notes.
- Solved stories remain on your shelf with a solved mark and **Revisit story**. Use **Restart** if you want to begin again.

Each story has its **own automatic bookmark and notes**, saved in the current browser on this device. Closing and reopening a story resumes that bookmark. Restarting asks for confirmation and clears only that story’s progress and notes; other cases and your writing project stay in place. Clearing browser site data can remove local saves.

If an expanded case has a new revision, it starts at its new opening. The app first archives the previous bookmark in this browser and **retains your personal notes**. The archived bookmark is a backup of the older version, not a playable bookmark for the expanded case. If the browser cannot save that backup, the existing bookmark is preserved and the new playthrough remains in the current tab.

**Share story** creates a spoiler-free link to that story without including your progress, discovered evidence, or notes. A new reader starts at the opening; someone with an existing bookmark resumes their own place. Your later choices do not change anyone else’s playthrough. Share a link from the published HTTPS site so other people can open it.

## Write a story of your own

Choose **Your writing desk** to open `studio.html`. The editor remains separate from the ready-to-play collection and retains its characters, locations, events, facts, branches, and **who knows what, when** tracker.

- **Characters** are the people in your story; **locations** are where events happen.
- **Facts & secrets** represent specific information. Choose which characters know each fact before the first event.
- **Events** list participants and can require existing knowledge or teach characters new facts.
- Required knowledge is checked **before** discoveries in the same event. To have someone discover a secret and then use it, create two events in that order.
- A **branch** inherits its parent’s events through the selected fork event, including that event. Later discoveries on a different path do not carry over. In the data model, a child with no fork event inherits its parent’s entire sequence.
- Select a moment and character in **Who knows what** to inspect their knowledge. **Story check** explains any use of a fact before its discovery.

Checks use the facts and relationships you enter explicitly. The editor does not infer the meaning of free-form prose or call an AI service. Starting your own project does not alter the 40 mysteries on the reading shelf. The existing writing desk, story data, and knowledge-tracking workflow remain separate from the expanded reader.

### Save and share your writing

The writing desk keeps **one active project** in browser local storage, separate from the reader’s per-story bookmarks and notes. Changes save automatically on this browser and device. Use **Export** to keep JSON backups. Importing a JSON file or starting another writing project replaces the active writing project after confirmation.

The writing desk’s **Share** button creates a snapshot link containing the project in the URL fragment after `#`. Recipients can open and edit their own snapshot. A shared snapshot does not overwrite their active local writing project or automatically save their edits. **Save a copy** makes it their active project and enables automatic saving, replacing the previous local project after confirmation. Export the previous project first if both should be kept.

Writing links are independent snapshots: later edits do not update a previously sent link. There is no simultaneous collaboration or account sync. The editor recommends JSON export for links longer than 32,000 characters; the snapshot encoder also has a 100 KB limit. JSON import supports files up to 10 MB. Browser and messaging-service URL limits vary.

Older writing links that open `index.html#story=…` are automatically redirected to the writing desk with their snapshot preserved.

## A 60-second competition demonstration

1. Open the homepage and show the 40 illustrated covers, readable layout, mood filters, and spoiler-free introductions.
2. Begin a case. Read the opening, choose an available lead, and show a character or clue appearing in the notebook as it is discovered. Keep the later scenes and ending unrevealed.
3. Add a hunch, return to the shelf, and reopen the case to demonstrate the saved bookmark. **Share story** shows a link that contains no personal progress or notes.
4. Open **Your writing desk** to show the create-your-own option, including its character editor, branching timeline, and knowledge tracker.

The reading collection and writing desk are two distinct workflows: readers solve the included cases; authors build and check their own story projects.

## Check and build

```sh
npm run check
npm test
npm run build
```

- **check** checks JavaScript syntax across the application, supporting scripts, and tests.
- **test** runs the writing-engine, mystery-engine, and case-quality suites. They check knowledge and branch logic, legal choices, exact multi-evidence answers, progressive discovery, bookmark replay, and complete authored routes. The quality suite checks all 40 cases for route length, several deductions, substantial scene differences, distinct locations, different earned endings, complete scene coverage, and local cover assets. Minimum reading-content checks support the length bands; they do not measure real users’ completion times. Results are printed for each suite.
- **build** copies `index.html`, `studio.html`, `src/`, and `public/` into `dist/`, ready to upload. Run it again after changing source files.

## Publish with GitHub Pages

The included `.github/workflows/pages.yml` checks syntax, runs tests, builds the site, and deploys it when code is pushed to `main`.

1. Upload the project source to [`wdiefastw/-`](https://github.com/wdiefastw/-) on the `main` branch. If the repository is empty, create its first commit and a `main` branch using VS Code Source Control or Git.
2. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Open **Actions → Publish PLOTLINE to GitHub Pages** and wait for a successful run. If Pages was configured after the last push, use **Run workflow** on `main`.
4. Copy the published URL from **Settings → Pages** or the deployment result. This repository’s expected address is `https://wdiefastw.github.io/-/`; it will work only after a successful deployment.
5. Open the published site in another browser. Verify that a cover opens a playable case, the notebook updates, the writing desk opens, and both kinds of sharing links work.

For the competition submission, provide **both the live website URL and the source repository URL**. The code and workflow are prepared here; publication still requires uploading the code and enabling Pages.

Alternatively, run `npm run build` and drag the complete **`dist/` folder** into [Netlify Drop](https://app.netlify.com/drop). Include the whole site, including `studio.html`, `src/`, and `public/`; the hosting service provides the public URL after upload.

## Project structure

```text
index.html                  Story library and progressive mystery reader
studio.html                 Create-your-own writing desk
src/library.js              Shelf, reader, notebook, and local bookmarks
src/library.css             Cozy library and reading layouts
src/play-engine.js          Progressive discovery, choices, and deductions
src/stories.js              Registry of the 40 playable mysteries
src/cases/                  Authored branching investigations and hidden test routes
src/app.js                  Writing desk interface
src/engine.js               Writer’s branch and knowledge analysis
src/styles.css              Writing desk styles
public/covers/              40 original, local SVG cover illustrations
tests/                      Writing, mystery-engine, and case-quality suites
scripts/serve.mjs            Local development HTTP server
scripts/build.mjs            Dependency-free static build
downloads/                  Source and ready-to-publish ZIP downloads
.github/workflows/pages.yml  GitHub Pages deployment
```

The local HTTP server is for development. Publish the built static site through an HTTPS hosting service.
