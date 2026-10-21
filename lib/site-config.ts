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
   * Comparte paleta y tipografías con la marca madre; se diferencia por el
   * tratamiento (motivo de marco) y por tener navegación propia.
   */
  cuadrosUnicos: {
    name: "Cuadros Unicos",
    tagline: "Tu imagen, convertida en un cuadro para mirar todos los días",
    description:
      "Cuadros personalizados con resina, iluminación LED y marcos a medida. Elegís la imagen, el material y el formato, y armamos la pieza con el mismo cuidado con el que imprimimos un cartel.",
    path: "/cuadros-unicos",
    // TODO: reemplazar por el Instagram real de CUADROS UNICOS
    instagram: "https://www.instagram.com/cuadrosunicos",
    logo: "/cuadros-unicos/logo-cuadros-unicos.svg",
    techniques: [
      {
        slug: "resina",
        name: "Resina",
        description:
          "Tu imagen encapsulada en resina epóxica, con profundidad y brillo cristalino. Ningún ángulo se ve igual.",
      },
      {
        slug: "led",
        name: "LED",
        description:
          "Backlight LED que ilumina la imagen desde atrás, con luz uniforme y sin reflejos sobre el frente.",
      },
      {
        slug: "marcos",
        name: "Marcos",
        description:
          "Marcos de madera, aluminio anodizado o negro mate, armados a medida para que encajen en la pared donde va.",
      },
      {
        slug: "medida",
        name: "A medida",
        description:
          "Formatos, orientaciones y tamaños libres. Horizontal, vertical o cuadrado, con la imagen que vos quieras.",
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
