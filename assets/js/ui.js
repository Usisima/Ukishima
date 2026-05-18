// ==================== CAROUSEL STATE ====================
const carouselState = {};

function getCarousel(sem) {
  if (!carouselState[sem]) carouselState[sem] = { open: false, selectedIdx: 0 };
  return carouselState[sem];
}

function getAvailableOpts(sem) {
  const pool = getOptativasPool(sem);
  const allChosen = getAllChosenOptNames();
  const thisSemChosen = [];
  const semObj = CURRICULUM.find(s => s.semestre === sem);
  if (semObj) {
    for (let i = 0; i < (semObj.optativas || 0); i++) {
      const s = getOptSlot(sem, i);
      if (s) thisSemChosen.push(s.name);
    }
  }
  return pool.filter(o => {
    if (!allChosen.includes(o.name)) return true;
    return thisSemChosen.includes(o.name);
  });
}

// ==================== RENDERIZADO ====================
function renderTemario(mat) {
  if (!mat.temario || !mat.temario.length) 
    return '<div style="padding:1rem;color:var(--ink3);font-size:12px;">Temario en construcción</div>';
  
  return mat.temario.map((t, i) => {
    const done = getTemaDone(mat.id, i);
    const collapsed = done && getTemaCollapsed(mat.id, i);
    const h = t.horas || ((t.subtemas || []).length * 2);
    const subs = (t.subtemas || []).map(s => `<div class="subtema">${s}</div>`).join('');
    
    return `<div class="tema-item ${done?'done':''} ${collapsed?'collapsed':''}" id="tema-${mat.id}-${i}">
      <div class="tema-head" data-tema-toggle="${mat.id}-${i}">
        <div class="tema-head-left">
          <span class="tema-num">${t.num}</span>
          <span class="tema-name">${t.name}</span>
        </div>
        <div class="tema-meta">
          <span class="tema-hrs-badge">${h}h</span>
          <svg class="tema-chev" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="3,5 7,9 11,5"/>
          </svg>
          <input class="tema-checkbox" type="checkbox" ${done?'checked':''} 
                 data-tema-check="${mat.id}" data-tema-idx="${i}" onclick="event.stopPropagation()">
        </div>
      </div>
      <div class="tema-subtemas">${subs}</div>
    </div>`;
  }).join('');
}

function renderBiblio(mat) {
  const books = (mat.bibBasicas || []).map((bk, bi) => {
    const caps = getBookCaps(mat.id, bi);
    const done = caps.filter(Boolean).length;
    const pct = bk.caps.length ? Math.round(done / bk.caps.length * 100) : 0;
    const chaps = bk.caps.map((c, ci) => {
      const checked = caps[ci] === true;
      return `<div class="chap-item ${checked?'read':''}">
        <input class="cap-check" type="checkbox" ${checked?'checked':''} 
               data-mid="${mat.id}" data-bi="${bi}" data-ci="${ci}">
        <span class="chap-label">${c}</span>
      </div>`;
    }).join('');
    
    return `<div class="book-card" data-book="${mat.id}-${bi}">
      <div class="book-head" data-toggle-book="${mat.id}-${bi}">
        <div class="book-dot"></div>
        <span class="book-name">${bk.name}</span>
        <div class="book-right">
          <span class="book-pct-badge" data-book-pct="${mat.id}-${bi}">${pct}%</span>
          <svg class="bk-chev" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="3,5 7,9 11,5"/>
          </svg>
        </div>
      </div>
      <div class="book-prog-bar">
        <div class="book-prog-fill" data-book-bar="${mat.id}-${bi}" style="width:${pct}%"></div>
      </div>
      <div class="book-body">
        <div class="chapters-list" data-caps="${mat.id}-${bi}">${chaps}</div>
      </div>
    </div>`;
  }).join('');
  
  const comp = (mat.bibComp || []).map(c => `<div class="comp-entry">${c}</div>`).join('') 
    || '<div class="comp-entry">Sin referencias complementarias</div>';
  
  return `<div class="sec-label">Bibliografía Básica</div>
    <div style="padding:0 1rem">${books}</div>
    <div class="comp-section" data-comp="${mat.id}">
      <div class="comp-toggle" data-toggle-comp="${mat.id}">
        <span class="comp-title">Complementaria · ${mat.bibComp?.length||0}</span>
        <svg class="comp-chev" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14">
          <polyline points="3,5 7,9 11,5"/>
        </svg>
      </div>
      <div class="comp-body">${comp}</div>
    </div>`;
}

