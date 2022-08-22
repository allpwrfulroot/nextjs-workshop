import React from "react"
import { Button as ChakraButton } from "@chakra-ui/react"

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  return (
    <ChakraButton
      colorScheme="blue"
      bgGradient={primary ? undefined : "linear(to-l, #7928CA, #FF0080)"}
      {...props}
    >
      {label}
    </ChakraButton>
  )
}
