import { Text, ScaleFade, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { Form, Formik } from 'formik'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'

import * as Yup from 'yup'

export type FormSignInProps = {
  children: React.ReactNode
}

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    // .min(8, "Senha precisa ter pelo menos 8 caracteres 🤪")
    .required('A senha é obrigatória 😜'),
  email: Yup.string()
    .email('E-mail inválido 😜')
    .required('O e-mail é obrigatório 😜')
})

const FormSignIn = () => {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setErrors, resetForm }) => {
          // resetForm();
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
              <TextField
                // label="Senha"
                placeholder="Senha"
                name="password"
                IconField={HiOutlineLockClosed}
                isPasswordField
                withIcon={true}
              />
              {/* Depois colocar em volta de um Link*/}
              <Text
                color="gray.200"
                _hover={{
                  color: 'gray.300'
                }}
                fontSize="small"
                alignSelf="flex-end"
                as="a"
                href="#"
              >
                Esqueceu sua senha ?
              </Text>
            </VStack>
            <Button type="submit" fullWidth>
              Entrar
            </Button>
          </Form>
        )}
      </Formik>
    </ScaleFade>
  )
}

export default FormSignIn
