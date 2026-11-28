import type { Dict } from './types';

// Site copy. `// DRAFT` marks developer proposals pending the copywriter.
// `// app` marks labels and demo data copied from the app (its locales, its template catalogue,
// its README and the screenshots): changing them here without changing them there is a lie.
export const en: Dict = {
  lang: 'en',
  ogLocale: 'en_US',
  meta: {
    // DRAFT
    title: 'Understaffed: AI agents for your software projects',
    // DRAFT
    description:
      'Understaffed: software projects with AI agents. You hire roles, give them tasks from a board, and nothing reaches your branch without your approval.',
    // DRAFT: requirements, for the structured data
    softwareRequirements: 'git 2.30 or later, and Claude Code or Codex installed and signed in',
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
    menu: 'Sections',
    switchText: 'Español',
  },
  hero: {
    // DRAFT
    title: ['Every task goes', 'through you twice'],
    // DRAFT
    lead: 'You hire AI roles and assign them tasks from a board. You approve the spec before any code is written, and the code before it reaches your branch.',
    cta: 'Request access',
    // DRAFT
    secondary: 'Try the demo',
    // app (roles of the demo project and the Tester template)
    tags: [
      { label: 'Backend', tone: 'lilac' },
      { label: 'Analyst', tone: 'green' },
      { label: 'Tester', tone: 'yellow' },
      { label: 'Frontend', tone: 'orange' },
      { label: 'Full-stack', tone: 'pink' },
    ],
    demo: {
      label: 'Demo of the Understaffed board with task #6',
      // DRAFT
      caption: 'Demo with the storefront sample project; the run is simulated.',
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
      chips: { awaiting: 'Awaiting your approval', running: 'Running', awaitingReview: 'Waiting for your review', integrating: 'Integrating', specifying: 'Specifying' },
      actions: {
        requestChanges: 'Request changes',
        approveSpec: 'Approve spec',
        run: 'Run',
        sendBack: 'Send back',
        approveCode: 'Approve',
        // DRAFT (demo control, not in the app)
        restart: 'Start over',
      },
      // DRAFT: what to do at each step
      hints: [
        'Try it: read the criteria of task\u00a0#6 and approve its spec, or request changes.',
        'The spec is approved. Run the task: its role will work on its own branch.',
        'The Frontend role is working on its branch. There is nothing for you to do until it finishes.',
        'It finished successfully. Look at the files it changed and approve, or send it back with a comment.',
        "All of the task's work in a single commit on your branch, with your hooks and signature.",
      ],
      notes: {
        requestChanges: 'The assignee will revise the change with your comment, without starting over.',
        sendBack: 'It will resume its session with your comment on top of the work already done, and the task will go back to In progress.',
      },
      // app (task #6 panel, Spec tab): the titles of its acceptance criteria
      spec: {
        head: 'Acceptance criteria',
        criteria: ['Theme follows the system', 'User choice', 'Sufficient contrast'],
        valid: 'The spec passes OpenSpec validation.',
      },
      // app (task review: the "Code" list and last message). The files and their figures are
      // made-up samples for the demo.
      code: {
        head: 'Code',
        files: [
          { name: 'theme.css', add: 64 },
          { name: 'ThemeMenu.tsx', add: 41 },
          { name: 'prefs.ts', add: 9, del: 1 },
          { name: 'theme.test.ts', add: 36 },
        ],
        message: 'Done. Every task is checked off and the tests pass.',
      },
      // app (log strings); the hash 9c41e7a is a made-up sample for the demo
      log: [
        'Workspace created on branch understaffed/admin-dark-mode.',
        'Session started',
        "Work saved on the task's branch (9c41e7a).",
        'Finished successfully',
      ],
      review: { files: '8 of 8 tasks done', result: '', message: '' },
      done: 'Integrated into main\u00a0· Single\u00a0commit',
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
    title: 'How a task reaches your branch',
    // DRAFT
    lead: 'Understaffed manages software projects with a team of AI agents organized like a company. You approve the spec before the code, and the code before your branch.',
    cards: [
      {
        tone: 'lilac',
        // DRAFT
        title: 'First, the spec',
        // DRAFT
        text: 'You write the task and its role drafts the change in OpenSpec, an open spec format that lives in files in your repository: proposal, requirements with scenarios, design and tasks. You approve it or request changes.',
        shot: { file: 'aprobacion-spec', alt: 'Acceptance criteria in the spec of task #6: “Theme follows the system”, with its requirement and the “Dark system” scenario' },
      },
      {
        tone: 'orange',
        // DRAFT
        title: 'Then, the work',
        // DRAFT
        text: 'The role works on its own branch with Claude Code or Codex, the CLI you already have and already pay for. Understaffed stores no keys.',
        // app (README), abridged
        code: {
          label: 'How every run is launched with Claude Code (abridged):',
          text: 'claude -p\n  --output-format stream-json\n  --permission-mode acceptEdits\n  --tools Read,Glob,Grep,Edit,\n          Write,Agent,Skill\n  --append-system-prompt-file\n      <role instructions>',
        },
      },
      {
        tone: 'green',
        // DRAFT
        title: 'Finally, the code',
        // DRAFT
        text: 'You review the diff and approve it, send it back with a comment or discard it. Approving brings it to your branch in one commit, with your hooks and signature.',
        shot: { file: 'revision-diff', alt: 'Diff of src/orders/orders.routes.ts in the review of task #4, with its added and removed lines' },
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
    // DRAFT
    swipe: 'On this screen, swipe each image to see all of it.',
    shots: [
      // DRAFT (titles and captions)
      { file: 'estado-decision', alt: 'The “Waiting on you” list of the Online store group: five tasks from its three repositories, three awaiting your approval and two your review', title: 'Waiting on you', caption: 'The specs and code waiting for your approval across the three repositories of “Online store”.' },
      { file: 'estado-en-marcha', alt: 'The “Running” strip: the Backend role is running storefront task #5 and has been for under a minute', title: 'Running', caption: 'What is running, which role is doing it and since when.', strip: true },
      { file: 'estado-coste', alt: 'Cost and time over the last 30 days per role in the storefront project: Backend, Full-stack and Frontend', title: 'Cost per role', caption: 'What the runs of each role have cost over the last 30 days.', strip: true },
    ],
  },
  roles: {
    id: 'roles',
    // DRAFT
    title: 'Hire the roles you need',
    // DRAFT
    lead: 'Start from a template or a blank role. Every role has its instructions, its model and its permission to run commands.',
    // DRAFT
    templatesLabel: 'Pick a template to read its instructions',
    // DRAFT
    current: 'In the dialog',
    // DRAFT: `{name}` is the template
    pick: 'Show {name} in the dialog',
    // DRAFT
    caption: 'The app’s hire dialog, with the full instructions of the chosen template.',
    // app (template catalogue: name and first sentence of its instructions)
    templates: [
      { name: 'Product analyst', text: 'Your strength is understanding the problem before the solution: what the user needs, why, and how everyone will know it is solved.', tone: 'green', prompt:
          'You are a product analyst on a software team. Your strength is understanding the problem before the solution: what the user needs, why, and how everyone will know it is solved.\n\n- When specifying, write verifiable requirements and concrete scenarios (GIVEN/WHEN/THEN) that work as acceptance criteria. Cover the usual case, the errors and the limits.\n- Write down assumptions and open questions in the design instead of inventing answers.\n- Keep the scope small: separate what is essential from what is nice to have, and leave out anything the task does not ask for.\n- When implementing, prioritise documentation, interface copy and acceptance tests; if a task needs code, keep it as simple as possible and explain it.',
      },
      { name: 'Full-stack developer', text: 'You work end to end: data, logic, interface and tests.', tone: 'pink', prompt:
          'You are a full-stack developer. You work end to end: data, logic, interface and tests.\n\n- Before changing anything, read the surrounding code and follow its conventions, structure and style.\n- Make small changes focused on what each task asks for; do not reorganise what does not need it.\n- Back every new behaviour with tests when the project has them.\n- Validate input at the edge of the system, handle errors explicitly and never leave secrets in the code.\n- If something in the spec is ambiguous or contradictory, pick the most cautious option and write it down.',
      },
      { name: 'Frontend developer', text: 'You build interfaces that are clear, accessible and consistent with the project’s design system.', tone: 'orange', prompt:
          'You are a frontend developer. You build interfaces that are clear, accessible and consistent with the project\'s design system.\n\n- Reuse the components, styles and design tokens that already exist before creating new ones.\n- Take care of loading, empty and error states, and make everything usable with a keyboard and a screen reader.\n- Keep business logic out of presentational components.\n- Follow the structure, naming and state management the project already uses.\n- Write tests for interface logic that has rules, not for layout.',
      },
      { name: 'Backend developer', text: 'You take care of data, APIs, business logic and their reliability.', tone: 'lilac', prompt:
          'You are a backend developer. You take care of data, APIs, business logic and their reliability.\n\n- Design data changes carefully: safe migrations, constraints in the database and nothing that loses existing information.\n- Validate every external input and return clear, stable errors.\n- Think about concurrency, transactions and partial failures.\n- Follow the project\'s architecture and conventions; do not add dependencies without a reason.\n- Cover new logic with tests, including the error cases.',
      },
      { name: 'Tester', text: 'Your goal is that what gets delivered does what the spec says, edge cases included.', tone: 'yellow', prompt:
          'You are a tester. Your goal is that what gets delivered does what the spec says, edge cases included.\n\n- Treat the spec\'s scenarios as acceptance criteria and turn them into automated tests when the project has a place for them.\n- Look for the gaps: empty or huge inputs, errors, permissions, intermediate states and concurrency.\n- When specifying, propose the scenarios that are missing and make clear how each requirement is checked.\n- If you find a bug that is not yours to fix, describe it with the steps to reproduce it instead of hiding it.\n- Never change the app\'s behaviour just to make a test pass.',
      },
    ],
    // app (RoleForm, locales and template catalogue)
    dialog: {
      // `{name}` is the chosen template
      alt: 'The app’s “Hire: {name}” dialog, with the role’s name, its instructions, the model and the permission to run commands',
      hireFrom: 'Hire: {name}',
      name: 'Name',
      prompt: 'Instructions',
      count: '{used} / {max}',
      model: 'Model',
      modelPlaceholder: 'Claude Code default',
      permissions: 'Permissions',
      allowBash: 'Run commands',
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
        media: { kind: 'shot', shot: { file: 'tablero-sin-cuenta', alt: 'Foot of the board sidebar with no account: “No account”, “Sign in in Settings” and the Send and Receive buttons inactive' } },
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
    text: 'You need git and one of the two CLIs. Understaffed doesn’t install them, but it explains how when they are missing.',
    // DRAFT
    tiles: [
      { name: 'Claude Code', text: 'Installed and signed in.', href: 'https://claude.com/product/claude-code' },
      { name: 'Codex', text: 'Or this one, if it is the one you use.', href: 'https://developers.openai.com/codex/cli' },
      { name: 'Git', text: '2.30 or later.', href: 'https://git-scm.com/' },
      { name: 'OpenSpec', text: 'Included in the app.', href: 'https://github.com/Fission-AI/OpenSpec' },
      { name: 'Windows and macOS', text: 'Desktop app.' },
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
    // DRAFT
    privacy: 'Your email goes to our inbox and we only use it to tell you when you can install Understaffed. To leave the list, write to {email}.',
    // DRAFT
    noJs: 'This form needs JavaScript. Without it, write to {email} and we’ll add you.',
    sending: 'Sending…',
    errors: {
      // DRAFT
      empty: 'Enter your email to join the list.',
      // DRAFT
      invalid: 'That email doesn’t look right. Check it: it should look like name@example.com.',
      // DRAFT
      limited: 'There are too many attempts from your connection. Wait a while and try again.',
      // DRAFT
      failed: 'We couldn’t add you. Try again or write to {email}.',
    },
    // DRAFT
    thanksTitle: 'You’re on the list.',
    // DRAFT
    thanks: 'We’ll write to {email} when you can install Understaffed.',
    // DRAFT
    again: 'Use another email',
    // DRAFT
    backToDemo: 'Back to the demo',
  },
  footer: {
    // DRAFT
    text: 'Software projects with a team of AI agents, always with your approval.',
    productLabel: 'Product',
    languageLabel: 'Language',
    copyright: '© 2026 Understaffed',
    maker: 'A BlancoLabs product',
  },
  // DRAFT
  notFound: {
    title: 'This page doesn’t exist',
    home: 'Go to the home page',
  },
  placeholder: { label: 'TODO: screenshot pending' },
};
