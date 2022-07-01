export const deepEqualCompare = <Arg>(
  a: Arg extends any[] ? "Don't pass array" : Arg,
  b: Arg,
): boolean => {
  return a === b
}

// 👇 Remove this line to see the error message:
// @ts-expect-error
deepEqualCompare([], [])
