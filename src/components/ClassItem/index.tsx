import {
  Text,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import themes from 'styles/alt-themes'
import { shade } from 'polished'

export type ClassItemProps = {
  children: React.ReactNode
}

const ClassItem = () => {
  return (
    <AccordionItem
      backgroundColor="gray.800"
      borderRadius={themes.border.radius}
      border={`1px solid ${shade(0.5, themes.colors.primary)}`}
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton _focus={{ shadow: 'none' }}>
              <Box flex="1" textAlign="left">
                <Text>🚀 Aula 4 - Algebra de Boole</Text>
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}

export default ClassItem
