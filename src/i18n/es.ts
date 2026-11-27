import type { Dict } from './types';

// Textos de la web. Lo marcado `// DRAFT` es una propuesta de desarrollo pendiente del redactor.
// Lo marcado `// app` son textos y datos de demostración copiados de la app (sus locales, su
// catálogo de plantillas, su README y las capturas): cambiarlos aquí sin cambiarlos allí miente.
export const es: Dict = {
  lang: 'es',
  ogLocale: 'es_ES',
  meta: {
    // DRAFT
    title: 'Understaffed: agentes de IA para tus proyectos de software',
    // DRAFT
    description:
      'Understaffed: proyectos de software con agentes de IA. Contratas roles, les asignas tareas de un tablero y nada llega a tu rama sin tu aprobación.',
    // DRAFT: los requisitos, para los datos estructurados
    softwareRequirements: 'git 2.30 o posterior, y Claude Code o Codex instalado y con la sesión iniciada',
    ogImageAlt: 'Understaffed, gestión de proyectos de software con agentes de IA',
  },
  skip: 'Saltar al contenido',
  header: {
    home: 'Understaffed, inicio',
    navLabel: 'Principal',
    nav: [
      { id: 'how', label: 'Cómo funciona' },
      { id: 'status', label: 'Estado' },
      { id: 'roles', label: 'Roles' },
      { id: 'requirements', label: 'Requisitos' },
    ],
    cta: 'Pedir acceso',
    menu: 'Secciones',
    switchText: 'English',
  },
  hero: {
    // DRAFT
    title: ['Cada tarea pasa', 'por ti dos veces'],
    // DRAFT
    lead: 'Contratas roles de IA y les asignas tareas de un tablero. Apruebas la spec antes de que se escriba código, y el código antes de que llegue a tu rama.',
    cta: 'Pedir acceso',
    // DRAFT
    secondary: 'Probar la demo',
    // app (roles del proyecto de demostración y la plantilla Tester)
    tags: [
      { label: 'Backend', tone: 'lilac' },
      { label: 'Analista', tone: 'green' },
      { label: 'Tester', tone: 'yellow' },
      { label: 'Frontend', tone: 'orange' },
      { label: 'Full-stack', tone: 'pink' },
    ],
    demo: {
      label: 'Demostración del tablero de Understaffed con la tarea #6',
      // DRAFT
      caption: 'Demostración con el proyecto de ejemplo storefront; la ejecución está simulada.',
      // app
      app: {
        projects: 'Proyectos',
        project: 'storefront',
        tabs: ['Tablero', 'Equipo', 'Estado'],
        path: 'E:\\dev\\storefront',
        noAccount: 'Sin cuenta',
        signIn: 'Entra en Ajustes',
        send: 'Enviar',
        receive: 'Recibir',
        settings: 'Ajustes',
        addTask: 'Añadir tarea',
      },
      // app
      columns: ['Backlog', 'Por hacer', 'En curso', 'En revisión', 'Hecho'],
      task: { num: '#6', title: 'Modo oscuro en el panel de administración', prio: 'Media', role: 'Frontend', total: 8 },
      others: [
        [
          { num: '#9', title: 'Búsqueda de productos con filtros', prio: 'Media', role: 'Frontend' },
          { num: '#10', title: 'Pruebas de extremo a extremo del checkout', prio: 'Media', role: 'QA' },
          { num: '#11', title: 'Servir las imágenes de producto en WebP', prio: 'Baja' },
        ],
        [
          { num: '#7', title: 'Cupones de descuento en el checkout', prio: 'Alta', progress: '0/3', role: 'Full-stack' },
          { num: '#8', title: 'Aviso por email de stock bajo', prio: 'Baja', progress: '0/2', role: 'Backend' },
        ],
        [{ num: '#5', title: 'Límite de intentos en el inicio de sesión', prio: 'Urgente', progress: '3/4', role: 'Backend', state: 'running' }],
        [{ num: '#4', title: 'Exportar pedidos a CSV', prio: 'Alta', progress: '5/5', role: 'Backend', state: 'awaitingReview' }],
        [
          { num: '#1', title: 'Paginación en el listado de pedidos', prio: 'Alta', progress: '4/4', role: 'Backend' },
          { num: '#2', title: 'Validar el email al registrarse', prio: 'Media', progress: '3/3', role: 'Backend' },
          { num: '#3', title: 'Redondeo del IVA en el carrito', prio: 'Urgente', progress: '2/2', role: 'Backend' },
        ],
      ],
      chips: { awaiting: 'Espera tu aprobación', running: 'En marcha', awaitingReview: 'Espera tu revisión', integrating: 'Integrando', specifying: 'Especificando' },
      actions: {
        requestChanges: 'Pedir cambios',
        approveSpec: 'Aprobar spec',
        run: 'Ejecutar',
        sendBack: 'Devolver',
        approveCode: 'Aprobar',
        // DRAFT (control de la demostración, no de la app)
        restart: 'Volver a empezar',
      },
      // DRAFT: lo que toca hacer en cada paso
      hints: [
        'Pruébalo: lee los criterios de la tarea\u00a0#6 y aprueba su spec, o pide cambios.',
        'La spec está aprobada. Ejecuta la tarea: su rol trabajará en una rama propia.',
        'El rol Frontend trabaja en su rama. No tienes que hacer nada hasta que termine.',
        'Ha terminado bien. Mira los archivos que ha cambiado y aprueba, o devuélvela con un comentario.',
        'Todo el trabajo de la tarea en un único commit sobre tu rama, con tus hooks y tu firma.',
      ],
      notes: {
        requestChanges: 'El responsable revisará el cambio con tu comentario, sin empezar de cero.',
        sendBack: 'Retomará su sesión con tu comentario sobre lo que ya hizo, y la tarea volverá a En curso.',
      },
      // app (panel de la tarea #6, pestaña Spec): los títulos de sus criterios de aceptación
      spec: {
        head: 'Criterios de aceptación',
        criteria: ['Tema según el sistema', 'Elección del usuario', 'Contraste suficiente'],
        valid: 'La spec pasa la validación de OpenSpec.',
      },
      // app (revisión de una tarea: lista «Código» y último mensaje). Los archivos y sus cifras son
      // de muestra, inventados para la demostración.
      code: {
        head: 'Código',
        files: [
          { name: 'theme.css', add: 64 },
          { name: 'ThemeMenu.tsx', add: 41 },
          { name: 'prefs.ts', add: 9, del: 1 },
          { name: 'theme.test.ts', add: 36 },
        ],
        message: 'Hecho. Todas las tareas están marcadas y las pruebas pasan.',
      },
      // app (textos del log); el hash 9c41e7a es de muestra, inventado para la demostración
      log: [
        'Espacio de trabajo creado en la rama understaffed/modo-oscuro-en-el-panel.',
        'Sesión iniciada',
        'Trabajo guardado en la rama de la tarea (9c41e7a).',
        'Terminó bien',
      ],
      review: { files: '8 de 8 tareas hechas', result: '', message: '' },
      done: 'Integrada en main\u00a0· Un\u00a0commit',
      // DRAFT
      live: '{title}: {column}.',
      // DRAFT
      fallbackTitle: 'En la app, esta tarea avanza así:',
      // DRAFT
      fallback: [
        'Aprobar spec: pasa a Por hacer.',
        'Ejecutar: su rol la hace en su propia rama y pasa a En revisión.',
        'Aprobar: el código llega a tu rama en un commit.',
      ],
    },
  },
  how: {
    id: 'how',
    // DRAFT
    title: 'Así llega una tarea a tu rama',
    // DRAFT
    lead: 'Understaffed gestiona proyectos de software con un equipo de agentes de IA organizado como una empresa. Apruebas la spec antes del código, y el código antes de tu rama.',
    cards: [
      {
        tone: 'lilac',
        // DRAFT
        title: 'Primero, la spec',
        // DRAFT
        text: 'Anotas la tarea y su rol redacta el cambio en OpenSpec, un formato abierto de specs que vive en archivos de tu repositorio: propuesta, requisitos con escenarios, diseño y tareas. Lo apruebas o pides cambios.',
        shot: { file: 'aprobacion-spec', alt: 'Criterios de aceptación de la spec de la tarea #6: «Tema según el sistema», con su requisito y el escenario «Sistema en oscuro»' },
      },
      {
        tone: 'orange',
        // DRAFT
        title: 'Después, el trabajo',
        // DRAFT
        text: 'El rol trabaja en una rama propia con Claude Code o Codex, el CLI que ya tienes y ya pagas. Understaffed no guarda claves.',
        // app (README), abreviado
        code: {
          label: 'Así lanza cada ejecución con Claude Code (abreviado):',
          text: 'claude -p\n  --output-format stream-json\n  --permission-mode acceptEdits\n  --tools Read,Glob,Grep,Edit,\n          Write,Agent,Skill\n  --append-system-prompt-file\n      <instrucciones del rol>',
        },
      },
      {
        tone: 'green',
        // DRAFT
        title: 'Al final, el código',
        // DRAFT
        text: 'Revisas el diff y lo apruebas, lo devuelves con un comentario o lo descartas. Aprobar lo integra en tu rama en un commit, con tus hooks y tu firma.',
        shot: { file: 'revision-diff', alt: 'Diff de src/orders/orders.routes.ts en la revisión de la tarea #4, con las líneas añadidas y quitadas' },
      },
    ],
  },
  status: {
    id: 'status',
    // DRAFT
    title: 'Lo que espera tu decisión, de un vistazo',
    // DRAFT
    lead: 'La vista Estado reúne lo que espera tu aprobación, lo que está en marcha, la actividad y el coste por rol. En un grupo, el de todos sus repositorios.',
    // app
    cost: 'Coste que informa el proveedor; con suscripción es una estimación.',
    // DRAFT
    swipe: 'En esta pantalla, desliza cada imagen para verla entera.',
    shots: [
      // DRAFT (títulos y pies)
      { file: 'estado-decision', alt: 'La lista «Espera tu decisión» del grupo Tienda online: cinco tareas de sus tres repositorios, tres que esperan tu aprobación y dos tu revisión', title: 'Espera tu decisión', caption: 'Las specs y el código que esperan tu aprobación en los tres repositorios de «Tienda online».' },
      { file: 'estado-en-marcha', alt: 'La franja «En marcha»: el rol Backend ejecuta la tarea #5 de storefront, «Límite de intentos en el inicio de sesión», desde hace 59 segundos', title: 'En marcha', caption: 'Lo que se está ejecutando, qué rol lo hace y desde cuándo.', strip: true },
      { file: 'estado-coste', alt: 'Coste y tiempo de los últimos 30 días por rol en el proyecto storefront: Backend, Full-stack y Frontend', title: 'Coste por rol', caption: 'Lo que han costado las ejecuciones de cada rol en los últimos 30 días.', strip: true },
    ],
  },
  roles: {
    id: 'roles',
    // DRAFT
    title: 'Contrata los roles que necesitas',
    // DRAFT
    lead: 'Empieza por una plantilla o por un rol en blanco. Cada rol lleva sus instrucciones, su modelo y su permiso para ejecutar comandos.',
    // DRAFT
    templatesLabel: 'Elige una plantilla para leer sus instrucciones',
    // DRAFT
    current: 'En el diálogo',
    // DRAFT: `{name}` es la plantilla
    pick: 'Ver {name} en el diálogo',
    // DRAFT
    caption: 'El diálogo de contratar de la app, con las instrucciones completas de la plantilla elegida.',
    // app (catálogo de plantillas: nombre y primera frase de sus instrucciones)
    templates: [
      { name: 'Analista de producto', text: 'Tu fuerte es entender el problema antes que la solución: qué necesita el usuario, por qué y cómo se sabrá que está resuelto.', tone: 'green', prompt:
          'Eres analista de producto en un equipo de software. Tu fuerte es entender el problema antes que la solución: qué necesita el usuario, por qué y cómo se sabrá que está resuelto.\n\n- Al especificar, escribe requisitos verificables y escenarios concretos (GIVEN/WHEN/THEN) que sirvan como criterios de aceptación. Cubre el caso habitual, los errores y los límites.\n- Anota los supuestos y las preguntas abiertas en el diseño en lugar de inventar respuestas.\n- Mantén el alcance pequeño: separa lo imprescindible de lo deseable y deja fuera lo que la tarea no pide.\n- Al implementar, prioriza la documentación, los textos de la interfaz y las pruebas de aceptación; si una tarea exige código, hazlo de la forma más sencilla y explícalo.',
      },
      { name: 'Desarrollador full-stack', text: 'Trabajas de punta a punta: datos, lógica, interfaz y pruebas.', tone: 'pink', prompt:
          'Eres desarrollador full-stack. Trabajas de punta a punta: datos, lógica, interfaz y pruebas.\n\n- Antes de cambiar nada, lee el código cercano y sigue sus convenciones, su estructura y su estilo.\n- Haz cambios pequeños y centrados en lo que pide cada tarea; no reorganices lo que no hace falta.\n- Acompaña cada comportamiento nuevo de sus pruebas cuando el proyecto las tenga.\n- Valida la entrada en el borde del sistema, trata los errores de forma explícita y no dejes secretos en el código.\n- Si algo de la spec es ambiguo o contradictorio, elige la opción más prudente y déjalo anotado.',
      },
      { name: 'Desarrollador frontend', text: 'Construyes interfaces claras, accesibles y coherentes con el sistema de diseño del proyecto.', tone: 'orange', prompt:
          'Eres desarrollador frontend. Construyes interfaces claras, accesibles y coherentes con el sistema de diseño del proyecto.\n\n- Reutiliza los componentes, estilos y variables de diseño que ya existen antes de crear otros nuevos.\n- Cuida los estados de carga, vacío y error, y que todo se pueda usar con teclado y con lector de pantalla.\n- Mantén la lógica de negocio fuera de los componentes de presentación.\n- Sigue la estructura, los nombres y la forma de gestionar el estado que ya usa el proyecto.\n- Escribe pruebas para la lógica de la interfaz que tenga reglas, no para la maquetación.',
      },
      { name: 'Desarrollador backend', text: 'Te ocupas de los datos, las API, la lógica de negocio y su fiabilidad.', tone: 'lilac', prompt:
          'Eres desarrollador backend. Te ocupas de los datos, las API, la lógica de negocio y su fiabilidad.\n\n- Diseña los cambios de datos con cuidado: migraciones seguras, restricciones en la base y nada que pierda información existente.\n- Valida toda entrada externa y devuelve errores claros y estables.\n- Piensa en la concurrencia, las transacciones y los fallos a medias.\n- Sigue la arquitectura y las convenciones del proyecto; no añadas dependencias sin necesidad.\n- Cubre la lógica nueva con pruebas, incluidos los casos de error.',
      },
      { name: 'Tester', text: 'Tu objetivo es que lo que se entrega haga lo que dice la spec, también en los casos límite.', tone: 'yellow', prompt:
          'Eres tester. Tu objetivo es que lo que se entrega haga lo que dice la spec, también en los casos límite.\n\n- Toma los escenarios de la spec como criterios de aceptación y conviértelos en pruebas automáticas cuando el proyecto tenga dónde ponerlas.\n- Busca los huecos: entradas vacías o enormes, errores, permisos, estados intermedios y concurrencia.\n- Al especificar, propón los escenarios que falten y deja claro cómo se comprueba cada requisito.\n- Si encuentras un fallo que no te toca arreglar, descríbelo con los pasos para reproducirlo en lugar de esconderlo.\n- No cambies el comportamiento de la app para que una prueba pase.',
      },
    ],
    // app (RoleForm, locales y catálogo de plantillas)
    dialog: {
      // `{name}` es la plantilla elegida
      alt: 'El diálogo «Contratar: {name}» de la app, con el nombre del rol, sus instrucciones, el modelo y el permiso para ejecutar comandos',
      hireFrom: 'Contratar: {name}',
      name: 'Nombre',
      prompt: 'Instrucciones',
      count: '{used} / {max}',
      model: 'Modelo',
      modelPlaceholder: 'Por defecto de Claude Code',
      permissions: 'Permisos',
      allowBash: 'Ejecutar comandos',
      back: 'Plantillas',
      confirm: 'Contratar',
    },
  },
  local: {
    id: 'local',
    // DRAFT
    title: 'Primero en tu ordenador. Después, con tu equipo.',
    // DRAFT
    lead: 'La cuenta es opcional: solo la necesitas para sincronizar tus ordenadores y colaborar con otras personas.',
    // DRAFT
    cards: [
      {
        title: 'Sin cuenta',
        sub: 'Este ordenador',
        tone: 'yellow',
        points: [
          'Sin una cuenta abierta, la app no se conecta con ningún servidor.',
          'Cada rol trabaja en una rama propia; aprobar lleva el trabajo a tu rama en un commit.',
        ],
        media: { kind: 'shot', shot: { file: 'tablero-sin-cuenta', alt: 'Pie de la barra lateral del tablero sin cuenta: «Sin cuenta», «Entra en Ajustes» y los botones Enviar y Recibir sin activar' } },
      },
      {
        title: 'Con cuenta',
        sub: 'Tus ordenadores',
        tone: 'pink',
        points: [
          'Entras con tu email y un código que te llega por correo, sin contraseñas.',
          'Enviar y Recibir llevan todo el estado de un ordenador a otro, también las ramas de las tareas, y solo te pregunta por lo que choca.',
        ],
        media: { kind: 'shot', shot: { file: 'sincronizacion-ordenadores', alt: 'Tus ordenadores en los ajustes de la cuenta: Portátil de Marta, este ordenador, y Sobremesa de la oficina, con el nombre con que se ve este ordenador en el otro' } },
      },
      {
        title: 'En equipo',
        sub: 'Personas y agentes',
        tone: 'lilac',
        points: [
          'Compartes un proyecto o un grupo e invitas por email.',
          'El tablero se sincroniza en vivo y una tarea nunca la trabajan dos personas a la vez. La cuenta funciona con un servidor que alojas tú.',
        ],
        media: { kind: 'shot', shot: { file: 'colaboracion-equipo', alt: 'Backlog compartido: la tarea #9 en marcha en el ordenador de Javier Soto y la #10 especificándose para Marta Ruiz' } },
      },
    ],
  },
  requirements: {
    id: 'requirements',
    // DRAFT
    title: 'Funciona con lo que ya usas',
    // DRAFT
    text: 'Necesitas git y uno de los dos CLI. Understaffed no los instala, pero te explica cómo hacerlo cuando faltan.',
    // DRAFT
    tiles: [
      { name: 'Claude Code', text: 'Instalado y con la sesión iniciada.', href: 'https://claude.com/product/claude-code' },
      { name: 'Codex', text: 'O este, si es el que usas.', href: 'https://developers.openai.com/codex/cli' },
      { name: 'Git', text: '2.30 o posterior.', href: 'https://git-scm.com/' },
      { name: 'OpenSpec', text: 'Va incluido en la app.', href: 'https://github.com/Fission-AI/OpenSpec' },
      { name: 'Windows y macOS', text: 'App de escritorio.' },
    ],
  },
  waitlist: {
    id: 'waitlist',
    // DRAFT
    title: 'Pide acceso anticipado',
    // DRAFT
    lead: 'Understaffed está en acceso anticipado para Windows y macOS. Déjanos tu email y te avisaremos cuando puedas instalarlo.',
    label: 'Tu email',
    submit: 'Pedir acceso',
    // DRAFT
    after: 'Apuntarte no crea una cuenta en Understaffed.',
    // DRAFT
    privacy: 'Tu email llega a nuestro buzón y solo lo usamos para avisarte de cuándo puedes instalar Understaffed. Para salir de la lista, escribe a {email}.',
    // DRAFT
    noJs: 'Este formulario necesita JavaScript. Sin él, escribe a {email} y te apuntamos.',
    sending: 'Enviando…',
    errors: {
      // DRAFT
      empty: 'Escribe tu email para apuntarte.',
      // DRAFT
      invalid: 'Ese email no parece válido. Revísalo: tiene que ser como nombre@ejemplo.com.',
      // DRAFT
      limited: 'Hay demasiados intentos desde tu conexión. Espera un rato y vuelve a probar.',
      // DRAFT
      failed: 'No hemos podido apuntarte. Vuelve a intentarlo o escribe a {email}.',
    },
    // DRAFT
    thanksTitle: 'Estás en la lista.',
    // DRAFT
    thanks: 'Escribiremos a {email} cuando puedas instalar Understaffed.',
    // DRAFT
    again: 'Usar otro email',
    // DRAFT
    backToDemo: 'Volver a la demo',
  },
  footer: {
    // DRAFT
    text: 'Proyectos de software con un equipo de agentes de IA, y siempre con tu aprobación.',
    productLabel: 'Producto',
    languageLabel: 'Idioma',
    copyright: '© 2026 Understaffed',
  },
  // DRAFT
  notFound: {
    title: 'Esta página no existe',
    home: 'Ir a la portada',
  },
  placeholder: { label: 'TODO: captura pendiente' },
};
