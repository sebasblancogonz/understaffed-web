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
      { id: 'approvals', label: 'Aprobaciones' },
      { id: 'local', label: 'En local' },
    ],
    switchText: 'English',
    switchLabel: 'Cambiar a inglés',
  },
  hero: {
    // DRAFT
    title: 'Tu proyecto de software, con un equipo de agentes de IA',
    // DRAFT
    lead: 'Understaffed gestiona proyectos de software con un equipo de agentes de IA organizado como una empresa: contratas roles, les asignas tareas de un tablero y revisas su trabajo.',
    cta: 'Descargar Understaffed',
    // DRAFT
    note: 'Lanza Claude Code, el CLI que ya tienes y ya pagas. No guarda tus claves.',
    ctaTodo: 'TODO: enlace de descarga pendiente',
    shot: {
      file: 'tablero.png',
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
      { title: 'Contrata roles', text: 'Eliges los roles que necesita tu proyecto y los sumas al equipo.' },
      // DRAFT
      { title: 'Asigna tareas del tablero', text: 'Cada tarea del tablero es un cambio de OpenSpec en tu repositorio.' },
      // DRAFT
      { title: 'Aprueba la spec y el código', text: 'El rol trabaja la tarea y tú das el visto bueno en dos momentos.' },
      // DRAFT
      { title: 'Haz la revisión', text: 'Ves el resultado en la revisión antes de darlo por bueno.' },
    ],
    pathLabel: 'Cada tarea vive en tu repositorio:',
    pathExample: 'openspec/changes/<tarea>/',
    // DRAFT
    cli: 'Understaffed lanza Claude Code, el CLI de IA que ya tienes y ya pagas. No guarda ninguna clave.',
    shot: {
      file: 'revision.png',
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
      file: 'aprobacion.png',
      alt: 'Aprobación de la spec de una tarea en Understaffed',
    },
  },
  local: {
    id: 'local',
    title: 'Funciona en local',
    // DRAFT
    text: 'Understaffed trabaja en tu equipo, sobre tu repositorio.',
    // DRAFT
    account: 'La cuenta es opcional: solo la necesitas para sincronizar y colaborar.',
  },
  placeholder: { label: 'TODO: captura pendiente' },
  footer: {
    // DRAFT
    text: 'Understaffed. Gestiona proyectos de software con un equipo de agentes de IA.',
  },
};
