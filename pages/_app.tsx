import { ChakraProvider, Flex, chakra } from "@chakra-ui/react"
import { AppProps } from "next/app"
import Head from "next/head"
// import { MDXProvider } from "@mdx-js/react"

import "../styles/globals.css"

// const MDXComponents = {
//   h1: function Heading1(props) {
//     return (
//       <chakra.h1
//         fontSize="2xl"
//         fontWeight="extrabold"
//         lineHeight="taller"
//         color="blue.500"
//         {...props}
//       />
//     )
//   },
//   h3: function Heading3(props) {
//     return (
//       <chakra.h3
//         fontSize="xl"
//         fontWeight="bold"
//         lineHeight="taller"
//         color="blue.500"
//         {...props}
//       />
//     )
//   },
//   p: function Paragraph(props) {
//     return (
//       <chakra.p
//         fontSize="md"
//         my="1"
//         color="gray.500"
//         maxW="container.sm"
//         {...props}
//       />
//     )
//   },
//   ul: function UnorderedList(props) {
//     return <chakra.ul marginLeft="6" {...props} />
//   },
//   li: function ListItem(props) {
//     return <chakra.li fontSize="md" color="gray.800" {...props} />
//   },
// }

import { Header, Footer } from "../components"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Workshop</title>
      </Head>
      <ChakraProvider>
        <Header />
        <Flex
          as="main"
          flexGrow={1}
          flexDirection="column"
          overflowY="scroll"
          my={8}
        >
          <Component {...pageProps} />
        </Flex>
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
