import { test, expect } from 'vitest'
import {
  typeOfUnion,
  filterObjectsWithoutPriceProperty,
  firstUniqueCharacter,
  findMaxPossibleSum,
  isPalindrome,
  longestUniqueSubString,
  findMissingNumber,
  wordStringReverse,
  fullStringReverse,
  findLongestConsecutiveSequence,
  productExceptSelf,
  twoSum,
  moveZeroes,
  longestSubArrayToK,
  maximumContigousSubArray,
  findSecondHighestNum,
  longestContSubArray,
  //smallestMissingPostiveInteger,
  maxConsecOnes,
  nonRepChar,
  maxContSubArrayToK,
  findDuplicateTransactions,
  overlappingInvoices,
  initLongSubArray,
  whatTheNonRepChar,
  longestSubArrayLessThanK,
  maxContSubArrayWithEvenNums,
} from '../typescript.js'
// types imports for the arrangment data
import type { Product, FilteredProduct } from '../typescript.js'

test('function that takes a union type of a string or a number and then returns the type of the input', () => {
  //Arrange
  const value = 'Matthew Francis John-Paul Foley' as string
  const expected = 'string' as string
  //Act
  const result: string = typeOfUnion(value)
  //Assert
  expect(result).toEqual(expected)
})

test('function takes an array of products and returns only those with a price', () => {
  //Arrange
  const products: Product[] = [
    { id: 1, name: 'Keyboard', price: 99, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 49, category: 'Electronics' },
    { id: 3, name: 'Monitor', price: 399, category: 'Electronics' },
    { id: 4, name: 'Water Bottle', category: 'Fitness' },
    { id: 5, name: 'Running Shoes', price: 159, category: 'Fitness' },
    { id: 6, name: 'Notebook' },
    { id: 7, name: 'Desk Lamp', price: 79 },
    { id: 8, name: 'Gaming Chair', price: 299 },
    { id: 9, name: 'Pencil' },
    { id: 10, name: 'Headphones', price: 199 },
    { id: 11, name: 'Backpack', category: 'Travel' },
    { id: 12, name: 'Smartwatch', price: 249 },
    { id: 13, name: 'Sunglasses', price: 120, category: 'Fashion' },
    { id: 14, name: 'Jacket', category: 'Fashion' },
    { id: 15, name: 'Mug', price: 15 },
    { id: 16, name: 'Blender', category: 'Kitchen' },
    { id: 17, name: 'Vacuum Cleaner', price: 180 },
    { id: 18, name: 'Knife Set', price: 89 },
    { id: 19, name: 'Toaster' },
    { id: 20, name: 'Laptop Stand', price: 45 },
  ]
  const expected: FilteredProduct[] = [
    { id: 1, name: 'Keyboard', price: 99, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 49, category: 'Electronics' },
    { id: 3, name: 'Monitor', price: 399, category: 'Electronics' },
    { id: 5, name: 'Running Shoes', price: 159, category: 'Fitness' },
    { id: 7, name: 'Desk Lamp', price: 79 },
    { id: 8, name: 'Gaming Chair', price: 299 },
    { id: 10, name: 'Headphones', price: 199 },
    { id: 12, name: 'Smartwatch', price: 249 },
    { id: 13, name: 'Sunglasses', price: 120, category: 'Fashion' },
    { id: 15, name: 'Mug', price: 15 },
    { id: 17, name: 'Vacuum Cleaner', price: 180 },
    { id: 18, name: 'Knife Set', price: 89 },
    { id: 20, name: 'Laptop Stand', price: 45 },
  ]

  //Act
  const result = filterObjectsWithoutPriceProperty(products)
  //Assert
  expect(result).toEqual(expected)
})

test('function returns first non repeating character in a string (case insensitive)', () => {
  //Arrange
  const word = 'hansnah'
  const word2 = 'aabbcc'
  const word3 = 'Swiss'
  const word4 = 'Stress'

  const expected = 's'
  const expected2 = ''
  const expected3 = 'w'
  const expected4 = 't'

  //Act
  const result = firstUniqueCharacter(word)
  const result2 = firstUniqueCharacter(word2)
  const result3 = firstUniqueCharacter(word3)
  const result4 = firstUniqueCharacter(word4)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
  expect(result3).toEqual(expected3)
  expect(result4).toEqual(expected4)
})

test('function takes an array of numbers and finds the maximum possible sum of numbers', () => {
  //Arrange
  const numbers = [1, -3, 2, 1, -1]
  const numbers2 = [-2, -1, -3]

  const expected = 4
  const expected2 = -1

  //Act
  const result = findMaxPossibleSum(numbers)
  const result2 = findMaxPossibleSum(numbers2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function takes string and returns true if it is a palindrome and false if it isnt', () => {
  //Arrange
  const word = 'Race Car'
  const word2 = 'racecar'

  //Act
  const result = isPalindrome(word)
  const result2 = isPalindrome(word2)

  const expected = true

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected)
})

