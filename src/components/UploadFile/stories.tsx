import { Meta, Story } from '@storybook/react/types-6-0'
import UploadFile, { UploadFileProps } from '.'

export default {
  title: 'UploadFile',
  component: UploadFile,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<UploadFileProps> = (args) => <UploadFile {...args} />
Default.args = {
  children: 'My Title'
}
