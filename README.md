# TypeTac - Tachyons in TypeScript

[![Build Status][build-badge]][build]
[![twitter][twitter-badge]][twitter]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

TypeTac is a TypeScript library for Tachyons. There are many [benefits of Tachyons](https://github.com/tachyons-css/tachyons/issues/12#issuecomment-59828967), but the goal is to "Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible."

The benefits of TypeTac are:

- **Type Checking**, no need to wonder if the class name you want is valid, typescript will throw an error if not
- **Autocomplete**, use your favorite typescript editor to autocomplete definitions
- **Documentation** - alongside autocomplete, get full documentation in your text editor about _all_ tachyons class names

This comes with a tiny footprint of only {insert small gzip size here} 🕺

```tsx
import tac from 'typetac'
import React from 'react'
// you'll still need to import tachyons like normal
import 'tachyons'

// tac gives you t which has all the tachyons types
const name = tac(t => t.ma1.pa1)

console.log(name) // 'ma1 pa1'

// if you want to compose other class names, it's easy
const otherClasses = `${tac(t => t.ma1.pa1)} class1 class2`

console.log(otherClasses) // 'ma1 pa1 class1 class2'

// with React
const Comp = () => (
    <div className={tac(t => t.ma1.pa1.br2)}>
        <div className={otherClasses} />
    </div>
```

## License

MIT © [Ben Williams](https://biwills.com)

[build-badge]: https://img.shields.io/circleci/build/github/biw/typetac.svg?style=flat-square
[build]: https://travis-ci.org/biw/typetac
[version-badge]: https://img.shields.io/npm/v/typetac.svg?style=flat-square
[package]: https://www.npmjs.com/package/typetac
[license-badge]: https://img.shields.io/npm/l/typetac.svg?style=flat-square
[license]: https://github.com/biw/typetac/blob/master/LICENSE
[twitter-badge]: https://img.shields.io/twitter/follow/biwills.svg?style=flat-square&logo=twitter&label=Follow
[twitter]: https://twitter.com/biwills
