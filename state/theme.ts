import { proxy, subscribe, useSnapshot } from 'valtio'
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
}

const getInitialState = (): ColorThemeState => {
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

export const colorThemeState = proxy<ColorThemeState>(getInitialState())

subscribe(colorThemeState, () => {
  if (colorThemeState.currentTheme === Themes.dark) {
    document.body.classList.add(darkTheme)
  } else {
    document.body.classList.remove(darkTheme)
  }

  if (colorThemeState.status !== ColorThemeStatus.INITIALIZED_FROM_DEFAULT_VALUE) {
    window.localStorage.setItem(KEY, colorThemeState.currentTheme)
  }
})

export function useColorTheme() {
  const state = useSnapshot(colorThemeState)

  const toggleColorTheme = useCallback((): void => {
    colorThemeState.status = ColorThemeStatus.CHANGED_BY_USER

    if (colorThemeState.currentTheme === Themes.dark) {
      colorThemeState.currentTheme = Themes.light
    } else {
      colorThemeState.currentTheme = Themes.dark
    }
  }, [])

  return {
    ...state,
    toggleColorTheme,
  }
}
