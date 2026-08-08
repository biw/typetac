# TypeTac - Tachyons in TypeScript

[![CI](https://github.com/biw/typetac/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/biw/typetac/actions/workflows/ci.yml)
[![npm version](https://badgen.net/npm/v/typetac)](https://www.npmjs.com/package/typetac)
[![npm downloads](https://badgen.net/npm/dt/typetac)](https://www.npmjs.com/package/typetac)

TypeTac is a TypeScript library for Tachyons. There are many [benefits of Tachyons](https://github.com/tachyons-css/tachyons/issues/12#issuecomment-59828967), but the goal is to "Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible."

The benefits of TypeTac are:

- **Type Checking** — no need to wonder if the class name you want is valid, typescript will throw an error if not
- **Autocomplete** — use your favorite typescript editor to autocomplete definitions
- **Documentation** — alongside autocomplete, get full documentation in your text editor about _all_ tachyons class names

This comes with a tiny footprint of **about 0.2 kB gzipped**

```tsx
import tac from 'typetac'
import React from 'react'
// you'll still need to import tachyons like normal
import 'tachyons'

// tac is an object with tachyons types
const name = tac.ma1.pa1

// but you can treat it as a string at any point in the call chain
console.log(tac) // ''
console.log(tac.ma1) // 'ma1'
console.log(tac.ma1.pa1) // 'ma1 pa1'
console.log(tac.ma1.pa1.br2) // 'ma1 pa1 br2'

// which makes Tachyons in React a breeze
const Comp = () => (
  <div className={tac.ma1.pa1.br2}>
    {/* if you want to compose other class names, it's easy */}
    <div className={`${tac.ma1.pa1} class1 class2`} />
  </div>
)

// and easy to use without a framework
const element = document.createElement('div')
element.className = tac.ma1.pa1.br2
document.appendChild(element)
```

## License

MIT © [Ben Williams](https://biwills.com)
