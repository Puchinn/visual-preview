# Visual Design — sitio oficial

Web de **Visual Design** (gráfica, cartelería, vinilos, CABA) en Next.js 16 + React 19 + Tailwind 4.

## Comandos
```bash
pnpm install        # corepack/pnpm 9.15.4
pnpm dev            # http://localhost:3000
pnpm build          # build de producción (13 rutas estáticas)
pnpm lint           # eslint — baseline: 0 errores, 2 warnings preexistentes
```

## Estructura clave
- `app/page.tsx` — home. Orden de secciones: `InitialAnimation` → WelcomeModal → Navbar/Hero (video de fondo) → Experience → Services → **CuadrosUnicosBanner** → CarouselLastProjects → Clients → FaqSection → Footer → FloatingButtons
- `app/(rest-page-layout)/` — layout con Navbar + Footer para `/contacto`, `/servicios/[service]` y `/cuadros-unicos`
- `app/(rest-page-layout)/servicios/[service]/page.tsx` — página de servicio **genérica**: lee `public/images/<service>/` del disco (`getGalleryImages`). El título sale de `siteConfig.pages.services[service]`. Los tabs de servicios están hardcodeados en ese archivo. `generateStaticParams` filtra por `siteConfig.pages.services` para no generar rutas huérfanas.
- `app/(rest-page-layout)/cuadros-unicos/page.tsx` — submarca CUADROS UNICOS. Hero → Técnicas → Vidriera → Contacto.
- `lib/site-config.ts` — **fuente de verdad** de textos, links y servicios. `pages.services` alimenta navbar, footer, sitemap y las páginas de servicio. También `cuadrosUnicos` (submarca) y `links.whatsappMessages` (un mensaje por tipo de consulta).
- `components/sections/` — secciones de la home (hero, experience, services, clients, faqs, contact-info, contact-map) + `cuadros-unicos/` (hero, techniques, gallery, contact) + `cuadros-unicos-banner.tsx` (bloque en la home) + `welcome-modal.tsx`
- `components/providers/intent-provider.tsx` — `useIntent()`: guarda en `localStorage` si la persona viene por gráfica o por cuadros. Lee con `useSyncExternalStore` (sin `setState` en effects, regla de lint de React 19).
- `components/layout/nav-item.tsx` — `useActiveNav()` + `<NavItem>`: marca el ítem del menú que corresponde a la sección actual. El link activo se pinta en rojo y lleva `aria-current="page"`. Hay dos variantes: `dark` (menú sobre fondo negro, home) y `light` (menú sobre fondo blanco, subpáginas).
- `components/ui/` — shadcn/ui (button, sheet, dialog, accordion, carousel, navigation-menu, tooltip…) + botones flotantes
- `components/branding/custom-logo-animated/` — logo SVG animado (37 elementos, reveal progresivo vía `custom.css`)
- `public/images/<servicio>/` — galerías por servicio (imágenes sueltas, se leen del filesystem)
- `public/imagenes-servicios/` — 5 posters + 5 hovers del carrusel de servicios (indexado por número 1–5)

## CUADROS UNICOS (submarca)
- Diferenciación por **tratamiento**, no por paleta: el motivo es el marco (moldura + bisel + paspartú + sombra proyectada). Se implementa en `components/sections/cuadros-unicos/frame.tsx` con materiales (`negro` / `aluminio` / `madera`), paspartús (`blanco` / `negro` / `arena`), `sheen` (reflejo de resina) y `glow` (luz LED rebotada).
- Textos, técnicas, logo e IG de la submarca viven en `siteConfig.cuadrosUnicos`.
- Las fotos de la vidriera se leen de `public/images/cuadros-unicos/` — para reemplazarlas basta con dejar los archivos con los mismos nombres (`1.webp` … `12.webp`). Los placeholders se generan con `node scripts/make-cuadros-placeholders.mjs` (usa `sharp` del store de pnpm, no es dependencia directa).
- **Pendiente del cliente**: logo real (`public/cuadros-unicos/logo-cuadros-unicos.svg` es un placeholder), URL real del IG (`siteConfig.cuadrosUnicos.instagram` apunta a `instagram.com/cuadrosunicos` por defecto) y fotos reales de la vidriera.

