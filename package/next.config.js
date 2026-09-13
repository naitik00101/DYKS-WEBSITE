const { withNextLocator } = require('@next-locator/babel-plugin/dist/config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
}

const config = withNextLocator(nextConfig)
delete config.turbopack

module.exports = config
