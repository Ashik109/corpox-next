#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '../src')

const SLUG = 'best-corporate-tips'

const MENU_LINKS = [
  ['Blog Details Video Popup', `/blog-details-video-popup/${SLUG}`],
  ['Blog Details Video Two', `/blog-details-video-two/${SLUG}`],
  ['Blog Details Right Sidebar', `/blog-details-right-sidebar/${SLUG}`],
  ['Blog Details Left Sidebar', `/blog-details-left-sidebar/${SLUG}`],
  ['Blog Details Video', `/blog-details-video/${SLUG}`],
  ['Details Standard', `/blog-details-standard/${SLUG}`],
  ['Blog Standard', `/blog-details-standard/${SLUG}`],
]

function fixContent(content) {
  let result = content
  for (const [label, href] of MENU_LINKS) {
    const esc = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const re = new RegExp(
      `(<Link href=")[^"]*("(?:[^>]|\\n)*?>\\s*${esc}(?!\\s+(?:Two|Popup)))`,
      'g'
    )
    result = result.replace(re, `$1${href}$2`)
  }
  result = result.replace(
    /href="\/blog-details-video\/best-corporate-tips">(\s*\n\s*)Blog Details Video Two/g,
    'href="/blog-details-video-two/best-corporate-tips">$1Blog Details Video Two'
  )
  result = result.replace(
    /href="\/blog-details-video\/best-corporate-tips">(\s*\n\s*)Blog Details Video Popup/g,
    'href="/blog-details-video-popup/best-corporate-tips">$1Blog Details Video Popup'
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

console.log('Menu link fix script ready')
