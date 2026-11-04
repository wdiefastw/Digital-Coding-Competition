import { analyzeStory, validateProject, getBranchEvents, encodeProject, decodeProject } from './engine.js';
import { createDemoProject, createEmptyProject } from './demo.js';

const $ = (selector, root = document) => root.querySelector(selector);
const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => crypto.randomUUID();
const storageKey = 'plotline.project.v1';
const icons = {
  story:'<path d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h3"/>',
  people:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5"/>',
  pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  key:'<circle cx="8" cy="9" r="5"/><path d="m12 13 8 8m-4-4 3-3m-6 0 3-3"/>',
  branch:'<circle cx="6" cy="5" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10m0-3h5a7 7 0 0 0 7-7"/>',
  check:'<path d="m5 12 4 4L19 6"/>', plus:'<path d="M12 5v14M5 12h14"/>',
  arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',
  share:'<path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4"/>',
  upload:'<path d="M12 16V4m-5 5 5-5 5 5M5 17v4h14v-4"/>',
  edit:'<path d="m15 4 5 5M4 20l5-1L21 7l-5-5L4 14z"/>',
  close:'<path d="m6 6 12 12M6 18 18 6"/>',
  warning:'<path d="m12 3 10 18H2zM12 9v5m0 3v1"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  trash:'<path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7m4-7v7"/>',
  spark:'<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.story}</svg>`;
const nameOf = (list, id, fallback = 'Not selected') => list.find(x => x.id === id)?.name || fallback;
let project, shared = false, storageAvailable = true;
let view = 'story', branchId, selectedEventId = null, selectedCharacterId, toastTimer;
try {
  const hash = new URLSearchParams(location.hash.slice(1));
  if (hash.has('story')) { project = decodeProject(hash.get('story')); shared = true; }
  else {
    const saved = localStorage.getItem(storageKey);
    if (saved) { const parsed = JSON.parse(saved); if (validateProject(parsed).ok) project = parsed; }
  }
} catch (error) { queueMicrotask(() => toast(`Could not open the saved story: ${error.message}`, true)); }
project ||= createDemoProject();
branchId = project.branches[0].id;
selectedCharacterId = project.characters[0]?.id;
let lastValidProject = JSON.stringify(project);

function toast(message, error = false) {
  const el = $('#toast'); el.textContent = message; el.className = `visible${error ? ' error' : ''}`;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.className = '', 5000);
}
function persist() {
  if (shared) return;
  try { localStorage.setItem(storageKey, JSON.stringify(project)); storageAvailable = true; }
  catch { storageAvailable = false; toast('Your browser could not save this story. Export a JSON backup.', true); }
}
function commit() {
  const validation = validateProject(project);
  if (!validation.ok) {
    project = JSON.parse(lastValidProject);
    if (!project.branches.some(branch => branch.id === branchId)) branchId = project.branches[0].id;
    if (!project.events.some(event => event.id === selectedEventId)) selectedEventId = null;
    if (!project.characters.some(character => character.id === selectedCharacterId)) selectedCharacterId = project.characters[0]?.id;
    render();
    toast(validation.errors[0] || 'This change could not be saved.', true);
    return false;
  }
  lastValidProject = JSON.stringify(project);
  persist();
  render();
  return true;
}
function avatar(character, small = false) {
  return `<span class="avatar ${small ? 'small' : ''}" style="--avatar:${esc(character.color)}">${esc(character.name.slice(0,1))}</span>`;
}
const btn = (action, label, glyph = '', cls = '', extra = '') => `<button type="button" class="button ${cls}" data-action="${action}" ${extra}>${glyph ? icon(glyph) : ''}<span>${label}</span></button>`;
const option = (value, label, selected) => `<option value="${esc(value)}" ${selected ? 'selected' : ''}>${esc(label)}</option>`;
function render() {
  const analysis = analyzeStory(project, branchId);
  const nav = [['story','story','Timeline'],['characters','people','Characters'],['locations','pin','Locations'],['facts','key','Facts & secrets'],['analysis','eye','Story check']];
  $('#app').innerHTML = `<aside class="sidebar">
    <a class="brand" href="#" data-action="home" aria-label="PLOTLINE — timeline"><span class="brand-mark">P<span>↗</span></span><span>PLOTLINE<small>A WORKSPACE FOR STORIES</small></span></a>
    <a class="library-return" href="./">← Back to the story library</a><div class="workspace-label">YOUR WRITING DESK</div>
    <button class="project-switch" data-action="project">${icon('story')}<span>${esc(project.title)}<small>Personal project</small></span>${icon('edit')}</button>
    <nav aria-label="Navigation">${nav.map(([id,glyph,label]) => `<button data-view="${id}" class="nav-item ${view === id ? 'active' : ''}" ${view === id ? 'aria-current="page"' : ''}>${icon(glyph)}<span>${label}</span>${id === 'analysis' && analysis.issues.length ? `<b class="nav-count">${analysis.issues.length}</b>` : ''}</button>`).join('')}</nav>
    <div class="sidebar-note"><span class="tiny-stars">✦</span><h3>Big stories.<br>No loose ends.</h3><p>Keep every thread of your story in your hands.</p><div class="thread-art" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div>
    <div class="sidebar-bottom">${btn('new','New story','plus','sidebar-new')}${btn('help','How it works','spark','help-button')}<small>MADE FOR YOUR IMAGINATION <span>↗</span></small></div>
  </aside><div class="workspace">
    <header class="topbar"><div class="breadcrumb">Workspace <span>/</span> <strong>${esc(nav.find(x=>x[0]===view)[2])}</strong></div><div class="top-actions"><span class="save-state">${icon(shared ? 'eye' : storageAvailable ? 'check' : 'warning')}${shared ? 'Shared snapshot' : storageAvailable ? 'Saved on this device' : 'Saving unavailable'}</span>${btn('project','Story settings','edit','icon-button','aria-label="Edit story details" title="Edit story details"')}${btn('export','Export','download','quiet')}${btn('share','Share','share','dark')}</div></header>
    ${shared ? `<div class="shared-banner">You are viewing a shared snapshot. To keep your changes on this device, ${btn('save-copy','save your own copy','download','text-button')}.</div>` : ''}
    <main id="main" tabindex="-1"><section class="page-heading"><div><div class="eyebrow"><span></span> FROM THE FIRST IDEA TO THE FINAL WORD</div><h1>${view === 'story' ? esc(project.title) : esc(nav.find(x=>x[0]===view)[2])}<span class="heading-dot">.</span></h1><p>${view === 'story' ? esc(project.description || 'Every story starts with one moment. What will yours be?') : view === 'analysis' ? 'Catch plot contradictions before your readers do.' : view === 'characters' ? 'The people who bring your story to life. Each with a truth of their own.' : view === 'locations' ? 'Places where paths cross and secrets come to light.' : 'Information moves your story forward. Decide who discovers it, and when.'}</p></div>${view === 'story' ? btn('event-new','Add event','plus','primary') : view !== 'analysis' ? btn(`${view}-new`,view === 'characters' ? 'New character' : view === 'locations' ? 'New location' : 'New fact','plus','primary') : btn('story-view','Back to timeline','arrow','primary')}</section>
    ${view === 'story' ? renderStory(analysis) : view === 'analysis' ? renderAnalysis(analysis) : renderEntities(view)}
    <footer class="page-footer"><span>PLOTLINE <i>·</i> Where your ideas become stories.</span><span>Your story. Your rules. <span class="footer-star">✳</span></span></footer></main></div>`;
}
function branchToolbar() {
  return `<div class="branch-toolbar"><div class="branch-select">${icon('branch')}<label for="branch-select">Story branch</label><select id="branch-select">${project.branches.map(b=>option(b.id,b.name,b.id===branchId)).join('')}</select></div>${btn('branch-new','Create branch','plus','quiet')}${project.branches.find(b=>b.id===branchId)?.parentId ? '<span class="branch-tag">Alternate path</span>' : '<span class="branch-tag">Main path</span>'}</div>`;
}
function renderStory(analysis) {
  return `${branchToolbar()}<div class="story-layout"><section class="timeline-panel" aria-label="Story events"><div class="section-heading"><h2>Story timeline <span class="count">${analysis.events.length}</span></h2><span class="small-label">EVENTS IN CHRONOLOGICAL ORDER</span></div><div class="timeline">${analysis.events.length ? analysis.events.map((event,index)=>eventCard(event,index,analysis.events)).join('') : emptyState('story','Your story starts here','Add a character and a fact, then write your first event.','event-new','Create event')}<div class="timeline-end"><span>✦</span><p>What happens next?</p>${btn('event-new','Continue the story','plus','quiet')}</div></div></section><aside class="inspector">${renderKnowledge(analysis)}${renderHealth(analysis)}<div class="writing-tip"><span>✧ A NOTE FOR THE WRITER</span><p>Your reader may know more than your character. A character can only act on what they have discovered.</p></div></aside></div>`;
}
function eventCard(event,index,events) {
  const invalid = event.issues.length > 0;
  return `<article class="event-card ${invalid ? 'has-issue' : ''} ${selectedEventId===event.id ? 'selected' : ''}" data-event="${esc(event.id)}"><div class="event-number">${String(index+1).padStart(2,'0')}</div><div class="event-top"><div class="event-meta">${icon('pin')}${esc(nameOf(project.locations,event.locationId,'No location'))}${event.inherited ? '<span class="inherited-label">Inherited</span>' : ''}</div><div class="event-controls">${!event.inherited ? `${btn('event-up','Move event up','','icon-button move-button',`data-id="${esc(event.id)}" aria-label="Move event up" ${index===0 || events[index-1]?.inherited ? 'disabled' : ''}`)}${btn('event-down','Move event down','','icon-button move-button down',`data-id="${esc(event.id)}" aria-label="Move event down" ${index===events.length-1 ? 'disabled' : ''}`)}` : ''}${btn('event-edit','Edit event','edit','icon-button',`data-id="${esc(event.id)}" aria-label="Edit event: ${esc(event.title)}"`)}</div></div><button class="event-title" data-action="inspect" data-id="${esc(event.id)}">${esc(event.title)}</button><p class="event-description">${esc(event.description)}</p><div class="event-cast">${event.characterIds.map(id=>{const c=project.characters.find(c=>c.id===id);return c ? `<span class="cast-chip">${avatar(c,true)}${esc(c.name)}</span>`:'';}).join('')}</div>${event.learns.length || event.requires.length ? `<div class="event-facts">${event.requires.map(r=>`<span class="fact-pill requires">${icon('key')}${esc(nameOf(project.characters,r.characterId))} uses: ${esc(project.facts.find(f=>f.id===r.factId)?.title)}</span>`).join('')}${event.learns.map(l=>`<span class="fact-pill learns">${icon('spark')}${esc(nameOf(project.characters,l.characterId))} learns: ${esc(project.facts.find(f=>f.id===l.factId)?.title)}</span>`).join('')}</div>`:''}${invalid ? `<div class="event-warning">${icon('warning')}<span><strong>Plot contradiction</strong>${esc(event.issues[0].message)}</span>${btn('event-edit','Fix','arrow','icon-button',`data-id="${esc(event.id)}" aria-label="Fix contradiction"`)}</div>`:''}<button class="inspect-event" data-action="inspect" data-id="${esc(event.id)}">${selectedEventId===event.id ? 'Selected moment' : 'See who knows what at this moment'} ${icon('arrow')}</button></article>`;
}
function renderKnowledge(analysis) {
  const selected = analysis.events.find(e=>e.id===selectedEventId);
  const character = project.characters.find(c=>c.id===selectedCharacterId) || project.characters[0];
  const knowledge = selected ? selected.knowledgeAfter : Object.fromEntries(project.characters.map(c=>[c.id, project.facts.filter(f=>f.initialKnowers.includes(c.id)).map(f=>f.id)]));
  const known = character ? knowledge[character.id] || [] : [];
  return `<section class="knowledge-panel"><div class="section-heading"><h2>${icon('eye')} Who knows what</h2><span class="live-dot">LIVE</span></div><p class="panel-caption">Character knowledge at the selected moment</p><label class="field-label" for="moment-select">MOMENT IN THE STORY</label><select id="moment-select" class="full-select">${option('','Before the story begins',!selected)}${analysis.events.map((e,i)=>option(e.id,`${i+1}. ${e.title}`,selected?.id===e.id)).join('')}</select><div class="character-tabs" role="group" aria-label="Choose a character">${project.characters.map(c=>`<button data-action="character-select" data-id="${esc(c.id)}" class="character-tab ${c.id===character?.id?'active':''}" aria-pressed="${c.id===character?.id}" title="${esc(c.name)}">${avatar(c)}<span>${esc(c.name)}</span></button>`).join('')}</div>${character ? `<div class="knowledge-count"><strong>${esc(character.name)} knows</strong><span>${known.length} <small>/ ${project.facts.length}</small></span></div><div class="knowledge-progress"><span style="width:${project.facts.length ? known.length / project.facts.length * 100 : 0}%"></span></div><div class="knowledge-list">${project.facts.map(f=>`<div class="knowledge-item ${known.includes(f.id)?'known':'unknown'}">${icon(known.includes(f.id)?'check':'lock')}<div><strong>${esc(f.title)}</strong><small>${known.includes(f.id)?'Known to this character':'Not yet known'}</small></div></div>`).join('') || '<p class="panel-caption">Add facts to start tracking knowledge.</p>'}</div>` : '<p class="panel-caption">Add your first character.</p>'}<div class="knowledge-legend"><span><i></i> Known</span><span><i></i> Not yet known</span></div></section>`;
}
function renderHealth(analysis) {
  return `<section class="health-panel ${analysis.issues.length?'needs-attention':'healthy'}"><div class="health-icon">${icon(analysis.issues.length?'warning':'check')}</div><div><h3>${analysis.issues.length ? 'A thread needs attention' : 'No plot contradictions'}</h3><p>${analysis.issues.length ? `${analysis.issues.length} ${analysis.issues.length===1?'contradiction':'contradictions'} in this branch` : 'Characters only use facts they already know.'}</p></div>${btn('analysis-view','View story check','arrow','icon-button','aria-label="View story check"')}</section>`;
}
function renderEntities(type) {
  const list = project[type];
  const entityLabel = {characters: 'character', locations: 'location', facts: 'fact'}[type];
  return `<div class="collection-bar"><span>${list.length} ${entityLabel}${list.length===1?'':'s'} in your world</span><span>THE DETAILS THAT MAKE A STORY</span></div><div class="entity-grid">${list.map((entity,index)=>`<article class="entity-card"><div class="entity-top">${type==='characters'?avatar(entity):`<span class="entity-icon">${icon(type==='locations'?'pin':'key')}</span>`}<span class="entity-index">${String(index+1).padStart(2,'0')}</span></div><h2>${esc(entity.name || entity.title)}</h2><p>${esc(type==='characters'?entity.role:entity.description) || 'No description yet'}</p>${type==='facts'?`<div class="initial-knowers"><span>Known from the start</span><div>${entity.initialKnowers.length?entity.initialKnowers.map(id=>esc(nameOf(project.characters,id))).join(', '):'No one — the secret is still waiting'}</div></div>`:`<div class="entity-usage">${project.events.filter(e=>type==='characters'?e.characterIds.includes(entity.id):e.locationId===entity.id).length} story events</div>`}<div class="entity-bottom">${btn(`${type}-edit`,'Edit','edit','quiet',`data-id="${esc(entity.id)}"`)}${btn(`${type}-delete`,'Delete','trash','icon-button danger',`data-id="${esc(entity.id)}" aria-label="Delete ${esc(entity.name||entity.title)}"`)}</div></article>`).join('')}${!list.length?emptyState(type==='characters'?'people':type==='locations'?'pin':'key','Give your story a little more detail','It starts with a small idea. Add yours here.',`${type}-new`,'Add the first detail'):''}</div>`;
}
function renderAnalysis(analysis) {
  return `${branchToolbar()}<div class="stats-grid"><div><span>EVENTS IN THIS BRANCH</span><strong>${analysis.events.length}<small>${icon('story')}</small></strong></div><div><span>CHARACTERS</span><strong>${project.characters.length}<small>${icon('people')}</small></strong></div><div class="${analysis.issues.length?'stat-alert':'stat-good'}"><span>CONTRADICTIONS</span><strong>${analysis.issues.length}<small>${icon(analysis.issues.length?'warning':'check')}</small></strong></div></div><section class="analysis-panel"><div class="section-heading"><h2>Story logic check</h2><span class="live-dot">UPDATES AUTOMATICALLY</span></div><p class="analysis-explainer">Before each event, PLOTLINE checks whether characters know the facts they use. New knowledge is added after the event. Inherited events only count up to the branching point.</p>${analysis.issues.length?analysis.issues.map(issue=>`<article class="issue-row"><span class="issue-symbol">${icon('warning')}</span><div><span class="issue-label">UNKNOWN INFORMATION</span><h3>${esc(project.events.find(e=>e.id===issue.eventId)?.title)}</h3><p>${esc(issue.message)}</p><small>Introduce the discovery earlier, or change the knowledge used in this event.</small></div>${btn('event-edit','Fix','arrow','quiet',`data-id="${esc(issue.eventId)}"`)}</article>`).join(''):`<div class="all-clear">${icon('check')}<h3>Every story thread is in place</h3><p>No character uses an unknown fact in this branch.</p></div>`}</section>`;
}
function emptyState(glyph,title,text,action,label) { return `<div class="empty-state">${icon(glyph)}<h3>${title}</h3><p>${text}</p>${btn(action,label,'plus','primary')}</div>`; }

