import { Text, Box, useBreakpointValue } from '@chakra-ui/react'
import ReactPlayer from 'react-player/lazy'
import themes from 'styles/alt-themes'

export type MediaPlayerProps = {
  url: string
}

const MediaPlayer = ({ url }: MediaPlayerProps) => {
  const width = useBreakpointValue({
    base: '300px',
    md: '640px'
  })

  const height = useBreakpointValue({
    base: '200px',
    md: '360px'
  })

  return (
    <ReactPlayer
      style={{ background: '#1F2029' }}
      pip={true}
      stopOnUnmount={false}
      width={width}
      height={height}
      controls={true}
      url={url}
      onError={() => console.log('URL INVALIDA!!!')}
      onReady={() => console.log('SUCCESS SET URL VALID')}
      config={{
        file: {
          forceAudio: true,
          forceVideo: true
        }
      }}
    />
  )
}

export default MediaPlayer
