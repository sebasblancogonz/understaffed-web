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
      { id: 'requirements', label: 'Requirements' },
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
      file: 'tablero',
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
      { title: 'Assign a task to a role', text: 'You hire the roles your project needs and assign them tasks from the board. Every task is an OpenSpec change in your repository, and the role starts by writing the spec.' },
      // DRAFT
      { title: 'Approve the spec', text: 'You read the spec and approve it before any code is written.' },
      // DRAFT
      { title: 'The role does the work', text: 'With the spec approved, the role carries out the task.' },
      // DRAFT
      { title: 'Do the review', text: 'You review the result of the task before accepting it.' },
      // DRAFT
      { title: 'Approve the code', text: 'After the review, you approve the code. A task is not closed without your approval.' },
    ],
    pathLabel: 'Every task lives in your repository:',
    pathExample: 'openspec/changes/<task>/',
    // DRAFT
    cli: 'Understaffed launches Claude Code, the AI CLI you already have and already pay for. It stores no keys.',
    shot: {
      file: 'revision',
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
      file: 'aprobacion',
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
  requirements: {
    id: 'requirements',
    title: 'Requirements',
    // DRAFT
    items: [
      'Desktop app for Windows and macOS.',
      'git 2.30 or later.',
      'Claude Code installed and signed in.',
    ],
    // DRAFT
    note: 'Understaffed does not install git or Claude Code, but it explains how to when they are missing.',
  },
  placeholder: { label: 'TODO: screenshot pending' },
  footer: {
    // DRAFT
    text: 'Understaffed. Manage software projects with a team of AI agents.',
  },
};
