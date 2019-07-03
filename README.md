# TypeTac - Tachyons in TypeScript

TypeTac is a typescript library for tachyons. You may already know the [benefits of tachyons](https://github.com/tachyons-css/tachyons/issues/12#issuecomment-59828967).

The benefits of TypeTac are:

 - **Type Checking**, no need to wonder if the class name you want is valid, typescript will throw an error if not
 - **Autocomplete**, use your favorite typescript editor to autocomplete definitions
 - **Documentation** - alongside autocomplete, get full documentation in your text editor about *all* tachyons class names

All of this comes with a tiny footprint of only {insert small gzip size here} 🕺

still working on this, but here is the basic API:

```tsx
import { tac } from 'typetac'
// no need for anything special from typetac, if you want to compose classnames, use a string base lib
import cn from 'classname' 
import React from 'react'

// the nice thing is there is no way to get anything but a string back
// when calling tac()
const name = tac(t => t.ma1.pa1)

console.log(name) // 'ma1 pa1'

// we add other classes using the npm classname library
const otherClasses = cn(tac(t => t.ma1.pa1), 'class1', 'class2')
,
console.log(otherClasses) // 'ma1 pa1 class1 class2'

// with React
const Comp = () => <div className={tac(t => t.ma1.pa1.br2)} />
```

here is the old API, keeping it here as a reference:

```tsx
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