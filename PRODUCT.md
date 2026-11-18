# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Confirmado el 2026-11-18 para la web:

- **Primero, una persona** que ya programa a diario con Claude Code y otras herramientas de IA
  (Cursor, Copilot), salta entre terminales y pierde de vista qué está en curso, quién lo hace y
  qué espera su aprobación. Llega a la web porque ha oído hablar del producto y quiere entender
  qué hace, cómo se trabaja con él y cómo conseguirlo.
- **Después, equipos pequeños (de 2 a 5 personas)** que reparten el trabajo entre personas y
  agentes de IA. Llegan a través de la cuenta y la colaboración, una vez que una persona ya usa
  la app.

El PRODUCT.md de la app pone por delante a los equipos de 2 a 5 personas. La web invierte ese
orden a propósito: entra una persona y el equipo viene después.

## Product Purpose

Understaffed gestiona proyectos de software con un equipo de agentes de IA organizados como una
empresa: el usuario contrata roles, les asigna tareas de un tablero y revisa su trabajo. En la
app, el éxito es que el usuario sepa en todo momento qué está en curso, quién lo hace y qué
espera su decisión, sin salir de una sola ventana.

La web existe para que quien oye hablar del producto entienda qué hace, cómo se trabaja con él y
cómo conseguirlo, con los términos de la propia app y sin prometer nada que la app no haga hoy.

**Disponibilidad (decidido el 2026-11-18):** el lanzamiento es con lista de espera, es decir, con
acceso anticipado y sin instalador público. La web recoge el email de quien quiera probarla. No
hay enlace de descarga público.

## Positioning

- No llama a APIs de IA: lanza como subproceso el CLI del proveedor que el usuario ya tiene y ya
  paga, y no pide ni guarda claves ni credenciales. Hoy el único CLI compatible es Claude Code.
- Cada tarea del tablero es un cambio de OpenSpec en el repositorio del proyecto. La verdad vive
  en archivos versionados del repo, no en la app.
- Cada tarea tiene dos aprobaciones humanas: primero la spec y después el código. Nada se
  ejecuta sin una acción explícita del usuario.
- Funciona en local por defecto. La cuenta es opcional y solo sirve para sincronizar
  ordenadores y colaborar. Sin cuenta todo funciona igual, en este ordenador.

## Operating Context

- Es una app de escritorio para Windows y macOS que convive con el editor, la terminal y el git
  del usuario.
- Cada proyecto es una carpeta local, normalmente un repositorio git con OpenSpec.
- Los roles que escriben código trabajan en un git worktree propio por tarea. Aprobar la tarea
  integra los cambios en la rama del usuario (squash por defecto) y archiva la spec. Los roles
  no técnicos solo producen markdown.
- El tablero kanban tiene cinco estados: Backlog, Por hacer, En curso, En revisión y Hecho.
- Las sesiones de trabajo son largas, con la app abierta en segundo plano mientras corren los
  agentes.
- Orden real de una tarea: spec, aprobación de la spec, ejecución con log en vivo, revisión del
  diff y aprobación del código. En la revisión, el usuario también puede Devolver o Descartar.

## Capabilities and Constraints

**Lo que la web puede anunciar (confirmado el 2026-11-18)**

- El flujo básico: roles, tablero, spec, ejecución con Claude Code y log en vivo, revisión con
  diff y las dos aprobaciones.
- La **vista Estado**: lo que espera tu decisión, lo que está en marcha, la actividad y el coste
  por rol. El coste por rol es el gasto de las ejecuciones, no un precio de Understaffed.
- Los **grupos de proyectos**: varios repositorios de un mismo producto con su Estado conjunto y
  un equipo compartido. Las funcionalidades reparten tareas entre los repositorios, con esperas
  que bloquean Ejecutar.
- La **sincronización entre ordenadores**: Enviar y Recibir todo el estado de la app a través de
  la cuenta. Se entra con el email y un código que llega por correo, sin contraseñas.
  - Las ramas de las tareas viajan como git bundles.
  - La fusión es en tres puntos por elemento y solo pregunta por lo que choca.
  - Fuente: «Traspaso entre ordenadores» en `../understaffed/PRODUCT.md`.
  - No confundir con la fase 3 de la colaboración entre personas, en la que las ramas son bajo
    demanda.
