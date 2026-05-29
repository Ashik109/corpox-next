import React from 'react'
import MultipageHeader from '../multipage-inner/MultipageHeader'
import MultipageInnerFooter from '../multipage-inner/MultipageInnerFooter'
import BodyClass from '../../app/white-01-index-consulting/BodyClass'
import InnerPageAnimations from './InnerPageAnimations'
import { WHITE_HEADER_ON_LIGHT } from '../../app/components/HeaderModeClasses'

type Props = {
  children: React.ReactNode
  lightMode?: boolean
  bodyClass?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}

export default function InnerPageLayout({ children, lightMode, bodyClass, header, footer }: Props) {
  const cls = ['dark-home', lightMode ? 'active-light-mode' : '', bodyClass].filter(Boolean).join(' ')
  return (
    <>
      {cls ? <BodyClass className={cls} /> : null}
      <main className="page-wrapper">
        <InnerPageAnimations />
        {header ?? <MultipageHeader className={lightMode ? WHITE_HEADER_ON_LIGHT : ''} />}
        {children}
        {footer ?? <MultipageInnerFooter />}
      </main>
    </>
  )
}
