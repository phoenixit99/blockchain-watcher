/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Remove basePath and assetPrefix for now
  trailingSlash: true, // Helps with GitHub Pages routing
  // Optional: Add any additional configuration needed
};

module.exports = nextConfig; 