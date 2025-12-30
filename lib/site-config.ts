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
