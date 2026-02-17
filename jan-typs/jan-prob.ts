export const longestContUniqueSubString = (string: string): number | null => {
  if (string.length === 0) return null

  // nested loop through the string
  // init a object at the start of every index for seen and if it isnt make that current iteration seen
  // check if seen -> break
  // if not then init a var to the length using the iterators
  // keep a max var for the longest one and then return that
  let maxLength: number = 0
  let currentLength: number = 0

  for (let i = 0; i < string.length; i++) {
    let hash: Record<string, boolean> = {}
    for (let j = i; j < string.length; j++) {
      if (hash[string[j] as string]) {
        break
      } else {
        hash[string[j] as string] = true
        maxLength = Math.max(maxLength, j - i + 1)
      }
    }
  }

  return maxLength
}

export const longestIncreasingContNumSubArray = (
  numbers: number[]
): number | null => {
  if (numbers.length === 0) return null

  // loop through the numbers
  // check if the next variable is more than the current
  // keep track of current highest with math.Max  in the loop and then return that
  let longest: number = 0
  let current: number = 0

  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] as number) < numbers[i + 1]!) {
      current += 1
    } else {
      if (current > longest) {
        longest = current
      }
      current = 0
    }
  }

  if (current > longest) {
    longest = current
  }

  return longest + 1
}

export const firstNonRepChar = (string: string): number | string | null => {
  if (string.length === 0) return null

  const str: string = string.toLowerCase()
  // plaindrome check || loop through the string backwards | push to arr join array and compare tp string
  let palindromeCheck: string[] = []
  for (let i = str.length - 1; i >= 0; i--) {
    palindromeCheck.push(str[i] as string)
  }

  const str2 = palindromeCheck.join('')
  if (str2 === str) return 'no non-repeating chars'

  //freqMap through str
  let freqMap: Record<string, number> = {}

  for (let i = 0; i < str.length; i++) {
    if (freqMap[str[i] as string]) {
      freqMap[str[i] as string]! += 1
    } else if (!freqMap[str[i] as string]) {
      freqMap[str[i] as string] = 1
    }
  }

  let char: string = ''

  for (let i = 0; i < str.length; i++) {
    if (freqMap[str[i] as string] === 1) {
      return i
    }
  }

  return 'somehow you managed to escape'
}

export const isAnagram = (string: string, string1: string): boolean | null => {
  if (string.length === 0 || string1.length === 0) return null
  if (string.length !== string1.length) return false

  //freqMap the first array
  let freqMap: Record<string, number> = {}

  for (let i = 0; i < string.length; i++) {
    const char: string = string[i]!
    if (freqMap[char]) {
      freqMap[char] += 1
    } else if (!freqMap[char]) {
      freqMap[char] = 1
    }
  }
  // loop over the second string || check if the current iteration is in the freq map and if it isnt then return false || minus out of the freqMap

  for (let i = 0; i < string1.length; i++) {
    const char: string = string1[i]!
    if (!freqMap[char]) {
      return false
    } else if (freqMap[char]) {
      freqMap[char] - 1
    }
  }

  return true
}

export const twentyChar = (string: string): string | null => {
  if (string.length === 0) return null
  if (string.length <= 20) return string

  // loop over till the index is 18 and add that to an array
  let stringArr: string[] = []
  for (let i = 0; i <= 16; i++) {
    stringArr.push(string[i]!)
  }

  let str: string = stringArr.join('') + '...'
  return str
}

export const zodiacFinder = (date: string): string | null => {
  if (date.length === 0) return null

  const [, monthStr, dayStr] = date.split('-')

  const month: number = Number(monthStr)
  const day: number = Number(dayStr)

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return 'Scorpio'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return 'Sagittarius'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return 'Capricorn'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return 'Aquarius'
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces'

  return 'Thats no a valid birthday formay it needs to be YYYY/MM/DD'
}

export const twoSum = (numbers: number[], k: number): number[] | null => {
  //quick sanity check
  if (numbers.length === 0 || typeof k !== 'number') return null

  // we are init a clean arr || nested loop over the nums and check if it hits the target
  let ints: number[] = []
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if ((numbers[i] as number) + numbers[j]! === k) {
        ints.push(i, j)
      }
    }
  }

  return ints
}

export const anagramCheck = (str1: string, str2: string): boolean | null => {
  //quick snaity check
  if (str1.length === 0 || str2.length === 0) return null

  // change strs to lowCase || freqMap over the first string
  const lowStr1: string = str1.toLowerCase()
  const lowStr2: string = str2.toLowerCase()

  let freqMap: Record<string, number> = {}

  for (let i = 0; i < lowStr1.length; i++) {
    const ch: string = lowStr1[i]!
    if (freqMap[ch]) {
      freqMap[ch] += 1
    } else if (!freqMap[ch]) {
      freqMap[ch] = 1
    }
  }
  // loop over the second string check if the freqMap has the current char other wise minus 1 of the freqMap and all should be 0
  for (let i = 0; i < lowStr2.length; i++) {
    const ch: string = lowStr2[i]!
    if (!freqMap[ch]) {
      return false
    } else if (freqMap[ch]) {
      freqMap[ch] - 1
    }
  }

  return true
}

