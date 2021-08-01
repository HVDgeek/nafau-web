import { Meta, Story } from '@storybook/react/types-6-0'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ width: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
)

Default.args = {
  username: 'Hiduino'
}
