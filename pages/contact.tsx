import React, { useState } from "react"
import { Button } from "@nextui-org/react"

export default function Contact() {
  const [email, setEmail] = useState("unknown")

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
    <>
      <p>Contact email: {email}</p>
      <Button onClick={getEmail}>Get our contact email</Button>
    </>
  )
}
