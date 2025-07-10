/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 根據環境變數決定是否為靜態導出
  ...(process.env.EXPORT_STATIC === "true" && {
    output: "export",
    distDir: "dist",
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
};

module.exports = nextConfig;
