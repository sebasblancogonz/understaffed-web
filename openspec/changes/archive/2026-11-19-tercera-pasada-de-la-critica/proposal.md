# Tercera pasada de la crítica

## Why

La tercera crítica (22 de 32) encontró una regresión y un problema de fondo. La regresión: la nota de «Pedir cambios» empujaba los botones de la demostración fuera de la ventana. El problema: nada avisaba de que el tablero del hero se puede pulsar, y a 1440 × 900 sus botones quedaban bajo el pliegue. Además, el titular decía la categoría y no la promesa, y el diálogo de Roles parecía interactivo sin serlo.

## What Changes

- **Titular**: «Cada tarea pasa por ti dos veces» pasa al h1. La segunda sección se titula «Así llega una tarea a tu rama».
- **Demostración**: las acciones van justo bajo la tarea y lo que se decide, debajo; la nota ocupa el sitio de los criterios; «Pedir cambios» pasa por «Especificando» y vuelve. La pista sube sobre la ventana y empieza con «Pruébalo». «Probar la demo» sustituye a «Ver cómo funciona» y pone el foco en la acción. El hero se compacta.
- **Roles**: pulsar una plantilla enseña en el diálogo sus instrucciones completas, traídas del catálogo de la app.
- **Lista de espera**: tras apuntarse, la banda encoge en pantallas estrechas y ofrece volver a la demo.
- **Estado en móvil**: marcos con nombre y una línea que dice que la imagen se desliza.
- **Detalles**: foco en «Pedir acceso» al terminar la demo, sección actual en la cabecera, recortes que se desvanecen por la derecha.

## Impact

- Specs: `landing-content` (Hero con acción principal, Demostración de las aprobaciones, Roles, Lista de espera y Vista Estado, modificados).
- Código: `Hero.astro`, `Demo.astro`, `Roles.astro`, `Status.astro`, `Waitlist.astro`, `Header.astro`, `HowItWorks.astro`, `LocalFirst.astro`, `landing.ts` y los textos.
- Documentación: `DESIGN.md` y `.impeccable/design.json`.
