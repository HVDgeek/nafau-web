import { Meta, Story } from '@storybook/react/types-6-0'
import { Accordion, Box } from '@chakra-ui/react'
import ClassItem, { ClassItemProps } from '.'

export default {
  title: 'ClassItem',
  component: ClassItem,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ClassItemProps> = (args) => (
  <Box maxW="800px" margin="0 auto" mt={6}>
    <Accordion allowToggle>
      <ClassItem />
      <Box mt={2} />
      <ClassItem />
    </Accordion>
  </Box>
)
Default.args = {
  children: 'My Title'
}
