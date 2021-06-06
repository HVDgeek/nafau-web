import { Avatar, Box, Center, Text, Badge, VStack } from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'

import Button from 'components/Button'
import IconButton from 'components/IconButton'
import themes from 'styles/alt-themes'

export type UserCardProps = {
  name: string
  email: string
  username?: string
  avatar?: string
  isActive: boolean
}

const UserCard = ({
  name,
  email,
  username,
  avatar,
  isActive
}: UserCardProps) => {
  return (
    <Center py={6}>
      <Box
        position="relative"
        maxW={'300px'}
        w={'full'}
        bg="gray.800"
        boxShadow={'2xl'}
        p={4}
        textAlign={'center'}
        borderRadius={themes.border.radius}
      >
        <Avatar size="2xl" mb={2} name={name} src={avatar} />
        <VStack mb={8} spacing={1}>
          <Box mb={2}>
            <Text isTruncated fontSize="sm">
              {name}
            </Text>
            <Text fontSize="small" color="gray.300">
              {email}
            </Text>
            {username && (
              <Text fontSize="small" color="gray.300">
                {username}
              </Text>
            )}
          </Box>
          <Badge variant="outline" colorScheme={isActive ? 'green' : 'orange'}>
            {isActive ? 'ATIVO' : 'BLOQUEADO'}
          </Badge>
        </VStack>
        <Box p={2} position="absolute" top={0} right={0}>
          <IconButton ariaLabel="Remover usuário">
            <AiOutlineClose size={18} />
          </IconButton>
        </Box>
        <Button size="sm" fullWidth>
          Ver perfil
        </Button>
      </Box>
    </Center>
  )
}

export default UserCard
