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
import * as Yup from 'yup'

type FieldType = {
  field: any
}

export type FormAddContentToAulaProps = {
  initialValues: any
  placeholders: {
    title: string
    url: string
    description: string
  }
  onClose: () => void
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
}

const FormAddContentToAulaSchema = Yup.object().shape({
  title: Yup.string()
    // .min(8, "Senha precisa ter pelo menos 8 caracteres 🤪")
    .required('O título é obrigatório 😜'),
  url: Yup.string().url('URL inválida 😜').required('A URl é obrigatória 😜')
})

const FormAddContentToAula = ({
  onSubmit,
  onClose,
  initialValues,
  placeholders
}: FormAddContentToAulaProps) => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  })

  return (
    <Box borderRadius={themes.border.radius} backgroundColor="gray.800" p={4}>
      <ScaleFade initialScale={0.9} in={true}>
        <Formik
          validationSchema={FormAddContentToAulaSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextField
                label={placeholders.title}
                name="title"
                isRequired
                placeholder={placeholders.title}
              />
              <Box mt={4} />
              <TextField
                label="Endereço URL"
                name="url"
                placeholder={placeholders.url}
                isRequired
              />
              <Box mt={4} />
              <Field name="description">
                {({ field }: FieldType) => (
                  <FormControl id="description">
                    <FormLabel fontSize="sm" htmlFor="description">
                      Descrição do link
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
                      placeholder={placeholders.description}
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
              <Box display="flex" justifyContent="flex-end" mt={4}>
                <Button color="red" size="xs" onClick={onClose}>
                  Cancelar
                </Button>
                <Box mr={2} />
                <Button type="submit" size="xs">
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

export default FormAddContentToAula
