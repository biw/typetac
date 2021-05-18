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

type Tac = Margins & Padding

const tac = (inputFunc: (t: Tac) => Tac): string => {
  let stringValue = ''
  const proxy = new Proxy(({} as any) as Tac, {
    get: (_, prop, _this) => {
      stringValue += ` ${prop.toString()}`
      return _this
    },
  })
  inputFunc(proxy)
  return stringValue.trim()
}

export default tac
