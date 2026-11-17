import type { Lang } from '../config';

export interface Step {
  title: string;
  text: string;
}

export interface Shot {
  file: string;
  alt: string;
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
    ctaTodo: string;
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
  local: { id: string; title: string; text: string; account: string };
  placeholder: { label: string };
  footer: { text: string };
}
