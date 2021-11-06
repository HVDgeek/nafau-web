import { Text, Box, Flex } from '@chakra-ui/react'
import Chats from 'components/Chats'
import TextField from 'components/TextField'
import { Form, Formik } from 'formik'
import Button from 'components/Button'
import { Backpack } from 'react-kawaii'
import { useForum } from 'hooks/use-forum'
import * as Yup from 'yup'

export type MainChatProps = {
  title?: string
  id?: string
}

const ChatsSchema = Yup.object().shape({
  message: Yup.string().required('A mensagen é obrigatório 😜')
})

const MainChat = ({
  title = 'Nenhuma turma selecionada',
  id = ''
}: MainChatProps) => {
  const { sendMessage } = useForum()

  return (
    <Box flex="1 1 0" bgColor="gray.800" height="100%">
      <Box width="100%" borderBottom="2px solid #181b23">
        <Text
          width="500px"
          alignSelf="center"
          fontWeight="bold"
          color="gray.300"
          fontSize="medium"
          p={4}
          isTruncated
        >
          {title}
        </Text>
      </Box>
      {id && <Chats />}
      {/* Message Input */}
      {id && (
        <Flex flexDir="column">
          <Formik
            // validationSchema={ChatSchema}
            initialValues={{ message: '' }}
            onSubmit={async (values, { setErrors, resetForm }) => {
              sendMessage(values.message)
              resetForm()
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Flex
                  mx={10}
                  alignItems="flex-end"
                  justifyContent="space-between"
                >
                  <TextField
                    // label="Código da turma"
                    name="message"
                    placeholder="Escreva uma mensagem"
                  />
                  <Box ml={4}>
                    <Button type="submit" size="sm">
                      Enviar
                    </Button>
                  </Box>
                </Flex>
              </Form>
            )}
          </Formik>
        </Flex>
      )}
      {!id && (
        <Flex
          flex="1 1 0"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
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
          <Backpack size={250} mood="happy" color="#9F7AEA" />
          <Text mt={2} color="gray.500">
            Selecione uma turma para iniciar a conversa
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default MainChat
