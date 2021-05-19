interface Margins {
  /** margins 1 */
  ma1: this
  ma2: this
  ma3: this
}

interface Padding {
  /** padding 1 */
  pa1: this
  pa2: this
  pa3: this
}

type Tac = Margins & Padding & string

const createTac = (startingString: string): Tac => {
  return new Proxy(String as any, {
    get: (_, prop) => {
      if (prop === Symbol.toPrimitive) return () => startingString.trim() // called by react and console.log
      if (prop === Symbol.toStringTag) return () => startingString.trim()
      if (prop === 'toJSON') return () => startingString.trim()
      if (prop === 'call') return () => {}
      if (prop === 'name') return startingString.trim()
      if (startingString[prop as any]) return startingString[prop as any]
      return createTac(`${startingString} ${prop.toString()}`)
    },
  })
}

const tac = createTac('')

export default tac
