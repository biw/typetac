import { spacing, float, flex, Data } from './layout'

const fs = require('fs')

const genFile = (data: Data) => {
  console.log(`started generating: ${data.interfaceName}`)

  const directory = '' //'./docs/layout/'
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

genFile(float)
genFile(spacing)
genFile(flex)
