/**
 * Portafolio — contenido y movimiento (vanilla + Lenis para el scroll con inercia).
 * El contenido vive en data.js. Aquí: idioma, pintado y movimiento:
 * telón, scroll con inercia, marquesina, magnetismo, apariciones, parallax, menú y borde curvo.
 */
(() => {
  'use strict';

  const D = window.PORTFOLIO;
  const root = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = (area) => ({
    get: (k) => { try { return area.getItem(k); } catch { return null; } },
    set: (k, v) => { try { area.setItem(k, v); } catch { /* modo privado */ } },
  });
  const local = store(window.localStorage);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const PAGE = document.body.dataset.page || 'home'; // 'home' (portada), 'work' (trabajo.html) o 'contact' (contacto.html)

  const state = { lang: local.get('portfolio.lang') || ((navigator.language || 'es').startsWith('es') ? 'es' : 'en') };
  const L = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[state.lang] ?? v.es : v);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Scroll con inercia: es lo que hace que todo lo demás se sienta fluido.
  // respectReducedMotion: false → la inercia funciona aunque el sistema pida menos movimiento (el sitio anima siempre).
  // lerp 0.1 y rueda ×1.2: los mismos valores del sitio de referencia (cada "clic" de rueda ≈ 120 px, 10 % del resto por cuadro).
  const lenis = window.Lenis
    ? new window.Lenis({ lerp: 0.1, wheelMultiplier: 1.2, autoRaf: true, anchors: true, respectReducedMotion: false })
    : null;

  // ───────────── pintado ─────────────

  /** Parte un texto en palabras enmascaradas para que suban una a una. */
  function split(el) {
    el.innerHTML = el.textContent.trim().split(/\s+/)
      .map((w, i) => `<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`).join(' ');
  }

  function applyText(scope = document) {
    $$('[data-i18n]', scope).forEach((el) => {
      const v = D.ui[el.dataset.i18n];
      if (!v) return;
      if (el instanceof SVGElement) el.textContent = L(v);
      else el.innerHTML = L(v); // diccionario propio: puede traer <br>
    });
    $$('[data-i18n-ph]', scope).forEach((el) => { el.placeholder = L(D.ui[el.dataset.i18nPh]); }); // textos de ejemplo de los campos
    $$('[data-split]', scope).forEach(split);
  }

  function visual(p) {
    const v = p.visual || {};
    // dos tamaños: la imagen ocupa ~36 % del ancho en escritorio y ~85 % en una columna, y el navegador elige el archivo
    const set = v.small ? ` srcset="${esc(v.small)} ${v.sw}w, ${esc(v.img)} ${v.w}w" sizes="(max-width: 900px) 85vw, 36vw"` : '';
    if (v.img) return `<img src="${esc(v.img)}"${set} width="${v.w}" height="${v.h}" alt="${esc(L(v.alt))}" loading="lazy" />`;
    if (v.diagram) return $(`#${v.diagram}`).innerHTML;
    return `<span class="stage__pending">${esc(L(D.ui['work.pending']))}</span>`;
  }

  function renderProjects() {
    $('#projects').innerHTML = D.projects.map((p) => `
      <article class="project" id="${p.id}" data-watch>
        <header class="project__head">
          <h3 class="project__name" data-split>${esc(L(p.name))}</h3>
          <p class="project__type" data-reveal>${esc(L(p.type))}</p>
        </header>
        <div class="project__body">
          <div>
            <p class="project__desc" data-reveal>${esc(L(p.desc))}</p>
            <div class="how">
              <p class="how__title">${esc(L(D.ui['work.how']))}</p>
              <ol data-stagger>${L(p.how).map((s, i) => `<li style="--n:${i}">${esc(s)}</li>`).join('')}</ol>
            </div>
            <p class="project__foot" data-reveal><span>${esc(L(p.meta))}</span>${p.link
              ? `<a class="project__link" href="${esc(p.link.href)}" target="_blank" rel="noopener">${esc(L(p.link.label))} ↗</a>` : ''}</p>
          </div>
          <div class="stage${p.visual?.img ? ' stage--img' : ''}" style="--stage:${p.stage}" data-parallax>${visual(p)}</div>
        </div>
      </article>`).join('');
  }

  function renderAbout() {
    const a = D.about;
    $('#about-text').innerHTML = L(a.text).map((t) => `<p data-reveal>${esc(t)}</p>`).join('');
    $('#jobs').innerHTML = a.jobs.map((j, i) => `<li style="--n:${i}"><time>${esc(L(j.when))}</time><strong>${esc(L(j.role))}</strong><span>${esc(L(j.org))}</span></li>`).join('');
    $('#jobs').setAttribute('data-stagger', '');
    $('#facts').innerHTML = a.facts.map((f, i) => `<div style="--n:${i}"><dt>${esc(L(f.k))}</dt><dd>${esc(L(f.v))}</dd></div>`).join('');
    $('#facts').setAttribute('data-stagger', '');
  }

  /** Página "Trabajo": el resto de proyectos (filas que se abren), trabajos anteriores y repos. */
  function renderWork() {
    const hl = (items) => `<ul class="wrow__hl">${items.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>`;
    $('#more').innerHTML = D.more.map((p) => `
      <details class="wrow" data-watch>
        <summary>
          <span class="wrow__name">${esc(L(p.name))}</span>
          <span class="wrow__meta"><span class="badge badge--${p.status}">${esc(L(D.status[p.status]))}</span>${esc(L(p.org))} · ${esc(p.year)}</span>
          <span class="wrow__plus" aria-hidden="true"></span>
        </summary>
        <div class="wrow__body">
          <p class="wrow__tag">${esc(L(p.tagline))}</p>
          ${hl(L(p.highlights))}
          <p class="project__foot"><span>${p.stack.map((s) => esc(L(s))).join(' · ')}</span>${(p.links || [])
            .map((l) => `<a class="project__link" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(L(l.label))} ↗</a>`).join('')}</p>
        </div>
      </details>`).join('');
    $('#before').innerHTML = D.before.map((j) => `
      <article class="wjob" data-watch>
        <time>${esc(L(j.when))}</time>
        <div>
          <h3 class="wjob__role">${esc(L(j.role))}</h3>
          <p class="wjob__org">${esc(L(j.org))}</p>
          ${hl(L(j.bullets))}
          <p class="project__foot"><span>${j.stack.map(esc).join(' · ')}</span></p>
        </div>
      </article>`).join('');
    $('#repos').innerHTML = D.repos.map((r) => `
      <a class="wrepo" href="https://github.com/alejoc0314/${esc(r.name)}" target="_blank" rel="noopener" data-watch>
        <span class="wrepo__name">${esc(r.name)}</span>
        <span class="wrepo__desc">${esc(L(r.desc))}</span>
        <span class="wrepo__lang">${esc(r.lang)} ↗</span>
      </a>`).join('');
  }

  function render() {
    root.lang = state.lang;
    document.title = L(D.ui[`page.${PAGE}.title`] || D.ui['meta.title']);
    if (PAGE === 'home') { renderProjects(); renderAbout(); } else if (PAGE === 'work') renderWork();
    applyText();
    $$('.js-lang').forEach((b) => {
      b.textContent = state.lang === 'es' ? 'EN' : 'ES';
      b.setAttribute('aria-label', `${b.textContent} · Cambiar idioma / Switch language`); // empieza por el texto visible
    });
    watch();
    collect();
    measure();
    onScroll();
  }

  // ───────────── apariciones ─────────────
  // Entran al verse y se reinician si vuelven a quedar por debajo de la pantalla,
  // así se repiten al bajar de nuevo.

  let io;
  function watch() {
    io?.disconnect();
    io = new IntersectionObserver((entries) => entries.forEach((e) => {
      const top = e.boundingClientRect.top, vh = window.innerHeight;
      // lo que ya quedó arriba (por ejemplo tras saltar con el menú) cuenta como visto
      if (e.isIntersecting || top < vh * 0.5) e.target.classList.add('is-in');
      else if (top > vh * 0.9) e.target.classList.remove('is-in');
    }), { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    $$(REVEALS).forEach((el) => io.observe(el));
  }

  // ───────────── movimiento ligado al scroll ─────────────
  // Para que el scroll se sienta fluido, en cada cuadro primero se LEE todo y después se ESCRIBE,
  // y solo se escriben transformaciones: así el navegador mueve capas y no recalcula el diseño.

  // photo, track y arrow solo existen en la portada; en "Trabajo" la cabecera es .phead
  const photo = $('.hero__photo'), hero = $('.hero') || $('.phead'), closing = $('.closing'), track = $('#marquee');
  const arrow = $('.hero__arrow'), closeBtn = $('.closing .round');
  const closingIn = $('.closing__in'), closingFoot = $('.closing__foot'), curve = $('#curve');
  const REVEALS = '[data-watch], [data-reveal], [data-split], [data-stagger]';
  const onScreen = new Set();                 // elementos con movimiento que están cerca de la pantalla
  const near = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) onScreen.add(e.target); else onScreen.delete(e.target);
    // los puntos del diagrama solo se animan mientras se ven: fuera de pantalla no gastan nada
    const svg = e.target.querySelector('svg.diagram');
    if (svg) { if (e.isIntersecting) svg.unpauseAnimations(); else svg.pauseAnimations(); }
    // si algo entró a pantalla por un salto (ancla, recarga a mitad de página), se acomoda aunque no haya más scroll
    requestAnimationFrame(onScroll);
  }), { rootMargin: '25% 0px' });
  let heroH = 0, unit = 0;
  let lastY = window.scrollY, dir = 1, shift = 0, scrolled = false;

  /** Medidas que no cambian con el scroll: se toman al cargar y al redimensionar. */
  const room = new Map();                     // cuánto puede deslizarse a la derecha cada botón sin salirse de su línea
  function measure() {
    heroH = hero.offsetHeight;
    unit = track ? track.firstElementChild.offsetWidth : 0;
    // offsetLeft no cuenta el `translate`, así que la medida no depende de dónde vaya el deslizamiento
    $$('[data-drift]').forEach((el) => room.set(el, Math.max(0, el.parentElement.clientWidth - el.offsetLeft - el.offsetWidth)));
  }

  /** Tras pintar: qué elementos se mueven con el scroll. */
  function collect() {
    near.disconnect();
    onScreen.clear();
    [...$$('[data-parallax], [data-drift]'), closing].filter(Boolean).forEach((el) => near.observe(el)); // contacto.html no tiene cierre
  }

  function onScroll() {
    const y = window.scrollY, vh = window.innerHeight;
    if (y !== lastY) {
      // un salto grande (tecla Fin, ancla sin inercia) no dispara el observador: se da por visto lo que quedó arriba
      if (Math.abs(y - lastY) > vh) $$(REVEALS).forEach((el) => { if (el.getBoundingClientRect().top < vh * 0.5) el.classList.add('is-in'); });
      dir = y > lastY ? 1 : -1;
      shift += (y - lastY) * 0.4;                // la marquesina se corre 0,4 px por cada px de scroll
      lastY = y;
    }
    // el botón de menú aparece al pasar el 30 % de una pantalla
    if ((y > vh * 0.3) !== scrolled) { scrolled = !scrolled; root.classList.toggle('scrolled', scrolled); }

    // 1) leer
    const rects = [];
    for (const el of onScreen) rects.push([el, el.getBoundingClientRect()]);

    // 2) escribir
    if (photo && y < heroH) {
      photo.style.transform = `translate3d(-50%, ${(y * 0.3).toFixed(1)}px, 0)`;     // la foto se queda atrás
      arrow.style.transform = `rotate(${(y / heroH * 90).toFixed(1)}deg)`;
    }
    for (const [el, r] of rects) {
      const t = (r.top + r.height / 2) / vh - 0.5;                                   // −0.5 arriba … 0.5 abajo
      if (el === closing) {
        // cierre: todo atado al mismo recorrido (de que asoma a que llega al fondo)
        const left = Math.max(0, r.bottom - vh);
        const lift = `translate3d(0, ${(-left * 0.4).toFixed(1)}px, 0)`;
        curve.style.transform = `scaleY(${clamp(left / r.height, 0, 1).toFixed(3)})`; // la curva se aplana
        closingIn.style.transform = lift;                                            // el contenido se destapa
        closingFoot.style.transform = lift;
        closeBtn.style.translate = `${(-left * 0.1).toFixed(1)}px 0`;                // el botón se desliza a su sitio
      } else if (el.dataset.drift) {
        // botón sobre la línea: se desliza por ella hacia la derecha al bajar (data-drift = cuánto), en su sitio al centro
        // con tope: nunca pasa del final de la línea (en móvil el botón ya está pegado al final, así que solo llega y se queda).
        // Sin tope se salía de la pantalla, ensanchaba la página y sacaba de sitio al botón del menú.
        const reach = vh * 0.5 * +el.dataset.drift;
        el.style.translate = `${clamp(-t * vh * +el.dataset.drift, -reach, Math.min(reach, room.get(el) || 0)).toFixed(1)}px 0`;
      } else {
        // imagen de proyecto: se desplaza y, si es foto, respira un poco. Al diagrama (vectorial) no se le toca
        // la escala: redibujarlo en cada cuadro es carísimo.
        const kid = el.firstElementChild, move = `translate3d(0, ${(t * -56).toFixed(1)}px, 0)`;
        kid.style.transform = kid.tagName === 'IMG' ? `${move} scale(${(1.02 + Math.abs(t) * 0.07).toFixed(3)})` : move;
      }
    }
  }
  if (lenis) lenis.on('scroll', onScroll);
  else {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { onScroll(); ticking = false; });
    }, { passive: true });
  }
  window.addEventListener('resize', () => { measure(); onScroll(); });
  document.fonts?.ready.then(() => { measure(); onScroll(); });

  // Marquesina: da una vuelta cada 18 s, cambia de sentido con el scroll y además se corre con él.
  function marquee() {
    if (!track) return;
    let x = 0, heroVisible = true, last = performance.now();
    new IntersectionObserver(([e]) => {
      heroVisible = e.isIntersecting;
      hero.classList.toggle('is-away', !heroVisible); // pausa el globo que gira
    }).observe(hero);
    const step = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (heroVisible && unit) {
        x -= dir * (unit / 18) * dt + shift;
        shift = 0;
        x = ((x % unit) - unit) % unit;          // siempre entre −unit y 0
        track.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // Relleno de botones: entra desde abajo al llegar el cursor y sale hacia arriba al irse.
  function fills() {
    $$('.round, .menu-btn, .pill').forEach((el) => {
      const set = (on) => { el.classList.toggle('is-fill', on); el.classList.toggle('is-unfill', !on); };
      el.addEventListener('pointerenter', () => set(true));
      el.addEventListener('pointerleave', () => set(false));
      el.addEventListener('focus', () => set(true));
      el.addEventListener('blur', () => set(false));
    });
  }

  // Magnetismo: el elemento se deja atraer por el cursor (fuerza en data-magnetic) y vuelve con rebote.
  function magnetic() {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    $$('[data-magnetic]').forEach((el) => {
      const k = parseFloat(el.dataset.magnetic) || 0.38;
      el.addEventListener('pointermove', (ev) => {
        const r = el.getBoundingClientRect();
        el.classList.add('is-near');
        el.style.setProperty('--mx', `${((ev.clientX - r.left - r.width / 2) * k).toFixed(1)}px`);
        el.style.setProperty('--my', `${((ev.clientY - r.top - r.height / 2) * k).toFixed(1)}px`);
      });
      el.addEventListener('pointerleave', () => {
        el.classList.remove('is-near');
        el.style.setProperty('--mx', '0px');
        el.style.setProperty('--my', '0px');
      });
    });
  }

  // ───────────── menú ─────────────

  function menu() {
    const btn = $('#menu-btn'), panel = $('#menu');
    const set = (open) => {
      root.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open);
      panel.inert = !open;
      if (open) { lenis?.stop(); panel.focus({ preventScroll: true }); } else { lenis?.start(); }
    };
    const isOpen = () => root.classList.contains('menu-open');
    btn.addEventListener('click', () => set(!isOpen()));
    $('#menu-back').addEventListener('click', () => set(false));
    panel.addEventListener('click', (ev) => { if (ev.target.closest('a')) set(false); });
    window.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && isOpen()) { set(false); btn.focus(); } });

    // marca en el menú la sección que se está viendo
    const links = $$('.menu__links a');
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle('is-current', a.hash === `#${e.target.id}`));
    }), { rootMargin: '-45% 0px -50% 0px' });
    links.forEach((a) => {
      const t = a.hash && a.pathname === location.pathname ? $(a.hash) : null; // solo anclas de esta página
      if (t) spy.observe(t);
    });
  }

  // ───────────── reloj y telón ─────────────

  function clock() {
    const tick = () => {
      $('#clock').textContent = `${new Intl.DateTimeFormat(state.lang === 'es' ? 'es-CO' : 'en-US', {
        timeZone: 'America/Bogota', hour: 'numeric', minute: '2-digit',
      }).format(new Date())} GMT−5`;
    };
    tick();
    setInterval(tick, 20000);
    return tick;
  }

  function ready() {
    hero.classList.add('is-ready');
    window.portfolioReady = true; // le avisa al seguro del <head> que todo arrancó bien
  }

  // Telón: la primera palabra aparece, las demás pasan rápido, y el telón sube mientras el hero entra detrás.
  // Si se viene de otra página del sitio (telón corto) solo muestra el nombre de la página y sube.
  function curtain() {
    const pre = $('#pre');
    if (!root.classList.contains('pre-on')) return ready();
    document.body.classList.add('is-loading');
    lenis?.stop();
    const words = D.hello, word = $('#pre-word');
    const short = root.classList.contains('pre-short');
    try { sessionStorage.removeItem('portfolio.nav'); } catch { /* modo privado */ }
    let i = 0;
    const lift = () => {
      pre.classList.add('is-out');
      document.body.classList.remove('is-loading');
      lenis?.start();
      ready();
      setTimeout(() => root.classList.remove('pre-on'), 1100);
    };
    const next = () => {
      if (++i < words.length) { word.textContent = words[i]; return setTimeout(next, 150); }
      setTimeout(lift, 280);
    };
    if (short) {
      word.textContent = L(D.ui[`page.${PAGE}.word`]);
      return setTimeout(lift, 420);
    }
    requestAnimationFrame(() => requestAnimationFrame(() => pre.classList.add('is-on')));
    setTimeout(next, 1000);
  }

  // Transición entre páginas: el telón sube desde abajo con el nombre del destino, y recién ahí se navega.
  function pageLinks() {
    const pre = $('#pre'), word = $('#pre-word');
    document.addEventListener('click', (ev) => {
      const a = ev.target.closest('a[href]');
      if (!a || a.target === '_blank' || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button) return;
      const url = new URL(a.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return; // externa, o ancla de esta página
      ev.preventDefault();
      lenis?.stop();
      const dest = /trabajo/.test(url.pathname) ? 'work' : /contacto/.test(url.pathname) ? 'contact' : 'home';
      word.textContent = L(D.ui[`page.${dest}.word`]);
      pre.classList.remove('is-out', 'is-on');
      pre.classList.add('is-below');                 // parte de debajo de la pantalla, sin transición
      root.classList.add('pre-on');
      pre.getBoundingClientRect();                   // fija ese punto de partida antes de animar
      pre.classList.add('is-rise');
      try { sessionStorage.setItem('portfolio.nav', word.textContent); } catch { /* modo privado */ }
      setTimeout(() => { location.href = a.href; }, 650);
    });
    // al volver con el botón Atrás el navegador puede restaurar la página con el telón puesto: se quita
    window.addEventListener('pageshow', (ev) => {
      if (!ev.persisted) return;
      pre.classList.remove('is-below', 'is-rise');
      pre.classList.add('is-out');
      root.classList.remove('pre-on');
      lenis?.start();
    });
  }

  // ───────────── formulario de contacto ─────────────
  // Se envía a Web3Forms (que lo reenvía por correo) sin salir de la página. Si falla, ofrece el correo directo.
  function contactForm() {
    const form = $('#contact-form');
    if (!form) return;
    const btn = $('button[type="submit"]', form), label = $('span', btn), status = $('#contact-status');
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      if (btn.disabled) return;
      btn.disabled = true;
      label.textContent = L(D.ui['c.sending']);
      status.textContent = '';
      delete status.dataset.state;
      let ok = false;
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form), // como formulario y no como JSON: así el navegador no hace la consulta previa (preflight), que el servicio rechaza
        });
        ok = res.ok && (await res.json()).success === true;
      } catch { /* sin red o respuesta rara: cae al mensaje de error */ }
      if (ok) form.reset();
      status.dataset.state = ok ? 'ok' : 'err';
      status.innerHTML = L(D.ui[ok ? 'c.ok' : 'c.err']);
      label.textContent = L(D.ui['c.send']);
      btn.disabled = false;
    });
  }

  // ───────────── arranque ─────────────

  render();
  const tickClock = clock();
  menu();
  marquee();
  magnetic();
  fills();
  pageLinks();
  contactForm();
  curtain();

  $$('.js-lang').forEach((b) => b.addEventListener('click', () => {
    state.lang = state.lang === 'es' ? 'en' : 'es';
    local.set('portfolio.lang', state.lang);
    render();
    tickClock();
  }));
})();
