import { FaChalkboardTeacher } from 'react-icons/fa'
import { BsChat, BsCameraVideoFill } from 'react-icons/bs'
import { GiChatBubble } from 'react-icons/gi'

export default [
  {
    route: '/classrooms/my-courses',
    icon: FaChalkboardTeacher,
    children: 'Minhas turmas'
  },
  {
    route: '/classrooms/chat',
    icon: BsChat,
    children: 'Conversas'
  },
  {
    route: '/classrooms/forum',
    icon: GiChatBubble,
    children: 'Discussões'
  },
  {
    route: '/classrooms/video',
    icon: BsCameraVideoFill,
    children: 'Vídeo conferência'
  }
]
