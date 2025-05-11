/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/cosmos-validator-dashboard' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cosmos-validator-dashboard/' : '',
};

module.exports = nextConfig; 