import { SimpleGrid } from '@chakra-ui/react'

export type GridProps = {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => {
  return (
    <SimpleGrid minChildWidth="300px" spacing={4}>
      {children}
    </SimpleGrid>
  )
}

export default Grid
