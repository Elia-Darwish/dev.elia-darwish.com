const valueInStorage = window.localStorage.getItem('theme')

switch (valueInStorage) {
  case 'light': {
    window.__currentTheme = 'light'
    break
  }

  case 'dark': {
    window.__currentTheme = 'dark'
    break
  }

  default: {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    window.__currentTheme = prefersDarkMode ? 'dark' : 'light'
    break
  }
}
