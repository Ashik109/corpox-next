import React from 'react'
import MultipageHeader from '../multipage-inner/MultipageHeader'
import MultipageInnerFooter from '../multipage-inner/MultipageInnerFooter'
import BodyClass from '../../app/white-01-index-consulting/BodyClass'
import InnerPageAnimations from './InnerPageAnimations'

type Props = {
  children: React.ReactNode
  lightMode?: boolean
  bodyClass?: string
  header?: React.ReactNode
}

export default function InnerPageLayout({ children, lightMode, bodyClass, header }: Props) {
  const cls = [lightMode ? 'active-light-mode' : '', bodyClass].filter(Boolean).join(' ')
  return (
    <>
      {cls ? <BodyClass className={cls} /> : null}
      <main className="page-wrapper">
        <InnerPageAnimations />
        {header ?? <MultipageHeader />}
        {children}
        <MultipageInnerFooter />
      </main>
    </>
  )
}
