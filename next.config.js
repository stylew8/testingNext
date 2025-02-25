/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/testingNext',
  assetPrefix: '/testingNext/',
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
