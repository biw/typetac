import { allCSSFiles } from './allCSSFiles'

export interface Data {
  interfaceName: string
  base: string[]
  modifier: string[]
  size: string[]
  extraOutsideClasses?: string[]
  mediaQuery: string[]
}

const camelToDashCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

const fs = require('fs')

const genFile = (data: Data | null) => {
  if (!data) return
  console.log(`started generating: ${data.interfaceName}`)

  const filename = `${camelToDashCase(data.interfaceName).substr(1)}.d.ts`

  const directory = `${process.cwd()}/src/docs/allFiles/`
  if (!fs.existsSync(directory)) fs.mkdirSync(directory)

  const logger = fs.createWriteStream(directory + filename)

  logger.write(`export interface ${data.interfaceName} {\n`)

  const writeLine = (
    _base: string,
    _modifier: string,
    _size: string,
    _mediaQuery: string,
  ) => {
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
  }

  data.base.forEach((_base) => {
    data.modifier.forEach((_modifier) => {
      data.size.forEach((_size) => {
        data.mediaQuery.forEach((_mediaQuery) => {
          writeLine(_base, _modifier, _size, _mediaQuery)
        })
      })
    })
  })

  data.extraOutsideClasses?.forEach((_outsideClass) => {
    data.mediaQuery.forEach((_mediaQuery) => {
      writeLine(_outsideClass, '', '', _mediaQuery)
    })
  })

  logger.write(`}\n`)
  logger.end()
  console.log(`finished generating: ${filename}`)
}

const hitKeys = new Set<string>()
;(Object.keys(allCSSFiles) as any as (keyof typeof allCSSFiles)[]).forEach(
  (key) => {
    if (hitKeys.has(key)) throw new Error(`dup key ${key}`)
    hitKeys.add(key)
    genFile(allCSSFiles[key])
  },
)
