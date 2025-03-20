/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nxaiagent.xyz'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 