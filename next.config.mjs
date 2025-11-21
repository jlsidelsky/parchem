/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // If your repository name is not 'username.github.io', uncomment the line below
  // and replace 'chemical-supplier-ui' with your actual repository name
  // basePath: '/chemical-supplier-ui',
  // trailingSlash: true,
}

export default nextConfig
