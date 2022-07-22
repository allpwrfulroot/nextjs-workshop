import { NextUIProvider } from "@nextui-org/react"

import { Header, Footer, Main } from "../components"

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div style={{ maxWidth: 800, margin: "auto" }}>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </div>
    </NextUIProvider>
  )
}

export default MyApp
