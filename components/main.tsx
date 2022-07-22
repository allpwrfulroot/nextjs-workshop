import React from "react"
import { styled } from "@nextui-org/react"

const MainContent = styled("main", {
  margin: "$4 $8",
  minHeight: "50vh",
})

function Main({ children }) {
  return <MainContent>{children}</MainContent>
}

export default Main
