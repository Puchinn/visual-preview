export const siteConfig = {
  name: "Visual Design | Soluciones Gráficas Integrales",
  description:
    "Visual design grafica. Desde 1196 dedicada a la producción de impresiones de gran formato, banners, cartelerías, decoración de vidrieras, vehículos y más.",
  url: "https://visuald.com.ar", // Replace with actual domain if known, or keep as placeholder
  ogImage: "https://visuald.com.ar/opengraph-image.jpg",
  links: {
    facebook: "https://www.facebook.com/VisualDesignPage/",
    instagram: "https://www.instagram.com/visualdesignok",
    mail: "mailto:info@visuald.com.ar",
    whatsapp: "https://wa.me/5491173593738",
  },
  pages: {
    home: {
      title: "Inicio",
      description:
        "Visual Design ofrece soluciones integrales en comunicación visual, cartelería, corpóreos y gráfica vehicular.",
      path: "/",
    },
    contact: {
      title: "Contacto",
      description:
        "Contactate con Visual Design para solicitar presupuestos y asesoramiento en tus proyectos gráficos.",
      path: "/contacto",
    },
    services: {
      "vinilos-y-vidrieras": {
        title: "Vinilos y Vidrieras",
        description:
          "Decoración de vidrieras, esmerilados, vinilos de corte e impresos para locales comerciales y oficinas.",
        path: "/servicios/vinilos-y-vidrieras",
      },
      montados: {
        title: "Montados",
        description:
          "Impresiones de alta calidad montadas sobre soportes rígidos como foam board, PVC y alto impacto.",
        path: "/servicios/montados",
      },
      corporeos: {
        title: "Corpóreos",
        description:
          "Letras y logotipos corpóreos en polyfan, acero, acrílico y otros materiales para destacar tu marca.",
        path: "/servicios/corporeos",
      },
      "banners-y-carteleria": {
        title: "Banners y Cartelería",
        description:
          "Diseño e impresión de banners, lonas front y back, y cartelería para eventos y publicidad.",
        path: "/servicios/banners-y-carteleria",
      },
      "grafica-vehicular": {
        title: "Gráfica Vehicular",
        description:
          "Rotulación y ploteo de vehículos con materiales de alta durabilidad para publicidad móvil.",
        path: "/servicios/grafica-vehicular",
      },
    },
  },
};

export type SiteConfig = typeof siteConfig;
