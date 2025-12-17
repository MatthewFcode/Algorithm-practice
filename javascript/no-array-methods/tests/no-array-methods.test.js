import { test, expect } from 'vitest'
import {
  reverseArr,
  sumEvenNumbers,
  parseBoldText,
  mergeArrays,
  squareNumbers,
  filterZeros,
  isAscendingOrder,
  countOccurencesOfNum,
  doubleNumbersManually,
  getIndexOf,
  twoSum,
  buyAndSell,
  isSorted,
  firstDuplicate,
  occurencesOfNumbersWithoutReduce,
  returnMostFrequentNumber,
  findFirstNonReoccuringLetter,
  missingNumberInSequence,
  countPairsThatAddToTargt,
} from '../no-array-methods.js'

test('Reverse an array without using any array methods', () => {
  //Arrange
  const arr = [
    1,
    4,
    666,
    77.8,
    123241,
    'nihao',
    4,
    'Hello world',
    4 * 3,
    Math.floor(500 * 40003.6),
  ]
  const expected = [
    20001800,
    12,
    'Hello world',
    4,
    'nihao',
    123241,
    77.8,
    666,
    4,
    1,
  ]
  //Act
  const result = reverseArr(arr)
  //Assert
  expect(result).toEqual(expected)
})

test('count how many even numbers there are in an array without using any array methods', () => {
  //Arrange
  const numbers = [2, 5, 7, 12, 14]
  const numbers2 = [
    'hello',
    4,
    15,
    19,
    22,
    'I love willa',
    10,
    323,
    'bondi rescue',
  ]
  const expected = 3
  const expected2 = 3
  //Act
  const result = sumEvenNumbers(numbers)
  const result2 = sumEvenNumbers(numbers2)
  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('given a string with any bold markdown tags turn them into <b></b> html tags in the correct places', () => {
  //Arrange
  const string = '**This is bold**'
  const string2 = '__This is also bold__'
  const string3 = '**This is not bold **'
  const string4 = '__ This is also not bold__'
  const string5 = 'The **quick** brown fox __jumps__ over the **lazy** dog.'
  const expected = '<b>This is bold</b>'
  const expected2 = '<b>This is also bold</b>'
  const expected3 = '**This is not bold **'
  const expected4 = '__ This is also not bold__'
  const expected5 =
    'The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.'
  //Act
  const result = parseBoldText(string)
  const result2 = parseBoldText(string2)
  const result3 = parseBoldText(string3)
  const result4 = parseBoldText(string4)
  const result5 = parseBoldText(string5)
  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
  expect(result3).toEqual(expected3)
  expect(result4).toEqual(expected4)
  expect(result5).toEqual(expected5)
})

test('merging two arrays with no array methods', () => {
  //Arrange
  const arr1 = [1, 555, 749, 34345, 2224, 2, 3444]
  const arr2 = [2232, 323234, 23333, 444, 3133, 44]
  const expected = [
    1, 555, 749, 34345, 2224, 2, 3444, 2232, 323234, 23333, 444, 3133, 44,
  ]
  //Act
  const result = mergeArrays(arr1, arr2)
  //Assert
  expect(result).toEqual(expected)
})

test('create a new array of square roots of each value of the array', () => {
  //Arrange
  const numbers = [2, 4, 6, 8, 16, 24, 32, 64, 128, 256, 512, 1024]
  //Act
  const result = squareNumbers(numbers)
  //Assert
  expect(result).toEqual(result)
})

test('filter all values of 0 out of an array manually ', () => {
  //Arrange
  const numbers = [0, 55, 550, 223, 0, 3, 0, 2323, 0, 0, 3232, 0, 232, 44, 0]
  const expected = [55, 550, 223, 3, 2323, 3232, 232, 44]
  //Act
  const result = filterZeros(numbers)
  //Arrange
  expect(result).toEqual(expected)
})

test('check of the array is sorted in ascending order and return true or false', () => {
  //Arrange
  const numbers = [1, 44, 6232, 9032, 10302, 15455]
  const numbers2 = [33, 1, 532, 5, 0, 345, 123312414141343]
  const expected = true
  const expected2 = false
  //Act
  const result = isAscendingOrder(numbers)
  const result2 = isAscendingOrder(numbers2)
  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('count how many times a specified value appears in an array without using arr methods', () => {
  //Arrange
  const numbers = [1, 44, 34, 2, 3, 6, 7, 1, 1, 1, 1, 5, 5, 5, 33]
  const number = 1
  const expected = 5
  //Act
  const result = countOccurencesOfNum(numbers, number)
  //Assert
  expect(result).toEqual(expected)
})

test('double every number in array manually and without using .push()', () => {
  //Arrange
  const numbers = [44, 55, 3232, 232, 2, 23, 2323, 2323, 232]
  const expected = [88, 110, 6464, 464, 4, 46, 4646, 4646, 464]
  //Act
  const result = doubleNumbersManually(numbers)
  //Assert
  expect(result).toEqual(expected)
})

test('function takes an array and specified value and returns the first index of that value', () => {
  //Arrange
  const numbers = [232, 232, 23, 23, 42, 23423, 2, 32342, 34, 234, 342234234]
  const words = ['hello', 'what', 'banasa', 4, 'd', 2342643]
  const number = 34
  const word = 'banasa'
  const expectedNumbers = 8
  const expectedWords = 2
  //Act
  const result = getIndexOf(numbers, number)
  const result2 = getIndexOf(words, word)
  //Assert
  expect(result).toEqual(expectedNumbers)
  expect(result2).toEqual(expectedWords)
})

test('function that returns the indicies of numbers in an array that add up to the target specified', () => {
  //Arrange
  const numbers = [3, 4, 10, 34, 18]
  const target = 28
  const expected = [2, 4]
  //Act
  const result = twoSum(numbers, target)
  //Assert
  expect(result).toEqual(expected)
})

// test('function that takes an array of numbers and finds the lowest point to by at and then the highest point left after to sell at then calculates the profit margin', () => {
//   //Arrange
//   const numbers = [7, 1, 3, 2, 6, 5]
//   const expected = 5
//   //Act
//   const result = buyAndSell(numbers)
//   //Assert
//   expect(result).toEqual(expected)
// })

test('function that checks if an array is sorted or not and returns a boolean', () => {
  //Arrange
  const numbers = [1, 3, 5, 7, 9]
  const expected = true
  const numbers2 = [1, 3, 3, 7]
  const expected2 = false

  //Act
  const result = isSorted(numbers)
  const result2 = isSorted(numbers2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test(' function that returns the value of the first duplicate in an array', () => {
  //Arrange
  const numbers = [2, 3, 7, 3, 2, 9, 5656, 2]
  const numbers1 = [2, 2]

  const expected = 3
  const expected1 = 2
  //Act
  const result = firstDuplicate(numbers)
  const result1 = firstDuplicate(numbers1)

  //Assert
  expect(result).toEqual(expected)
  expect(result1).toEqual(expected1)
})

test('count the occurences of numbers and from an array and add the numbers add properties if the dont exist', () => {
  //Arrange
  const numbers = [1, 2, 2, 2, 2, 4, 5, 3, 1, 4, 5, 3]
  const expected = { 1: 2, 2: 4, 4: 2, 5: 2, 3: 2 }

  //Act
  const result = occurencesOfNumbersWithoutReduce(numbers)
  //Assert
  expect(result).toEqual(expected)
})

test('return the most frequent number in an array', () => {
  //Arrange
  const numbers = [1, 2, 2, 2, 2, 4, 5, 3, 1, 4, 5, 3]
  const expected = 2

  //Act
  const result = returnMostFrequentNumber(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('given a string return the first character that does not repeat', () => {
  //Arrange
  const word = 'hansnah'
  const expected = 's'

  //Act
  const result = findFirstNonReoccuringLetter(word)
  //Assert
  expect(result).toEqual(expected)
})

test('function that takes and array of numbers that have a number missing in a sequence || return the missing number', () => {
  //Arrange
  const numbers = [1, 2, 4, 5]
  const numbers2 = [2, 3, 1, 5]
  const numbers3 = [1]
  const numbers4 = [1, 2, 3]

  const expected = 3
  const expected1 = 4
  const expected2 = 2
  const expected3 = 4

  //Act
  const result = missingNumberInSequence(numbers)
  const result2 = missingNumberInSequence(numbers2)
  const result3 = missingNumberInSequence(numbers3)
  const result4 = missingNumberInSequence(numbers4)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected1)
  expect(result3).toEqual(expected2)
  expect(result4).toEqual(expected3)
})

test(' counting the amount of pairs in a number array that add up to n', () => {
  //Arrange
  const numbers = [1, 2, 3, 4, 5]
  const target = 6
  const numbers2 = [3, 3, 3]
  const target2 = 6
  const numbers3 = []
  const target3 = 5

  const expected = 2
  const expected2 = 3
  const expected3 = 0

  //Act
  const result = countPairsThatAddToTargt(numbers, target)
  const result2 = countPairsThatAddToTargt(numbers2, target2)
  const result3 = countPairsThatAddToTargt(numbers3, target3)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
  expect(result3).toEqual(expected3)
})

test('function that finds the smallest missing positive integer', () => {
  //Arrange
  const numbers = [3, 4, -1, 1]
  const numbers2 = [1, 2, 3]
  const numbers3 = [7, 8, 9, 11, 12]

  const expected = 2
  const expected2 = 4
  const expected3 = 10

  //Act
  const result1 = firstMissingPositiveNumber(numbers)
  const result2 = firstMissingPositiveNumber(numbers2)
  const result3 = firstMissingPositiveNumber(numbers3)

  //Assert
  expect(result1).toEqual(expected)
  expect(result2).toEqual(expected2)
  expect(expected3).toEqual(result3)
})
