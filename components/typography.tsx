import { styled } from 'stitches.config'

const StyledText = styled('p', {
  fontFamily: '$primary',
  lineHeight: '$normal',

  color: '$text',

  variants: {
    size: {
      '6xl': {
        fontSize: '$6xl',
      },
      '5xl': {
        fontSize: '$5xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
      '3xl': {
        fontSize: '$3xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      xl: {
        fontSize: '$xl',
      },
      lg: {
        fontSize: '$lg',
      },
      md: {
        fontSize: '$md',
      },
      base: {
        fontSize: '$base',
      },
      sm: {
        fontSize: '$sm',
      },
      xs: {
        fontSize: '$xs',
      },
    },
    weight: {
      thin: {
        fontWeight: '$thin',
      },
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
      black: {
        fontWeight: '$black',
      },
    },
  },

  defaultVariants: {
    size: 'base',
    weight: 'normal',
  },
})

const StyledHeading = styled('h1', {
  fontFamily: '$accent',
  lineHeight: '$tight',
  fontWeight: '$normal',

  color: '$heading',

  variants: {
    size: {
      '6xl': {
        fontSize: '$6xl',
      },
      '5xl': {
        fontSize: '$5xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
      '3xl': {
        fontSize: '$3xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      xl: {
        fontSize: '$xl',
      },
      lg: {
        fontSize: '$lg',
      },
      md: {
        fontSize: '$md',
      },
      base: {
        fontSize: '$base',
      },
      sm: {
        fontSize: '$sm',
      },
      xs: {
        fontSize: '$xs',
      },
    },
    weight: {
      thin: {
        fontWeight: '$thin',
      },
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
      black: {
        fontWeight: '$black',
      },
    },
  },

  defaultVariants: {
    size: 'xl',
    weight: 'medium',
  },
})

export const Text = StyledText
export const Heading = StyledHeading
