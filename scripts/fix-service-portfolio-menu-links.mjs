#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '../src')

const SERVICE_SLUG = 'management-leadership'
const PORTFOLIO_SLUG = 'brand-refresh-venture'

const SERVICE_LINKS = [
  ['Service Details center', `/service-details-center/${SERVICE_SLUG}`],
  ['Service Details Six', null],
  ['Service Details Four', `/service-details-four/${SERVICE_SLUG}`],
  ['Service Details Three', `/service-details-three/${SERVICE_SLUG}`],
  ['Service Details Two', `/service-details-two/${SERVICE_SLUG}`],
  ['Service Details', `/service-details/${SERVICE_SLUG}`],
]

const PORTFOLIO_LINKS = [
  ['Portfolio Details Slider', `/portfolio-details-four/${PORTFOLIO_SLUG}`],
  ['Portfolio Details Video 2', `/portfolio-details-five/${PORTFOLIO_SLUG}`],
  ['Portfolio Details Video', `/portfolio-details-three/${PORTFOLIO_SLUG}`],
  ['Portfolio Details Two', `/portfolio-details-two/${PORTFOLIO_SLUG}`],
  ['Portfolio Details', `/portfolio-details/${PORTFOLIO_SLUG}`],
]

function fixContent(content) {
  let result = content
  for (const [label, href] of SERVICE_LINKS) {
    if (!href) continue
    const esc = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const re = new RegExp(
      `(<Link href=")[^"]*("(?:[^>]|\\n)*?>\\s*${esc}(?!\\s+(?:Two|Three|Four|center|Six)))`,
      'gi'
    )
    result = result.replace(re, `$1${href}$2`)
  }
  for (const [label, href] of PORTFOLIO_LINKS) {
    const esc = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const re = new RegExp(
      `(<Link href=")[^"]*("(?:[^>]|\\n)*?>\\s*${esc}(?!\\s+(?:Two|Video|Slider)))`,
      'gi'
    )
    result = result.replace(re, `$1${href}$2`)
  }
  result = result.replace(
    /href="\/portfolio-details-three\/[^"]+">(\s*\n\s*)Portfolio Details Video 2/gi,
    `href="/portfolio-details-five/${PORTFOLIO_SLUG}">$1Portfolio Details Video 2`
  )
  result = result.replace(
    /href="\/portfolio-details-three\/[^"]+">(\s*\n\s*)Portfolio Details Video Popup/gi,
    `href="/portfolio-details-five/${PORTFOLIO_SLUG}">$1Portfolio Details Video 2`
  )
  return result
}

const headers = [
  'app/01-index-consulting/HeaderOne.tsx',
  'app/02-index-business-consulting-2/HeaderTwo.tsx',
  'app/03-agency/HeaderThree.tsx',
  'app/04-services-agency/HeaderFour.tsx',
  'app/05-corporate/HeaderFive.tsx',
  'app/06-startup/HeaderSix.tsx',
  'app/26-construction/HeaderConstruction.tsx',
]

for (const rel of headers) {
  const file = path.join(SRC, rel)
  if (!fs.existsSync(file)) continue
  const before = fs.readFileSync(file, 'utf8')
  const after = fixContent(before)
  if (after !== before) {
    fs.writeFileSync(file, after)
    console.log('updated', rel)
  }
}

console.log('Menu links updated')
