import { Meta, Story } from '@storybook/react/types-6-0'
import Sidebar, { SidebarProps } from '.'
import { Flex } from '@chakra-ui/react'
import mock from './managerMock'

export default {
  title: 'Sidebar',
  args: { links: mock },
  component: Sidebar
} as Meta

export const Basic: Story<SidebarProps> = (args) => {
  return (
    <Flex>
      <Sidebar {...args} />
    </Flex>
  )
}
