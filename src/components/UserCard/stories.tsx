import { Meta, Story } from '@storybook/react/types-6-0'
import UserCard, { UserCardProps } from '.'
import { Center } from '@chakra-ui/react'

export default {
  title: 'UserCard',
  component: UserCard,
  args: {
    name: 'Hiduíno Domingos',
    email: 'hvduino@gmail.com',
    username: '@hiduino',
    avatar: 'https://avatars.githubusercontent.com/u/34204904?v=4',
    isActive: true
  },
  argTypes: {
    onRemove: { action: 'Click on remove' }
  }
} as Meta

export const Default: Story<UserCardProps> = (args) => (
  <Center py={6}>
    <UserCard {...args} />
  </Center>
)
