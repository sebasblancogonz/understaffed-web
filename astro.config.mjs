// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: URL pública definitiva. Hasta fijarla, canónicas, hreflang y sitemap
// apuntan a este valor provisional. Se puede sobrescribir con SITE_URL.
const site = process.env.SITE_URL ?? 'https://understaffed.example';

export default defineConfig({
  site,
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-US' } },
    }),
  ],
});
