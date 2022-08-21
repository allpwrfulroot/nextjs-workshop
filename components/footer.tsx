import React from "react"
import { Box, Text } from "@chakra-ui/react"

function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      justifyContent="flex-end"
      borderTop="2px"
      borderColor="gray.100"
    >
      <Text p={2}>Made with &#9825; in Boston</Text>
    </Box>
  )
}

export default Footer
