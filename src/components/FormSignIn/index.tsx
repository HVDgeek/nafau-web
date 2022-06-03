import { useRouter } from 'next/router'
import Link from 'next/link'
import { Form, Formik } from 'formik'
import { signIn } from 'next-auth/client'
import { Text, ScaleFade, VStack, useToast } from '@chakra-ui/react'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'

import TextField from 'components/TextField'
import Button from 'components/Button'

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
  const { push, query } = useRouter()
  const toast = useToast()

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Formik
        validationSchema={SignInSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setErrors, resetForm }) => {
          const result = await signIn('credentials', {
            ...values,
            redirect: false,
            callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
          })

          if (result?.url) {
            toast({
              title: `Bem vindo ao NAFAU 😃`,
              // variant: 'left-accent',
              position: 'top-right',
              // description: 'Verifique as suas credenciais e tente novamente',
              status: 'success',
              isClosable: true
            })
            return push(result.url)
          }

          toast({
            title: `E-mail ou senha inválida 😢`,
            // variant: 'left-accent',
            position: 'top-right',
            // description: 'Verifique as suas credenciais e tente novamente',
            status: 'error',
            isClosable: true
          })
          console.error('E-mail ou senha inválida!')

          resetForm()
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
              <Link href="/forgot-password" passHref>
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
              </Link>
            </VStack>
            <Button isLoading={isSubmitting} type="submit" fullWidth>
              Entrar
            </Button>
          </Form>
        )}
      </Formik>
    </ScaleFade>
  )
}

export default FormSignIn
