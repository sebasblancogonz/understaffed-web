import type { Dict } from './types';

// Site copy. `// DRAFT` marks developer proposals pending the copywriter.
// `// app` marks labels and demo data copied from the app (its locales, its template catalogue,
// its README and the screenshots): changing them here without changing them there is a lie.
export const en: Dict = {
  lang: 'en',
  ogLocale: 'en_US',
  meta: {
    // DRAFT
    title: 'Understaffed: a team of AI agents for your software projects',
    // DRAFT
    description:
      'Understaffed manages software projects with a team of AI agents organized like a company. You hire roles, give them tasks from a board, and nothing reaches your branch without your approval.',
    ogImageAlt: 'Understaffed, software project management with AI agents',
  },
  skip: 'Skip to content',
  header: {
    home: 'Understaffed, home',
    navLabel: 'Main',
    nav: [
      { id: 'how', label: 'How it works' },
      { id: 'status', label: 'Status' },
      { id: 'roles', label: 'Roles' },
      { id: 'requirements', label: 'Requirements' },
    ],
    cta: 'Request access',
    switchText: 'Español',
    switchShort: 'ES',
    switchLabel: 'Cambiar a español',
  },
  hero: {
    // DRAFT
    title: ['Your team of', 'AI agents'],
    // DRAFT
    lead: 'Hire roles, give them tasks from a board, and nothing reaches your branch until you approve the spec and then the code.',
    cta: 'Request access',
    // DRAFT
    secondary: 'See how it works',
    // app (roles of the demo project and the Tester template)
    tags: [
      { label: 'Backend', tone: 'lilac' },
      { label: 'QA', tone: 'green' },
      { label: 'Tester', tone: 'yellow' },
      { label: 'Frontend', tone: 'orange' },
      { label: 'Full-stack', tone: 'pink' },
    ],
    demo: {
      label: 'Demo of the Understaffed board with task #6',
      // DRAFT
      caption: 'Demo with the sample project storefront. Press the actions on task #6; the run is simulated.',
      // app
      app: {
        projects: 'Projects',
        project: 'storefront',
        tabs: ['Board', 'Team', 'Status'],
        path: 'E:\\dev\\storefront',
        noAccount: 'No account',
        signIn: 'Sign in in Settings',
        send: 'Send',
        receive: 'Receive',
        settings: 'Settings',
        addTask: 'Add task',
      },
      // app
      columns: ['Backlog', 'To do', 'In progress', 'In review', 'Done'],
      task: { num: '#6', title: 'Dark mode for the admin panel', prio: 'Medium', role: 'Frontend', total: 8 },
      others: [
        [
          { num: '#9', title: 'Product search with filters', prio: 'Medium', role: 'Frontend' },
          { num: '#10', title: 'End-to-end tests for checkout', prio: 'Medium', role: 'QA' },
          { num: '#11', title: 'Serve product images as WebP', prio: 'Low' },
        ],
        [
          { num: '#7', title: 'Discount coupons at checkout', prio: 'High', progress: '0/3', role: 'Full-stack' },
          { num: '#8', title: 'Low-stock email alert', prio: 'Low', progress: '0/2', role: 'Backend' },
        ],
        [{ num: '#5', title: 'Rate-limit login attempts', prio: 'Urgent', progress: '3/4', role: 'Backend', state: 'running' }],
        [{ num: '#4', title: 'Export orders to CSV', prio: 'High', progress: '5/5', role: 'Backend', state: 'awaitingReview' }],
        [
          { num: '#1', title: 'Paginate the order list', prio: 'High', progress: '4/4', role: 'Backend' },
          { num: '#2', title: 'Validate the email at sign-up', prio: 'Medium', progress: '3/3', role: 'Backend' },
          { num: '#3', title: 'Fix VAT rounding in the cart', prio: 'Urgent', progress: '2/2', role: 'Backend' },
        ],
      ],
      chips: { awaiting: 'Awaiting your approval', running: 'Running', awaitingReview: 'Waiting for your review', integrating: 'Integrating' },
      actions: {
        requestChanges: 'Request changes',
        approveSpec: 'Approve spec',
        run: 'Run',
        sendBack: 'Send back',
        approveCode: 'Approve',
        // DRAFT (demo control, not in the app)
        restart: 'Start over',
      },
      hints: [
        'Tasks reach To do when their spec is approved.',
        'Tasks reach In progress by running a To do task or sending back one in review.',
        'Tasks reach In review when a run finishes successfully.',
        'Tasks reach Done by approving the code of a task in review.',
        "All of the task's work in a single commit on your branch, with your hooks and signature.",
      ],
      notes: {
        requestChanges: 'The assignee will revise the change with your comment, without starting over.',
        sendBack: 'It will resume its session with your comment on top of the work already done, and the task will go back to In progress.',
      },
      // app (log strings); the hash 9c41e7a is a made-up sample for the demo
      log: [
        'Workspace created on branch understaffed/admin-dark-mode.',
        'Session started',
        "Work saved on the task's branch (9c41e7a).",
        'Finished successfully',
      ],
      review: { files: '8 of 8 tasks done', result: '', message: '' },
      done: 'Integrated into main · Single commit',
      // DRAFT
      live: '{title}: {column}.',
      // DRAFT
      fallbackTitle: 'In the app, this task moves on like this:',
      // DRAFT
      fallback: [
        'Approve spec: it moves to To do.',
        'Run: its role does it on its own branch and it moves to In review.',
        'Approve: the code reaches your branch in one commit.',
      ],
    },
  },
  how: {
    id: 'how',
    // DRAFT
    title: 'Every task goes through you twice',
    // DRAFT
    lead: 'The spec, before any code is written. The code, before it reaches your branch.',
    cards: [
      {
        tone: 'lilac',
        // DRAFT
        title: 'First, the spec',
        // DRAFT
        text: 'You write the task and its role drafts the OpenSpec change in your repository: proposal, requirements with scenarios, design and tasks. You approve it or request changes.',
        shot: { file: 'aprobacion-spec', alt: 'Spec of task #6 with its acceptance criteria, awaiting your approval' },
      },
      {
        tone: 'orange',
        // DRAFT
        title: 'Then, the work',
        // DRAFT
        text: 'The role works on its own branch with Claude Code, the CLI you already have and already pay for. Understaffed stores no keys.',
        // app (README), abridged
        code: {
          label: 'How every run is launched (abridged):',
          text: 'claude -p\n  --output-format stream-json\n  --permission-mode acceptEdits\n  --tools Read,Glob,Grep,Edit,\n          Write,Agent,Skill\n  --append-system-prompt-file\n      <role instructions>',
        },
      },
      {
        tone: 'green',
        // DRAFT
        title: 'Finally, the code',
        // DRAFT
        text: 'You review the diff and approve it, send it back with a comment or discard it. Approving brings it to your branch in one commit, with your hooks and signature.',
        shot: { file: 'revision-acciones', alt: 'Review of task #4 with the Discard implementation, Send back and Approve buttons, and the result of the run' },
      },
    ],
  },
  status: {
    id: 'status',
    // DRAFT
    title: 'What awaits your decision, at a glance',
    // DRAFT
    lead: 'The Status view brings together what awaits your approval, what is running, the activity and the cost per role. In a group, across all of its repositories.',
    // app
    cost: 'Cost reported by the provider; with a subscription it is an estimate.',
    shots: [
      // DRAFT (titles and captions)
      { file: 'grupos', alt: 'Shared Status of the Online store group, with five tasks waiting on you and the recent activity', title: 'Waiting on you and Running', caption: 'The specs and code waiting for your approval across the three repositories of “Online store”, and what is running, which role is doing it and since when.' },
      { file: 'estado-coste', alt: 'Cost and time over the last 30 days per role in the storefront project: Backend, Full-stack and Frontend', title: 'Cost per role', caption: 'What the runs of each role have cost over the last 30 days.', strip: true },
    ],
  },
  roles: {
    id: 'roles',
    // DRAFT
    title: 'Hire the roles you need',
    // DRAFT
    lead: 'Start from a template or a blank role. Every role has its instructions, its model and its permission to run commands.',
    // app (template catalogue: name and first sentence of its instructions)
    templates: [
      { name: 'Product analyst', text: 'Your strength is understanding the problem before the solution: what the user needs, why, and how everyone will know it is solved.', tone: 'green' },
      { name: 'Full-stack developer', text: 'You work end to end: data, logic, interface and tests.', tone: 'pink' },
      { name: 'Frontend developer', text: 'You build interfaces that are clear, accessible and consistent with the project’s design system.', tone: 'orange' },
      { name: 'Backend developer', text: 'You take care of data, APIs, business logic and their reliability.', tone: 'lilac' },
      { name: 'Tester', text: 'Your goal is that what gets delivered does what the spec says, edge cases included.', tone: 'yellow' },
    ],
    // app (RoleForm, locales and template catalogue)
    dialog: {
      title: 'Hire: Backend developer',
      hint: 'Review the name, instructions and permissions. The template does not change when you edit the role.',
      name: 'Name',
      nameValue: 'Backend',
      prompt: 'Instructions',
      promptValue:
        'You are a backend developer. You take care of data, APIs, business logic and their reliability.\n\n- Design data changes carefully: safe migrations, constraints in the database and nothing that loses existing information.\n- Validate every external input and return clear, stable errors.\n- Think about concurrency, transactions and partial failures.\n- Follow the project’s architecture and conventions; do not add dependencies without a reason.\n- Cover new logic with tests, including the error cases.',
      count: '{used} / {max}',
      model: 'Model',
      modelPlaceholder: 'Claude Code default',
      modelHint: "Leave it empty to use Claude Code's default model, or write an alias (opus, sonnet) or a full model name.",
      permissions: 'Permissions',
      allowBash: 'Run commands',
      allowBashHint:
        'When running a task, the agent can run commands in its workspace terminal: install dependencies, run the tests, build. The workspace only holds what is in git, with no installed dependencies or .env files. Specifying never runs commands.',
      toolsLine: "The plugins, skills, MCP servers and web access it can use don't depend on the role: turn them on in Tools, in the project's or the group's team.",
      back: 'Templates',
      confirm: 'Hire',
    },
  },
  local: {
    id: 'local',
    // DRAFT
    title: 'On your computer first. Then with your team.',
    // DRAFT
    lead: 'An account is optional: you only need one to sync your computers and collaborate with other people.',
    // DRAFT
    cards: [
      {
        title: 'No account',
        sub: 'This computer',
        tone: 'yellow',
        points: [
          'Without an account signed in, the app doesn’t connect to any server.',
          'Each role works on its own branch; approving brings the work to your branch in one commit.',
        ],
        media: { kind: 'shot', shot: { file: 'tablero-sin-cuenta', alt: 'Sidebar of the Understaffed board with no account: No account, Sign in in Settings, Send and Receive' } },
      },
      {
        title: 'With an account',
        sub: 'Your computers',
        tone: 'pink',
        points: [
          'You sign in with your email and a code sent to you, with no passwords.',
          'Send and Receive carry the whole state from one computer to another, task branches included, and it only asks you about what conflicts.',
        ],
        media: { kind: 'shot', shot: { file: 'sincronizacion-ordenadores', alt: 'Your computers in the account settings: Emma’s laptop, this computer, and Office desktop, with the name this computer shows on the other one' } },
      },
      {
        title: 'As a team',
        sub: 'People and agents',
        tone: 'lilac',
        points: [
          'You share a project or a group and invite people by email.',
          'The board syncs live and two people never work on the same task at once. The account works with your own server.',
        ],
        media: { kind: 'shot', shot: { file: 'colaboracion-equipo', alt: 'Shared backlog: task #9 running on Daniel Park’s computer and #10 being specified for Emma Walsh' } },
      },
    ],
  },
  requirements: {
    id: 'requirements',
    // DRAFT
    title: 'Works with what you already use',
    // DRAFT
    text: 'Understaffed doesn’t install git or Claude Code, but it explains how when they are missing.',
    // DRAFT
    tiles: [
      { name: 'Claude Code', text: 'Installed and signed in.' },
      { name: 'Git', text: '2.30 or later.' },
      { name: 'OpenSpec', text: 'Included in the app.' },
      { name: 'Windows', text: 'Desktop app.' },
      { name: 'macOS', text: 'Desktop app.' },
    ],
  },
  waitlist: {
    id: 'waitlist',
    // DRAFT
    title: 'Get early access',
    // DRAFT
    lead: 'Understaffed is in early access for Windows and macOS. Leave your email and we will let you know when you can install it.',
    label: 'Your email',
    submit: 'Request access',
    // DRAFT
    after: 'Joining doesn’t create an Understaffed account.',
    todo: 'TODO: waitlist destination pending',
    privacyTodo: 'TODO: privacy notice pending',
    // DRAFT
    thanksTitle: 'You’re on the list.',
    // DRAFT
    thanks: 'We’ll write to you when you can install Understaffed.',
  },
  footer: {
    // DRAFT
    text: 'Software projects with a team of AI agents, always with your approval.',
    productLabel: 'Product',
    languageLabel: 'Language',
    copyright: '© 2026 Understaffed',
  },
  placeholder: { label: 'TODO: screenshot pending' },
};
