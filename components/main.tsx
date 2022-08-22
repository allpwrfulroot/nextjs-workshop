import React from "react"
import { Flex } from "@chakra-ui/react"

function Main({ children }) {
  return (
    <Flex
      as="main"
      flexGrow={1}
      flexDirection="column"
      overflowY="scroll"
      py={8}
    >
      {children}
    </Flex>
  )
}

export default Main
