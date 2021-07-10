import { Text, Flex, HStack, Box } from '@chakra-ui/react'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'

export type FooterProps = {
  children: React.ReactNode
}

const Footer = () => {
  return (
    <Flex flexDir="column" align="center" w="300px" mt={20}>
      <Box>
        <Text alignSelf="end" fontSize="x-small" textAlign="center" as="span">
          NAFAU 2021 © Todos os Direitos Reservados
        </Text>
      </Box>
      <HStack>
        <a
          href="https://www.instagram.com/nafau_oficial"
          target="_blank"
          rel="noopenner, noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/nafauoficial"
          target="_blank"
          rel="noopenner, noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.youtube.com/channel/UCF3sUk6XYALniAdpSTnNK6A/featured"
          target="_blank"
          rel="noopenner, noreferrer"
        >
          <FaYoutube />
        </a>
      </HStack>
    </Flex>
  )
}

const link = {
  width: 'fit-content',
  height: 'fit-content'
}

export default Footer
