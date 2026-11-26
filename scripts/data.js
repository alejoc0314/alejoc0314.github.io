/**
 * Contenido del portafolio (ES / EN). Casi todo cambio de texto se hace aquí.
 * Un valor es un string (igual en ambos idiomas) o { es, en }.
 * Regla de la casa: solo cifras verificables; nada de datos de negocio del empleador.
 */
window.PORTFOLIO = {
  // Textos sueltos: cada clave coincide con un data-i18n del HTML.
  ui: {
    'meta.title': { es: 'Alejandro Cañas · AI Automation Engineer', en: 'Alejandro Cañas · AI Automation Engineer' },
    skip: { es: 'Saltar al contenido', en: 'Skip to content' },
    'nav.brand': { es: '© Código por Alejandro', en: '© Code by Alejandro' },
    'nav.work': { es: 'Trabajo', en: 'Work' },
    'nav.about': { es: 'Sobre mí', en: 'About' },
    'nav.contact': { es: 'Contacto', en: 'Contact' },
    'menu.nav': { es: 'Navegación', en: 'Navigation' },
    'menu.home': { es: 'Inicio', en: 'Home' },
    'menu.social': { es: 'Redes', en: 'Socials' },
    'hero.loc': { es: 'Ubicado en<br>Medellín,<br>Colombia', en: 'Based in<br>Medellín,<br>Colombia' },
    'hero.role': { es: 'AI Automation Engineer<br>y desarrollador full-stack', en: 'AI Automation Engineer<br>and full-stack developer' },
    'intro.lead': {
      es: 'Llevo la IA a sistemas que ya están en producción. Agentes, automatizaciones y plataformas completas: sin demos y con evidencia.',
      en: 'I put AI into systems that are already in production. Agents, automations and complete platforms: no demos, with evidence.',
    },
    'intro.f1': { es: 'Agentes de IA', en: 'AI agents' },
    'intro.f1.d': { es: 'De la spec al pull request, con evidencia y aprobación humana.', en: 'From spec to pull request, with evidence and human approval.' },
    'intro.f2': { es: 'Automatizaciones', en: 'Automations' },
    'intro.f2.d': { es: 'Flujos que le quitan trabajo manual al equipo.', en: 'Workflows that take manual work off the team.' },
    'intro.f3': { es: 'Plataformas completas', en: 'Complete platforms' },
    'intro.f3.d': { es: 'Con su interfaz, sus pagos, sus datos y su despliegue.', en: 'With their interface, payments, data and deployment.' },
    'intro.cta': { es: 'Sobre mí', en: 'About me' },
    'work.label': { es: 'Trabajo reciente', en: 'Recent work' },
    'work.how': { es: 'Cómo funciona', en: 'How it works' },
    'work.pending': { es: 'Captura en camino', en: 'Screenshot on its way' },
    'work.more': { es: 'Más trabajo', en: 'More work' },

    // página "Trabajo"
    'page.work.title': { es: 'Trabajo · Alejandro Cañas', en: 'Work · Alejandro Cañas' },
    'page.work.word': { es: 'Trabajo', en: 'Work' },
    'page.home.word': { es: 'Inicio', en: 'Home' },
    // página de contacto (contacto.html)
    'page.contact.title': { es: 'Contacto · Alejandro Cañas', en: 'Contact · Alejandro Cañas' },
    'page.contact.word': { es: 'Contacto', en: 'Contact' },
    'c.title': { es: 'Cuéntame qué<br>tienes en mente', en: 'Tell me what<br>you have in mind' },
    'c.q1': { es: '¿Cómo te llamas?', en: "What's your name?" },
    'c.p1': { es: 'Tu nombre *', en: 'Your name *' },
    'c.q2': { es: '¿Cuál es tu correo?', en: "What's your email?" },
    'c.p2': { es: 'tu@correo.com *', en: 'you@email.com *' },
    'c.q3': { es: '¿De qué empresa o proyecto vienes?', en: 'What company or project are you with?' },
    'c.p3': { es: 'Opcional', en: 'Optional' },
    'c.q4': { es: '¿En qué te puedo ayudar?', en: 'What can I help you with?' },
    'c.p4': { es: 'Agentes de IA, automatizaciones, una plataforma…', en: 'AI agents, automations, a platform…' },
    'c.q5': { es: 'Tu mensaje', en: 'Your message' },
    'c.p5': { es: 'Hola Alejandro, quiero que me ayudes con… *', en: 'Hi Alejandro, I would like your help with… *' },
    'c.send': { es: 'Enviar', en: 'Send' },
    'c.sending': { es: 'Enviando…', en: 'Sending…' },
    'c.ok': { es: 'Listo, ya me llegó tu mensaje. Te respondo pronto.', en: 'Done, your message reached me. I will get back to you soon.' },
    'c.err': {
      es: 'No se pudo enviar. Escríbeme directo a <a href="mailto:alejoc0314@gmail.com">alejoc0314@gmail.com</a>.',
      en: 'It could not be sent. Write to me directly at <a href="mailto:alejoc0314@gmail.com">alejoc0314@gmail.com</a>.',
    },
    'c.side.contact': { es: 'Datos de contacto', en: 'Contact details' },
    'c.side.where': { es: 'Ubicación', en: 'Location' },
    'back.home': { es: 'Volver al inicio', en: 'Back to home' },
    'w.label': { es: 'Trabajo', en: 'Work' },
    'w.title': { es: 'Todo lo demás que he construido', en: 'Everything else I have built' },
    'w.lede': {
      es: 'Diez proyectos más, lo que hice antes de Conecty y lo que tengo público en GitHub.',
      en: 'Ten more projects, what I did before Conecty, and what I keep public on GitHub.',
    },
    'w.projects': { es: 'Proyectos', en: 'Projects' },
    'w.before': { es: 'Antes de Conecty', en: 'Before Conecty' },
    'w.github': { es: 'En GitHub', en: 'On GitHub' },
    'w.github.all': { es: 'Ver los 28 repositorios', en: 'See all 28 repositories' },
    'w.open': { es: 'Abrir', en: 'Open' },
    'about.label': { es: 'Sobre mí', en: 'About' },
    'closing.title': { es: 'Hagamos algo<br>que sí llegue a producción', en: "Let's build something<br>that actually ships" },
    'closing.cta': { es: 'Escríbeme', en: 'Get in touch' },
    'foot.version.k': { es: 'Versión', en: 'Version' },
    'foot.version.v': { es: '2026 © Edición', en: '2026 © Edition' },
    'foot.time.k': { es: 'Hora local', en: 'Local time' },
    'foot.made.k': { es: 'Diseñado en', en: 'Designed in' },
    'foot.made.v': { es: 'UMBRA Design, con agentes', en: 'UMBRA Design, with agents' },
    'wl.title': {
      es: 'Tres tiendas de marca conectadas a una sola plataforma, que cobra en la pasarela de cada marca y activa la eSIM en el ERP.',
      en: 'Three branded stores connected to a single platform, which charges through each brand’s gateway and activates the eSIM in the ERP.',
    },
    'wl.a': { es: 'Marca A', en: 'Brand A' },
    'wl.b': { es: 'Marca B', en: 'Brand B' },
    'wl.c': { es: 'Marca C', en: 'Brand C' },
    'wl.core': { es: 'Plataforma', en: 'Platform' },
    'wl.core2': { es: 'una sola', en: 'just one' },
    'wl.pay': { es: 'Pasarela', en: 'Gateway' },
    'wl.pay2': { es: 'cuenta de la marca', en: 'the brand’s account' },
    'wl.erp2': { es: 'activa la eSIM', en: 'activates the eSIM' },
  },

  // Palabras del telón de entrada.
  hello: ['Hola', 'Hello', 'Bonjour', 'Ciao', 'Olá', 'Hallo', 'Buenas', 'Quiubo'],

  // ───────────── proyectos (en este orden) ─────────────
  projects: [
    {
      id: 'umbra',
      name: 'UMBRA Engine',
      type: { es: 'Open source · Agentes de IA', en: 'Open source · AI agents' },
      desc: {
        es: 'Un motor de terminal que lleva a los agentes de IA de la spec al pull request. No escribe código: los coordina, y no les cree nada sin evidencia.',
        en: 'A terminal engine that takes AI agents from spec to pull request. It writes no code: it coordinates them, and believes nothing they say without evidence.',
      },
      how: {
        es: [
          'Escribes la spec y umbra la convierte en tareas con sus dependencias.',
          'Cada tarea pasa por seis etapas: planear, construir, revisar, verificar, escanear y entregar.',
          'Una etapa solo avanza con pruebas y un diff atados al commit. Si un agente debilita un test, se bloquea.',
          'Al final queda un pull request con la evidencia. La última palabra es de una persona.',
        ],
        en: [
          'You write the spec and umbra turns it into tasks with their dependencies.',
          'Every task goes through six stages: plan, build, review, verify, scan and ship.',
          'A stage only advances on tests and a diff bound to the commit. If an agent weakens a test, it is blocked.',
          'The result is a pull request with the evidence. A person has the last word.',
        ],
      },
      meta: { es: 'v0.29 · 35 specs · 390 pruebas · Apache-2.0', en: 'v0.29 · 35 specs · 390 tests · Apache-2.0' },
      link: { label: { es: 'Ver el código', en: 'View the code' }, href: 'https://github.com/alejoc0314/umbra-engine' },
      stage: '#15151f',
      visual: {
        img: 'assets/umbra-watch.webp', w: 1660, h: 995, // WebP sin pérdida: en una captura de interfaz pesa menos que cualquier versión reducida
        alt: {
          es: 'La consola umbra watch con cinco tareas integradas, sus etapas, intentos, costo y la bitácora de cada agente.',
          en: 'The umbra watch console with five integrated tasks, their stages, attempts, cost and each agent’s log.',
        },
      },
    },
    {
      id: 'white-label',
      name: 'White Label',
      type: { es: 'Conecty · Plataforma multimarca', en: 'Conecty · Multi-brand platform' },
      desc: {
        es: 'Una sola plataforma con la que cada distribuidor vende eSIM con su propia marca, en su propio dominio y cobrando en su propia cuenta.',
        en: 'One platform that lets every distributor sell eSIMs under its own brand, on its own domain, charging in its own account.',
      },
      how: {
        es: [
          'Cada marca tiene su tienda, con su logo, sus colores y su dominio.',
          'Cuando el cliente va a pagar, el monto, la moneda y la tasa de cambio quedan congelados.',
          'El cobro entra a la pasarela de esa marca. Si su cuenta falla, la venta se detiene: nunca se cobra en otra.',
          'Con el pago confirmado, el ERP activa la eSIM y sale el correo con el QR. Un barrido cada 15 minutos concilia lo pendiente.',
        ],
        en: [
          'Every brand has its own store, with its logo, its colors and its domain.',
          'When the customer goes to pay, the amount, currency and exchange rate are frozen.',
          'The charge goes to that brand’s gateway. If its account fails, the sale stops: it is never charged elsewhere.',
          'Once payment is confirmed, the ERP activates the eSIM and the email with the QR goes out. A sweep every 15 minutes reconciles what is pending.',
        ],
      },
      meta: { es: 'NestJS · Angular · Stripe · 531 pruebas', en: 'NestJS · Angular · Stripe · 531 tests' },
      stage: '#f1efe9',
      visual: { diagram: 'wl-diagram' },
    },
    {
      id: 'partners',
      name: 'Conecty Partners',
      type: { es: 'Conecty · Comisiones y retorno', en: 'Conecty · Commissions and return' },
      desc: {
        es: 'La plataforma con la que Conecty administra a sus validadores: personas que recomiendan la marca con un código propio. Muestra cuánto vende cada uno frente a lo que recibió.',
        en: 'The platform Conecty uses to manage its validators: people who recommend the brand with their own code. It shows how much each one sells against what they received.',
      },
      how: {
        es: [
          'Cada validador tiene un código de descuento, que se crea solo en Shopify.',
          'Todos los días se traen del ERP las ventas hechas con cada código y se calculan las comisiones.',
          'La vista de administración cruza lo entregado a cada validador con lo que vendió: su retorno, canje por canje.',
          'Retiros, pagos con soporte y cierres mensuales quedan registrados. Los documentos se revisan con OCR, pero siempre decide una persona.',
        ],
        en: [
          'Each validator has a discount code, created automatically in Shopify.',
          'Every day, sales made with each code are pulled from the ERP and commissions are calculated.',
          'The admin view matches what each validator received against what they sold: their return, exchange by exchange.',
          'Withdrawals, documented payouts and monthly closings are all recorded. Documents are checked with OCR, but a person always decides.',
        ],
      },
      meta: { es: 'NestJS · Angular · Shopify · 93 pruebas · captura con datos de ejemplo', en: 'NestJS · Angular · Shopify · 93 tests · screenshot with sample data' },
      stage: '#e9e6fb',
      // Captura de la vista real, tomada con el frontend en local y la API respondida con datos inventados.
      visual: {
        img: 'assets/partners-admin.webp', w: 1600, h: 1311, small: 'assets/partners-admin-800.webp', sw: 800,
        alt: {
          es: 'Panel de administración de Conecty Partners: validadores, ventas y comisiones por canal, tendencia mensual y alertas operativas. Datos de ejemplo.',
          en: 'Conecty Partners admin panel: validators, sales and commissions by channel, monthly trend and operational alerts. Sample data.',
        },
      },
    },
  ],

  // ───────────── sobre mí ─────────────
  about: {
    text: {
      es: [
        'Llegué a la IA desde el desarrollo de producto, y eso define cómo trabajo: no me interesa la IA como demo, sino la que entra en un sistema real y sobrevive al día a día.',
        'Llevo más de cuatro años construyendo aplicaciones empresariales de punta a punta. Hoy soy Analista de Desarrollo Senior en Conecty, y en mi tiempo libre construyo UMBRA.',
      ],
      en: [
        'I came to AI from product development, and that shapes how I work: I am not interested in AI as a demo, but in AI that goes into a real system and survives day-to-day use.',
        'I have spent four-plus years building business applications end to end. Today I am a Senior Development Analyst at Conecty, and in my spare time I build UMBRA.',
      ],
    },
    jobs: [
      { when: { es: '2025 — hoy', en: '2025 — now' }, role: { es: 'Analista de Desarrollo Senior', en: 'Senior Development Analyst' }, org: 'Conecty' },
      { when: '2024 — 2025', role: { es: 'Desarrollador web · Soluciones de IA', en: 'Web Developer · AI Solutions' }, org: 'Castor' },
      { when: '2024', role: { es: 'Desarrollador de software · ML de riesgo', en: 'Software Developer · Risk ML' }, org: 'Garantías Comunitarias' },
      { when: '2022 — 2024', role: { es: 'Desarrollador full-stack', en: 'Full-Stack Developer' }, org: 'Distribuidora Monvel' },
    ],
    facts: [
      { k: { es: 'Estudio', en: 'Studying' }, v: { es: 'Ingeniería de Software, Politécnico Grancolombiano (2027).', en: 'Software Engineering, Politécnico Grancolombiano (2027).' } },
      { k: { es: 'Café', en: 'Coffee' }, v: { es: 'Pido un americano para medir la tienda. Si pasa, vuelvo por el cold brew.', en: 'I order an americano to test the shop. If it passes, I come back for the cold brew.' } },
      { k: { es: 'Moto', en: 'Motorcycle' }, v: { es: 'Royal Enfield Meteor 350. El trancón también cuenta como paseo.', en: 'Royal Enfield Meteor 350. Traffic counts as a ride too.' } },
    ],
  },

  // ───────────── repos públicos (selección) ─────────────
  repos: [
    { name: 'umbra-engine', lang: 'Python', desc: { es: 'Orquestador de agentes de IA: de la spec al pull request, con evidencia y aprobación humana.', en: 'AI-agent orchestrator: from spec to pull request, with evidence and human approval.' } },
    { name: 'poli-docs', lang: 'Python', desc: { es: 'CLI que convierte Markdown en documentos Word con formato APA 7.', en: 'CLI that turns Markdown into APA 7 Word documents.' } },
    { name: 'neural-networks-coffee-roasting', lang: 'Jupyter', desc: { es: 'Una red neuronal que aprende a tostar café: el clásico de la especialización de ML.', en: 'A neural network that learns to roast coffee: the classic from the ML specialization.' } },
    { name: 'anemia-random-forest', lang: 'Jupyter', desc: { es: 'Random forest para predecir riesgo de anemia a partir de datos clínicos.', en: 'Random forest to predict anemia risk from clinical data.' } },
    { name: 'k-means-clustering', lang: 'Jupyter', desc: { es: 'Agrupamiento con k-means, paso a paso.', en: 'K-means clustering, step by step.' } },
    { name: 'maquetacion-gc', lang: 'HTML · CSS', desc: { es: 'Maquetación del sitio web de Garantías Comunitarias Grupo S.A.', en: 'Front-end build of the Garantías Comunitarias Grupo S.A. website.' } },
  ],

  // ───────────── página "Trabajo": lo que no está en la portada ─────────────
  status: {
    prod: {
      es: "En producción",
      en: "In production"
    },
    oss: {
      es: "Open source",
      en: "Open source"
    },
    dev: {
      es: "En construcción",
      en: "In progress"
    },
    done: {
      es: "Entregado",
      en: "Delivered"
    }
  },

  more: [
    {
      id: "spec-assistant",
      name: {
        es: "Asistente de especificaciones",
        en: "Spec assistant"
      },
      org: "Conecty",
      year: "2026",
      status: "prod",
      tagline: {
        es: "Un chat donde las personas de negocio escriben specs con Claude, y el equipo técnico las recibe como pull request.",
        en: "A chat where business people write specs with Claude, and the tech team receives them as pull requests."
      },
      highlights: {
        es: [
          "Batería de regresión antes de cambiar modelo, esfuerzo o prompt; la condición para pasar es cero cifras inventadas.",
          "Guardrails: un borrador sin secciones obligatorias o con métricas que no existen no se puede enviar, y las cifras sin fuente viajan marcadas hasta el PR.",
          "Prompt caching en dos capas (contexto del proyecto compartido, conversación propia) y costo calculado y guardado por respuesta.",
          "Tope de gasto mensual global y por persona; el token de GitHub de cada proyecto se guarda cifrado y nunca llega al navegador.",
          "CI/CD completo: pruebas unitarias y e2e, health check y rollback automático."
        ],
        en: [
          "A regression battery runs before any change of model, effort or prompt; the pass bar is zero invented figures.",
          "Guardrails: a draft with missing required sections or non-existent metrics cannot be submitted, and unsourced figures stay flagged all the way to the PR.",
          "Two-layer prompt caching (shared project context, per-conversation cache) with cost computed and stored per response.",
          "Global and per-person monthly spend caps; each project’s GitHub token is stored encrypted and never reaches the browser.",
          "Full CI/CD: unit and e2e tests, health check and automatic rollback."
        ]
      },
      stack: [
        "NestJS 11",
        "Angular 21",
        "Claude API",
        "Prompt caching",
        "MySQL",
        "GitHub API",
        "GitHub Actions"
      ]
    },
    {
      id: "cdr",
      name: {
        es: "Pipeline de registros de consumo",
        en: "Usage-records pipeline"
      },
      org: "Conecty",
      year: "2026",
      status: "prod",
      tagline: {
        es: "Ingesta idempotente de los registros de uso del operador de eSIM, sin perder una sola hora.",
        en: "Idempotent ingestion of the eSIM carrier’s usage records, without losing a single hour."
      },
      highlights: {
        es: [
          "El sha256 de cada archivo es a la vez clave de deduplicación y candado entre peticiones: cuatro envíos simultáneos del mismo archivo dejan un solo registro.",
          "Contrato 4xx/5xx estricto: un 4xx solo significa «archivo malo», nunca una falla del servidor, así ningún dato se descarta en silencio.",
          "Freno de cortesía: tras cada carga espera 3× el tiempo de proceso para no ahogar la base de datos que comparte con el ERP.",
          "Descargas atómicas (.part → tamaño → sha256 → rename), host key fijada y secretos en el Credential Manager de Windows.",
          "Alertas con estado: abren y cierran sin repetirse, y avisan si falta una hora o si el agente dejó de reportarse."
        ],
        en: [
          "Each file’s sha256 is both the dedup key and a cross-request lock: four simultaneous sends of the same file leave exactly one record.",
          "Strict 4xx/5xx contract: a 4xx only ever means “bad file”, never a server fault, so no data is silently dropped.",
          "Courtesy throttle: after each load it waits 3× the processing time so it never starves the database it shares with the ERP.",
          "Atomic downloads (.part → size → sha256 → rename), a pinned host key, and secrets kept in Windows Credential Manager.",
          "Stateful alerts: they open and resolve without repeating, and fire when an hour is missing or the agent stops reporting."
        ]
      },
      stack: [
        "NestJS 12",
        "TypeORM",
        "MariaDB",
        "Python",
        "Paramiko",
        "SQLite",
        "PowerShell",
        "GitHub Actions"
      ]
    },
    {
      id: "cicd",
      name: {
        es: "Despliegues sin sustos",
        en: "Boring deployments"
      },
      org: "Conecty",
      year: "2026",
      status: "prod",
      tagline: {
        es: "De subir archivos y reiniciar PM2 a mano, a un pipeline que se revierte solo en ~9 segundos.",
        en: "From uploading files and restarting PM2 by hand to a pipeline that rolls itself back in ~9 seconds."
      },
      highlights: {
        es: [
          "GitHub Actions compila y prueba; un supervisor en el servidor migra, cambia el symlink y verifica /health contra el commit.",
          "Si el health check falla, vuelve solo a la versión anterior. El frontend sube primero los assets con hash y al final el index.html.",
          "Ensayado en un clon de producción: el corte real tomó 1–2 minutos y no se perdió ningún dato.",
          "Sin infraestructura nueva. El mismo patrón hoy despliega cuatro servicios."
        ],
        en: [
          "GitHub Actions builds and tests; a supervisor on the server migrates, swaps the symlink and checks /health against the commit.",
          "If the health check fails it reverts to the previous release on its own. The frontend uploads hashed assets first and index.html last.",
          "Rehearsed on a production clone: the real cutover took 1–2 minutes and lost no data.",
          "No new infrastructure. The same pattern now deploys four services."
        ]
      },
      stack: [
        "GitHub Actions",
        "Bash",
        "SFTP",
        "Linux",
        "Discord webhooks"
      ]
    },
    {
      id: "sales-api",
      name: {
        es: "API de ventas B2B",
        en: "B2B sales API"
      },
      org: "Conecty",
      year: "2025 — 2026",
      status: "prod",
      tagline: {
        es: "La API con la que distribuidores e integradores de viajes venden eSIM: catálogo, venta, aprovisionamiento y QR.",
        en: "The API distributors and travel integrators use to sell eSIMs: catalog, sale, provisioning and QR."
      },
      highlights: {
        es: [
          "Preventa con activación diferida: reserva la eSIM al comprar y un scheduler con candado en MySQL la activa antes del viaje.",
          "Rotación de API keys por distribuidor, con expiración, revocación y periodo de gracia para la llave anterior.",
          "Seguro por defecto: los efectos externos solo corren con una bandera explícita, y el apagado termina las activaciones en curso.",
          "Saqué la lógica de ventas del monolito PHP y la llevé a esta API en Node."
        ],
        en: [
          "Pre-sale with deferred activation: the eSIM is reserved at purchase and a MySQL-locked scheduler activates it before the trip.",
          "Per-distributor API-key rotation with expiry, revocation and a grace period for the previous key.",
          "Safe by default: external side effects only run behind an explicit flag, and shutdown finishes in-flight activations.",
          "Moved the sales logic out of the PHP monolith and into this Node API."
        ]
      },
      stack: [
        "Node.js 22",
        "Express",
        "MySQL",
        "JWT",
        "Swagger",
        "GitHub Actions"
      ]
    },
    {
      id: "erp",
      name: {
        es: "ERP: facturación, integradores y recaudo",
        en: "ERP: invoicing, integrators and collections"
      },
      org: "Conecty",
      year: "2025 — 2026",
      status: "prod",
      tagline: {
        es: "Módulos nuevos sobre el ERP de la compañía, construidos junto a contabilidad y comercial.",
        en: "New modules on the company ERP, built together with accounting and sales."
      },
      highlights: {
        es: [
          "Facturación masiva por distribuidor a nivel de producto, con comisiones, distribuidores hijos y facturación electrónica.",
          "Módulo de integradores: catálogos masivos con vista previa, precios especiales y preventa por distribuidor.",
          "Conciliación del recaudo white-label: lo facturado cuadra exacto con lo cobrado en la pasarela.",
          "Auditorías de seguridad e integridad de módulos con varios agentes de IA en paralelo, en modo solo lectura."
        ],
        en: [
          "Bulk invoicing per distributor at product level, with commissions, child distributors and e-invoicing.",
          "Integrators module: bulk catalogs with preview, special pricing and per-distributor pre-sale.",
          "White-label collections reconciliation: what is invoiced matches exactly what the gateway collected.",
          "Read-only security and integrity audits of modules, run with several AI agents in parallel."
        ]
      },
      stack: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Stripe",
        "Claude Code"
      ]
    },
    {
      id: "hojasana",
      name: "HojaSana",
      org: "Politécnico Grancolombiano",
      year: "2026",
      status: "dev",
      tagline: {
        es: "App móvil sin conexión para detectar roya del café con un modelo que corre en el teléfono. Proyecto universitario en curso.",
        en: "Offline mobile app to detect coffee leaf rust with a model running on the phone. University project, in progress."
      },
      highlights: {
        es: [
          "MobileNet afinado y exportado a TensorFlow.js: 95,9 % de exactitud sobre 680 imágenes de prueba.",
          "Mido la exactitud por fuente de datos (100 % y 87,8 %) para no esconder el caso difícil detrás del promedio.",
          "Partición por planta, no por foto, para evitar fuga entre entrenamiento y prueba.",
          "El modelo ya está entrenado y medido; la app (muestreo guiado por lote, sin señal) sigue en construcción."
        ],
        en: [
          "Fine-tuned MobileNet exported to TensorFlow.js: 95.9% accuracy on 680 test images.",
          "Accuracy is reported per data source (100% and 87.8%) so the hard case is not hidden behind the average.",
          "Split by plant, not by photo, to avoid leakage between training and test.",
          "The model is trained and measured; the app (guided per-plot sampling, no signal needed) is still being built."
        ]
      },
      stack: [
        "Ionic",
        "Angular 22",
        "Capacitor",
        "TensorFlow.js",
        "MobileNet"
      ]
    },
    {
      id: "cmu",
      name: {
        es: "Centro de Mando Unificado",
        en: "Unified Command Center"
      },
      org: "Conecty",
      year: "2026",
      status: "dev",
      tagline: {
        es: "Tablero de mercadeo y ventas hecho con Spec-Driven Development: negocio escribe las specs, yo las construyo.",
        en: "A marketing and sales dashboard run with Spec-Driven Development: business writes the specs, I build them."
      },
      highlights: {
        es: [
          "Una constitución de 15 principios; el primero: la IA asiste, no es fuente de verdad.",
          "Las cifras deben reconciliar con un reporte de referencia antes de publicarse, y cada carga es idempotente.",
          "Permisos de mínimo privilegio: una métrica derivada hereda los permisos de sus partes.",
          "Acompaño a cuatro personas de mercadeo y comercial que ahora entregan specs en lugar de requerimientos sueltos."
        ],
        en: [
          "A 15-principle constitution; the first one: AI assists, it is not a source of truth.",
          "Figures must reconcile against a reference report before they are published, and every load is idempotent.",
          "Least-privilege permissions: a derived metric inherits the permissions of its parts.",
          "I coach four people from marketing and sales who now hand in specs instead of loose requirements."
        ]
      },
      stack: [
        "Spec Kit",
        "Angular",
        "NestJS",
        "PostgreSQL 17",
        "Prisma",
        "Docker",
        "Caddy"
      ]
    },
    {
      id: "poli-docs",
      name: "poli-docs",
      org: {
        es: "Proyecto propio",
        en: "Personal project"
      },
      year: "2026",
      status: "oss",
      tagline: {
        es: "CLI que convierte Markdown en documentos Word con formato APA 7, sin tocar el .docx a mano.",
        en: "A CLI that turns Markdown into APA 7 Word documents, without ever hand-editing the .docx."
      },
      highlights: {
        es: [
          "Arma portada, niveles de título, sangría francesa, notas al pie reales y tablas numeradas.",
          "Escribe las reglas de tabla APA como OOXML directo, porque Google Docs ignora los estilos de tabla al importar.",
          "Solo biblioteca estándar de Python más pandoc; CI en Python 3.11, 3.12 y 3.13."
        ],
        en: [
          "Builds the cover page, heading levels, hanging indents, real footnotes and numbered tables.",
          "Writes the APA table rules as direct OOXML, because Google Docs ignores table styles on import.",
          "Python standard library plus pandoc only; CI on Python 3.11, 3.12 and 3.13."
        ]
      },
      stack: [
        "Python",
        "pandoc",
        "pytest",
        "GitHub Actions",
        "MIT"
      ],
      links: [
        {
          label: {
            es: "Código en GitHub",
            en: "Code on GitHub"
          },
          href: "https://github.com/alejoc0314/poli-docs"
        }
      ]
    },
    {
      id: "score-keeper",
      name: "Score Keeper",
      org: "Conecty",
      year: "2025",
      status: "prod",
      tagline: {
        es: "Metas y puntos por área para el equipo, con roles de administrador, líder y usuario.",
        en: "Goals and points by area for the team, with admin, manager and user roles."
      },
      highlights: {
        es: [
          "Los líderes asignan metas y puntos; cada persona ve su avance en su propio tablero.",
          "Rutas protegidas por rol, carga masiva de usuarios y API con migraciones y seeders.",
          "Buena parte de las funciones se construyó con agentes de código, vía pull requests revisados."
        ],
        en: [
          "Managers assign goals and points; each person tracks progress on their own dashboard.",
          "Role-protected routes, bulk user upload, and an API with migrations and seeders.",
          "Many features were built with coding agents, through reviewed pull requests."
        ]
      },
      stack: [
        "React 18",
        "Vite",
        "TanStack Query",
        "Zustand",
        "Express 5",
        "Sequelize",
        "MySQL"
      ]
    },
    {
      id: "ml",
      name: {
        es: "ML para riesgo financiero y salud",
        en: "ML for financial risk and health"
      },
      org: "GCRisk · EAFIT",
      year: "2023 — 2024",
      status: "done",
      tagline: {
        es: "Modelos de machine learning para riesgo de crédito y para predecir riesgo de anemia.",
        en: "Machine-learning models for credit risk and for predicting anemia risk."
      },
      highlights: {
        es: [
          "Modelos de riesgo financiero integrados al producto, con tableros en Angular para la toma de decisiones.",
          "Random forest para riesgo de anemia sobre datos clínicos, afinado junto a profesionales de la salud.",
          "Base formal: Machine Learning Specialization de Stanford Online."
        ],
        en: [
          "Financial-risk models integrated into the product, with Angular dashboards for decision making.",
          "Random forest for anemia risk on clinical data, tuned together with healthcare professionals.",
          "Formal grounding: Stanford Online’s Machine Learning Specialization."
        ]
      },
      stack: [
        "Python",
        "scikit-learn",
        "Pandas",
        "Laravel",
        "Angular"
      ],
      links: [
        {
          label: {
            es: "Notebook de anemia",
            en: "Anemia notebook"
          },
          href: "https://github.com/alejoc0314/anemia-random-forest"
        }
      ]
    }
  ],

  // trabajos anteriores a Conecty
  before: [
    {
      when: {
        es: "Dic 2024 — Feb 2025",
        en: "Dec 2024 — Feb 2025"
      },
      role: {
        es: "Desarrollador Web · Soluciones de IA",
        en: "Web Developer · AI Solutions"
      },
      org: {
        es: "Castor · cliente en República Dominicana",
        en: "Castor · client in the Dominican Republic"
      },
      bullets: {
        es: [
          "Automaticé flujos de trabajo con n8n, reduciendo tareas manuales en un 40 %.",
          "Construí una aplicación web en Angular con Signals, Clean Architecture y patrón repositorio.",
          "Mejoré el manejo de estado con NgRx y RxJS, con 30 % menos llamadas a la API."
        ],
        en: [
          "Automated workflows with n8n, cutting manual tasks by 40%.",
          "Built an Angular web application with Signals, Clean Architecture and the repository pattern.",
          "Improved state management with NgRx and RxJS, with 30% fewer API calls."
        ]
      },
      stack: [
        "Angular",
        "NgRx",
        "RxJS",
        "Tailwind CSS",
        "n8n",
        "Azure DevOps"
      ]
    },
    {
      when: {
        es: "Abr 2024 — Dic 2024",
        en: "Apr 2024 — Dec 2024"
      },
      role: {
        es: "Desarrollador de Software · GCBloomRisk / GCRisk",
        en: "Software Developer · GCBloomRisk / GCRisk"
      },
      org: "Garantías Comunitarias Grupo S.A.",
      bullets: {
        es: [
          "Desarrollé modelos de machine learning para predicción de riesgo financiero, con 20 % más de precisión.",
          "Automaticé la actualización de datos, reduciendo las intervenciones manuales en un 60 %.",
          "Diseñé tableros interactivos en Angular y optimicé consultas en MySQL (35 % menos tiempo de respuesta)."
        ],
        en: [
          "Built machine-learning models for financial-risk prediction, improving accuracy by 20%.",
          "Automated data refreshes, cutting manual interventions by 60%.",
          "Designed interactive Angular dashboards and optimized MySQL queries (35% faster responses)."
        ]
      },
      stack: [
        "Python",
        "scikit-learn",
        "Angular",
        "Laravel",
        "MySQL"
      ]
    },
    {
      when: {
        es: "Ago 2022 — Mar 2024",
        en: "Aug 2022 — Mar 2024"
      },
      role: {
        es: "Desarrollador Full-Stack · CosmeTIC",
        en: "Full-Stack Developer · CosmeTIC"
      },
      org: "Distribuidora Monvel",
      bullets: {
        es: [
          "Lideré el desarrollo de un sistema de gestión de compras y ventas en Angular y Django.",
          "Implementé APIs REST para inventarios y proveedores, con autenticación JWT y control de acceso por roles.",
          "Automaticé cotizaciones y pedidos con n8n y optimicé PostgreSQL para consultas de alto volumen."
        ],
        en: [
          "Led development of a purchasing and sales management system in Angular and Django.",
          "Implemented REST APIs for inventory and suppliers, with JWT authentication and role-based access control.",
          "Automated quotes and orders with n8n and tuned PostgreSQL for high-volume queries."
        ]
      },
      stack: [
        "Angular",
        "Django",
        "PostgreSQL",
        "JWT",
        "n8n"
      ]
    },
    {
      when: {
        es: "May 2023 — Jul 2023",
        en: "May 2023 — Jul 2023"
      },
      role: {
        es: "Científico de Datos · Predicción de anemia",
        en: "Data Scientist · Anemia prediction"
      },
      org: {
        es: "Proyecto de ciencia de datos · EAFIT",
        en: "Data-science project · EAFIT"
      },
      bullets: {
        es: [
          "Construí modelos de machine learning para apoyar el diagnóstico de anemia.",
          "Limpié y procesé datos clínicos y afiné las predicciones junto a profesionales de la salud."
        ],
        en: [
          "Built machine-learning models to support anemia diagnosis.",
          "Cleaned and processed clinical data and refined predictions together with healthcare professionals."
        ]
      },
      stack: [
        "Python",
        "Pandas",
        "scikit-learn"
      ]
    }
  ],
};
