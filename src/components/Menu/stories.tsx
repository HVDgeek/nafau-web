import { Meta, Story } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />
Default.args = {
  children: 'My Title'
}
