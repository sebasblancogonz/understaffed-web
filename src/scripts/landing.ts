/**
 * El único script de la portada. Todo lo que hace mejora una página que ya está completa sin él:
 * la demostración del hero, el contador del editor de roles, el envío de la lista de espera y las entradas de las secciones. Las cadenas vienen del HTML, no de aquí.
 */

(window as unknown as { __landingReady: boolean }).__landingReady = true;

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, reduced() ? Math.min(ms, 200) : ms));

interface DemoStrings {
  columns: string[];
  chips: { awaiting: string; running: string; awaitingReview: string; integrating: string };
  hints: string[];
  notes: { requestChanges: string; sendBack: string };
  log: string[];
  done: string;
  live: string;
  title: string;
  total: number;
}

/** Copia el atributo de ámbito de Astro para que las reglas del componente alcancen lo creado aquí. */
const scoped = (from: Element, el: Element) => {
  for (const attr of from.getAttributeNames()) if (attr.startsWith('data-astro-cid')) el.setAttribute(attr, '');
  return el;
};

/** Pasos de la tarea: 0 Backlog esperando aprobación, 1 Por hacer, 2 En curso, 3 En revisión, 4 Integrando, 5 Hecho. */
function initDemo() {
  const root = document.querySelector<HTMLElement>('[data-demo]');
  if (!root || !root.dataset.strings) return;
  const scope = root.closest<HTMLElement>('.demo-wrap') ?? root;
  const s = JSON.parse(root.dataset.strings) as DemoStrings;
  const viewport = root.querySelector<HTMLElement>('.viewport')!;
  const track = root.querySelector<HTMLElement>('[data-track]')!;
  const cols = [...root.querySelectorAll<HTMLElement>('[data-col]')];
  const task = root.querySelector<HTMLElement>('[data-task]')!;
  const state = task.querySelector<HTMLElement>('[data-state]')!;
  const progress = task.querySelector<HTMLElement>('[data-progress]')!;
  const log = task.querySelector<HTMLElement>('[data-log]')!;
  const result = task.querySelector<HTMLElement>('[data-result]')!;
  const hint = scope.querySelector<HTMLElement>('[data-hint]')!;
  const live = scope.querySelector<HTMLElement>('[data-live]')!;
  const buttons = Object.fromEntries(
    [...root.querySelectorAll<HTMLButtonElement>('[data-act]')].map((b) => [b.dataset.act!, b]),
  ) as Record<'request' | 'approve' | 'run' | 'sendback' | 'approvecode' | 'restart', HTMLButtonElement>;

  const colOf = [0, 1, 2, 3, 3, 4];
  const actionsOf: (keyof typeof buttons)[][] = [['approve', 'request'], ['run'], [], ['approvecode', 'sendback'], [], ['restart']];
  let step = 0;
  let busy = false;

  const chip = (text: string, kind: 'pill' | 'running' | 'plain') => {
    state.replaceChildren();
    const el = scoped(state, document.createElement('span')) as HTMLElement;
    if (kind === 'pill') {
      el.className = 'chip';
      el.textContent = text;
    } else {
      el.className = 'running';
      if (kind === 'running') el.append(scoped(state, Object.assign(document.createElement('span'), { className: 'spin' })));
      el.append(text);
    }
    state.append(el);
    state.hidden = false;
  };

  const place = () => {
    const col = cols[colOf[step]];
    const list = col.querySelector('[data-cards]')!;
    if (task.parentElement !== list) {
      list.prepend(task);
      task.classList.remove('arrive');
      void task.offsetWidth;
      task.classList.add('arrive');
    }
    // Si las cinco columnas caben, no hay cámara; si no, su columna queda a la izquierda del recorte.
    const room = track.scrollWidth - viewport.clientWidth;
    const left = col.offsetLeft - cols[0].offsetLeft;
    track.style.transform = room > 4 ? `translateX(${-Math.min(left, room)}px)` : '';
    cols.forEach((c) => (c.querySelector('[data-count]')!.textContent = String(c.querySelectorAll('.card').length)));
  };

  const announce = () => {
    const column = s.columns[colOf[step]];
    const extra = step === 0 ? s.chips.awaiting : step === 3 ? s.chips.awaitingReview : step === 4 ? s.chips.integrating : '';
    live.textContent = s.live.replace('{title}', s.title).replace('{column}', extra ? `${column}, ${extra}` : column);
  };

  const render = (focus = true) => {
    root.dataset.step = String(step);
    task.classList.toggle('awaiting', step === 0 || step === 3);
    if (step === 0) chip(s.chips.awaiting, 'pill');
    else if (step === 2) chip(s.chips.running, 'running');
    else if (step === 3) chip(s.chips.awaitingReview, 'pill');
    else if (step === 4) chip(s.chips.integrating, 'running');
    else if (step === 5) chip(s.done, 'plain');
    else {
      state.replaceChildren();
      state.hidden = true;
    }
    if (step <= 1) progress.textContent = `0/${s.total}`;
    if (step >= 3) progress.textContent = `${s.total}/${s.total}`;
    hint.textContent = s.hints[Math.min(step, 4)];
    log.hidden = step !== 2;
    result.hidden = step !== 3;
    for (const [name, button] of Object.entries(buttons)) button.hidden = !actionsOf[step].includes(name as keyof typeof buttons);
    place();
    announce();
    if (focus) {
      const next = actionsOf[step].map((n) => buttons[n])[0];
      (next ?? root).focus({ preventScroll: true });
    }
  };

  const runTask = async () => {
    busy = true;
    step = 2;
    log.textContent = '';
    render();
    for (let i = 0; i < s.log.length; i++) {
      await wait(i === 0 ? 450 : 750);
      log.textContent = s.log[i];
      progress.textContent = `${Math.min(s.total, Math.round(((i + 1) / s.log.length) * s.total))}/${s.total}`;
    }
    await wait(600);
    step = 3;
    busy = false;
    render();
  };

  buttons.request.addEventListener('click', () => {
    hint.textContent = s.notes.requestChanges;
  });
  buttons.approve.addEventListener('click', () => {
    if (busy) return;
    step = 1;
    render();
  });
  buttons.run.addEventListener('click', () => {
    if (!busy) void runTask();
  });
  buttons.sendback.addEventListener('click', async () => {
    if (busy) return;
    busy = true;
    buttons.sendback.disabled = buttons.approvecode.disabled = true;
    hint.textContent = s.notes.sendBack;
    await wait(1200);
    buttons.sendback.disabled = buttons.approvecode.disabled = false;
    void runTask();
  });
  buttons.approvecode.addEventListener('click', async () => {
    if (busy) return;
    busy = true;
    step = 4;
    render();
    await wait(1100);
    step = 5;
    busy = false;
    render();
  });
  buttons.restart.addEventListener('click', () => {
    step = 0;
    render();
  });

  window.addEventListener('resize', () => place());
  render(false);
  live.textContent = '';
}

