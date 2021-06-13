import { Meta, Story } from '@storybook/react/types-6-0'
import UserCard, { UserCardProps } from '.'
import { Center } from '@chakra-ui/react'
import item from './mock'

export default {
  title: 'UserCard',
  component: UserCard,
  args: { ...item },
  argTypes: {
    onRemove: { action: 'Click on remove' }
  }
} as Meta

export const Default: Story<UserCardProps> = (args) => (
  <Center py={6}>
    <UserCard {...args} />
  </Center>
)
