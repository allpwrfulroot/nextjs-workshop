import React from "react"
import { styled } from "@nextui-org/react"

const FooterText = styled("p", {
  margin: "$4 $8",
  textAlign: "right",
  fontSize: 12,
})

function Footer() {
  return <FooterText>Made with &#9825; in Boston</FooterText>
}

export default Footer
