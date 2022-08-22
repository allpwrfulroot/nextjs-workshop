/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  generateStatsFile: true,
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withBundleAnalyzer, withMDX]
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...defaultConfig,
    ...nextConfig,
  })
}
