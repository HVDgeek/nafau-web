import { Box } from '@chakra-ui/react'

export type TextContentProps = {
  children: string
}

const TextContent = ({ children }: TextContentProps) => {
  return (
    <Box px={4}>
      <Box fontSize="sm" dangerouslySetInnerHTML={{ __html: children }} />
    </Box>
  )
}

export default TextContent
