import React, { memo } from "react"
import { styled, Spacer } from "@nextui-org/react"

import NavLink from "./nav-link"

const Heading = styled("h1", {
  margin: "$4 $8",
})

const Nav = styled("nav", {
  display: "flex",
})

function Header() {
  return (
    <>
      <Heading>Hello, {process.env.NEXT_PUBLIC_WORKSHOP_AUDIENCE}</Heading>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/repositories">Vercel</NavLink>
      </Nav>
    </>
  )
}

export default memo(Header)
