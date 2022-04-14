/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  watch: {
    pool: 1000,
    aggregateTimeout: 300,
  },
}

module.exports = nextConfig
