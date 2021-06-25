import { Text, Box, Flex, Link, Icon } from '@chakra-ui/react'
import { FaFilePdf, FaFileExcel, FaFile, FaFileImage } from 'react-icons/fa'
import { AiFillFileWord } from 'react-icons/ai'

export type FileItemProps = {
  title?: string
  description?: string
  url: string
}

const getIconFile = (format: string) => {
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

const FileItem = ({ title, description, url }: FileItemProps) => {
  return (
    <Flex align="center">
      <Icon as={getIconFile(url)} mr={2} />

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
    </Flex>
  )
}

export default FileItem
