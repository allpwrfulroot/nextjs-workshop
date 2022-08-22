import { ChakraProvider } from "@chakra-ui/react"
import { AppProps, NextWebVitalsMetric } from "next/app"

import "../styles/globals.css"
import { Header, Footer, Main } from "../components"

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