const modal = $('#modal');
function openModal(title, body, footer = '', wide = false) {
  modal.innerHTML = `<div class="modal-header"><div><div class="eyebrow">PLOTLINE / WORKSPACE</div><h2 id="modal-title">${title}</h2></div>${btn('close','Close','close','icon-button','aria-label="Close dialog"')}</div>${body}${footer}`;
  modal.className = wide?'wide':'';
  if (!modal.open) modal.showModal();
}
const field = (label,name,value='',opts={}) => `<label class="form-field"><span>${label}</span>${opts.textarea?`<textarea name="${name}" rows="3" maxlength="${opts.max||3000}" ${opts.required?'required':''}>${esc(value)}</textarea>`:`<input name="${name}" value="${esc(value)}" ${opts.required?'required':''} maxlength="${opts.max||120}" placeholder="${esc(opts.placeholder||'')}" />`}</label>`;
const formFooter = (label='Save') => `<div class="modal-footer">${btn('close','Cancel','','quiet')}<button type="submit" class="button primary">${icon('check')}${label}</button></div>`;
function showEntity(type, id) {
  const entity = project[type].find(x=>x.id===id);
  const labels = {characters:'character',locations:'location',facts:'fact'};
  const title = entity ? `Edit: ${esc(entity.name||entity.title)}` : `New ${labels[type]}`;
  openModal(title, `<form id="entity-form" data-type="${type}" data-id="${esc(id||'')}"><div class="modal-body">${field(type==='characters'?'Character name':type==='locations'?'Location name':'Fact title',type==='facts'?'title':'name',entity?.name||entity?.title||'',{required:true,max:120,placeholder:type==='facts'?'For example: the door code is 0712':'Give it a name'})}${field(type==='characters'?'Role and personality':'Description',type==='characters'?'role':'description',entity?.role||entity?.description||'',{textarea:true,max:3000})}${type==='characters'?`<fieldset class="form-field"><legend>Character color</legend><div class="color-choices">${['#a99aff','#79cfc7','#efb77b','#e69eae','#b8cf80','#8ab7e5'].map(color=>`<label style="--swatch:${color}"><input type="radio" name="color" value="${color}" ${(entity?.color||'#a99aff')===color?'checked':''} aria-label="Color ${color}" /><span></span></label>`).join('')}</div></fieldset>`:''}${type==='facts'?`<fieldset class="checkbox-group"><legend>Who knows this before the story begins?</legend><p class="form-hint">Other characters can discover this fact in later events.</p>${project.characters.map(c=>`<label><input type="checkbox" name="initialKnowers" value="${esc(c.id)}" ${entity?.initialKnowers.includes(c.id)?'checked':''}/>${avatar(c,true)}${esc(c.name)}</label>`).join('')||'<p class="form-hint">Add some characters first.</p>'}</fieldset>`:''}</div>${formFooter()}</form>`);
}
function showEvent(id) {
  const event = project.events.find(e=>e.id===id);
  const ownEvents = project.events.filter(e=>e.branchId===branchId);
  const e = event || {title:'',description:'',characterIds:[],locationId:'',requires:[],learns:[],branchId,order:ownEvents.length ? Math.max(...ownEvents.map(e=>e.order))+1 : 1};
  openModal(event?'Edit event':'The next page of your story',`<form id="event-form" data-id="${esc(id||'')}" data-branch="${esc(e.branchId)}" data-order="${e.order}"><div class="modal-body"><div class="form-note">${icon('branch')} Branch: <strong>${esc(nameOf(project.branches,e.branchId))}</strong>${event && e.branchId!==branchId ? '<span>This also changes the event in its parent branch.</span>':''}</div>${field('Event title','title',e.title,{required:true,max:160,placeholder:'What happens in this scene?'})}${field('What happens?','description',e.description,{textarea:true,max:3000})}<label class="form-field"><span>Location</span><select name="locationId">${option('','No location',!e.locationId)}${project.locations.map(l=>option(l.id,l.name,e.locationId===l.id)).join('')}</select></label><fieldset class="checkbox-group"><legend>Characters in this event</legend>${project.characters.map(c=>`<label><input type="checkbox" name="characterIds" value="${esc(c.id)}" ${e.characterIds.includes(c.id)?'checked':''}/>${avatar(c,true)}${esc(c.name)}</label>`).join('')||'<p class="form-hint">An event can have no characters. Add characters in the Characters section.</p>'}</fieldset><div class="knowledge-editor"><div class="editor-heading"><h3>${icon('key')} Knowledge used</h3>${btn('require-add','Add','plus','quiet')}</div><p class="form-hint">Characters must know these facts before this event begins.</p><div id="requires-rows">${e.requires.map(r=>knowledgeRow('requires',r)).join('')}</div></div><div class="knowledge-editor"><div class="editor-heading"><h3>${icon('spark')} New discoveries</h3>${btn('learn-add','Add','plus','quiet')}</div><p class="form-hint">Characters gain this knowledge after the event.</p><div id="learns-rows">${e.learns.map(r=>knowledgeRow('learns',r)).join('')}</div></div><p class="form-error" id="form-error" role="alert"></p></div><div class="modal-footer">${event?btn('event-delete','Delete','trash','danger',`data-id="${esc(id)}"`):''}<span class="spacer"></span>${btn('close','Cancel','','quiet')}<button type="submit" class="button primary">${icon('check')}Save event</button></div></form>`, '', true);
}
function knowledgeRow(kind, value={}) {
  return `<div class="knowledge-row" data-kind="${kind}"><select aria-label="Character">${project.characters.map((c,i)=>option(c.id,c.name,value.characterId ? c.id===value.characterId : i===0)).join('')}</select><span>→</span><select aria-label="Fact">${project.facts.map((f,i)=>option(f.id,f.title,value.factId ? f.id===value.factId : i===0)).join('')}</select>${btn('row-remove','Remove','close','icon-button','aria-label="Remove knowledge entry"')}</div>`;
}
function showBranch() {
  const events = getBranchEvents(project,branchId);
  openModal('What if the story took another turn?',`<form id="branch-form"><div class="modal-body"><p class="form-intro">Explore another path. Your new branch inherits events and knowledge through the selected moment, including that event.</p>${field('New branch name','name','',{required:true,max:100,placeholder:'For example: Mira tells the truth'})}<label class="form-field"><span>Continue after this event</span><select name="forkEventId">${events.map((e,i)=>option(e.id,`${i+1}. ${e.title}`,selectedEventId ? e.id===selectedEventId : i===events.length-1)).join('')}${!events.length?option('','Empty parent branch',true):''}</select></label><p class="form-hint">Parent branch: ${esc(nameOf(project.branches,branchId))}. Its original events stay in place.</p></div>${formFooter('Create branch')}</form>`);
}
function confirmAction(title, message, callback, label='Confirm') {
  openModal(title,`<div class="modal-body"><p class="form-intro">${message}</p></div>`,`<div class="modal-footer">${btn('close','Cancel','','quiet')}${btn('confirm',label,'check','primary')}</div>`);
  $('[data-action="confirm"]',modal).addEventListener('click',()=>{modal.close();callback();},{once:true});
}
function replaceProject(next) {
  project = next; shared = false; history.replaceState(null,'',location.pathname+location.search); branchId=project.branches[0].id;selectedEventId=null;selectedCharacterId=project.characters[0]?.id;view='story';commit();
}
function deleteEntity(type,id) {
  const entity = project[type].find(e=>e.id===id);
  confirmAction('Delete this detail?',`«${esc(entity.name||entity.title)}» will be deleted, along with its references in every event. You can export a backup first.`,()=>{
    project[type]=project[type].filter(e=>e.id!==id);
    if(type==='characters') {
      project.facts.forEach(f=>f.initialKnowers=f.initialKnowers.filter(x=>x!==id));
      project.events.forEach(e=>{e.characterIds=e.characterIds.filter(x=>x!==id);e.learns=e.learns.filter(x=>x.characterId!==id);e.requires=e.requires.filter(x=>x.characterId!==id);});
    } else if(type==='locations') project.events.forEach(e=>{if(e.locationId===id)e.locationId='';});
    else project.events.forEach(e=>{e.learns=e.learns.filter(x=>x.factId!==id);e.requires=e.requires.filter(x=>x.factId!==id);});
    if (commit()) toast('Detail deleted');
  },'Delete');
}
function showShare() {
  try {
    const url = new URL(location.href);url.hash=new URLSearchParams({story:encodeProject(project)}).toString();
    const tooLong = url.href.length > 32000;
    openModal('Stories are meant to be shared',`<div class="modal-body"><div class="share-illustration">${icon('branch')}<span>Your story → new readers</span></div><p class="form-intro">This link contains a snapshot of your story. Anyone with it can open and edit their own copy. Changes you make later will not update a link you have already shared.</p>${tooLong?'<p class="form-note">This story is too large for a convenient link. Use Export to share a JSON file instead.</p>':`<label class="form-field"><span>Link to this version</span><input id="share-url" readonly value="${esc(url.href)}" /></label>${btn('copy-link','Copy link','share','primary full-width')}`}<div class="share-help"><strong>Want to share the website itself?</strong><p>Publish the code with GitHub Pages using the README instructions. A local address only works on your own computer.</p></div></div>`,`<div class="modal-footer">${btn('export','Download JSON','download','quiet')}${btn('close','Done','check','primary')}</div>`);
  } catch(error) { toast(error.message,true); }
}