- La **colaboración entre personas**:
  - Compartir proyectos o grupos e invitar por email.
  - El tablero se sincroniza en vivo y una tarea nunca la trabajan dos personas a la vez.
  - Dueño y colaborador son papeles en cada cosa compartida.
  - Funciona con un servidor propio. Que funcione también con el servicio de Understaffed
    depende de que ese servicio esté abierto al público (ver «Sin decidir»).
- Los **roles** (añadido el 2026-11-18 con el rediseño; verificado en el código de la app):
  - Se contratan desde plantillas: Analista de producto, Desarrollador full-stack, frontend y
    backend, y Tester. Editar el rol no cambia la plantilla. Fuente:
    `../understaffed/src-tauri/src/catalog/mod.rs`.
  - Cada rol tiene nombre, instrucciones de hasta 8000 caracteres, modelo (vacío usa el de Claude
    Code, o un alias como opus o sonnet) y el permiso «Ejecutar comandos». Especificar nunca
    ejecuta comandos. Fuente: `../understaffed/src/features/team/RoleForm.tsx` y sus locales.
  - Plugins, skills, servidores MCP y la web se activan por proyecto o grupo, no por rol; lo que
    no se activa se deniega. Fuente: locales de la app (`role.toolsLine`, `tools.intro`).
- Cada ejecución carga la configuración personal de Claude Code (CLAUDE.md, hooks, subagentes y
  comandos, y las skills y plugins del propio CLI). Las skills sueltas, los plugins y los servidores
  MCP instalados solo se usan si el proyecto o su grupo los activan. La línea de comandos con que
  se lanza está en el README de la app.
- Aprobar el código integra el trabajo en un único commit sobre la rama del usuario, con sus
  hooks y su firma (squash, la opción por defecto). Fuente: locales de la app (`squashHint`).

**Límites que la web no puede cruzar**

- Plataformas: solo Windows y macOS. No se nombran otros sistemas operativos.
- Requisitos: git 2.30 o posterior, y Claude Code instalado y con la sesión iniciada. La app no
  instala ninguno de los dos, pero explica cómo hacerlo cuando faltan. No hace falta instalar
  base de datos ni OpenSpec.
- CLI de IA: Claude Code es el único compatible. Cursor y Copilot forman parte del contexto del
  usuario, no son integraciones, y no se presentan como compatibles.
- Colaboración: están hechas las fases 1 y 2. Están pendientes la fase 3 (ramas y logs bajo
  demanda, y Aprobar que sube al remoto) y las integraciones con Jira, Linear o GitHub Issues,
  los sprints, la delegación entre agentes y las ejecuciones en paralelo. Nada de eso se
  anuncia como disponible.
- Sin una cuenta abierta, la app no hace ninguna petición de red. Con una, solo habla con el
  servidor de la cuenta y con los remotos git.

**Restricciones de la web en sí**

- El sitio es estático. Desde el rediseño lleva un solo script pequeño (la demostración del
  hero, las pestañas, el panel de Estado y las entradas); sin él, la página está completa.
- Tiene dos idiomas con las mismas secciones. El español es el idioma por defecto (`/`) y el
  inglés va en `/en/`.
- Los requisitos de presentación, accesibilidad y rendimiento que obligan al sitio están en
  `openspec/specs/` (sobre todo `site-presentation` y `landing-content`).

**Sin decidir**

- Cómo se recoge la lista de espera: el servicio o el endpoint, y si se hace con un formulario
  HTML sin JavaScript. La primera propuesta dejaba los formularios fuera de alcance. Hay que
  revisar esa decisión.
- El texto legal para recoger emails: el aviso de privacidad y el consentimiento.
- La URL pública definitiva. Hoy `site` apunta a `https://understaffed.example` en
  `astro.config.mjs`.
- Si el servicio de cuentas de Understaffed estará abierto al público en el lanzamiento. Hoy
  el servidor que se usa es el del autor, en su propio VPS.
- El precio y la licencia: no hay nada decidido ni publicado.
- El identificador definitivo de la app (`com.understaffed.desktop` es provisional).

## Brand Commitments

Estos compromisos vienen del PRODUCT.md de la app.

**Decisión para la web (2026-11-18, sustituye a la de la versión con taste-skill):** la web se
inspira en las webs de producto de Craft (craft.do), Notion, Dub (dub.co) y monday.com, y su
listón de acabado es el de esas webs. Eso significa:

