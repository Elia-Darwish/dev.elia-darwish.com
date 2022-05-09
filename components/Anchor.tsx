import { ComponentProps, forwardRef } from 'react'
import { m, useAnimation } from 'framer-motion'

import { styled } from 'stitches.config'
import { AnchorPrimitive, Box } from 'components/primitives'

const StyledAnchor = styled(AnchorPrimitive, {
  position: 'relative',

  '&:hover, &:focus-visible': {
    color: '$primary-500',
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

const AnimatedAnchor = m(StyledAnchor)
const AnimatedBox = m(Box)

export const Anchor = forwardRef<HTMLAnchorElement, Omit<ComponentProps<typeof AnimatedAnchor>, 'ref'>>(function Anchor(
  { children, ...props },
  ref,
) {
  const control = useAnimation()

  return (
    <AnimatedAnchor
      onMouseEnter={() => {
        control.start({
          clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
        })
      }}
      onFocus={() => {
        control.start({
          clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
        })
      }}
      onMouseLeave={() => {
        control.start({
          clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 100%)'],
        })
      }}
      onBlur={() => {
        control.start({
          clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 100%)'],
        })
      }}
      {...props}
      ref={ref}
    >
      {children}
      <Box
        as="span"
        css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'translateY(80%)',

          height: '$2',
          width: '$full',
        }}
      >
        <AnimatedBox
          animate={control}
          css={{
            display: 'block',
            size: '$full',

            backgroundImage: 'url(/images/bg/bg-wiggle-wide-3-primary-animated.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',

            clipPath: 'inset(0% 100% 0% 0%)',
          }}
          transition={{
            duration: 0.5,
          }}
        />
      </Box>
    </AnimatedAnchor>
  )
})
