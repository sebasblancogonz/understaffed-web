# Spec Delta

## MODIFIED Requirements

### Requirement: Secciones de la portada
La portada SHALL mostrar, en este orden: cabecera con navegación, hero, cómo funciona, aprobaciones humanas, Estado, grupos de proyectos, funcionamiento local con cuenta opcional, requisitos, lista de espera y pie. Cada idioma MUST contener las mismas secciones.

#### Scenario: Orden de secciones
- **WHEN** se abre `/` o `/en/`
- **THEN** el documento contiene `header`, `main` con las ocho secciones de contenido (hero, cómo funciona, aprobaciones, Estado, grupos, local, requisitos y lista de espera) en el orden indicado, y `footer`

#### Scenario: Navegación por anclas
- **WHEN** el usuario activa un enlace de la navegación
- **THEN** la página se desplaza a la sección correspondiente y el foco queda en ella o junto a ella

#### Scenario: Requisitos en la navegación
- **WHEN** se inspecciona la navegación de `/` y de `/en/`
- **THEN** incluye un enlace a la sección de requisitos cuyo `href` coincide con el `id` de esa sección

#### Scenario: Navegación acotada
- **WHEN** se cuentan los enlaces de la navegación principal
- **THEN** hay como mucho cinco, incluyen la lista de espera y ninguno usa el color de acento

### Requirement: Hero con acción principal
El hero SHALL contener un único `h1`, una frase que explique que Understaffed gestiona proyectos de software con un equipo de agentes de IA organizado como una empresa, y una única acción principal con el color de acento que lleve a la sección de la lista de espera.

#### Scenario: Una sola acción principal
- **WHEN** se renderiza el hero
- **THEN** existe exactamente un enlace con estilo de acción principal, su `href` es el `id` de la sección de la lista de espera y no hay ningún enlace ni texto de descarga

### Requirement: Local primero, cuenta opcional
La portada SHALL indicar que Understaffed funciona en local, que sin cuenta todo funciona igual en ese ordenador y que la cuenta, para sincronizar ordenadores y colaborar, es opcional.

#### Scenario: Cuenta no requerida
- **WHEN** se lee la sección de funcionamiento local
- **THEN** el texto dice que la cuenta es opcional y ninguna llamada a la acción exige crear cuenta

#### Scenario: Ordenadores y equipo
- **WHEN** se lee la sección de funcionamiento local
- **THEN** contiene un bloque sobre sincronizar los ordenadores del usuario y otro sobre colaborar con otras personas, cada uno con su captura o su marcador `TODO:`

## ADDED Requirements

### Requirement: Vista Estado
La portada SHALL incluir una sección que presente la vista Estado: lo que espera la decisión del usuario, lo que está en marcha, la actividad y el coste por rol.

#### Scenario: Contenido de Estado
- **WHEN** se lee la sección Estado en cada idioma
- **THEN** nombra las cuatro partes de la vista y muestra la captura `estado` o su marcador `TODO:`

#### Scenario: El coste no es un precio
- **WHEN** se revisa el texto sobre el coste por rol
- **THEN** describe el gasto de las ejecuciones y no contiene ningún precio de Understaffed

### Requirement: Grupos de proyectos
La portada SHALL incluir una sección que presente los grupos de proyectos: varios repositorios de un mismo producto con su Estado conjunto, un equipo compartido y funcionalidades que reparten tareas entre repositorios.

#### Scenario: Contenido de grupos
- **WHEN** se lee la sección de grupos en cada idioma
- **THEN** aparecen el Estado conjunto, el equipo compartido y el reparto de tareas entre repositorios, y se muestra la captura `grupos` o su marcador `TODO:`

### Requirement: Lista de espera
La portada SHALL cerrar con una sección de lista de espera que contenga el único formulario de la página. El formulario pide solo el email, envía el idioma de la página en un campo oculto y aclara que apuntarse no crea una cuenta.

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
- **THEN** junto al botón se ve un texto `TODO:` que indica que falta el aviso de privacidad

### Requirement: Límites de lo que se anuncia
Los textos de la portada MUST NOT presentar como disponibles las integraciones con Jira, Linear o GitHub Issues, los sprints, la delegación entre agentes, las ejecuciones en paralelo, la fase 3 de la colaboración ni un servicio de cuentas alojado por Understaffed.

#### Scenario: Sin promesas pendientes
- **WHEN** se busca en el HTML generado de `/` y `/en/`
- **THEN** no aparecen Jira, Linear, GitHub Issues, sprints, ni la afirmación de que Understaffed aloja las cuentas
