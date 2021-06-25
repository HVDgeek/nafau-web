import { Meta, Story } from '@storybook/react/types-6-0'
import IconButton, { IconButtonProps } from '.'
import { FaSchool } from 'react-icons/fa'

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md']
      }
    }
  }
} as Meta

export const Default: Story<IconButtonProps> = (args) => (
  <IconButton {...args} />
)
Default.args = {
  children: <FaSchool />
}
