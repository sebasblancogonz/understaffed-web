/**
 * El único script de la portada. Todo lo que hace mejora una página que ya está completa sin él:
 * la demostración del hero, las pestañas, el panel de Estado, el contador del rol,
 * el vídeo y las entradas de las secciones. Las cadenas vienen del HTML, no de aquí.
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

/** Pasos de la tarea: 0 Backlog esperando aprobación, 1 Por hacer, 2 En curso, 3 En revisión, 4 Integrando, 5 Hecho. */
function initDemo() {
  const root = document.querySelector<HTMLElement>('[data-demo]');
  if (!root || !root.dataset.strings) return;
  const s = JSON.parse(root.dataset.strings) as DemoStrings;
  const track = root.querySelector<HTMLElement>('[data-track]')!;
  const cols = [...root.querySelectorAll<HTMLElement>('[data-col]')];
  const task = root.querySelector<HTMLElement>('[data-task]')!;
  const state = task.querySelector<HTMLElement>('[data-state]')!;
  const progress = task.querySelector<HTMLElement>('[data-progress]')!;
  const log = root.querySelector<HTMLOListElement>('[data-log]')!;
  const result = root.querySelector<HTMLElement>('[data-result]')!;
  const hint = root.querySelector<HTMLElement>('[data-hint]')!;
  const live = root.querySelector<HTMLElement>('[data-live]')!;
  const buttons = Object.fromEntries(
    [...root.querySelectorAll<HTMLButtonElement>('[data-act]')].map((b) => [b.dataset.act!, b]),
  ) as Record<'request' | 'approve' | 'run' | 'sendback' | 'approvecode' | 'restart', HTMLButtonElement>;

  const colOf = [0, 1, 2, 3, 3, 4];
  const actionsOf: (keyof typeof buttons)[][] = [['request', 'approve'], ['run'], [], ['sendback', 'approvecode'], [], ['restart']];
  let step = 0;
  let busy = false;

  const chip = (text: string, kind: 'pill' | 'running' | 'plain') => {
    state.replaceChildren();
    const el = document.createElement('span');
    if (kind === 'pill') {
      el.className = 'chip';
      el.textContent = text;
    } else if (kind === 'plain') {
      el.className = 'running';
      el.textContent = text;
    } else {
      el.className = 'running';
      const spin = document.createElement('span');
      spin.className = 'spin';
      el.append(spin, text);
    }
    // Las reglas de Astro van con el atributo de ámbito del componente: se copia del padre.
    for (const attr of state.getAttributeNames()) if (attr.startsWith('data-astro-cid')) {
      el.setAttribute(attr, '');
      el.firstElementChild?.setAttribute(attr, '');
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
    // La cámara sigue a la tarea: su columna queda a la izquierda del recorte.
    const max = track.scrollWidth - track.parentElement!.clientWidth + 12;
    track.style.transform = `translateX(${-Math.min(col.offsetLeft, Math.max(0, max))}px)`;
    cols.forEach((c) => {
      const n = c.querySelectorAll('.card').length;
      c.querySelector('[data-count]')!.textContent = String(n);
    });
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
    hint.classList.remove('has-note');
    log.hidden = step !== 2;
    result.hidden = step !== 3;
    for (const [name, button] of Object.entries(buttons)) button.hidden = !actionsOf[step].includes(name as keyof typeof buttons);
    place();
    announce();
    if (focus) {
      const next = actionsOf[step].map((n) => buttons[n]).find((b) => b.classList.contains('primary')) ?? buttons[actionsOf[step][0]];
      (next ?? root).focus({ preventScroll: true });
    }
  };

  const runTask = async () => {
    busy = true;
    step = 2;
    log.replaceChildren();
    render();
    for (let i = 0; i < s.log.length; i++) {
      await wait(i === 0 ? 450 : 750);
      const li = document.createElement('li');
      for (const attr of log.getAttributeNames()) if (attr.startsWith('data-astro-cid')) li.setAttribute(attr, '');
      li.textContent = s.log[i];
      log.append(li);
      progress.textContent = `${Math.min(s.total, Math.round(((i + 1) / s.log.length) * s.total))}/${s.total}`;
    }
    await wait(600);
    step = 3;
    busy = false;
    render();
  };

  buttons.request.addEventListener('click', () => {
    hint.textContent = s.notes.requestChanges;
    hint.classList.add('has-note');
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
    hint.classList.add('has-note');
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

/** Pestañas de «local y cuenta» con el patrón de la ARIA APG: flechas, Inicio y Fin. */
function initTabs() {
  const list = document.querySelector<HTMLElement>('[data-tabs]');
  if (!list) return;
  list.hidden = false;
  const tabs = [...list.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')!)!);
  const select = (i: number, focus = false) => {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      panels[j].hidden = !on;
      if (on) panels[j].querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    });
    if (focus) tabs[i].focus();
    syncVideos();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const keys: Record<string, number> = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
      if (!(e.key in keys)) return;
      e.preventDefault();
      select((keys[e.key] + tabs.length) % tabs.length, true);
    });
  });
  select(0);
}

/** El panel de Estado: una fila abierta cada vez. */
function initBoard() {
  const board = document.querySelector<HTMLElement>('[data-board]');
  if (!board) return;
  const rows = [...board.querySelectorAll<HTMLElement>('[data-row]')];
  rows.forEach((row) => {
    row.querySelector('button')!.addEventListener('click', () => {
      rows.forEach((r) => {
        const on = r === row;
        r.classList.toggle('is-open', on);
        r.querySelector('button')!.setAttribute('aria-expanded', String(on));
      });
    });
  });
}

function initCounter() {
  const area = document.querySelector<HTMLTextAreaElement>('[data-prompt]');
  const count = document.querySelector<HTMLElement>('[data-count][data-template]');
  if (!area || !count) return;
  area.addEventListener('input', () => {
    count.textContent = count.dataset.template!.replace('{used}', String(area.value.length)).replace('{max}', count.dataset.max!);
  });
}

/** El vídeo de demostración: se descarga y suena solo a la vista, en su pestaña y sin movimiento reducido. */
const videos = new Set<HTMLVideoElement>();
const visible = new WeakSet<HTMLVideoElement>();
function syncVideos() {
  for (const video of videos) {
    const shown = visible.has(video) && !video.closest('[hidden]') && !reduced();
    if (shown) {
      if (!video.dataset.loaded) {
        video.querySelectorAll<HTMLSourceElement>('source[data-src]').forEach((s) => (s.src = s.dataset.src!));
        video.dataset.loaded = '1';
        video.load();
        video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });
      }
      void video.play().catch(() => {});
    } else if (!video.paused) {
      video.pause();
    }
  }
}
function initVideos() {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const v = e.target as HTMLVideoElement;
      if (e.isIntersecting) visible.add(v);
      else visible.delete(v);
    }
    syncVideos();
  });
  document.querySelectorAll<HTMLVideoElement>('[data-video]').forEach((v) => {
    videos.add(v);
    io.observe(v);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach((v) => v.pause());
    else syncVideos();
  });
}

/** Entradas de sección: una vez, al entrar en pantalla. */
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
initTabs();
initBoard();
initCounter();
initVideos();
