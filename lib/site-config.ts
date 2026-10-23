export const siteConfig = {
  name: "Visual Design | Calidad Al Menor Costo",
  description:
    "Expertos en comunicación visual: cartelería, banners, gran formato, rotulación de vehículos y diseño comercial..",
  url: "https://visuald.com.ar", // Replace with actual domain if known, or keep as placeholder
  ogImage: "https://visuald.com.ar/opengraph-image.jpg",
  links: {
    facebook: "https://www.facebook.com/VisualDesignPage/",
    instagram: "https://www.instagram.com/visualgrafica1996",
    mail: "mailto:info@visuald.com.ar",
    whatsapp: "https://wa.me/5491173593738",
    /**
     * Mensajes pre-cargados de WhatsApp. El `intent` lo elige el visitante en el
     * modal de bienvenida y se conserva en localStorage, así cada consulta
     * llega al WhatsApp con el texto correspondiente al motivo de la visita.
     */
    whatsappMessages: {
      general:
        "Hola! Te escribo desde la web de Visual Design. Me gustaría recibir más información.",
      grafica:
        "Hola! Te escribo desde la web de Visual Design. Necesito un presupuesto para un trabajo de gráfica (cartelería, vinilos, banners, montados, corpóreos, etc.). ¿Me pueden pasar las opciones y los valores?",
      cuadros:
        "Hola! Te escribo desde la web de Visual Design. Me interesa CUADROS UNICOS. Quisiera saber más sobre las piezas personalizadas (vinilo UV, resina, LED) y cómo encargar la mía.",
    },
  },
  /**
   * CUADROS UNICOS — submarca de Visual Design.
   * Tiene paleta y tipografía propias: se aplican con la clase .cu-sub-brand
   * (ver app/globals.css) sobre la página /cuadros-unicos, de modo que el
   * resto del sitio no cambia.
   */
  cuadrosUnicos: {
    name: "Cuadros Unicos",
    tagline: "Tu imagen, convertida en un cuadro para mirar todos los días",
    description:
      "Cuadros personalizados en vinilo UV, resina e iluminación LED a medida. Elegís la imagen, el terminado y el formato, y armamos la pieza con el mismo cuidado con el que imprimimos un cartel.",
    /**
     * Texto de portada de la pagina de la submarca. Es aparte de
     * `description` porque ese se sigue usando en el banner de la home y en
     * el welcome modal, que no forman parte de este ajuste.
     */
    pageDescription:
      "La imagen se imprime en vinilo UV y sobre la impresión se aplica una capa de resina, que le da relieve y brillo. Algunas piezas suman iluminación LED por detrás. Cada trabajo es personalizado: elegís la imagen, la medida y el terminado.",
    path: "/cuadros-unicos",
    // TODO: reemplazar por el Instagram real de CUADROS UNICOS
    instagram: "https://www.instagram.com/cuadrosunicos_visual/",
    logo: "/cuadros-unicos/logo-cuadros-unicos-blanco.svg",
    logoOscuro: "/cuadros-unicos/logo-cuadros-unicos-negro.svg",
    /** Tecnicas que se listan en el banner de la home (no tocar aca). */
    techniques: [
      {
        slug: "vinilo",
        name: "Vinilo UV",
        description:
          "La imagen se imprime en vinilo UV de alta definición: el punto de partida que define el color y el detalle.",
      },
      {
        slug: "resina",
        name: "Resina",
        description:
          "La imagen va encapsulada en una capa de resina epóxica, con relieve y brillo de cristal. Se ve desde cualquier ángulo.",
      },
      {
        slug: "led",
        name: "LED",
        description:
          "Una luz LED por detrás ilumina la imagen desde atrás. La pared también se enciende: el cuadro proyecta su propio resplandor.",
      },
      {
        slug: "medida",
        name: "A medida",
        description:
          "Horizontal, vertical o cuadrado, con el tamaño que pida el lugar donde va. Vos elegís la imagen; nosotros la medimos.",
      },
    ],
    /**
     * Las cuatro fichas de la página. El orden es el del proceso: primero la
     * impresión, después el acabado, la luz y la medida. Los marcos no se
     * presentan como característica porque las piezas no los usan.
     */
    pageTechniques: [
      {
        slug: "vinilo",
        name: "Vinilo UV",
        description:
          "La imagen se imprime en vinilo UV. Es el punto de partida de cada pieza: ahí se define el color y el detalle de la imagen.",
      },
      {
        slug: "resina",
        name: "Resina",
        description:
          "Sobre la impresión se aplica una capa de resina epóxica, con relieve y brillo de cristal. Se ve desde cualquier ángulo.",
      },
      {
        slug: "led",
        name: "LED",
        description:
          "Algunas piezas llevan una luz LED que ilumina la imagen desde atrás. La pared también se enciende: el cuadro proyecta su propio resplandor.",
      },
      {
        slug: "personalizados",
        name: "Personalizados",
        description:
          "Cada trabajo se hace a medida: horizontal, vertical o cuadrado, con el tamaño que pida el lugar donde va. Vos elegís la imagen; nosotros la medimos.",
      },
    ],
    /**
     * Piezas reales del taller, en formato vertical 3:4. La vidriera usa la
     * versión en color de `public/images/cuadros-unicos/piezas-color/`; las
     * copias en gris de `piezas/` siguen para el hero y el banner de la home.
     * Para actualizar la vidriera, reemplazar los archivos y esta lista.
     */
    hero: {
      src: "/images/cuadros-unicos/piezas/acdc.webp",
      title: "AC/DC",
      technique: "LED",
      alt: "Pieza de AC/DC con el logo y el retrato iluminados por LED, apoyada en el taller",
    },
    pieces: [
      {
        src: "/images/cuadros-unicos/piezas-color/sonic.webp",
        title: "Sonic",
        technique: "LED",
        alt: "Pieza de Sonic con el contorno iluminado por LED, apoyada en el taller",
      },
      {
        src: "/images/cuadros-unicos/piezas-color/messi-10.webp",
        title: "Messi",
        technique: "LED",
        alt: "Pieza de Messi de espaldas con el número 10 iluminado, sobre una mesa de madera",
      },
      {
        src: "/images/cuadros-unicos/piezas-color/jack-daniels-1.webp",
        title: "Jack Daniel's",
        technique: "Resina",
        alt: "Pieza de Jack Daniel's con botella y relieve, iluminada sobre una mesa",
      },
      {
        src: "/images/cuadros-unicos/piezas-color/messi-legend.webp",
        title: "Messi",
        technique: "LED",
        alt: "Detalle de la pieza de Messi con el contorno LED encendido",
      },
      {
        src: "/images/cuadros-unicos/piezas-color/acdc-2.webp",
        title: "AC/DC",
        technique: "LED",
        alt: "Pieza de AC/DC inclinada con el logo LED encendido",
      },
      {
        src: "/images/cuadros-unicos/piezas-color/jack-daniels-2.webp",
        title: "Jack Daniel's",
        technique: "Resina",
        alt: "Segunda vista de la pieza de Jack Daniel's con la botella en relieve",
      },
    ],
    /**
     * Reels verticales del taller (9:16, 720x1280). Los editados viven en
     * `recursos/reels-2026/` y `scripts/make-cuadros-reels.mjs` emite la
     * versión liviana para la web más el poster. La `duration` es sólo para
     * el epígrafe de la tira. Para pasar a CDN, cambiar `src` y `poster`.
     * Los reels 05 y 06 se sacaron de la tira a pedido del cliente; la
     * numeración visible es la del índice, así que quedan 01 a 06.
     */
    reels: [
      {
        src: "/videos/cuadros-unicos/reel-01.mp4",
        poster: "/images/cuadros-unicos/reels/reel-01.webp",
        duration: "00:27",
      },
      {
        src: "/videos/cuadros-unicos/reel-02.mp4",
        poster: "/images/cuadros-unicos/reels/reel-02.webp",
        duration: "00:23",
      },
      {
        src: "/videos/cuadros-unicos/reel-03.mp4",
        poster: "/images/cuadros-unicos/reels/reel-03.webp",
        duration: "00:19",
      },
      {
        src: "/videos/cuadros-unicos/reel-04.mp4",
        poster: "/images/cuadros-unicos/reels/reel-04.webp",
        duration: "00:14",
      },
      {
        src: "/videos/cuadros-unicos/reel-07.mp4",
        poster: "/images/cuadros-unicos/reels/reel-07.webp",
        duration: "00:06",
      },
      {
        src: "/videos/cuadros-unicos/reel-08.mp4",
        poster: "/images/cuadros-unicos/reels/reel-08.webp",
        duration: "00:10",
      },
    ],
  },
  pages: {
    home: {
      page_title: "Inicio",
      description:
        "Visual Design ofrece soluciones integrales en comunicación visual, cartelería, corpóreos y gráfica vehicular.",
      path: "/",
      content_title: "Inicio",
    },
    contact: {
      page_title: "Contacto | Visual Design",
      description:
        "Contactate con Visual Design para solicitar presupuestos y asesoramiento en tus proyectos gráficos.",
      path: "/contacto",
      content_title: "Contacto",
    },
    services: {
      "vinilos-y-vidrieras": {
        page_title: "Vinilos y Vidrieras | Visual Design",
        description:
          "Decoración de vidrieras, esmerilados, vinilos de corte e impresos para locales comerciales y oficinas.",
        path: "/servicios/vinilos-y-vidrieras",
        content_title: "Vinilos y Vidrieras",
      },
      montados: {
        page_title: "Montados | Visual Design",
        description:
          "Impresiones de alta calidad montadas sobre soportes rígidos como foam board, PVC y alto impacto.",
        path: "/servicios/montados",
        content_title: "Montados",
      },
      corporeos: {
        page_title: "Corpóreos | Visual Design",
        description:
          "Letras y logotipos corpóreos en polyfan, acero, acrílico y otros materiales para destacar tu marca.",
        path: "/servicios/corporeos",
        content_title: "Corpóreos",
      },
      "banners-y-carteleria": {
        page_title: "Banners y Cartelería | Visual Design",
        description:
          "Diseño e impresión de banners, lonas front y back, y cartelería para eventos y publicidad.",
        path: "/servicios/banners-y-carteleria",
        content_title: "Banners y Cartelería",
      },
      "grafica-vehicular": {
        page_title: "Gráfica Vehicular | Visual Design",
        description:
          "Rotulación y ploteo de vehículos con materiales de alta durabilidad para publicidad móvil.",
        path: "/servicios/grafica-vehicular",
        content_title: "Gráfica Vehicular",
      },
    },
  },
};

export type SiteConfig = typeof siteConfig;

/** Motivo declarado por el visitante en el modal de bienvenida. */
export type SiteIntent = "grafica" | "cuadros";

export const INTENT_KEY = "visuald-intent";
