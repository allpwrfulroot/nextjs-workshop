import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { styled, Link as StyledLink } from "@nextui-org/react"

const SpacedNavLink = styled(StyledLink, {
  padding: "$4 $8",
  borderRadius: "$base",
  "&:hover": {
    color: "$primary",
    backgroundColor: "$primaryLightHover",
  },
  "&:not(:first-child)": {
    marginLeft: 20,
  },
})

export default function NavLink({ href, children }) {
  const { pathname } = useRouter()
  const path = pathname.split("/")[1]
  const isActive = path ? href.includes(path) : href === "/"
  return (
    <Link href={href}>
      <SpacedNavLink color={isActive ? "primary" : "text"}>
        {children}
      </SpacedNavLink>
    </Link>
  )
}
