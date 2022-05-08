import { styled } from 'stitches.config'
import { AnchorPrimitive } from 'components/primitives'

const StyledAnchor = styled(AnchorPrimitive, {
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-0.2em',
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

  variants: {
    variant: {
      link: {
        color: '$primary',
      },
      nav: {
        color: '$text',

        fontSize: '$base',
        textTransform: 'uppercase',
        fontWeight: '$normal',
      },
    },
  },

  defaultVariants: {
    variant: 'link',
  },
})

export const Anchor = StyledAnchor
