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

export const
