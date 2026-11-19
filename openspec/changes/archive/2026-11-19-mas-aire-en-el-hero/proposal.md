# Más aire en el hero

## Why

La tercera pasada de la crítica compactó el hero para que las acciones de la demostración entraran en el primer pliegue. El resultado deja poco espacio entre la cabecera y el titular, y entre los botones y la demostración.

## What Changes

- El hero recupera su aire: el titular arranca hasta 5rem por debajo de la cabecera y la demostración hasta 5.5rem por debajo de los botones.
- Deja de exigirse que las acciones de la tarea entren en el primer pliegue a 1440 × 900. La pista sobre la ventana y «Probar la demo» son las que llevan al visitante a la demostración.

## Impact

- Specs: `landing-content` (Hero con acción principal, modificado).
- Código: `Hero.astro` y `Demo.astro`.
- Documentación: `DESIGN.md`.
