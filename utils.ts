export function canUseDOM(): boolean {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement)
}

export const isBrowser = canUseDOM()

export function setVh(): void {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
