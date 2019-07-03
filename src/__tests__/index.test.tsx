import { tac, withTachyons } from '..'

test('blank get', () => {
  expect(tac).toBe(tac)
})

test('single get', () => {
  expect(withTachyons(tac.ma1)).toBe('ma1')
})

test('double get', () => {
  expect(withTachyons(tac.ma1.ma2)).toBe('ma1 ma2')
})

test('double get with other class', () => {
  expect(withTachyons(tac.ma1.ma2, ['otherClass'])).toBe('ma1 ma2 otherClass')
})

test('triple get', () => {
  expect(withTachyons(tac.ma1.ma2.ma3)).toBe('ma1 ma2 ma3')
})

test('double use of single single object', () => {
  const testObject = tac.ma1

  // try to use it twice
  expect(withTachyons(testObject)).toBe('ma1')
  expect(withTachyons(testObject)).toBe('ma1')
})

test('double use of single double object', () => {
  const testObject = tac.ma1.ma2

  // try to use it twice
  expect(withTachyons(testObject)).toBe('ma1 ma2')
  expect(withTachyons(testObject)).toBe('ma1 ma2')
})

test('double use of single triple object', () => {
  const testObject = tac.ma1.ma2.ma3

  // try to use it twice
  expect(withTachyons(testObject)).toBe('ma1 ma2 ma3')
  expect(withTachyons(testObject)).toBe('ma1 ma2 ma3')
})

test('double use of single triple object with others', () => {
  const testObject = tac.ma1.ma2.ma3

  // try to use it twice
  expect(withTachyons(testObject, ['others'])).toBe('ma1 ma2 ma3 others')
  expect(withTachyons(testObject, ['others'])).toBe('ma1 ma2 ma3 others')
})

test('double use of tayon', () => {
  const testObject1 = tac.ma2.ma1
  const testObject2 = tac.ma1

  expect(withTachyons(testObject1)).toBe('ma2 ma1')
  expect(withTachyons(testObject2)).toBe('ma1')
})
