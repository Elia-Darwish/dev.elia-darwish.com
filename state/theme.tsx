export const KEY = 'theme'

export const THEMES = {
  dark: 'dark',
  light: 'light',
} as const

export type Themes = keyof typeof THEMES

export function toggleTheme() {
  if (document.documentElement.classList.contains(THEMES.dark)) {
    document.documentElement.classList.remove(THEMES.dark)
    localStorage.setItem(KEY, THEMES.light)
  } else {
    document.documentElement.classList.add(THEMES.dark)
    localStorage.setItem(KEY, THEMES.dark)
  }
}
