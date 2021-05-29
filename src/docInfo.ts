import { Data } from './buildDocs'

/** from https://github.com/tachyons-css/tachyons/tree/main/src */
type cssFilenames =
  | '_aspect-ratios.css'
  | '_background-position.css'
  | '_background-size.css'
  | '_border-colors.css'
  | '_border-radius.css'
  | '_border-style.css'
  | '_border-widths.css'
  | '_borders.css'
  | '_box-shadow.css'
  | '_box-sizing.css'
  | '_clears.css'
  | '_code.css'
  | '_colors.css'
  | '_coordinates.css'
  | '_debug-children.css'
  | '_debug-grid.css'
  | '_debug.css'
  | '_display.css'
  | '_flexbox.css'
  | '_floats.css'
  | '_font-family.css'
  | '_font-style.css'
  | '_font-weight.css'
  | '_forms.css'
  | '_heights.css'
  | '_hovers.css'
  | '_images.css'
  | '_letter-spacing.css'
  | '_line-height.css'
  | '_links.css'
  | '_lists.css'
  | '_max-widths.css'
  | '_media-queries.css'
  | '_module-template.css'
  | '_negative-margins.css'
  | '_nested.css'
  | '_normalize.css'
  | '_opacity.css'
  | '_outlines.css'
  | '_overflow.css'
  | '_position.css'
  | '_rotations.css'
  | '_skins-pseudo.css'
  | '_skins.css'
  | '_spacing.css'
  | '_styles.css'
  | '_tables.css'
  | '_text-align.css'
  | '_text-decoration.css'
  | '_text-transform.css'
  | '_type-scale.css'
  | '_typography.css'
  | '_utilities.css'
  | '_vertical-align.css'
  | '_visibility.css'
  | '_white-space.css'
  | '_widths.css'
  | '_word-break.css'
  | '_z-index.css'

