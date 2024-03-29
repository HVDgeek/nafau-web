import { Meta, Story } from '@storybook/react/types-6-0'
import EditorText, { EditorTextProps } from '.'
import { Box } from '@chakra-ui/react'

export default {
  title: 'EditorText',
  component: EditorText
} as Meta

export const Default = () => (
  <Box m="auto">
    <EditorText />
  </Box>
)
