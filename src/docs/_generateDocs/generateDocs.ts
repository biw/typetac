import { allCSSFiles } from './allCSSFiles'

export interface Data {
  interfaceName: string
  base: string[]
  modifier: string[]
  size: string[]
  mediaQuery: string[]
}

const fs = require('fs')

const genFile = (data: Data | null) => {
  if (!data) return
  console.log(`started generating: ${data.interfaceName}`)

  const directory = `${process.cwd()}/src/docs/allFiles/`
  const logger = fs.createWriteStream(
    `${directory}${data.interfaceName.toLowerCase()}.d.ts`,
  )

  logger.write(`export interface ${data.interfaceName} {\n`)

  data.base.forEach((_base) => {
    data.modifier.forEach((_modifier) => {
      data.size.forEach((_size) => {
        data.mediaQuery.forEach((_mediaQuery) => {
          const base = _base.split('=').map((i) => i.trim())
          const modifier = _modifier.split('=').map((i) => i.trim())
          const size = _size.split('=').map((i) => i.trim())
          const mediaQuery = _mediaQuery.split('=').map((i) => i.trim())

          logger.write(`/**
 * ${base.length === 2 ? `**${base[0]}**: ${base[1]}` : `**${base[0]}**`}${
            modifier.length === 2
              ? `
 *
 * **${modifier[0]}**: ${modifier[1]}`
              : ''
          }${
            size.length === 2
              ? `
 * 
 * **${size[0]}**: ${size[1]}`
              : ''
          }${
            mediaQuery.length === 2
              ? `
 *
 * **${mediaQuery[0]}**: ${mediaQuery[1]}`
              : ''
          }
 **/ 
 '${base[0]}${modifier[0]}${size[0]}${mediaQuery[0]}': this
`)
        })
      })
    })
  })

  logger.write(`}\n`)
  logger.end()
  console.log(`finished generating: ${data.interfaceName.toLowerCase()}.d.ts`)
}

;(Object.keys(allCSSFiles) as any as (keyof typeof allCSSFiles)[]).forEach(
  (key) => {
    genFile(allCSSFiles[key])
  },
)
