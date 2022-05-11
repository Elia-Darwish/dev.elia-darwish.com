import { ComponentProps, forwardRef } from 'react'
import { m, Variants } from 'framer-motion'

import { AnchorPrimitive, Box } from './primitives'

import { styled } from 'stitches.config'

const StyledButton = styled(AnchorPrimitive, {
  display: 'inline-block',

  position: 'relative',
  isolation: 'isolate',

  fontFamily: '$accent',
  fontSize: '$md',
  fontWeight: '$medium',
  whiteSpace: 'nowrap',
  lineHeight: '$none',
  textTransform: 'uppercase',

  paddingX: '$8',
  paddingY: '$3',

  color: '$primary-500',

  borderRadius: '$xs',
  border: '1px solid $primary-500',

  overflow: 'hidden',

  '@6xl': {
    fontSize: '$xl',
    paddingX: '$12',
    paddingY: '$4',
  },
})

const MotionButton = m(StyledButton)
const MotionBox = m(Box)

const buttonVariants: Variants = {
  idle: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
  },
}

const outerBoxVariants: Variants = {
  idle: {
    x: '-100%',
  },
  hover: {
    x: 0,
  },
}

const innerBoxVariants: Variants = {
  idle: {
    x: '100%',
  },
  hover: {
    x: 0,
  },
}

export const Button = forwardRef<HTMLButtonElement, Omit<ComponentProps<typeof MotionButton>, 'ref'>>(function Button(
  { children, ...props },
  ref,
) {
  return (
    <MotionButton
      variants={buttonVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      whileFocus="hover"
      ref={ref}
      {...props}
    >
      {children}
      <MotionBox
        variants={outerBoxVariants}
        transition={{
          duration: 0.5,
        }}
        css={{
          position: 'absolute',
          inset: '-$2',
          backgroundColor: '$primary-500',
          backgroundImage: 'url(/images/bg/bg-dark-animated.svg)',
          backgroundSize: '12px',
          backgroundRepeat: 'repeat',

          color: '$white',
          overflow: 'hidden',

          '@reduce-motion': {
            backgroundImage: 'url(/images/bg/bg-dark.svg)',
          },
        }}
      >
        <MotionBox
          variants={innerBoxVariants}
          transition={{
            duration: 0.5,
          }}
          css={{ size: '$full', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {children}
        </MotionBox>
      </MotionBox>
    </MotionButton>
  )
})
