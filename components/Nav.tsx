import { m } from 'framer-motion'
import Link from 'next/link'

import { Logo } from 'components/Logo'
import { toggleTheme } from 'state/theme'

export function Nav() {
  return (
    <nav className="flex items-center justify-end px-6 py-3 md:px-12">
      <m.button
        className="h-10 w-10 rounded-lg border-2 border-text shadow-md"
        aria-label="switch theme"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileFocus={{ scale: 1.05 }}
        onClick={toggleTheme}
      />
    </nav>
  )
}
