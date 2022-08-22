import React from "react"
import { useRouter } from "next/router"
import { Heading, Stack, Text } from "@chakra-ui/react"

function RepoDetails({ name, stars, language, created_at }) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <Text color="gray.400">Loading...</Text>
  }

  return (
    <Stack spacing={3}>
      <Heading color="blue.500">{name}</Heading>
      <Text>Language: {language}</Text>
      <Text>Stars: {stars}</Text>
      <Text>Created at: {created_at}</Text>
    </Stack>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  // console.log("params", params)
  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${params.repo}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_KEY}`,
      },
    }
  )
  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch repo info, received status ${res.status}`)
  }
  const json = await res.json()
  // console.log("found: ", json)
  return {
    props: {
      stars: json.stargazers_count,
      name: json.name,
      language: json.language,
      created_at: json.created_at,
    },
    revalidate: 5000,
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
