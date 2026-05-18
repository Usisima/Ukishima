/* ============================================================
   MATH SITE — Scripts Globales
   Archivo: js/main.js
   Uso: Enlazar al FINAL del <body> en TODAS las páginas
   <script src="../js/main.js"></script>  ← subpáginas
   <script src="js/main.js"></script>     ← index.html
   ============================================================ */

/* ── Marcar enlace activo en el nav ── */
(function markActiveNav() {
  const links = document.querySelectorAll('.nav__links a');
  const current = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) link.classList.add('active');
  });
})();


/* ── Efecto parallax / blur en el nav al hacer scroll ── */
(function navScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.borderBottomColor = 'var(--accent-dim)';
    } else {
      nav.style.borderBottomColor = 'var(--border)';
    }
  }, { passive: true });
})();


/* ── Animación de entrada para elementos .reveal ── */
(function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => observer.observe(el));
})();


/* ── Cursor matemático personalizado ── */
(function mathCursor() {
  const symbols = ['∂', '∑', '∫', '∞', '∇', 'π', 'Δ', 'λ', '∈', '≡'];
  const cursor = document.createElement('div');
  cursor.id = 'math-cursor';
  cursor.style.cssText = `
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--accent, #b8a06a);
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s;
    user-select: none;
  `;
  document.body.appendChild(cursor);

  let symbolIndex = 0;
  let timeout;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    cursor.textContent = symbols[symbolIndex % symbols.length];
    cursor.style.opacity = '0.5';

    clearTimeout(timeout);
    timeout = setTimeout(() => { cursor.style.opacity = '0'; }, 800);
    symbolIndex++;
  });
})();


/* ── Contador animado para números estadísticos (.count-up) ── */
(function countUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el  = entry.target;
      const end = parseInt(el.dataset.count, 10);
      let start = 0;
      const step = Math.ceil(end / 40);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) { el.textContent = end; clearInterval(timer); }
        else el.textContent = start;
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();