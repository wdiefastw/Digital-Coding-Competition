import { stories, findStory } from './stories.js';
import { createPlayState, choose, answer, getVisibleScene, getJournal, validateState } from './play-engine.js';

const $ = (selector, root = document) => root.querySelector(selector);
const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const art = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${({
  arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  book:'<path d="M12 5v15M3 4c3-1 6-1 9 1 3-2 6-2 9-1v15c-3-1-6-1-9 1-3-2-6-2-9-1z"/>',
  search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  pen:'<path d="m16 3 5 5L9 20H4v-5zM13 6l5 5"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
  clue:'<circle cx="9" cy="9" r="6"/><path d="m14 14 7 7M6 9h6M9 6v6"/>',
  people:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3m2-14a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 5"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  close:'<path d="m6 6 12 12M6 18 18 6"/>',
  bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
  share:'<path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/>',
  leaf:'<path d="M20 3C9 2 3 7 5 15c7 5 15-1 15-12ZM4 21 15 10"/>',
})[name] || ''}</svg>`;
const app = $('#library-app');
const modal = $('#library-modal');
const key = id => `plotline.play.v1.${id}`;
let filter = 'all', search = '', activeStory = null, state = null, journalTab = 'clues', feedback = '', toastTimer;
let storageWorks = true;
let textSize = 0;
try { textSize = Math.min(2, Math.max(0, Number(localStorage.getItem('plotline.textSize')) || 0)); } catch { storageWorks = false; }
const category = story => story.genre.toLowerCase().includes('murder') ? 'murder' : story.genre.toLowerCase().includes('cozy') ? 'cozy' : 'uncanny';
function notify(message) {
  $('#notice').textContent = message; $('#notice').className = 'visible';
  clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#notice').className = '', 5000);
}
function readSave(story) {
  try {
    const saved = JSON.parse(localStorage.getItem(key(story.id)) || 'null');
    if (saved && validateState(story, saved.state)) return saved;
  } catch { /* A missing or invalid bookmark must never stop someone reading. */ }
  return null;
}
function save() {
  try { localStorage.setItem(key(activeStory.id), JSON.stringify({ state, updatedAt:Date.now() })); storageWorks = true; }
  catch { storageWorks = false; notify('Your browser could not save this bookmark. Keep this tab open to continue.'); }
}
function notesFor(id) {
  try { return localStorage.getItem(`plotline.notes.${id}`) || ''; } catch { return ''; }
}
function header(reader = false) {
  return `<header class="site-header"><a class="wordmark" href="./" aria-label="PLOTLINE home"><span class="wordmark-icon">${art('book')}</span><span>plotline<small>A PLACE FOR CURIOUS MINDS</small></span></a><nav aria-label="Main navigation"><a href="./" class="${reader?'':'current'}">The story shelf</a><a href="./studio.html">${art('pen')} Your writing desk</a></nav><button class="header-help" data-action="how-to">How it works <span>?</span></button></header>`;
}
function footer() {
  return `<footer class="site-footer"><a class="footer-brand" href="./">plotline<span>One more page. One more possibility.</span></a><p>A story to solve. A story to tell.<br>Make yourself at home.</p><span class="footer-flower" aria-hidden="true">✳&#xfe0e;</span></footer>`;
}
function renderLibrary() {
  activeStory = null; state = null;
  document.title = 'PLOTLINE — a little mystery awaits';
  const saves = stories.map(story=>({story,save:readSave(story)})).filter(x=>x.save && !x.save.state.solved).sort((a,b)=>b.save.updatedAt-a.save.updatedAt);
  app.innerHTML = `${header()}<main id="main" class="library-main" tabindex="-1"><section class="library-hero"><div class="hero-copy"><p class="overline"><span class="small-sun">✳&#xfe0e;</span> FOR THE JUST-ONE-MORE-CHAPTER KIND OF PERSON</p><h1>A little mystery.<br>A whole other <em>world.</em></h1><p class="hero-description">Come in, get comfortable, and follow your curiosity. Ten stories to step into. New faces to meet. Secrets to uncover, one clue at a time.</p><a class="primary-button" href="#shelf">Find your next story ${art('arrow')}</a><span class="hero-footnote">No spoilers. No rush. Just a good story.</span></div><div class="hero-art" aria-label="Illustrated mystery books in a cozy reading corner"><div class="art-window"><i></i><i></i><i></i><i></i><span class="window-moon"></span></div><div class="art-book back-book"><img src="./public/covers/snowbound-inn.svg" alt="Snow falling around an illuminated inn"/><span>A WINTER MYSTERY</span></div><div class="art-book front-book"><img src="./public/covers/midnight-library.svg" alt="A softly lit library beneath the moon"/><span>JUST ONE MORE CHAPTER</span></div><div class="art-mug"><span></span><i></i></div><div class="art-note">a small escape,<br><em>all yours.</em><span>↙</span></div><div class="art-shelf"></div><span class="art-star star-one">✧</span><span class="art-star star-two">✦</span></div></section>
  <section class="welcome-strip" aria-label="How stories work"><span>${art('book')} Step inside a story</span><i>·</i><span>${art('people')} Meet people as you go</span><i>·</i><span>${art('clue')} Put the pieces together</span><span class="strip-note">THE ENDING? THAT’S YOURS TO DISCOVER.</span></section>
  ${saves.length?`<section class="bookmark-banner"><span class="bookmark-icon">${art('bookmark')}</span><div><span>Your bookmark is right here</span><strong>${esc(saves[0].story.title)}</strong></div><button class="text-button" data-action="start-story" data-id="${saves[0].story.id}">Pick up where you left off ${art('arrow')}</button></section>`:''}
  <section id="shelf" class="story-shelf" aria-labelledby="shelf-title"><div class="shelf-heading"><div><p class="overline">THE CURIOUS COLLECTION</p><h2 id="shelf-title">What are you in the mood for?</h2><p>Pick a cover. We’ll keep the surprises inside.</p></div><label class="search-field">${art('search')}<input id="story-search" type="search" placeholder="Find a story…" value="${esc(search)}" aria-label="Search stories by title or setting"/></label></div><div class="shelf-toolbar"><div class="shelf-filters" role="group" aria-label="Filter stories">${[['all','All stories'],['cozy','Cozy & curious'],['murder','Murder mysteries'],['uncanny','Curious & uncanny'],['progress','My bookmarks']].map(([id,label])=>`<button class="filter-button ${filter===id?'active':''}" data-filter="${id}" aria-pressed="${filter===id}">${label}${id==='all'?'<span>10</span>':''}</button>`).join('')}</div><span id="result-count"></span></div><div id="story-grid" class="story-grid"></div></section>
  <section class="write-invitation"><div class="write-illustration" aria-hidden="true">${art('pen')}<span>Once upon<br><em>a blank page…</em></span></div><div><p class="overline">FOR THE STORY YOU HAVEN’T FOUND YET</p><h2>Maybe the next story is yours.</h2><p>Build your characters, follow a different path, and keep track of who knows what. Your own little world, with room to grow.</p></div><a class="outline-button" href="./studio.html">Open your writing desk ${art('arrow')}</a></section></main>${footer()}`;
  renderShelf();
}
function renderShelf() {
  const filtered = stories.filter(story => (filter==='all' || (filter==='progress' ? readSave(story) : category(story)===filter)) && `${story.title} ${story.description} ${story.setting} ${story.genre}`.toLowerCase().includes(search.toLowerCase()));
  $('#result-count').textContent = `${filtered.length} ${filtered.length===1?'story':'stories'} on the shelf`;
  $('#story-grid').innerHTML = filtered.map(story => {
    const saved = readSave(story), index = stories.indexOf(story);
    return `<article class="story-card" data-story="${story.id}"><button class="cover-button" data-action="preview-story" data-id="${story.id}" aria-label="Read about ${esc(story.title)}"><img src="./public/covers/${story.id}.svg" alt="Illustrated cover for ${esc(story.title)}" ${index<5?'':'loading="lazy"'} width="600" height="760"/><span class="cover-edging"></span><span class="cover-label">${esc(story.genre)}</span><span class="cover-number">THE CURIOUS COLLECTION <b>${String(index+1).padStart(2,'0')}</b></span>${saved?`<span class="saved-ribbon" title="${saved.state.solved?'Solved':'Bookmarked'}">${art(saved.state.solved?'check':'bookmark')}</span>`:''}</button><div class="card-details"><div class="card-meta"><span>${esc(story.difficulty)}</span><span>${art('clock')}${esc(story.duration)}</span></div><h3><button data-action="preview-story" data-id="${story.id}">${esc(story.title)}</button></h3><p>${esc(story.description)}</p><button class="start-button" data-action="start-story" data-id="${story.id}">${saved?.state.solved?'Revisit story':saved?'Continue reading':'Begin the story'} ${art('arrow')}</button></div></article>`;
  }).join('') || `<div class="empty-shelf">${art('search')}<h3>No stories on this shelf just yet.</h3><p>Try another search or browse the full collection.</p><button class="outline-button" data-action="clear-filters">Show all stories</button></div>`;
}
function openDialog(title, content, actions='') {
  modal.innerHTML = `<div class="dialog-heading"><p class="overline">A NOTE FROM PLOTLINE</p><button class="close-button" data-action="close" aria-label="Close dialog">${art('close')}</button><h2 id="dialog-title">${title}</h2></div><div class="dialog-content">${content}</div>${actions?`<div class="dialog-actions">${actions}</div>`:''}`;
  if (!modal.open) modal.showModal();
}
function preview(story) {
  const saved = readSave(story);
  openDialog(esc(story.title), `<div class="story-preview"><img src="./public/covers/${story.id}.svg" alt="Illustrated story cover"/><div><p class="overline">${esc(story.genre)}</p><p class="preview-description">${esc(story.description)}</p><p class="preview-setting">${esc(story.setting)}</p><div class="preview-tags"><span>${art('clock')}${esc(story.duration)}</span><span>${esc(story.difficulty)}</span></div>${story.contentNote?`<p class="content-note">${esc(story.contentNote)}</p>`:''}</div></div><p class="spoiler-promise">${art('lock')} You’ll meet the characters and find the clues as you play. Nothing here gives away the ending.</p>`, `<button class="text-button" data-action="close">Keep browsing</button><button class="primary-button" data-action="start-story" data-id="${story.id}">${saved?'Return to the story':'Step into the story'} ${art('arrow')}</button>`);
}
function startStory(story) {
  modal.close();
  activeStory = story; state = readSave(story)?.state || createPlayState(story); feedback='';journalTab='clues';save();
  const params = new URLSearchParams({read:story.id});
  if(location.hash.slice(1)!==params.toString()) location.hash=params.toString();
  else renderReader();
}
function renderReader(focus = false) {
  const scene = getVisibleScene(activeStory,state), journal = getJournal(activeStory,state);
  document.title = `${activeStory.title} — PLOTLINE`;
  app.innerHTML = `${header(true)}<main id="main" class="reader-main" tabindex="-1"><div class="reader-topline"><a class="back-link" href="./">← Back to the shelf</a><div class="reader-tools"><button class="text-button" data-action="text-size" aria-label="Change reading text size">Aa <span>Text size</span></button><button class="text-button notebook-toggle" data-action="open-notebook">${art('book')}<span>Notebook</span></button><button class="text-button" data-action="share-story">${art('share')}<span>Share story</span></button><button class="text-button" data-action="restart">Restart</button></div></div><section class="reader-title"><img src="./public/covers/${activeStory.id}.svg" alt=""/><div><p class="overline">${esc(activeStory.genre)} <span> / </span> ${esc(activeStory.difficulty)}</p><h1>${esc(activeStory.title)}</h1><p>${state.solved?'A mystery well solved.': 'Take your time. The details are worth noticing.'}</p></div><span class="reader-bookmark">${art(state.solved?'check':'bookmark')}${state.solved?'Solved':storageWorks?'Bookmark saved':'Bookmark not saved'}</span></section>
  <div class="reading-layout"><article class="story-paper text-size-${textSize}" aria-labelledby="scene-title"><div class="paper-top"><span>${esc(scene.location)}</span><span>${state.solved?'THE LAST PAGE':`SCENE ${String(state.visited.indexOf(state.nodeId)+1).padStart(2,'0')}`}</span></div><h2 id="scene-title" tabindex="-1">${esc(scene.title)}</h2><div class="story-prose">${scene.body.map(p=>`<p>${esc(p)}</p>`).join('')}</div>${scene.newCharacters?.length?`<div class="scene-people"><span>IN THIS SCENE</span>${scene.newCharacters.map(c=>`<span class="person-chip"><i style="--person:${esc(c.color)}">${esc(c.name[0])}</i>${esc(c.name)}</span>`).join('')}</div>`:''}${scene.discoveredHere?.length?`<div class="found-clues"><span>${art('clue')} A detail for your notebook</span>${scene.discoveredHere.map(c=>`<p><strong>${esc(c.title)}</strong><span>${esc(c.description)}</span></p>`).join('')}</div>`:''}
  ${scene.ending ? `<section class="story-ending"><span class="ending-seal">${art('check')}</span><p class="overline">CASE CLOSED</p><h3>${esc(scene.ending.title)}</h3>${scene.ending.body.map(p=>`<p>${esc(p)}</p>`).join('')}<a class="primary-button" href="./">Find another mystery ${art('arrow')}</a><a class="text-button" href="./studio.html">Inspired? Write a story of your own ${art('pen')}</a></section>` : scene.puzzle ? `<section class="deduction-panel"><p class="overline">PUT THE PIECES TOGETHER</p><h3>${esc(scene.puzzle.prompt)}</h3><p class="decision-hint">Your notebook is here if you need it. Choose the explanation that fits the evidence.</p><div class="choices">${scene.puzzle.options.map((option,index)=>`<button class="choice-button deduction-choice" data-answer="${esc(option.id)}"><span class="choice-number">${String.fromCharCode(65+index)}</span><span>${esc(option.label)}</span>${art('arrow')}</button>`).join('')}</div><p class="answer-feedback" role="status" aria-live="polite">${esc(feedback)}</p></section>` : ''}
  ${scene.choices.length?`<section class="scene-decisions"><p class="overline">WHAT WOULD YOU LIKE TO DO?</p><div class="choices">${scene.choices.map((choice,index)=>`<button class="choice-button ${choice.locked?'locked':''}" data-choice="${esc(choice.id)}" ${choice.locked?'disabled':''}><span class="choice-number">${choice.locked?art('lock'):String(index+1).padStart(2,'0')}</span><span>${esc(choice.label)}${choice.locked?`<small>${esc(choice.lockReason)}</small>`:''}</span>${choice.locked?'':art('arrow')}</button>`).join('')}</div></section>`:''}<div class="paper-bottom"><span>✦</span><p>Every good mystery rewards a curious mind.</p><span>✦</span></div></article>
  <aside class="detective-notebook" aria-label="Your detective notebook"><div class="notebook-heading"><span>${art('book')}</span><div><p class="overline">YOURS TO FIGURE OUT</p><h2>The notebook</h2></div></div><p class="notebook-intro">Only what you’ve discovered. The rest can wait.</p><div class="journal-tabs" role="group" aria-label="Notebook sections"><button data-journal="clues" class="${journalTab==='clues'?'active':''}" aria-pressed="${journalTab==='clues'}">${art('clue')} Clues <b>${journal.clues.length}</b></button><button data-journal="people" class="${journalTab==='people'?'active':''}" aria-pressed="${journalTab==='people'}">${art('people')} People <b>${journal.characters.length}</b></button></div><div id="journal-content">${journalTab==='clues'?renderClues(journal.clues):renderPeople(journal.characters)}</div><label class="personal-notes"><span>${art('pen')} Your own hunches</span><textarea id="personal-notes" rows="4" maxlength="5000" placeholder="Something doesn’t quite add up…">${esc(notesFor(activeStory.id))}</textarea><small id="notes-status">Private notes, saved only on this device.</small></label><button class="notebook-help" data-action="how-to">New to this? Here’s how to play ${art('arrow')}</button></aside></div><div class="reader-bottom"><span>${storageWorks?'Your place is saved automatically on this device.':'Saving is unavailable. Keep this tab open to continue.'}</span><a href="./">Back to the story shelf ↑</a></div></main>${footer()}`;
  if(focus) {
    $('#scene-title').focus({preventScroll:true});
    $('.story-paper').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  }
}
function renderClues(clues) {
  return clues.length ? `<ul class="journal-list">${clues.map((clue,index)=>`<li><span class="clue-index">${String(index+1).padStart(2,'0')}</span><div><h3>${esc(clue.title)}</h3><p>${esc(clue.description)}</p></div></li>`).join('')}</ul>` : `<div class="notebook-empty">${art('clue')}<h3>Nothing to pin down. Yet.</h3><p>Look around and talk to people. Useful details will find their way here.</p></div>`;
}
function renderPeople(characters) {
  return characters.length ? `<ul class="journal-list people-list">${characters.map(c=>`<li><span class="journal-avatar" style="--person:${esc(c.color)}">${esc(c.name[0])}</span><div><h3>${esc(c.name)}</h3><span class="character-role">${esc(c.role)}</span><p>${esc(c.description)}</p></div></li>`).join('')}</ul>` : `<div class="notebook-empty">${art('people')}<h3>A town of strangers. For now.</h3><p>People appear here when you meet them, never before.</p></div>`;
}
function renderRoute() {
  const params = new URLSearchParams(location.hash.slice(1));
  if(params.has('story')) { location.replace(`./studio.html${location.hash}`);return; }
  const id = params.get('read');
  if (id) {
    const story=findStory(id);
    if (!story) { renderLibrary(); notify('That story is not on this shelf. Choose one of the ten below.');return; }
    if(activeStory?.id!==id || !state) { activeStory=story;state=readSave(story)?.state||createPlayState(story);save();feedback='';journalTab='clues'; }
    renderReader();window.scrollTo(0,0);
  } else renderLibrary();
}
document.addEventListener('click', async event=>{
  const filterButton=event.target.closest('[data-filter]');
  if(filterButton){ filter=filterButton.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===filterButton);b.setAttribute('aria-pressed',b===filterButton?'true':'false');});renderShelf();return; }
  const journalButton=event.target.closest('[data-journal]');
  if(journalButton){journalTab=journalButton.dataset.journal;const journal=getJournal(activeStory,state);$('#journal-content').innerHTML=journalTab==='clues'?renderClues(journal.clues):renderPeople(journal.characters);document.querySelectorAll('[data-journal]').forEach(b=>{b.classList.toggle('active',b===journalButton);b.setAttribute('aria-pressed',b===journalButton?'true':'false');});return;}
  const choice=event.target.closest('[data-choice]');
  if(choice && !choice.disabled){try{state=choose(activeStory,state,choice.dataset.choice);feedback='';save();renderReader(true);}catch(error){notify(error.message);}return;}
  const guess=event.target.closest('[data-answer]');
  if(guess){try{const result=answer(activeStory,state,guess.dataset.answer);state=result.state;feedback=result.correct?'':result.feedback;save();renderReader(result.correct);}catch(error){notify(error.message);}return;}
  const button=event.target.closest('[data-action]');if(!button)return;
  const {action,id}=button.dataset;
  if(action==='close')modal.close();
  else if(action==='preview-story')preview(findStory(id));
  else if(action==='start-story')startStory(findStory(id));
  else if(action==='clear-filters'){filter='all';search='';renderLibrary();$('#shelf').scrollIntoView();}
  else if(action==='how-to')openDialog('A little curiosity goes a long way.',`<ol class="how-to-list"><li><strong>Pick a story.</strong> The introduction tells you the mood, never the ending.</li><li><strong>Explore at your own pace.</strong> Read each scene and choose where to go or who to speak to.</li><li><strong>Keep a notebook.</strong> Characters appear when you meet them. Clues appear when you find them. Your own hunches have a place, too.</li><li><strong>Make your deduction.</strong> When you’ve gathered enough evidence, put the pieces together. A wrong guess won’t end your story.</li></ol><p class="dialog-note">Each story is a short, complete mystery. Your bookmarks and notes stay in this browser. Ready to make your own? The writing desk has characters, branches, and a who-knows-what tracker.</p>`,`<button class="primary-button" data-action="close">That sounds lovely ${art('arrow')}</button>`);
  else if(action==='open-notebook') {$('.detective-notebook').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
  else if(action==='text-size') {textSize=(textSize+1)%3;try{localStorage.setItem('plotline.textSize',String(textSize));}catch{}$('.story-paper').className=`story-paper text-size-${textSize}`;notify(['Reading text: comfortable','Reading text: large','Reading text: extra large'][textSize]);}
  else if(action==='restart')openDialog('Back to the first page?',`<p>Restarting <strong>${esc(activeStory.title)}</strong> clears this story’s bookmark and notebook. Your other mysteries and anything on your writing desk will stay as they are.</p>`,`<button class="text-button" data-action="close">Keep my place</button><button class="primary-button" data-action="confirm-restart">Start again ${art('arrow')}</button>`);
  else if(action==='confirm-restart') {state=createPlayState(activeStory);feedback='';journalTab='clues';try{localStorage.removeItem(`plotline.notes.${activeStory.id}`);}catch{}save();modal.close();renderReader(true);}
  else if(action==='share-story'){
    const url=new URL(location.href);url.hash=new URLSearchParams({read:activeStory.id}).toString();
    openDialog('A good mystery is better shared.',`<p>Send someone the first page of <strong>${esc(activeStory.title)}</strong>. The link shares the story, without your progress, clues, or notes.</p><label class="share-link-label">Story link<input id="case-share-url" readonly value="${esc(url.href)}"/></label>`,`<button class="text-button" data-action="close">Done</button><button class="primary-button" data-action="copy-story-link">Copy spoiler-free link ${art('share')}</button>`);
  }
  else if(action==='copy-story-link'){const input=$('#case-share-url');try{await navigator.clipboard.writeText(input.value);notify('Story link copied. The surprises are still inside.');}catch{input.focus();input.select();notify('Copy the selected link with Ctrl+C or ⌘C.');}}
});
document.addEventListener('input',event=>{
  if(event.target.id==='story-search'){search=event.target.value;renderShelf();}
  if(event.target.id==='personal-notes'){try{localStorage.setItem(`plotline.notes.${activeStory.id}`,event.target.value);$('#notes-status').textContent='Your hunches are saved on this device.';}catch{$('#notes-status').textContent='Notes could not be saved. Please copy them before leaving.';}}
});
modal.addEventListener('click',event=>{if(event.target===modal){const rect=modal.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)modal.close();}});
window.addEventListener('hashchange',renderRoute);
renderRoute();
