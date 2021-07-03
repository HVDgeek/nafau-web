import { Flex, Avatar } from '@chakra-ui/react'
import IconButton from 'components/IconButton'
import { IoMdArrowDropdown } from 'react-icons/io'

const ProfileHeader = () => {
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
          <IoMdArrowDropdown />
        </Flex>
      </IconButton>
    </Flex>
  )
}

export default ProfileHeader
