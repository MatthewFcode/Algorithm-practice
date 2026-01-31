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

// manually reversing a string split the string into an array
// split the string but we want to keep the spaces so i guess we want to make each word an iteration in the array
// nested loop that goes over the current iteration of the array and pushes thee reverse to a new array and the join that then return it?

export const wordStringReverse = (string: string): string => {
  const stringArr = string.split(' ')
  let strRevArr = []
  for (let i = stringArr.length - 1; i >= 0; i--) {
    strRevArr.push(stringArr[i])
  }
  const result = strRevArr.join(' ')
  return result
}

export const fullStringReverse = (string: string): string => {
  let reversed = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }
  return reversed
}

// function that finds the longest consecutive sequence
// we need to keep track of the longest sequence so far || loop and then a break once the sequence stops
export const findLongestConsecutiveSequence = (arr: number[]) => {
  // first thing is to manually remove all duplicates using a for loop and a push and a includes tho check if any element in the clean array is the current iteration
  // then we are going to sort this array in ascending order
  // declare current and longest to 1 because we are returing the length of the longest array and dont want to start at 0
  // then we loop over the array if the current iteration is consec add on to current
  // else we are going to init current back down to 1 and check if the current was the highest so far and initiales it to that if it is the highest
  // then we are going to do one final check incase the longest consecutive one was going to to the end off the array in which case it would never have been initilaised to longest
  if (arr.length === 0) return 0
  let clean: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (clean.includes(arr[i] as number)) {
      continue
    } else {
      clean.push(arr[i] as number)
    }
  }

  const sortedArr: number[] = clean.sort((a, b) => a - b)
  let length = 1
  let longest = 1

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === (sortedArr[i - 1] as number) + 1) {
      length++
    } else {
      if (length > longest) {
        longest = length
      }
      length = 1
    }
  }
  if (length > longest) {
    longest = length
  }
  return longest
}

// my solution that went no where quick
// export const productExceptSelf = (numbers: number[]): number[] => {
//   // okay we could loop over the arr and then started a nested loop that starts at the next index and starts timsing values
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j === i; j++) {

//     }
//   }
// }

// ChatGpt solution
export const productExceptSelf = (numbers: number[]): number[] => {
  const result = new Array(numbers.length).fill(1)

  let leftProduct = 1
  for (let i = 0; i < numbers.length; i++) {
    result[i] = leftProduct
    leftProduct *= numbers[i] as number
  }

  let rightProduct = 1
  for (let i = numbers.length - 1; i >= 0; i--) {
    result[i] *= rightProduct
    rightProduct *= numbers[i] as number
  }

  return result
}

export const twoSum = (numbers: number[], k: number): number[] => {
  // declare mutable array to push values that add up to sum
  // loop over the array and start a nested loop check numbers add up to target and push the indexes to mutable array if they do
  // return the mutable array

  let nums: number[] = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if ((((numbers[i] as number) + numbers[j]!) as number) === k) {
        nums.push(i, j)
      }
    }
  }
  return nums
}

export const moveZeroes = (numbers: number[]): number[] => {
  // filter out non zeroes into one array and the filter zeroes into another join copies of the array together
  let zeroes: number[] = []
  let integers: number[] = []

  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] as number) !== 0) {
      integers.push(numbers[i] as number)
    } else if ((numbers[i] as number) === 0) {
      zeroes.push(numbers[i] as number)
    }
  }

  return [...integers, ...zeroes]
}

export const longestSubArrayToK = (numbers: number[], k: number): number => {
  // findign the length of the sub array that meets the requeirments would  be the end of the array j nested loop minus i + 1 for the start of the array but we want to keep the highest value that enters the length variable so we use max.length
  let length: number = 0
  for (let i = 0; i < numbers.length; i++) {
    let sum: number = 0
    for (let j = i; j < numbers.length; j++) {
      sum += numbers[j]!
      if (sum === k) {
        length = Math.max(length, j - i + 1)
      }
    }
  }
  return length
}

//CHATGPT solution" I couldnt figure it out
export const maximumContigousSubArray = (
  numbers: number[],
  k: number
): number => {
  let windowSum = 0
  let maxSum = 0

  // build first window
  for (let i = 0; i < k; i++) {
    windowSum += numbers[i]!
  }

  maxSum = windowSum

  // slide the window
  for (let right = k; right < numbers.length; right++) {
    windowSum += numbers[right]! // add right
    windowSum -= numbers[right - k]! // remove left
    maxSum = Math.max(maxSum, windowSum)
  }

  return maxSum
}

