import type { NextConfig } from "next";

const nextConfig: NextConfig = {

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

        hostname: "vicasinfo.livnsense.com",

        port: "",

        pathname: "/media/**",

      },

    ],

  },

  // Optional: Base path when app served under sub-path (empty if none)

  // basePath: '',

  // Optional: Asset prefix for CDN or reverse proxy (empty if none)

  // assetPrefix: '',

};

export default nextConfig;

