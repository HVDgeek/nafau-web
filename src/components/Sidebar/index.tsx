/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, Flex, Icon, Text, useBreakpointValue } from '@chakra-ui/react'
import themes from 'styles/alt-themes'

export type LinkProps = {
  route: string
  icon: any
  children: string
}

export type SidebarProps = {
  links: LinkProps[]
}

const SidebarLink = ({ route, children, icon }: LinkProps) => (
  <Flex
    _hover={{
      cursor: 'pointer',
      color: themes.colors.gray
    }}
    as="a"
    href={route}
    align="center"
    flexDirection="column"
  >
    <Icon as={icon} />
    <Text as="span" fontSize="xs" fontWeight={300}>
      {children}
    </Text>
  </Flex>
)

const Sidebar = ({ links }: SidebarProps) => {
  return (
    <Stack spacing={3} as="aside" w="30" mr="8">
      {links?.map((link) => {
        return (
          <SidebarLink key={link.children} route={link.route} icon={link.icon}>
            {link.children}
          </SidebarLink>
        )
      })}
    </Stack>
  )
}

export default Sidebar
