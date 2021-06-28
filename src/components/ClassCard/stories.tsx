import { Meta, Story } from '@storybook/react/types-6-0'
import ClassCard, { ClassCardProps } from '.'
import { Center } from '@chakra-ui/react'
import item from './mock'

export default {
  title: 'ClassCard',
  component: ClassCard,
  args: { ...item[0] },
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: ['EMCURSO', 'PAUSE', 'ENCERRADA']
      }
    }
  }
} as Meta

export const Default: Story<ClassCardProps> = (args) => (
  <Center>
    <ClassCard {...args} />
  </Center>
)
