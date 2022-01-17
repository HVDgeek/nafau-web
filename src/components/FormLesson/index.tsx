import {
  Box,
  ScaleFade,
  useBreakpointValue,
  FormControl,
  FormLabel,
  useDisclosure
} from '@chakra-ui/react'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { Form, FormikHelpers, FormikProvider, useFormik } from 'formik'
import themes from 'styles/alt-themes'
import EditorText from 'components/EditorText'
import { useAula } from 'hooks/use-aula'

export type FormLessonProps = {
  onSubmit: (
    values: any,
    formikHelpers: FormikHelpers<any>
  ) => void | Promise<any>
}

const FormLesson = ({ onSubmit }: FormLessonProps) => {
  const { onClose } = useAula()

  const handleDescription = (event, editor) => {
    const description = editor.getData()
    formik.setFieldValue('description', description)
  }

  const formik = useFormik({
    initialValues: { description: '', title: '' },
    onSubmit
  })

  return (
    <Box borderRadius={themes.border.radius} backgroundColor="gray.800" p={4}>
      <ScaleFade initialScale={0.9} in={true}>
        <FormikProvider value={formik}>
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
              <EditorText onChange={handleDescription} />
            </FormControl>
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
        </FormikProvider>
      </ScaleFade>
    </Box>
  )
}

export default FormLesson
