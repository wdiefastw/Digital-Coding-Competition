import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { stories } from '../src/stories.js';

const wordCount = text => (text || '').match(/[A-Za-z0-9]+(?:[’'-][A-Za-z0-9]+)*/g)?.length || 0;
const band = story => story.duration.startsWith('60+') ? 'epic' : story.duration.startsWith('40') ? 'long' : story.duration.startsWith('20') ? 'medium' : 'short';
const minimums = {
  short:{ words:1300, scenes:14, puzzles:3 },
  medium:{ words:2700, scenes:24, puzzles:5 },
  long:{ words:4800, scenes:32, puzzles:7 },
  epic:{ words:6500, scenes:42, puzzles:10 },
};

// The engine suite checks the legality of each authored proof. Here we inspect
// its actual reading, locations and deductions so a duration cannot be changed
// without adding the corresponding investigation.
function routeContent(story, proof) {
  let nodeId = story.start;
  const visited = new Set(), locations = new Set();
  let words = 0, puzzles = 0;
  function inspect() {
    if (visited.has(nodeId)) return;
    visited.add(nodeId);
    const node = story.nodes[nodeId];
    assert.ok(node, `Missing scene ${nodeId}`);
    locations.add(node.location);
    words += node.body.reduce((sum,p) => sum + wordCount(p),0);
    words += (node.clues || []).reduce((sum,id) => sum + wordCount(story.clues.find(clue=>clue.id===id)?.description),0);
    words += (node.ending?.body || []).reduce((sum,p) => sum + wordCount(p),0);
    if (node.puzzle) {
      puzzles++;
      words += wordCount(node.puzzle.prompt) + node.puzzle.options.reduce((sum,option)=>sum+wordCount(option.label),0);
    }
  }
  inspect();
  for (const action of proof.actions) {
    const node = story.nodes[nodeId];
    nodeId = action.type==='choice' ? node.choices.find(choice=>choice.id===action.id)?.to : node.puzzle?.correctTo;
    inspect();
  }
  return { visited, locations, words, puzzles, ending:nodeId };
}

test('the collection provides all four requested first-play length bands', () => {
  assert.equal(stories.length,40);
  assert.deepEqual(new Set(stories.map(band)),new Set(['short','medium','long','epic']));
  assert.ok(stories.every(story=>story.revision===2));
});

for (const story of stories) {
  test(`case depth and cover: ${story.title}`, async () => {
    const routes = story.solutionPaths.map(proof=>routeContent(story,proof));
    assert.ok(routes.length>=2);
    assert.ok(new Set(routes.map(route=>route.ending)).size>=2);
    for (const route of routes) {
      const minimum = minimums[band(story)];
      assert.ok(route.words>=minimum.words,`${story.duration} route contains ${route.words} reading words; requires ${minimum.words}.`);
      assert.ok(route.visited.size>=minimum.scenes);
      assert.ok(route.puzzles>=minimum.puzzles);
      assert.ok(route.locations.size>=4);
    }
    const [first,second] = routes;
    const sharedScenes = [...first.visited].filter(id=>second.visited.has(id)).length;
    assert.ok(1-sharedScenes/Math.max(first.visited.size,second.visited.size)>=0.4,'Routes must differ substantially, beyond their ending labels.');
    assert.ok([...first.locations].filter(location=>!second.locations.has(location)).length>=2,'The first route needs its own locations.');
    assert.ok([...second.locations].filter(location=>!first.locations.has(location)).length>=2,'The second route needs its own locations.');
    const covered = new Set(routes.flatMap(route=>[...route.visited]));
    assert.equal(covered.size,Object.keys(story.nodes).length,'Every authored scene must belong to an audited route.');
    const svg = await readFile(new URL(`../public/covers/${story.id}.svg`,import.meta.url),'utf8');
    assert.match(svg,/<svg\b/);
    assert.match(svg,/viewBox="0 0 600 760"/);
    assert.doesNotMatch(svg,/(?:href|src)=["']https?:/,'Covers must work without an external image service.');
  });
}