export const allCSSFiles: { [k in cssFilenames]: Data | null } = {
  '_aspect-ratios.css': {
    interfaceName: 'AspectRatios',
    base: [
      'aspect-ratio',
      'aspect-ratio--16x9',
      'aspect-ratio--9x16',
      'aspect-ratio--4x3',
      'aspect-ratio--3x4',
      'aspect-ratio--6x4',
      'aspect-ratio--4x6',
      'aspect-ratio--8x5',
      'aspect-ratio--5x8',
      'aspect-ratio--7x5',
      'aspect-ratio--5x7',
      'aspect-ratio--1x1',
      'aspect-ratio--object',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_background-position.css': {
    interfaceName: 'BackgroundPosition',
    base: ['bg = background'],
    modifier: [
      '-center = center center',
      '-top = top center',
      '-right = center right',
      '-bottom = bottom center',
      '-left = center left',
    ],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_background-size.css': {
    interfaceName: 'BackgroundSize',
    base: ['cover', 'contain'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_border-colors.css': {
    interfaceName: 'BorderColors',
    base: ['b = border'],
    modifier: [
      '--black',
      '--near-black',
      '--dark-gray',
      '--mid-gray',
      '--gray',
      '--silver',
      '--light-silver',
      '--moon-gray',
      '--light-gray',
      '--near-white',
      '--white',
      '--white-90',
      '--white-80',
      '--white-70',
      '--white-60',
      '--white-50',
      '--white-40',
      '--white-30',
      '--white-20',
      '--white-10',
      '--white-05',
      '--white-025',
      '--white-0125',
      '--black-90',
      '--black-80',
      '--black-70',
      '--black-60',
      '--black-50',
      '--black-40',
      '--black-30',
      '--black-20',
      '--black-10',
      '--black-05',
      '--black-025',
      '--black-0125',
      '--dark-red',
      '--red',
      '--light-red',
      '--orange',
      '--gold',
      '--yellow',
      '--light-yellow',
      '--purple',
      '--light-purple',
      '--dark-pink',
      '--hot-pink',
      '--pink',
      '--light-pink',
      '--dark-green',
      '--green',
      '--light-green',
      '--navy',
      '--dark-blue',
      '--blue',
      '--light-blue',
      '--lightest-blue',
      '--washed-blue',
      '--washed-green',
      '--washed-yellow',
      '--washed-red',
      '--transparent',
      '--inherit',
      '--initial',
      '--unset',
    ],
    size: [''],
    mediaQuery: [''],
  },
  '_border-radius.css': {
    interfaceName: 'BorderRadius',
    base: ['br = border-radius'],
    modifier: [
      '0 = 0/none',
      '1 = 1st step in scale',
      '2 = 2nd step in scale',
      '3 = 3rd step in scale',
      '4 = 4th step in scale',
      '-100 = 100%',
      '-pill = 9999px',
    ],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_border-style.css': {
    interfaceName: 'BorderStyle',
    base: ['b = border-style'],
    modifier: [
      '--none = none',
      '--dotted = dotted',
      '--dashed = dashed',
      '--solid  = solid',
    ],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_border-widths.css': {
    interfaceName: 'BorderWidths',
    base: ['bw = border-width'],
    modifier: [
      '0 = 0 width border',
      '1 = 1st step in border-width scale',
      '2 = 2nd step in border-width scale',
      '3 = 3rd step in border-width scale',
      '4 = 4th step in border-width scale',
      '5 = 5th step in border-width scale',
    ],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_borders.css': {
    interfaceName: 'Borders',
    base: ['b = border'],
    modifier: [
      'a = all',
      't = top',
      'r = right',
      'b = bottom',
      'l = left',
      'n = none',
    ],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_box-shadow.css': {
    interfaceName: 'BoxShadow',
    base: ['shadow-1', 'shadow-2', 'shadow-3', 'shadow-4', 'shadow-5'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_box-sizing.css': null, // https://github.com/tachyons-css/tachyons/blob/main/src/_box-sizing.css
  '_clears.css': {
    interfaceName: 'Clears',
    base: ['cf', 'cl', 'cr', 'cb', 'cn'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_code.css': {
    interfaceName: 'Code',
    base: ['pre'],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_colors.css': null, // https://github.com/tachyons-css/tachyons/blob/main/src/_colors.css
  '_coordinates.css': {
    interfaceName: 'Coordinates',
    base: ['top', 'bottom', 'right', 'left'],
    modifier: [
      '-0 = literal value 0',
      '-1 = literal value 1',
      '-2 = literal value 2',
      '--1 = literal value -1',
      '--2 = literal value -2',
    ],
    size: [''],
    extraOutsideClasses: ['absolute--fill'],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_debug-children.css': {
    interfaceName: 'DebugChildren',
    base: ['debug', 'debug-white', 'debug-black'],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_debug-grid.css': {
    interfaceName: 'DebugGrid',
    base: ['debug-grid', 'debug-grid-16', 'debug-grid-8-solid'],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_debug.css': null, // https://github.com/tachyons-css/tachyons/blob/main/src/_debug.css
  '_display.css': {
    interfaceName: 'Display',
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
  },
  '_flexbox.css': {
    interfaceName: 'Flexbox',
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
      'flex-grow-0',
      'flex-grow-1',
      'flex-shrink-0',
      'flex-shrink-1',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_floats.css': {
    interfaceName: 'Floats',
    base: ['f = float'],
    modifier: ['r = right', 'l = left', 'n = none'],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_font-family.css': {
    interfaceName: 'FontFamily',
    base: [
      'sans-serif',
      'serif',
      'system-sans-serif',
      'system-serif',
      'code = monospaced typeface ',
      'courier = monospaced typeface',
      'helvetica = sans-serif typeface',
      'avenir = sans-serif typeface',
      'athelas = serif typeface',
      'georgia = serif typeface',
      'times = serif typeface',
      'bodoni = serif typeface',
      'calisto = serif typeface',
      'garamond = serif typeface',
      'baskerville = serif typeface',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_font-style.css': {
    interfaceName: 'FontStyle',
    base: ['i', 'fs-normal'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_font-weight.css': {
    interfaceName: 'FontWeight',
    base: ['fw = font-weight'],
    modifier: [
      '1 = literal value 100',
      '2 = literal value 200',
      '3 = literal value 300',
      '4 = literal value 400',
      '5 = literal value 500',
      '6 = literal value 600',
      '7 = literal value 700',
      '8 = literal value 800',
      '9 = literal value 900',
    ],
    size: [''],
    extraOutsideClasses: ['normal', 'b'],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_forms.css': {
    interfaceName: 'Forms',
    base: ['input-reset', 'button-reset'],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_heights.css': {
    interfaceName: 'Heights',
    base: [
      'h = height',
      'min-h = min-height',
      'min-vh = min-height vertical screen height',
      'vh = vertical screen height',
    ],
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
      '-inherit = string value of inherit',
    ],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_hovers.css': {
    interfaceName: 'Hovers',
    base: [
      'dim = Dim element on hover by adding the dim class',
      'glow = Animate opacity to 100% on hover by adding the glow class',
      'hide-child = Hide child & reveal on hover',
      'child',
      'underline-hover',
      'grow = Can combine this with overflow-hidden to make background images grow on hover even if you are using background-size: cover ',
      'grow-large',
      'pointer',
      'shadow-hover = Add shadow on hover',
      'bg-animate = Combine with classes in skins and skins-pseudo for many different transition possibilities',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_images.css': {
    interfaceName: 'Images',
    base: ['img'],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_letter-spacing.css': {
    interfaceName: 'LetterSpacing',
    base: ['tracked', 'tracked-tight', 'tracked-mega'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_line-height.css': {
    interfaceName: 'LineHeight',
    base: ['lh-solid', 'lh-title', 'lh-copy'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_links.css': {
    interfaceName: 'Links',
    base: ['link'],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_lists.css': {
    interfaceName: 'Lists',
    base: ['list'],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_max-widths.css': {
    interfaceName: 'MaxWidths',
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
  },
  '_media-queries.css': null, // https://github.com/tachyons-css/tachyons/blob/main/src/_media-queries.css
  '_module-template.css': null, // https://github.com/tachyons-css/tachyons/blob/main/src/_module-template.css
  '_negative-margins.css': {
    interfaceName: 'NegativeMargins',
    base: ['n = negative'],
    modifier: ['a = all', 't = top', 'r = right', 'b = bottom', 'l = left'],
    size: [
      '1 = 1st step in spacing scale',
      '2 = 2nd step in spacing scale',
      '3 = 3rd step in spacing scale',
      '4 = 4th step in spacing scale',
      '5 = 5th step in spacing scale',
      '6 = 6th step in spacing scale',
      '7 = 7th step in spacing scale',
    ],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_nested.css': {
    interfaceName: 'Nested',
    base: [
      'nested-copy-line-height',
      'nested-headline-line-height',
      'nested-list-reset',
      'nested-copy-indent',
      'nested-copy-separator',
      'nested-img',
      'nested-links',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_normalize.css': null, // https://github.com/tachyons-css/tachyons/blob/main/src/_normalize.css
  '_opacity.css': {
    interfaceName: 'Opacity',
    base: [
      'o-100',
      'o-90',
      'o-80',
      'o-70',
      'o-60',
      'o-50',
      'o-40',
      'o-30',
      'o-20',
      'o-10',
      'o-05',
      'o-025',
      'o-0',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_outlines.css': {
    interfaceName: 'Outlines',
    base: ['outline', 'outline-transparent', 'outline-0'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_overflow.css': {
    interfaceName: 'Overflow',
    base: [
      'overflow-visible',
      'overflow-hidden',
      'overflow-scroll',
      'overflow-auto',
      'overflow-x-visible',
      'overflow-x-hidden',
      'overflow-x-scroll',
      'overflow-x-auto',
      'overflow-y-visible',
      'overflow-y-hidden',
      'overflow-y-scroll',
      'overflow-y-auto',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_position.css': {
    interfaceName: 'Position',
    base: [
      'static = static',
      'relative = relative',
      'absolute = absolute',
      'fixed = fixed',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_rotations.css': {
    interfaceName: 'Rotations',
    base: [
      'rotate-45',
      'rotate-90',
      'rotate-135',
      'rotate-180',
      'rotate-225',
      'rotate-270',
      'rotate-315',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_skins-pseudo.css': {
    interfaceName: 'SkinsPseudo',
    base: [
      'hover-black',
      'hover-near-black',
      'hover-dark-gray',
      'hover-mid-gray',
      'hover-gray',
      'hover-silver',
      'hover-light-silver',
      'hover-moon-gray',
      'hover-light-gray',
      'hover-near-white',
      'hover-white',
      'hover-black-90',
      'hover-black-80',
      'hover-black-70',
      'hover-black-60',
      'hover-black-50',
      'hover-black-40',
      'hover-black-30',
      'hover-black-20',
      'hover-black-10',
      'hover-white-90',
      'hover-white-80',
      'hover-white-70',
      'hover-white-60',
      'hover-white-50',
      'hover-white-40',
      'hover-white-30',
      'hover-white-20',
      'hover-white-10',
      'hover-inherit',
      'hover-bg-black',
      'hover-bg-near-black',
      'hover-bg-dark-gray',
      'hover-bg-mid-gray',
      'hover-bg-gray',
      'hover-bg-silver',
      'hover-bg-light-silver',
      'hover-bg-moon-gray',
      'hover-bg-light-gray',
      'hover-bg-near-white',
      'hover-bg-white',
      'hover-bg-transparent',
      'hover-bg-black-90',
      'hover-bg-black-80',
      'hover-bg-black-70',
      'hover-bg-black-60',
      'hover-bg-black-50',
      'hover-bg-black-40',
      'hover-bg-black-30',
      'hover-bg-black-20',
      'hover-bg-black-10',
      'hover-bg-white-90',
      'hover-bg-white-80',
      'hover-bg-white-70',
      'hover-bg-white-60',
      'hover-bg-white-50',
      'hover-bg-white-40',
      'hover-bg-white-30',
      'hover-bg-white-20',
      'hover-bg-white-10',
      'hover-dark-red',
      'hover-red',
      'hover-light-red',
      'hover-orange',
      'hover-gold',
      'hover-yellow',
      'hover-light-yellow',
      'hover-purple',
      'hover-light-purple',
      'hover-dark-pink',
      'hover-hot-pink',
      'hover-pink',
      'hover-light-pink',
      'hover-dark-green',
      'hover-green',
      'hover-light-green',
      'hover-navy',
      'hover-dark-blue',
      'hover-blue',
      'hover-light-blue',
      'hover-lightest-blue',
      'hover-washed-blue',
      'hover-washed-green',
      'hover-washed-yellow',
      'hover-washed-red',
      'hover-bg-dark-red',
      'hover-bg-red',
      'hover-bg-light-red',
      'hover-bg-orange',
      'hover-bg-gold',
      'hover-bg-yellow',
      'hover-bg-light-yellow',
      'hover-bg-purple',
      'hover-bg-light-purple',
      'hover-bg-dark-pink',
      'hover-bg-hot-pink',
      'hover-bg-pink',
      'hover-bg-light-pink',
      'hover-bg-dark-green',
      'hover-bg-green',
      'hover-bg-light-green',
      'hover-bg-navy',
      'hover-bg-dark-blue',
      'hover-bg-blue',
      'hover-bg-light-blue',
      'hover-bg-lightest-blue',
      'hover-bg-washed-blue',
      'hover-bg-washed-green',
      'hover-bg-washed-yellow',
      'hover-bg-washed-red',
      'hover-bg-inherit',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_skins.css': {
    interfaceName: 'Skins',
    base: [
      'black-90',
      'black-80',
      'black-70',
      'black-60',
      'black-50',
      'black-40',
      'black-30',
      'black-20',
      'black-10',
      'black-05',
      'white-90',
      'white-80',
      'white-70',
      'white-60',
      'white-50',
      'white-40',
      'white-30',
      'white-20',
      'white-10',
      'black',
      'near-black',
      'dark-gray',
      'mid-gray',
      'gray',
      'silver ',
      'light-silver',
      'moon-gray',
      'light-gray',
      'near-white',
      'white',
      'dark-red',
      'red',
      'light-red',
      'orange',
      'gold',
      'yellow',
      'light-yellow',
      'purple',
      'light-purple',
      'dark-pink',
      'hot-pink',
      'pink',
      'light-pink',
      'dark-green',
      'green',
      'light-green',
      'navy',
      'dark-blue',
      'blue',
      'light-blue',
      'lightest-blue',
      'washed-blue',
      'washed-green',
      'washed-yellow',
      'washed-red',
      'color-inherit',
      /* Background colors */
      'bg-black-90',
      'bg-black-80',
      'bg-black-70',
      'bg-black-60',
      'bg-black-50',
      'bg-black-40',
      'bg-black-30',
      'bg-black-20',
      'bg-black-10',
      'bg-black-05',
      'bg-white-90',
      'bg-white-80',
      'bg-white-70',
      'bg-white-60',
      'bg-white-50',
      'bg-white-40',
      'bg-white-30',
      'bg-white-20',
      'bg-white-10',
      'bg-black',
      'bg-near-black',
      'bg-dark-gray',
      'bg-mid-gray',
      'bg-gray',
      'bg-silver ',
      'bg-light-silver',
      'bg-moon-gray',
      'bg-light-gray',
      'bg-near-white',
      'bg-white',
      'bg-transparent',
      'bg-dark-red',
      'bg-red',
      'bg-light-red',
      'bg-orange',
      'bg-gold',
      'bg-yellow',
      'bg-light-yellow',
      'bg-purple',
      'bg-light-purple',
      'bg-dark-pink',
      'bg-hot-pink',
      'bg-pink',
      'bg-light-pink',
      'bg-dark-green',
      'bg-green',
      'bg-light-green',
      'bg-navy',
      'bg-dark-blue',
      'bg-blue',
      'bg-light-blue',
      'bg-lightest-blue',
      'bg-washed-blue',
      'bg-washed-green',
      'bg-washed-yellow',
      'bg-washed-red',
      'bg-inherit',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_spacing.css': {
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
  },
  '_styles.css': null, // https://github.com/tachyons-css/tachyons/blob/main/src/_styles.css
  '_tables.css': {
    interfaceName: 'Tables',
    base: [
      'collapse',
      'striped--light-silver',
      'striped--moon-gray',
      'striped--light-gray',
      'striped--near-white',
      'stripe-light',
      'stripe-dark',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: [''],
  },
  '_text-align.css': {
    interfaceName: 'TextAlign',
    base: ['t = text-align'],
    modifier: ['l = left', 'r = right', 'c = center', 'j = justify'],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_text-decoration.css': {
    interfaceName: 'TextDecoration',
    base: ['strike', 'underline', 'no-underline'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_text-transform.css': {
    interfaceName: 'TextTransform',
    base: ['tt = text-transform'],
    modifier: ['c = capitalize', 'l = lowercase', 'u = uppercase', 'n = none'],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_type-scale.css': {
    interfaceName: 'TypeScale',
    base: ['f = font-size'],
    modifier: [
      '1 = 1st step in size scale',
      '2 = 2nd step in size scale',
      '3 = 3rd step in size scale',
      '4 = 4th step in size scale',
      '5 = 5th step in size scale',
      '6 = 6th step in size scale',
      '7 = 7th step in size scale',
      '-6 = For Hero/Marketing Titles (6rem)',
      '-headline = For Hero/Marketing Titles (6rem)',
      '-5 = For Hero/Marketing Titles (5rem)',
      '-subheadline = For Hero/Marketing Titles (5rem)',
    ],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_typography.css': {
    interfaceName: 'Typography',
    base: [
      'measure',
      'measure-wide',
      'measure-narrow',
      'indent',
      'small-caps',
      'truncate',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_utilities.css': {
    interfaceName: 'Utilities',
    base: ['overflow-container', 'center', 'mr-auto', 'ml-auto'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_vertical-align.css': {
    interfaceName: 'VerticalAlign',
    base: ['v-base', 'v-mid', 'v-top', 'v-btm'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_visibility.css': {
    interfaceName: 'Visibility',
    base: [
      'clip = Text that is hidden but accessible (ref: http://snook.ca/archives/html_and_css/hiding-content-for-accessibility)',
    ],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_white-space.css': {
    interfaceName: 'WhiteSpace',
    base: ['ws-normal', 'nowrap', 'pre'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_widths.css': {
    interfaceName: 'Widths',
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
  },
  '_word-break.css': {
    interfaceName: 'WordBreak',
    base: ['word-normal', 'word-wrap', 'word-nowrap'],
    modifier: [''],
    size: [''],
    mediaQuery: ['', '-ns = not-small', '-m  = medium', '-l  = large'],
  },
  '_z-index.css': {
    interfaceName: 'ZIndex',
    base: ['z = z-index'],
    modifier: [
      '-0 = literal value 0',
      '-1 = literal value 1',
      '-2 = literal value 2',
      '-3 = literal value 3',
      '-4 = literal value 4',
      '-5 = literal value 5',
      '-999 = literal value 999',
      '-9999 = literal value 9999',
      '-max = largest accepted z-index value as integer',
      '-inherit = string value inherit',
      '-initial = string value initial',
      '-unset = string value unset',
    ],
    size: [''],
    mediaQuery: [''],
  },
}
