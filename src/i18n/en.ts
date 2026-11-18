import type { Dict } from './types';

// DRAFT: all copy is a developer proposal pending the copywriter.
export const en: Dict = {
  lang: 'en',
  ogLocale: 'en_US',
  meta: {
    // DRAFT
    title: 'Understaffed: a team of AI agents for your software projects',
    // DRAFT
    description:
      'Understaffed manages software projects with a team of AI agents organized like a company. You hire roles, assign them tasks from a board and review their work.',
    ogImageAlt: 'Understaffed, software project management with AI agents',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    items: [
      { id: 'how', label: 'How it works' },
      { id: 'approvals', label: 'Approvals' },
      { id: 'local', label: 'Local' },
    ],
    switchText: 'Español',
    switchLabel: 'Cambiar a español',
  },
  hero: {
    // DRAFT
    title: 'Your software project, with a team of AI agents',
    // DRAFT
    lead: 'Understaffed manages software projects with a team of AI agents organized like a company: you hire roles, assign them tasks from a board and review their work.',
    cta: 'Download Understaffed',
    // DRAFT
    note: 'It launches Claude Code, the CLI you already have and already pay for. It stores no keys.',
    ctaTodo: 'TODO: download link pending',
    shot: {
      file: 'tablero-en.png',
      alt: 'Understaffed board with tasks assigned to the roles on the team',
    },
  },
  how: {
    id: 'how',
    title: 'How it works',
    // DRAFT
    intro: 'You work like a small company: you lead and the roles do the work.',
    steps: [
      // DRAFT
      { title: 'Hire roles', text: 'Pick the roles your project needs and add them to the team.' },
      // DRAFT
      { title: 'Assign tasks from the board', text: 'Every task on the board is an OpenSpec change in your repository.' },
      // DRAFT
      { title: 'Approve the spec and the code', text: 'The role works the task and you sign off at two points.' },
      // DRAFT
      { title: 'Do the review', text: 'You see the result in the review before accepting it.' },
    ],
    pathLabel: 'Every task lives in your repository:',
    pathExample: 'openspec/changes/<task>/',
    // DRAFT
    cli: 'Understaffed launches Claude Code, the AI CLI you already have and already pay for. It stores no keys.',
    shot: {
      file: 'revision-en.png',
      alt: 'Task review screen in Understaffed',
    },
  },
  approvals: {
    id: 'approvals',
    title: 'Two human approvals per task',
    // DRAFT
    intro: 'Every task goes through you twice. Agents propose, you decide.',
    items: [
      // DRAFT
      { title: 'The spec', text: 'Before any code is written, you approve the task spec.' },
      // DRAFT
      { title: 'The code', text: 'When the role is done, you approve the code.' },
    ],
    shot: {
      file: 'aprobacion-en.png',
      alt: 'Approving a task spec in Understaffed',
    },
  },
  local: {
    id: 'local',
    title: 'Runs locally',
    // DRAFT
    text: 'Understaffed works on your machine, on your repository.',
    // DRAFT
    account: 'An account is optional: you only need one to sync and collaborate.',
  },
  placeholder: { label: 'TODO: screenshot pending' },
  footer: {
    // DRAFT
    text: 'Understaffed. Manage software projects with a team of AI agents.',
  },
};
