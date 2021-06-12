import { Meta, Story } from '@storybook/react/types-6-0'
import { AiFillAppstore } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { BsPersonSquare } from 'react-icons/bs'
import Sidebar, { SidebarProps } from '.'
import { Flex } from '@chakra-ui/react'

export default {
  title: 'Sidebar',
  component: Sidebar
} as Meta

export const Basic: Story<SidebarProps> = (args) => {
  return (
    <Flex>
      <Sidebar {...args} />
    </Flex>
  )
}

Basic.args = {
  links: [
    {
      route: '/dashboard',
      icon: AiFillAppstore,
      children: 'Dashboard'
    },
    {
      route: '/atendentes',
      icon: BsPeopleFill,
      children: 'Atendentes'
    },
    {
      route: '/teachers',
      icon: GiTeacher,
      children: 'Professores'
    },
    {
      route: '/alunos',
      icon: BsPersonSquare,
      children: 'Alunos'
    },
    {
      route: '/turmas',
      icon: FaChalkboardTeacher,
      children: 'Turmas'
    }
  ]
}
