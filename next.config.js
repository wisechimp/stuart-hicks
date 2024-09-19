/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './build',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
}

module.exports = nextConfig
