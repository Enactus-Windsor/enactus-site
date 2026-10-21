// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/our-projects",
        destination: "/our-ventures",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
