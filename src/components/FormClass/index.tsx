import {
  Box,
  ScaleFade,
  Grid,
  useBreakpointValue,
  FormControl,
  Select,
  FormLabel,
  Textarea
} from '@chakra-ui/react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Form, Formik, Field, FormikHelpers } from 'formik'
import themes from 'styles/alt-themes'

type FieldType = {
  field: any
}

export type FormClassProps = {
  initialValues: any
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
}

const FormClass = ({ onSubmit, initialValues }: FormClassProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  })

  return (
    <Box borderRadius={themes.border.radius} backgroundColor="gray.800" p={4}>
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
                  label="Nome da turma (curso/disciplina)"
                  name="title"
                  isRequired
                  placeholder="Nome da turma"
                />
                <Field name="status">
                  {({ field }: FieldType) => (
                    <FormControl id="status" isRequired>
                      <FormLabel fontSize="sm" htmlFor="status">
                        Status da turma
                      </FormLabel>
                      <Select
                        {...field}
                        name="status"
                        placeholder="Selecione o status da turma"
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
                        <option value="EMCURSO">EM CURSO</option>
                        <option value="PAUSE">PAUSE</option>
                        <option value="ENCERREDA">ENCERREDA</option>
                      </Select>
                    </FormControl>
                  )}
                </Field>
                <TextField
                  label="Código da turma"
                  name="code"
                  placeholder="Código da turma"
                />

                <Field name="description">
                  {({ field, form }) => (
                    <FormControl id="description">
                      <FormLabel fontSize="sm" htmlFor="description">
                        Descrição da turma
                      </FormLabel>
                      <Textarea
                        {...field}
                        id="description"
                        name="description"
                        size="sm"
                        // resize="none"
                        bg="gray.900"
                        variant="filled"
                        borderRadius={themes.border.radius}
                        borderWidth={1}
                        fontSize="sm"
                        placeholder="Descrição da turma"
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
                      />
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

export default FormClass