## Herramientas de desarrollo
- `scripts/shoot.mjs` — captura de pantalla vía Chrome DevTools Protocol, **sin dependencias externas** (usa el `WebSocket` global de Node 22+). `node scripts/shoot.mjs <url> <salida.png> [ancho] [alto] [fullPage] [script] [waitMs]`. El argumento `script` se evalúa en la página antes de capturar; `waitMs` espera después (necesario para saltar el `InitialAnimation` de ~6 s).
- `scripts/inspect.mjs` — mismo arnés CDP, pero evalúa una expresión y vuelca consola/excepciones. Sirve para depurar hidratación.
- Las capturas se guardan en `.shots/` (ignorado por git).

## Convenciones de diseño
- Colores: `--primary: #c70000` (rojo). Escala `--gray-tone-1..4`. Fondo general negro, secciones alternan blanco.
- `--primary-light: #ef4444` — la variante para texto/link sobre fondo oscuro. `#c70000` sobre negro queda en 2.8:1 y no se lee.
- Fuentes: `Archivo` (variable `--font-archivo`, cuerpo/UI) y `Dirtylane` (`--font-dirtylane`, títulos display).
- Títulos grandes usan `font-dirtylane` a `text-[68px] leading-14` en mobile → `xl:text-9xl`.
- Un solo `services.tsx` por carpeta; las galerías son dinámicas, no hardcodeadas.

## Notas importantes
- `public/fonts/Dirtylane.otf` se carga con `localFont` en `app/layout.tsx`.
- La home usa `FadeBackground` con `public/loop.mp4` (1.2 MB) como fondo del hero.
- `components/video.tsx` embebe un YouTube vía Plyr (`5V-TDVcjo64`).
- Analytics: GA4 `G-L31BQ35J30` + GTM `GTM-NRWRL79K` (en `app/layout.tsx`).
- El `InitialAnimation` (logo animado a pantalla completa, ~6 s) se dispara una vez por sesión.
- `next.config.ts` redirige `/nosotros` → `/#nosotros` y `/servicios` → `/servicios/vinilos-y-vidrieras`.
- `dev` es una rama remota con un refactor parcial (borra carousel-last-projects, floating-to-up, simplify de faqs). `main` es la rama de trabajo actual.
- El sitio tiene **un solo tema** (tokens claros en `:root`, fondo negro fijo). La variante `dark:` de Tailwind 4 está atada a la clase `.dark` vía `@custom-variant` en `app/globals.css`; sin eso, `dark:` se activaba por la preferencia del sistema y dejaba botones y campos con estilos que no correspondían (por ejemplo, el botón de WhatsApp blanco sobre blanco).
- En los dos navbars, los links dentro de `NavigationMenuList` **no** pueden ir envueltos en `NavigationMenuItem`: ese componente ya renderiza un `<li>` y anidarlo rompía la hidratación en todas las páginas.
- `plyr-react` tira un error de consola en desarrollo (`Plyr.ready` → `getAttribute` sobre null) cuando el componente se desmonta antes de que cargue la API de YouTube. Es cosmético: el video se ve bien. No afecta producción.
- `react-responsive-masonry` (galería de las páginas de servicio) provoca un error de hidratación en desarrollo: el server renderiza 1 columna y el cliente 4. Es preexistente y cosmético — la galería se ve bien. Para verificar, comparar siempre contra `main` con `git stash`.
- **El CSS del dev server puede quedar viejo** y no reflejar cambios en `app/globals.css` (los tokens de `@theme` se resuelven en build). Si una clase nueva no aparece, `pnpm build` y reiniciar `pnpm dev`; no asumir que la clase está mal escrita.