export const findSecondHighestNum = (numbers: number[]): string => {
  let highestNum: number = numbers[0]!
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] as number) > highestNum) {
      highestNum = numbers[i] as number
    }
  }
  let secondHighestNum = -Infinity
  for (let i = 0; i < numbers.length; i++) {
    if (
      (numbers[i] as number) > secondHighestNum &&
      (numbers[i] as number) < highestNum
    ) {
      secondHighestNum = numbers[i]!
    }
  }
  const index = numbers.indexOf(secondHighestNum)
  return String(index)
}

// longest cont sub where the condition is that the next element is higher than the previous

// export const longestContSubArray = (numbers: number[]): number => {
//   // we have the numbers and they dont need sorting or to be dupicate free
//   // delcare a variable for length and current length
//   // loop over the array if the next element is more than the current then we add one to the length and if it isn't we check if the current value of currrent is more than length and reassign it if it is
//   // then we set length back to 1
//   let length = 1
//   let current = 1
//   for (let i = 0; i < numbers.length; i++) {
//     if ((numbers[i + 1] as number) > numbers[i]!) {
//       current++
//     } else {
//       if (current > length) {
//         length = current
//       }
//       current = 1
//     }
//   }

//   if (current > length) {
//     length = current
//   }
//   return length
// }

export const longestContSubArray = (numbers: number[]): number => {
  // we want to loop over the array and just do the same thing but  instead of two variables we just apply math.max to the vairable and do the length thing
  if (numbers.length === 0) return 0

  let current = 1
  let length = 1

  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i + 1] as number) > numbers[i]!) {
      current++
    } else {
      current = 1
    }
    length = Math.max(length, current) // compares the current highest with the current count of the array and reassigns on every iteration
  }

  return length
}

// export const smallestMissingPostiveInteger = (
//   numbers: number[]
// ): number | string => {
//   if (numbers.length === 0) return 'No Missing Numbers '

//   if (!numbers.includes(1)) {
//     return 1
//   }

//   const sortedArr = numbers.sort((a, b) => a - b)

//   let current: number = 0
//   let lowest = +Infinity

//   for (let i = 0; i < sortedArr.length; i++) {
//     if (
//       (sortedArr[i] as number) + 1 !== sortedArr[i + 1] &&
//       (sortedArr[i] as number) + 1 > 0
//     ) {
//       current = sortedArr[i]! + 1
//     }
//     lowest = Math.min(lowest, current)
//   }

//   return lowest
// }

// export const smallestMissingPostiveInteger = (numbers: number[]): number => {
//   if (numbers.length === 0) return 0
//   if (!numbers.includes(1)) return 1

//   // manually  remove duplciates
//   let clean: number[] = []
//   for (let i = 0; i < numbers.length; i++) {
//     if (clean.includes(numbers[i] as number)) {
//       continue
//     } else {
//       clean.push(numbers[i] as number)
//     }
//   }

//   const sortedArr = clean.sort((a, b) => a - b)

//   let missingInts: number[] = []

//   for (let i = 0; i < sortedArr.length; i++) {
//     if (
//       sortedArr[i]! + 1 !==
//       ((sortedArr[i + 1] as number) &&
//         (sortedArr[i] as number) + 1 > 0 &&
//         i !== sortedArr[sortedArr.length - 1])
//     ) {
//       missingInts.push(sortedArr[i]! + 1)
//     }
//   }

//   return missingInts[0]!
// }
// finding the length of an array = sortedArr[sortedArr.length - 1]
export const maxConsecOnes = (numbers: number[]): number => {
  // we need to keep track of the current amount of ones and then reassign if it gets more do it in one pass
  if (numbers.length === 0) return 0
  let max = 0
  let current = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
      current++
    } else {
      if (current > max) {
        max = current
        current = 0
      }
    }
  }

  if (current > max) {
    max = current
  }

  return max
}

// edge cases for the non Repeting char is gonna be length and type

