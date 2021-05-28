import { Data } from './generateDocs'

/** clear fix is manually created */
const clearFix = null

/** debug-grid is manually created */
const debugGrid = null

/** debug is manually created */
const debug = null

const display: Data = {
  interfaceName: 'Display',
  folder: 'layout',
  base: ['d = display'],
  modifier: [
    'n = none',
    'b = block',
    'ib = inline-block',
    'it = inline-table',
    't = table',
    'tc = table-cell',
    't-row = table-row',
    't-columm = table-column',
    't-column-group = table-column-group',
  ],
  size: [''],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

const flex: Data = {
  interfaceName: 'Flex',
  folder: 'layout',
  base: [
    'flex',
    'inline-flex',
    'flex-auto',
    'flex-none',
    'flex-column',
    'flex-row',
    'flex-wrap',
    'flex-nowrap',
    'flex-wrap-reverse',
    'flex-column-reverse',
    'flex-row-reverse',
    'items-start',
    'items-end',
    'items-center',
    'items-baseline',
    'items-stretch',
    'self-start',
    'self-end',
    'self-center',
    'self-baseline',
    'self-stretch',
    'justify-start',
    'justify-end',
    'justify-center',
    'justify-between',
    'justify-around',
    'content-start',
    'content-end',
    'content-center',
    'content-between',
    'content-around',
    'content-stretch',
    'order-0',
    'order-1',
    'order-2',
    'order-3',
    'order-4',
    'order-5',
    'order-6',
    'order-7',
    'order-8',
    'order-last',
  ],
  modifier: [''],
  size: [''],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

const floats: Data = {
  interfaceName: 'Floats',
  folder: 'layout',
  base: ['f = float'],
  modifier: ['r = right', 'l = left', 'n = none'],
  size: [''],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

const spacing: Data = {
  interfaceName: 'Spacing',
  folder: 'layout',
  base: ['p = padding', 'm = margin'],
  modifier: [
    'a = all',
    'h = horizontal',
    'v = vertical',
    't = top',
    'r = right',
    'b = bottom',
    'l = left',
  ],
  size: [
    '0 = none',
    '1 = 1st step in spacing scale',
    '2 = 2nd step in spacing scale',
    '3 = 3rd step in spacing scale',
    '4 = 4th step in spacing scale',
    '5 = 5th step in spacing scale',
    '6 = 6th step in spacing scale',
    '7 = 7th step in spacing scale',
  ],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

const widths: Data = {
  interfaceName: 'Widths',
  folder: 'layout',
  base: ['w = width'],
  modifier: [
    '1 = 1st step in width scale',
    '2 = 2nd step in width scale',
    '3 = 3rd step in width scale',
    '4 = 4th step in width scale',
    '5 = 5th step in width scale',
    '-10 = literal value 10%',
    '-20 = literal value 20%',
    '-25 = literal value 25%',
    '-30 = literal value 30%',
    '-33 = literal value 33%',
    '-34 = literal value 34%',
    '-40 = literal value 40%',
    '-50 = literal value 50%',
    '-60 = literal value 60%',
    '-70 = literal value 70%',
    '-75 = literal value 75%',
    '-80 = literal value 80%',
    '-90 = literal value 90%',
    '-100 = literal value 100%',
    '-third = calc(100% / 3)',
    '-two-thirds = calc(100% / 1.5)',
    '-auto = string value auto',
  ],
  size: [''],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

const maxWidths: Data = {
  interfaceName: 'MaxWidths',
  folder: 'layout',
  base: ['mw = width'],
  modifier: [
    '1 = 1st step in width scale',
    '2 = 2nd step in width scale',
    '3 = 3rd step in width scale',
    '4 = 4th step in width scale',
    '5 = 5th step in width scale',
    '6 = 6th step in width scale',
    '7 = 7th step in width scale',
    '8 = 8th step in width scale',
    '9 = 9th step in width scale',
    '-100 = literal value %',
    '-none = none',
  ],
  size: [''],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

const heights: Data = {
  interfaceName: 'Heights',
  folder: 'layout',
  base: ['h = height'],
  modifier: [
    '1 = 1st step in width scale',
    '2 = 2nd step in width scale',
    '3 = 3rd step in width scale',
    '4 = 4th step in width scale',
    '5 = 5th step in width scale',
    '-25 = literal value 25%',
    '-50 = literal value 50%',
    '-75 = literal value 75%',
    '-100 = literal value 100%',
    '-auto = string value auto',
  ],
  size: [''],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

const position: Data = {
  interfaceName: 'Position',
  folder: 'layout',
  base: [
    'static = static',
    'relative = relative',
    'absolute = absolute',
    'fixed = fixed',
  ],
  modifier: [''],
  size: [''],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

export const layout = {
  debug,
  debugGrid,
  flex,
  spacing,
  floats,
  clearFix,
  display,
  widths,
  maxWidths,
  heights,
  position,
}
