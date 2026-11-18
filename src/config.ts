/** Datos configurables de la web. */
export const config = {
  // La ruta de la lista de espera del servidor de Understaffed (`POST /v2/waitlist`, con
  // `{ email, language }` en JSON): responde 202 y avisa por correo a `waitlistEmail`. El servidor
  // tiene que arrancar con `--waitlist-to`. Sin esta URL el build falla. Para probar contra un
  // servidor local: `PUBLIC_WAITLIST_URL=http://127.0.0.1:8787/v2/waitlist pnpm dev`.
  waitlistUrl: (import.meta.env.PUBLIC_WAITLIST_URL as string | undefined) ?? 'https://handoff.understaffed.app/v2/waitlist',
  // El buzón de la lista de espera: recibe cada alta y es el contacto para salir de ella.
  waitlistEmail: 'waitlist@understaffed.app',
  // TODO: imagen Open Graph (1200×630) aportada por el equipo en public/og.png.
  ogImagePath: '/og.png',
} as const;

export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];

export const paths: Record<Lang, string> = { es: '/', en: '/en/' };
