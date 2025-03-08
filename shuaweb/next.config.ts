/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**", // Esto permite todas las rutas de imágenes en ese dominio
      },

    ],
  },
  // Elimina la configuración de Webpack si estás usando Turbopack
  // webpack(config) {
  //   config.optimization.minimize = false; // Desactivar minificación si está causando problemas
  //   return config;
  // },


};

export default nextConfig;
