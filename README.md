# Middleware - modify a request

https://nextjs.org/docs/advanced-features/middleware

> Middleware allows you to run code before a request is completed, then based on the incoming request, you can modify the response by rewriting, redirecting, adding headers, or setting cookies.

> Middleware runs before cached content, so you can personalize static files and pages. Common examples of Middleware would be authentication, A/B testing, localized pages, bot protection, and more. Regarding localized pages, you can start with i18n routing and implement Middleware for more advanced use cases.

NOTES: One middleware function per app, but can have many different responses. Be careful of complexity!

```./middleware.ts
import { NextResponse, userAgent } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { device } = userAgent(request)
  const { pathname } = request.nextUrl
  if (device.type === "mobile") {
    return NextResponse.redirect(new URL("/mobile", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: "/about",
}

```

# Revalidate - push an update

https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration

> Incremental Static Regeneration (ISR) enables you to use static-generation on a per-page basis, without needing to rebuild the entire site

```./pages/api/revalidate.ts
export default async function handler(req, res) {
  console.log("req?", req)
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" })
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(`/repositories/${req.query.name}`)
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating")
  }
}
```

```./pages/mobile.tsx
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
```
