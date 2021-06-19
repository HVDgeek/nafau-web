import { Meta, Story } from '@storybook/react/types-6-0'
import { Box } from '@chakra-ui/react'
import FormSignIn, { FormSignInProps } from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  parameters: {
    backgrounds: { default: 'dark2' }
  }
} as Meta

export const Basic: Story<FormSignInProps> = () => (
  <Box maxW="300px" margin="auto">
    <FormSignIn />
  </Box>
)