export const nonRepChar = (string: string): string | null => {
  if (string.length === 0) return null

  if (typeof string !== 'string') {
    return 'Parameter is not a string '
  }

  // string lower case and then split it into an array so I can map it sunshine
  const arr = string.toLowerCase().split('')

  // init a map for the frequency of all the numbers that are in the string using .map
  const freqMap = arr.reduce((accum, val) => {
    if (accum[val]) {
      accum[val] += 1
    } else if (!accum[val]) {
      accum[val] = 1
    }
    return accum
  }, {} as Record<string, number>)

  for (let i = 0; i < arr.length; i++) {
    if (freqMap[arr[i]!] === 1) {
      return arr[i]!
    }
  }

  return null
}

// merging intervals || so we want to loop through the arrays of array and check that the second interval of the is less than thee first one but if not then add it to another array

// export const mergeIntervals = (arrays: number[][]): number[] | null => {
//   if (arrays.length === 0) return null

//   let overlapArrs: number[] = []

//   // loop through and then start another loop at the next index
//   for (let i = 0; i < arrays.length; i++) {
//     for (let j = i + 1; j < arrays.length; j++) {
//       if ((arrays[i]![1] as number) > arrays[j][0]) {
//         overlapArrs.push(...arrays[i], ...arrays[j])
//       }
//     }
//   }

//   let clean: number[] = []
//   for (let i = 0; i < overlapArrs.length; i++) {
//     if ((overlapArrs[i] as number) < overlapArrs[i + 1]!) {
//       clean.push(overlapArrs[i] as number)
//     }
//   }

//   return clean
// }

// function finds the highest sum of digits with k length in an array
export const maxContSubArrayToK = (
  nums: number[],
  k: number
): number | null => {
  if (nums.length === 0) return null

  // sort the array in descending order
  const sortedNums = nums.sort((a, b) => b - a)

  const output = []

  for (let i = 0; i <= k - 1; i++) {
    output.push(sortedNums[i])
  }

  const result = output.reduce((accum: number, val) => accum + val!, 0)

  return result
}

// nested loop thorugh the transactions comparing every transaction for strict equality and if the time stamp of the i - the one of the j is <= 60 then push that id of the j to an array this is the one we will return
interface transaction {
  id: string
  amount: number
  reference: string
  timestamp: number
}
export const findDuplicateTransactions = (
  transactions: transaction[]
): string[] | null => {
  // we are going to sort via the time stamp so that we can find the 60s window properly via minusing the later duplicate transaction
  if (transactions.length === 0) return null

  const sortedTransactions = transactions.sort(
    (a, b) => a.timestamp - b.timestamp
  )

  let duplicateIds = []

  for (let i = 0; i < sortedTransactions.length; i++) {
    for (let j = i + 1; j < sortedTransactions.length; j++) {
      if (
        sortedTransactions[i]!.amount === sortedTransactions[j]!.amount &&
        sortedTransactions[i]!.reference === sortedTransactions[j]!.reference &&
        sortedTransactions[j]!.timestamp - sortedTransactions[i]!.timestamp <=
          60
      ) {
        duplicateIds.push(sortedTransactions[j]!.id)
      }
    }
  }

  return duplicateIds
}

interface Invoices {
  id: string
  startDate: string
  endDate: string
}

// we are going to send a nested loop to compare if any object over laps with each other
//
export const overlappingInvoices = (invoices: Invoices[]): boolean | null => {
  if (invoices.length === 0) return null
  let obj: Invoices[] = []
  for (let i = 0; i < invoices.length; i++) {
    for (let j = i + 1; j < invoices.length; j++) {
      const aStart = new Date(invoices[i]!.startDate).getTime()
      const aEnd = new Date(invoices[i]!.endDate).getTime()
      const bStart = new Date(invoices[j]!.startDate).getTime()
      const bEnd = new Date(invoices[j]!.endDate).getTime()

      if (bStart <= aEnd) {
        return true
      }
    }
  }
  return false
  // checking if the start date is before the end date of any previous object so we want to backwards loop ||
}
export const initLongSubArray = (nums: number[]): number => {
  const n = nums.length
  if (n === 0) return 0

  // dp[i] = length of longest increasing subsequence ending at index i
  const dp = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i]! > nums[j]!) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  // The result is the max value in dp array
  return Math.max(...dp)
}

export const whatTheNonRepChar = (string: string): number | null => {
  if (string.length === 0) return null
  // freqMap the array
  let freqMap: Record<string, number> = {}
  for (let i = 0; i < string.length; i++) {
    if (freqMap[string[i]!]) {
      freqMap[string[i]!]! += 1
    } else if (!freqMap[string[i]!]) {
      freqMap[string[i]!] = 1
    }
  }

  for (let i = 0; i < string.length; i++) {
    if (freqMap[string[i]!] === 1) {
      return string.indexOf(string[i]!)
    }
  }
  return -1
}

