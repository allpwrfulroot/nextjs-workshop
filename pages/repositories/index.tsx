import React from "react"
import Link from "next/link"
import {
  Heading,
  Stack,
  Link as ChakraLink,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

function RepoList({ username, repos }) {
  return (
    <Stack spacing={2}>
      <Heading color="blue.500">
        {username} has {repos.length} repos on GitHub:
      </Heading>
      <UnorderedList>
        {repos.map((item) => (
          <ListItem key={item.id} ml={8}>
            <Link href={`/repositories/${item.name}`} passHref>
              <ChakraLink>{item.name}</ChakraLink>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  )
}

export async function getServerSideProps() {
  const reposList = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=created&direction=desc`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_KEY}`,
      },
    }
  )
  const repos = await reposList.json()
  return {
    props: { repos, username: process.env.GITHUB_USERNAME }, // will be passed to the page component as props
  }
}

export default RepoList
