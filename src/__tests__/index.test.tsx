import tac from '..'

test('blank get', () => {
  expect(tac).toBe(tac)
})

test('single get', () => {
  expect(tac(t => t.ma1)).toBe('ma1')
})

test('double get', () => {
  expect(tac(t => t.ma1.ma2)).toBe('ma1 ma2')
})

test('triple get', () => {
  expect(tac(t => t.ma1.ma2.ma3)).toBe('ma1 ma2 ma3')
})

test('double use of single single object', () => {
  const testObject = tac(t => t.ma1)

  // try to use it twice
  expect(testObject).toBe('ma1')
  expect(testObject).toBe('ma1')
})

test('double use of single double object', () => {
  const testObject = tac(t => t.ma1.ma2)

  // try to use it twice
  expect(testObject).toBe('ma1 ma2')
  expect(testObject).toBe('ma1 ma2')
})

test('double use of single triple object', () => {
  const testObject = tac(t => t.ma1.ma2.ma3)

  // try to use it twice
  expect(testObject).toBe('ma1 ma2 ma3')
  expect(testObject).toBe('ma1 ma2 ma3')
})

test('double use of tayon', () => {
  const testObject1 = tac(t => t.ma2.ma1)
  const testObject2 = tac(t => t.ma1)

  expect(testObject1).toBe('ma2 ma1')
  expect(testObject2).toBe('ma1')
})

test('compose two tachyons', () => {
  const testOb1 = tac(t => t.ma1)
  const testOb2 = tac(t => t.ma2)

  expect(`${testOb1} ${testOb2}`).toBe('ma1 ma2')
})
