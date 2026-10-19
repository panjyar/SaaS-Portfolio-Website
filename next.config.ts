import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow hot-reloading from your network IP
  // @ts-ignore - might be missing from some NextConfig types
  allowedDevOrigins: ['192.168.56.1'],

  // Disable ESLint during build to avoid build breaks from lint errors

  // eslint: {

  //   ignoreDuringBuilds: true,

  // },

  // Enable standalone output for Docker-friendly builds

  output: "standalone",

  // Next.js image optimization config, add remote domains if any external images used

  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },


    ],

  },

  // Optional: Base path when app served under sub-path (empty if none)

  // basePath: '',

  // Optional: Asset prefix for CDN or reverse proxy (empty if none)

  // assetPrefix: '',

};

export default nextConfig;

