import type { Lang } from '../config';

export interface Step {
  title: string;
  text: string;
}

export interface Shot {
  file: string;
  alt: string;
}

/** Bloque con título, texto y su captura (p. ej. sincronizar o colaborar). */
export interface Feature {
  title: string;
  text: string;
  detail: string;
  shot: Shot;
}

export interface Dict {
  lang: Lang;
  ogLocale: string;
  meta: { title: string; description: string; ogImageAlt: string };
  skip: string;
  nav: {
    label: string;
    items: { id: string; label: string }[];
    switchText: string;
    switchLabel: string;
  };
  hero: {
    title: string;
    lead: string;
    cta: string;
    note: string;
    shot: Shot;
  };
  how: {
    id: string;
    title: string;
    intro: string;
    steps: Step[];
    pathLabel: string;
    pathExample: string;
    cli: string;
    shot: Shot;
  };
  approvals: {
    id: string;
    title: string;
    intro: string;
    items: Step[];
    shot: Shot;
  };
  status: {
    id: string;
    title: string;
    intro: string;
    /** El primero es lo que espera tu decisión: lleva el acento. */
    items: Step[];
    shot: Shot;
  };
  groups: {
    id: string;
    title: string;
    intro: string;
    items: Step[];
    shot: Shot;
  };
  local: {
    id: string;
    title: string;
    text: string;
    account: string;
    sync: Feature;
    team: Feature;
  };
  requirements: { id: string; title: string; items: string[]; note: string };
  waitlist: {
    id: string;
    title: string;
    intro: string;
    account: string;
    label: string;
    submit: string;
    todo: string;
    privacyTodo: string;
    thanksTitle: string;
    thanks: string;
  };
  placeholder: { label: string };
  footer: { text: string };
}
