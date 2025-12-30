import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/nosotros",
        destination: "/#nosotros",
        permanent: true,
      },
      {
        source: "/servicios",
        destination: "/servicios/vinilos-y-vidrieras",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
