import { Meta, Story } from '@storybook/react/types-6-0'
import Chat, { ChatProps } from '.'

export default {
  title: 'Chat',
  component: Chat,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ChatProps> = (args) => <Chat {...args} />
Default.args = {
  children: 'My Title'
}
