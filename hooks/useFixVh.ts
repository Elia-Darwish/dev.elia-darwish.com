import { useEffect } from 'react'

import { setVh } from 'utils'

export function useFixVh(): void {
  useEffect(() => {
    window.addEventListener('resize', setVh)
    setVh()

    return () => window.removeEventListener('resize', setVh)
  }, [])
}