document.addEventListener('click',async event=>{
  const nav=event.target.closest('[data-view]');
  if(nav){view=nav.dataset.view;render();return;}
  const target=event.target.closest('[data-action]');if(!target)return;
  const {action,id}=target.dataset;
  if(action==='home')event.preventDefault();
  if(action==='close'){modal.close();return;}
  if(action==='home'||action==='story-view'){view='story';render();}
  else if(action==='analysis-view'){view='analysis';render();}
  else if(action==='inspect'){
    selectedEventId=id;render();
    if(matchMedia('(max-width: 1000px)').matches) $('.knowledge-panel')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
  }
  else if(action==='character-select'){selectedCharacterId=id;render();}
  else if(action==='event-new'||action==='event-edit')showEvent(id);
  else if(/^(characters|locations|facts)-(new|edit)$/.test(action))showEntity(action.split('-')[0],id);
  else if(/^(characters|locations|facts)-delete$/.test(action))deleteEntity(action.split('-')[0],id);
  else if(action==='require-add'||action==='learn-add'){
    if(!project.characters.length||!project.facts.length){$('#form-error').textContent='Add at least one character and one fact first.';return;}
    const kind=action==='require-add'?'requires':'learns';$(`#${kind}-rows`).insertAdjacentHTML('beforeend',knowledgeRow(kind));
  }
  else if(action==='row-remove')target.closest('.knowledge-row').remove();
  else if(action==='branch-new')showBranch();
  else if(action==='project')openModal('Your story',`<form id="project-form"><div class="modal-body">${field('Story title','title',project.title,{required:true,max:160})}${field('Short description','description',project.description,{textarea:true,max:3000})}</div>${formFooter()}</form>`);
  else if(action==='event-delete'){
    if(project.branches.some(b=>b.forkEventId===id)){toast('This event is a branching point. You can edit it, but it cannot be deleted.',true);return;}
    confirmAction('Delete this event?','This event will be removed from every branch that inherits it. Character knowledge will be recalculated.',()=>{project.events=project.events.filter(e=>e.id!==id);if(selectedEventId===id)selectedEventId=null;if (commit()) toast('Event deleted');},'Delete');
  }
  else if(action==='event-up'||action==='event-down'){
    const list=project.events.filter(e=>e.branchId===branchId).sort((a,b)=>a.order-b.order);const index=list.findIndex(e=>e.id===id),other=index+(action==='event-up'?-1:1);
    if(index>=0&&other>=0&&other<list.length){[list[index],list[other]]=[list[other],list[index]];list.forEach((e,i)=>e.order=i+1);commit();}
  }
  else if(action==='export'){
    const blob=new Blob([JSON.stringify(project,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='plotline-story.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Story exported as JSON');
  }
  else if(action==='import')$('#import-file').click();
  else if(action==='share')showShare();
  else if(action==='copy-link'){
    const input=$('#share-url');try{await navigator.clipboard.writeText(input.value);toast('Link copied');}catch{input.focus();input.select();toast('Copy the selected link with Ctrl+C or ⌘C.');}
  }
  else if(action==='new')openModal('Start a new story',`<div class="modal-body"><p class="form-intro">Export your current story as JSON before replacing it. Your browser stores one active project.</p><div class="new-options">${btn('export','Export current story','download','quiet')}${btn('import','Import JSON','upload','quiet')}${btn('empty-project','A blank page','plus','primary')}${btn('demo-project','Open demo story','spark','quiet')}</div></div>`,`<div class="modal-footer">${btn('close','Keep writing','','quiet')}</div>`);
  else if(action==='empty-project'||action==='demo-project')confirmAction('Replace the current story?','Changes to your current story will be replaced. Export a JSON backup first if you want to keep them. This cannot be undone.',()=>{replaceProject(action==='empty-project'?createEmptyProject():createDemoProject());toast('New story opened');},'Open');
  else if(action==='save-copy')confirmAction('Save this copy?', 'This becomes the active story on this device and replaces your previous local story. To keep the previous story, first open the website in another tab without the link fragment and export a backup.',()=>{project.id=uid();replaceProject(project);toast('Copy saved. Your changes will now save automatically.');},'Save a copy');
  else if(action==='help')openModal('Every detail has its place',`<div class="modal-body help-content"><p class="form-intro">PLOTLINE helps you build stories where every character knows exactly what they should, at exactly the right moment.</p><ol><li><strong>Build your world.</strong> Add characters, locations, and facts. For each fact, choose who knows it before the story begins.</li><li><strong>Shape the plot.</strong> For each event, specify the facts a character uses and the ones they discover.</li><li><strong>Check the logic.</strong> Using an unknown fact is highlighted. Discovering a fact during that same event does not count as prior knowledge.</li><li><strong>Explore another path.</strong> Create a branch after a selected event. Knowledge discovered on a different path stays on that path.</li><li><strong>Share your story.</strong> Export a JSON file or share a snapshot link once the website is published.</li></ol><p class="form-note">PLOTLINE checks the facts you explicitly assign, rather than interpreting prose. Stories are stored locally in your browser. Export JSON for backups. Your story is not sent to a server.</p></div>`,`<div class="modal-footer">${btn('import','Import JSON','upload','quiet')}${btn('close','Start creating','arrow','primary')}</div>`, true);
});

document.addEventListener('change',event=>{
  if(event.target.id==='branch-select'){branchId=event.target.value;selectedEventId=null;render();}
  if(event.target.id==='moment-select'){selectedEventId=event.target.value||null;render();}
});
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();}});
document.addEventListener('submit',event=>{
  const form=event.target;if(!modal.contains(form))return;event.preventDefault();const data=new FormData(form);
  const text=name=>String(data.get(name)||'').trim();
  if(form.id==='entity-form'){
    const type=form.dataset.type,id=form.dataset.id||uid();
    const entity=type==='characters'?{id,name:text('name'),role:text('role'),color:text('color')||project.characters.find(character=>character.id===id)?.color||'#a99aff'} : type==='locations'?{id,name:text('name'),description:text('description')} : {id,title:text('title'),description:text('description'),initialKnowers:data.getAll('initialKnowers')};
    if(!(entity.name||entity.title)){toast('Enter a name with at least one non-space character.',true);return;}
    const index=project[type].findIndex(x=>x.id===id);if(index<0)project[type].push(entity);else project[type][index]=entity;
  }else if(form.id==='event-form'){
    const characterIds=data.getAll('characterIds'),relations=kind=>[...form.querySelectorAll(`[data-kind="${kind}"]`)].map(row=>{const s=row.querySelectorAll('select');return {characterId:s[0].value,factId:s[1].value};});
    const requires=relations('requires'),learns=relations('learns');
    if(!text('title')){$('#form-error').textContent='Enter an event title.';return;}
    if([...requires,...learns].some(r=>!characterIds.includes(r.characterId))){$('#form-error').textContent='Every character in a knowledge entry must be selected as a participant in this event.';return;}
    if([requires,learns].some(rows=>new Set(rows.map(r=>r.characterId+':'+r.factId)).size!==rows.length)){$('#form-error').textContent='Do not add the same character and fact twice in one section.';return;}
    const id=form.dataset.id||uid(),entity={id,title:text('title'),description:text('description'),branchId:form.dataset.branch,order:Number(form.dataset.order),characterIds,locationId:text('locationId'),requires,learns};
    const index=project.events.findIndex(e=>e.id===id);if(index<0)project.events.push(entity);else project.events[index]=entity;selectedEventId=id;
  }else if(form.id==='branch-form'){
    if(!text('name')){toast('Enter a branch name.',true);return;}
    const id=uid();project.branches.push({id,name:text('name'),parentId:branchId,forkEventId:text('forkEventId')||null});branchId=id;selectedEventId=null;
  }else if(form.id==='project-form'){
    if(!text('title')){toast('Enter a story title.',true);return;}
    project.title=text('title');project.description=text('description');
  }else return;
  if (!commit()) return;
  modal.close();toast('Changes saved'+(shared?' in this open copy':''));
});
$('#import-file').addEventListener('change',async event=>{
  const file=event.target.files[0];if(!file)return;
  try{
    if(file.size>10_000_000)throw new Error('This file is too large. The limit is 10 MB.');
    const next=JSON.parse(await file.text()),validation=validateProject(next);
    if(!validation.ok)throw new Error(validation.errors[0]);
    confirmAction('Import this story?',`«${esc(next.title)}» will replace your current local story. Export a backup of your current story first if needed.`,()=>{replaceProject(next);toast('Story imported');},'Import');
  }catch(error){toast(`Import failed: ${error.message}`,true);}finally{event.target.value='';}
});
render();
