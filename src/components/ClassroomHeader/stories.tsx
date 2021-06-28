import { Meta, Story } from '@storybook/react/types-6-0'
import ClassroomHeader, { ClassroomHeaderProps } from '.'
import item from './mock'

export default {
  title: 'ClassroomHeader',
  component: ClassroomHeader,
  args: { ...item },
  argTypes: {
    title: {
      type: 'string'
    },
    status: {
      type: 'inline-radio',
      options: ['EMCURSO', 'PAUSE', 'ENCERRADA']
    }
  }
} as Meta

export const Default: Story<ClassroomHeaderProps> = (args) => (
  <ClassroomHeader {...args} />
)
