/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['store.storeimages.cdn-apple.com'],
  },
  experimental: {
    newNextLinkBehavior: false,
  }
};

module.exports = nextConfig
