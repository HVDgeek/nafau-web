import { useState } from 'react'
import { Form, Formik } from 'formik'
import {
  ScaleFade,
  VStack,
  useToast,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  Box,
  CloseButton
} from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi'

import TextField from 'components/TextField'
import Button from 'components/Button'

import * as Yup from 'yup'

export type FormForgotPasswordProps = {
  children: React.ReactNode
}

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido 😜')
    .required('O e-mail é obrigatório 😜')
})

const FormForgotPassword = () => {
  const toast = useToast()
  const [success, setSuccess] = useState(false)

  return (
    <ScaleFade initialScale={0.9} in={true}>
      {success ? (
        <Alert status="success" variant="solid">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>E-mail enviado com sucesso 😃</AlertTitle>
            <AlertDescription display="block">
              Verifique seu e-mail, um link para alteração de senha foi enviado
              para seu e-mail
            </AlertDescription>
          </Box>
          <CloseButton
            onClick={() => setSuccess(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      ) : (
        <Formik
          validationSchema={SignInSchema}
          initialValues={{ email: '' }}
          onSubmit={async (values, { setErrors, resetForm }) => {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              }
            )

            const data = await response.json()

            if (data.error) {
              toast({
                title: `Não foi possível enviar a solicitação 😢`,
                // variant: 'left-accent',
                position: 'top-right',
                description: 'Verifique o e-mail informado e tente novamente',
                status: 'error',
                isClosable: true
              })
            } else {
              toast({
                title: `E-mail de solicitação enviado com sucesso 😃`,
                // variant: 'left-accent',
                position: 'top-right',

                status: 'success',
                isClosable: true
              })
              setSuccess(true)
              resetForm()
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <VStack mb={8}>
                <TextField
                  // label="E-mail"
                  name="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  IconField={HiOutlineMail}
                  withIcon={true}
                />
              </VStack>
              <Button isLoading={isSubmitting} type="submit" fullWidth>
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </ScaleFade>
  )
}

export default FormForgotPassword
