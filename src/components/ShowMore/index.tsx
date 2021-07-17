import { Text, Flex } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import themes from 'styles/alt-themes'

export type ShowMoreProps = {
  onClick: () => void
}

const ShowMore = ({ onClick }: ShowMoreProps) => {
  return (
    <Flex mt={8} justify="center">
      <Flex onClick={onClick} flexDir="column" align="center" cursor="pointer">
        <Text color={themes.colors.lightGray} fontSize="sm">
          MOSTAR MAIS
        </Text>
        <MdKeyboardArrowDown color={themes.colors.primary} size={20} />
      </Flex>
    </Flex>
  )
}

export default ShowMore
