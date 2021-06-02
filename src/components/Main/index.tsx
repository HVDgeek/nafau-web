import { Text, Button } from '@chakra-ui/react'

export interface Props {
  title: string
  description: string
}

const Main = ({ title, description }: Props) => {
  return (
    <>
      <Text as="h1">{title}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text color="red.500">{description}</Text>
      <Button p={4} colorScheme="pink">
        OKOK
      </Button>
    </>
  )
}

export default Main
