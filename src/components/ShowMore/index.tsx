import { Text, Flex, Tooltip } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import themes from 'styles/alt-themes'

export type ShowMoreProps = {
  onClick: () => void
  tooltipText?: string
}

const ShowMore = ({
  onClick,
  tooltipText = 'Carregar mais usuários!'
}: ShowMoreProps) => {
  return (
    <Tooltip fontSize="small" label={tooltipText} aria-label="A tooltip">
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
