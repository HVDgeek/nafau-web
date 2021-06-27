import { Meta, Story } from '@storybook/react/types-6-0'
import Footer, { FooterProps } from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: Story<FooterProps> = () => <Footer />
