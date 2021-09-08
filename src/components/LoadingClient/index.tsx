import { Text, Flex, Spinner } from '@chakra-ui/react'
import themes from 'styles/alt-themes'

export type LoadingClientProps = {
  title: string
}

const LoadingClient = ({ title }: LoadingClientProps) => {
  return (
    <Flex alignItems="center">
      <Spinner
        marginRight={2}
        emptyColor="gray.200"
        color={themes.colors.secondary}
        size="md"
      />
      <Text color="gray.200" fontSize="sm">
        Buscando {title}...
      </Text>
    </Flex>
  )
}

export default LoadingClient
