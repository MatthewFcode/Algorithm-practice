import { expect, test, describe, it } from 'vitest'
import {
  longestContUniqueSubString,
  longestIncreasingContNumSubArray,
  firstNonRepChar,
  isAnagram,
  twentyChar,
  zodiacFinder,
  twoSum,
  anagramCheck,
  removeDuplicates,
  manualStrReversal,
  kadaneAlg,
  subStringWithoutRepeatingCharacters,
  quickTwoSum,
  quickValidAnagram,
  contractorTakeHomePay,
  productOfArrayExceptSelf,
  quickKadaneAlg,
  practiceProductOfArrayExceptSelf,
  practiceLongSubStrWoRepChars,
  kFreqElements,
  anotherQuickProductExceptSelf,
  quickKMostFreqElements,
  anotherPracLongestSubStrWoRepChars,
  somethingKMostFreqElements,
  anotherQuickIndiciesTwoSum,
  longestConseccutiveOneInit,
  isEvenNums,
  anotherAnotherQuickProductExceptSelf,
  anotherSomethingKMostFreqElements,
  getMilestone,
} from './jan-prob.js'

test('function that returns the longest unique contigious substring', () => {
  //Arrange
  const string = 'abcabcbb'
  const expected = 3

  //Act
  const result = longestContUniqueSubString(string)

  //Assert
  expect(result).toEqual(expected)
})

