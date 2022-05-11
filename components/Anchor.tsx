import { ComponentProps, forwardRef, MouseEventHandler } from 'react'
import { m, useAnimation } from 'framer-motion'

import { styled } from 'stitches.config'
import { AnchorPrimitive, Span } from 'components/primitives'
import { composeEventHandlers } from 'utils'

const StyledAnchor = styled(AnchorPrimitive, {
  position: 'relative',

  '&:hover, &:focus-visible': {
    color: '$primary-500',
  },

  variants: {
    variant: {
      link: {
        color: '$primary-500',
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
const AnimatedSpan = m(Span)

export const Anchor = forwardRef<HTMLAnchorElement, Omit<ComponentProps<typeof AnimatedAnchor>, 'ref'>>(function Anchor(
  { children, onMouseEnter, onMouseLeave, onFocus, onBlur, ...props },
  ref,
) {
  const control = useAnimation()

  function handleMouseEnter() {
    control.start({
      clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
    })
  }

  function handleMouseLeave() {
    control.start({
      clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 100%)'],
    })
  }

  return (
    <AnimatedAnchor
      onMouseEnter={composeEventHandlers(onMouseEnter, handleMouseEnter)}
      onFocus={composeEventHandlers(onFocus, handleMouseEnter)}
      onMouseLeave={composeEventHandlers(onMouseLeave, handleMouseLeave)}
      onBlur={composeEventHandlers(onBlur, handleMouseLeave)}
      {...props}
      ref={ref}
    >
      {children}
      <AnimatedSpan
        css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          transform: 'translateY(80%)',

          height: '$2',
          width: '$full',
        }}
      >
        <AnimatedSpan
          animate={control}
          css={{
            display: 'block',
            size: '$full',

            backgroundImage: 'url(/images/bg/bg-wiggle-wide-3-primary-animated-right.svg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x',

            clipPath: 'inset(0% 100% 0% 0%)',
          }}
          transition={{
            duration: 0.5,
          }}
        />
      </AnimatedSpan>
    </AnimatedAnchor>
  )
})