function renderSubsecuentes(mat) {
  const tags = (mat.subsecuentes || []).map(name => {
    const found = CURRICULUM.flatMap(s => s.materias).find(m => m.name === name);
    if (found) return `<span class="subsec-tag" data-nav="${found.id}">${name} <span class="subsec-tag-arrow">↗</span></span>`;
    return `<span class="subsec-tag no-link">${name}</span>`;
  }).join('');
  
  return `<div class="subsec-block">
    <div class="subsec-label">Materias Subsecuentes</div>
    <div class="subsec-tags">${tags||'<span class="subsec-tag no-link">—</span>'}</div>
  </div>`;
}

function renderCard(mat) {
  const pct = getMateriaProgress(mat);
  const offset = 107 - (107 * pct / 100);
  
  return `<div class="card" id="${buildMateriaId(mat.id)}" data-materia="${mat.id}">
    <div class="card-head" data-toggle-card="${mat.id}">
      <div class="card-icon">
        <img src="${mat.icon||'https://img.icons8.com/fluency/48/book.png'}" alt="${mat.name}" 
             onerror="this.src='https://img.icons8.com/fluency/48/book.png'">
      </div>
      <div class="card-info">
        <div class="card-name">${mat.name}</div>
        <div class="card-meta">
          <span class="meta-pill">Clave <b>${mat.clave}</b></span>
          <span class="meta-pill"><b>${mat.creditos}</b> créditos</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem;flex-shrink:0;">
        <div class="circ-wrap">
          <svg class="circ-svg" viewBox="0 0 46 46">
            <circle class="circ-bg" cx="23" cy="23" r="17"/>
            <circle class="circ-fg" cx="23" cy="23" r="17" style="stroke-dashoffset:${offset}"/>
          </svg>
          <span class="circ-num">${pct}%</span>
        </div>
        <svg class="chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="5,7 10,13 15,7"/>
        </svg>
      </div>
    </div>
    <div class="card-body">
      <div class="tabs">
        <div class="tab active" data-tab-target="${mat.id}-temario">Temario</div>
        <div class="tab" data-tab-target="${mat.id}-biblio">Bibliografía</div>
      </div>
      <div class="tab-panel active" id="${mat.id}-temario">${renderTemario(mat)}</div>
      <div class="tab-panel" id="${mat.id}-biblio" style="padding:0">${renderBiblio(mat)}</div>
      ${renderSubsecuentes(mat)}
    </div>
  </div>`;
}

function renderOptativaCarousel(sem) {
  const cs = getCarousel(sem);
  const available = getAvailableOpts(sem);
  const total = available.length;
  
  const itemsHtml = available.map((o, i) => {
    const mono = o.name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const iconContent = o.icon
      ? `<img src="${o.icon}" alt="${o.name}" style="width:100%;height:100%;object-fit:cover;border-radius:0;" 
           onerror="this.style.display='none';this.nextSibling.style.display='flex'">
         <span style="display:none;width:100%;height:100%;align-items:center;justify-content:center;">${mono}</span>`
      : mono;
    
    return `<div class="opt-item${i===cs.selectedIdx?' selected':''}" data-opt-item="${sem}-${i}">
      <div class="opt-item-icon" style="overflow:hidden;border-radius:0;border:none;">${iconContent}</div>
      <div class="opt-item-info">
        <div class="opt-item-name">${o.name}</div>
        <div class="opt-item-meta">
          <span class="meta-pill">Optativa</span>
          <span class="meta-pill"><b>${o.creditos}</b> créditos</span>
        </div>
      </div>
    </div>`;
  }).join('');
  
  const hint = total ? `<span class="opt-carousel-pos" id="opt-pos-${sem}">${total} opciones · toca para seleccionar</span>` : '';
  
  return `<div class="opt-carousel-wrap${cs.open?' open':''}" id="opt-carousel-${sem}">
    <div class="opt-carousel-inner">
      <div class="opt-carousel-viewport" id="opt-vp-${sem}">
        <div class="opt-carousel-list" id="opt-list-${sem}">
          ${total ? itemsHtml : '<div style="padding:1.5rem;text-align:center;color:var(--ink3);font-size:12px;">Sin opciones disponibles</div>'}
        </div>
      </div>
      <div class="opt-carousel-footer">${hint}</div>
    </div>
  </div>`;
}

