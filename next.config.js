/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.experiments = { topLevelAwait: true, layers: true };

    return config;
  },

  webpack5: true,
}

module.exports = nextConfig
