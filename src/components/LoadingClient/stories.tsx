import { Meta, Story } from '@storybook/react/types-6-0'
import LoadingClient, { LoadingClientProps } from '.'

export default {
  title: 'LoadingClient',
  component: LoadingClient,
  argTypes: {
    title: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<LoadingClientProps> = (args) => (
  <LoadingClient {...args} />
)
Default.args = {
  title: 'Estudantes'
}
