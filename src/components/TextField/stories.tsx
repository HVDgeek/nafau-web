import { Meta, Story } from '@storybook/react/types-6-0'
import { Formik } from 'formik'
import TextField, { TextFieldProps } from '.'
import { HiOutlineMail } from 'react-icons/hi'
import { Box } from '@chakra-ui/react'
export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    placeholder: 'john.cage@gmail.com',
    autoComplete: 'email',
    IconField: HiOutlineMail,
    withIcon: true,
    isDisabled: false
  },
  argTypes: {
    IconField: { type: '' },
    mask: { type: '' }
  }
} as Meta

export const Basic: Story<TextFieldProps> = (args) => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={async (values, { setErrors, resetForm }) => {
      resetForm()
    }}
  >
    <Box bg="gray.800" p={15} maxW="300px">
      <TextField {...args} />
    </Box>
  </Formik>
)
