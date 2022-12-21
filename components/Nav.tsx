import { m } from 'framer-motion'
import Link from 'next/link'

import { Logo } from 'components/Logo'
import { AnchorPrimitive, ButtonPrimitive as Button, HStack } from 'components/primitives'
import { styled } from 'stitches.config'
import { useColorTheme } from 'state/theme'

const ThemeSwitch = styled(Button, {
  size: '$10',

  backgroundColor: '$bg',
  backgroundImage: 'url(/images/buttons/bg.svg)',
  backgroundSize: '12px',
  backgroundRepeat: 'repeat',

  border: '2px solid $text',
  borderRadius: '$lg',
  boxShadow: '$md',

  transition: '$accelerated',

  '&:hover': {
    transform: 'scale(1.05)',
  },
})

const AnimatedThemeSwitch = m(ThemeSwitch)

export function Nav() {
  const { toggleTheme } = useColorTheme()

  return (
    <HStack
      as="nav"
      css={{
        paddingX: '$8',
        paddingY: '$3',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@md': { paddingX: '$12' },
      }}
    >
      <AnchorPrimitive as={Link} href="/" title="home">
        <Logo css={{ size: '$18', color: '$heading', marginLeft: '-$3', '@md': { size: '$24' } }} />
      </AnchorPrimitive>

      <AnimatedThemeSwitch
        aria-label="switch theme"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileFocus={{ scale: 1.05 }}
        onClick={() => {
          toggleTheme()
        }}
      />
    </HStack>
  )
}
