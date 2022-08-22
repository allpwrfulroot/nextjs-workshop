# API Route - non-page lambdas

https://nextjs.org/docs/api-routes/introduction

> API routes provide a solution to build your API with Next.js.

> Any file inside the folder pages/api is mapped to /api/\* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

NOTES: Can add as many new functions under pages/api as you like

```pages/api/contact.ts
export default function handler(req, res) {
  res.status(200).json({ email: process.env.SECRET_EMAIL })
}
```

```components/contact.tsx
import React, { useState } from "react"
import { Button, Text, VStack } from "@chakra-ui/react"

export default function Contact() {
  const [email, setEmail] = useState("")

  const getEmail = async () => {
    try {
      const res = await fetch("/api/contact")
      const json = await res.json()
      setEmail(json.email)
    } catch (err) {
      console.log("err: ", err)
    }
  }

  return (
    <VStack spacing={2} m="auto">
      <Button onClick={getEmail}>Get the secret email</Button>
      <Text>{email}</Text>
    </VStack>
  )
}
```

```pages/about.mdx
import { Contact } from "../components"
...
<Contact />
```
