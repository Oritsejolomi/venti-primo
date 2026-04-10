import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
