/* eslint-disable @typescript-eslint/no-var-requires */
import { useCallback } from 'react'
import { Text, Box, useBreakpointValue } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
const pretty = require('prettysize')

export type UploadFileProps = {
  children: React.ReactNode
}

// const getColor = (props) => {
//   if (props.isDragAccept) {
//     return '#00e676'
//   }
//   if (props.isDragReject) {
//     return '#ff1744'
//   }
//   if (props.isDragActive) {
//     return '#2196f3'
//   }
//   return '#311e5c'
// }

const Container = styled.div`
  flex: 1;
  display: flex;
  height: 70px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #805ad5;
  border-style: dashed;
  background-color: #1f2029;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`

const UploadFile = ({ children }: UploadFileProps) => {
  const fontSize = useBreakpointValue({
    base: 'sm',
    md: 'md'
  })

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log('FILE', file)
      // Warning: On most recent browsers versions,
      // the files given by onDrop won't have properties path or fullPath,
      // see this SO question and this issue.
      // Furthermore, if you want to access file contents you have to use the FileReader API:
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        // console.log('BINARY', binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx',
    maxFiles: 3,
    onDrop: onDrop,
    maxSize: 10485760 // 10MB
  })

  const files = acceptedFiles.map((file) => (
    <Text fontSize="small" key={file.path}>
      {file.path} - {pretty(file.size)}
    </Text>
  ))

  return (
    <Box>
      <Container {...getRootProps({ isDragActive, isDragAccept })}>
        <input {...getInputProps()} />
        {isDragAccept && <Text fontSize={fontSize}>Arquivos válidos</Text>}
        {/* {isDragReject && (
          <Text fontSize={fontSize}>Alguns arquivos foram rejeitados</Text>
        )} */}
        {!isDragActive && (
          <Text fontSize={fontSize}>Arraste arquivos ou clique aquí</Text>
        )}
      </Container>
      <Box>
        <Text mt={4} color="#bdbdbd" fontSize={fontSize}>
          Arquivos carregados
        </Text>
        <Box mt={4}>{files}</Box>
      </Box>
    </Box>
  )
}

export default UploadFile
