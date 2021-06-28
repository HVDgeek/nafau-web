import { Meta, Story } from '@storybook/react/types-6-0'
import Empty, { EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />
Default.args = {
  title: 'Você ainda não tem turmas!',
  description: 'Você deve ser inscrito em alguma turma para que apareça aqui',
  hasLink: true
}
