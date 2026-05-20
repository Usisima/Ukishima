/* ═══════════════════════════════════════════════
   libros.js  —  Bibliografía · UNAM FC
   ═══════════════════════════════════════════════ */

/* ── STORAGE ──────────────────────────────────── */
const SK_FAVBOOKS = 'lib_fav_books_v1';
const SK_FAVNOTES = 'lib_fav_notes_v1';
const SK_RECENT   = 'lib_recent_v1';

function loadSet(k)    { try { return new Set(JSON.parse(localStorage.getItem(k) || '[]')); } catch { return new Set(); } }
function saveSet(k, s) { localStorage.setItem(k, JSON.stringify([...s])); }
function loadArr(k)    { try { return JSON.parse(localStorage.getItem(k) || '[]'); } catch { return []; } }
function saveArr(k, a) { localStorage.setItem(k, JSON.stringify(a)); }

/* ── STATE ────────────────────────────────────── */
const S = {
  view: 'home',           // 'home' | 'book' | 'search' | 'favs'
  bookId: null,
  openChapters: new Set(),
  favBooks: loadSet(SK_FAVBOOKS),
  favNotes: loadSet(SK_FAVNOTES),
  recent: loadArr(SK_RECENT),
  query: '',
};

/* ── NOTE TYPE LABELS ─────────────────────────── */
const NOTE_LABELS = {
  def: 'Definición', teo: 'Teorema', cor: 'Corolario',
  dem: 'Demostración', eje: 'Ejemplo', obs: 'Observación',
};

const DISC_TOTAL = 52; // d1.jpg … d52.jpg

/* ── HELPERS ──────────────────────────────────── */
function isFavBook(id) { return S.favBooks.has(id); }
function toggleFavBook(id) {
  S.favBooks.has(id) ? S.favBooks.delete(id) : S.favBooks.add(id);
  saveSet(SK_FAVBOOKS, S.favBooks);
}

function isFavNote(key) { return S.favNotes.has(key); }
function toggleFavNote(key) {
  S.favNotes.has(key) ? S.favNotes.delete(key) : S.favNotes.add(key);
  saveSet(SK_FAVNOTES, S.favNotes);
}

function addRecent(bookId) {
  S.recent = [bookId, ...S.recent.filter(id => id !== bookId)].slice(0, 20);
  saveArr(SK_RECENT, S.recent);
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Cover background element */
function coverDiv(color, titleText) {
  return `<div class="book-cover-bg" style="background:${color}">
    <div class="book-cover-title">${esc(titleText)}</div>
  </div>`;
}

/* ── KATEX RENDER ─────────────────────────────── */
function renderKatex(el) {
  if (!el || typeof renderMathInElement === 'undefined') return;
  try {
    renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
      ],
      throwOnError: false,
      strict: false,
    });
  } catch(e) { /* silent */ }
}

/* ── FIND NOTE BY KEY ─────────────────────────── */
function findNote(nkey) {
  const m = nkey.match(/^(.+)_ch(\d+)_n(\d+)$/);
  if (!m) return null;
  const [, bookId, ci, ni] = m;
  const found = findBook(bookId);
  if (!found) return null;
  const ch = found.book.chapters?.[+ci];
  const note = ch?.notes?.[+ni];
  if (!note) return null;
  return { note, book: found.book, subject: found.subject, color: found.color, chTitle: ch.title };
}

