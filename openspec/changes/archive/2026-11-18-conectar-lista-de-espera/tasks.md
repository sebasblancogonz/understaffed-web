# Tasks

## 1. Formulario

- [x] 1.1 `config.waitlistUrl` apunta a `POST /v2/waitlist` del servidor y `config.waitlistEmail` al buzón; sin destino, el build falla
- [x] 1.2 El script envía el email y el idioma en JSON y muestra los estados: error con texto, «Enviando…» y confirmación con el foco en el título
- [x] 1.3 Aviso de privacidad en borrador con el buzón de contacto, y la alternativa por correo sin JavaScript
- [x] 1.4 Fuera la confirmación por `#thanks` y los `TODO:` del destino y de la privacidad

## 2. Comprobaciones

- [x] 2.1 `pnpm astro check` y `pnpm build` limpios
- [x] 2.2 De extremo a extremo contra el servidor en local, en escritorio y a 390 px: vacío, email que no vale, fallo, demasiados intentos, enviando, confirmación y sin JavaScript
- [x] 2.3 `DESIGN.md` y `PRODUCT.md` al día

## 3. Pendiente del equipo

- [ ] 3.1 Desplegar el servidor con la ruta nueva y `--waitlist-to waitlist@understaffed.app`
- [ ] 3.2 Revisar el aviso de privacidad, marcado `// DRAFT` en los textos
