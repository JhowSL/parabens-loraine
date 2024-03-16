/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@mui/icons-material', '@mui/material-nextjs'],
  },
}

export default nextConfig
