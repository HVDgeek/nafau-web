import { Meta, Story } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'

export default {
  title: 'TextContent',
  component: TextContent,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)

Default.args = {
  children: `<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis<i> nostrud exercitation </i>ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>&nbsp;</p><ol><li>Primero</li><li>Segundo&nbsp;</li><li>Terceiro</li></ol><p>&nbsp;</p><ul><li>Caramba</li></ul><blockquote><ul><li>Testando o componente</li></ul><p><a href="https://www.youtube.com/watch?v=vm5nkgISz3w">https://www.youtube.com/watch?v=vm5nkgISz3w</a></p></blockquote><p>&nbsp;</p><p>&nbsp;</p>`
}
