# Spec Delta

## REMOVED Requirements

### Requirement: Formulario accesible sin JavaScript
**Reason**: El formulario envía a la ruta de la lista de espera del servidor, que recibe JSON y no redirige. El envío pasa a hacerlo el script de la portada.
**Migration**: Lo sustituye «Formulario de la lista de espera accesible». Sin JavaScript, la sección explica cómo apuntarse por correo.

## ADDED Requirements

### Requirement: Formulario de la lista de espera accesible
El formulario de la lista de espera SHALL tener etiqueta visible y foco visible, y decir con texto, bajo el campo, cada error: campo vacío, email que no vale, demasiados intentos y fallo del envío. El error MUST anunciarse a los lectores de pantalla, devolver el foco al campo y conservar lo escrito. Ningún estado se comunica solo con color. Sin JavaScript, en lugar del formulario la sección SHALL mostrar cómo apuntarse por correo.

#### Scenario: Email que no vale
- **WHEN** el usuario envía el formulario vacío o con un texto que no es un email
- **THEN** no se hace ninguna petición, bajo el campo aparece un texto en un elemento con `role="alert"` que dice qué pasa y cómo arreglarlo, el campo lleva `aria-invalid="true"` y tiene el foco

#### Scenario: Fallo del envío
- **WHEN** el servidor no responde, responde con un error o tarda más de 15 segundos
- **THEN** bajo el campo aparece un texto que lo dice y ofrece el buzón de la lista, el campo conserva el email y no queda marcado como inválido, y el botón vuelve a estar habilitado

#### Scenario: Demasiados intentos
- **WHEN** el servidor responde `429`
- **THEN** bajo el campo aparece un texto que pide esperar un rato

#### Scenario: Botón mientras envía
- **WHEN** el formulario está enviando
- **THEN** el botón está deshabilitado, dice «Enviando…», se distingue visualmente del habilitado y conserva su ancho

#### Scenario: Sin JavaScript
- **WHEN** se carga la portada con JavaScript deshabilitado
- **THEN** en la banda no se ve el formulario y se ve un texto con un enlace `mailto:` al buzón de la lista
