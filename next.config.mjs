/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  transpilePackages: ["next-image-export-optimizer"],
}

export default nextConfig