import { Meta, Story } from '@storybook/react/types-6-0'
import CourseItem, { CourseItemProps } from '.'
import { Center } from '@chakra-ui/react'
import item from '../ClassCard/mock'

export default {
  title: 'CourseItem',
  component: CourseItem,
  args: { ...item[0] },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<CourseItemProps> = (args) => (
  <Center>
    <CourseItem {...args} />
  </Center>
)
Default.args = {
  children: 'My Title'
}
