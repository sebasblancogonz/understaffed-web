import type { Dict } from './types';

// Textos de la web. Lo marcado `// DRAFT` es una propuesta de desarrollo pendiente del redactor.
// Lo marcado `// app` son textos y datos de demostración copiados de la app (sus locales, su
// catálogo de plantillas, su README y las capturas): cambiarlos aquí sin cambiarlos allí miente.
export const es: Dict = {
  lang: 'es',
  ogLocale: 'es_ES',
  meta: {
    // DRAFT
    title: 'Understaffed: un equipo de agentes de IA para tus proyectos de software',
    // DRAFT
    description:
      'Understaffed gestiona proyectos de software con un equipo de agentes de IA organizado como una empresa. Contratas roles, les asignas tareas de un tablero y nada llega a tu rama sin tu aprobación.',
    ogImageAlt: 'Understaffed, gestión de proyectos de software con agentes de IA',
  },
  skip: 'Saltar al contenido',
  header: { home: 'Understaffed, inicio', switchText: 'English', switchLabel: 'Cambiar a inglés' },
  hero: {
    // DRAFT
    title: 'Tu equipo de agentes de IA',
    // DRAFT
    lead: 'Contratas roles, les das tareas desde un tablero y nada llega a tu rama sin que apruebes la spec y después el código.',
    cta: 'Pedir acceso',
    // DRAFT
    note: 'Lanza Claude Code, el CLI que ya tienes y ya pagas. No guarda claves.',
    demo: {
      label: 'Demostración del tablero de Understaffed con la tarea #4',
      // DRAFT
      caption: 'Demostración con el proyecto de ejemplo storefront. La ejecución está simulada.',
      // app
      columns: ['Backlog', 'Por hacer', 'En curso', 'En revisión', 'Hecho'],
      task: { num: '#4', title: 'Exportar pedidos a CSV', prio: 'Alta', role: 'Backend', total: 5 },
      others: [
        [
          { num: '#6', title: 'Modo oscuro en el panel de administración', prio: 'Media', progress: '0/8', role: 'Frontend', state: 'awaiting' },
          { num: '#9', title: 'Búsqueda de productos con filtros', prio: 'Media', role: 'Frontend' },
          { num: '#11', title: 'Servir las imágenes de producto en WebP', prio: 'Baja' },
        ],
        [
          { num: '#7', title: 'Cupones de descuento en el checkout', prio: 'Alta', progress: '0/3', role: 'Full-stack' },
          { num: '#8', title: 'Aviso por email de stock bajo', prio: 'Baja', progress: '0/2', role: 'Backend' },
        ],
        [{ num: '#5', title: 'Límite de intentos en el inicio de sesión', prio: 'Urgente', progress: '3/4', role: 'Backend', state: 'running' }],
        [],
        [
          { num: '#1', title: 'Paginación en el listado de pedidos', prio: 'Alta', progress: '4/4', role: 'Backend' },
          { num: '#2', title: 'Validar el email al registrarse', prio: 'Media', progress: '3/3', role: 'Backend' },
        ],
      ],
      chips: { awaiting: 'Espera tu aprobación', running: 'En marcha', awaitingReview: 'Espera tu revisión', integrating: 'Integrando' },
      actions: {
        requestChanges: 'Pedir cambios',
        approveSpec: 'Aprobar spec',
        run: 'Ejecutar',
        sendBack: 'Devolver',
        approveCode: 'Aprobar',
        // DRAFT (control de la demostración, no de la app)
        restart: 'Volver a empezar',
      },
      hints: [
        'A Por hacer se llega aprobando la spec de la tarea.',
        'A En curso se llega ejecutando una tarea de Por hacer o devolviendo una de En revisión.',
        'A En revisión se llega cuando una ejecución termina bien.',
        'A Hecho se llega aprobando el código de una tarea en revisión.',
        'Todo el trabajo de la tarea en un único commit sobre tu rama, con tus hooks y tu firma.',
      ],
      notes: {
        requestChanges: 'El responsable revisará el cambio con tu comentario, sin empezar de cero.',
        sendBack: 'Retomará su sesión con tu comentario sobre lo que ya hizo, y la tarea volverá a En curso.',
      },
      // app (textos del log); el hash 9c41e7a es de muestra, inventado para la demostración
      log: [
        'Espacio de trabajo creado en la rama understaffed/exportar-pedidos-a-csv.',
        'Sesión iniciada',
        'Trabajo guardado en la rama de la tarea (9c41e7a).',
        'Terminó bien',
      ],
      review: { files: '4 archivos · +70 −1', result: '12 min · 1,38 $', message: 'Hecho. Todas las tareas están marcadas y las pruebas pasan.' },
      done: 'Integrada en main · Un commit',
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
    title: 'En tu repositorio',
    one: {
      // DRAFT
      lead: 'Primero, anotas la tarea y su rol redacta la spec.',
      label: 'Título de la tarea',
      value: 'Modo oscuro en el panel de administración',
      role: 'Frontend',
      tree: 'openspec/changes/modo-oscuro-en-el-panel/\n├── proposal.md\n├── design.md\n├── tasks.md\n└── specs/admin-theme/spec.md',
      shot: { file: 'aprobacion', alt: 'Spec de la tarea #6 con sus criterios de aceptación, esperando tu aprobación' },
    },
    two: {
      // DRAFT
      lead: 'Después, apruebas la spec y la ejecutas.',
      buttons: ['Aprobar spec', 'Ejecutar'],
      // app (README)
      intro: 'Cada ejecución lanza Claude Code así (abreviado), en el espacio de trabajo de la tarea y con el encargo por la entrada estándar:',
      command:
        'claude -p --output-format stream-json --verbose\n       --permission-mode acceptEdits --permission-prompts none\n       --tools Read,Glob,Grep,Edit,Write,Agent,Skill\n       --append-system-prompt-file <instrucciones del rol>',
    },
    three: {
      // DRAFT
      lead: 'Al final, revisas el diff y apruebas el código.',
      option: 'Un commit',
      hint: 'Todo el trabajo de la tarea en un único commit sobre tu rama, con tus hooks y tu firma.',
      button: 'Aprobar',
      shot: { file: 'revision', alt: 'Revisión de la tarea #4 con el diff, el resultado de la ejecución y el último mensaje del rol' },
    },
  },
  requirements: {
    id: 'requirements',
    // DRAFT
    title: 'Lo que ya tienes',
    // DRAFT
    text: 'Understaffed no instala git ni Claude Code, pero te explica cómo hacerlo cuando faltan.',
    // DRAFT
    tiles: [
      { name: 'Claude Code', text: 'Instalado y con la sesión iniciada. La app lo lanza; no guarda claves.' },
      { name: 'Git', text: '2.30 o posterior, para los espacios de trabajo de las tareas.' },
      { name: 'OpenSpec', text: 'Va incluido en la app. Cada tarea es un cambio en tu repositorio.' },
      { name: 'Windows', text: 'App de escritorio.' },
      { name: 'macOS', text: 'App de escritorio.' },
      { name: 'Tu configuración', text: 'Tu CLAUDE.md, tus hooks, tus subagentes y tus comandos, como en tu terminal.' },
    ],
  },
  status: {
    id: 'status',
    title: 'Estado',
    // DRAFT
    intro: 'Lo que espera tu decisión en los tres repositorios de «Tienda online».',
    // app (capturas de Estado)
    rows: [
      { repo: 'storefront', num: '#5', title: 'Límite de intentos en el inicio de sesión', role: 'Backend', fact: 'Ejecutar · 0:59', status: 'En marcha', kind: 'run', detail: ['Ejecutar · Backend · lleva 0:59', 'Especificar · Backend · Correcta · 3 min · 0,24 $'] },
      { repo: 'storefront', num: '#4', title: 'Exportar pedidos a CSV', role: 'Backend', fact: '12 min · 1,38 $', status: 'Espera tu revisión', kind: 'decision', detail: ['Ejecutar · Backend · Correcta · 12 min · 1,38 $', 'Hecho. Todas las tareas están marcadas y las pruebas pasan.'] },
      { repo: 'storefront', num: '#6', title: 'Modo oscuro en el panel de administración', role: 'Frontend', fact: '4 min · 0,31 $', status: 'Espera tu aprobación', kind: 'decision', detail: ['Especificar · Frontend · Correcta · 4 min · 0,31 $', 'La spec pasa la validación de OpenSpec.'] },
      { repo: 'storefront-web', num: '#1', title: 'Galería de fotos en la ficha de producto', role: 'Frontend', fact: '5 min · 0,24 $', status: 'Espera tu aprobación', kind: 'decision', detail: ['Especificar · Frontend · Correcta · 5 min · 0,24 $', 'La spec pasa la validación de OpenSpec.'] },
      { repo: 'storefront-web', num: '#2', title: 'Recordar el carrito entre visitas', role: 'Frontend', fact: '8 min · 0,92 $', status: 'Espera tu revisión', kind: 'decision', detail: ['Ejecutar · Frontend · Correcta · 8 min · 0,92 $', 'Especificar · Frontend · Correcta · 3 min · 0,19 $'] },
      { repo: 'storefront-admin', num: '#2', title: 'Registrar devoluciones desde el pedido', role: 'Full-stack', fact: '6 min · 0,31 $', status: 'Espera tu aprobación', kind: 'decision', detail: ['Especificar · Full-stack · Correcta · 6 min · 0,31 $', 'La spec pasa la validación de OpenSpec.'] },
      { repo: 'storefront-admin', num: '#1', title: 'Filtrar pedidos por estado', role: 'Frontend', fact: 'main · 47143e3', status: 'Integrada', kind: 'done', detail: ['Integrada en main · 47143e3 · Un commit', 'Ejecutar · Frontend · Correcta · 8 min · 0,58 $'] },
      { repo: 'storefront', num: '#3', title: 'Redondeo del IVA en el carrito', role: 'Backend', fact: 'main · 6e333ea', status: 'Integrada', kind: 'done', detail: ['Integrada en main · 6e333ea · Un commit', 'Ejecutar · Backend · Correcta · 5 min · 0,41 $'] },
      { repo: 'storefront', num: '#2', title: 'Validar el email al registrarse', role: 'Backend', fact: 'main · 5a1d035', status: 'Integrada', kind: 'done', detail: ['Integrada en main · 5a1d035 · Un commit', 'Ejecutar · Backend · Correcta · 7 min · 0,52 $'] },
    ],
    open: 'Ver el detalle de',
    cost: 'Coste que informa el proveedor; con suscripción es una estimación.',
    shots: [
      { file: 'grupos', alt: 'Estado conjunto del grupo Tienda online, con cinco tareas que esperan tu decisión y la actividad reciente', caption: 'El Estado conjunto de «Tienda online».' },
      { file: 'estado', alt: 'Estado del proyecto storefront, con lo que espera tu decisión, la actividad reciente y el coste por rol', caption: 'El Estado de storefront, con el coste por rol.' },
    ],
  },
  roles: {
    id: 'roles',
    // DRAFT
    title: 'Contrata los roles',
    // app (RoleForm, locales y catálogo de plantillas)
    dialog: {
      title: 'Contratar: Desarrollador backend',
      hint: 'Revisa el nombre, las instrucciones y los permisos. La plantilla no cambia aunque edites el rol.',
      name: 'Nombre',
      nameValue: 'Backend',
      prompt: 'Instrucciones',
      promptValue:
        'Eres desarrollador backend. Te ocupas de los datos, las API, la lógica de negocio y su fiabilidad.\n\n- Diseña los cambios de datos con cuidado: migraciones seguras, restricciones en la base y nada que pierda información existente.\n- Valida toda entrada externa y devuelve errores claros y estables.\n- Piensa en la concurrencia, las transacciones y los fallos a medias.\n- Sigue la arquitectura y las convenciones del proyecto; no añadas dependencias sin necesidad.\n- Cubre la lógica nueva con pruebas, incluidos los casos de error.',
      count: '{used} / {max}',
      model: 'Modelo',
      modelPlaceholder: 'Por defecto de Claude Code',
      modelHint: 'Déjalo vacío para usar el modelo por defecto de Claude Code, o escribe un alias (opus, sonnet) o el nombre completo de un modelo.',
      permissions: 'Permisos',
      allowBash: 'Ejecutar comandos',
      allowBashHint:
        'Al ejecutar una tarea, el agente podrá lanzar comandos en la terminal de su espacio de trabajo: instalar dependencias, pasar los tests, compilar. El espacio de trabajo solo contiene lo que está en git, sin dependencias instaladas ni archivos .env. Especificar nunca ejecuta comandos.',
      toolsLine: 'Los plugins, las skills, los servidores MCP y la web que puede usar no dependen del rol: se activan en Herramientas, en el equipo del proyecto o del grupo.',
      back: 'Plantillas',
      confirm: 'Contratar',
    },
    // DRAFT
    notes: [
      { part: 'name', title: 'Nombre', text: 'Así aparece en el tablero, junto al cuadrado del agente, en las tareas que le asignas.' },
      { part: 'prompt', title: 'Instrucciones', text: 'Cómo trabaja el rol: en qué se fija, qué prioriza y qué evita. Hasta 8000 caracteres.' },
      { part: 'model', title: 'Modelo', text: 'Vacío usa el modelo por defecto de Claude Code. También vale un alias, como opus o sonnet.' },
      { part: 'bash', title: 'Ejecutar comandos', text: 'Para instalar dependencias o pasar los tests en su espacio de trabajo. Especificar nunca ejecuta comandos.' },
      { part: 'tools', title: 'Herramientas', text: 'Plugins, skills, servidores MCP y la web se activan por proyecto o grupo. Lo que no actives se deniega.' },
      { part: 'templates', title: 'Plantillas', text: 'Analista de producto, Desarrollador full-stack, frontend o backend, y Tester. Editar el rol no cambia la plantilla.' },
    ],
  },
  local: {
    id: 'local',
    // DRAFT
    title: ['Primero, en local.', 'Después, en equipo.'],
    cta: 'Pedir acceso',
    tabsLabel: 'Cómo se usa Understaffed',
    // DRAFT
    tabs: [
      {
        id: 'local-sin-cuenta',
        title: 'Sin cuenta',
        sub: 'Este ordenador',
        bands: [
          { label: 'Red', title: 'Ninguna petición', text: 'Sin una cuenta abierta, la app no se conecta con ningún servidor.' },
          { label: 'Código', title: 'Una rama por tarea', text: 'Cada rol trabaja en un espacio de trabajo propio; aprobar lleva el trabajo a tu rama en un commit.', who: 'Tus roles', marks: ['agent', 'agent'] },
          { label: 'Decisión', title: 'Siempre tuya', text: 'Nada se ejecuta sin una acción tuya: especificar, ejecutar y aprobar.', who: 'Tú', marks: ['person'] },
        ],
        media: { kind: 'video', alt: 'El tablero de storefront en Understaffed, sin cuenta, mientras las tareas avanzan' },
      },
      {
        id: 'local-con-cuenta',
        title: 'Con cuenta',
        sub: 'Tus ordenadores',
        bands: [
          { label: 'Entrar', title: 'Email y un código', text: 'Te llega un código por correo. Sin contraseñas ni tokens que copiar.', who: 'Marta Ruiz', marks: ['person'] },
          { label: 'Enviar', title: 'Todo el estado', text: 'Tareas, roles, ajustes y las ramas de las tareas, de un ordenador a otro.', who: 'Portátil de Marta' },
          { label: 'Recibir', title: 'Solo lo que choca', text: 'La fusión es por elemento: solo te pregunta por lo que cambió en los dos lados.', who: 'Sobremesa de la oficina' },
        ],
        media: { kind: 'shot', shot: { file: 'sincronizacion', alt: 'Ajustes de la cuenta de Understaffed con los ordenadores donde está abierta' } },
      },
      {
        id: 'local-en-equipo',
        title: 'En equipo',
        sub: 'Personas y agentes',
        bands: [
          { label: 'Compartir', title: 'Un proyecto o un grupo', text: 'Invitas por email; la invitación espera hasta que la otra persona la acepta.', who: 'Marta Ruiz', marks: ['person'] },
          { label: 'En vivo', title: 'El mismo tablero', text: 'Lo que cambia llega a los demás mientras la app está abierta.', who: 'Marta y Javier', marks: ['person', 'person'] },
          { label: 'Tomada', title: 'Una tarea, una persona', text: 'Antes de especificar, ejecutar o aprobar, la app toma la tarea: nunca la trabajan dos a la vez.', who: 'Javier Soto', marks: ['person', 'agent'] },
          { label: 'Servidor', title: 'El tuyo', text: 'La cuenta funciona con un servidor propio.', who: 'sync.example.com' },
        ],
        media: { kind: 'shot', shot: { file: 'colaboracion', alt: 'Tablero compartido de Understaffed con las personas del equipo' } },
      },
    ],
  },
  waitlist: {
    id: 'waitlist',
    title: 'Lista de espera',
    // DRAFT
    before: 'Mi email es',
    submit: 'Pedir acceso',
    // DRAFT
    after: 'Te escribiremos cuando puedas instalar Understaffed. Apuntarte no crea una cuenta.',
    todo: 'TODO: destino de la lista de espera pendiente',
    privacyTodo: 'TODO: aviso de privacidad pendiente',
    // DRAFT
    thanksTitle: 'Estás en la lista.',
    // DRAFT
    thanks: 'Te escribiremos cuando puedas instalar Understaffed.',
  },
  footer: {
    // DRAFT
    text: 'Understaffed. Proyectos de software con agentes de IA.',
    navLabel: 'Secciones',
    nav: [
      { id: 'how', label: 'Cómo funciona' },
      { id: 'requirements', label: 'Requisitos' },
      { id: 'status', label: 'Estado' },
      { id: 'roles', label: 'Roles' },
      { id: 'waitlist', label: 'Pedir acceso' },
    ],
    year: '2026',
  },
  placeholder: { label: 'TODO: captura pendiente' },
};
