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
        "Hola! Te escribo desde la web de Visual Design. Me interesa CUADROS UNICOS. Quisiera saber más sobre los cuadros personalizados (resina, LED, marcos a medida) y cómo sacar el mío.",
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
      "Cuadros personalizados con resina, iluminación LED y marcos a medida. Elegís la imagen, el material y el formato, y armamos la pieza con el mismo cuidado con el que imprimimos un cartel.",
    path: "/cuadros-unicos",
    // TODO: reemplazar por el Instagram real de CUADROS UNICOS
    instagram: "https://www.instagram.com/cuadrosunicos",
    logo: "/cuadros-unicos/logo-cuadros-unicos-blanco.svg",
    logoOscuro: "/cuadros-unicos/logo-cuadros-unicos-negro.svg",
    techniques: [
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
        slug: "marcos",
        name: "Marcos",
        description:
          "Madera, aluminio anodizado o negro mate. Cada marco se arma a medida y se cuelga con el sistema que corresponde a la pared.",
      },
      {
        slug: "medida",
        name: "A medida",
        description:
          "Horizontal, vertical o cuadrado, con el tamaño que pida el lugar donde va. Vos elegís la imagen; nosotros la medimos.",
      },
    ],
    /**
     * Piezas reales del taller, en formato vertical 3:4. Se procesaron a
     * blanco y negro para la propuesta (los originales están en `recursos/`).
     * Para actualizar la vidriera, reemplazar los archivos de
     * `public/images/cuadros-unicos/piezas/` y esta lista.
     */
    hero: {
      src: "/images/cuadros-unicos/piezas/acdc.webp",
      title: "AC/DC",
      technique: "LED",
      alt: "Pieza de AC/DC con el logo y el retrato iluminados por LED, apoyada en el taller",
    },
    pieces: [
      {
        src: "/images/cuadros-unicos/piezas/sonic.webp",
        title: "Sonic",
        technique: "LED",
        alt: "Pieza de Sonic con el contorno iluminado por LED, apoyada en el taller",
      },
      {
        src: "/images/cuadros-unicos/piezas/messi-10.webp",
        title: "Messi",
        technique: "LED",
        alt: "Pieza de Messi de espaldas con el número 10 iluminado, sobre una mesa de madera",
      },
      {
        src: "/images/cuadros-unicos/piezas/jack-daniels-1.webp",
        title: "Jack Daniel's",
        technique: "Resina",
        alt: "Pieza de Jack Daniel's con botella y relieve, iluminada sobre una mesa",
      },
      {
        src: "/images/cuadros-unicos/piezas/messi-legend.webp",
        title: "Messi",
        technique: "LED",
        alt: "Detalle de la pieza de Messi con el contorno LED encendido",
      },
      {
        src: "/images/cuadros-unicos/piezas/acdc-2.webp",
        title: "AC/DC",
        technique: "LED",
        alt: "Pieza de AC/DC inclinada con el logo LED encendido",
      },
      {
        src: "/images/cuadros-unicos/piezas/jack-daniels-2.webp",
        title: "Jack Daniel's",
        technique: "Resina",
        alt: "Segunda vista de la pieza de Jack Daniel's con la botella en relieve",
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
