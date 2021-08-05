import { Meta, Story } from '@storybook/react/types-6-0'
import { Box } from '@chakra-ui/react'
import FormUser from '.'

export default {
  title: 'Form/FormUser',
  component: FormUser,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = () => (
  <Box maxWidth="860px" margin="auto">
    <FormUser />
  </Box>
)
