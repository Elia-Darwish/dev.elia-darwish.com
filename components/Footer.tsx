import { Anchor, HStack } from './primitives'

import { Text } from 'components/typography'
import { styled } from 'stitches.config'

const StyledAnchor = styled(Anchor, {
  position: 'relative',

  fontSize: '$base',
  textTransform: 'uppercase',
  fontWeight: '$normal',

  color: '$text',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    height: '$0_5',
    width: '$full',

    backgroundColor: '$primary-500',

    transformOrigin: 'left',
    transform: 'scaleX(0)',
    transition: '$accelerated',
  },

  '&:hover': {
    color: '$primary-500',

    '&::after': {
      transform: 'scaleX(1)',
    },
  },
})

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
          '@md': { spaceX: '$8', justifyContent: 'flex-start', width: 'max-content' },
        }}
      >
        <StyledAnchor href="https://github.com/Elia-Darwish" target="_blank" rel="noreferrer">
          Github
        </StyledAnchor>
        <StyledAnchor href="https://twitter.com/DarwishElia" target="_blank" rel="noreferrer">
          Twitter
        </StyledAnchor>
        <StyledAnchor href="https://www.linkedin.com/in/elia-darwish/" target="_blank" rel="noreferrer">
          LinkedIn
        </StyledAnchor>
        <StyledAnchor href="/documents/elia-darwish_CV.pdf" target="_blank" rel="noreferrer">
          CV
        </StyledAnchor>
      </HStack>

      <Text size="sm" css={{ opacity: 0.8, display: 'none', '@md': { display: 'block' } }}>
        2022 - Elia Darwish
      </Text>
    </HStack>
  )
}
