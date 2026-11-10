/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize for Render deployment
  experimental: {
    // Reduce memory usage
    workerThreads: false,
    cpus: 1,
  },
  // Increase timeout for build
  staticPageGenerationTimeout: 180,
  // Reduce build parallelization to avoid timeout
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.parallelism = 1
    }
    return config
  },
}

module.exports = nextConfig