test('function that finds the longest increasing contigious subarray', () => {
  //Arrange
  const numbers = [1, 3, 5, 4, 7]
  const numbers2 = [2, 3, 6, 2, 3, 1, 9, 5, 6, 7, 8]
  const expected = 3
  const expected2 = 4

  //Act
  const result = longestIncreasingContNumSubArray(numbers)
  const result2 = longestIncreasingContNumSubArray(numbers2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that finds the index of the first non repeating character', () => {
  //Arrange
  const string = 'LeetCode'
  const string2 = 'Hannah'

  const expected = 0
  const expected2 = 'no non-repeating chars'

  //Act
  const result = firstNonRepChar(string)
  const result2 = firstNonRepChar(string2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that tests whether two paramters are an anagram of eachother', () => {
  //Arrange
  const string1 = 'anagram'
  const string2 = 'nagaram'

  const expected = true

  const something1 = 'rat'
  const something2 = 'car'

  const expected2 = false

  //Act
  const result = isAnagram(string1, string2)
  const result2 = isAnagram(something1, something2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that returns string 20 chars or shorter - if it is longer trucate it to 17 chars and add 3 dots', () => {
  //Arrange
  const string = 'Hello World!'
  const string2 = 'This string should get truncated.'

  const expected = 'Hello World!'
  const expected2 = 'This string shoul...'

  //Act
  const result = twentyChar(string)
  const result2 = twentyChar(string2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that returns the correct zodiac sign based on the string date', () => {
  //Arrange
  const date = '2005-05-26'

  const expected = 'Gemini'

  //Act
  const result = zodiacFinder(date)

  //Assert
  expect(result).toEqual(expected)
})

test('TwoSum function that finds the indicies of the two numbers that add up to a target', () => {
  //Arrange
  const numbers = [2, 4, 5, 6, 8, 8]

  const k = 16

  const expected = [4, 5]

  //Act
  const result = twoSum(numbers, k)

  //Assert
  expect(result).toEqual(expected)
})

test('anagramCheck function that checks whether two strings are anagrams (case-insensitive)', () => {
  // Arrange
  const str1 = 'Listen'
  const str2 = 'Silent'

  const expected = true

  // Act
  const result = anagramCheck(str1, str2)

  // Assert
  expect(result).toBe(expected)
})

test('removeDuplicates returns correct length for a string array', () => {
  // strings
  // Arrange
  const arr = ['a', 'b', 'a', 'c', 'b']
  const expected = 3

  // Act
  const result = removeDuplicates(arr)

  // Assert
  expect(result).toBe(expected)

  // numbers
  // Arrange
  const arr2 = [1, 2, 2, 3, 4, 4, 4]
  const expected2 = 4

  // Act
  const result2 = removeDuplicates(arr2)

  // Assert
  expect(result2).toBe(expected2)
})

test('manualStrReversal function reverses a string correctly', () => {
  // Arrange
  const input = 'hello'
  const expected = 'olleh'

  // Act
  const result = manualStrReversal(input)

  // Assert
  expect(result).toBe(expected)
})

test('kadaneBruteForce finds the maximum contiguous subarray sum', () => {
  // Arrange: multiple test cases
  const cases = [
    { input: [1, -2, 3, 4], expected: 7 }, // normal case, max subarray [3,4]
    { input: [-3, -1, -7], expected: -1 }, // all negative numbers, max single element
    { input: [5, 4, -1, 7, 8], expected: 23 }, // classic example, sum of whole array except first -1
    { input: [], expected: null }, // empty array
    { input: [0, -2, 3, -1, 2], expected: 4 }, // mix of positive/negative numbers
  ]

  // Act & Assert: loop through all cases
  cases.forEach(({ input, expected }) => {
    const result = kadaneAlg(input)
    expect(result).toBe(expected)
  })
})

test('subStringWithoutRepeatingCharacters returns the length of the longest substring without repeating characters', () => {
  // Arrange
  const cases = [
    { input: 'abcabcbb', expected: 3 }, // "abc"
    { input: 'bbbbb', expected: 1 }, // "b"
    { input: 'pwwkew', expected: 3 }, // "wke"
    { input: 'abcdef', expected: 6 }, // whole string
    { input: 'a', expected: 1 }, // single character
    { input: '', expected: null }, // empty string
    { input: 'dvdf', expected: 3 }, // "vdf"
  ]

  // Act & Assert
  cases.forEach(({ input, expected }) => {
    const result = subStringWithoutRepeatingCharacters(input)
    expect(result).toBe(expected)
  })
})

describe('quickTwoSum', () => {
  it('returns null for empty array', () => {
    expect(quickTwoSum([], 10)).toBeNull()
  })

  it('returns null if target is not a number', () => {
    // @ts-expect-error intentional wrong type
    expect(quickTwoSum([1, 2, 3], '5')).toBeNull()
  })

  it('returns correct indices when two numbers add to target', () => {
    const result = quickTwoSum([2, 7, 11, 15], 9)
    expect(result).toEqual([0, 1])
  })

  it('returns multiple index pairs if multiple matches exist', () => {
    const result = quickTwoSum([1, 2, 3, 4], 5)
    expect(result).toEqual([0, 3, 1, 2])
  })

  it('returns empty array if no matches are found', () => {
    const result = quickTwoSum([1, 2, 3], 100)
    expect(result).toEqual([])
  })
})

describe('quickValidAnagram function', () => {
  it('returns true for valid anagrams', () => {
    // Arrange
    const input1 = 'listen'
    const input2 = 'silent'
    const expected = true

    // Act
    const result = quickValidAnagram(input1, input2)

    // Assert
    expect(result).toBe(expected)
  })
})

test('function that calculates take home pay for contractors', () => {
  // Arrange
  const income = 5000
  const expenses = 1000
  const taxRate = 0.28
  const accLevyRate = 0.014
  const expected = 3824

  // Act
  const result = contractorTakeHomePay(income, expenses, taxRate, accLevyRate)

  // Assert
  expect(result).toBe(expected)
})

test('function that times the iteration of num arr by everything except and pushes it to new Arr in place of that the current i', () => {
  //Arrange
  const nums: number[] = [2, 5, 6, 1, 4]

  const expected: number[] = [120, 48, 40, 240, 60]

  //Act
  const result: number[] | null = productOfArrayExceptSelf(nums)

  //Assert
  expect(result).toEqual(expected)
})

test('function that tests the Kadanes algorithm (greatest sub array in an array)', () => {
  //Arrange
  const numbers: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

  const expected: number = 6

  //Act
  const result = quickKadaneAlg(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('practicing product except self which is a function that times the iteration of num arr by everything except and pushes it to new Arr in place of that the current i', () => {
  //Arrange
  const nums: number[] = [2, 5, 6, 1, 4]

  const expected: number[] = [120, 48, 40, 240, 60]

  //Act
  const result: number[] | null = practiceProductOfArrayExceptSelf(nums)

  //Assert
  expect(result).toEqual(expected)
})

test('practice function the finds the longest substring without repeating characters', () => {
  //Arrange
  const string: string = 'jjllnnknknllkmok'

  const expected: number = 4

  //Act
  const result: number | null = practiceLongSubStrWoRepChars(string)

  //Assert
  expect(result).toEqual(expected)
})

test('function that tests the k most freq elements in an array of numbers', () => {
  //Arrange
  const nums: number[] = [22, 4, 5, 5, 2, 1, 1]
  const k: number = 2

  const expected: number[] = [1, 5]

  //Act
  const result = kFreqElements(nums, k)

  //Assert
  expect(result).toEqual(expected)
})

test('function that returns an array where every i is the product of everything else in the arr except for itself', () => {
  //Arrange
  const numbers: number[] = [1, 2, 3, 4]
  const expected: number[] = [24, 12, 8, 6]

  //Act
  const result = anotherQuickProductExceptSelf(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('quick kMostFreq function that returns k most frequent elements', () => {
  //Arrange
  const nums: number[] = [22, 4, 5, 5, 2, 1, 1]
  const k: number = 2

  const expected: number[] = [1, 5]

  //Act
  const result = quickKMostFreqElements(nums, k)

  //Assert
  expect(result).toEqual(expected)
})

// test('Another k most freq elements practice', () => {
//   //Arrange
//   const nums: number[] = [22, 4, 5, 5, 2, 1, 1]
//   const k: number = 2

//   const expected: number[] = [1, 5]

//   //Act
//   const result = anotherQuickKMostFreqElements(nums, k)

//   //Assert
//   expect(result).toEqual(expected)
// })

test('Function that returns the longest substring without repeating characters', () => {
  //Arrange
  const string: string = 'abcabcbb'

  const expected: number = 3

  //Act
  const result: number | null = anotherPracLongestSubStrWoRepChars(string)

  //Assert
  expect(result).toEqual(expected)
})

test('another test for the k most frequent elements ', () => {
  //Arrange
  const nums: number[] = [22, 4, 5, 5, 2, 1, 1]
  const k: number = 2

  const expected: number[] = [1, 5]

  //Act
  const result = somethingKMostFreqElements(nums, k)

  //Assert
  expect(result).toEqual(expected)
})

test('test another quick indicies two sum ', () => {
  //Arrange
  const nums: number[] = [22, 4, 5, 5, 2, 1, 1]
  const k: number = 24

  const expected: number[] = [0, 4]

  //Act
  const result = anotherQuickIndiciesTwoSum(nums, k)

  //Assert
  expect(result).toEqual(expected)
})

test('function that checks if the first parameter is evenly dividable by the second number', () => {
  //Arrange
  const num1: number = 4
  const num2: number = 2

  const expected: boolean = true

  //Act
  const result = isEvenNums(num1, num2)

  //Assert
  expect(result).toEqual(expected)
})

test('product of everything except self practice', () => {
  //Arrange
  const numbers: number[] = [1, 2, 3, 4]
  const expected: number[] = [24, 12, 8, 6]

  //Act
  const result = anotherAnotherQuickProductExceptSelf(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('another k most freq elements practice because why the helly not aye', () => {
  //Arrange
  const nums: number[] = [22, 4, 5, 5, 2, 1, 1]
  const k: number = 2

  const expected: number[] = [1, 5]

  //Act
  const result = anotherSomethingKMostFreqElements(nums, k)

  //Assert
  expect(result).toEqual(expected)
})

test('given an integer representing a couples blah blah blah code challenge', () => {
  //Arrange
  const year: number = 40
  const year2: number = 50

  const expected: string = 'Ruby'
  const expected2: string = 'Gold'

  //Act
  const result: string | null = getMilestone(year)
  const result2: string | null = getMilestone(year2)

  //Expect
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})