/* ── RENDER ───────────────────────────────────── */
const R = {

  /* ── HOME: list subjects with horizontal book scroll ── */
  home() {
    const main = document.getElementById('lib-main');
    if (!LIBRARY.length) {
      main.innerHTML = `<div class="lib-empty"><div class="lib-empty-icon">📚</div><p>No hay libros disponibles.</p></div>`;
      return;
    }
    main.innerHTML = LIBRARY.map((subj, si) => `
      <div class="lib-subject-section" style="animation-delay:${si * 0.04}s">
        <div class="lib-subject-header">
          <div class="lib-subject-name">${esc(subj.subject)}</div>
          <div class="lib-subject-count">${subj.books.length} libro${subj.books.length !== 1 ? 's' : ''}</div>
        </div>
        <div class="lib-book-scroll">
          ${subj.books.map(b => R._bookCard(b, subj.color)).join('')}
        </div>
        ${si < LIBRARY.length - 1 ? '<div class="subject-divider"></div>' : ''}
      </div>
    `).join('');
  },

  _bookCard(b, color) {
    const faved = isFavBook(b.id) ? 'faved' : '';
    const favIcon = isFavBook(b.id) ? '♥' : '♡';
    return `
      <div class="book-card" onclick="Nav.go('book','${esc(b.id)}')">
        <div class="book-cover">
          ${coverDiv(color, b.title)}
          <button class="book-fav-dot ${faved}"
            onclick="event.stopPropagation();A.toggleFavBook('${esc(b.id)}',this)"
            aria-label="${isFavBook(b.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}">
            ${favIcon}
          </button>
        </div>
        <div class="book-card-title">${esc(b.title)}</div>
        <div class="book-card-author">${esc(b.author)}</div>
      </div>
    `;
  },

  /* ── BOOK DETAIL ────────────────────────────── */
  book(bookId) {
    const found = findBook(bookId);
    if (!found) { Nav.go('home'); return; }
    const { book: b, subject, color } = found;

    document.getElementById('header-title').textContent = b.title;

    let discIdx = 0;
    const chaptersHtml = (b.chapters || []).map((ch, ci) => {
      const key = `${b.id}_ch${ci}`;
      const notesHtml = ch.notes.map((note, ni) => {
        if (note.type === 'sublabel') {
          return `<div class="note-sublabel"><span>${esc(note.label)}</span></div>`;
        }
        const nkey = `${key}_n${ni}`;
        const nfaved = isFavNote(nkey) ? 'faved' : '';
        const nfavIcon = isFavNote(nkey) ? '♥' : '♡';
        const imgN = (discIdx % DISC_TOTAL) + 1;
        discIdx++;
        const hasDem = !!note.dem;
        const demSection = hasDem ? `
          <div class="note-dem">
            <div class="note-dem-label">Demostración</div>
            <div class="note-dem-tex">${esc(note.dem)}</div>
          </div>` : '';
        const chevron = hasDem ? `<svg class="dem-chev" viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>` : '';
        const favStop = hasDem ? 'event.stopPropagation();' : '';
        return `
        <div class="note-item${hasDem ? ' has-dem' : ''}" data-type="${esc(note.type)}" data-nkey="${esc(nkey)}"${hasDem ? ' onclick="A.toggleDem(this)"' : ''}>
          <div class="note-header">
            <div class="note-art" aria-hidden="true"><img src="assets/images/d${imgN}.jpg" alt=""></div>
            <div class="note-meta">
              <div class="note-label">${esc(note.label)}</div>
              <div class="note-type-badge">${esc(NOTE_LABELS[note.type] || note.type)}${chevron}</div>
            </div>
            <button class="note-fav-btn ${nfaved}"
              onclick="${favStop}A.toggleFavNote('${esc(nkey)}',this)"
              aria-label="Guardar nota">
              ${nfavIcon}
            </button>
          </div>
          <div class="note-tex">${esc(note.tex)}</div>
          ${demSection}
        </div>`;
      }).join('');

      return `
      <div class="chapter-item" data-ch-key="${esc(key)}">
        <div class="chapter-head">
          <span class="chapter-num">${ch.num}</span>
          <span class="chapter-title">${esc(ch.title)}</span>
        </div>
        <div class="chapter-body" id="chbody-${esc(key)}">
          ${notesHtml}
        </div>
      </div>`;
    }).join('');

    const main = document.getElementById('lib-main');
    main.innerHTML = `
      <div class="book-detail">

        <div class="book-hero-banner">
          <div class="hero-bg" style="background:${color}"></div>
          <div class="hero-bands" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div class="hero-watermark" aria-hidden="true">${esc(subject)}</div>
          <div class="hero-row">
            <div class="hero-cover">
              ${coverDiv(color, b.title)}
            </div>
            <div class="hero-info">
              <div class="hero-subject-label">${esc(subject)}</div>
              <div class="hero-title">${esc(b.title)}</div>
              <div class="hero-author">${esc(b.author)}</div>
              <div class="hero-edition">${esc(b.edition || '')}</div>
            </div>
            <button class="hero-fav-btn ${isFavBook(b.id) ? 'faved' : ''}" onclick="A.toggleFavBook('${esc(b.id)}',this)" aria-label="${isFavBook(b.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}">
              ${isFavBook(b.id) ? '♥' : '♡'}
            </button>
          </div>
        </div>

        <div class="book-chapters-wrap">
          ${chaptersHtml}
        </div>

      </div>
    `;

    renderKatex(main);
  },

  /* ── SEARCH ─────────────────────────────────── */
  search() {
    document.getElementById('header-title').textContent = 'Bibliografía';
    const main = document.getElementById('lib-main');
    const q = S.query.trim().toLowerCase();
    if (!q) {
      main.innerHTML = `<div class="search-results"><div class="search-empty"><strong>Buscar</strong>Escribe para buscar libros, autores o notas.</div></div>`;
      return;
    }

    const bookResults = [];
    const noteResults = [];

    for (const subj of LIBRARY) {
      for (const b of subj.books) {
        if (b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            subj.subject.toLowerCase().includes(q)) {
          bookResults.push({ book: b, subject: subj.subject, color: subj.color });
        }
        for (const ch of (b.chapters || [])) {
          for (const note of (ch.notes || [])) {
            if (note.type === 'sublabel') continue;
            if ((note.label || '').toLowerCase().includes(q) ||
                (note.tex  || '').toLowerCase().includes(q)) {
              noteResults.push({ note, book: b, subject: subj.subject, color: subj.color, chTitle: ch.title });
            }
          }
        }
      }
    }

    if (!bookResults.length && !noteResults.length) {
      main.innerHTML = `<div class="search-results"><div class="search-empty"><strong>Sin resultados</strong>Intenta con otro término.</div></div>`;
      return;
    }

    const chevronSvg = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="color:var(--ink3);flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>`;

    let html = '<div class="search-results">';

    if (bookResults.length) {
      html += `<div class="search-result-group-label">${bookResults.length} libro${bookResults.length !== 1 ? 's' : ''}</div>`;
      html += bookResults.map(({ book: b, subject, color }) => `
        <div class="search-book-card" onclick="Nav.go('book','${esc(b.id)}')">
          <div class="search-book-cover">${coverDiv(color, b.title)}</div>
          <div class="search-book-info">
            <div class="search-book-title">${esc(b.title)}</div>
            <div class="search-book-subject">${esc(subject)}</div>
          </div>
          ${chevronSvg}
        </div>`).join('');
    }

    if (noteResults.length) {
      html += `<div class="search-result-group-label${bookResults.length ? ' search-result-group-label--spaced' : ''}">${noteResults.length} nota${noteResults.length !== 1 ? 's' : ''}</div>`;
      html += noteResults.map(({ note, book: b, subject, color }) => `
        <div class="search-note-card" onclick="Nav.go('book','${esc(b.id)}')" data-type="${esc(note.type)}">
          <div class="search-note-type-dot" data-type="${esc(note.type)}">${esc(NOTE_LABELS[note.type] || note.type)}</div>
          <div class="search-note-info">
            <div class="search-note-label">${esc(note.label)}</div>
            <div class="search-note-source">${esc(b.title)} · ${esc(subject)}</div>
          </div>
          ${chevronSvg}
        </div>`).join('');
    }

    html += '</div>';
    main.innerHTML = html;
    renderKatex(main);
  },

  /* ── FAVS ────────────────────────────────────── */
  favs() {
    document.getElementById('header-title').textContent = 'Bibliografía';
    const main = document.getElementById('lib-main');

    const favNoteKeys = [...S.favNotes];
    const favBookIds  = [...S.favBooks];

    if (!favNoteKeys.length && !favBookIds.length) {
      main.innerHTML = `<div class="favs-section"><div class="lib-empty"><div class="lib-empty-icon">♡</div><p>Aún no tienes nada guardado.<br>Toca ♡ en un libro o nota para guardarlo.</p></div></div>`;
      return;
    }

    let html = '<div class="favs-section">';

    if (favBookIds.length) {
      html += `<div class="favs-label">${favBookIds.length} libro${favBookIds.length !== 1 ? 's' : ''} guardado${favBookIds.length !== 1 ? 's' : ''}</div>`;
      html += favBookIds.map(id => {
        const found = findBook(id);
        if (!found) return '';
        const { book: b, color } = found;
        return `
        <div class="fav-book-row" onclick="Nav.go('book','${esc(b.id)}')">
          <div class="fav-book-cover">${coverDiv(color, b.title)}</div>
          <div class="fav-book-info">
            <div class="fav-book-title">${esc(b.title)}</div>
            <div class="fav-book-author">${esc(b.author)}</div>
          </div>
          <svg class="fav-book-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>`;
      }).join('');
    }

    if (favNoteKeys.length) {
      html += `<div class="favs-label${favBookIds.length ? ' favs-label--spaced' : ''}">${favNoteKeys.length} nota${favNoteKeys.length !== 1 ? 's' : ''} guardada${favNoteKeys.length !== 1 ? 's' : ''}</div>`;
      html += favNoteKeys.map(nkey => {
        const found = findNote(nkey);
        if (!found) return '';
        const { note, book: b, color } = found;
        const hasDem = !!note.dem;
        const chevron = hasDem ? `<svg class="dem-chev" viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>` : '';
        const demSection = hasDem ? `<div class="note-dem"><div class="note-dem-label">Demostración</div><div class="note-dem-tex">${esc(note.dem)}</div></div>` : '';
        const favStop = hasDem ? 'event.stopPropagation();' : '';
        return `
        <div class="note-item${hasDem ? ' has-dem' : ''}" data-type="${esc(note.type)}" data-nkey="${esc(nkey)}"${hasDem ? ' onclick="A.toggleDem(this)"' : ''}>
          <div class="note-header">
            <div class="note-meta">
              <div class="note-label">${esc(note.label)}</div>
              <div class="note-type-badge">${esc(NOTE_LABELS[note.type] || note.type)}${chevron}</div>
              <div class="fav-note-source" onclick="event.stopPropagation();Nav.go('book','${esc(b.id)}')">${esc(b.title)}</div>
            </div>
            <button class="note-fav-btn faved"
              onclick="${favStop}A.toggleFavNote('${esc(nkey)}',this)"
              aria-label="Quitar de favoritos">
              ♥
            </button>
          </div>
          <div class="note-tex">${esc(note.tex)}</div>
          ${demSection}
        </div>`;
      }).join('');
    }

    html += '</div>';
    main.innerHTML = html;
    renderKatex(main);
  },
};

