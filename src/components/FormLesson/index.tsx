import {
  Box,
  ScaleFade,
  Grid,
  useBreakpointValue,
  FormControl,
  Select,
  FormLabel,
  Textarea,
  Text
} from '@chakra-ui/react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Form, Formik, Field, FormikHelpers } from 'formik'
import themes from 'styles/alt-themes'
import EditorText from 'components/EditorText'

type FieldType = {
  field: any
}

export type FormLessonProps = {
  initialValues: any
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
}

const FormLesson = ({ onSubmit, initialValues }: FormLessonProps) => {
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
              <TextField
                label="Tema da aula"
                name="title"
                isRequired
                placeholder="Tema desta aula"
              />
              <Box mt={4} />
              <FormControl id="description" isRequired>
                <FormLabel fontSize="sm" htmlFor="description">
                  Descrição
                </FormLabel>
              </FormControl>
              <Box display="flex" justifyContent="flex-end">
                {/* <Button
                  type="submit"
                  fullWidth={isDesktopVersion ? false : true}
                  size="sm"
                >
                  Salvar
                </Button> */}
              </Box>
            </Form>
          )}
        </Formik>
      </ScaleFade>
    </Box>
  )
}

export default FormLesson
