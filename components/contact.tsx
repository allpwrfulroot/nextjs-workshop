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
      <Button onClick={getEmail} colorScheme="blue">
        Get the secret contact email
      </Button>
      <Text>{email}</Text>
    </VStack>
  )
}
