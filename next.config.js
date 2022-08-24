/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/splash.html",
      }
    ]
  }
}



module.exports = nextConfig
