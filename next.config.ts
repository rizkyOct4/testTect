import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.okezone.com",
      },
      {
        protocol: "https",
        hostname: "akcdn.detik.net.id",
      },
      {
        protocol: "https",
        hostname: "blue.kumparan.com",
      },
    ],
  },
};

export default nextConfig;
