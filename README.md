# SSR

```pages/repositories/index.tsx
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
  const repos = await reposList.json()
  const fetched_at = Date.now()
  return {
    props: { repos, username: process.env.GITHUB_USERNAME, fetched_at }, // will be passed to the page component as props
  }
}

export default RepoList
```

# SSG

```pages/repositories/[repo].tsx
import React from "react"
import { useRouter } from "next/router"
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react"
import { formatDistanceToNow } from "date-fns"

function RepoDetails({ name, stars, language, created_at, fetched_at }) {
  const { isFallback, back } = useRouter()
  const [timeAgo, setTimeAgo] = React.useState("")

  React.useEffect(() => {
    const ago = formatDistanceToNow(fetched_at, {
      includeSeconds: true,
      addSuffix: true,
    })
    setTimeAgo(ago)
  }, [fetched_at])

  if (isFallback) {
    return <Text color="gray.400">Loading...</Text>
  }

  return (
    <Stack spacing={3}>
      <Heading color="blue.500">{name}</Heading>
      <Text>Language: {language}</Text>
      <Text>Stars: {stars}</Text>
      <Text>Created at: {created_at}</Text>
      <Text>Fetched at: {timeAgo}</Text>
      <Box>
        <Button onClick={back}>Back</Button>
      </Box>
    </Stack>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${params.repo}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_KEY}`,
      },
    }
  )
  <!-- if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch repo info, received status ${res.status}`)
  } -->
  const json = await res.json()
  return {
    props: {
      stars: json.stargazers_count,
      name: json.name,
      language: json.language,
      created_at: json.created_at,
      fetched_at: Date.now(),
    },
    // revalidate: 5000,
  }
}

export async function getStaticPaths() {
  const reposList = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?sort=created&direction=desc`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_KEY}`,
      },
    }
  )
  const json = await reposList.json()
  const topThree = json.length ? json.splice(0, 3) : []
  const topPaths = topThree.map((t) => ({ params: { repo: t.name } }))
  return {
    paths: topPaths, // prerendering the first 3 repos from list
    fallback: true, // true because some possible paths not prerendered
  }
}

export default RepoDetails
```
