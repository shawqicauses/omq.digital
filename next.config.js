// DONE REVIEWING: GITHUB COMMIT 3️⃣
/** @type {import("next").NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin")

const withNextIntl = createNextIntlPlugin()

const nextConfig = {images: {domains: ["tailwindui.com", "images.unsplash.com"]}}

module.exports = withNextIntl(nextConfig)
