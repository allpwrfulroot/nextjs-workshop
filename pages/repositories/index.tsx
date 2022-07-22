import React from "react"
import Link from "next/link"

function RepoList({ repos }) {
  return (
    <>
      <h3>Vercel has {repos.length} repos on GitHub:</h3>
      <ul>
        {repos.map((item) => (
          <li key={item.id}>
            <Link href={`/repositories/${item.name}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getServerSideProps() {
  const reposList = await fetch("https://api.github.com/orgs/vercel/repos")
  const repos = await reposList.json()
  return {
    props: { repos }, // will be passed to the page component as props
  }
}

export default RepoList
