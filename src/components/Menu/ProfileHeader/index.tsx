import { Flex, Avatar, Text } from '@chakra-ui/react'
import IconButton from 'components/IconButton'
import { IoMdArrowDropdown } from 'react-icons/io'

export type ProfileHeaderProps = {
  username: string
}

const ProfileHeader = ({ username }: ProfileHeaderProps) => {
  return (
    <Flex align="center">
      <IconButton ariaLabel="Avatar">
        <Flex alignItems="center">
          <Avatar
            mr={1}
            size="xs"
            name="Hiduino Domingos"
            src="https://avatars.githubusercontent.com/u/34204904?v=4"
          />
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
