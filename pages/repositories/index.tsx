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
import { formatDistanceToNow } from "date-fns"

function RepoList({ username, repos, fetched_at }) {
  const [timeAgo, setTimeAgo] = React.useState("")

  React.useEffect(() => {
    const ago = formatDistanceToNow(fetched_at, {
      includeSeconds: true,
      addSuffix: true,
    })
    setTimeAgo(ago)
  }, [fetched_at])

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
      <Text>Fetched at: {timeAgo}</Text>
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
  // console.log("fetched list!")
  const repos = await reposList.json()
  const fetched_at = Date.now()
  return {
    props: { repos, username: process.env.GITHUB_USERNAME, fetched_at }, // will be passed to the page component as props
  }
}

export default RepoList