// given an array of numbers and a integer limit 2 params || find the longest sub array where the difference between the first and the last element in the sub array is less than or equal to the limit
// working function that finds the longest contiguous  sub array where the numbers at either end of the array are less than k difference away from each other
export const longestSubArrayLessThanK = (
  numbers: number[],
  number: number
): number | null => {
  if (numbers.length === 0 || typeof number !== 'number') return null // sanity check for inputs
  // I think this need to keep track of the longest value of the sub array so we need to enact a nested loop over the array and at every iteration of the nested loop check if the value of i and j minus eachother equal or less than the thing and if they are then make current the length of that
  let currentLength: number = 1
  let maxLength: number = 1

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (Math.abs(numbers[i]! - numbers[j]!) <= number) {
        // we can find current length by minusing the last number in the iteration of the first one and adding on to the index
        currentLength = j - i + 1
      }
      maxLength = Math.max(maxLength, currentLength)
    }
  }

  return maxLength
}

// constraints: even numbers must be next to eachother || result has to be the maximum sum of the sub array || sub array length has to equal the length of k
// function that uses a sliding window to find the longest contigious sub array that has even numbers

// my solutionn which is wrong and I cant figure out how to get it to work
// export const maxContSubArrayWithEvenNums = (
//   numbers: number[],
//   number: number | null
// ) => {
//   // quick sanity check for the inputs
//   if (numbers.length === 0 || typeof number !== 'number') return null
//   // this is going to need another nested loop |
//   let max: number = 0
//   for (let i = 0; i < numbers.length; i++) {
//     let sum = 0
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (j - i + 1 !== number) {
//         // skipping all instances where the length of the sub array doesn't equal the desired length
//         break // loop breaks and then  sum returns to 0 like above
//       } else {
//         for (let m = i; m < i + number; m++) {
//           if (arr[j]! % 2 !== 0) {
//             // checking every element in the sub array is divisible by 2
//             break // adding all the values together in that current loop
//           }
//           sum += arr[j]!
//         }
//       }
//       max = Math.max(max, sum)
//     }
//   }
//   return max
// }

// example for doing the third inner loop

// CHATGPT SOLUTIONN

export const maxContSubArrayWithEvenNums = (
  numbers: number[],
  number: number | null
): number | null => {
  if (numbers.length === 0 || typeof number !== 'number') return null

  let max = 0

  for (let i = 0; i <= numbers.length - number; i++) {
    let sum = 0
    let allEven = true

    for (let m = i; m < i + number; m++) {
      if (numbers[m]! % 2 !== 0) {
        allEven = false
        break
      }
      sum += numbers[m]!
    }

    if (allEven) {
      max = Math.max(max, sum)
    }
  }

  return max
}

export const alotOfOnes = (numbers: number[]): number => {
  let ones = 0 // delaring empty variable for handling current one count in the loop
  let maxOnes = 0 // variable for holding the highest one count so far in the loop
  for (let i = 0; i < numbers.length; i++) {
    // looping over the array forwards
    if (numbers[i] === 1) {
      // checking if the iteration is 1 and then adding one to the current one count
      ones++ // increment the ones by one
    } else {
      ones = 0 // when we hit one that isnt reset the counter
    }
    maxOnes = Math.max(maxOnes, ones) // reassigning max to the highest current every iteration
  }

  return maxOnes // returning the max
}

// finding the second highest number in an arrray

export const nonceHighestNum = (numbers: number[]): number | null => {
  if (numbers.length === 0) return null

  let highestNum: number = numbers[0]!
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] as number) > highestNum) {
      highestNum = numbers[i]!
    }
  }

  let secondHighestNum: number = -Infinity

  for (let i = 0; i < numbers.length; i++) {
    if (
      (numbers[i] as number) < highestNum &&
      (numbers[i] as number) > secondHighestNum
    ) {
      secondHighestNum = numbers[i]!
    }
  }

  return secondHighestNum
}

// function that returns the maximum contiguous sub array of length k
// export const okieDokieMaxCont = (
//   numbers: number[],
//   k: number
// ): number | null => {

// }
//loop through numbers
