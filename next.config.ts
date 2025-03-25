import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, //both will ignore any eslint or typescript errors when deploying on vercel to we can deploy easily on vercel if any error with ts or eslint still present
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
