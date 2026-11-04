# PLOTLINE — a place for curious minds

A cozy reading room for **ten complete, playable mysteries**, with a separate **writing desk** for creating your own stories. Pick an illustrated cover, explore one scene at a time, meet people, collect clues, and make your deduction. The shelf introduces the mood and premise without giving away an ending.

Built with **HTML, CSS, and JavaScript**. No database, external libraries, API keys, or paid services are required. The stories, original SVG cover illustrations, and application assets are local files. Publish the site on GitHub Pages, Netlify, or another static host.

## Run in Visual Studio Code

1. Install [Node.js 22 or later](https://nodejs.org/) and [Visual Studio Code](https://code.visualstudio.com/).
2. Choose **File → Open Folder** and open this project folder.
3. Choose **Terminal → New Terminal** and run:

```sh
npm run dev
```

4. Open `http://localhost:5173` in your browser. The story shelf is the homepage; **Your writing desk** opens the editor. Press `Ctrl+C` in the terminal to stop the server.

You can also press **F5** in VS Code and select **Start PLOTLINE** to start the included Node.js debug configuration and open the site automatically. Node.js must be installed and port 5173 must be free; stop an existing terminal server first. Press **Ctrl+Shift+B** to build the site with the included build task.

There are no npm dependencies to install. Use the local HTTP server instead of double-clicking `index.html`, because browser JavaScript modules require HTTP.

If port 5173 is already in use:

```sh
npm run dev -- --port 5174
```

## Ten mysteries, no spoilers

Each story has a complete investigation and an ending to discover through play. Murder mysteries are non-graphic and identified in their preview. The cover descriptions, previews, and this guide do not reveal solutions.

| Story | A first glimpse |
| --- | --- |
| **The Midnight Library** | A rare book disappears during a storm, while a light still burns upstairs in the closed library. |
| **The Last Train to Bellweather** | Snow closes the railway after a passenger is found dead. Three accounts of the evening refuse to agree. |
| **The Glasshouse Hour** | Your invitation brings you to a winter garden, but the host is missing and the opening is drawing near. |
| **The Quiet Harbor** | An empty boat returns at low tide with an unfamiliar name painted on its bow. |
| **The Violet Envelope** | A sealed letter arrives forty years late, addressed to a house that no longer exists. |
| **The Snowbound Guest** | An unexpected death leaves a mountain inn full of questions and one particularly convincing alibi. |
| **The Clockmaker’s Parcel** | The lantern festival is approaching, but an essential piece of the town clock has vanished. |
| **The Orchard House Letters** | An inherited house contains unfinished letters, including a request nobody in the family remembers. |
| **Behind the Velvet Curtain** | An opening night ends early. Backstage, the running order and the evening’s events do not add up. |
| **A Voice on the Night Frequency** | At 11:07 each evening, a closed coastal station broadcasts the same unexplained message. |

## Play at your own pace

- Browse by mood, search the shelf, or return through **My bookmarks**. A cover preview explains the premise, setting, approximate reading time, and difficulty.
- Choose **Begin the story** and follow the available leads. You can revisit places to compare what you have learned.
- **The notebook** lists characters only after you meet them, and clues only after you discover them. Future characters, evidence, and outcomes stay out of the visible notebook.
- Some leads require earlier discoveries. Explore the available scenes to unlock them; there is no timer.
- When a deduction becomes available, choose an explanation supported by your evidence. A wrong guess gives feedback and lets you try again; it does not end the story or reveal the correct option.
- Add private observations under **Your own hunches**. Use **Text size** to switch between three reading sizes. On a smaller screen, **Notebook** takes you to your notes.
- Solved stories remain on your shelf with a solved mark and **Revisit story**. Use **Restart** if you want to begin again.

Each story has its **own automatic bookmark and notes**, saved in the current browser on this device. Closing and reopening a story resumes that bookmark. Restarting asks for confirmation and clears only that story’s progress and notes; other cases and your writing project stay in place. Clearing browser site data can remove local saves.

**Share story** creates a spoiler-free link to that story without including your progress, discovered evidence, or notes. A new reader starts at the opening; someone with an existing bookmark resumes their own place. Your later choices do not change anyone else’s playthrough. Share a link from the published HTTPS site so other people can open it.

## Write a story of your own

Choose **Your writing desk** to open `studio.html`. The editor remains separate from the ready-to-play collection and retains its characters, locations, events, facts, branches, and **who knows what, when** tracker.

- **Characters** are the people in your story; **locations** are where events happen.
- **Facts & secrets** represent specific information. Choose which characters know each fact before the first event.
- **Events** list participants and can require existing knowledge or teach characters new facts.
- Required knowledge is checked **before** discoveries in the same event. To have someone discover a secret and then use it, create two events in that order.
- A **branch** inherits its parent’s events through the selected fork event, including that event. Later discoveries on a different path do not carry over. In the data model, a child with no fork event inherits its parent’s entire sequence.
- Select a moment and character in **Who knows what** to inspect their knowledge. **Story check** explains any use of a fact before its discovery.

Checks use the facts and relationships you enter explicitly. The editor does not infer the meaning of free-form prose or call an AI service. Starting your own project does not alter the ten mysteries on the reading shelf.

### Save and share your writing

The writing desk keeps **one active project** in browser local storage, separate from the reader’s per-story bookmarks and notes. Changes save automatically on this browser and device. Use **Export** to keep JSON backups. Importing a JSON file or starting another writing project replaces the active writing project after confirmation.

The writing desk’s **Share** button creates a snapshot link containing the project in the URL fragment after `#`. Recipients can open and edit their own snapshot. A shared snapshot does not overwrite their active local writing project or automatically save their edits. **Save a copy** makes it their active project and enables automatic saving, replacing the previous local project after confirmation. Export the previous project first if both should be kept.

Writing links are independent snapshots: later edits do not update a previously sent link. There is no simultaneous collaboration or account sync. The editor recommends JSON export for links longer than 32,000 characters; the snapshot encoder also has a 100 KB limit. JSON import supports files up to 10 MB. Browser and messaging-service URL limits vary.

Older writing links that open `index.html#story=…` are automatically redirected to the writing desk with their snapshot preserved.

## A 60-second competition demonstration

1. Open the homepage and show the ten illustrated covers, readable layout, mood filters, and spoiler-free introductions.
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
- **test** currently runs 38 automated tests: 18 for the writing engine and 20 for the progressive mystery engine and collection. Results and totals are printed for each suite.
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
src/stories*.js             The ten playable mysteries
src/app.js                  Writing desk interface
src/engine.js               Writer’s branch and knowledge analysis
src/styles.css              Writing desk styles
public/covers/              Ten original, local SVG cover illustrations
tests/                      Writing and mystery-engine tests
scripts/serve.mjs            Local development HTTP server
scripts/build.mjs            Dependency-free static build
.github/workflows/pages.yml  GitHub Pages deployment
```

The local HTTP server is for development. Publish the built static site through an HTTPS hosting service.
