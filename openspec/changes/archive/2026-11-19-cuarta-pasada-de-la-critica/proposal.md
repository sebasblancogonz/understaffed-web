# Cuarta pasada de la crítica

## Why

La cuarta crítica (27 de 36) encontró que el titular nuevo se partía en tres o cuatro líneas a 360 px, que en móvil elegir una plantilla de Roles cambiaba un diálogo que quedaba fuera de pantalla y que sus filas no parecían pulsables, y que el recorte de «Sin cuenta» estaba casi vacío. Además, el dueño pidió todavía más aire en el hero.

## What Changes

- **Hero**: el titular baja su tamaño mínimo y queda en dos líneas desde 360 px. Más aire sobre el titular y entre los botones y la demostración.
- **Roles**: el título de la lista pide elegir, cada fila lleva una flecha, las instrucciones se leen enteras en un campo que se desplaza, los botones dibujados del diálogo van apagados y, en una columna, elegir trae el diálogo a la vista.
- **Capturas**: recorte de «Sin cuenta» más cerrado; los de LocalFirst se desvanecen también por abajo.
- **Demostración**: la pista acompaña a «Pedir cambios» y «Devolver», el foco no se pierde al devolver y los nombres de archivo ya no se cortan.
- **Detalles**: la frase de deslizar sale una vez en Estado y los enlaces de Requisitos tienen altura táctil.

## Impact

- Specs: `landing-content` (Hero con acción principal, Roles y Vista Estado, modificados).
- Código: `tokens.css`, `Hero.astro`, `Demo.astro`, `Roles.astro`, `Status.astro`, `Requirements.astro`, `LocalFirst.astro`, `landing.ts` y los textos.
- Recursos: `tablero-sin-cuenta` en sus cuatro variantes.
- Documentación: `DESIGN.md` y `.impeccable/design.json`.
