/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← Quan trọng nhất
  images: {
    unoptimized: true        // ← Bắt buộc cho GitHub Pages
  },
  basePath: '/lavipco-website',   // ← Nếu repo tên là lavipco-website
  assetPrefix: '/lavipco-website/',
}

export default nextConfig