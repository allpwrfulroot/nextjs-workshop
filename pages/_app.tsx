import { ChakraProvider, Flex } from "@chakra-ui/react"
import { AppProps, NextWebVitalsMetric } from "next/app"

import "../styles/globals.css"
import { Header, Footer } from "../components"

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Flex
        as="main"
        flexGrow={1}
        flexDirection="column"
        overflowY="scroll"
        py={8}
      >
        <Component {...pageProps} />
      </Flex>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
