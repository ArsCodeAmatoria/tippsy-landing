import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'raw.githubusercontent.com',
      'reactjs.org',
      'polkadot.network'
    ],
  },
};

export default nextConfig;
