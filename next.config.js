/** @type {import('next').NextConfig} */

const { remarkCodeHike } = require("@code-hike/mdx")
const rehypeAddClasses = require("rehype-add-classes")
const theme = require("shiki/themes/github-dark.json")

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
    rehypePlugins: [[rehypeAddClasses, { li: "mkdn" }]],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "mdx"],
})
