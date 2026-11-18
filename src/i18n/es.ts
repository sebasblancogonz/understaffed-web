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
    switchText: 'English',
    switchShort: 'EN',
    switchLabel: 'Cambiar a inglés',
  },
  hero: {
    // DRAFT
    title: ['Tu equipo de', 'agentes de IA'],
    // DRAFT
    lead: 'Contratas roles, les das tareas desde un tablero y nada llega a tu rama sin que apruebes la spec y después el código.',
    cta: 'Pedir acceso',
    // DRAFT
    secondary: 'Ver cómo funciona',
    // app (roles del proyecto de demostración y la plantilla Tester)
    tags: [
      { label: 'Backend', tone: 'lilac' },
      { label: 'QA', tone: 'green' },
      { label: 'Tester', tone: 'yellow' },
      { label: 'Frontend', tone: 'orange' },
      { label: 'Full-stack', tone: 'pink' },
    ],
    demo: {
      label: 'Demostración del tablero de Understaffed con la tarea #6',
      // DRAFT
      caption: 'Demostración con el proyecto de ejemplo storefront. Pulsa las acciones de la tarea #6; la ejecución está simulada.',
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
        'Espacio de trabajo creado en la rama understaffed/modo-oscuro-en-el-panel.',
        'Sesión iniciada',
        'Trabajo guardado en la rama de la tarea (9c41e7a).',
        'Terminó bien',
      ],
      review: { files: '8 de 8 tareas hechas', result: '', message: '' },
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
    title: 'Cada tarea pasa por ti dos veces',
    // DRAFT
    lead: 'La spec, antes de que se escriba código. El código, antes de llegar a tu rama.',
    cards: [
      {
        tone: 'lilac',
        // DRAFT
        title: 'Primero, la spec',
        // DRAFT
        text: 'Anotas la tarea y su rol redacta el cambio de OpenSpec en tu repositorio: propuesta, requisitos con escenarios, diseño y tareas. Lo apruebas o pides cambios.',
        shot: { file: 'aprobacion-spec', alt: 'Spec de la tarea #6 con sus criterios de aceptación, esperando tu aprobación' },
      },
      {
        tone: 'orange',
        // DRAFT
        title: 'Después, el trabajo',
        // DRAFT
        text: 'El rol trabaja en una rama propia con Claude Code, el CLI que ya tienes y ya pagas. Understaffed no guarda claves.',
        // app (README), abreviado
        code: {
          label: 'Así lanza cada ejecución (abreviado):',
          text: 'claude -p\n  --output-format stream-json\n  --permission-mode acceptEdits\n  --tools Read,Glob,Grep,Edit,\n          Write,Agent,Skill\n  --append-system-prompt-file\n      <instrucciones del rol>',
        },
      },
      {
        tone: 'green',
        // DRAFT
        title: 'Al final, el código',
        // DRAFT
        text: 'Revisas el diff y lo apruebas, lo devuelves con un comentario o lo descartas. Aprobar lo integra en tu rama en un commit, con tus hooks y tu firma.',
        shot: { file: 'revision-acciones', alt: 'Revisión de la tarea #4 con los botones Descartar la implementación, Devolver y Aprobar, y el coste y el progreso de la ejecución' },
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
    shots: [
      // DRAFT (títulos y pies)
      { file: 'grupos', alt: 'Estado conjunto del grupo Tienda online, con cinco tareas que esperan tu decisión y la actividad reciente', title: 'Espera tu decisión y En marcha', caption: 'Las specs y el código que esperan tu aprobación en los tres repositorios de «Tienda online», y lo que se está ejecutando, qué rol lo hace y desde cuándo.' },
      { file: 'estado-coste', alt: 'Coste y tiempo de los últimos 30 días por rol en el proyecto storefront: Backend, Full-stack y Frontend', title: 'Coste por rol', caption: 'Lo que han costado las ejecuciones de cada rol en los últimos 30 días.', strip: true },
    ],
  },
  roles: {
    id: 'roles',
    // DRAFT
    title: 'Contrata los roles que necesitas',
    // DRAFT
    lead: 'Empieza por una plantilla o por un rol en blanco. Cada rol lleva sus instrucciones, su modelo y su permiso para ejecutar comandos.',
    // app (catálogo de plantillas: nombre y primera frase de sus instrucciones)
    templates: [
      { name: 'Analista de producto', text: 'Tu fuerte es entender el problema antes que la solución: qué necesita el usuario, por qué y cómo se sabrá que está resuelto.', tone: 'green' },
      { name: 'Desarrollador full-stack', text: 'Trabajas de punta a punta: datos, lógica, interfaz y pruebas.', tone: 'pink' },
      { name: 'Desarrollador frontend', text: 'Construyes interfaces claras, accesibles y coherentes con el sistema de diseño del proyecto.', tone: 'orange' },
      { name: 'Desarrollador backend', text: 'Te ocupas de los datos, las API, la lógica de negocio y su fiabilidad.', tone: 'lilac' },
      { name: 'Tester', text: 'Tu objetivo es que lo que se entrega haga lo que dice la spec, también en los casos límite.', tone: 'yellow' },
    ],
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
        media: { kind: 'shot', shot: { file: 'tablero-sin-cuenta', alt: 'Barra lateral del tablero de Understaffed sin cuenta: Sin cuenta, Entra en Ajustes, Enviar y Recibir' } },
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
          'El tablero se sincroniza en vivo y una tarea nunca la trabajan dos personas a la vez. La cuenta funciona con un servidor propio.',
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
    text: 'Understaffed no instala git ni Claude Code, pero te explica cómo hacerlo cuando faltan.',
    // DRAFT
    tiles: [
      { name: 'Claude Code', text: 'Instalado y con la sesión iniciada.' },
      { name: 'Git', text: '2.30 o posterior.' },
      { name: 'OpenSpec', text: 'Va incluido en la app.' },
      { name: 'Windows', text: 'App de escritorio.' },
      { name: 'macOS', text: 'App de escritorio.' },
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
    todo: 'TODO: destino de la lista de espera pendiente',
    privacyTodo: 'TODO: aviso de privacidad pendiente',
    // DRAFT
    thanksTitle: 'Estás en la lista.',
    // DRAFT
    thanks: 'Te escribiremos cuando puedas instalar Understaffed.',
  },
  footer: {
    // DRAFT
    text: 'Proyectos de software con un equipo de agentes de IA, y siempre con tu aprobación.',
    productLabel: 'Producto',
    languageLabel: 'Idioma',
    copyright: '© 2026 Understaffed',
  },
  placeholder: { label: 'TODO: captura pendiente' },
};
