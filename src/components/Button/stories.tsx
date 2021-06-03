import { FaSchool } from 'react-icons/fa'
import { Meta, Story } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
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
  leftIcon: <FaSchool />
}

export const RightIcon: Story<ButtonProps> = (args) => <Button {...args} />
RightIcon.args = {
  children: 'My school',
  rightIcon: <FaSchool />
}
