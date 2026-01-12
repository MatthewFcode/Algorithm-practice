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
  // split the string then join it lol
  let orgString = string.split(' ').join('').toLowerCase() // split it to an array with no spcaes adn then joined it again lol
  // we just need to reverse the string manually then comapre it with the org and if it is the same then we rreturn true otherwise we return false
  let revStrArr = []
  for (let i = orgString.length - 1; i >= 0; i--) {
    revStrArr.push(orgString[i])
  }

  let revString = revStrArr.join('')
  if (revString === orgString) {
    return true
  } else {
    return false
  }
}

export const longestUniqueSubString = (string: string): number => {
  // first we are initialising our length variable and starting it at 0
  // we are going to loop over the array starting it at 0 and initialise a freqMap for if the character is seen or not if it hasnt been seen we are going to mark it as true
  // we are then going to start a nested array that starts at the iterator of the outer array + 1 so the next element
  // we are checking for if the character is seen because then we are going to break the loop
  // we use Math.max on the length variable to take the maxiimum interger that goes through the variable kind of like pushing every value to an array then loopnig through and finding the highest one
  // formula for calculating the length of the sunstring without running .length is we are going to take the index of the last number in the array and then minus the first index of that sub string but plus one to get the real lenght since we started at 0
  // then I am going to return the length variable

  let length = 0
  for (let i = 0; i < string.length; i++) {
    let seen: Record<string, boolean> = {}
    for (let j = i; j < string.length; j++) {
      if (seen[string[j] as string]) {
        break
      }
      seen[string[j] as string] = true
      length = Math.max(length, j - i + 1)
    }
  }
  return length
}

// function that takes the string and loops over it and long as fuck conditional checking for vowels and then adding 1 ot a variable if it hits then returning it-- dont need to write it out

// function that sorts a number array in ascending order || loop over it and check that the next number equals the current plus 1 and that it isnt the last number in the array

const arr = [2, 4, 5, 1]
const length = 4

// note to self accesing the last element in an array without knowing what index it is after the loop

export const findMissingNumber = (monkey: number[]): number | string => {
  const numbers = monkey.sort((a, b) => a - b)
  for (let i = 0; i < numbers.length; i++) {
    if (
      (numbers[i] as number) + 1 !== numbers[i + 1] &&
      i !== numbers.length - 1
    ) {
      return (numbers[i] as number) + 1
    }
  }
  return `Nothing missing in this sequence the numbers are in order from ${
    numbers[0]
  } --> ${numbers[numbers.length - 1]} `

  //return numbers[numbers.length - 1]
}
