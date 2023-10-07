/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    topLevelAwait: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
