import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app-sare03saas77yd9t001.cms.optimizely.com'
      }
    ]
  }
};

export default nextConfig;

