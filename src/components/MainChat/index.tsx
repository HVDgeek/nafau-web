import { Text, Box, Flex } from '@chakra-ui/react'
import Chats from 'components/Chats'
import TextField from 'components/TextField'
import { Form, Formik } from 'formik'
import Button from 'components/Button'
import * as Yup from 'yup'

export type MainChatProps = {
  children: React.ReactNode
}

const ChatsSchema = Yup.object().shape({
  message: Yup.string().required('A mensagen é obrigatório 😜')
})

const MainChat = () => {
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
          Probabilidade e Estatíscica
        </Text>
      </Box>
      <Chats />
      {/* Message Input */}
      <Flex flexDir="column">
        <Formik
          // validationSchema={ChatSchema}
          initialValues={{ message: '' }}
          onSubmit={async (values, { setErrors, resetForm }) => {
            console.log('MESSAGE', values.message)
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
    </Box>
  )
}

export default MainChat
