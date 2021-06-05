import { Flex, Box, Avatar, Text } from '@chakra-ui/react'
import IconButton from 'components/IconButton'

export type ProfileHeaderProps = {
  showProfileData?: boolean
}

const ProfileHeader = ({ showProfileData }: ProfileHeaderProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text fontSize="sm">Hiduíno Domingos</Text>
          <Text color="gray.300" fontSize="small">
            hvduino@gmail.com
          </Text>
        </Box>
      )}
      <IconButton ariaLabel="Avatar">
        <Avatar
          size="sm"
          name="Hiduino Domingos"
          src="https://avatars.githubusercontent.com/u/34204904?v=4"
        />
      </IconButton>
    </Flex>
  )
}

export default ProfileHeader
