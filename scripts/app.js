/**
 * Portafolio — lógica (vanilla, sin build).
 * Todo el contenido vive en data.js; aquí solo se pinta, se cambia idioma/tema
 * y se filtra la grilla de proyectos.
 */
(() => {
  'use strict';

  const D = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* modo privado */ } },
  };

  const state = {
    lang: store.get('portfolio.lang') || ((navigator.language || 'es').startsWith('es') ? 'es' : 'en'),
    theme: document.documentElement.dataset.theme || 'dark',
    filter: 'all',
  };

  /** Texto bilingüe: acepta string o { es, en }. */
  const L = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[state.lang] ?? v.es : v);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const chips = (arr) => `<div class="chips">${arr.map((s) => `<span class="chip">${esc(L(s))}</span>`).join('')}</div>`;
  const list = (arr) => `<ul class="hl">${arr.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`;
  const links = (arr = []) => arr.length
    ? `<div class="links">${arr.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(L(l.label))} ↗</a>`).join('')}</div>`
    : '';
  const badge = (status) => `<span class="badge badge--${status}">${esc(L(D.ui.status[status]))}</span>`;

  // ───────────── pintado ─────────────

  function renderStatic() {
    $$('[data-i18n]').forEach((el) => {
      const v = D.ui[el.dataset.i18n];
      if (v) el.innerHTML = L(v); // el diccionario es propio: puede traer <em>/<strong>
    });
    document.title = L(D.ui['meta.title']);
  }

  function renderRunlog() {
    const r = D.runlog;
    const lines = r.steps.map((s, i) =>
      `<div class="runlog__line" style="animation-delay:${0.5 + i * 0.42}s"><b>✓</b><span class="k">${esc(L(s.k))}</span><span class="v">${esc(L(s.v))}</span></div>`
    ).join('');
    const end = 0.5 + r.steps.length * 0.42;
    $('#runlog').innerHTML = `
      <div class="runlog__bar"><i></i><i></i><i></i><span>${esc(r.title)}</span></div>
      <div class="runlog__body">
        <div class="runlog__line runlog__line--cmd" style="animation-delay:.15s"><b>$</b><span>${esc(L(r.cmd))}</span></div>
        ${lines}
        <div class="runlog__line runlog__line--end" style="animation-delay:${end}s"><b>→</b><span>${esc(L(r.end))}</span></div>
      </div>
      <div class="runlog__foot">${esc(L(r.foot))}</div>`;
  }

  function renderStats() {
    $('#stats').innerHTML = D.stats.map((s) => `
      <div class="stat" data-reveal>
        <div class="stat__v">${esc(L(s.value))}${s.suffix ? `<small>${esc(s.suffix)}</small>` : ''}</div>
        <div class="stat__l">${esc(L(s.label))}</div>
      </div>`).join('');
  }

  function renderFeatured() {
    $('#featured').innerHTML = D.projects.filter((p) => p.featured).map((p) => `
      <article class="case" data-reveal>
        <div class="case__main">
          <div class="case__meta">${badge(p.status)}<span>${esc(p.year)}</span><span>${esc(L(p.org))}</span></div>
          <h3 class="case__name">${esc(L(p.name))}</h3>
          <p class="case__tag">${esc(L(p.tagline))}</p>
          <p class="case__p"><b>${esc(L(D.ui['case.problem']))}</b>${esc(L(p.problem))}</p>
          <p class="case__p"><b>${esc(L(D.ui['case.solution']))}</b>${esc(L(p.solution))}</p>
          ${list(L(p.highlights))}
          ${links(p.links)}
        </div>
        <aside class="case__side"><div class="side__in">
          ${p.flow ? `<div><div class="side__label">${esc(L(p.flowLabel || D.ui['case.flow']))}</div>
            <ol class="flow">${p.flow.map((f) => `<li><div><strong>${esc(L(f.t))}</strong><span>${esc(L(f.d))}</span></div></li>`).join('')}</ol></div>` : ''}
          ${p.metrics ? `<div><div class="side__label">${esc(L(D.ui['case.metrics']))}</div>
            <div class="metrics">${p.metrics.map((m) => `<div><div class="metric__v">${esc(L(m.v))}</div><div class="metric__l">${esc(L(m.l))}</div></div>`).join('')}</div></div>` : ''}
          <div><div class="side__label">Stack</div>${chips(p.stack)}</div>
        </div></aside>
      </article>`).join('');
  }

  function renderGrid() {
    const rest = D.projects.filter((p) => !p.featured);
    const cats = ['all', ...D.categories.map((c) => c.id).filter((id) => rest.some((p) => p.cat === id))];
    const label = (id) => (id === 'all' ? L(D.ui['filter.all']) : L(D.categories.find((c) => c.id === id).label));

    $('#filters').innerHTML = cats.map((id) =>
      `<button class="filter" type="button" data-cat="${id}" aria-pressed="${state.filter === id}">${esc(label(id))}</button>`).join('');

    $('#grid').innerHTML = rest.map((p) => `
      <article class="card" data-cat="${p.cat}" ${state.filter !== 'all' && state.filter !== p.cat ? 'hidden' : ''}>
        <div class="card__meta">${badge(p.status)}<span>${esc(p.year)} · ${esc(L(p.org))}</span></div>
        <h3 class="card__name">${esc(L(p.name))}</h3>
        <p class="card__tag">${esc(L(p.tagline))}</p>
        <details><summary>${esc(L(D.ui['card.more']))}</summary>${list(L(p.highlights))}${links(p.links)}</details>
        ${chips(p.stack)}
      </article>`).join('');
  }

  function renderPrinciples() {
    $('#principles').innerHTML = D.principles.map((p, i) => `
      <article class="principle" data-reveal>
        <div class="principle__n">${String(i + 1).padStart(2, '0')}</div>
        <h3>${esc(L(p.title))}</h3>
        <p>${esc(L(p.body))}</p>
      </article>`).join('');
  }

  function renderJobs() {
    $('#jobs').innerHTML = D.experience.map((j) => `
      <article class="job" data-reveal>
        <div class="job__when"><b>${esc(L(j.when))}</b>${esc(L(j.mode))}${j.now ? `<br><span class="job__now">${esc(L(D.ui['job.now']))}</span>` : ''}</div>
        <div>
          <h3 class="job__role">${esc(L(j.role))}</h3>
          <div class="job__org">${esc(L(j.org))}</div>
          ${list(L(j.bullets))}
          ${chips(j.stack)}
        </div>
      </article>`).join('');
  }

  function renderStack() {
    $('#stack-grid').innerHTML = D.stack.map((g) => `
      <div class="stack__col" data-reveal>
        <h3>${esc(L(g.label))}</h3>
        <p>${esc(L(g.note))}</p>
        ${chips(g.items)}
      </div>`).join('');
  }

  function renderEdu() {
    $('#edu').innerHTML = D.education.map((g) => `
      <div class="edu__group" data-reveal>
        <h3>${esc(L(g.label))}</h3>
        ${g.items.map((e) => `<div class="edu__item"><strong>${esc(L(e.title))}</strong><time>${esc(L(e.when))}</time><span>${esc(L(e.org))}</span></div>`).join('')}
      </div>`).join('');
  }

  function renderAbout() {
    $('#about-body').innerHTML = L(D.about.body).map((p) => `<p>${esc(p)}</p>`).join('');
    $('#about-off').innerHTML = D.about.off.map((o) => `<div><dt>${esc(L(o.k))}</dt><dd>${esc(L(o.v))}</dd></div>`).join('');
  }

  function render() {
    document.documentElement.lang = state.lang;
    renderStatic();
    renderRunlog();
    renderStats();
    renderFeatured();
    renderGrid();
    renderPrinciples();
    renderJobs();
    renderStack();
    renderEdu();
    renderAbout();
    $('#toggle-lang').textContent = state.lang === 'es' ? 'EN' : 'ES';
    $('#toggle-theme').textContent = state.theme === 'dark' ? '☀' : '☾';
    armReveal();
  }

  // ───────────── comportamiento ─────────────

  let io;
  function armReveal() {
    io?.disconnect();
    io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { threshold: 0.06, rootMargin: '0px 0px -6% 0px' });
    $$('[data-reveal]').forEach((el) => io.observe(el));
  }

  function spyNav() {
    const navLinks = $$('.nav__links a');
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle('is-current', a.hash === `#${e.target.id}`));
    }), { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach((a) => { const t = $(a.hash); if (t) spy.observe(t); });
  }

  function init() {
    document.documentElement.classList.add('js');
    render();
    spyNav();

    $('#toggle-lang').addEventListener('click', () => {
      state.lang = state.lang === 'es' ? 'en' : 'es';
      store.set('portfolio.lang', state.lang);
      render();
    });
    $('#toggle-theme').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      store.set('portfolio.theme', state.theme);
      document.documentElement.dataset.theme = state.theme;
      $('#toggle-theme').textContent = state.theme === 'dark' ? '☀' : '☾';
    });
    $('#filters').addEventListener('click', (ev) => {
      const btn = ev.target.closest('.filter');
      if (!btn) return;
      state.filter = btn.dataset.cat;
      $$('.filter').forEach((b) => b.setAttribute('aria-pressed', b === btn));
      $$('#grid .card').forEach((c) => { c.hidden = state.filter !== 'all' && c.dataset.cat !== state.filter; });
    });
  }

  init();
})();
