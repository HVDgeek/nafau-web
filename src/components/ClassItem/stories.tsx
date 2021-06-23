import { Meta, Story } from '@storybook/react/types-6-0'
import { Accordion, Box } from '@chakra-ui/react'
import ClassItem, { ClassItemProps } from '.'
import items from './mock'

export default {
  title: 'ClassItem',
  component: ClassItem,
  decorators: [
    (Story) => (
      <Box maxW="800px" margin="0 auto" mt={6}>
        <Accordion allowToggle>
          <Story />
        </Accordion>
      </Box>
    )
  ]
} as Meta

export const Basic: Story<ClassItemProps> = (args) => (
  <>
    {items.map((item) => (
      <>
        <ClassItem key={item.id} {...item} />
        <Box mt={2} />
      </>
    ))}
  </>
)
// Basic.args = {
//   title: 'Aula 3 - Introdução ao desenvolvimento',
//   description: ''
// }
