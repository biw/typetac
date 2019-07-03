# typetac - tachyons in typescript

still working on this, but here is the basic API

```ts
import { tac, withTachyons } from 'typetac'
import React from 'react'


const name = withTachyons(tac.ma1.pa1)

console.log(name) // 'ma1 pa1'

// we can even add other classes
const otherClasses = withTachyons(tac.ma1.pa1, ['class1', 'class2'])

console.log(otherClasses) // 'ma1 pa1 class1 class2'

// with React
const Comp = () => <div className={withTachyons(tac.ma1.pa1.br2)} />
```