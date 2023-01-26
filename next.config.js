/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
