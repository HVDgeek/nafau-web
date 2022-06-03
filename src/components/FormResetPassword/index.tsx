import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { ScaleFade, VStack, useToast } from '@chakra-ui/react'
import { HiOutlineLockClosed } from 'react-icons/hi'

import TextField from 'components/TextField'
import Button from 'components/Button'

import * as Yup from 'yup'
import { signIn } from 'next-auth/client'

export type FormResetPasswordProps = {
  children: React.ReactNode
}

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Senha precisa ter pelo menos 8 caracteres 🤪')
    .required('A senha é obrigatória 😜'),
  confirmPassword: Yup.string()
    .required('A confirmação de senha é obrigatória 😜')
    .oneOf([Yup.ref('password'), null], 'As Senhas precisam ser iguais 🤪')
})

const FormResetPassword = () => {
  const { push, query } = useRouter()
  const toast = useToast()

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Formik
        validationSchema={ResetPasswordSchema}
        initialValues={{ password: '', confirmPassword: '' }}
        onSubmit={async (values, { setErrors, resetForm }) => {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                password: values.password,
                passwordConfirmation: values.confirmPassword,
                code: query.code
              })
            }
          )

          const data = await response.json()

          if (data.error) {
            toast({
              title: `Não foi possível alterar a senha 😢`,
              // variant: 'left-accent',
              position: 'top-right',
              description: 'Verifique a tua conexão ou tente novamente',
              status: 'error',
              isClosable: true
            })
          } else {
            toast({
              title: `Senha alterada com sucesso 😃`,
              // variant: 'left-accent',
              position: 'top-right',

              status: 'success',
              isClosable: true
            })

            await signIn('credentials', {
              email: data.user.email,
              password: values.password,
              callbackUrl: '/'
            })

            resetForm()
          }

          // resetForm()
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <VStack mb={8}>
              <TextField
                label="Nova senha"
                placeholder="Senha"
                name="password"
                IconField={HiOutlineLockClosed}
                isPasswordField
                withIcon={true}
              />
              <TextField
                label="Confirmar nova senha"
                placeholder="Confirmar nova senha"
                name="confirmPassword"
                IconField={HiOutlineLockClosed}
                isPasswordField
                withIcon={true}
              />
            </VStack>
            <Button isLoading={isSubmitting} type="submit" fullWidth>
              Mudar senha
            </Button>
          </Form>
        )}
      </Formik>
    </ScaleFade>
  )
}

export default FormResetPassword
