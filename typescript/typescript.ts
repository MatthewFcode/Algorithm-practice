// function using a union to accept two types and returning the type of the parameter passed in
export const typeOfUnion = (value: string | number): string => {
  return typeof value
}

//function that takes an array of objects and returns the objects in that array that have a price property

export interface Product {
  // typescript object interface for the below object
  id: number
  name: string
  price?: number
  category?: string
}

export interface FilteredProduct {
  id: number
  name: string
  category?: string
  price: number
}

export function filterObjectsWithoutPriceProperty(
  arr: Product[]
): FilteredProduct[] {
  let filteredArr: FilteredProduct[] = []
  for (let i = 0; i < arr.length; i++) {
    const currentIteration = arr[i] as FilteredProduct
    if (currentIteration.price) {
      filteredArr.push(currentIteration)
    }
  }
  return filteredArr
}

// creating a completely generically typed function that returns whatever you pass into it
export function genericeType<T>(input: T): T {
  // <T> is a generic type parameter that changes the type of T to whatever the type of the input is
  console.log(typeof input)
  return input
}

// generically type wrapper object
type Generic<T> = {
  value: T
  age: T
  name: T
  ages: T[]
}

interface SeenObj {
  a?: number
  b?: number
  c?: number
  d?: number
  e?: number
  f?: number
  g?: number
  h?: number
  i?: number
  j?: number
  k?: number
  l?: number
  m?: number
  n?: number
  o?: number
  p?: number
  q?: number
  r?: number
  s?: number
  t?: number
  u?: number
  v?: number
  w?: number
  x?: number
  y?: number
  z?: number
}

export const firstUniqueCharacter = (string: string): string | undefined => {
  let stringArr = string.toLowerCase().split('')
  const seen: Record<string, number> = {}

  for (let i = 0; i < stringArr.length; i++) {
    const index = stringArr[i] as keyof SeenObj
    if (seen[stringArr[i] as string]) {
      seen[index]! += 1
    } else {
      seen[index] = 1
    }
  }

  for (let i = 0; i < stringArr.length; i++) {
    if (seen[stringArr[i] as string] === 1) {
      return stringArr[i]
    }
  }
}