test('function that returns the longest sub-string in a string without repeating characters', () => {
  //Arrange
  const string = 'abcabcbb'
  const string2 = 'b'

  const expected = 3
  const expected2 = 1

  //Act
  const result = longestUniqueSubString(string)
  const result2 = longestUniqueSubString(string2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('Function that finds the missing number', () => {
  //Arrange
  const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10]
  const numbers2 = [3, 0, 1]
  const numbers3 = [0, 1]
  // cheeky function for detecting the end of an array
  const expected = 7
  const expected2 = 2
  const expected3 = `Nothing missing in this sequence the numbers are in order from ${
    numbers3[0]
  } --> ${numbers3[numbers3.length - 1]} `

  //Act
  const result = findMissingNumber(numbers)
  const result2 = findMissingNumber(numbers2)
  const result3 = findMissingNumber(numbers3)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
  expect(result3).toEqual(expected3)
})

test('function that manually reverses a string with spaces', () => {
  //Arrange
  const word: string = 'the sky is blue'
  const word2: string = 'a b c'

  const expected: string = 'blue is sky the'
  const expected2: string = 'c b a'

  //Act
  const result = wordStringReverse(word)
  const result2 = wordStringReverse(word2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that full reverses a string with spaces', () => {
  //Arrange
  const word: string = 'the sky is blue'
  const word2: string = 'a b c'

  const expected: string = 'eulb si yks eht'
  const expected2: string = 'c b a'

  //Act
  const result = fullStringReverse(word)
  const result2 = fullStringReverse(word2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that returns the longest consecutive sequence of numbers in an unsorted array', () => {
  //Arrange
  const numbers = [100, 4, 200, 1, 3, 2]
  const numbers2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

  const expected = 4
  const expected2 = 9

  //Act
  const result = findLongestConsecutiveSequence(numbers)
  const result2 = findLongestConsecutiveSequence(numbers2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that makes [i] the product of all other elements in the array except [i] ', () => {
  //Arrange
  const numbers = [1, 2, 3, 4]
  const numbers2 = [4, 6, 2, 5]
  const expected = [24, 12, 8, 6]
  const expected2 = [60, 40, 120, 48]

  //Act
  const result = productExceptSelf(numbers)
  const result2 = productExceptSelf(numbers2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that returns the indicies of two numbers in an array that add up to k', () => {
  //Arrange
  const numbers = [2, 7, 11, 15]
  const numbers2 = [3, 2, 4]

  const target = 9
  const target2 = 6

  const expected = [0, 1]
  const expected2 = [1, 2]

  //Act
  const result = twoSum(numbers, target)
  const result2 = twoSum(numbers2, target2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that moves all 0s in an array to the end of the array and returns the original array of not', () => {
  //Arrange
  const numbers: number[] = [0, 1, 0, 3, 12]
  const numbers2: number[] = [1, 2, 3]

  const expected: number[] = [1, 3, 12, 0, 0]
  const expected2: number[] = [1, 2, 3]

  //Act
  const result = moveZeroes(numbers)
  const result2 = moveZeroes(numbers2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that finds the longest subarray in an array that adds up to k', () => {
  //Arrange
  const nums = [1, -1, 5, -2, 3]
  const k = 3

  const expected = 4

  //Act
  const result = longestSubArrayToK(nums, k)

  //Assert
  expect(result).toEqual(expected)
})

test('function that returns the maxium sum of a sub array with a defined length', () => {
  //Arrange
  const numbers = [2, 1, 5, 1, 3, 2]

  const k = 3

  const expected = 9

  //Act
  const result = maximumContigousSubArray(numbers, k)

  //Assert
  expect(result).toEqual(expected)
})

test('function that returns the index of the second highest number in an array as a string', () => {
  //Arrange
  const numbers = [-300000000000000, 4, 1, 5, 7, 9, 11, 2, 44, 9]

  const expected = '6'

  //Act
  const result = findSecondHighestNum(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('function that returns the longest increasing sub array', () => {
  //Arrange
  const numbers = [1, 3, 5, 4, 7]
  const expected = 3

  //Act
  const result = longestContSubArray(numbers)

  //Assert
  expect(result).toEqual(expected)
})

// test('function that finds the first missing positive number in an array of numbers', () => {
//   // Arrange
//   const nums = [1, 2, 0]

//   const nums2 = [3, 4, -1, 1]

//   const nums3 = [7, 8, 9, 10, 11, 12]

//   const expected = 3
//   const expected2 = 2
//   const expected3 = 1

//   //Act
//   const result = smallestMissingPostiveInteger(nums)
//   const result2 = smallestMissingPostiveInteger(nums2)
//   const result3 = smallestMissingPostiveInteger(nums3)

//   expect(result).toEqual(expected)
//   expect(result2).toEqual(expected2)
//   expect(result3).toEqual(expected3)
// })

test('function that returns the maximum amount of consecutive ones in an array', () => {
  //Arrange
  const numbers = [1, 1, 0, 1, 1, 1]

  const expected = 3

  //Act
  const result = maxConsecOnes(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('function that returns the first non-repeating in a string', () => {
  //Arrange
  const string = 'leetcode'
  const string2 = 'aabbcc'

  const expected = 'l'
  const expected2 = null

  //Act
  const result = nonRepChar(string)
  const result2 = nonRepChar(string2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

// test('function that merges arrays with intervals and removes the overlapping values', () => {
//   //Arrange
//   const numbers = [
//     [0, 1],
//     [3, 6],
//     [4, 9],
//   ]

//   const expected = [3, 4, 9]

//   const something: [] = []

//   const somethingExpected = null

//   //Act
//   const result = mergeIntervals(numbers)
//   const result2 = mergeIntervals(something)

//   //Assert
//   expect(result).toEqual(expected)
//   expect(result2).toEqual(somethingExpected)
// })

test('function that finds the maximum contigous subarray that adds up to k', () => {
  //Arrange
  const nums = [2, 1, 5, 1, 3, 2]
  const k = 3
  const expected = 10

  //Act
  const result = maxContSubArrayToK(nums, k)

  //Assert
  expect(result).toEqual(expected)
})

test('function that finds duplcate transactions in an array of objects and returns the duplicate trasnaction IDs', () => {
  //Arrange
  const transactions = [
    { id: 'a', amount: 100, reference: 'rent', timestamp: 1000 },
    { id: 'b', amount: 100, reference: 'rent', timestamp: 1020 },
    { id: 'c', amount: 200, reference: 'food', timestamp: 1030 },
    { id: 'd', amount: 100, reference: 'rent', timestamp: 2000 },
  ]
  const expected = ['b']

  //Act
  const result = findDuplicateTransactions(transactions)

  //Assert
  expect(result).toEqual(expected)
})

test('function that returns a boolean based on whether overlapping onvoices are created for a client', () => {
  //Arrange
  const invoices = [
    { id: 'A', startDate: '2024-01-01', endDate: '2024-01-31' },
    { id: 'B', startDate: '2024-02-01', endDate: '2024-02-28' },
    { id: 'C', startDate: '2024-01-15', endDate: '2024-02-10' },
  ]

  const expected = true

  //Act
  const result = overlappingInvoices(invoices)

  //Assertt
  expect(result).toEqual(expected)
})

test('function that finds the longest increasing sub array in an array', () => {
  //Arrange
  const numbers = [10, 9, 2, 5, 3, 7, 101, 18]

  const expected = 4

  //Act
  const result = initLongSubArray(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('Function that returns the first non rep char in a string ', () => {
  //Arrange
  const string = 'aabbcc'
  const string2 = 'leetcode'

  const expected = -1
  const expected2 = 0

  //Act
  const result = whatTheNonRepChar(string)
  const result2 = whatTheNonRepChar(string2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that finds the longest contigious subarray where the difference of the first and last element is less than K ', () => {
  //Arrange
  const numbers: number[] = [3, 7, 122, 125, 130, 125, 2, 5]
  const number = 4
  const numbers2: number[] = [3, 5, 8, 9, 11]
  const number2 = 2

  const expected = 8
  const expected2 = 2

  // Act
  const result: number | null = longestSubArrayLessThanK(numbers, number)
  const result2: number | null = longestSubArrayLessThanK(numbers2, number2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('returns the maximum sum of a contiguous subarray of length k with only even numbers', () => {
  // Arrange
  const nums1 = [2, 4, 6, 1, 8, 10]
  const nums2 = [1, 3, 5, 7]
  const nums3 = [2, 2, 2, 2]

  const k = 3

  const expected1 = 12 // = 24
  const expected2 = 0 // no valid even subarray
  const expected3 = 6 // 2 + 2 + 2

  // Act
  const result1 = maxContSubArrayWithEvenNums(nums1, k)
  const result2 = maxContSubArrayWithEvenNums(nums2, k)
  const result3 = maxContSubArrayWithEvenNums(nums3, k)

  // Assert
  expect(result1).toEqual(expected1)
  expect(result2).toEqual(expected2)
  expect(result3).toEqual(expected3)
})
