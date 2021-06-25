import { Meta, Story } from '@storybook/react/types-6-0'
import { string } from 'yup'
import Link, { LinkProps } from '.'

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<LinkProps> = (args) => <Link {...args} />
Default.args = {
  children: 'My Title'
}
