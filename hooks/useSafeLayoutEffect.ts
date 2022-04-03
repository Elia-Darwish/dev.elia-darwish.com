import { useEffect, useLayoutEffect } from 'react'

import { isBrowser } from 'utils'

export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect
