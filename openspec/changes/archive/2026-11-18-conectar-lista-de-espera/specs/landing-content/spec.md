# Spec Delta

## MODIFIED Requirements

### Requirement: Lista de espera
La portada SHALL cerrar con una sección de lista de espera que contenga el único formulario de la página: un campo de email y el botón «Pedir acceso». Pide solo el email, envía también el idioma de la página, aclara que apuntarse no crea una cuenta y dice para qué se usa el email y cómo salir de la lista. El formulario envía a `config.waitlistUrl`, la ruta de la lista de espera del servidor de Understaffed, que avisa al buzón `config.waitlistEmail`.

#### Scenario: Un solo formulario
- **WHEN** se inspecciona el HTML de `/` y de `/en/`
- **THEN** hay exactamente un `form`, dentro de la sección de la lista de espera, con un único campo visible `type="email"`, `required`, `autocomplete="email"` y una etiqueta visible, más un campo oculto `lang` con el idioma de la página

#### Scenario: Sin destino configurado
- **WHEN** `config.waitlistUrl` está vacío
- **THEN** el build falla con un mensaje que lo dice, y no se publica un formulario que no envía

#### Scenario: Con destino configurado
- **WHEN** `config.waitlistUrl` tiene una URL y el usuario envía un email válido
- **THEN** el script hace un `POST` a `config.waitlistUrl` con `email` y `language` en JSON, y mientras espera la respuesta el botón está deshabilitado y dice «Enviando…»

#### Scenario: Confirmación
- **WHEN** el servidor responde `202`
- **THEN** el título y la frase de la banda pasan a ser la confirmación en el idioma de la página, el formulario se oculta y el título recibe el foco

#### Scenario: La confirmación solo sigue a un envío
- **WHEN** se abre la portada con el fragmento `#thanks`
- **THEN** se ve el formulario y no la confirmación

#### Scenario: Aviso de privacidad pendiente
- **WHEN** el equipo aún no ha revisado el texto legal
- **THEN** el aviso está marcado como borrador en el código fuente de textos, y junto al formulario se lee para qué se usa el email y un enlace `mailto:` al buzón de la lista para salir de ella, y no hay ningún texto `TODO:`
