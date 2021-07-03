import { Meta, Story } from '@storybook/react/types-6-0'
import FormProfile from '.'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = () => (
  <Box maxWidth="860px" margin="auto">
    <FormProfile />
  </Box>
)
Default.args = {
  children: 'My Title'
}
