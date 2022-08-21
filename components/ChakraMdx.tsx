import { chakra } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"

const MDXComponents = {
  h1: function Heading1(props) {
    return (
      <chakra.h1
        fontSize="2xl"
        fontWeight="extrabold"
        lineHeight="taller"
        color="blue.500"
        {...props}
      />
    )
  },
  h3: function Heading3(props) {
    return (
      <chakra.h3
        fontSize="xl"
        fontWeight="bold"
        lineHeight="taller"
        color="blue.500"
        {...props}
      />
    )
  },
  p: function Paragraph(props) {
    return (
      <chakra.p
        fontSize="md"
        my="1"
        color="gray.500"
        maxW="container.sm"
        {...props}
      />
    )
  },
  ul: function UnorderedList(props) {
    return <chakra.ul marginLeft="6" {...props} />
  },
  li: function ListItem(props) {
    return <chakra.li fontSize="md" color="gray.800" {...props} />
  },
}

type ChakraMdxProps = {
  children: React.ReactNode
}

const ChakraMdx = ({ children }: ChakraMdxProps) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>
}

export default ChakraMdx
