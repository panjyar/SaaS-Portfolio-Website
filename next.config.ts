import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // Disable ESLint during build to avoid build breaks from lint errors

  eslint: {

    ignoreDuringBuilds: true,

  },

  // Enable standalone output for Docker-friendly builds

  output: "standalone",

  // Next.js image optimization config, add remote domains if any external images used

  images: {

    domains: ["images.unsplash.com"], // Add external domains here if needed e.g. ['example.com']

    remotePatterns: [

      // Example for flexible remote images pattern

      // { protocol: 'https', hostname: '**.example.com', port: '', pathname: '/**' },

    ],

  },

  // Optional: Base path when app served under sub-path (empty if none)

  // basePath: '',

  // Optional: Asset prefix for CDN or reverse proxy (empty if none)

  // assetPrefix: '',

};

export default nextConfig;

