import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ChakraProvider } from "@chakra-ui/react"

import { Button } from "./Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <ChakraProvider>
    <Button {...args} />
  </ChakraProvider>
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  label: "Button",
}
