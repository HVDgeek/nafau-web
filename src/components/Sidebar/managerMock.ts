import { BsPeopleFill, BsPersonSquare } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'

export default [
  {
    route: '/manager/attendants',
    icon: BsPeopleFill,
    children: 'Atendentes'
  },
  {
    route: '/manager/teachers',
    icon: GiTeacher,
    children: 'Professores'
  },
  {
    route: '/manager/students',
    icon: BsPersonSquare,
    children: 'Alunos'
  },
  {
    route: '/manager/courses',
    icon: FaChalkboardTeacher,
    children: 'Turmas'
  }
]