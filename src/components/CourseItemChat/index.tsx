import { Text, Box, Flex } from '@chakra-ui/react'
import { shade } from 'polished'
import themes from 'styles/alt-themes'
import { stringToColour } from 'utils/stringToColor'
import { FiChevronRight } from 'react-icons/fi'
import { useForum } from 'hooks/use-forum'

export type CourseItemChatProps = {
  title: string
  code?: string
  id: string
  onSelect: (id: string, title: string, code?: string) => void
}

const CourseItemChat = ({ title, code, id, onSelect }: CourseItemChatProps) => {
  const color = shade(0.7, stringToColour(title))
  const { turmaSelected } = useForum()

  return (
    <Flex
      w="full"
      maxW="400px"
      bg={turmaSelected.id === id ? shade(0.7, '#805AD5') : 'gray.800'}
      flexDir="row"
      boxShadow={'2xl'}
      mb={2}
      borderRadius={themes.border.radius}
      cursor="pointer"
      _hover={{
        backgroundColor: shade(0.7, '#805AD5')
      }}
      onClick={() => onSelect(id, title, code)}
    >
      <Box
        borderTopStartRadius={themes.border.radius}
        borderBottomLeftRadius={[0, themes.border.radius]}
        borderTopRightRadius={[themes.border.radius, 0]}
        bg={color}
        w={2}
        // maxW="10px"
        flex="1"
        p={0.5}
        position="relative"
      />
      <Flex
        borderTopEndRadius={themes.border.radius}
        borderBottomEndRadius={themes.border.radius}
        p={4}
        pr={2}
        pl={2}
        w="full"
        alignItems="center"
        justify="space-between"
      >
        <Box w="100%" maxWidth="200px">
          <Text color="gray.100" noOfLines={[2, 2]} fontSize="small" mr={4}>
            {title} - {code}
          </Text>
        </Box>
        <Box>
          <FiChevronRight size={18} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default CourseItemChat
