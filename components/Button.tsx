import { forwardRef } from 'react'
import { m, Variants } from 'framer-motion'
import classNames from 'classnames'

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

export const Button = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof m.a>>(function Button(
  { children, className, ...props },
  ref,
) {
  return (
    <m.a
      className={classNames(
        'relative isolate inline-block overflow-hidden whitespace-nowrap rounded-sm border border-primary-500 px-8 py-3 font-accent text-md font-medium uppercase leading-none text-primary-500 6xl:px-12 6xl:py-4 6xl:text-xl',
        className,
      )}
      variants={buttonVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      whileFocus="hover"
      ref={ref}
      {...props}
    >
      {children}
      <m.div
        variants={outerBoxVariants}
        transition={{
          duration: 0.6,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="absolute -inset-2 overflow-hidden bg-primary-500 bg-bg-dark-animated bg-[length:12px] bg-repeat text-white motion-reduce:bg-bg-dark"
      >
        <m.div
          variants={innerBoxVariants}
          transition={{
            duration: 0.6,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="flex h-full w-full items-center justify-center"
        >
          {children}
        </m.div>
      </m.div>
    </m.a>
  )
})
