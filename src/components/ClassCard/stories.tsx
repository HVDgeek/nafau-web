import { Meta, Story } from '@storybook/react/types-6-0'
import ClassCard, { ClassCardProps } from '.'
import { Center } from '@chakra-ui/react'

export default {
  title: 'ClassCard',
  component: ClassCard,
  args: {
    title: 'Probabilidade e Estatística',
    code: 'MAT-123',
    status: 'EMCURSO',
    timing: 50,
    lastLesson: {
      lessonNumber: 4,
      title: 'Teste de Qui-Quadrado'
    },
    teacher: {
      name: 'Domingos Venancio',
      avatar: 'https://avatars.githubusercontent.com/u/34204904?v=4'
    },
    countAlunos: 32
  }
} as Meta

export const Default: Story<ClassCardProps> = (args) => (
  <Center>
    <ClassCard {...args} />
  </Center>
)
