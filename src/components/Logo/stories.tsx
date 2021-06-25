import { Meta, Story } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    title: 'My Title'
  },
  argTypes: {
    color: {
      control: {
        type: 'color'
      }
    },
    size: {
      control: {
        type: 'radio',
        options: ['normal', 'large']
      }
    }
  }
} as Meta

export const Basic: Story<LogoProps> = (args) => <Logo {...args} />