export const removeDuplicates = <T extends string | number>(
  arr: T[] // the T is just delaring a type before the parameteres for specific TypeScript functions
): number | null => {
  //sanity check
  if (arr.length === 0) return null

  // declare an empty array || loop \\ .includes and then push and them a return
  let clean: T[] = []

  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i]!
    if (clean.includes(ch)) {
      continue
    } else if (!clean.includes(ch)) {
      clean.push(ch)
    }
  }

  return clean.length
}

export const manualStrReversal = (string: string): string | null => {
  // sanity check
  if (string.length === 0) return null

  const strArr: string[] = string.split('')
  let revStrArr: string[] = []

  for (let i = strArr.length; i >= 0; i--) {
    const ch: string = strArr[i]!
    revStrArr.push(ch)
  }

  const revStr: string = revStrArr.join('')
  return revStr
}

export const kadaneAlg = (numbers: number[]): number | null => {
  if (numbers.length === 0) return null

  let max: number = numbers[0]!

  // contigous = largest sum of numbers next to each other
  for (let i = 0; i < numbers.length; i++) {
    let current: number = 0
    for (let j = i; j < numbers.length; j++) {
      // we are just looping through to the end
      const ch: number = numbers[j]!
      current += ch
      if (current > max) {
        max = current
      }
    }
  }

  return max
}

// returning the longest sub string without repeating characters
export const subStringWithoutRepeatingCharacters = (
  string: string
): number | null => {
  // sanity check
  if (string.length === 0) return null
  // declare max length var
  let maxLength: number = 0
  // nested loop over the string | start seen obj at i and check of every iteration of j is in the seen object (if it is then break the loop obj resets) |
  for (let i = 0; i < string.length; i++) {
    let seen: Record<string, boolean> = {}
    for (let j = i; j < string.length; j++) {
      const ch: string = string[j]!
      if (seen[ch]) {
        break
      } else {
        seen[ch] = true
        maxLength = Math.max(maxLength, j - i + 1)
      }
    }
  }

  return maxLength
}

// quick two sum

export const quickTwoSum = (
  numbers: number[],
  target: number
): number[] | null => {
  // sanity check
  if (numbers.length === 0 || typeof target !== 'number') return null

  // clean array to push indexes to
  let indicies: number[] = []
  //nested loop
  for (let i = 0; i < numbers.length; i++) {
    // we compare i with every number in the rest of the array and if nothing matches we move i forward by 1
    for (let j = i + 1; j < numbers.length; j++) {
      const chi: number = numbers[i]!
      const chj: number = numbers[j]!

      if (chi + chj === target) {
        indicies.push(i, j)
      }
    }
  }

  return indicies
}

