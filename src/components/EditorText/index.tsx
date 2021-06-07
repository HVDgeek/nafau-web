import { Box } from '@chakra-ui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import './styles.css'

export type EditorTextProps = {
  children: React.ReactNode
}

const EditorText = ({ children }: EditorTextProps) => {
  return (
    <Box>
      <CKEditor
        editor={ClassicEditor}
        // data="<p>Hello from CKEditor 5!</p>"
        config={{
          // plugins: [Paragraph, Bold, Italic, Essentials],
          placeholder: 'Digite seu texto aquí',
          toolbar: [
            'fontfamily',
            'fontsize',
            '|',
            'alignment',
            '|',
            'bold',
            'italic',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            'blockQuote',
            '|',
            'code',
            'undo',
            'redo'
          ]
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor)
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          console.log({ event, editor, data })
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor)
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor)
        }}
      />
    </Box>
  )
}

export default EditorText
