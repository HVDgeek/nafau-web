import {
  Text,
  Box,
  Flex,
  Link,
  Icon,
  useBreakpointValue
} from '@chakra-ui/react'
import { FaFilePdf, FaFileExcel, FaFile, FaFileImage } from 'react-icons/fa'
import { AiFillFileWord, AiOutlineLink, AiOutlineClose } from 'react-icons/ai'
import IconButton from 'components/IconButton'
import MediaPlayer from 'components/MediaPlayer'

export type LessonItemProps = {
  title?: string
  description?: string
  url: string
  dataType: 'Arquivos' | 'Áudios' | 'Vídeos' | 'Tarefas' | 'Links úteis'
  onOpenRemoveModal: () => void
}

const getIcon = (format: string) => {
  if (format.includes('pdf')) {
    return FaFilePdf
  }

  if (format.includes('doc')) {
    return AiFillFileWord
  }

  if (format.includes('xls')) {
    return FaFileExcel
  }

  if (
    format.includes('jpg') ||
    format.includes('png') ||
    format.includes('svg')
  ) {
    return FaFileImage
  }

  return FaFile
}

const LessonItem = ({
  title,
  description,
  url,
  dataType,
  onOpenRemoveModal
}: LessonItemProps) => {
  const isMobileVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex align="center" mt={4}>
      {dataType === 'Arquivos' && <Icon as={getIcon(url)} mr={2} />}
      {dataType === 'Links úteis' && <Icon as={AiOutlineLink} mr={2} />}
      <Box>
        {(dataType === 'Arquivos' || dataType === 'Links úteis') && (
          <Link
            fontSize="sm"
            _focus={{ shadow: 'none' }}
            target="_blank"
            href={url}
          >
            {title}
          </Link>
        )}
        {(dataType === 'Vídeos' || dataType === 'Áudios') && (
          <Text fontSize="sm">{title}</Text>
        )}
        {!!description && (
          <Text fontSize="xx-small" color="gray.200">
            {description}
          </Text>
        )}
        {(dataType === 'Vídeos' || dataType === 'Áudios') && (
          <Box mt={2}>
            <MediaPlayer url={url} />
          </Box>
        )}
      </Box>
      {isMobileVersion && (
        <IconButton ariaLabel="remove item" onClick={onOpenRemoveModal}>
          <AiOutlineClose />
        </IconButton>
      )}
    </Flex>
  )
}

export default LessonItem
