import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net', pathname: '/gh/faker-js/**' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
    // Alternativa simples:
    // domains: ['cdn.jsdelivr.net', 'placehold.co'],
  },
};

export default nextConfig;
