# Spec Delta

## MODIFIED Requirements

### Requirement: Secciones de la portada
La portada SHALL mostrar, en este orden: cabecera con navegación, hero con demostración, cómo funciona, Estado del grupo, roles, local y cuenta, requisitos, lista de espera y pie. Cada idioma MUST contener las mismas secciones.

#### Scenario: Orden de secciones
- **WHEN** se abre `/` o `/en/`
- **THEN** el documento contiene `header`, `main` con las secciones hero, cómo funciona, Estado, roles, local, requisitos y lista de espera en ese orden, y `footer`

#### Scenario: Navegación por anclas
- **WHEN** el usuario activa un enlace de la navegación o del pie
- **THEN** la página se desplaza a la sección correspondiente y el foco queda en ella o junto a ella

#### Scenario: Requisitos en la navegación
- **WHEN** se inspecciona la navegación de `/` y de `/en/`
- **THEN** incluye un enlace a la sección de requisitos cuyo `href` coincide con el `id` de esa sección

#### Scenario: Navegación acotada
- **WHEN** se cuentan los enlaces de la navegación de la cabecera
- **THEN** hay como mucho cuatro enlaces a secciones, más el cambio de idioma y el botón «Pedir acceso», que lleva a la lista de espera

### Requirement: Hero con acción principal
El hero SHALL contener un único `h1`, una frase que explique que Understaffed gestiona proyectos de software con un equipo de agentes de IA y que nada llega a la rama del usuario sin sus dos aprobaciones, una única acción principal, «Pedir acceso», con el color principal, que lleve a la lista de espera, y como mucho una acción secundaria sin el color principal.

#### Scenario: Una sola acción principal
- **WHEN** se renderiza el hero
- **THEN** existe exactamente un enlace con estilo de acción principal, su `href` es el `id` de la sección de la lista de espera y no hay ningún enlace ni texto de descarga

#### Scenario: Titular corto
- **WHEN** se mide el `h1` a 1440, 768 y 360 px
- **THEN** ocupa dos líneas o menos en 1440 y 768 px

### Requirement: Local primero, cuenta opcional
La portada SHALL indicar que Understaffed funciona en local, que sin cuenta la app no hace ninguna petición de red y todo funciona igual, y que la cuenta, para sincronizar ordenadores y colaborar, es opcional. Lo presenta en tres tarjetas (sin cuenta, con cuenta y en equipo), cada una con una captura real o un recorte de una.

#### Scenario: Cuenta no requerida
- **WHEN** se lee la sección de funcionamiento local
- **THEN** el texto dice que la cuenta es opcional y ninguna llamada a la acción exige crear cuenta

#### Scenario: Ordenadores y equipo
- **WHEN** se lee la sección de funcionamiento local
- **THEN** contiene una tarjeta sin cuenta, otra sobre sincronizar los ordenadores del usuario y otra sobre colaborar con otras personas, cada una con una captura real o un recorte de una

### Requirement: Lista de espera
La portada SHALL cerrar con una sección de lista de espera que contenga el único formulario de la página: un campo de email y el botón «Pedir acceso». Pide solo el email, envía el idioma de la página en un campo oculto y aclara que apuntarse no crea una cuenta.

#### Scenario: Un solo formulario
- **WHEN** se inspecciona el HTML de `/` y de `/en/`
- **THEN** hay exactamente un `form`, dentro de la sección de la lista de espera, con un único campo visible `type="email"`, `required`, `autocomplete="email"` y una etiqueta visible, más un campo oculto `lang` con el idioma de la página

#### Scenario: Sin destino configurado
- **WHEN** `config.waitlistUrl` está vacío
- **THEN** el formulario no tiene `action`, el botón de envío está deshabilitado y se ve un texto `TODO:` que indica que falta el destino

#### Scenario: Con destino configurado
- **WHEN** `config.waitlistUrl` tiene una URL
- **THEN** el formulario envía por `POST` a esa URL, el botón está habilitado y no se ve el `TODO:` del destino

#### Scenario: Confirmación
- **WHEN** se abre la portada con el fragmento `#thanks`
- **THEN** se muestra el mensaje de confirmación en el idioma de la página y el formulario queda oculto, sin JavaScript

#### Scenario: Aviso de privacidad pendiente
- **WHEN** aún no existe el texto legal
- **THEN** junto al formulario se ve un texto `TODO:` que indica que falta el aviso de privacidad

### Requirement: Demostración de las aprobaciones
El hero SHALL incluir una ventana de la app con el tablero de cinco columnas tal como está en los datos de demostración: la tarea #6 «Modo oscuro en el panel de administración» espera tu aprobación en Backlog y la #4 «Exportar pedidos a CSV» espera tu revisión. La #6 lleva sus acciones en la propia tarjeta y solo avanza cuando el visitante pulsa «Aprobar spec», «Ejecutar» y «Aprobar». Usa las etiquetas reales de la app y se presenta como demostración.

#### Scenario: Nada avanza sin pulsar
- **WHEN** el visitante no pulsa ninguna acción
- **THEN** la tarea sigue en Backlog con «Espera tu aprobación», y tras la ejecución se detiene en En revisión con «Espera tu revisión»

#### Scenario: Recorrido completo
- **WHEN** el visitante pulsa «Aprobar spec», «Ejecutar» y «Aprobar»
- **THEN** la tarea pasa por Por hacer, En curso y En revisión hasta Hecho, y cada cambio se anuncia en una región `aria-live`

#### Scenario: Sin JavaScript
- **WHEN** se carga la portada sin JavaScript
- **THEN** se ve la tarjeta esperando aprobación y los pasos escritos, sin botones que no hagan nada
