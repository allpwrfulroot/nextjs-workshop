import { Heading, Flex } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex flexGrow={1} alignItems="center" justifyContent="center">
      <Heading color="gray.600">
        Hello, {process.env.NEXT_PUBLIC_WORKSHOP_AUDIENCE}!
      </Heading>
    </Flex>
  )
}
