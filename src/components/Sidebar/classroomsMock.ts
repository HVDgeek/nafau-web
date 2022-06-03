import { FaChalkboardTeacher } from 'react-icons/fa'
import { BsChat, BsCameraVideoFill } from 'react-icons/bs'
import { GiChatBubble } from 'react-icons/gi'

export default [
  {
    route: '/classrooms/my-courses',
    icon: FaChalkboardTeacher,
    children: 'Conteúdos'
  },
  {
    route: '/classrooms/forum',
    icon: GiChatBubble,
    children: 'Discussões'
  },
  {
    route: '/classrooms/video-conference',
    icon: BsCameraVideoFill,
    children: 'Vídeo conferência'
  }
]
