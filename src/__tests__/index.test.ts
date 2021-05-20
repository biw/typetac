import tac from '..'

/** the jest tests use typeof so we need to wrap the tac in a template tag
 * to pass the correct value to the test. React uses toPrimitive which is also
 * used in the template tag, so they test the same thing
 */
const primExpect = (s: string) => expect(`${s}`)

/** make sure tac is viewed as a string by TypeScript */
const testType = (x: string) => {}

test('blank get', () => {
  testType(tac.ma1.ma0)
  testType(tac.pa1.pa2.pa3.pa1)
  primExpect(tac).toBe('')
})

test('single get', () => {
  primExpect(tac.ma1).toBe('ma1')
})

test('double get', () => {
  primExpect(tac.ma1.ma2).toBe('ma1 ma2')
})

test('triple get', () => {
  primExpect(tac.ma1.ma2.ma3).toBe('ma1 ma2 ma3')
})

test('double use of single single object', () => {
  const testObject = tac.ma1

  // try to use it twice
  primExpect(testObject).toBe('ma1')
  primExpect(testObject).toBe('ma1')
})

test('double use of single double object', () => {
  const testObject = tac.ma1.ma2

  // try to use it twice
  primExpect(testObject).toBe('ma1 ma2')
  primExpect(testObject).toBe('ma1 ma2')
})

test('double use of single triple object', () => {
  const testObject = tac.ma1.ma2.ma3

  // try to use it twice
  primExpect(testObject).toBe('ma1 ma2 ma3')
  primExpect(testObject).toBe('ma1 ma2 ma3')
})

test('double use of tayon', () => {
  const testObject1 = tac.ma2.ma1
  const testObject2 = tac.ma1

  primExpect(testObject1).toBe('ma2 ma1')
  primExpect(testObject2).toBe('ma1')
  primExpect(testObject2.pa1).toBe('ma1 pa1')
})

test('compose two tachyons', () => {
  const testOb1 = tac.ma1
  const testOb2 = tac.ma2

  primExpect(`${testOb1} ${testOb2}`).toBe('ma1 ma2')
})

test('add to string', () => {
  expect(tac.pa1 + '').toBe('pa1')
})
