import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      // 👉 aquí podés agregar más dominios si luego usás otras imágenes externas
      // {
      //   protocol: "https",
      //   hostname: "mis-imagenes.com",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
