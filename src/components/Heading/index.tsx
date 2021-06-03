import { Text, Box } from '@chakra-ui/react'

export type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <Box>
      <Text>Heading</Text>
    </Box>
  )
}

export default Heading
