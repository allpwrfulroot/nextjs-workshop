import Link from "next/link"
import { Stack, Link as ChakraLink, Text } from "@chakra-ui/react"

export default function Mobile() {
  return (
    <Stack spacing={4} alignItems="center">
      <Text>The About page is desktop only, sorry!</Text>
      <Link href="/" passHref>
        <ChakraLink color="blue.500">Go to Home</ChakraLink>
      </Link>
    </Stack>
  )
}
