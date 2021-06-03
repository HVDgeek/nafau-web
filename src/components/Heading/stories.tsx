import { Meta, Story } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    title: 'My Title'
  }
} as Meta

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />
