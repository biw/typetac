/* eslint no-console: 0 */

class Tac {
  /** Ma1 is margin   1 */
  public ma1!: this
  public ma2!: this
  public ma3!: this
  private stringRep: string
  public constructor(stringInput: string) {
    this.stringRep = stringInput
    this.addClassNames(['ma1', 'ma2', 'ma3'])
  }

  public toString = () => this.stringRep.trim()

  private addClassNames = (names: string[]) => {
    names.forEach(name => {
      this.addProperty(name, () => {
        return new Tac(`${this.stringRep} ${name}`)
      })
    })
  }

  private addProperty = (name: string, getter: () => any) => {
    Object.defineProperty(this, name, {
      get: function propertyGetter() {
        const result = getter.call(this)
        if (result !== undefined) {
          return result
        }
      },
      configurable: true,
    })
  }
}

export const tac = (inputFunc: (t: Tac) => Tac): string => {
  const results = inputFunc(new Tac(''))

  return results.toString()
}
