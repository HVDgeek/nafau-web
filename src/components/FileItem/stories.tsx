import { Meta, Story } from '@storybook/react/types-6-0'
import FileItem, { FileItemProps } from '.'

export default {
  title: 'FileItem',
  component: FileItem
} as Meta

export const Default: Story<FileItemProps> = (args) => <FileItem {...args} />

Default.args = {
  title: 'Introdução a variáveis',
  description: 'Uma introdução a variaveis muito legal',
  url: 'https://dicasdeprogramacao.com.br/download/ebook-logica-de-programacao-para-iniciantes.pdf'
}
