/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
}

let config = nextConfig

if (process.env.NODE_ENV === 'development') {
  try {
    const { withNextLocator } = require('@next-locator/babel-plugin/dist/config.js')
    config = withNextLocator(nextConfig)
    if (config.turbopack) delete config.turbopack
  } catch (e) {
    config = nextConfig
  }
}

module.exports = config
