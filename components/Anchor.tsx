import { forwardRef, useRef } from 'react'
import { m, useAnimation } from 'framer-motion'
import Link from 'next/link'
import classNames from 'classnames'

import { composeEventHandlers } from 'utils'

interface AnchorProps extends React.ComponentPropsWithoutRef<'a'> {
  as?: typeof Link
  variant?: 'link' | 'nav'
}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(function Anchor(
  { children, onMouseEnter, onMouseLeave, onFocus, onBlur, className, as, variant = 'link', ...props },
  ref,
) {
  const Element: React.ElementType = as ?? 'a'

  const animation = useRef<Promise<unknown>>()
  const control = useAnimation()

  async function handleMouseEnter() {
    await animation.current
    animation.current = control.start({
      clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
    })
  }

  async function handleMouseLeave() {
    await animation.current
    animation.current = control.start({
      clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 100%)'],
    })
  }

  return (
    <Element
      className={classNames(className, 'relative transition hover:text-primary-500 focus-visible:text-primary-500', {
        'text-primary-500': variant === 'link',
        'text-sm font-normal uppercase text-text md:text-base': variant === 'nav',
      })}
      onMouseEnter={composeEventHandlers(onMouseEnter, handleMouseEnter)}
      onFocus={composeEventHandlers(onFocus, handleMouseEnter)}
      onMouseLeave={composeEventHandlers(onMouseLeave, handleMouseLeave)}
      onBlur={composeEventHandlers(onBlur, handleMouseLeave)}
      {...props}
      ref={ref}
    >
      {children}
      <m.span className="absolute bottom-0 left-0 h-2 w-full" initial={{ y: '80%' }}>
        <m.span
          animate={control}
          className="bg block h-full w-full bg-wiggle-wide-3-primary-animated-right bg-contain bg-repeat-x"
          initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
          transition={{
            duration: 0.8,
          }}
        />
      </m.span>
    </Element>
  )
})
