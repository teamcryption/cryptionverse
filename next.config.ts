import type { NextConfig } from "next";

const nextConfig: NextConfig = {
devServer: {
    allowedDevOrigins: ['http://192.168.1.107:3000'], 
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
