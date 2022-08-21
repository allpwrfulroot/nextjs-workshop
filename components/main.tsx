import React from "react"
import { Container } from "@chakra-ui/react"

function Main({ children }) {
  return (
    <Container maxW="container.lg" flexGrow={1}>
      {children}
    </Container>
  )
}

export default Main
