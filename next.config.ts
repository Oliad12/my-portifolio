import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tibebudere.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;