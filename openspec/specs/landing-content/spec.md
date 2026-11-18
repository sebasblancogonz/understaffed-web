# landing-content Specification

## Purpose
Define qué secciones y qué afirmaciones contiene la portada de Understaffed, de modo que describa el producto con la voz de la app y solo diga lo que es verdad hoy.

## Requirements

### Requirement: Secciones de la portada
La portada SHALL mostrar, en este orden: cabecera con navegación, hero, cómo funciona, aprobaciones humanas, funcionamiento local con cuenta opcional, requisitos y pie. Cada idioma MUST contener las mismas secciones.

#### Scenario: Orden de secciones
- **WHEN** se abre `/` o `/en/`
- **THEN** el documento contiene `header`, `main` con las cinco secciones de contenido (hero, cómo funciona, aprobaciones, local, requisitos) en el orden indicado y `footer`

#### Scenario: Navegación por anclas
- **WHEN** el usuario activa un enlace de la navegación
- **THEN** la página se desplaza a la sección correspondiente y el foco queda en ella o junto a ella

#### Scenario: Requisitos en la navegación
- **WHEN** se inspecciona la navegación de `/` y de `/en/`
- **THEN** incluye un enlace a la sección de requisitos cuyo `href` coincide con el `id` de esa sección

### Requirement: Hero con acción principal
El hero SHALL contener un único `h1`, una frase que explique que Understaffed gestiona proyectos de software con un equipo de agentes de IA organizado como una empresa, y una única acción principal con el color de acento.

#### Scenario: Una sola acción principal
- **WHEN** se renderiza el hero
- **THEN** existe exactamente un enlace o botón con estilo de acción principal y su destino está definido o marcado con `TODO:` visible si el enlace de descarga aún no existe

### Requirement: Explicación del flujo de trabajo
La sección "cómo funciona" SHALL describir que el usuario contrata roles, les asigna tareas de un tablero y revisa su trabajo, y que cada tarea es un cambio de OpenSpec en el repositorio. MUST usar los términos roles, tareas, tablero, revisión y spec, y presentar los pasos en el orden real de una tarea: spec, aprobación de la spec, ejecución, revisión y aprobación del código.

#### Scenario: Términos de la app presentes
- **WHEN** se lee el texto de la sección en español
- **THEN** aparecen las palabras "roles", "tareas", "tablero", "revisión" y "spec", y en inglés sus equivalentes acordados en el diccionario de textos

#### Scenario: Orden de los pasos
- **WHEN** se leen en orden los pasos de la sección en `/` y en `/en/`
- **THEN** la revisión aparece antes de la aprobación del código y la aprobación de la spec antes de la ejecución, y no hay un paso que presente el código como aprobado antes de revisarlo

### Requirement: Dos aprobaciones humanas
La portada SHALL indicar que cada tarea tiene dos aprobaciones humanas: la spec y el código.

#### Scenario: Aprobaciones nombradas
- **WHEN** se lee la sección de aprobaciones
- **THEN** se mencionan exactamente dos aprobaciones, "la spec" y "el código", y ningún texto sugiere que el código se integre sin aprobación

### Requirement: Uso del CLI de IA existente
La portada SHALL afirmar que Understaffed lanza el CLI de IA que el usuario ya tiene y ya paga, nombrando hoy solo Claude Code, y que no guarda claves.

#### Scenario: Solo Claude Code
- **WHEN** se revisan los textos de la portada
- **THEN** Claude Code es el único CLI de IA nombrado como compatible y no se mencionan otros proveedores como soportados

### Requirement: Local primero, cuenta opcional
La portada SHALL indicar que Understaffed funciona en local y que la cuenta, para sincronizar y colaborar, es opcional.

#### Scenario: Cuenta no requerida
- **WHEN** se lee la sección de funcionamiento local
- **THEN** el texto dice que la cuenta es opcional y ninguna llamada a la acción exige crear cuenta

### Requirement: Contenido no inventado
La portada MUST NOT incluir precios, métricas, testimonios, logos de clientes ni capturas que no hayan sido aportados. Todo dato o captura ausente SHALL mostrarse como un hueco con un `TODO:` visible, y todo texto propuesto por desarrollo SHALL marcarse como borrador en el código fuente de textos.

#### Scenario: Captura ausente
- **WHEN** no existe el archivo de captura en `src/assets/`
- **THEN** la sección muestra un marcador visible con `TODO:` y el nombre de la captura esperada, y el build no falla

#### Scenario: Sin cifras ni logos
- **WHEN** se busca en el HTML generado cualquier cifra de precio, métrica, testimonio o logo de cliente
- **THEN** no hay ninguno

### Requirement: Imágenes accesibles y estables
Toda imagen SHALL declarar ancho, alto y `alt` descriptivo para evitar saltos de diseño.

#### Scenario: Atributos de imagen
- **WHEN** se inspecciona cada `img` del HTML generado
- **THEN** tiene `width`, `height` y un `alt` no vacío, salvo las decorativas con `alt=""`

### Requirement: Requisitos de uso
La portada SHALL incluir una sección de requisitos que indique que la app es de escritorio para Windows y macOS, que necesita git 2.30 o posterior y Claude Code instalado y con sesión iniciada, y que la app no instala ninguno de los dos pero explica cómo hacerlo cuando faltan.

#### Scenario: Requisitos nombrados
- **WHEN** se lee la sección de requisitos en cada idioma
- **THEN** se mencionan Windows, macOS, git 2.30 o posterior y Claude Code con sesión iniciada, y se dice que la app no los instala pero explica cómo hacerlo

#### Scenario: Sin afirmaciones no verificadas
- **WHEN** se revisa el texto de la sección
- **THEN** no nombra otros sistemas operativos ni otros CLI de IA como compatibles, ni cifras de rendimiento, tamaño de instalación o precio

#### Scenario: Rutas y comandos en monoespaciada
- **WHEN** la sección muestra un nombre de comando, versión o ruta (por ejemplo `git` o `claude`)
- **THEN** se presenta en la fuente monoespaciada del sitio
