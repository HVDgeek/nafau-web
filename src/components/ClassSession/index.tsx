import { Text, Flex } from '@chakra-ui/react'

export type ClassSessionProps = {
  children: React.ReactNode
  title?: string
  color?: string
  fontWeight?: string
}

const ClassSession = ({
  children,
  title,
  color,
  fontWeight
}: ClassSessionProps) => {
  return (
    <Flex alignItems="center">
      {children}
      <Text ml={2} color={color} fontWeight={fontWeight}>
        {title}
      </Text>
    </Flex>
  )
}

export default ClassSession
