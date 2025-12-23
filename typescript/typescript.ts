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
  return ''
}

export const findMaxPossibleSum = (numbers: number[]): number | undefined => {
  // we have the numbers and we want to find the maximum value we can get from summing all the numbers in the array
  // we need some sort of loop checking every option || storing the best then running that and returning that value
  let currentSum = numbers[0] as number
  let maxSum = numbers[0]
  // we are asking two questions during the loop is it better to add the current iteration to the loop or will it be harmful || then we want to ask if it would be better to start fresh from the current sum so if the current iteration is more than the current sum
  for (let i = 1; i < numbers.length; i++) {
    const currentIteration = numbers[i] as number
    if (currentIteration > currentSum + currentIteration) {
      // we are not checking if the current sum is bigger than the running total but also if the currentIteration plus the total is worse than restarting with the currentIteration
      currentSum = currentIteration
    } else if (currentIteration + currentSum > currentSum) {
      currentSum += currentIteration
    }

    if (currentSum > maxSum!) {
      maxSum = currentSum
    }
  }

  return maxSum
}

export const isPalindrome = (string: string): boolean => {
  const stringArr = string.split(' ')
  let reversedStringArr = []
  for (let i = stringArr.length - 1; i >= 0; i--) {
    reversedStringArr.push(stringArr[i] as string)
  }

  const normalString = stringArr.join('').toLowerCase()
  const reverseString = reversedStringArr.join('').toLowerCase()
  if (normalString === reverseString) {
    return true
  } else {
    return false
  }
}
