/**
 * Contenido del portafolio (ES / EN).
 * Para editar el sitio casi siempre basta con tocar este archivo.
 * Un texto es un string (igual en ambos idiomas) o { es, en }.
 *
 * Regla de la casa: aquí solo van cifras que se pueden verificar en el repo,
 * en el changelog o en un reporte. Nada de números de negocio del empleador.
 */
window.PORTFOLIO = {
  // ───────────── textos de interfaz ─────────────
  ui: {
    'meta.title': { es: 'Alejandro Cañas Arango · AI & Automation Engineer', en: 'Alejandro Cañas Arango · AI & Automation Engineer' },
    'a11y.skip': { es: 'Saltar al contenido', en: 'Skip to content' },

    'nav.work': { es: 'Proyectos', en: 'Work' },
    'nav.method': { es: 'Cómo trabajo', en: 'How I work' },
    'nav.experience': { es: 'Experiencia', en: 'Experience' },
    'nav.stack': 'Stack',
    'nav.about': { es: 'Sobre mí', en: 'About' },
    'nav.contact': { es: 'Contacto', en: 'Contact' },

    'hero.eyebrow': 'Alejandro Cañas Arango · Medellín, Colombia',
    'hero.title': {
      es: 'Llevo la IA a sistemas que <em>ya están en producción</em>.',
      en: 'I put AI into systems that are <em>already in production</em>.',
    },
    'hero.lede': {
      es: '<strong>AI & Automation Engineer y desarrollador full-stack.</strong> Diseño agentes, automatizaciones y plataformas web completas —con su interfaz, sus pagos, sus datos y su despliegue— para que la IA sobreviva al día a día y no solo a la demo.',
      en: '<strong>AI & Automation Engineer and full-stack developer.</strong> I design agents, automations and complete web platforms — interface, payments, data and deployment included — so that AI survives day-to-day use, not just the demo.',
    },
    'hero.cta.work': { es: 'Ver proyectos', en: 'See the work' },
    'hero.cta.contact': { es: 'Hablemos', en: "Let's talk" },

    'work.title': { es: 'Proyectos', en: 'Work' },
    'work.sub': {
      es: 'Cuatro casos a fondo y, más abajo, el resto. Los de Conecty son sistemas internos: cuento la ingeniería, no los datos del negocio.',
      en: "Four case studies in depth, then the rest. The Conecty ones are internal systems: I share the engineering, not the business data.",
    },
    'work.more': { es: 'Más trabajo', en: 'More work' },
    'case.problem': { es: 'El problema', en: 'The problem' },
    'case.solution': { es: 'Lo que construí', en: 'What I built' },
    'case.flow': { es: 'Cómo funciona', en: 'How it works' },
    'case.metrics': { es: 'En cifras', en: 'By the numbers' },
    'card.more': { es: 'Detalle técnico', en: 'Technical detail' },
    'filter.all': { es: 'Todos', en: 'All' },

    'method.title': { es: 'Cómo trabajo', en: 'How I work' },
    'method.sub': {
      es: 'Cuatro reglas que aplico igual a un agente de IA, a un despliegue o a mí mismo.',
      en: 'Four rules I apply equally to an AI agent, a deployment, or myself.',
    },

    'exp.title': { es: 'Experiencia', en: 'Experience' },
    'exp.sub': {
      es: 'Más de cuatro años construyendo producto de punta a punta.',
      en: 'Four-plus years building product end to end.',
    },
    'job.now': { es: 'ACTUAL', en: 'CURRENT' },

    'stack.title': 'Stack',
    'stack.sub': {
      es: 'Lo que uso en producción hoy, agrupado por para qué sirve.',
      en: 'What I run in production today, grouped by what it is for.',
    },
    'edu.title': { es: 'Formación', en: 'Education' },
    'about.title': { es: 'Sobre mí', en: 'About' },

    'contact.eyebrow': { es: 'Contacto', en: 'Contact' },
    'contact.title': { es: 'Hablemos de IA que sí llega a producción.', en: "Let's talk about AI that actually ships." },
    'contact.lede': {
      es: 'Escríbeme si quieres conversar sobre agentes, automatización, integraciones o cualquiera de los proyectos de esta página.',
      en: 'Write to me if you want to talk about agents, automation, integrations, or any project on this page.',
    },
    'foot.left': { es: '© 2026 Alejandro Cañas Arango · HTML, CSS y JS a mano, sin framework.', en: '© 2026 Alejandro Cañas Arango · Hand-written HTML, CSS and JS, no framework.' },
    'foot.top': { es: 'Volver arriba ↑', en: 'Back to top ↑' },

    status: {
      prod: { es: 'En producción', en: 'In production' },
      oss: { es: 'Open source', en: 'Open source' },
      dev: { es: 'En construcción', en: 'In progress' },
      done: { es: 'Entregado', en: 'Delivered' },
    },
  },

  categories: [
    { id: 'ai', label: { es: 'IA y ML', en: 'AI & ML' } },
    { id: 'platform', label: { es: 'Plataformas', en: 'Platforms' } },
    { id: 'infra', label: { es: 'Integraciones y entrega', en: 'Integrations & delivery' } },
    { id: 'oss', label: 'Open source' },
  ],

  // ───────────── tarjeta del hero: el ciclo de UMBRA ─────────────
  runlog: {
    title: 'umbra-engine',
    cmd: 'umbra run --spec 035',
    steps: [
      { k: 'PLAN', v: { es: 'spec → grafo de tareas', en: 'spec → task graph' } },
      { k: 'BUILD', v: { es: 'TDD en un worktree aislado', en: 'TDD in an isolated worktree' } },
      { k: 'REVIEW', v: { es: 'otro agente revisa el diff', en: 'a second agent reviews the diff' } },
      { k: 'VERIFY', v: { es: 'pruebas + navegador, atadas al SHA', en: 'tests + browser, bound to the SHA' } },
      { k: 'SCAN', v: { es: 'secretos y política anti-trampa', en: 'secrets and anti-cheat policy' } },
      { k: 'SHIP', v: { es: 'PR con reporte de evidencia', en: 'PR with an evidence report' } },
    ],
    end: { es: 'esperando aprobación humana', en: 'waiting for human approval' },
    foot: { es: 'Así trabaja UMBRA Engine, mi orquestador open source.', en: 'This is how UMBRA Engine, my open-source orchestrator, works.' },
  },

  stats: [
    { value: '6', label: { es: 'sistemas en producción construidos o liderados desde 2025', en: 'production systems built or led since 2025' } },
    { value: { es: '1.000', en: '1,000' }, suffix: '+', label: { es: 'pruebas automatizadas respaldan los proyectos de esta página', en: 'automated tests back the projects on this page' } },
    { value: '~9', suffix: 's', label: { es: 'tarda el rollback automático cuando un despliegue falla', en: 'for automatic rollback when a deploy fails' } },
    { value: '4', suffix: '+', label: { es: 'años construyendo producto de punta a punta', en: 'years building product end to end' } },
  ],

  // ───────────── proyectos ─────────────
  projects: [
    {
      id: 'umbra-engine', featured: true, cat: 'oss', status: 'oss', year: '2026',
      org: { es: 'Proyecto propio', en: 'Personal project' },
      name: 'UMBRA Engine',
      tagline: {
        es: 'Orquestador de agentes de IA: de la spec al pull request, con evidencia y aprobación humana.',
        en: 'An AI-agent orchestrator: from spec to pull request, with evidence and human approval.',
      },
      problem: {
        es: 'Los agentes de código son rápidos, pero su «ya quedó» no es confiable: se saltan pruebas, tocan lo que no deben y después nadie puede auditar qué pasó.',
        en: "Coding agents are fast, but their “done” can't be trusted: they skip tests, touch what they shouldn't, and afterwards nobody can audit what happened.",
      },
      solution: {
        es: 'Un motor de terminal que convierte una spec en un grafo de tareas y lleva cada una por seis etapas. No escribe código: coordina agentes intercambiables (Claude Code, Codex o cualquier ejecutable) y solo avanza con evidencia atada al SHA del commit.',
        en: "A terminal engine that turns a spec into a task graph and drives each task through six stages. It writes no code itself: it coordinates swappable agents (Claude Code, Codex or any executable) and only advances on evidence bound to the commit SHA.",
      },
      highlights: {
        es: [
          'El agente propone, el motor decide: estados, permisos y aprobaciones son código determinista, y la salida de cada agente se valida contra un contrato versionado.',
          'Política anti-trampa: un diff que borra o debilita pruebas, baja umbrales o toca el CI bloquea la etapa.',
          'Tareas en paralelo en git worktrees aislados; cada efecto externo es idempotente y reanudable.',
          'Verificación en navegador: levanta la app y guarda capturas de Playwright como evidencia.',
          'Se opera desde una TUI o desde Telegram, con modo noche y aprobación atada al commit exacto.',
        ],
        en: [
          'The agent proposes, the engine decides: states, permissions and approvals are deterministic code, and every agent output is validated against a versioned contract.',
          'Anti-cheat policy: a diff that deletes or weakens tests, lowers thresholds or edits CI blocks the stage.',
          'Parallel tasks in isolated git worktrees; every external effect is idempotent and resumable.',
          'Browser verification: it boots the app and stores Playwright screenshots as evidence.',
          'Operated from a TUI or from Telegram, with a night mode and approvals bound to the exact commit.',
        ],
      },
      flowLabel: { es: 'El ciclo de cada tarea', en: 'The loop for every task' },
      flow: [
        { t: 'PLAN', d: { es: 'La spec se vuelve un grafo de tareas', en: 'The spec becomes a task graph' } },
        { t: 'BUILD', d: { es: 'Un agente implementa con TDD', en: 'An agent implements with TDD' } },
        { t: 'REVIEW', d: { es: 'Otro agente revisa; un árbitro desempata', en: 'Another agent reviews; an arbiter breaks ties' } },
        { t: 'VERIFY', d: { es: 'Pruebas y navegador, no promesas', en: 'Tests and a browser, not promises' } },
        { t: 'SCAN', d: { es: 'Secretos y política', en: 'Secrets and policy' } },
        { t: 'SHIP', d: { es: 'PR + aprobación humana', en: 'PR + human approval' } },
      ],
      metrics: [
        { v: 'v0.29', l: { es: 'versión actual', en: 'current version' } },
        { v: '35', l: { es: 'specs escritas', en: 'specs written' } },
        { v: '390', l: { es: 'pruebas', en: 'tests' } },
        { v: '314', l: { es: 'commits', en: 'commits' } },
      ],
      stack: ['Python 3.12', 'Typer', 'Pydantic', 'Textual', 'pytest', 'Claude Code', 'Codex', 'GitHub Actions'],
      links: [{ label: { es: 'Código en GitHub', en: 'Code on GitHub' }, href: 'https://github.com/alejoc0314/umbra-engine' }],
      shot: {
        src: 'assets/umbra-watch.png', w: 1660, h: 995,
        alt: {
          es: 'Consola umbra watch: cinco tareas de la spec 035 integradas, con sus etapas, intentos, costo y la bitácora de lo que hizo cada agente.',
          en: 'The umbra watch console: five tasks from spec 035 integrated, with their stages, attempts, cost and the log of what each agent did.',
        },
      },
    },
    {
      id: 'white-label', featured: true, cat: 'platform', status: 'prod', year: '2025 — 2026', org: 'Conecty',
      name: { es: 'Plataforma White Label de eSIM', en: 'White-label eSIM platform' },
      tagline: {
        es: 'Tiendas de eSIM con marca propia para distribuidores, con canal B2B y pagos en la cuenta de cada marca.',
        en: 'Branded eSIM stores for distributors, with a B2B channel and payments in each brand’s own account.',
      },
      problem: {
        es: 'Cada distribuidor quería vender eSIM con su marca y su dominio, cobrar en su propia cuenta y pagar comisiones a su red, sin que hubiera que construir una tienda por cliente.',
        en: 'Every distributor wanted to sell eSIMs under its own brand and domain, charge in its own account and pay commissions to its network — without building one store per customer.',
      },
      solution: {
        es: 'Una plataforma multi-tenant: cada marca tiene su tienda pública (por slug, embebida o en dominio propio), un canal B2B con socios y asesores, y un panel de administración. Diseñé y construí backend y frontend.',
        en: 'A multi-tenant platform: each brand gets a public store (by slug, embedded, or on its own domain), a B2B channel with partners and advisors, and an admin panel. I designed and built both backend and frontend.',
      },
      highlights: {
        es: [
          'Pasarelas por distribuidor: si la cuenta propia de una marca no está disponible, la venta se detiene en vez de cobrarse en silencio en otra cuenta.',
          'Dinero correcto: centavos enteros y puntos básicos, monto calculado en un solo lugar con BigInt, llaves de idempotencia y webhooks idempotentes.',
          'Credenciales de pasarela cifradas con AES-256-GCM, CORS armado desde los dominios verificados y retornos firmados con HMAC.',
          'Sin cola externa: tablas outbox y workers en proceso para los eventos al ERP y los correos.',
          'Motor de comisiones B2B en funciones puras, cada una con su spec al lado.',
        ],
        en: [
          'Per-distributor gateways: if a brand’s own account is unavailable, the sale stops instead of silently charging another account.',
          'Money done right: integer cents and basis points, the amount computed in one place with BigInt, idempotency keys and idempotent webhooks.',
          'Gateway credentials encrypted with AES-256-GCM, CORS built from verified domains, HMAC-signed return URLs.',
          'No external queue: outbox tables and in-process workers for ERP events and emails.',
          'B2B commission engine written as pure functions, each with its spec next to it.',
        ],
      },
      flowLabel: { es: 'El recorrido de una venta', en: 'The path of a sale' },
      flow: [
        { t: 'Checkout', d: { es: 'Se congelan monto, moneda y tasa de cambio', en: 'Amount, currency and FX rate are frozen' } },
        { t: { es: 'Pasarela', en: 'Gateway' }, d: { es: 'Cuenta de la plataforma o de la marca', en: 'Platform account or the brand’s own' } },
        { t: 'Webhook', d: { es: 'Idempotente; el pedido solo avanza', en: 'Idempotent; orders only move forward' } },
        { t: 'Outbox', d: { es: 'Activación en el ERP y correo al cliente', en: 'Activation in the ERP and customer email' } },
        { t: { es: 'Conciliación', en: 'Reconciliation' }, d: { es: 'Barrido de pendientes cada 15 min', en: 'Sweep of pending orders every 15 min' } },
      ],
      metrics: [
        { v: '531', l: { es: 'pruebas (API + front)', en: 'tests (API + front)' } },
        { v: '78', l: { es: 'endpoints', en: 'endpoints' } },
        { v: '44', l: { es: 'migraciones', en: 'migrations' } },
        { v: '11', l: { es: 'specs e2e', en: 'e2e specs' } },
      ],
      stack: ['NestJS 11', 'Angular 20', 'NgRx Signals', 'MySQL', 'Sequelize', 'Stripe', 'Mercado Pago', 'Tailwind 4', 'Playwright'],
    },
    {
      id: 'spec-assistant', featured: true, cat: 'ai', status: 'prod', year: '2026', org: 'Conecty',
      name: { es: 'Asistente de especificaciones', en: 'Spec assistant' },
      tagline: {
        es: 'Un chat donde las personas de negocio escriben specs con Claude, y el equipo técnico las recibe como pull request.',
        en: 'A chat where business people write specs with Claude, and the tech team receives them as pull requests.',
      },
      problem: {
        es: 'Quien conoce el negocio sabe qué necesita, pero los requerimientos llegaban ambiguos y con cifras sin fuente. Un asistente genérico no conocía el proyecto y rellenaba los huecos inventando.',
        en: 'Business people know what they need, but requirements arrived ambiguous and with unsourced figures. A generic assistant didn’t know the project and filled the gaps by making things up.',
      },
      solution: {
        es: 'Un asistente que trabaja con el contexto real de cada proyecto —constitución, diccionario de métricas y specs aprobadas, leídos de su repositorio—, revisa cada borrador con una segunda llamada independiente y entrega la spec final como PR.',
        en: 'An assistant that works from each project’s real context — constitution, metrics dictionary and approved specs, read from its repository — reviews every draft with a second, independent call, and delivers the final spec as a PR.',
      },
      highlights: {
        es: [
          'Batería de regresión antes de cambiar modelo, esfuerzo o prompt; la condición para pasar es cero cifras inventadas.',
          'Guardrails: un borrador sin secciones obligatorias o con métricas que no existen no se puede enviar, y las cifras sin fuente viajan marcadas hasta el PR.',
          'Prompt caching en dos capas (contexto del proyecto compartido, conversación propia) y costo calculado y guardado por respuesta.',
          'Tope de gasto mensual global y por persona; el token de GitHub de cada proyecto se guarda cifrado y nunca llega al navegador.',
          'CI/CD completo: pruebas unitarias y e2e, health check y rollback automático.',
        ],
        en: [
          'A regression battery runs before any change of model, effort or prompt; the pass bar is zero invented figures.',
          'Guardrails: a draft with missing required sections or non-existent metrics cannot be submitted, and unsourced figures stay flagged all the way to the PR.',
          'Two-layer prompt caching (shared project context, per-conversation cache) with cost computed and stored per response.',
          'Global and per-person monthly spend caps; each project’s GitHub token is stored encrypted and never reaches the browser.',
          'Full CI/CD: unit and e2e tests, health check and automatic rollback.',
        ],
      },
      flowLabel: { es: 'De la idea al PR', en: 'From idea to PR' },
      flow: [
        { t: { es: 'Contexto', en: 'Context' }, d: { es: 'Se lee del repo del proyecto y se cachea', en: 'Read from the project repo and cached' } },
        { t: { es: 'Conversación', en: 'Conversation' }, d: { es: 'Claude pregunta lo que falta', en: 'Claude asks for what is missing' } },
        { t: { es: 'Validación', en: 'Validation' }, d: { es: 'Secciones completas, métricas reales', en: 'Complete sections, real metrics' } },
        { t: { es: 'Revisión', en: 'Review' }, d: { es: 'Llamada independiente contra la constitución', en: 'Independent call against the constitution' } },
        { t: 'Pull request', d: { es: 'La spec llega al equipo técnico', en: 'The spec reaches the tech team' } },
      ],
      metrics: [
        { v: '25/25', l: { es: 'casos de la batería aprobados', en: 'battery cases passed' } },
        { v: '4/4', l: { es: 'conflictos sembrados detectados', en: 'planted conflicts caught' } },
        { v: { es: '~US$0,035', en: '~US$0.035' }, l: { es: 'por revisión independiente', en: 'per independent review' } },
      ],
      stack: ['NestJS 11', 'Angular 21', 'Claude API', 'Prompt caching', 'MySQL', 'GitHub API', 'GitHub Actions'],
    },
    {
      id: 'cdr', featured: true, cat: 'infra', status: 'prod', year: '2026', org: 'Conecty',
      name: { es: 'Pipeline de registros de consumo', en: 'Usage-records pipeline' },
      tagline: {
        es: 'Ingesta idempotente de los registros de uso del operador de eSIM, sin perder una sola hora.',
        en: 'Idempotent ingestion of the eSIM carrier’s usage records, without losing a single hour.',
      },
      problem: {
        es: 'El operador publica archivos de consumo cada hora por SFTP y solo conserva unas semanas de historia. Hacía falta una copia durable y consultable para reportes y conciliación.',
        en: 'The carrier publishes hourly usage files over SFTP and keeps only a few weeks of history. A durable, queryable copy was needed for reporting and reconciliation.',
      },
      solution: {
        es: 'Dos piezas con responsabilidades separadas: un agente en Windows que solo transporta (descarga, verifica, reintenta) y una API en NestJS que concentra toda la lógica: validación, deduplicación, carga transaccional y alertas.',
        en: 'Two pieces with separate responsibilities: a Windows agent that only transports (download, verify, retry) and a NestJS API that owns all the logic: validation, deduplication, transactional load and alerting.',
      },
      highlights: {
        es: [
          'El sha256 de cada archivo es a la vez clave de deduplicación y candado entre peticiones: cuatro envíos simultáneos del mismo archivo dejan un solo registro.',
          'Contrato 4xx/5xx estricto: un 4xx solo significa «archivo malo», nunca una falla del servidor, así ningún dato se descarta en silencio.',
          'Freno de cortesía: tras cada carga espera 3× el tiempo de proceso para no ahogar la base de datos que comparte con el ERP.',
          'Descargas atómicas (.part → tamaño → sha256 → rename), host key fijada y secretos en el Credential Manager de Windows.',
          'Alertas con estado: abren y cierran sin repetirse, y avisan si falta una hora o si el agente dejó de reportarse.',
        ],
        en: [
          'Each file’s sha256 is both the dedup key and a cross-request lock: four simultaneous sends of the same file leave exactly one record.',
          'Strict 4xx/5xx contract: a 4xx only ever means “bad file”, never a server fault, so no data is silently dropped.',
          'Courtesy throttle: after each load it waits 3× the processing time so it never starves the database it shares with the ERP.',
          'Atomic downloads (.part → size → sha256 → rename), a pinned host key, and secrets kept in Windows Credential Manager.',
          'Stateful alerts: they open and resolve without repeating, and fire when an hour is missing or the agent stops reporting.',
        ],
      },
      flowLabel: { es: 'Del SFTP a la base de datos', en: 'From SFTP to the database' },
      flow: [
        { t: 'SFTP', d: { es: 'Archivos por hora del operador', en: 'Hourly files from the carrier' } },
        { t: { es: 'Agente', en: 'Agent' }, d: { es: 'Tarea de Windows cada 15 min', en: 'Windows task every 15 min' } },
        { t: { es: 'API de ingesta', en: 'Ingest API' }, d: { es: 'Valida y carga en una transacción', en: 'Validates and loads in one transaction' } },
        { t: 'MariaDB', d: { es: 'Upsert por lotes de 1.000', en: 'Upsert in batches of 1,000' } },
        { t: { es: 'Alertas', en: 'Alerts' }, d: { es: 'Discord, agrupadas cada 30 s', en: 'Discord, batched every 30 s' } },
      ],
      metrics: [
        { v: { es: '1.580', en: '1,580' }, l: { es: 'archivos en la carga inicial', en: 'files in the backfill' } },
        { v: '0', l: { es: 'horas faltantes', en: 'missing hours' } },
        { v: '~5 ms', l: { es: 'en responder un duplicado', en: 'to answer a duplicate' } },
      ],
      stack: ['NestJS 12', 'TypeORM', 'MariaDB', 'Python', 'Paramiko', 'SQLite', 'PowerShell', 'GitHub Actions'],
    },

    // ───── grilla ─────
    {
      id: 'cicd', cat: 'infra', status: 'prod', year: '2026', org: 'Conecty',
      name: { es: 'Despliegues sin sustos', en: 'Boring deployments' },
      tagline: {
        es: 'De subir archivos y reiniciar PM2 a mano, a un pipeline que se revierte solo en ~9 segundos.',
        en: 'From uploading files and restarting PM2 by hand to a pipeline that rolls itself back in ~9 seconds.',
      },
      highlights: {
        es: [
          'GitHub Actions compila y prueba; un supervisor en el servidor migra, cambia el symlink y verifica /health contra el commit.',
          'Si el health check falla, vuelve solo a la versión anterior. El frontend sube primero los assets con hash y al final el index.html.',
          'Ensayado en un clon de producción: el corte real tomó 1–2 minutos y no se perdió ningún dato.',
          'Sin infraestructura nueva. El mismo patrón hoy despliega cuatro servicios.',
        ],
        en: [
          'GitHub Actions builds and tests; a supervisor on the server migrates, swaps the symlink and checks /health against the commit.',
          'If the health check fails it reverts to the previous release on its own. The frontend uploads hashed assets first and index.html last.',
          'Rehearsed on a production clone: the real cutover took 1–2 minutes and lost no data.',
          'No new infrastructure. The same pattern now deploys four services.',
        ],
      },
      stack: ['GitHub Actions', 'Bash', 'SFTP', 'Linux', 'Discord webhooks'],
    },
    {
      id: 'validators', cat: 'platform', status: 'prod', year: '2026', org: 'Conecty',
      name: 'Validators Manager',
      tagline: {
        es: 'Plataforma de comisiones para afiliados: ventas, retiros, pagos con soporte y cierres mensuales.',
        en: 'Commission platform for affiliates: sales, withdrawals, documented payouts and monthly closings.',
      },
      highlights: {
        es: [
          'Sincroniza a diario las ventas del ERP y crea los códigos de descuento en Shopify por GraphQL.',
          'Revisa documentos legales y bancarios con OCR, pero solo etiqueta: nunca bloquea un retiro, una persona siempre decide.',
          'Calcula el ROAS por afiliado cruzando identidades que el sistema propone y un administrador confirma.',
          '15 módulos, 64 endpoints y 93 pruebas que corren antes de cada despliegue.',
        ],
        en: [
          'Syncs ERP sales daily and creates discount codes in Shopify through GraphQL.',
          'Checks legal and banking documents with OCR, but only labels them: it never blocks a withdrawal, a person always decides.',
          'Computes per-affiliate ROAS by matching identities the system proposes and an admin confirms.',
          '15 modules, 64 endpoints and 93 tests that run before every deploy.',
        ],
      },
      stack: ['NestJS 11', 'Angular 21', 'PrimeNG', 'TypeORM', 'MySQL', 'Shopify API', 'Tesseract.js'],
    },
    {
      id: 'sales-api', cat: 'infra', status: 'prod', year: '2025 — 2026', org: 'Conecty',
      name: { es: 'API de ventas B2B', en: 'B2B sales API' },
      tagline: {
        es: 'La API con la que distribuidores e integradores de viajes venden eSIM: catálogo, venta, aprovisionamiento y QR.',
        en: 'The API distributors and travel integrators use to sell eSIMs: catalog, sale, provisioning and QR.',
      },
      highlights: {
        es: [
          'Preventa con activación diferida: reserva la eSIM al comprar y un scheduler con candado en MySQL la activa antes del viaje.',
          'Rotación de API keys por distribuidor, con expiración, revocación y periodo de gracia para la llave anterior.',
          'Seguro por defecto: los efectos externos solo corren con una bandera explícita, y el apagado termina las activaciones en curso.',
          'Saqué la lógica de ventas del monolito PHP y la llevé a esta API en Node.',
        ],
        en: [
          'Pre-sale with deferred activation: the eSIM is reserved at purchase and a MySQL-locked scheduler activates it before the trip.',
          'Per-distributor API-key rotation with expiry, revocation and a grace period for the previous key.',
          'Safe by default: external side effects only run behind an explicit flag, and shutdown finishes in-flight activations.',
          'Moved the sales logic out of the PHP monolith and into this Node API.',
        ],
      },
      stack: ['Node.js 22', 'Express', 'MySQL', 'JWT', 'Swagger', 'GitHub Actions'],
    },
    {
      id: 'erp', cat: 'platform', status: 'prod', year: '2025 — 2026', org: 'Conecty',
      name: { es: 'ERP: facturación, integradores y recaudo', en: 'ERP: invoicing, integrators and collections' },
      tagline: {
        es: 'Módulos nuevos sobre el ERP de la compañía, construidos junto a contabilidad y comercial.',
        en: 'New modules on the company ERP, built together with accounting and sales.',
      },
      highlights: {
        es: [
          'Facturación masiva por distribuidor a nivel de producto, con comisiones, distribuidores hijos y facturación electrónica.',
          'Módulo de integradores: catálogos masivos con vista previa, precios especiales y preventa por distribuidor.',
          'Conciliación del recaudo white-label: lo facturado cuadra exacto con lo cobrado en la pasarela.',
          'Auditorías de seguridad e integridad de módulos con varios agentes de IA en paralelo, en modo solo lectura.',
        ],
        en: [
          'Bulk invoicing per distributor at product level, with commissions, child distributors and e-invoicing.',
          'Integrators module: bulk catalogs with preview, special pricing and per-distributor pre-sale.',
          'White-label collections reconciliation: what is invoiced matches exactly what the gateway collected.',
          'Read-only security and integrity audits of modules, run with several AI agents in parallel.',
        ],
      },
      stack: ['PHP', 'MySQL', 'JavaScript', 'Stripe', 'Claude Code'],
    },
    {
      id: 'hojasana', cat: 'ai', status: 'dev', year: '2026', org: 'Politécnico Grancolombiano',
      name: 'HojaSana',
      tagline: {
        es: 'App móvil sin conexión para detectar roya del café con un modelo que corre en el teléfono. Proyecto universitario en curso.',
        en: 'Offline mobile app to detect coffee leaf rust with a model running on the phone. University project, in progress.',
      },
      highlights: {
        es: [
          'MobileNet afinado y exportado a TensorFlow.js: 95,9 % de exactitud sobre 680 imágenes de prueba.',
          'Mido la exactitud por fuente de datos (100 % y 87,8 %) para no esconder el caso difícil detrás del promedio.',
          'Partición por planta, no por foto, para evitar fuga entre entrenamiento y prueba.',
          'El modelo ya está entrenado y medido; la app (muestreo guiado por lote, sin señal) sigue en construcción.',
        ],
        en: [
          'Fine-tuned MobileNet exported to TensorFlow.js: 95.9% accuracy on 680 test images.',
          'Accuracy is reported per data source (100% and 87.8%) so the hard case is not hidden behind the average.',
          'Split by plant, not by photo, to avoid leakage between training and test.',
          'The model is trained and measured; the app (guided per-plot sampling, no signal needed) is still being built.',
        ],
      },
      stack: ['Ionic', 'Angular 22', 'Capacitor', 'TensorFlow.js', 'MobileNet'],
    },
    {
      id: 'cmu', cat: 'ai', status: 'dev', year: '2026', org: 'Conecty',
      name: { es: 'Centro de Mando Unificado', en: 'Unified Command Center' },
      tagline: {
        es: 'Tablero de mercadeo y ventas hecho con Spec-Driven Development: negocio escribe las specs, yo las construyo.',
        en: 'A marketing and sales dashboard run with Spec-Driven Development: business writes the specs, I build them.',
      },
      highlights: {
        es: [
          'Una constitución de 15 principios; el primero: la IA asiste, no es fuente de verdad.',
          'Las cifras deben reconciliar con un reporte de referencia antes de publicarse, y cada carga es idempotente.',
          'Permisos de mínimo privilegio: una métrica derivada hereda los permisos de sus partes.',
          'Acompaño a cuatro personas de mercadeo y comercial que ahora entregan specs en lugar de requerimientos sueltos.',
        ],
        en: [
          'A 15-principle constitution; the first one: AI assists, it is not a source of truth.',
          'Figures must reconcile against a reference report before they are published, and every load is idempotent.',
          'Least-privilege permissions: a derived metric inherits the permissions of its parts.',
          'I coach four people from marketing and sales who now hand in specs instead of loose requirements.',
        ],
      },
      stack: ['Spec Kit', 'Angular', 'NestJS', 'PostgreSQL 17', 'Prisma', 'Docker', 'Caddy'],
    },
    {
      id: 'poli-docs', cat: 'oss', status: 'oss', year: '2026', org: { es: 'Proyecto propio', en: 'Personal project' },
      name: 'poli-docs',
      tagline: {
        es: 'CLI que convierte Markdown en documentos Word con formato APA 7, sin tocar el .docx a mano.',
        en: 'A CLI that turns Markdown into APA 7 Word documents, without ever hand-editing the .docx.',
      },
      highlights: {
        es: [
          'Arma portada, niveles de título, sangría francesa, notas al pie reales y tablas numeradas.',
          'Escribe las reglas de tabla APA como OOXML directo, porque Google Docs ignora los estilos de tabla al importar.',
          'Solo biblioteca estándar de Python más pandoc; CI en Python 3.11, 3.12 y 3.13.',
        ],
        en: [
          'Builds the cover page, heading levels, hanging indents, real footnotes and numbered tables.',
          'Writes the APA table rules as direct OOXML, because Google Docs ignores table styles on import.',
          'Python standard library plus pandoc only; CI on Python 3.11, 3.12 and 3.13.',
        ],
      },
      stack: ['Python', 'pandoc', 'pytest', 'GitHub Actions', 'MIT'],
      links: [{ label: { es: 'Código en GitHub', en: 'Code on GitHub' }, href: 'https://github.com/alejoc0314/poli-docs' }],
    },
    {
      id: 'score-keeper', cat: 'platform', status: 'prod', year: '2025', org: 'Conecty',
      name: 'Score Keeper',
      tagline: {
        es: 'Metas y puntos por área para el equipo, con roles de administrador, líder y usuario.',
        en: 'Goals and points by area for the team, with admin, manager and user roles.',
      },
      highlights: {
        es: [
          'Los líderes asignan metas y puntos; cada persona ve su avance en su propio tablero.',
          'Rutas protegidas por rol, carga masiva de usuarios y API con migraciones y seeders.',
          'Buena parte de las funciones se construyó con agentes de código, vía pull requests revisados.',
        ],
        en: [
          'Managers assign goals and points; each person tracks progress on their own dashboard.',
          'Role-protected routes, bulk user upload, and an API with migrations and seeders.',
          'Many features were built with coding agents, through reviewed pull requests.',
        ],
      },
      stack: ['React 18', 'Vite', 'TanStack Query', 'Zustand', 'Express 5', 'Sequelize', 'MySQL'],
    },
    {
      id: 'ml', cat: 'ai', status: 'done', year: '2023 — 2024', org: 'GCRisk · EAFIT',
      name: { es: 'ML para riesgo financiero y salud', en: 'ML for financial risk and health' },
      tagline: {
        es: 'Modelos de machine learning para riesgo de crédito y para predecir riesgo de anemia.',
        en: 'Machine-learning models for credit risk and for predicting anemia risk.',
      },
      highlights: {
        es: [
          'Modelos de riesgo financiero integrados al producto, con tableros en Angular para la toma de decisiones.',
          'Random forest para riesgo de anemia sobre datos clínicos, afinado junto a profesionales de la salud.',
          'Base formal: Machine Learning Specialization de Stanford Online.',
        ],
        en: [
          'Financial-risk models integrated into the product, with Angular dashboards for decision making.',
          'Random forest for anemia risk on clinical data, tuned together with healthcare professionals.',
          'Formal grounding: Stanford Online’s Machine Learning Specialization.',
        ],
      },
      stack: ['Python', 'scikit-learn', 'Pandas', 'Laravel', 'Angular'],
      links: [{ label: { es: 'Notebook de anemia', en: 'Anemia notebook' }, href: 'https://github.com/alejoc0314/anemia_-random_forest' }],
    },
  ],

  // ───────────── cómo trabajo ─────────────
  principles: [
    {
      title: { es: 'La spec va primero', en: 'The spec comes first' },
      body: {
        es: 'Antes de escribir código acuerdo qué se construye y cómo vamos a saber que quedó bien. Es lo que permite que una persona de mercadeo entregue una spec y que un agente la implemente sin adivinar.',
        en: 'Before writing code I agree on what is being built and how we will know it is right. That is what lets a marketer hand in a spec and an agent implement it without guessing.',
      },
    },
    {
      title: { es: 'Evidencia o no pasó', en: "Evidence or it didn't happen" },
      body: {
        es: 'Un «ya quedó» no cuenta, venga de un agente o de mí. Cuentan los códigos de salida, los reportes de pruebas y el diff atado a un commit.',
        en: 'A “done” does not count, whether it comes from an agent or from me. Exit codes, test reports and a diff bound to a commit do.',
      },
    },
    {
      title: { es: 'La IA propone, el sistema decide', en: 'AI proposes, the system decides' },
      body: {
        es: 'Los modelos son buenos proponiendo y malos como fuente de verdad. Permisos, estados, dinero y aprobaciones viven en código determinista, con una persona al final.',
        en: 'Models are good at proposing and bad as a source of truth. Permissions, state, money and approvals live in deterministic code, with a person at the end.',
      },
    },
    {
      title: { es: 'Producción aburrida', en: 'Boring production' },
      body: {
        es: 'Migraciones solo aditivas, operaciones idempotentes, rollback automático y alertas que no se repiten. Prefiero un despliegue aburrido a un héroe a las 3 a. m.',
        en: 'Additive-only migrations, idempotent operations, automatic rollback and alerts that do not repeat. I will take a boring deploy over a 3 a.m. hero.',
      },
    },
  ],

  // ───────────── experiencia ─────────────
  experience: [
    {
      now: true,
      when: { es: 'Abr 2025 — hoy', en: 'Apr 2025 — now' },
      mode: { es: 'Medellín · híbrido', en: 'Medellín · hybrid' },
      role: { es: 'Analista de Desarrollo Senior', en: 'Senior Development Analyst' },
      org: 'Conecty',
      bullets: {
        es: [
          'Diseñé y construí la plataforma White Label de eSIM, backend y frontend: multi-tenant, pagos por distribuidor y canal B2B.',
          'Llevé IA a producción: un asistente de especificaciones con Claude para personas de negocio, y agentes con Claude y MCP dentro del flujo de desarrollo, análisis y documentación del equipo.',
          'Pasé los despliegues de PM2 manual a CI/CD con health check y rollback automático; el patrón hoy despliega cuatro servicios.',
          'Integré el ERP con pasarelas de pago, Shopify, facturación electrónica, el operador de eSIM y analítica.',
          'Lidero iniciativas técnicas y acompaño al equipo en arquitectura, refinamiento, planeación de sprints y adopción de Spec-Driven Development.',
        ],
        en: [
          'Designed and built the white-label eSIM platform, backend and frontend: multi-tenant, per-distributor payments and a B2B channel.',
          'Took AI to production: a Claude-based spec assistant for business staff, plus Claude and MCP agents inside the team’s development, analysis and documentation workflow.',
          'Moved deployments from manual PM2 to CI/CD with health checks and automatic rollback; the pattern now deploys four services.',
          'Integrated the ERP with payment gateways, Shopify, e-invoicing, the eSIM carrier and analytics.',
          'I lead technical initiatives and support the team on architecture, refinement, sprint planning and the adoption of Spec-Driven Development.',
        ],
      },
      stack: ['Angular', 'NestJS', 'TypeScript', 'PHP', 'MySQL', 'Claude', 'MCP', 'GitHub Actions'],
    },
    {
      when: { es: 'Dic 2024 — Feb 2025', en: 'Dec 2024 — Feb 2025' },
      mode: { es: 'Remoto', en: 'Remote' },
      role: { es: 'Desarrollador Web · Soluciones de IA', en: 'Web Developer · AI Solutions' },
      org: { es: 'Castor · cliente en República Dominicana', en: 'Castor · client in the Dominican Republic' },
      bullets: {
        es: [
          'Automaticé flujos de trabajo con n8n, reduciendo tareas manuales en un 40 %.',
          'Construí una aplicación web en Angular con Signals, Clean Architecture y patrón repositorio.',
          'Mejoré el manejo de estado con NgRx y RxJS, con 30 % menos llamadas a la API.',
        ],
        en: [
          'Automated workflows with n8n, cutting manual tasks by 40%.',
          'Built an Angular web application with Signals, Clean Architecture and the repository pattern.',
          'Improved state management with NgRx and RxJS, with 30% fewer API calls.',
        ],
      },
      stack: ['Angular', 'NgRx', 'RxJS', 'Tailwind CSS', 'n8n', 'Azure DevOps'],
    },
    {
      when: { es: 'Abr 2024 — Dic 2024', en: 'Apr 2024 — Dec 2024' },
      mode: { es: 'Medellín · híbrido', en: 'Medellín · hybrid' },
      role: { es: 'Desarrollador de Software · GCBloomRisk / GCRisk', en: 'Software Developer · GCBloomRisk / GCRisk' },
      org: 'Garantías Comunitarias Grupo S.A.',
      bullets: {
        es: [
          'Desarrollé modelos de machine learning para predicción de riesgo financiero, con 20 % más de precisión.',
          'Automaticé la actualización de datos, reduciendo las intervenciones manuales en un 60 %.',
          'Diseñé tableros interactivos en Angular y optimicé consultas en MySQL (35 % menos tiempo de respuesta).',
        ],
        en: [
          'Built machine-learning models for financial-risk prediction, improving accuracy by 20%.',
          'Automated data refreshes, cutting manual interventions by 60%.',
          'Designed interactive Angular dashboards and optimized MySQL queries (35% faster responses).',
        ],
      },
      stack: ['Python', 'scikit-learn', 'Angular', 'Laravel', 'MySQL'],
    },
    {
      when: { es: 'Ago 2022 — Mar 2024', en: 'Aug 2022 — Mar 2024' },
      mode: 'Medellín',
      role: { es: 'Desarrollador Full-Stack · CosmeTIC', en: 'Full-Stack Developer · CosmeTIC' },
      org: 'Distribuidora Monvel',
      bullets: {
        es: [
          'Lideré el desarrollo de un sistema de gestión de compras y ventas en Angular y Django.',
          'Implementé APIs REST para inventarios y proveedores, con autenticación JWT y control de acceso por roles.',
          'Automaticé cotizaciones y pedidos con n8n y optimicé PostgreSQL para consultas de alto volumen.',
        ],
        en: [
          'Led development of a purchasing and sales management system in Angular and Django.',
          'Implemented REST APIs for inventory and suppliers, with JWT authentication and role-based access control.',
          'Automated quotes and orders with n8n and tuned PostgreSQL for high-volume queries.',
        ],
      },
      stack: ['Angular', 'Django', 'PostgreSQL', 'JWT', 'n8n'],
    },
    {
      when: { es: 'May 2023 — Jul 2023', en: 'May 2023 — Jul 2023' },
      mode: 'Medellín',
      role: { es: 'Científico de Datos · Predicción de anemia', en: 'Data Scientist · Anemia prediction' },
      org: { es: 'Proyecto de ciencia de datos · EAFIT', en: 'Data-science project · EAFIT' },
      bullets: {
        es: [
          'Construí modelos de machine learning para apoyar el diagnóstico de anemia.',
          'Limpié y procesé datos clínicos y afiné las predicciones junto a profesionales de la salud.',
        ],
        en: [
          'Built machine-learning models to support anemia diagnosis.',
          'Cleaned and processed clinical data and refined predictions together with healthcare professionals.',
        ],
      },
      stack: ['Python', 'Pandas', 'scikit-learn'],
    },
  ],

  // ───────────── stack ─────────────
  stack: [
    {
      label: { es: 'IA y agentes', en: 'AI & agents' },
      note: { es: 'Donde paso la mayor parte del tiempo hoy.', en: 'Where I spend most of my time today.' },
      items: ['Claude API', 'Claude Code', 'MCP', 'Codex', 'Prompt caching', 'Evals', 'Spec-Driven Development', 'n8n'],
    },
    {
      label: 'Frontend',
      note: { es: 'Angular es mi casa; React cuando toca.', en: 'Angular is home; React when needed.' },
      items: ['Angular 19–22', 'TypeScript', 'RxJS', 'NgRx · Signals', 'Ionic · Capacitor', 'React', 'Tailwind CSS', 'PrimeNG'],
    },
    {
      label: 'Backend',
      note: { es: 'APIs que manejan dinero y datos sin sorpresas.', en: 'APIs that handle money and data without surprises.' },
      items: ['Node.js', 'NestJS', 'Express', 'PHP · Laravel', 'Python', 'REST', 'JWT'],
    },
    {
      label: { es: 'Datos y ML', en: 'Data & ML' },
      note: { es: 'Del esquema a la conciliación.', en: 'From schema to reconciliation.' },
      items: ['MySQL · MariaDB', 'PostgreSQL', 'TypeORM', 'Sequelize', 'MongoDB', 'scikit-learn', 'TensorFlow.js', 'Pandas'],
    },
    {
      label: { es: 'Pagos e integraciones', en: 'Payments & integrations' },
      note: { es: 'Conectar sistemas que no se hablaban.', en: 'Connecting systems that did not talk to each other.' },
      items: ['Stripe', 'Mercado Pago', 'Shopify', { es: 'Facturación electrónica', en: 'E-invoicing' }, 'Webhooks', 'Google Analytics'],
    },
    {
      label: { es: 'Entrega y calidad', en: 'Delivery & quality' },
      note: { es: 'Que desplegar sea un no-evento.', en: 'Making deploys a non-event.' },
      items: ['GitHub Actions', 'CI/CD', 'Playwright', 'Jest · Vitest · pytest', 'Linux', 'Docker', 'DigitalOcean'],
    },
  ],

  // ───────────── formación ─────────────
  education: [
    {
      label: { es: 'Estudios', en: 'Degrees' },
      items: [
        { title: { es: 'Ingeniería de Software (en curso)', en: 'Software Engineering (in progress)' }, org: 'Politécnico Grancolombiano', when: '2025 — 2027' },
        { title: { es: 'Tecnólogo en Análisis y Desarrollo de Software', en: 'Technologist in Software Analysis and Development' }, org: 'SENA', when: '2022 — 2024' },
        { title: { es: 'Técnico en Desarrollo de Software', en: 'Technician in Software Development' }, org: 'CEFIT Envigado', when: '2015 — 2016' },
      ],
    },
    {
      label: { es: 'Certificaciones', en: 'Certifications' },
      items: [
        { title: 'Machine Learning Specialization', org: 'Stanford Online · Coursera', when: '2024' },
        { title: { es: 'Backend con NestJS', en: 'Backend with NestJS' }, org: 'Platzi', when: '2026' },
        { title: { es: 'Arquitecturas Web Modernas y Escalabilidad', en: 'Modern Web Architectures and Scalability' }, org: 'Platzi', when: '2026' },
        { title: { es: 'Angular Pro · React de Cero a Experto', en: 'Angular Pro · React from Zero to Expert' }, org: 'DevTalles', when: '2024 — 2025' },
        { title: { es: 'Servidores Linux · Digital Ocean · Playwright', en: 'Linux Servers · Digital Ocean · Playwright' }, org: 'Platzi', when: '2026' },
      ],
    },
  ],

  // ───────────── sobre mí ─────────────
  about: {
    body: {
      es: [
        'Llegué a la IA desde el desarrollo de producto, y eso define cómo trabajo: no me interesa la IA como demo, sino la que entra en un sistema real y sobrevive al día a día.',
        'Llevo más de cuatro años construyendo aplicaciones empresariales de punta a punta. Hoy soy Analista de Desarrollo Senior en Conecty, donde lidero iniciativas técnicas, conecto el ERP con pasarelas de pago y plataformas externas, y construyo las herramientas con las que el equipo trabaja con agentes. Antes pasé por machine learning aplicado a riesgo financiero y a salud.',
        'Soy directo. Prefiero una conversación honesta con negocio a un requerimiento ambiguo, y medir antes que opinar. Estudio Ingeniería de Software mientras trabajo, y en mi tiempo libre construyo UMBRA.',
      ],
      en: [
        'I came to AI from product development, and that shapes how I work: I am not interested in AI as a demo, but in AI that goes into a real system and survives day-to-day use.',
        'I have spent four-plus years building business applications end to end. Today I am a Senior Development Analyst at Conecty, where I lead technical initiatives, connect the ERP to payment gateways and external platforms, and build the tools my team uses to work with agents. Before that I worked on machine learning applied to financial risk and health.',
        'I am direct. I prefer an honest conversation with the business over an ambiguous requirement, and measuring over guessing. I study Software Engineering while working, and in my spare time I build UMBRA.',
      ],
    },
    off: [
      { k: { es: 'Café', en: 'Coffee' }, v: { es: 'Pido un americano para medir la tienda. Si pasa la prueba, vuelvo por el cold brew.', en: 'I order an americano to test the shop. If it passes, I come back for the cold brew.' } },
      { k: { es: 'Moto', en: 'Motorcycle' }, v: { es: 'Royal Enfield Meteor 350. El trayecto al trabajo es parte del plan, con trancón y todo.', en: 'Royal Enfield Meteor 350. The commute is part of the plan, traffic and all.' } },
      { k: { es: 'Juegos', en: 'Games' }, v: { es: 'Partidas en línea con amigos casi todas las noches.', en: 'Online matches with friends most nights.' } },
      { k: { es: 'Idiomas', en: 'Languages' }, v: { es: 'Español nativo · inglés B2', en: 'Native Spanish · English B2' } },
    ],
  },
};
