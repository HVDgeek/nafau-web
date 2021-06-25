import { FaSchool } from 'react-icons/fa'
import { Icon } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {},
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['xs', 'sm', 'md', 'lg']
      }
    },
    fullWidth: {
      control: {
        type: 'boolean',
        options: [true, false]
      }
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
Default.args = {
  children: 'My Title'
}

export const LeftIcon: Story<ButtonProps> = (args) => <Button {...args} />
LeftIcon.args = {
  children: 'My school',
  leftIcon: <Icon as={FaSchool} />
}

export const RightIcon: Story<ButtonProps> = (args) => <Button {...args} />
RightIcon.args = {
  children: 'My school',
  rightIcon: <Icon as={FaSchool} />
}

export const LinkButton: Story<ButtonProps> = (args) => <Button {...args} />
LinkButton.args = {
  children: 'My Link',
  as: 'a',
  href: 'http://site.nafau.com',
  target: '_blank'
}
