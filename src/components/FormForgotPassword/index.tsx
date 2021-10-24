import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { ScaleFade, VStack, useToast } from '@chakra-ui/react'
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
  const { push, query } = useRouter()
  const toast = useToast()

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{ email: '' }}
        onSubmit={async (values, { setErrors, resetForm }) => {
          // resetForm()
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
    </ScaleFade>
  )
}

export default FormForgotPassword
