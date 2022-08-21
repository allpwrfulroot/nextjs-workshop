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

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about",
}
