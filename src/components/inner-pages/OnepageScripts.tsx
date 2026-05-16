'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    invJs?: { m: (e?: unknown) => void }
  }
}

/** Loads vendor scripts required by static onepage sections (slick, jarallax, counters, etc.) */
export default function OnepageScripts() {
  useEffect(() => {
    return () => {
      document.body.classList.remove('onepage-js-ready')
    }
  }, [])

  return (
    <>
      <Script src="/assets/js/vendor/jquery.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/vendor/waypoint.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/vendor/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/gsap.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/scrolltigger.js" strategy="afterInteractive" />
      <Script src="/assets/js/vendor/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/jaralax.js" strategy="afterInteractive" />
      <Script src="/assets/js/plugins/odometer.js" strategy="afterInteractive" />
      <Script src="/assets/js/vendor/jquery-one-page-nav.js" strategy="afterInteractive" />
      <Script
        src="/assets/js/main.js"
        strategy="afterInteractive"
        onLoad={() => {
          document.body.classList.add('onepage-js-ready')
          if (typeof window.invJs?.m === 'function') {
            window.invJs.m()
          }
        }}
      />
    </>
  )
}
