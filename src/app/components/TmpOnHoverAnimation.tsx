'use client'

import { useEffect } from 'react'

export default function TmpOnHoverAnimation() {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as Element | null
      const element = target?.closest<HTMLElement>('.tmponhover')

      if (!element) return

      const rect = element.getBoundingClientRect()
      element.style.setProperty('--x', `${event.clientX - rect.left}px`)
      element.style.setProperty('--y', `${event.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', handlePointerMove)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return null
}
