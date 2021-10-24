import Link from 'next/link'
import {
  Text,
  Box,
  ScaleFade,
  Grid,
  useBreakpointValue
} from '@chakra-ui/react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Form, Formik } from 'formik'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'
import themes from 'styles/alt-themes'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  })

  return (
    <Box borderRadius={themes.border.radius} backgroundColor="gray.800" p={4}>
      <Text mb={4} fontWeight="bold" fontSize="md">
        Meu perfil
      </Text>
      <ScaleFade initialScale={0.9} in={true}>
        <Formik
          // validationSchema={SignInSchema}
          initialValues={{
            name: username,
            email: email,
            password: ''
          }}
          onSubmit={async (values, { setErrors, resetForm }) => {
            // resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid
                templateColumns={`repeat(${isDesktopVersion ? 2 : 1}, 1fr)`}
                maxWidth="100%"
                gap={4}
                mb={8}
              >
                <TextField
                  label="Nome do usuário"
                  name="name"
                  placeholder="Nome do usuário"
                />
                <TextField
                  label="E-mail"
                  name="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  IconField={HiOutlineMail}
                  withIcon={true}
                  disabled
                />
              </Grid>
              <Box display="flex" justifyContent="flex-end">
                <Box marginRight={2}>
                  <Link href={`/forgot-password?email=${email}`} passHref>
                    <Button
                      type="button"
                      fullWidth={isDesktopVersion ? false : true}
                      size="sm"
                      variant="outline"
                      as="a"
                    >
                      Alterar minha senha
                    </Button>
                  </Link>
                </Box>
                <Button
                  type="submit"
                  fullWidth={isDesktopVersion ? false : true}
                  size="sm"
                >
                  Salvar
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </ScaleFade>
    </Box>
  )
}

export default FormProfile