/** Contador de caracteres de las instrucciones en el editor de roles. */
function initCounter() {
  const area = document.querySelector<HTMLTextAreaElement>('[data-prompt]');
  const count = document.querySelector<HTMLElement>('[data-count][data-template]');
  if (!area || !count) return;
  area.addEventListener('input', () => {
    count.textContent = count.dataset.template!.replace('{used}', String(area.value.length)).replace('{max}', count.dataset.max!);
  });
}

/** Entradas de sección: una vez, al entrar en pantalla. */
interface WaitlistStrings {
  sending: string;
  errors: { empty: string; invalid: string; limited: string; failed: string };
  thanksTitle: string;
  thanks: string;
}

/** Lo más que se espera al servidor antes de dar el envío por fallido. */
const WAITLIST_TIMEOUT_MS = 15_000;

/**
 * La lista de espera: envía el email al servidor y dice qué ha pasado. Un error se escribe bajo el
 * campo, que conserva lo escrito; al apuntarse, el título y la frase de la banda pasan a ser la
 * confirmación y el formulario desaparece.
 */
function initWaitlist() {
  const root = document.querySelector<HTMLElement>('[data-waitlist]');
  const form = root?.querySelector<HTMLFormElement>('form');
  if (!root || !form || !root.dataset.strings || !root.dataset.endpoint) return;
  const s = JSON.parse(root.dataset.strings) as WaitlistStrings;
  const endpoint = root.dataset.endpoint;
  const field = form.querySelector<HTMLInputElement>('input[type="email"]')!;
  const language = form.querySelector<HTMLInputElement>('input[name="lang"]')?.value;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const error = form.querySelector<HTMLElement>('[role="alert"]')!;
  const title = root.querySelector<HTMLElement>('[data-title]')!;
  const lead = root.querySelector<HTMLElement>('[data-lead]')!;
  const label = submit.textContent;
  // Los errores los escribe este script, con su texto: no el globo del navegador.
  form.noValidate = true;

  /** Escribe el error bajo el campo. `invalid` marca el campo cuando el problema es lo escrito. */
  const fail = (message: string, invalid = false) => {
    error.textContent = message;
    if (invalid) field.setAttribute('aria-invalid', 'true');
    field.focus();
  };
  const clear = () => {
    error.textContent = '';
    field.removeAttribute('aria-invalid');
  };
  const sending = (on: boolean) => {
    // El botón conserva su ancho aunque cambie su texto.
    submit.style.minWidth = on ? `${submit.offsetWidth}px` : '';
    form.setAttribute('aria-busy', String(on));
    field.readOnly = on;
    submit.disabled = on;
    submit.textContent = on ? s.sending : label;
  };

  field.addEventListener('input', clear);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submit.disabled) return;
    clear();
    field.value = field.value.trim();
    if (field.validity.valueMissing) return fail(s.errors.empty, true);
    if (!field.validity.valid) return fail(s.errors.invalid, true);

    sending(true);
    const abort = new AbortController();
    const timer = setTimeout(() => abort.abort(), WAITLIST_TIMEOUT_MS);
    let status = 0;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: field.value, language }),
        signal: abort.signal,
      });
      status = response.status;
    } catch {
      // Sin red, cortado o fuera de tiempo: se trata como un fallo del envío.
    }
    clearTimeout(timer);
    sending(false);

    if (status === 202) {
      title.textContent = s.thanksTitle;
      lead.textContent = s.thanks;
      form.hidden = true;
      title.focus();
    } else if (status === 400) fail(s.errors.invalid, true);
    else if (status === 429) fail(s.errors.limited);
    else fail(s.errors.failed);
  });
}

function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
}

initReveal();
initDemo();
initWaitlist();
initCounter();
