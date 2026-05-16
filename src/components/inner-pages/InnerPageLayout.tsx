import React from 'react'
import MultipageHeader from '../multipage-inner/MultipageHeader'
import MultipageInnerFooter from '../multipage-inner/MultipageInnerFooter'
import BodyClass from '../../app/white-01-index-consulting/BodyClass'
import InnerPageAnimations from './InnerPageAnimations'
import OnepageScripts from './OnepageScripts'

type Props = {
  children: React.ReactNode
  lightMode?: boolean
  bodyClass?: string
}

export default function InnerPageLayout({ children, lightMode, bodyClass }: Props) {
  const cls = [lightMode ? 'active-light-mode' : '', bodyClass].filter(Boolean).join(' ')
  return (
    <>
      {cls ? <BodyClass className={cls} /> : null}
      <main className="page-wrapper">
        <InnerPageAnimations />
        <OnepageScripts />
        <MultipageHeader />
        {children}
        <MultipageInnerFooter />
      </main>
    </>
  )
}
