import {
  Text,
  Box,
  ScaleFade,
  Grid,
  useBreakpointValue,
  FormControl,
  Select,
  FormLabel,
  Switch
} from '@chakra-ui/react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Form, Formik, Field, FormikHelpers } from 'formik'
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiCalendar,
  HiOutlinePhone
} from 'react-icons/hi'
import themes from 'styles/alt-themes'

function formatProfile(name: string) {
  if (name === 'STUDENT') {
    return 'Estudante'
  }
  if (name === 'TEACHER_ONLY') {
    return 'Apenas Professor'
  }
  if (name === 'TEACHER_MANAGER') {
    return 'Professor Gerente'
  }
  if (name === 'ATTENDANT') return 'Atendente'
  return ''
}

type FieldType = {
  field: any
}

export type ProfileProps = {
  id: string
  name: string
}

export type FormUserProps = {
  initialValues: any
  createForm: boolean
  perfis: ProfileProps[]
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
}

const FormUser = ({
  onSubmit,
  initialValues,
  createForm,
  perfis
}: FormUserProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  })

  return (
    <Box borderRadius={themes.border.radius} backgroundColor="gray.800" p={4}>
      {/* <Text mb={4} fontWeight="bold" fontSize="md">
        Dados do usuário
      </Text> */}
      <ScaleFade initialScale={0.9} in={true}>
        <Formik
          // validationSchema={SignInSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
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
                  label="Nome Completo"
                  name="name"
                  isRequired
                  placeholder="Nome completo"
                />
                <Field name="sexo">
                  {({ field }: FieldType) => (
                    <FormControl id="sexo" isRequired>
                      <FormLabel fontSize="sm" htmlFor="sexo">
                        Sexo
                      </FormLabel>
                      <Select
                        {...field}
                        name="sexo"
                        placeholder="Selecione o sexo"
                        bg="gray.900"
                        variant="filled"
                        borderRadius={themes.border.radius}
                        borderWidth={1}
                        fontSize="sm"
                        // _focus={{ shadow: 'none' }}
                        _hover={{
                          bgColor: 'gray.900'
                        }}
                        focusBorderColor="purple.500"
                        errorBorderColor="red.300"
                        css={{
                          ':focus': {
                            background: '#181b23'
                          }
                        }}
                      >
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                      </Select>
                    </FormControl>
                  )}
                </Field>
                <TextField
                  label="Número do BI"
                  name="numero_do_BI"
                  placeholder="Número do BI"
                />
                <TextField
                  label="Data de nascimento"
                  name="birthday"
                  type="date"
                  placeholder="Data de nascimento"
                  IconField={HiCalendar}
                  withIcon={true}
                />
                <TextField
                  label="Telefone"
                  name="telefone"
                  type="tel"
                  placeholder="Número de telefone"
                  IconField={HiOutlinePhone}
                  withIcon={true}
                />
                <TextField
                  label="E-mail"
                  isRequired
                  name="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  IconField={HiOutlineMail}
                  withIcon={true}
                />
                <TextField
                  isRequired
                  label="Nome do Usuário"
                  name="username"
                  placeholder="Nome do Usuário"
                />
                {createForm && (
                  <TextField
                    label="Senha"
                    placeholder="Senha"
                    name="password"
                    IconField={HiOutlineLockClosed}
                    isPasswordField
                    withIcon={true}
                  />
                )}
                {createForm && (
                  <TextField
                    label="Confirmar senha"
                    placeholder="Confirmar senha"
                    name="confirm_password"
                    IconField={HiOutlineLockClosed}
                    isPasswordField
                    withIcon={true}
                  />
                )}
                <Field name="isActive">
                  {({ field }: FieldType) => (
                    <FormControl
                      id="isActive"
                      display="flex"
                      alignItems="center"
                    >
                      <FormLabel fontSize="sm" htmlFor="isActive" mb="0">
                        Conceder acesso à plataforma ?
                      </FormLabel>
                      <Switch
                        {...field}
                        defaultChecked={
                          initialValues && initialValues?.isActive
                        }
                        // isChecked={check}
                        name="isActive"
                        colorScheme="pink"
                        size="md"
                        // onChange={(event) => {
                        //   handleChange(event)
                        //   // handleCanEdit(e);
                        //   setCanEdit(false)
                        //   setCheck(event.target.checked)

                        //   if (event.target.checked !== initialData.isActive) {
                        //     setCanEdit(true)
                        //   }
                        // }}
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="profile">
                  {({ field }: FieldType) => (
                    <FormControl id="profile" isRequired>
                      <FormLabel fontSize="sm" htmlFor="sexo">
                        Permissões dentro da plataforma
                      </FormLabel>
                      <Select
                        {...field}
                        name="profile"
                        placeholder="Selecione a permissão"
                        bg="gray.900"
                        variant="filled"
                        borderRadius={themes.border.radius}
                        borderWidth={1}
                        fontSize="sm"
                        // _focus={{ shadow: 'none' }}
                        _hover={{
                          bgColor: 'gray.900'
                        }}
                        focusBorderColor="purple.500"
                        errorBorderColor="red.300"
                        css={{
                          ':focus': {
                            background: '#181b23'
                          }
                        }}
                      >
                        {perfis &&
                          perfis.map((perfil) => (
                            <option key={perfil.id} value={perfil.id}>
                              {formatProfile(perfil.name)}
                            </option>
                          ))}
                      </Select>
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Box display="flex" justifyContent="flex-end">
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

export default FormUser
