import Link from 'next/link'
import { Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { Mug } from 'react-kawaii'
import Button from 'components/Button'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => {
  const size = useBreakpointValue({
    base: 70,
    md: 100
  })

  return (
    <VStack>
      <Mug size={size} mood="ko" color="#9F7AEA" />
      <Text color="gray.200" fontWeight="bold">
        {title}
      </Text>
      <Text color="gray.200" fontSize="sm">
        {description}
      </Text>
      {hasLink && (
        <Link href="/" passHref>
          <Button size="sm" as="a">
            Voltar para o Início
          </Button>
        </Link>
      )}
    </VStack>
  )
}

export default Empty
