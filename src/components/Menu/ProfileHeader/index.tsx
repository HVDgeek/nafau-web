import { Flex, Avatar, Text } from '@chakra-ui/react'
import IconButton from 'components/IconButton'
import { IoMdArrowDropdown } from 'react-icons/io'

export type ProfileHeaderProps = {
  username?: string | null
  avatar?: string
}

const ProfileHeader = ({ username, avatar }: ProfileHeaderProps) => {
  return (
    <Flex align="center">
      <IconButton ariaLabel="Avatar">
        <Flex alignItems="center">
          <Avatar mr={1} size="xs" name={username || ''} src={avatar || ''} />
          <Text fontSize="small" fontWeight="medium">
            {username}
          </Text>
          <IoMdArrowDropdown />
        </Flex>
      </IconButton>
    </Flex>
  )
}

export default ProfileHeader