export const quickValidAnagram = (
  string1: string,
  string2: string
): boolean | null => {
  // quick sanity check
  if (string1.length === 0 || string2.length === 0) return null

  // we are going to turn both strings to lower case
  const str1: string = string1.toLowerCase()
  const str2: string = string2.toLowerCase()

  // we are going to frequency map the first array
  let freqMap: Record<string, number> = {}
  for (let i = 0; i < str1.length; i++) {
    const ch: string = str1[i]!
    if (freqMap[ch]) {
      freqMap[ch] += 1
    } else if (!freqMap[ch]) {
      freqMap[ch] = 1
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const ch: string = str2[i]!
    if (!freqMap[ch]) {
      return false
    } else if (freqMap[ch]) {
      freqMap[ch] -= 1
    }
  }
  return true
}

export const contractorTakeHomePay = (
  income: number,
  expenses: number,
  taxRate: number,
  accLevyRate: number
): number | null => {
  let taxableIncome: number = income - expenses

  if (taxableIncome < 0) {
    taxableIncome = 0
  }

  let tax: number = taxableIncome * taxRate

  let accLevy: number = taxableIncome * accLevyRate

  return income - tax - accLevy
}

// real answer init okiedokie
export const productOfArrayExceptSelf = (
  numbers: number[]
): number[] | null => {
  //sanity check
  if (numbers.length === 0) return null

  // clean array to push the value
  let numArr: number[] = []

  // outer loop
  for (let i = 0; i < numbers.length; i++) {
    let currentNum: number = 1 // current iteration of the arr
    // inner loop that start at 0 to catch the numbers before i when i moves forward from 0
    for (let j = 0; j < numbers.length; j++) {
      // on loop per i
      const jNum: number = numbers[j]!
      if (j !== i) {
        // check if the j isnt the i we are on and then times the i by everything but itself
        currentNum *= jNum // we are starting current number at it self but we wanna do
      }
    }

    // push the current state of the currentNum times
    numArr.push(currentNum)
  }

  return numArr
}

// kadanes algorithm || finding the maxium subarray in an array

export const quickKadaneAlg = (numbers: number[]): number | null => {
  //sanity check
  if (numbers.length === 0) return null

  // var for max sum
  let maxSum: number = -Infinity // init to inf negative
  // loop over
  for (let i = 0; i < numbers.length; i++) {
    let currentSum: number = 0 // init to 0 after checking everything from i
    for (let j = i; j < numbers.length; j++) {
      // loop to the end from i
      const jh: number = numbers[j]!
      currentSum += jh // checking the sum of adding everything together in the sub array
      if (currentSum > maxSum) {
        // if something goes above the currentHighest val then reassign
        maxSum = currentSum
      }
    }
  }

  return maxSum // return the sum of the highest cont numbers
}

export const practiceProductOfArrayExceptSelf = (
  numbers: number[]
): number[] | null => {
  if (numbers.length === 0) return null

  //init clean array
  let cleanArr: number[] = []

  // outer loop over nums || inner loop over nums starting at 0
  for (let i = 0; i < numbers.length; i++) {
    // declare product to times numbers by
    let product: number = 1
    for (let j = 0; j < numbers.length; j++) {
      const num: number = numbers[j]!
      // times first object by one (same num and add to product) then times all other numbers by that where the iteration doesnt match
      if (j !== i) {
        product *= num
      }
    }
    cleanArr.push(product)
  }

  return cleanArr
}

export const practiceLongSubStrWoRepChars = (string: string): number | null => {
  // sanity check
  if (string.length === 0) return null

  // declare var for max length
  let maxLength: number = 0

  // loop over every char || sliding window -- if char is seen break sliding window resets || if not calculate lenth at that time but Math.max it to keep highest in that variable
  // return the highest easy peasy

  for (let i = 0; i < string.length; i++) {
    let seen: Record<string, boolean> = {}
    const chi: string = string[i]!
    for (let j = i; j < string.length; j++) {
      const chj: string = string[j]!
      if (seen[chj]) {
        break
      } else {
        maxLength = Math.max(maxLength, j - i + 1)
        seen[chj] = true
      }
    }
  }

  return maxLength
}

// export const kFreqElements = (
//   numbers: number[],
//   k: number
// ): number[] | null => {
//   // sanity check
//   if (numbers.length === 0 || typeof k !== 'number') return null

//   // we are going to freqMap the numbers
//   let freqMap: Record<number, number> = {}

//   for (let i = 0; i < numbers.length; i++) {
//     const num: number = numbers[i]!
//     if (freqMap[num]) {
//       freqMap[num] += 1
//     } else if (!freqMap[num]) {
//       freqMap[num] = 1
//     }
//   }
//   //clean arr to push to
//   let cleanArr: number[] = []

//   for (let i = 0; i < k; i++) {
//     // runs this loop k times
//     let maxFreq: number = -Infinity // max frequencey to track most appearing num
//     let maxKey: number = 0 // the key with the current most
//     for (const keyStr in freqMap) {
//       // loops through the object
//       const key: number = Number(keyStr) // this is the key turned to a number
//       if (freqMap[key]! > maxFreq) {
//         // freqMap[key] acesses the value associated with the current key
//         // of the frequency of the current val > than negative infinity
//         maxKey = key // reassigning the max key
//         maxFreq = freqMap[key]! // reassigning the current max frequency if > -Infinity
//       }
//     }

//     cleanArr.push(maxKey) // we have the key with the higest frequency in the arr now
//     delete freqMap[maxKey] // delete the key and its value for the next loop so it isn't found again
//   }

//   return cleanArr
// }

export const kFreqElements = (
  numbers: number[],
  k: number
): number[] | null => {
  //sanity check
  if (numbers.length === 0 || typeof k !== 'number') return null

  // freqMap the numbers
  let freqMap: Record<number, number> = {}

  for (let i = 0; i < numbers.length; i++) {
    const num: number = numbers[i]!
    if (freqMap[num]) {
      freqMap[num] += 1
    } else if (!freqMap[num]) {
      freqMap[num] = 1
    }
  }

  //clean arr || start a loop that runs k times
  let cleanArr: number[] = []

  for (let i = 0; i < k; i++) {
    //declare vars for the current highest freq, and the value that has that
    let highestFreq: number = -Infinity
    let highestFreqKey: number = 0
    for (const keyStr in freqMap) {
      // loop through the keys of the object
      const key: number = Number(keyStr)
      if (freqMap[key]! > highestFreq) {
        highestFreqKey = key
        highestFreq = freqMap[key]!
      }
    }

    cleanArr.push(highestFreqKey)
    delete freqMap[highestFreqKey]
  }

  return cleanArr
}

export const anotherQuickProductExceptSelf = (
  numbers: number[]
): number[] | null => {
  //qucik sanity check
  if (numbers.length === 0) return null

  // declare clean arr
  let cleanArr: number[] = []

  // loop over all numbers and decalre product to multiply first number that isnt that same iteration by
  for (let i = 0; i < numbers.length; i++) {
    let product: number = 1
    //started nested loop at 0 for every i
    for (let j = 0; j < numbers.length; j++) {
      const num: number = numbers[j]! // current iteration/ number of the inner loop
      if (j !== i) {
        product *= num
      }
    }

    cleanArr.push(product)
  }

  return cleanArr
}
