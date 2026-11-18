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

/** Fila del panel de Estado del grupo. */
export interface BoardRow {
  repo: string;
  num: string;
  title: string;
  role: string;
  fact: string;
  status: string;
  kind: 'run' | 'decision' | 'done';
  detail: [string, string];
}

export interface Band {
  label: string;
  title: string;
  text: string;
  who?: string;
  marks?: ('person' | 'agent')[];
}

export interface Tab {
  id: string;
  title: string;
  sub: string;
  bands: Band[];
  media: { kind: 'video'; alt: string } | { kind: 'shot'; shot: Shot };
}

export interface Note {
  /** Parte del editor a la que se refiere. */
  part: 'name' | 'prompt' | 'model' | 'bash' | 'tools' | 'templates';
  title: string;
  text: string;
}

export interface Dict {
  lang: Lang;
  ogLocale: string;
  meta: { title: string; description: string; ogImageAlt: string };
  skip: string;
  header: { home: string; switchText: string; switchLabel: string };
  hero: {
    title: string;
    lead: string;
    cta: string;
    note: string;
    demo: {
      label: string;
      caption: string;
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
    one: { lead: string; label: string; value: string; role: string; tree: string; shot: Shot };
    two: { lead: string; buttons: [string, string]; intro: string; command: string };
    three: { lead: string; option: string; hint: string; button: string; shot: Shot };
  };
  requirements: {
    id: string;
    title: string;
    text: string;
    tiles: { name: string; text: string }[];
  };
  status: {
    id: string;
    title: string;
    intro: string;
    rows: BoardRow[];
    open: string;
    cost: string;
    shots: (Shot & { caption: string })[];
  };
  roles: {
    id: string;
    title: string;
    dialog: {
      title: string;
      hint: string;
      name: string;
      nameValue: string;
      prompt: string;
      promptValue: string;
      count: string;
      model: string;
      modelPlaceholder: string;
      modelHint: string;
      permissions: string;
      allowBash: string;
      allowBashHint: string;
      toolsLine: string;
      back: string;
      confirm: string;
    };
    notes: Note[];
  };
  local: {
    id: string;
    title: [string, string];
    cta: string;
    tabsLabel: string;
    tabs: Tab[];
  };
  waitlist: {
    id: string;
    title: string;
    before: string;
    submit: string;
    after: string;
    todo: string;
    privacyTodo: string;
    thanksTitle: string;
    thanks: string;
  };
  footer: {
    text: string;
    navLabel: string;
    nav: { id: string; label: string }[];
    year: string;
  };
  placeholder: { label: string };
}
