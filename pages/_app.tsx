import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"

import "../styles/globals.css"
import { Header, Footer, Main } from "../components"

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
