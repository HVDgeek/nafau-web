import { Text, Flex, Tooltip } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import themes from 'styles/alt-themes'

export type ShowMoreProps = {
  onClick: () => void
}

const ShowMore = ({ onClick }: ShowMoreProps) => {
  return (
    <Tooltip
      fontSize="small"
      label="Carregar mais usuários!"
      aria-label="A tooltip"
    >
      <Flex mt={8} justify="center">
        <Flex
          onClick={onClick}
          flexDir="column"
          align="center"
          cursor="pointer"
        >
          <Text color={themes.colors.lightGray} fontSize="sm">
            MOSTAR MAIS
          </Text>
          <MdKeyboardArrowDown color={themes.colors.primary} size={20} />
        </Flex>
      </Flex>
    </Tooltip>
  )
}

export default ShowMore
