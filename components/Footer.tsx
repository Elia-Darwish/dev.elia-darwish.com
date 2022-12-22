import { HStack } from 'components/primitives'
import { Anchor } from 'components/Anchor'
import { Text } from 'components/typography'

export function Footer() {
  return (
    <HStack
      as="footer"
      css={{
        paddingX: '$8',
        paddingY: '$8',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@md': { paddingX: '$12' },
      }}
    >
      <HStack
        css={{
          justifyContent: 'space-between',
          width: '$full',
          '@md': { columnGap: '$8', justifyContent: 'flex-start', width: 'max-content' },
        }}
      >
        <Anchor variant="nav" href="https://github.com/Elia-Darwish" target="_blank" rel="noreferrer">
          Github
        </Anchor>
        <Anchor variant="nav" href="https://twitter.com/DarwishElia" target="_blank" rel="noreferrer">
          Twitter
        </Anchor>
        <Anchor variant="nav" href="https://www.linkedin.com/in/elia-darwish/" target="_blank" rel="noreferrer">
          LinkedIn
        </Anchor>
        <Anchor variant="nav" href="https://www.polywork.com/elia_darwish" target="_blank" rel="noreferrer">
          Polywork
        </Anchor>
        <Anchor variant="nav" href="/documents/elia-darwish-cv.pdf" target="_blank" rel="noreferrer">
          CV
        </Anchor>
      </HStack>

      <Text size="sm" css={{ opacity: 0.8, display: 'none', '@md': { display: 'block' } }}>
        2022 - Elia Darwish
      </Text>
    </HStack>
  )
}
