import type { Spacing } from './docs/layout/spacing'
import type { Float } from './docs/layout/float'
import { Debug } from './docs/layout/debug'
import { DebugGrid } from './docs/layout/debug-grid'
import { Flex } from './docs/layout/flex'

type Tac = Spacing &
  Float &
  Debug &
  DebugGrid &
  Flex &
  string &
  string &
  string &
  string

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
