// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// La URL pública: de ella salen las canónicas, hreflang, la imagen Open Graph y el sitemap.
// Es la de `www` porque `understaffed.app` redirige ahí. Se puede sobrescribir con SITE_URL.
const site = process.env.SITE_URL ?? 'https://www.understaffed.app';

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
