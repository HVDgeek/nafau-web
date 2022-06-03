import { Text, Box, Flex, Checkbox } from '@chakra-ui/react'
import { shade } from 'polished'
import themes from 'styles/alt-themes'
import { stringToColour } from 'utils/stringToColor'
import { useSubscription } from 'hooks/use-subscription'

export type CourseItemProps = {
  title: string
  code?: string
  id: string
}

type CheckedProps = {
  target: {
    checked: boolean
  }
}

const CourseItem = ({ title, code, id }: CourseItemProps) => {
  const color = shade(0.7, stringToColour(title))
  const { addUser, deleteUser } = useSubscription()

  const handleCheck = ({ target }: CheckedProps) => {
    if (target.checked) {
      addUser({ id: id })
    }

    if (!target.checked) {
      deleteUser({ id: id })
    }
  }

  return (
    <Flex
      w="full"
      maxW="400px"
      bg="gray.800"
      flexDir="row"
      boxShadow={'2xl'}
      borderRadius={themes.border.radius}
    >
      <Box
        borderTopStartRadius={themes.border.radius}
        borderBottomLeftRadius={[0, themes.border.radius]}
        borderTopRightRadius={[themes.border.radius, 0]}
        bg={color}
        w={70}
        maxW="60px"
        flex="1"
        p={4}
        position="relative"
      />
      <Flex
        borderTopEndRadius={themes.border.radius}
        borderBottomEndRadius={themes.border.radius}
        p={4}
        w="full"
        alignItems="center"
        justify="space-between"
      >
        <Box w="100%" maxWidth="300px">
          <Text noOfLines={[3, 3]} fontSize="small" mr={4}>
            {title} - {code}
          </Text>
        </Box>
        <Checkbox
          onChange={handleCheck}
          size="lg"
          borderColor="gray.400"
          colorScheme="purple"
        />
      </Flex>
    </Flex>
  )
}

export default CourseItem
