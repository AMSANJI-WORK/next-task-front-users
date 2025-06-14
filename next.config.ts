import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/**`),
      new URL(`${process.env.NEXT_PUBLIC_FLAG_CDN}/w80/**`),
    ],
  },
};

export default nextConfig;
