import { Meta, Story } from '@storybook/react/types-6-0'
import UserCard, { UserCardProps } from '.'

export default {
  title: 'UserCard',
  component: UserCard,
  args: {
    name: 'Hiduíno Domingos',
    email: 'hvduino@gmail.com',
    username: '@hiduino',
    avatar: 'https://avatars.githubusercontent.com/u/34204904?v=4',
    isActive: true
  }
} as Meta

export const Default: Story<UserCardProps> = (args) => <UserCard {...args} />
