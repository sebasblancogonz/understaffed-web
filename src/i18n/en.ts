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
      { id: 'status', label: 'Status' },
      { id: 'local', label: 'Local & account' },
      { id: 'requirements', label: 'Requirements' },
      { id: 'waitlist', label: 'Waitlist' },
    ],
    switchText: 'Español',
    switchLabel: 'Cambiar a español',
  },
  hero: {
    // DRAFT
    title: 'Your software project, with a team of AI agents',
    // DRAFT
    lead: 'Understaffed manages software projects with a team of AI agents organized like a company: you hire roles, assign them tasks from a board and review their work.',
    // DRAFT
    cta: 'Join the waitlist',
    // DRAFT
    note: 'It launches Claude Code, the CLI you already have and already pay for. It stores no keys.',
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
  status: {
    id: 'status',
    // DRAFT
    title: 'What awaits your decision, at a glance',
    // DRAFT
    intro: 'The Status view brings together what awaits your decision, what is running, what has happened and what it has cost, on one screen.',
    items: [
      // DRAFT
      { title: 'Awaiting your decision', text: 'The specs and code waiting for your approval.' },
      // DRAFT
      { title: 'Running', text: 'The tasks being run and the role working on each one.' },
      // DRAFT
      { title: 'Activity', text: 'What has happened in the project, in order.' },
      // DRAFT
      { title: 'Cost per role', text: 'What the runs of each role have cost.' },
    ],
    shot: {
      file: 'estado',
      alt: 'Understaffed Status view with what awaits your decision, what is running, the activity and the cost per role',
    },
  },
  groups: {
    id: 'groups',
    // DRAFT
    title: 'One product, several repositories',
    // DRAFT
    intro: 'Bring the repositories of one product together in a group. Every run sees the other repositories in the group as read-only context.',
    items: [
      // DRAFT
      { title: 'One Status for the group', text: 'What awaits your decision across every repository in the group, in a single view.' },
      // DRAFT
      { title: 'One shared team', text: 'The same roles work in any repository of the group.' },
      // DRAFT
      { title: 'Features across repositories', text: 'A feature splits its tasks across repositories, and the waits between them keep a task from running too early.' },
    ],
    shot: {
      file: 'grupos',
      alt: 'A project group in Understaffed with several repositories and their shared Status',
    },
  },
  local: {
    id: 'local',
    // DRAFT
    title: 'Local first, with an account if you want one',
    // DRAFT
    text: 'Understaffed works on your computer, on your repository. Without an account everything works the same and the app makes no network requests.',
    // DRAFT
    account: 'An account is optional: you only need one to sync your computers and collaborate with other people.',
    sync: {
      // DRAFT
      title: 'Your computers',
      // DRAFT
      text: 'Send and Receive carry the whole state of the app from one computer to another, task branches included. It only asks you about what conflicts.',
      // DRAFT
      detail: 'You sign in with your email and a code sent to you, with no passwords.',
      shot: {
        file: 'sincronizacion',
        alt: 'Dialog to send and receive the state of Understaffed between computers',
      },
    },
    team: {
      // DRAFT
      title: 'Your team',
      // DRAFT
      text: 'Share a project or a group and invite people by email. The board syncs live and two people never work on the same task at once.',
      // DRAFT
      detail: 'Code keeps travelling through each person’s git remote, and the account works with your own server.',
      shot: {
        file: 'colaboracion',
        alt: 'Shared Understaffed board with the people on the team',
      },
    },
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
  waitlist: {
    id: 'waitlist',
    // DRAFT
    title: 'Get early access',
    // DRAFT
    intro: 'Understaffed is in early access for Windows and macOS. Leave your email and we will let you know when you can install it.',
    // DRAFT
    account: 'Joining does not create an Understaffed account.',
    label: 'Your email',
    // DRAFT
    submit: 'Join the waitlist',
    todo: 'TODO: waitlist destination pending',
    privacyTodo: 'TODO: privacy notice pending',
    // DRAFT
    thanksTitle: 'You’re on the list.',
    // DRAFT
    thanks: 'We’ll write to you when you can install Understaffed.',
  },
  placeholder: { label: 'TODO: screenshot pending' },
  footer: {
    // DRAFT
    text: 'Understaffed. Manage software projects with a team of AI agents.',
  },
};
