import { Text, Box, Badge } from '@chakra-ui/react'
import Heading from 'components/Heading'
import TextContent from 'components/TextContent'
import themes from 'styles/alt-themes'

export type ClassroomHeaderProps = {
  title: string
  description?: string
  code?: string
  status?: 'EMCURSO' | 'PAUSE' | 'ENCERRADA'
}

const ClassroomHeader = ({
  title,
  description,
  code,
  status
}: ClassroomHeaderProps) => {
  return (
    <Box>
      <Heading lineLeft color={themes.colors.lightGray}>
        {title} {code}
      </Heading>
      <Badge
        mt={4}
        fontSize="x-small"
        variant="outline"
        colorScheme={
          status === 'EMCURSO'
            ? 'green'
            : status === 'PAUSE'
            ? 'yellow'
            : 'orange'
        }
      >
        {status === 'EMCURSO'
          ? 'EM CURSO'
          : status === 'PAUSE'
          ? 'PAUSE'
          : 'ENCERRADA'}
      </Badge>
      {description && (
        <Box mt={4}>
          <TextContent>{description}</TextContent>
        </Box>
      )}
    </Box>
  )
}

export default ClassroomHeader
