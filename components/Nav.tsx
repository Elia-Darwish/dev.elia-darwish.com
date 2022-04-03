import { m } from 'framer-motion'

import { Logo } from './Logo'
import { Box, ButtonPrimitive as Button, HStack } from './primitives'

import { styled, Themes } from 'stitches.config'
import { useColorTheme } from 'state/theme'

const ThemeSwitch = styled(Button, {
  size: '$12',

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
  const { toggleColorTheme } = useColorTheme()

  return (
    <HStack as="nav" css={{ paddingX: '$12', paddingY: '$3', justifyContent: 'space-between', alignItems: 'center' }}>
      <Logo css={{ size: '$24', color: '$heading' }} />

      <AnimatedThemeSwitch
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          toggleColorTheme()
        }}
      />
    </HStack>
  )
}