function renderOptativaSlot(sem, slot) {
  const chosen = getOptSlot(sem, slot);
  if (!chosen) return '';
  
  const enriched = enrichOptativa(chosen);
  const mono = enriched.name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const mat = {
    id: `opt_${sem}_${slot}`,
    name: enriched.name,
    clave: 'OPT',
    creditos: enriched.creditos,
    temario: enriched.temario || [],
    bibBasicas: enriched.bibBasicas || [],
    bibComp: enriched.bibComp || [],
    subsecuentes: enriched.subsecuentes || []
  };
  
  const pct = getMateriaProgress(mat);
  const offset = 107 - (107 * pct / 100);
  
  const iconHtml = enriched.icon
    ? `<div style="width:44px;height:44px;border-radius:0;overflow:hidden;flex-shrink:0;border:0;">
         <img src="${enriched.icon}" alt="${enriched.name}" style="width:100%;height:100%;object-fit:cover;" 
              onerror="this.parentElement.innerHTML='<span style=\'display:flex;width:100%;height:100%;align-items:center;justify-content:center;background:rgba(94,207,190,0.07);font-family:Playfair Display,serif;font-size:1.05rem;font-weight:900;color:var(--gold);\'>${mono}</span>'">
       </div>`
    : `<div style="width:44px;height:44px;background:rgba(94,207,190,0.07);border:0;border-radius:0;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:1.05rem;font-weight:900;color:var(--gold);flex-shrink:0;">${mono}</div>`;
  
  const temarioHtml = renderTemario(mat);
  const biblioHtml = renderBiblio(mat);
  const subsecHtml = renderSubsecuentes(mat);
  const changeRow = `<div class="opt-change-row"><button class="opt-change-btn" data-opt-remove="${sem}-${slot}">Cambiar / Eliminar</button></div>`;
  
  return `<div class="card" id="${buildMateriaId(mat.id)}" data-materia="${mat.id}">
    <div class="card-head" data-toggle-card="${mat.id}">
      ${iconHtml}
      <div class="card-info">
        <div class="card-name">${mat.name}</div>
        <div class="card-meta">
          <span class="meta-pill">Optativa</span>
          <span class="meta-pill"><b>${mat.creditos}</b> créditos</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:0.5rem;flex-shrink:0;">
        <div class="circ-wrap">
          <svg class="circ-svg" viewBox="0 0 46 46">
            <circle class="circ-bg" cx="23" cy="23" r="17"/>
            <circle class="circ-fg" cx="23" cy="23" r="17" style="stroke-dashoffset:${offset}"/>
          </svg>
          <span class="circ-num">${pct}%</span>
        </div>
        <svg class="chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="5,7 10,13 15,7"/>
        </svg>
      </div>
    </div>
    <div class="card-body">
      <div class="tabs">
        <div class="tab active" data-tab-target="${mat.id}-temario">Temario</div>
        <div class="tab" data-tab-target="${mat.id}-biblio">Bibliografía</div>
      </div>
      <div class="tab-panel active" id="${mat.id}-temario">${temarioHtml}</div>
      <div class="tab-panel" id="${mat.id}-biblio" style="padding:0">${biblioHtml}</div>
      ${subsecHtml}
      ${changeRow}
    </div>
  </div>`;
}

