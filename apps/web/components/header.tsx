import React, { memo } from "react"
import { Box, Container, Flex, Heading, HStack } from "@chakra-ui/react"

import NavLink from "./nav-link"

function Header() {
  return (
    <Box as="header">
      <HStack as="nav" spacing={8} borderBottom="2px" borderColor="gray.100">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/repositories">Github</NavLink>
      </HStack>
    </Box>
  )
}

export default memo(Header)
