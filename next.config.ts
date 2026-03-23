import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ✅ CRITICAL

  devIndicators: false,

  images: {
    unoptimized: true, // ✅ REQUIRED for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;