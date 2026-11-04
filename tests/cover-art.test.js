import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { stories } from '../src/stories.js';
import { coverArt, coverIds, coverMarkup } from '../src/cover-art.js';
import { validateCoverSource } from '../scripts/generate-cover-art.mjs';

test('all forty story illustrations are bundled from their unchanged editable SVG sources', async () => {
  assert.equal(coverIds.length,40);
  assert.deepEqual([...coverIds].sort(),stories.map(story=>story.id).sort());
  assert.ok(Object.isFrozen(coverArt));
  for (const id of coverIds) {
    const source = await readFile(new URL(`../public/covers/${id}.svg`,import.meta.url),'utf8');
    assert.equal(coverArt[id],source,`${id}: generated artwork must match its source.`);
    assert.equal(validateCoverSource(source,id),true);
  }
});

test('cover instances have distinct title, gradient and filter IDs with self-contained references', () => {
  const pageIds = new Set();
  for (const id of coverIds) {
    for (const occurrence of ['card','preview','reader']) {
      const instance = `${occurrence}-${id}`;
      const markup = coverMarkup(id,instance);
      assert.match(markup,/^<svg class="cover-illustration"/);
      assert.match(markup,/preserveAspectRatio="xMidYMid slice"/);
      assert.match(markup,/role="img"/);
      const declared = new Set([...markup.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]));
      assert.ok(declared.size>=1);
      for (const value of declared) {
        assert.ok(value.startsWith(`cover-${instance}-`));
        assert.equal(pageIds.has(value),false,`Repeated fragment ID: ${value}`);
        pageIds.add(value);
      }
      const references = [...markup.matchAll(/url\(#([^)]+)\)/g)].map(match=>match[1]);
      references.push(...[...markup.matchAll(/\b(?:href|xlink:href)=["']#([^"']+)["']/g)].map(match=>match[1]));
      for (const match of markup.matchAll(/aria-labelledby="([^"]+)"/g)) references.push(...match[1].split(/\s+/));
      for (const reference of references) assert.ok(declared.has(reference),`Missing fragment ${reference}`);
      assert.doesNotMatch(markup,/<img\b|\b(?:href|src)=["']https?:|url\(["']?https?:/i);
    }
  }
  assert.notEqual(coverMarkup('midnight-library','hero-front'),coverMarkup('midnight-library','card-midnight-library'));
});

test('rendering a cover rejects unknown assets and unsafe instance attributes', () => {
  assert.throws(()=>coverMarkup('missing-story','card-missing'),/Unknown/);
  assert.throws(()=>coverMarkup('__proto__','card-prototype'),/Unknown/);
  for (const instance of ['', 'space in name', '"><script>', '../path', 'a'.repeat(121)]) {
    assert.throws(()=>coverMarkup('midnight-library',instance),/instance/);
  }
});

const fixture = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 760" role="img" aria-labelledby="title"><title id="title">A test illustration</title><defs><linearGradient id="paint"><stop stop-color="#abc"/></linearGradient></defs><g id="shape"><rect width="600" height="760" fill="url(#paint)"/></g><use href="#shape"/></svg>';

test('the bundler permits local static SVG references and rejects executable or externally loaded content', () => {
  assert.equal(validateCoverSource(fixture),true);
  for (const altered of [
    fixture.replace('</svg>','<script>alert(1)</script></svg>'),
    fixture.replace('<svg ','<svg onload="alert(1)" '),
    fixture.replace('</svg>','<foreignObject><div>HTML</div></foreignObject></svg>'),
    fixture.replace('href="#shape"','href="https://example.com/picture.svg"'),
    fixture.replace('url(#paint)','url(https://example.com/paint.svg)'),
    fixture.replace('fill="url(#paint)"','style="fill:url(https://example.com/paint.svg)"'),
    fixture.replace('url(#paint)','u&#114;l(https://example.com/paint.svg)'),
    fixture.replace('url(#paint)','u\\72l(https://example.com/paint.svg)'),
    fixture.replace('href="#shape"','href="data:image/svg+xml,content"'),
    fixture.replace('href="#shape"','href="#missing"'),
    fixture.replace('id="shape"','id="paint"'),
    fixture.replace('</svg>','<animate attributeName="href" values="javascript:alert(1)"/></svg>'),
    '<!DOCTYPE svg [<!ENTITY x "text">]>'+fixture,
  ]) assert.throws(()=>validateCoverSource(altered),Error);
});
