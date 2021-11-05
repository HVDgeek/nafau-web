import React, { useRef, useEffect } from 'react'
import { Text, Flex, Box, Tag, Avatar, TagLabel } from '@chakra-ui/react'
import { shade } from 'polished'

export type ChatsProps = {
  children: React.ReactNode
}

type ChatProps = {
  message: string
}

const Chat = ({ message }: ChatProps) => {
  return (
    <>
      <Box
        fontSize="small"
        margin="1rem 0"
        color="#fff"
        padding="1rem"
        background={shade(0.5, '#805AD5')}
        maxWidth="90%"
        borderTopRightRadius="10px"
        borderBottomRightRadius="10px"
      >
        <Text>{message}</Text>
        <Tag size="md" bg="transparent" borderRadius="full">
          <Avatar
            src="https://avatars.githubusercontent.com/u/34204904?v=4"
            size="2xs"
            name="Hiduino Domingos"
            ml={-1}
            mr={2}
          />
          <TagLabel
            isTruncated
            maxW="120px"
            color="gray.300"
            fontSize="xx-small"
            fontWeight="normal"
          >
            Hiduino Domingos
          </TagLabel>
        </Tag>
      </Box>
    </>
  )
}

const Chats = () => {
  const ref = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [])

  const scrollToBottom = () => {
    ref.current.scrollTop = ref.current.scrollHeight
  }

  return (
    <Flex
      ref={ref}
      flex="1 1 0"
      flexDir="column"
      alignItems="flex-start"
      width="85%"
      height="80%"
      margin="0 auto"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          width: '5px'
        },
        '&::-webkit-scrollbar-track': {
          width: '5px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#805AD5',
          borderRadius: '24px'
        }
      }}
    >
      <Chat message="Mensagem" />
      <Chat message="Mensagem" />
      <Chat message="Mensagem" />
      <Chat message="Mensagem" />
      <Chat message="Mensagem" />
      <Chat message="Mensagem" />
      <Chat message="Mensagem" />
      <Chat message="Mensagem 3" />
      <Chat message="Mensagem" />
      <Chat message="Mensagem" />
      <Chat message="Tenho uma dúvida muito grande. Quem veio primeiro entre o ovo e a galinha ? kkkkkk" />
    </Flex>
  )
}

export default Chats
