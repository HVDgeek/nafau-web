import { Meta, Story } from '@storybook/react/types-6-0'
import Main, { Props } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Description default'
  }
} as Meta

export const Basic: Story<Props> = (args) => <Main {...args} />

Basic.args = {
  title: 'Title Basic',
  description: 'Description Basic'
}

export const Default: Story<Props> = (args) => <Main {...args} />
