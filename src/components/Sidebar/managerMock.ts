import { BsPeopleFill, BsPersonSquare } from 'react-icons/bs'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'

export default [
  {
    route: '/manager/students',
    icon: BsPersonSquare,
    children: 'Alunos'
  },
  {
    route: '/manager/teachers',
    icon: GiTeacher,
    children: 'Professores'
  },
  {
    route: '/manager/courses',
    icon: FaChalkboardTeacher,
    children: 'Turmas'
  },
  {
    route: '/manager/attendants',
    icon: BsPeopleFill,
    children: 'Atendentes'
  }
]
