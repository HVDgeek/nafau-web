import { Meta, Story } from '@storybook/react/types-6-0'
import Sidebar, { SidebarProps } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<SidebarProps> = (args) => <Sidebar {...args} />
Default.args = {
  children: 'My Title'
}
