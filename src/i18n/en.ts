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
  header: { home: 'Understaffed, home', switchText: 'Español', switchLabel: 'Cambiar a español' },
  hero: {
    // DRAFT
    title: 'Your team of AI agents',
    // DRAFT
    lead: 'Hire roles, give them tasks from a board, and nothing reaches your branch until you approve the spec and then the code.',
    cta: 'Request access',
    // DRAFT
    note: 'It launches Claude Code, the CLI you already have and already pay for. It stores no keys.',
    demo: {
      label: 'Demo of the Understaffed board with task #4',
      // DRAFT
      caption: 'Demo with the sample project storefront. The run is simulated.',
      // app
      columns: ['Backlog', 'To do', 'In progress', 'In review', 'Done'],
      task: { num: '#4', title: 'Export orders to CSV', prio: 'High', role: 'Backend', total: 5 },
      others: [
        [
          { num: '#6', title: 'Dark mode for the admin panel', prio: 'Medium', progress: '0/8', role: 'Frontend', state: 'awaiting' },
          { num: '#9', title: 'Product search with filters', prio: 'Medium', role: 'Frontend' },
          { num: '#11', title: 'Serve product images as WebP', prio: 'Low' },
        ],
        [
          { num: '#7', title: 'Discount coupons at checkout', prio: 'High', progress: '0/3', role: 'Full-stack' },
          { num: '#8', title: 'Low-stock email alert', prio: 'Low', progress: '0/2', role: 'Backend' },
        ],
        [{ num: '#5', title: 'Rate-limit login attempts', prio: 'Urgent', progress: '3/4', role: 'Backend', state: 'running' }],
        [],
        [
          { num: '#1', title: 'Paginate the order list', prio: 'High', progress: '4/4', role: 'Backend' },
          { num: '#2', title: 'Validate the email at sign-up', prio: 'Medium', progress: '3/3', role: 'Backend' },
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
        'Workspace created on branch understaffed/export-orders-to-csv.',
        'Session started',
        "Work saved on the task's branch (9c41e7a).",
        'Finished successfully',
      ],
      review: { files: '4 files · +70 −1', result: '12 min · $1.38', message: 'Done. Every task is checked and the tests pass.' },
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
    title: 'In your repository',
    one: {
      // DRAFT
      lead: 'First, you write the task and its role drafts the spec.',
      label: 'Task title',
      value: 'Dark mode for the admin panel',
      role: 'Frontend',
      tree: 'openspec/changes/admin-dark-mode/\n├── proposal.md\n├── design.md\n├── tasks.md\n└── specs/admin-theme/spec.md',
      shot: { file: 'aprobacion', alt: 'Spec of task #6 with its acceptance criteria, awaiting your approval' },
    },
    two: {
      // DRAFT
      lead: 'Then you approve the spec and run it.',
      buttons: ['Approve spec', 'Run'],
      // app (README)
      intro: "Every run launches Claude Code like this (abridged), in the task's workspace, with the brief on standard input:",
      command:
        'claude -p --output-format stream-json --verbose\n       --permission-mode acceptEdits --permission-prompts none\n       --tools Read,Glob,Grep,Edit,Write,Agent,Skill\n       --append-system-prompt-file <role instructions>',
    },
    three: {
      // DRAFT
      lead: 'Finally, you review the diff and approve the code.',
      option: 'One commit',
      hint: "All of the task's work in a single commit on your branch, with your hooks and signature.",
      button: 'Approve',
      shot: { file: 'revision', alt: 'Review of task #4 with the diff, the result of the run and the role’s last message' },
    },
  },
  requirements: {
    id: 'requirements',
    // DRAFT
    title: 'What you already have',
    // DRAFT
    text: 'Understaffed doesn’t install git or Claude Code, but it explains how when they are missing.',
    // DRAFT
    tiles: [
      { name: 'Claude Code', text: 'Installed and signed in. The app launches it; it stores no keys.' },
      { name: 'Git', text: '2.30 or later, for the task workspaces.' },
      { name: 'OpenSpec', text: 'Included in the app. Every task is a change in your repository.' },
      { name: 'Windows', text: 'Desktop app.' },
      { name: 'macOS', text: 'Desktop app.' },
      { name: 'Your setup', text: 'Your CLAUDE.md, your hooks, your subagents and your commands, as in your terminal.' },
    ],
  },
  status: {
    id: 'status',
    title: 'Status',
    // DRAFT
    intro: 'What awaits your decision across the three repositories of “Online store”.',
    // app (Status screenshots)
    rows: [
      { repo: 'storefront', num: '#5', title: 'Rate-limit login attempts', role: 'Backend', fact: 'Run · 0:14', status: 'Running', kind: 'run', detail: ['Run · Backend · running for 0:14', 'Specify · Backend · Succeeded · 4 min · $0.24'] },
      { repo: 'storefront', num: '#4', title: 'Export orders to CSV', role: 'Backend', fact: '12 min · $1.38', status: 'Waiting for your review', kind: 'decision', detail: ['Run · Backend · Succeeded · 12 min · $1.38', 'Done. Every task is checked and the tests pass.'] },
      { repo: 'storefront', num: '#6', title: 'Dark mode for the admin panel', role: 'Frontend', fact: '4 min · $0.31', status: 'Awaiting your approval', kind: 'decision', detail: ['Specify · Frontend · Succeeded · 4 min · $0.31', 'The spec passes OpenSpec validation.'] },
      { repo: 'storefront-web', num: '#1', title: 'Photo gallery on the product page', role: 'Frontend', fact: '4 min · $0.24', status: 'Awaiting your approval', kind: 'decision', detail: ['Specify · Frontend · Succeeded · 4 min · $0.24', 'The spec passes OpenSpec validation.'] },
      { repo: 'storefront-web', num: '#2', title: 'Keep the cart between visits', role: 'Frontend', fact: '8 min · $0.92', status: 'Waiting for your review', kind: 'decision', detail: ['Run · Frontend · Succeeded · 8 min · $0.92', 'Specify · Frontend · Succeeded · 4 min · $0.19'] },
      { repo: 'storefront-admin', num: '#2', title: 'Record refunds from the order', role: 'Full-stack', fact: '5 min · $0.31', status: 'Awaiting your approval', kind: 'decision', detail: ['Specify · Full-stack · Succeeded · 5 min · $0.31', 'The spec passes OpenSpec validation.'] },
      { repo: 'storefront-admin', num: '#1', title: 'Filter orders by status', role: 'Frontend', fact: 'main · c25228f', status: 'Integrated', kind: 'done', detail: ['Integrated into main · c25228f · Single commit', 'Run · Frontend · Succeeded · 8 min · $0.58'] },
      { repo: 'storefront', num: '#3', title: 'Fix VAT rounding in the cart', role: 'Backend', fact: 'main · 03bed32', status: 'Integrated', kind: 'done', detail: ['Integrated into main · 03bed32 · Single commit', 'Run · Backend · Succeeded · 5 min · $0.41'] },
      { repo: 'storefront', num: '#2', title: 'Validate the email at sign-up', role: 'Backend', fact: 'main · 4624bd2', status: 'Integrated', kind: 'done', detail: ['Integrated into main · 4624bd2 · Single commit', 'Run · Backend · Succeeded · 6 min · $0.52'] },
    ],
    open: 'Show the detail of',
    cost: 'Cost reported by the provider; with a subscription it is an estimate.',
    shots: [
      { file: 'grupos', alt: 'Shared Status of the Online store group, with five tasks waiting on you and the recent activity', caption: 'The shared Status of “Online store”.' },
      { file: 'estado', alt: 'Status of the storefront project, with what is waiting on you, the recent activity and the cost per role', caption: 'The Status of storefront, with the cost per role.' },
    ],
  },
  roles: {
    id: 'roles',
    // DRAFT
    title: 'Hire the roles',
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
    // DRAFT
    notes: [
      { part: 'name', title: 'Name', text: 'How it shows on the board, next to the agent square, on the tasks you give it.' },
      { part: 'prompt', title: 'Instructions', text: 'How the role works: what it pays attention to, what it prioritises and what it avoids. Up to 8,000 characters.' },
      { part: 'model', title: 'Model', text: 'Empty uses Claude Code’s default model. An alias such as opus or sonnet works too.' },
      { part: 'bash', title: 'Run commands', text: 'To install dependencies or run the tests in its workspace. Specifying never runs commands.' },
      { part: 'tools', title: 'Tools', text: 'Plugins, skills, MCP servers and the web are turned on per project or group. Anything you don’t turn on is denied.' },
      { part: 'templates', title: 'Templates', text: 'Product analyst, full-stack, frontend or backend developer, and Tester. Editing the role does not change the template.' },
    ],
  },
  local: {
    id: 'local',
    // DRAFT
    title: ['Local first.', 'Then your team.'],
    cta: 'Request access',
    tabsLabel: 'How Understaffed is used',
    // DRAFT
    tabs: [
      {
        id: 'local-no-account',
        title: 'No account',
        sub: 'This computer',
        bands: [
          { label: 'Network', title: 'No requests', text: 'Without an account signed in, the app doesn’t connect to any server.' },
          { label: 'Code', title: 'A branch per task', text: 'Each role works in its own workspace; approving brings the work to your branch in one commit.', who: 'Your roles', marks: ['agent', 'agent'] },
          { label: 'Decision', title: 'Always yours', text: 'Nothing runs without an action from you: specify, run and approve.', who: 'You', marks: ['person'] },
        ],
        media: { kind: 'video', alt: 'The storefront board in Understaffed, with no account, while tasks move on' },
      },
      {
        id: 'local-account',
        title: 'With an account',
        sub: 'Your computers',
        bands: [
          { label: 'Sign in', title: 'Email and a code', text: 'A code arrives by email. No passwords or tokens to copy.', who: 'Emma Walsh', marks: ['person'] },
          { label: 'Send', title: 'All of the state', text: 'Tasks, roles, settings and the task branches, from one computer to another.', who: 'Emma’s laptop' },
          { label: 'Receive', title: 'Only what conflicts', text: 'Merging is per item: it only asks you about what changed on both sides.', who: 'Office desktop' },
        ],
        media: { kind: 'shot', shot: { file: 'sincronizacion', alt: 'Understaffed account settings with the computers where the account is signed in' } },
      },
      {
        id: 'local-team',
        title: 'As a team',
        sub: 'People and agents',
        bands: [
          { label: 'Share', title: 'A project or a group', text: 'You invite by email; the invitation waits until the other person accepts it.', who: 'Emma Walsh', marks: ['person'] },
          { label: 'Live', title: 'The same board', text: 'What changes reaches everyone else while the app is open.', who: 'Emma and Daniel', marks: ['person', 'person'] },
          { label: 'Claimed', title: 'One task, one person', text: 'Before specifying, running or approving, the app claims the task: two people never work on it at once.', who: 'Daniel Park', marks: ['person', 'agent'] },
          { label: 'Server', title: 'Your own', text: 'The account works with your own server.', who: 'sync.example.com' },
        ],
        media: { kind: 'shot', shot: { file: 'colaboracion', alt: 'Shared Understaffed board with the people on the team' } },
      },
    ],
  },
  waitlist: {
    id: 'waitlist',
    title: 'Waitlist',
    // DRAFT
    before: 'My email is',
    submit: 'Request access',
    // DRAFT
    after: 'We’ll write to you when you can install Understaffed. Joining doesn’t create an account.',
    todo: 'TODO: waitlist destination pending',
    privacyTodo: 'TODO: privacy notice pending',
    // DRAFT
    thanksTitle: 'You’re on the list.',
    // DRAFT
    thanks: 'We’ll write to you when you can install Understaffed.',
  },
  footer: {
    // DRAFT
    text: 'Understaffed. Software projects with AI agents.',
    navLabel: 'Sections',
    nav: [
      { id: 'how', label: 'How it works' },
      { id: 'requirements', label: 'Requirements' },
      { id: 'status', label: 'Status' },
      { id: 'roles', label: 'Roles' },
      { id: 'waitlist', label: 'Request access' },
    ],
    year: '2026',
  },
  placeholder: { label: 'TODO: screenshot pending' },
};
