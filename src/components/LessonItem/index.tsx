import { Text, Box, Flex, Link, Icon } from '@chakra-ui/react'
import { FaFilePdf, FaFileExcel, FaFile, FaFileImage } from 'react-icons/fa'
import { AiFillFileWord, AiOutlineClose } from 'react-icons/ai'
import IconButton from 'components/IconButton'

export type LessonItemProps = {
  title?: string
  description?: string
  url: string
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

const LessonItem = ({ title, description, url }: LessonItemProps) => {
  return (
    <Flex align="center">
      <Icon as={getIcon(url)} mr={2} />
      <Box>
        <Link
          fontSize="sm"
          _focus={{ shadow: 'none' }}
          target="_blank"
          href={url}
        >
          {title}
        </Link>
        {!!description && (
          <Text fontSize="xx-small" color="gray.200">
            {description}
          </Text>
        )}
      </Box>
      <IconButton ariaLabel="remove item">
        <AiOutlineClose />
      </IconButton>
    </Flex>
  )
}

export default LessonItem
