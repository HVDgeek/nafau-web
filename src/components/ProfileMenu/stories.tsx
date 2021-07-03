import { Meta, Story } from '@storybook/react/types-6-0'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  argTypes: {
    activeLink: {
      control: {
        type: 'select',
        options: ['/profile/me', '/profile/courses']
      }
    }
  }
} as Meta

export const Default: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
)
