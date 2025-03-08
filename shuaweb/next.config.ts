import { NextConfig } from 'next';

const nextConfig = {
  experimental: {
    turbo: { enabled: false }, // ✅ Desactiva Turbopack
  },
  webpack: (config: any) => {
    console.log("✅ Using Webpack instead of Turbopack");
    return config;
  },
};

export default nextConfig;


