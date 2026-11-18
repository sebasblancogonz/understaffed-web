# Design

## Context

Es una ampliación de la portada existente. Mandan el mundo visual del código actual de la web y `site-presentation`: Inter y JetBrains Mono, un único acento cobalto, tema según el sistema y secciones con `Section`. La verdad de producto está en `PRODUCT.md`. El brief confirmado con el usuario está en el registro de la conversación del 2026-11-18. Ver `proposal.md` (Why) y `specs/`.

## Goals / Non-Goals

**Goals:**
- Contar la historia «primero tú, después tu equipo» con las cuatro funciones anunciables, sin inventar nada.
- Una lista de espera que funcione sin JavaScript y que no pueda fingir un envío mientras no haya destino.

**Non-Goals:**
- Elegir el servicio de la lista de espera, escribir el texto legal o crear rutas nuevas (como una página de gracias).
- Cambiar la marca, el favicon, el vídeo del hero o el contenido de «Cómo funciona», «Aprobaciones» y «Requisitos».

## Decisions

- **Orden de secciones:** hero, cómo funciona, aprobaciones, Estado, grupos, local y cuenta, requisitos y lista de espera. Estado va tras Aprobaciones porque cierra «lo que espera tu decisión». Requisitos va justo antes del formulario para que quien se apunte sepa si puede usar la app.
- **Un solo formulario**, en la sección de cierre. La acción del hero es un enlace a `#waitlist`, no un segundo formulario.
- **Sin destino no hay envío:** sin `waitlistUrl`, el formulario no lleva `action` y el botón está `disabled`. Según HTML, el envío implícito con Intro tampoco ocurre si el botón de envío está deshabilitado.
- **Confirmación sin rutas ni JavaScript:** si el servicio puede redirigir, se configura para volver a `/#thanks` o `/en/#thanks`. La confirmación aparece con `:target` y el formulario se oculta con `:has(#thanks:target)`. Si el servicio no redirige, se usa su propia página. Alternativa descartada: una página de gracias por idioma, que exige cambiar `site-seo` y el sitemap.
- **Acento:** en el hero, solo el botón principal. En Estado, el cobalto va en «Espera tu decisión», la misma regla que la app aplica a lo que espera al usuario. En la lista de espera, solo el botón de envío. Los bloques de sincronización y colaboración no usan cobalto ni iconos de nube o sincronizar, siguiendo la regla de la app sobre lo compartido. El usuario aceptó la propuesta.
- **Sin tarjetas nuevas:** los puntos de Estado y Grupos son listas con filete superior, no tarjetas iguales. La lista de espera es una franja a todo el ancho en el tono `--surface`, que separa zonas por cambio de gris como la app.
- **Campo de email:** etiqueta visible, `type=email`, `required` y `autocomplete=email`. El borde del campo usa el token nuevo `--field-border` (`#7c8494` en claro, `#6b7383` en oscuro), con 3:1 o más frente al fondo de la franja en ambos temas.
- **«Equipo»:** en español significa ordenador y grupo de personas. La web reserva «equipo» para personas y usa «ordenador» para la máquina.
- **Capturas:** `Placeholder` gana `loading` (diferido por defecto, inmediato en el hero) y `sizes`. Las capturas recortadas (`sincronizacion`, `colaboracion`) reservan la proporción 1360×1640 de `aprobacion`.

## Risks / Trade-offs

- [Sin destino ni texto legal] → El formulario queda inactivo con `TODO:` visible. La página no se publica hasta tenerlos.
- [Cuatro huecos de captura] → Se ven como marcadores `TODO:` con el nombre de cada archivo esperado.
- [La confirmación con `:target` depende de que el servicio redirija con fragmento] → Si no puede, se usa su propia página, sin cambios en la web.
- [El texto puede afirmar más de lo que hay] → Los textos solo nombran las fases 1 y 2 de la colaboración, no prometen el servicio de cuentas alojado y llaman «coste» al gasto de las ejecuciones, no a un precio.