function renderSemester(sem, idx) {
  const pct = getSemPct(sem);
  const tc = sem.materias.reduce((s, m) => s + m.creditos, 0);
  const optCount = sem.optativas || 0;
  const chosenCards = [];
  
  for (let i = 0; i < optCount; i++) {
    chosenCards.push(renderOptativaSlot(sem.semestre, i));
  }
  
  const filledCount = chosenCards.filter(c => c).length;
  const remainingSlots = optCount - filledCount;
  let addSection = '';
  
  if (remainingSlots > 0) {
    const cs = getCarousel(sem.semestre);
    addSection = `<button class="add-optativa-btn${cs.open?' open':''}" data-toggle-carousel="${sem.semestre}">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8">
        <polyline points="3,5 7,9 11,5"/>
      </svg>
      Añadir optativa · ${remainingSlots} slot${remainingSlots>1?'s':''} disponible${remainingSlots>1?'s':''}
    </button>${renderOptativaCarousel(sem.semestre)}`;
  }
  
  let content = '';
  if (sem.materias.length || optCount) {
    const cards = sem.materias.map(renderCard).join('');
    content = `<div class="sem-grid">${cards}${chosenCards.join('')}</div>${addSection}`;
  } else {
    content = `<div class="empty-card">· · · por cursar · · ·</div>`;
  }
  
  const totalCreditos = tc + optCount * 10;
  
  return `<section class="semester" id="semester-${sem.semestre}">
    <div class="sem-header">
      <span class="sem-title">${sem.titulo}</span>
      ${totalCreditos ? `<span class="sem-credits-badge">${totalCreditos} créditos</span>` : ''}
    </div>
    <div class="sem-prog-row">
      <div class="sem-bar-track">
        <div class="sem-bar-fill" id="sem-fill-${idx}" style="width:${pct}%"></div>
      </div>
      <span class="sem-pct" id="sem-pct-${idx}">${pct}%</span>
    </div>
    ${content}
  </section>`;
}

function updateAllUI() {
  document.getElementById('global-pct').textContent = `${getGlobalPct()}%`;
  
  CURRICULUM.forEach((sem, i) => {
    const pct = getSemPct(sem);
    const fb = document.getElementById(`sem-fill-${i}`);
    const fp = document.getElementById(`sem-pct-${i}`);
    if (fb) fb.style.width = `${pct}%`;
    if (fp) fp.textContent = `${pct}%`;
    
    sem.materias.forEach(mat => {
      const p = getMateriaProgress(mat);
      const fg = document.querySelector(`#${buildMateriaId(mat.id)} .circ-fg`);
      if (fg) fg.style.strokeDashoffset = 107 - (107 * p / 100);
      const cn = document.querySelector(`#${buildMateriaId(mat.id)} .circ-num`);
      if (cn) cn.textContent = `${p}%`;
    });
  });
  
  CURRICULUM.flatMap(s => s.materias).forEach(mat => {
    (mat.bibBasicas || []).forEach((bk, bi) => {
      const caps = getBookCaps(mat.id, bi);
      const done = caps.filter(Boolean).length;
      const pct = bk.caps.length ? Math.round(done / bk.caps.length * 100) : 0;
      const pe = document.querySelector(`[data-book-pct="${mat.id}-${bi}"]`);
      const be = document.querySelector(`[data-book-bar="${mat.id}-${bi}"]`);
      if (pe) pe.textContent = `${pct}%`;
      if (be) be.style.width = `${pct}%`;
    });
  });
}

function rerenderSemester(semNum) {
  const idx = CURRICULUM.findIndex(s => s.semestre === semNum);
  if (idx < 0) return;
  const sec = document.getElementById(`semester-${semNum}`);
  if (!sec) return;
  sec.outerHTML = renderSemester(CURRICULUM[idx], idx);
}