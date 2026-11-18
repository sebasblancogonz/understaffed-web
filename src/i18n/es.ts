import type { Dict } from './types';

// DRAFT: todos los textos son propuestas de desarrollo pendientes del redactor.
export const es: Dict = {
  lang: 'es',
  ogLocale: 'es_ES',
  meta: {
    // DRAFT
    title: 'Understaffed: un equipo de agentes de IA para tus proyectos de software',
    // DRAFT
    description:
      'Understaffed gestiona proyectos de software con un equipo de agentes de IA organizado como una empresa. Contratas roles, les asignas tareas de un tablero y revisas su trabajo.',
    ogImageAlt: 'Understaffed, gestión de proyectos de software con agentes de IA',
  },
  skip: 'Saltar al contenido',
  nav: {
    label: 'Principal',
    items: [
      { id: 'how', label: 'Cómo funciona' },
      { id: 'status', label: 'Estado' },
      { id: 'local', label: 'Local y cuenta' },
      { id: 'requirements', label: 'Requisitos' },
      { id: 'waitlist', label: 'Lista de espera' },
    ],
    switchText: 'English',
    switchLabel: 'Cambiar a inglés',
  },
  hero: {
    // DRAFT
    title: 'Tu proyecto de software, con un equipo de agentes de IA',
    // DRAFT
    lead: 'Understaffed gestiona proyectos de software con un equipo de agentes de IA organizado como una empresa: contratas roles, les asignas tareas de un tablero y revisas su trabajo.',
    // DRAFT
    cta: 'Apuntarme a la lista de espera',
    // DRAFT
    note: 'Lanza Claude Code, el CLI que ya tienes y ya pagas. No guarda tus claves.',
    shot: {
      file: 'tablero',
      alt: 'Tablero de Understaffed con las tareas asignadas a los roles del equipo',
    },
  },
  how: {
    id: 'how',
    title: 'Cómo funciona',
    // DRAFT
    intro: 'Trabajas como en una empresa pequeña: tú diriges y los roles hacen.',
    steps: [
      // DRAFT
      { title: 'Asigna una tarea a un rol', text: 'Contratas los roles que necesita tu proyecto y les asignas tareas del tablero. Cada tarea es un cambio de OpenSpec en tu repositorio, y el rol empieza por redactar la spec.' },
      // DRAFT
      { title: 'Aprueba la spec', text: 'Lees la spec y la apruebas antes de que se escriba una línea de código.' },
      // DRAFT
      { title: 'El rol ejecuta', text: 'Con la spec aprobada, el rol hace la tarea.' },
      // DRAFT
      { title: 'Haz la revisión', text: 'Revisas el resultado de la tarea antes de darlo por bueno.' },
      // DRAFT
      { title: 'Aprueba el código', text: 'Tras la revisión, apruebas el código. La tarea no se da por cerrada sin tu aprobación.' },
    ],
    pathLabel: 'Cada tarea vive en tu repositorio:',
    pathExample: 'openspec/changes/<tarea>/',
    // DRAFT
    cli: 'Understaffed lanza Claude Code, el CLI de IA que ya tienes y ya pagas. No guarda ninguna clave.',
    shot: {
      file: 'revision',
      alt: 'Pantalla de revisión de una tarea en Understaffed',
    },
  },
  approvals: {
    id: 'approvals',
    title: 'Dos aprobaciones humanas por tarea',
    // DRAFT
    intro: 'Cada tarea pasa por ti dos veces. Los agentes proponen, tú decides.',
    items: [
      // DRAFT
      { title: 'La spec', text: 'Antes de escribir código, apruebas la spec de la tarea.' },
      // DRAFT
      { title: 'El código', text: 'Cuando el rol termina, apruebas el código.' },
    ],
    shot: {
      file: 'aprobacion',
      alt: 'Aprobación de la spec de una tarea en Understaffed',
    },
  },
  status: {
    id: 'status',
    // DRAFT
    title: 'Lo que espera tu decisión, de un vistazo',
    // DRAFT
    intro: 'La vista Estado reúne en una pantalla lo que espera tu decisión, lo que está en marcha, lo que ha pasado y lo que ha costado.',
    items: [
      // DRAFT
      { title: 'Espera tu decisión', text: 'Las specs y el código que esperan tu aprobación.' },
      // DRAFT
      { title: 'En marcha', text: 'Las tareas que se están ejecutando y el rol que trabaja en cada una.' },
      // DRAFT
      { title: 'Actividad', text: 'Lo que ha pasado en el proyecto, en orden.' },
      // DRAFT
      { title: 'Coste por rol', text: 'Lo que han costado las ejecuciones de cada rol.' },
    ],
    shot: {
      file: 'estado',
      alt: 'Vista Estado de Understaffed con lo que espera tu decisión, lo que está en marcha, la actividad y el coste por rol',
    },
  },
  groups: {
    id: 'groups',
    // DRAFT
    title: 'Un producto, varios repositorios',
    // DRAFT
    intro: 'Reúne en un grupo los repositorios de un mismo producto. Cada ejecución ve los demás repositorios del grupo como contexto de solo lectura.',
    items: [
      // DRAFT
      { title: 'Un Estado conjunto', text: 'Lo que espera tu decisión en todos los repositorios del grupo, en una sola vista.' },
      // DRAFT
      { title: 'Un equipo compartido', text: 'Los mismos roles trabajan en cualquier repositorio del grupo.' },
      // DRAFT
      { title: 'Funcionalidades entre repositorios', text: 'Una funcionalidad reparte sus tareas entre repositorios, y las esperas entre ellas impiden ejecutar una tarea antes de tiempo.' },
    ],
    shot: {
      file: 'grupos',
      alt: 'Un grupo de proyectos en Understaffed con varios repositorios y su Estado conjunto',
    },
  },
  local: {
    id: 'local',
    // DRAFT
    title: 'En local, y con cuenta si la quieres',
    // DRAFT
    text: 'Understaffed trabaja en tu ordenador, sobre tu repositorio. Sin cuenta todo funciona igual y la app no hace ninguna petición de red.',
    // DRAFT
    account: 'La cuenta es opcional: solo la necesitas para sincronizar tus ordenadores y colaborar con otras personas.',
    sync: {
      // DRAFT
      title: 'Tus ordenadores',
      // DRAFT
      text: 'Enviar y Recibir llevan todo el estado de la app de un ordenador a otro, también las ramas de las tareas. Solo te pregunta por lo que choca.',
      // DRAFT
      detail: 'Entras con tu email y un código que te llega por correo, sin contraseñas.',
      shot: {
        file: 'sincronizacion',
        alt: 'Diálogo para enviar y recibir el estado de Understaffed entre ordenadores',
      },
    },
    team: {
      // DRAFT
      title: 'Tu equipo',
      // DRAFT
      text: 'Comparte un proyecto o un grupo e invita por email. El tablero se sincroniza en vivo y una tarea nunca la trabajan dos personas a la vez.',
      // DRAFT
      detail: 'El código sigue viajando por el remoto git de cada uno, y la cuenta funciona con un servidor propio.',
      shot: {
        file: 'colaboracion',
        alt: 'Tablero compartido de Understaffed con las personas del equipo',
      },
    },
  },
  requirements: {
    id: 'requirements',
    title: 'Requisitos',
    // DRAFT
    items: [
      'App de escritorio para Windows y macOS.',
      'git 2.30 o posterior.',
      'Claude Code instalado y con la sesión iniciada.',
    ],
    // DRAFT
    note: 'Understaffed no instala git ni Claude Code, pero te explica cómo hacerlo cuando faltan.',
  },
  waitlist: {
    id: 'waitlist',
    // DRAFT
    title: 'Pide acceso anticipado',
    // DRAFT
    intro: 'Understaffed está en acceso anticipado para Windows y macOS. Déjanos tu email y te avisaremos cuando puedas instalarlo.',
    // DRAFT
    account: 'Apuntarte no crea una cuenta en Understaffed.',
    label: 'Tu email',
    // DRAFT
    submit: 'Apuntarme',
    todo: 'TODO: destino de la lista de espera pendiente',
    privacyTodo: 'TODO: aviso de privacidad pendiente',
    // DRAFT
    thanksTitle: 'Estás en la lista.',
    // DRAFT
    thanks: 'Te escribiremos cuando puedas instalar Understaffed.',
  },
  placeholder: { label: 'TODO: captura pendiente' },
  footer: {
    // DRAFT
    text: 'Understaffed. Gestiona proyectos de software con un equipo de agentes de IA.',
  },
};
