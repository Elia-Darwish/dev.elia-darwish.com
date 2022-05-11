import Cookies from 'js-cookie'
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { useCallback } from 'react'

import { Box } from 'components/primitives'
import { darkTheme, Themes } from 'stitches.config'
import { isBrowser } from 'utils'

const KEY = 'theme'

export interface ColorThemeState {
  currentTheme: Themes
  toggleTheme: VoidFunction
}

function getInitialState() {
  if (!isBrowser) {
    return Themes.light
  }

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return prefersDarkMode ? Themes.dark : Themes.light
}

const ColorThemeContext = createContext<ColorThemeState | null>(null)

export function useColorTheme() {
  const state = useContext(ColorThemeContext)

  if (!state) throw new Error('useColorTheme must be used within a ColorThemeProvider')

  return state
}

interface ThemeProviderProps {
  initial: Themes | null
}

export function ThemeProvider({ children, initial }: PropsWithChildren<ThemeProviderProps>) {
  const [currentTheme, setCurrentTheme] = useState(() => initial ?? getInitialState())

  useEffect(() => {
    if (!initial) {
      const storedTheme = Cookies.get(KEY)

      if (storedTheme) {
        setCurrentTheme(storedTheme as Themes)
      }
    }
  }, [initial])

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prevState) => {
      const nextTheme = prevState === Themes.light ? Themes.dark : Themes.light
      Cookies.set(KEY, nextTheme)
      return nextTheme
    })
  }, [])

  return (
    <ColorThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme,
      }}
    >
      <Box
        className={currentTheme === Themes.dark ? darkTheme : ''}
        css={{
          size: '$full',
        }}
      >
        {children}
      </Box>
    </ColorThemeContext.Provider>
  )
}
