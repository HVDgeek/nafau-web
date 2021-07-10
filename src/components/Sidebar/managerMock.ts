import { BsPeopleFill } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { BsPersonSquare } from 'react-icons/bs'

export default [
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
    route: '/manager/students',
    icon: BsPersonSquare,
    children: 'Alunos'
  },
  {
    route: '/turmas',
    icon: FaChalkboardTeacher,
    children: 'Turmas'
  }
]
