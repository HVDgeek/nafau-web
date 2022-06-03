import { Meta, Story } from '@storybook/react/types-6-0'
import UserItem, { UserItemProps } from '.'
import { Center } from '@chakra-ui/react'
import item from '../UserCard/mock'

export default {
  title: 'UserItem',
  component: UserItem,
  args: { ...item[0] },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<UserItemProps> = (args) => (
  <Center>
    <UserItem {...args} />
  </Center>
)
