import React from "react"
import Link from "next/link"
import {
  Heading,
  Stack,
  Link as ChakraLink,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react"

const REPOS = [
  "snorkel-demo",
  "demo-walks-mobile",
  "hasura-cloud-migrate-to-v2",
  "netlify-hasura",
  "schema-viewer-widget",
  "hasura-with-azure",
  "datasets",
  "op-workshop-remote-schema-6923",
  "react-native-firebase",
  "benjamin-mobile",
  "frontrunners-workshop",
]

function RepoList() {
  return (
    <Stack spacing={2}>
      <Heading color="blue.500">allpwrfulroot has 14 repos on GitHub:</Heading>
      <UnorderedList>
        {REPOS.map((item) => (
          <ListItem key={item} ml={8}>
            <Link href={`/repositories/${item}`} passHref>
              <ChakraLink>{item}</ChakraLink>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  )
}

export default RepoList
