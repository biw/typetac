export interface Data {
  interfaceName: string
  base: string[]
  modifier: string[]
  size: string[]
  mediaQuery: string[]
}

export const spacing: Data = {
  interfaceName: 'Spacing',
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

export const float: Data = {
  interfaceName: 'Float',
  base: ['f = float'],
  modifier: ['n = none', 't = top', 'l = left'],
  size: [''],
  mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
}

export const flex: Data = {
  interfaceName: 'Flex',
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
