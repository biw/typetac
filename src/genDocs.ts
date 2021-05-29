import { allCSSFiles, Data } from './docInfo'

const camelToDashCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

const fs = require('fs')

const directory = `${process.cwd()}/src/docs/`

console.log('building in directory:', directory)

interface ExportFileData {
  interfaceName: string
  filename: string
}

const genExportFile = (data: ExportFileData[]) => {
  console.log('started generating: Docs')

  const filename = 'docs.ts'

  if (!fs.existsSync(directory)) fs.mkdirSync(directory)

  const logger = fs.createWriteStream(directory + filename)

  data.forEach((i) => {
    logger.write(`import { ${i.interfaceName} } from './${i.filename}'\n`)
  })

  logger.write(`\nexport type Docs =\n`)

  data.forEach((i) => {
    logger.write(`  & ${i.interfaceName}\n`)
  })

  logger.end()
  console.log(`finished generating: ${filename}`)
}

const genFile = (data: Data | null): ExportFileData | null => {
  if (!data) return null
  console.log(`started generating: ${data.interfaceName}`)

  const filename = `${camelToDashCase(data.interfaceName).substr(1)}`
  const fileExtension = '.ts'

  if (!fs.existsSync(directory)) fs.mkdirSync(directory)

  if (
    !data.base.length ||
    !data.mediaQuery.length ||
    !data.modifier.length ||
    !data.size.length
  ) {
    throw new Error(`could not build ${data.interfaceName} invalid data`)
  }

  const logger = fs.createWriteStream(directory + filename + fileExtension)

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

    logger.write(`  /**
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
  console.log(`finished generating: ${filename + fileExtension}`)
  return {
    filename,
    interfaceName: data.interfaceName,
  }
}

const hitKeys = new Set<string>()
const exportData: ExportFileData[] = []
;(Object.keys(allCSSFiles) as any as (keyof typeof allCSSFiles)[]).forEach(
  (key) => {
    if (hitKeys.has(key)) throw new Error(`dup key ${key}`)
    hitKeys.add(key)
    const res = genFile(allCSSFiles[key])
    if (res) exportData.push(res)
  },
)

genExportFile(exportData)
