import Link from 'next/link'
import {
  Avatar,
  Box,
  Tooltip,
  Text,
  Badge,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'

import Button from 'components/Button'
import IconButton from 'components/IconButton'
import themes from 'styles/alt-themes'
import { Base64 } from 'js-base64'

export type UserCardProps = {
  id: string
  name: string
  email: string
  username?: string
  avatar?: string
  isActive: boolean
  onRemove: (id: string) => void
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
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <Text fontSize="sm" noOfLines={2}>
            {name}
          </Text>
          <Text fontSize="small" color="gray.300">
            {email}
          </Text>
          {!!username && (
            <Text fontSize="small" color="gray.300">
              @{username?.split('*#nafau#*')[0] || username}
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
          <IconButton
            onClick={() => {
              onOpen()
            }}
            ariaLabel="Remover usuário"
          >
            <AiOutlineClose size={18} />
          </IconButton>
        </Box>
      </Tooltip>
      <Link href={`/manager/${route}/${Base64.encode(`${id}`)}`} passHref>
        <Button as="a" color="purple" size="sm" fullWidth>
          Ver perfil
        </Button>
      </Link>

      <Modal onClose={onClose} size="md" isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bgColor="gray.800">
          <ModalHeader
            fontWeight="medium"
            fontSize="medium"
            bgColor="gray.800"
            borderRadius={themes.border.radius}
          >
            Remover usuário
          </ModalHeader>
          <ModalCloseButton _focus={{ shadow: 'none' }} />
          <ModalBody bgColor="gray.800" borderRadius={themes.border.radius}>
            <Text fontWeight="light" mr={2}>
              Tem certeza que deseja remover {name} ?
            </Text>
          </ModalBody>
          <ModalFooter bgColor="gray.800" borderRadius={themes.border.radius}>
            <Button color="red" size="xs" onClick={onClose}>
              Não
            </Button>
            <Box mr={2} />
            <Button
              size="xs"
              onClick={() => {
                onRemove(id)
                onClose()
              }}
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default UserCard
