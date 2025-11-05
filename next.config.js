/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // 🔹 Disable image optimization for static export
  },
}

module.exports = nextConfig