/* ── ACTIONS ──────────────────────────────────── */
const A = {
  toggleFavBook(id, btn) {
    toggleFavBook(id);
    const faved = isFavBook(id);
    btn.textContent = faved ? '♥' : '♡';
    btn.classList.toggle('faved', faved);
    btn.setAttribute('aria-label', faved ? 'Quitar de favoritos' : 'Añadir a favoritos');
  },

  toggleFavNote(key, btn) {
    toggleFavNote(key);
    const faved = isFavNote(key);
    if (S.view === 'favs') {
      R.favs();
      return;
    }
    btn.textContent = faved ? '♥' : '♡';
    btn.classList.toggle('faved', faved);
  },

  toggleDem(noteEl) {
    noteEl.classList.toggle('dem-open');
  },

  search: (() => {
    let timer = null;
    return (q) => {
      S.query = q;
      clearTimeout(timer);
      timer = setTimeout(() => R.search(), 180);
    };
  })(),
};

/* ── NAVIGATION ───────────────────────────────── */
const Nav = {
  go(view, bookId) {
    S.view = view;
    S.bookId = bookId || null;

    if (view === 'book' && bookId) {
      addRecent(bookId);
      history.pushState({ view, bookId }, '', `#libro/${bookId}`);
    } else {
      history.pushState({ view }, '', view === 'home' ? '#' : `#${view}`);
    }

    Nav._render();
  },

  _render() {
    /* tabs */
    document.querySelectorAll('.lib-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.view === S.view);
    });

    /* back button */
    const backBtn = document.getElementById('lib-back-btn');
    backBtn.style.display = S.view === 'book' ? 'flex' : 'none';

    /* search bar */
    const searchBar = document.getElementById('lib-search-bar');
    searchBar.style.display = S.view === 'search' ? 'flex' : 'none';
    if (S.view === 'search') {
      setTimeout(() => document.getElementById('lib-search-input').focus(), 50);
    }

    /* render main content */
    if (S.view === 'home')   R.home();
    if (S.view === 'book')   R.book(S.bookId);
    if (S.view === 'search') R.search();
    if (S.view === 'favs')   R.favs();

    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  },
};

