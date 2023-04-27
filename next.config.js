/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: "dist",
  output: 'export',
  assetPrefix: "." ,
  reactStrictMode: true,
  images: {
    path: "/",
  },

}

module.exports = nextConfig
