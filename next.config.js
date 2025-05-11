/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': `${__dirname}/src/components`,
      '@/features': `${__dirname}/src/features`,
      '@/services': `${__dirname}/src/services`,
      '@/types': `${__dirname}/src/types`,
      '@/styles': `${__dirname}/src/styles`,
      '@/hooks': `${__dirname}/src/hooks`,
    };
    return config;
  },
}

module.exports = nextConfig 