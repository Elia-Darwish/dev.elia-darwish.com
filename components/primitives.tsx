import { styled } from 'stitches.config'

const StyledBox = styled('div', {
  transition: '$background',

  variants: {
    isolate: {
      true: {
        isolation: 'isolate',
      },
    },
  },
})

const StyledHStack = styled(StyledBox, {
  display: 'flex',
})

const StyledVStack = styled(StyledHStack, {
  flexDirection: 'column',
})

const StyledGrid = styled(StyledBox, {
  display: 'grid',
})

const StyledCenter = styled(StyledHStack, {
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },

  defaultVariants: {
    direction: 'vertical',
  },
})

const StyledAnchor = styled('a', {
  fontFamily: '$sans',
  textDecoration: 'none',
  lineHeight: '$body',

  color: 'inherit',
})

const StyledIcon = styled('span', {
  display: 'inline-block',
  $$size: '$sizes$6',

  '& > svg': {
    display: 'block',
    size: '$$size',
    strokeWidth: 1.5,
  },

  variants: {
    size: {
      'fit-child': {
        $$size: 'auto',
      },
      sm: {
        $$size: '$sizes$4',
      },
      md: {
        $$size: '$sizes$5',
      },
      lg: {
        $$size: '$sizes$6',
      },
      xl: {
        $$size: '$sizes$8',
      },
      '2xl': {
        $$size: '$sizes$10',
      },
      '3xl': {
        $$size: '$sizes$12',
      },
      '4xl': {
        $$size: '$sizes$16',
      },
      '5xl': {
        $$size: '$sizes$24',
      },
    },
    variant: {
      flat: {
        color: '$text',
      },
      light: {
        color: '$white',
      },
      dark: {
        color: '$black',
      },
      primary: {
        color: '$primary300',
      },
      success: {
        color: '$success300',
      },
      warn: {
        color: '$warn300',
      },
      error: {
        color: '$error300',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'flat',
  },
})

const StyledButton = styled('button', {
  appearance: 'none',

  backgroundColor: 'transparent',
  border: 'none',

  userSelect: 'none',
  textAlign: 'initial',

  '@supports not selector(:focus-visible)': {
    '&:focus': {
      position: 'static',
      zIndex: 'auto',

      outline: 'none',
      boxShadow: '$outline',
    },
  },

  '@supports selector(:focus-visible)': {
    '&:focus-visible': {
      position: 'relative',
      zIndex: '$floating',

      outline: 'none',
      boxShadow: '$outline',
    },
  },

  '&:disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
})

export const Box = StyledBox
export const Center = StyledCenter
export const HStack = StyledHStack
export const VStack = StyledVStack
export const Grid = StyledGrid
export const Icon = StyledIcon
export const Anchor = StyledAnchor
export const ButtonPrimitive = StyledButton
