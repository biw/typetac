import { Data } from './generateDocs'

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
    interfaceName: 'aspectRatios',
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
    interfaceName: 'backgroundPosition',
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
  '_background-size.css': {},
  '_border-colors.css': {},
  '_border-radius.css': {},
  '_border-style.css': {},
  '_border-widths.css': {},
  '_borders.css': {},
  '_box-shadow.css': {},
  '_box-sizing.css': {},
  '_clears.css': {},
  '_code.css': {},
  '_colors.css': {},
  '_coordinates.css': {},
  '_debug-children.css': {},
  '_debug-grid.css': {},
  '_debug.css': {},
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
  '_font-family.css': {},
  '_font-style.css': {},
  '_font-weight.css': {},
  '_forms.css': {},
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
  '_hovers.css': {},
  '_images.css': {},
  '_letter-spacing.css': {},
  '_line-height.css': {},
  '_links.css': {},
  '_lists.css': {},
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
  '_media-queries.css': {},
  '_module-template.css': {},
  '_negative-margins.css': {},
  '_nested.css': {},
  '_normalize.css': {},
  '_opacity.css': {},
  '_outlines.css': {},
  '_overflow.css': {},
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
  '_rotations.css': {},
  '_skins-pseudo.css': {},
  '_skins.css': {},
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
  '_styles.css': {},
  '_tables.css': {},
  '_text-align.css': {},
  '_text-decoration.css': {},
  '_text-transform.css': {},
  '_type-scale.css': {},
  '_typography.css': {},
  '_utilities.css': {},
  '_vertical-align.css': {},
  '_visibility.css': {},
  '_white-space.css': {},
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
  '_word-break.css': {},
  '_z-index.css': {},
}
