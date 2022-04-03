import { Anchor, HStack } from './primitives'

import { Text } from 'components/typography'

export function Footer() {
  return (
    <HStack
      as="footer"
      css={{ paddingX: '$12', paddingY: '$5', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <HStack css={{ spaceX: '$5' }}>
        <Anchor css={{ fontSize: '$base', textTransform: 'uppercase', fontWeight: '$normal', color: '$text' }}>
          Github
        </Anchor>
        <Anchor css={{ fontSize: '$base', textTransform: 'uppercase', fontWeight: '$normal', color: '$text' }}>
          Twitter
        </Anchor>
        <Anchor css={{ fontSize: '$base', textTransform: 'uppercase', fontWeight: '$normal', color: '$text' }}>
          LinkedIn
        </Anchor>
        <Anchor css={{ fontSize: '$base', textTransform: 'uppercase', fontWeight: '$normal', color: '$text' }}>
          CV
        </Anchor>
      </HStack>

      <Text>2022 - Elia Darwish</Text>
    </HStack>
  )
}
