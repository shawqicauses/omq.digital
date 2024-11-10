// DONE REVIEWING: GITHUB COMMIT - 05
/** @type {import("next").NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin")

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**"
      }
    ]
  }
}

module.exports = withNextIntl(nextConfig)
