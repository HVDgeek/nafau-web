import Link from 'next/link'
import { Avatar, Box, Tooltip, Text, Badge, VStack } from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'

import Button from 'components/Button'
import IconButton from 'components/IconButton'
import themes from 'styles/alt-themes'

export type UserCardProps = {
  id: string
  name: string
  email: string
  username?: string
  avatar?: string
  isActive: boolean
  onRemove?: () => void
  route?: string
}

const UserCard = ({
  id,
  name,
  email,
  username,
  avatar,
  isActive,
  onRemove,
  route
}: UserCardProps) => {
  return (
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
      <Avatar size="xl" mb={2} name={name} src={avatar} />
      <VStack mb={8} spacing={1}>
        <Box mb={2}>
          <Text isTruncated fontSize="sm">
            {name}
          </Text>
          <Text fontSize="small" color="gray.300">
            {email}
          </Text>
          {!!username && (
            <Text fontSize="small" color="gray.300">
              @{username}
            </Text>
          )}
        </Box>
        <Badge variant="outline" colorScheme={isActive ? 'green' : 'orange'}>
          {isActive ? 'ATIVO' : 'BLOQUEADO'}
        </Badge>
      </VStack>
      <Tooltip
        fontSize="small"
        label="Remover este usuário!"
        aria-label="A tooltip"
      >
        <Box p={2} position="absolute" top={0} right={0}>
          <IconButton onClick={onRemove} ariaLabel="Remover usuário">
            <AiOutlineClose size={18} />
          </IconButton>
        </Box>
      </Tooltip>
      <Link href={`/manager/${route}/${id}`} passHref>
        <Button as="a" color="purple" size="sm" fullWidth>
          Ver perfil
        </Button>
      </Link>
    </Box>
  )
}

export default UserCard
