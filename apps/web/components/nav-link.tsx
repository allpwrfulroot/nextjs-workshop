import React from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { Link as ChakraLink } from "@chakra-ui/react"

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const { pathname } = useRouter()
  const path = pathname.split("/")[1]
  const isActive = path ? href.includes(path) : href === "/"
  return (
    <NextLink href={href} passHref>
      <ChakraLink
        color={isActive ? "blue.600" : "gray.500"}
        p={2}
        marginBottom="-2px !important"
        borderBottom="2px"
        borderColor={isActive ? "blue.600" : "transparent"}
        _hover={{
          textDecoration: "none",
          color: "blue.400",
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}
