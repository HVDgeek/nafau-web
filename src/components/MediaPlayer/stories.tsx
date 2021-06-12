import { Meta, Story } from '@storybook/react/types-6-0'
import MediaPlayer, { MediaPlayerProps } from '.'

export default {
  title: 'MediaPlayer',
  component: MediaPlayer
} as Meta

export const Basic: Story<MediaPlayerProps> = (args) => (
  <MediaPlayer {...args} />
)

Basic.args = {
  url: 'https://music.youtube.com/watch?v=jAdBJu7qWwQ&feature=share'
}