- Hero centrado con un titular grande y el producto enseñado a lo grande en una ventana.
- Bloques de funciones con imágenes del producto.
- Esquinas redondeadas y un tono amable.
- Colorido, al estilo de monday y Craft: varios colores vivos y suaves, con el cobalto como color
  principal.

En el hero va la demostración interactiva del tablero. Siguen fijos el nombre, la marca, la voz y
el tema claro y oscuro. La app mantiene su estándar sobrio.

**Revisión (2026-11-18):** las referencias marcan el listón, no el aspecto. La primera versión se
parecía demasiado a la portada de Notion, y la web toma un estilo propio:

- Etiquetas de rol en colores pastel, con un círculo en lugar del cuadrado. El cuadrado sigue en
  la marca y en los fragmentos de la app.
- Bricolage Grotesque en los titulares, Inter en el texto.
- Botones en píldora.
- Encabezados de sección a la izquierda, con la entradilla a su derecha.
- La demostración sobre una franja pastel de lado a lado.
- Cabecera a todo el ancho de la ventana.

- **Nombre:** Understaffed. Es lo único fijo de la identidad.
- **Voz:** neutra y técnica, de herramienta profesional. El nombre no se explota como chiste y no
  se usa jerga de oficina.
- **Nivel:** la app sigue el estándar de su categoría, sin ironía ni rarezas, y tiene que poder
  ponerse junto a Linear, GitHub Projects y Height o Plane. La web sigue sus propias referencias
  (ver la decisión de arriba).
- **Identidad:**
  - La marca son siete puntos en forma de U: seis círculos son personas y el cuadrado es el
    agente.
  - Hay un único color de acento, cobalto, y tema claro y oscuro.
  - El detalle visual de la app está en `../understaffed/DESIGN.md`.
  - En la web, la marca está copiada de la app en `src/components/ui/Mark.astro` y en
    `public/favicon.svg`.
- **Textos de la web:** son borradores de desarrollo marcados con `// DRAFT` en `src/i18n/`, a la
  espera de un redactor.

## Evidence on Hand

**Lo que hay**

- La fuente de verdad del producto: `../understaffed/PRODUCT.md` y `../understaffed/README.md`,
  en el repositorio de la app. Este archivo recoge lo que la web necesita de ellos y lo que solo
  aplica a la web. Si los dos discrepan sobre la app, manda el de la app.
- Capturas reales de la app en claro y oscuro, en español e inglés: tablero, revisión,
  aprobación, Estado, grupo, cuenta y colaboración. Están en `src/assets/` y los originales en
  `media/capturas/`. Sus datos son de demostración (proyecto storefront, grupo «Tienda online» u
  «Online store», cuentas @example.com, servidor sync.example.com), y la web los reutiliza en sus
  fragmentos de interfaz.
- Vídeo de demostración de la app en los dos idiomas y temas, con pósteres, en `public/video/`.
- Specs del sitio en `openspec/specs/` y propuestas archivadas en `openspec/changes/archive/`.
- `screenshots/` guarda capturas de una versión anterior de esta web, no de la app. No sirven
  como prueba del producto.

**Lo que no hay y no se inventa**

- Falta la imagen Open Graph (`public/og.png`). Tampoco hay URL pública ni endpoint para la
  lista de espera.
- No hay clientes, testimonios, logos de clientes, métricas, precios ni prensa.

## Product Principles

1. **El usuario decide.** Ni la app ni la web sugieren que algo se ejecute o se integre sin su
   aprobación.
2. **Solo se afirma lo que es verdad hoy.** Lo que falta se marca como pendiente en lugar de
   rellenarse.
3. **La verdad vive en el repositorio.** La app es una vista y un mando, no un silo, y la web lo
   cuenta con los términos de la app: roles, tareas, tablero, spec y revisión.
4. **Cero configuración para empezar.** Los únicos requisitos son git y Claude Code, que la app
   detecta y explica cómo instalar.
5. **Una persona primero, el equipo después.** La historia empieza en el trabajo de una persona
   con sus agentes y crece hacia la colaboración.

## Accessibility & Inclusion

- El sitio tiene que cumplir el contraste AA en los dos temas.
- Tiene que poder recorrerse entero con teclado, con el foco visible y un enlace para saltar al
  contenido.
- Respeta `prefers-reduced-motion`.
- Se lee bien desde 360 px de ancho.
- Ofrece dos idiomas con el mismo contenido.

Estos requisitos están detallados en `openspec/specs/site-presentation/spec.md`. No hay ningún
otro estándar formal establecido.
