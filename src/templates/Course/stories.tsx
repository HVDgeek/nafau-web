import { Meta, Story } from '@storybook/react/types-6-0'
import Course, { CourseProps } from '.'

export default {
  title: 'Course',
  component: Course,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<CourseProps> = (args) => <Course {...args} />
Default.args = {
  children: 'My Title'
}
