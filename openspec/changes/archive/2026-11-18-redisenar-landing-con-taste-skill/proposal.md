# Proposal

## Why

La revisión con taste-skill (2026-11-18) puntuó la portada con 6,0 sobre 10. Era el patrón de la categoría: un titular centrado sobre una captura y bloques de funciones alternos. Nada en ella dependía de Understaffed. El usuario eligió un rediseño completo con esa skill, aunque eso suponga dejar el estándar visual de la categoría. La dirección es «el producto actúa»: la afirmación central (nada llega a tu rama sin tus dos aprobaciones) solo convence si el visitante pulsa él mismo esas aprobaciones en un fragmento real del tablero.

## What Changes

- **BREAKING (presentación):**
  - Desaparece la barra de navegación: la cabecera queda con la marca y el cambio de idioma, y los enlaces pasan al pie.
  - Los colores del tema se mantienen, pero el cobalto ocupa entera la sección de la lista de espera.
  - Las esquinas son cuadradas fuera de los fragmentos de interfaz.
- **Hero:**
  - A la izquierda, un titular corto con una frase y «Pedir acceso».
  - A la derecha, un fragmento del tablero que funciona: la tarea de demostración #4 avanza solo cuando el visitante pulsa «Aprobar spec», «Ejecutar» y «Aprobar».
- **Cómo funciona:** pasa a tres intercambios de lo que das y lo que vuelve:
  - la tarea y el cambio de OpenSpec que redacta el rol, con la captura de la spec;
  - aprobar y ejecutar, con la línea de comandos real de Claude Code;
  - revisar y aprobar, con la captura de la revisión.
- **Requisitos:** se convierten en un tablero de nombres de lo que la app usa: Claude Code, git, OpenSpec, Windows, macOS y la configuración de Claude Code.
- **Estado y grupos:** se unen en un panel de tareas del grupo «Tienda online» con los datos de las capturas, más las capturas reales de Estado y del grupo.
- **Roles (nuevo):** el editor «Contratar: Desarrollador backend» a tamaño real, con notas al margen.
- **Local y cuenta:** se convierten en tres pestañas (Sin cuenta, Con cuenta, En equipo) con el vídeo de demostración y las capturas de cuenta y colaboración.
- **Lista de espera:** se convierte en una frase con hueco («Mi email es […]» y «Pedir acceso») sobre un campo cobalto. Conserva el formulario único, el idioma oculto, el botón deshabilitado sin destino, `#thanks` y el `TODO:` del aviso de privacidad.
- **Movimiento:** un script pequeño para el fragmento del hero, las pestañas, la fila abierta del panel y las entradas de cada sección. Sin JavaScript la página está completa.
- **`PRODUCT.md`:** recoge la decisión de dejar el estándar de la categoría en la web y las afirmaciones nuevas, con su fuente en la app.

Fuera de alcance: el destino del formulario, el texto legal, la imagen Open Graph, la URL pública y rutas nuevas.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `landing-content`: orden y forma de las secciones, hero con demostración, requisitos como tablero, Estado y grupos unidos, roles, local y cuenta en pestañas, lista de espera en una frase.
- `site-presentation`: uso del acento, JavaScript permitido con alternativa, y fragmentos de interfaz con datos de demostración.

## Impact

- **Código:** todo `src/components/` (secciones nuevas o reescritas), `src/i18n/*`, `src/styles/*`, `src/layouts/Base.astro`, y un script de cliente pequeño.
- **Activos:** sin activos nuevos. Usa las 7 capturas y el vídeo.
- **Specs:** las de este cambio. Las de SEO y localización no cambian.
