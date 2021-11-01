import Link from 'next/link'
import { signOut } from 'next-auth/client'
import { Text, Box, Flex } from '@chakra-ui/react'
import { RiAccountCircleLine, RiLogoutBoxLine } from 'react-icons/ri'
import Dropdown from 'components/Dropdown'
import ProfileHeader from 'components/Menu/ProfileHeader'

export type UserDropdownProps = {
  username?: string | null
  avatar?: string
}

const UserDropdown = ({ username, avatar }: UserDropdownProps) => {
  return (
    <Dropdown title={<ProfileHeader username={username} avatar={avatar} />}>
      <Box as="nav" w="200px" p={2}>
        <Link href="/profile/me" passHref>
          <Flex
            cursor="pointer"
            padding={2}
            alignItems="center"
            justifyContent="flex-start"
            as="a"
            transition="ease-in 0.2s"
            _hover={{
              background: 'purple.500'
            }}
          >
            <RiAccountCircleLine color="#ffffff" />
            <Text fontSize="small" color="white" marginLeft={2} as="span">
              Meu perfil
            </Text>
          </Flex>
        </Link>

        <Flex
          mt={2}
          cursor="pointer"
          padding={2}
          alignItems="center"
          justifyContent="flex-start"
          as="a"
          role="button"
          transition="ease-in 0.2s"
          _hover={{
            background: 'purple.500'
          }}
          onClick={() => {
            signOut()
          }}
        >
          <RiLogoutBoxLine color="#ffffff" />
          <Text fontSize="small" color="white" marginLeft={2} as="span">
            Sair
          </Text>
        </Flex>
      </Box>
    </Dropdown>
  )
}

export default UserDropdown
