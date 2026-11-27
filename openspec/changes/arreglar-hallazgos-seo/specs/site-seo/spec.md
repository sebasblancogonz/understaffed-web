## ADDED Requirements

### Requirement: Datos estructurados
Cada página SHALL incluir un bloque JSON-LD con `Organization`, `WebSite`, `WebPage` y `SoftwareApplication` en su idioma, solo con datos que la portada dice, sin precios ni valoraciones.

#### Scenario: JSON-LD por idioma
- **WHEN** se inspeccionan `/` y `/en/`
- **THEN** cada una tiene un JSON-LD válido cuya `WebPage` apunta a su canónica y no contiene `offers` ni `aggregateRating`

### Requirement: Imagen para compartir por idioma
Cada idioma SHALL declarar una imagen Open Graph de 1200 × 630 que exista en el sitio.

#### Scenario: Imágenes disponibles
- **WHEN** se piden las rutas de `og:image` de `/` y de `/en/`
- **THEN** ambas responden con un PNG de 1200 × 630

### Requirement: Página no encontrada
El sitio SHALL publicar una página 404 en los dos idiomas, con enlace a cada portada, `noindex`, sin canónica y fuera del sitemap.

#### Scenario: Ruta inexistente
- **WHEN** se genera el sitio
- **THEN** existe `404.html` con los dos enlaces y el sitemap sigue teniendo solo `/` y `/en/`

### Requirement: Alternativas en el sitemap
El sitemap SHALL declarar los mismos `hreflang` que el `<head>`: `es`, `en` y `x-default`.

#### Scenario: Códigos iguales
- **WHEN** se comparan el sitemap y el `<head>`
- **THEN** los códigos y las URL coinciden

## MODIFIED Requirements

### Requirement: Metadatos por página
Cada página SHALL incluir `<title>`, `meta description`, URL canónica absoluta, etiquetas Open Graph (`og:title`, `og:description`, `og:url`, `og:image`, `og:locale`) y Twitter Card con imagen.

#### Scenario: Metadatos completos
- **WHEN** se inspecciona el `<head>` de `/` y de `/en/`
- **THEN** cada uno tiene título y descripción propios en su idioma, canónica apuntando a sí misma y todas las etiquetas Open Graph y Twitter con valores no vacíos

#### Scenario: Imagen para compartir ausente
- **WHEN** el equipo aún no ha aprobado la imagen para compartir
- **THEN** se publica la generada desde `media/og/` y `config.ts` dice que es un borrador
