import { darkTheme } from 'stitches.config'

export const KEY = 'theme'

export enum Themes {
  dark = 'dark',
  light = 'light',
}

export function toggleTheme() {
  if (document.body.classList.contains(darkTheme.className)) {
    document.body.classList.remove(darkTheme.className)
    localStorage.setItem(KEY, Themes.light)
  } else {
    document.body.classList.add(darkTheme.className)
    localStorage.setItem(KEY, Themes.dark)
  }
}
