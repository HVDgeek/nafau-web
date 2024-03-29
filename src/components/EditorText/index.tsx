import React, { useEffect, useState, useRef } from 'react'
import { Box } from '@chakra-ui/react'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import styles from './EditorText.module.css'

export type EditorTextProps = {
  onChange: (event: any, editor: any) => void
}

const EditorText: React.FC<EditorTextProps> = ({ onChange }) => {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, //Added .CKEditor
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])

  return (
    <Box className={styles.editor}>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          // data="<p>Hello from CKEditor 5!</p>"
          config={{
            // plugins: [Paragraph, Bold, Italic, Essentials],
            placeholder: 'Digite seu texto aqui',
            toolbar: [
              'fontfamily',
              'fontsize',
              '|',
              'alignment',
              '|',
              'bold',
              'italic',
              '|',
              // 'link',
              'bulletedList',
              'numberedList',
              'blockQuote',
              '|',
              'code',
              'undo',
              'redo'
            ]
          }}
          // onReady={(editor) => {
          //   // You can store the "editor" and use when it is needed.
          //   console.log('Editor is ready to use!', editor)
          // }}
          onChange={onChange}
          // onBlur={(event, editor) => {
          //   console.log('Blur.', editor)
          // }}
          // onFocus={(event, editor) => {
          //   console.log('Focus.', editor)
          // }}
        />
      ) : (
        <p>Carregando...</p>
      )}
    </Box>
  )
}

export default EditorText
