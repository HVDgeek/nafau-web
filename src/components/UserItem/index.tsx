import { Text, Box, Flex, Checkbox, Avatar } from '@chakra-ui/react'
import { useSubscription } from 'hooks/use-subscription'
import themes from 'styles/alt-themes'

export type UserItemProps = {
  id: string
  name: string
  email: string
  avatar?: string
}

type CheckedProps = {
  target: {
    checked: boolean
  }
}

const UserItem = ({ name, email, avatar, id }: UserItemProps) => {
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
      align="center"
      pr={4}
      py={4}
    >
      <Box
        borderTopStartRadius={themes.border.radius}
        borderBottomLeftRadius={[0, themes.border.radius]}
        borderTopRightRadius={[themes.border.radius, 0]}
        w={70}
        maxW="200px"
        flex="1"
        p={4}
        position="relative"
      >
        <Avatar size="sm" mb={2} name={name} src={avatar} />
      </Box>
      <Flex
        borderTopEndRadius={themes.border.radius}
        borderBottomEndRadius={themes.border.radius}
        w="full"
        alignItems="center"
        justify="space-between"
      >
        <Box w="100%" maxWidth="300px">
          <Text noOfLines={[3, 3]} fontSize="small" mr={4}>
            {name}
          </Text>
          <Text noOfLines={[1, 1]} fontSize="small" color="gray.300" mt={2}>
            {email}
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

export default UserItem
