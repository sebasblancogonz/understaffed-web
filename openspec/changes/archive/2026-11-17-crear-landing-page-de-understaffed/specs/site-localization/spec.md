# Spec Delta

## Purpose

Define cómo la web se ofrece en español e inglés: rutas, origen de los textos, cambio de idioma y señales para buscadores.

## ADDED Requirements

### Requirement: Rutas por idioma
El sitio SHALL servir la portada en español en `/` y en inglés en `/en/`, cada una con el atributo `lang` correspondiente (`es`, `en`) en `<html>`.

#### Scenario: Portada en español
- **WHEN** se solicita `/`
- **THEN** responde con contenido en español y `<html lang="es">`

#### Scenario: Portada en inglés
- **WHEN** se solicita `/en/`
- **THEN** responde con contenido en inglés y `<html lang="en">`

### Requirement: Textos separados por idioma
Todo texto visible SHALL provenir de archivos de textos por idioma, y ambos idiomas MUST tener las mismas claves.

#### Scenario: Paridad de claves
- **WHEN** se comparan las claves de textos de español e inglés
- **THEN** no falta ninguna clave en ninguno de los dos y `pnpm astro check` pasa

#### Scenario: Sin textos en componentes
- **WHEN** se revisan los componentes de sección
- **THEN** no contienen cadenas de contenido de marketing escritas directamente

### Requirement: Alternativas hreflang
Cada página SHALL declarar `hreflang` para `es`, `en` y `x-default` con URLs absolutas, apuntando `x-default` a la versión en español.

#### Scenario: Etiquetas hreflang
- **WHEN** se inspecciona el `<head>` de `/en/`
- **THEN** hay tres `link rel="alternate"` con `hreflang` `es`, `en` y `x-default`, y la URL de cada una es absoluta

### Requirement: Cambio de idioma
La cabecera SHALL ofrecer un enlace al otro idioma, con etiqueta accesible y `lang` propio, que lleve a la página equivalente.

#### Scenario: Cambiar a inglés
- **WHEN** el usuario activa el enlace de idioma en `/`
- **THEN** navega a `/en/` sin requerir JavaScript

#### Scenario: Sin redirección automática
- **WHEN** un visitante con navegador en inglés abre `/`
- **THEN** ve la portada en español sin redirección
