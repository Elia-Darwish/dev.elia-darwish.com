import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { useCallback } from 'react'

import { darkTheme, Themes } from 'stitches.config'
import { isBrowser } from 'utils'

const KEY = 'theme'

export enum ColorThemeStatus {
  INITIALIZING = 'INITIALIZING',
  INITIALIZED_FROM_DEFAULT_VALUE = 'INITIALIZED_FROM_DEFAULT_VALUE',
  INITIALIZED_FROM_STORAGE = 'INITIALIZED_FROM_STORAGE',
  CHANGED_BY_USER = 'CHANGED_BY_USER',
}

export interface ColorThemeState {
  currentTheme: Themes
  status: ColorThemeStatus
  toggleTheme: VoidFunction
}

const getInitialState = (): Omit<ColorThemeState, 'toggleTheme'> => {
  if (!isBrowser) {
    return {
      currentTheme: Themes.light,
      status: ColorThemeStatus.INITIALIZING,
    }
  }

  const valueInStorage = window.localStorage.getItem(KEY)

  switch (valueInStorage) {
    case Themes.light: {
      return {
        currentTheme: Themes.light,
        status: ColorThemeStatus.INITIALIZED_FROM_STORAGE,
      }
    }

    case Themes.dark: {
      document.body.classList.add(darkTheme)

      return {
        currentTheme: Themes.dark,
        status: ColorThemeStatus.INITIALIZED_FROM_STORAGE,
      }
    }

    default: {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (prefersDarkMode) {
        document.body.classList.add(darkTheme)
      }

      return {
        currentTheme: prefersDarkMode ? Themes.dark : Themes.light,
        status: ColorThemeStatus.INITIALIZED_FROM_DEFAULT_VALUE,
      }
    }
  }
}

const ColorThemeContext = createContext<ColorThemeState | null>(null)

export function useColorTheme() {
  const state = useContext(ColorThemeContext)

  if (!state) throw new Error('useColorTheme must be used within a ColorThemeProvider')

  return state
}

export function ThemeProvider({ children }: PropsWithChildren<unknown>) {
  const [state, setState] = useState(getInitialState)

  const toggleTheme = useCallback(() => {
    setState((prevState) => {
      if (prevState.currentTheme === Themes.light) {
        document.body.classList.add(darkTheme)

        return {
          ...prevState,
          currentTheme: Themes.dark,
        }
      } else {
        document.body.classList.remove(darkTheme)

        return {
          ...prevState,
          currentTheme: Themes.light,
        }
      }
    })
  }, [])

  return (
    <ColorThemeContext.Provider
      value={{
        ...state,
        toggleTheme,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  )
}
