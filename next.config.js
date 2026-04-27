/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← Quan trọng nhất
  images: {
    unoptimized: true        // ← Bắt buộc cho GitHub Pages
  },
  basePath: '/lavipco1',   // ← Nếu repo tên là lavipco-website
  assetPrefix: '/lavipco1/',
}

export default nextConfig