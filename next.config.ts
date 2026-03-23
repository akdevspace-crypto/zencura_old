import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Since we used an Unsplash placeholder earlier
      }
    ],
  },
  turbopack: {
    root: path.join(__dirname, "./")
  }
};

export default nextConfig;
