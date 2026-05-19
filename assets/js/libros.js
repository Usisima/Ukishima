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

/* ── NOTE ART SYMBOLS (álbum cover icon) ─────── */
const NOTE_ART = {
  def: '≝', teo: '★', cor: '∴', dem: '∎', eje: 'ε', obs: '⊙',
};

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

/* ── READER (PDF overlay) ─────────────────────── */
const Reader = {
  open(bookId) {
    const info = PDF[bookId];
    if (!info) return;
    if (!info.driveId) {
      alert('El PDF aún no está disponible para este libro.');
      return;
    }
    const src = `https://drive.google.com/file/d/${info.driveId}/preview`;
    const url = `https://drive.google.com/file/d/${info.driveId}/view`;
    const overlay = document.getElementById('pdf-overlay');
    const frame   = document.getElementById('pdf-frame');
    const title   = document.getElementById('pdf-title');
    const link    = document.getElementById('pdf-newtab-btn');
    title.textContent = info.title;
    link.href = url;
    frame.src = src;
    document.getElementById('pdf-loading').style.display = 'block';
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    frame.onload = () => {
      document.getElementById('pdf-loading').style.display = 'none';
    };
  },
  close() {
    const overlay = document.getElementById('pdf-overlay');
    const frame   = document.getElementById('pdf-frame');
    overlay.style.display = 'none';
    frame.src = '';
    document.body.style.overflow = '';
  },
};

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

    const hasPdf = PDF[b.id] && PDF[b.id].driveId;
    const pdfBtnClass = hasPdf ? '' : 'disabled';
    const pdfBtnTitle = hasPdf ? 'Leer PDF' : 'PDF no disponible';

    const chaptersHtml = (b.chapters || []).map((ch, ci) => {
      const key = `${b.id}_ch${ci}`;
      const notesHtml = ch.notes.map((note, ni) => {
        const nkey = `${key}_n${ni}`;
        const nfaved = isFavNote(nkey) ? 'faved' : '';
        const nfavIcon = isFavNote(nkey) ? '♥' : '♡';
        const artSym = NOTE_ART[note.type] || '·';
        return `
        <div class="note-item" data-type="${esc(note.type)}" data-nkey="${esc(nkey)}">
          <div class="note-header">
            <div class="note-art" aria-hidden="true">${artSym}</div>
            <div class="note-meta">
              <div class="note-label">${esc(note.label)}</div>
              <div class="note-type-badge">${esc(NOTE_LABELS[note.type] || note.type)}</div>
            </div>
            <button class="note-fav-btn ${nfaved}"
              onclick="A.toggleFavNote('${esc(nkey)}',this)"
              aria-label="Guardar nota">
              ${nfavIcon}
            </button>
          </div>
          <div class="note-tex" data-tex="${esc(note.tex)}">${esc(note.tex)}</div>
        </div>`;
      }).join('');

      return `
      <div class="chapter-item" data-ch-key="${esc(key)}">
        <div class="chapter-head">
          <span class="chapter-num">Ch.${ch.num}</span>
          <span class="chapter-title">${esc(ch.title)}</span>
          <span class="chapter-meta">${ch.notes.length} nota${ch.notes.length !== 1 ? 's' : ''}</span>
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
              <button class="btn-pdf ${pdfBtnClass}" onclick="Reader.open('${esc(b.id)}')" ${hasPdf ? '' : 'disabled'}>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                ${esc(pdfBtnTitle)}
              </button>
            </div>
          </div>
        </div>

        <div class="book-chapters-wrap">
          <div class="chapters-label">Contenido — ${b.chapters.length} capítulo${b.chapters.length !== 1 ? 's' : ''}</div>
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

    const results = [];
    for (const subj of LIBRARY) {
      for (const b of subj.books) {
        const titleMatch = b.title.toLowerCase().includes(q);
        const authorMatch = b.author.toLowerCase().includes(q);
        const subjMatch = subj.subject.toLowerCase().includes(q);
        if (titleMatch || authorMatch || subjMatch) {
          results.push({ book: b, subject: subj.subject, color: subj.color });
        }
      }
    }

    if (!results.length) {
      main.innerHTML = `<div class="search-results"><div class="search-empty"><strong>Sin resultados</strong>Intenta con otro término.</div></div>`;
      return;
    }

    main.innerHTML = `<div class="search-results">
      <div class="search-result-group-label">${results.length} libro${results.length !== 1 ? 's' : ''} encontrado${results.length !== 1 ? 's' : ''}</div>
      ${results.map(({ book: b, subject, color }) => `
        <div class="search-book-card" onclick="Nav.go('book','${esc(b.id)}')">
          <div class="search-book-cover">
            ${coverDiv(color, b.title)}
          </div>
          <div class="search-book-info">
            <div class="search-book-title">${esc(b.title)}</div>
            <div class="search-book-subject">${esc(subject)}</div>
          </div>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="color:var(--ink3);flex-shrink:0"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      `).join('')}
    </div>`;
  },

  /* ── FAVS ────────────────────────────────────── */
  favs() {
    document.getElementById('header-title').textContent = 'Bibliografía';
    const main = document.getElementById('lib-main');

    const favBookIds = [...S.favBooks];
    if (!favBookIds.length) {
      main.innerHTML = `<div class="favs-section"><div class="lib-empty"><div class="lib-empty-icon">♡</div><p>Aún no tienes libros favoritos.<br>Toca ♡ en un libro para guardarlo.</p></div></div>`;
      return;
    }

    const rows = favBookIds.map(id => {
      const found = findBook(id);
      if (!found) return '';
      const { book: b, subject, color } = found;
      return `
        <div class="fav-book-row" onclick="Nav.go('book','${esc(b.id)}')">
          <div class="fav-book-cover">
            ${coverDiv(color, b.title)}
          </div>
          <div class="fav-book-info">
            <div class="fav-book-title">${esc(b.title)}</div>
            <div class="fav-book-author">${esc(b.author)}</div>
          </div>
          <svg class="fav-book-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </div>`;
    }).join('');

    main.innerHTML = `<div class="favs-section">
      <div class="favs-label">${favBookIds.length} libro${favBookIds.length !== 1 ? 's' : ''} guardado${favBookIds.length !== 1 ? 's' : ''}</div>
      ${rows}
    </div>`;
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
    btn.textContent = faved ? '♥' : '♡';
    btn.classList.toggle('faved', faved);
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

    window.scrollTo(0, 0);
  },
};

/* ── INIT ─────────────────────────────────────── */
(function init() {
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

  /* PDF close */
  document.getElementById('pdf-close-btn').addEventListener('click', () => Reader.close());

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('pdf-overlay');
      if (overlay.style.display !== 'none') Reader.close();
    }
  });
})();