/* ── INIT ─────────────────────────────────────── */
(function init() {
  history.scrollRestoration = 'manual';
  /* handle initial URL hash */
  const hash = location.hash;
  if (hash.startsWith('#libro/')) {
    const id = hash.replace('#libro/', '');
    if (id) { S.view = 'book'; S.bookId = id; }
  } else if (hash === '#favs') {
    S.view = 'favs';
  } else if (hash === '#search') {
    S.view = 'search';
  }

  Nav._render();

  /* tab clicks */
  document.getElementById('lib-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.lib-tab');
    if (!tab) return;
    const v = tab.dataset.view;
    if (v === S.view && v !== 'search') return;
    S.query = '';
    document.getElementById('lib-search-input').value = '';
    document.getElementById('lib-search-clear').style.display = 'none';
    Nav.go(v);
  });

  /* back button */
  document.getElementById('lib-back-btn').addEventListener('click', () => {
    history.back();
  });

  /* browser back/forward */
  window.addEventListener('popstate', e => {
    const state = e.state;
    if (!state) { S.view = 'home'; S.bookId = null; }
    else { S.view = state.view || 'home'; S.bookId = state.bookId || null; }
    Nav._render();
  });

  /* search input */
  document.getElementById('lib-search-input').addEventListener('input', e => {
    const q = e.target.value;
    document.getElementById('lib-search-clear').style.display = q ? 'flex' : 'none';
    A.search(q);
  });

  document.getElementById('lib-search-clear').addEventListener('click', () => {
    const inp = document.getElementById('lib-search-input');
    inp.value = '';
    inp.focus();
    document.getElementById('lib-search-clear').style.display = 'none';
    A.search('');
  });

  /* sync sticky tops to real header height */
  function fixStickyTops() {
    const hdrH  = document.getElementById('lib-header').offsetHeight;
    const tabsEl = document.querySelector('.lib-tabs-bar');
    tabsEl.style.top = hdrH + 'px';
    const tabsH = tabsEl.offsetHeight;
    document.getElementById('lib-search-bar').style.top = (hdrH + tabsH) + 'px';
  }
  fixStickyTops();
  window.addEventListener('resize', fixStickyTops);
})();
