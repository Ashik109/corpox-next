'use client'

import HeaderOne from '../../app/01-index-consulting/HeaderOne'

type Props = {
  className?: string
}

/** Multipage inner pages: same mega-menu as home demos, opaque sticky header */
export default function MultipageHeader({ className = '' }: Props) {
  return <HeaderOne className={className} variant="inner" />
}
