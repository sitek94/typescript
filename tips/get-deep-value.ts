/**
 * @credit Matt Pocock
 */

export const getDeepValue = <
  TObj,
  TFirstKey extends keyof TObj,
  TSecondKey extends keyof TObj[TFirstKey],
>(
  obj: TObj,
  firstKey: TFirstKey,
  secondKey: TSecondKey,
) => {
  return obj[firstKey][secondKey]
}

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: '12',
    d: 18,
  },
}

const valueFromFoo = getDeepValue(obj, 'foo', 'a')
const valueFromBar = getDeepValue(obj, 'bar', 'c')
