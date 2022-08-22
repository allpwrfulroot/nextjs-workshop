export default {
  // projectLink: 'https://github.com/shuding/nextra', // GitHub link in the navbar
  // docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master', // base URL for the docs repository
  titleSuffix: "Docs site",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `NextJS Workshop`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <svg>...</svg>
      <span>Next.js Static Site Generator</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Demo of Nextra: the next docs builder"
      />
      <meta name="og:title" content="NextJS Workshop Docs" />
    </>
  ),
}
