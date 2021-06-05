import { Meta, Story } from '@storybook/react/types-6-0'
import IconButton, { IconButtonProps } from '.'
import { FaSchool } from 'react-icons/fa'

export default {
  title: 'IconButton',
  component: IconButton
} as Meta

export const Default: Story<IconButtonProps> = (args) => (
  <IconButton {...args} />
)
Default.args = {
  children: <FaSchool />
}
