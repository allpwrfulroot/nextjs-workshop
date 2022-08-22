import React, { useState } from "react"
import { Text, VStack } from "@chakra-ui/react"
import { Button } from "../stories/Button"

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
      <Button onClick={getEmail} label="Get the secret email" />
      <Text>{email}</Text>
    </VStack>
  )
}
