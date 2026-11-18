import type { Lang } from '../config';

export interface Shot {
  file: string;
  alt: string;
}

/** Tarjeta del tablero de demostración (datos de las capturas). */
export interface Card {
  num: string;
  title: string;
  prio: string;
  progress?: string;
  role?: string;
  /** Estado de la tarjeta, en el chip de arriba. */
  state?: 'awaiting' | 'running' | 'awaitingReview';
}

/** Colores de rol de la paleta del comp aprobado. */
export type Tone = 'lilac' | 'orange' | 'green' | 'pink' | 'yellow';

export interface Link {
  id: string;
  label: string;
}

export interface Dict {
  lang: Lang;
  ogLocale: string;
  meta: { title: string; description: string; ogImageAlt: string };
  skip: string;
  header: { home: string; navLabel: string; nav: Link[]; cta: string; menu: string; switchText: string };
  hero: {
    title: [string, string];
    lead: string;
    cta: string;
    secondary: string;
    tags: { label: string; tone: Tone }[];
    demo: {
      label: string;
      caption: string;
      app: {
        projects: string;
        project: string;
        tabs: [string, string, string];
        path: string;
        noAccount: string;
        signIn: string;
        send: string;
        receive: string;
        settings: string;
        addTask: string;
      };
      columns: [string, string, string, string, string];
      task: { num: string; title: string; prio: string; role: string; total: number };
      /** Las demás tarjetas de cada columna, de Backlog a Hecho. */
      others: [Card[], Card[], Card[], Card[], Card[]];
      chips: { awaiting: string; running: string; awaitingReview: string; integrating: string };
      actions: {
        requestChanges: string;
        approveSpec: string;
        run: string;
        sendBack: string;
        approveCode: string;
        restart: string;
      };
      /** Pista de la app para cada paso: Backlog, Por hacer, En curso, En revisión, Hecho. */
      hints: [string, string, string, string, string];
      notes: { requestChanges: string; sendBack: string };
      /** Lo que se aprueba en el primer paso: los criterios de la spec de la tarea. */
      spec: { head: string; criteria: string[]; valid: string };
      /** Lo que se revisa antes de aprobar el código: los archivos cambiados y el último mensaje del rol. */
      code: { head: string; files: { name: string; add: number; del?: number }[]; message: string };
      log: string[];
      review: { files: string; result: string; message: string };
      done: string;
      live: string;
      fallbackTitle: string;
      fallback: string[];
    };
  };
  how: {
    id: string;
    title: string;
    lead: string;
    cards: {
      tone: Tone;
      title: string;
      text: string;
      shot?: Shot;
      code?: { label: string; text: string };
    }[];
  };
  status: {
    id: string;
    title: string;
    lead: string;
    cost: string;
    /** `strip`: un recorte apaisado (una franja de la app), no una ventana entera. */
    shots: (Shot & { title: string; caption: string; strip?: boolean })[];
  };
  roles: {
    id: string;
    title: string;
    lead: string;
    /** El título de la lista de plantillas. */
    templatesLabel: string;
    /** La marca de la plantilla que enseña el diálogo. */
    current: string;
    /** El pie del diálogo. */
    caption: string;
    templates: { name: string; text: string; tone: Tone }[];
    dialog: {
      /** Lo que enseña el diálogo, para quien no lo ve. */
      alt: string;
      title: string;
      name: string;
      nameValue: string;
      prompt: string;
      promptValue: string;
      count: string;
      model: string;
      modelPlaceholder: string;
      permissions: string;
      allowBash: string;
      back: string;
      confirm: string;
    };
  };
  local: {
    id: string;
    title: string;
    lead: string;
    cards: {
      title: string;
      sub: string;
      tone: Tone;
      points: string[];
      media: { kind: 'shot'; shot: Shot };
    }[];
  };
  requirements: {
    id: string;
    title: string;
    text: string;
    /** `href`: la página de esa herramienta. */
    tiles: { name: string; text: string; href?: string }[];
  };
  waitlist: {
    id: string;
    title: string;
    lead: string;
    label: string;
    submit: string;
    after: string;
    /** El aviso de privacidad. `{email}` es el buzón de la lista. */
    privacy: string;
    /** Lo que se ve en lugar del formulario sin JavaScript. `{email}` es el buzón de la lista. */
    noJs: string;
    /** El texto del botón mientras se envía. */
    sending: string;
    errors: {
      empty: string;
      invalid: string;
      limited: string;
      /** `{email}` es el buzón de la lista. */
      failed: string;
    };
    thanksTitle: string;
    /** `{email}` es la dirección que se acaba de apuntar. */
    thanks: string;
    /** Vuelve al formulario para apuntar otra dirección. */
    again: string;
  };
  footer: {
    text: string;
    productLabel: string;
    languageLabel: string;
    copyright: string;
  };
  placeholder: { label: string };
}
