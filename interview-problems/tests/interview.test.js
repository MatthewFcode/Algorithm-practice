import { test, expect } from 'vitest'
import {
  getLongestConsecutiveSequence,
  removeOverlappingIntervals,
  findIndexOfFirstNonRepeatingCharacterInString,
  twoSum,
  longestUniqueSubString,
  integerFizzBuzz,
  findMissingNumber,
  vowelCase,
  tirePressure,
  isLeapYear,
  findLeftHandedSeats,
  resolutionStreak,
  init,
} from '../interview.js'

test('function returns the length of the longest consecutive sequence of numbers in increasing order in a number array', () => {
  //Arrange
  const numbers = [100, 4, 200, 1, 3, 2]

  const expected = 4

  //Act
  const result = getLongestConsecutiveSequence(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('function removes intervals from an array where the intervals overlap', () => {
  //Arrange
  const intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]

  const expected = 1

  //Act
  const result = removeOverlappingIntervals(intervals)

  //Assert
  expect(result).toEqual(expected)
})

test('function that returns the index of the first non repeating character in a string', () => {
  //Arrange
  const string = 'wiggleiw'

  const expected = 4

  // Act
  const result = findIndexOfFirstNonRepeatingCharacterInString(string)

  //Assert
  expect(result).toEqual(expected)
})

test('function that returns the indicies of numbers in an array that add up to a target', () => {
  //Arrange
  const numbers = [2, 3, 5, 1, 22, 7]
  const sum = 9

  const expected = [0, 5]

  //Act
  const result = twoSum(numbers, sum)

  //Assert
  expect(result).toEqual(expected)
})

test('function that finds the longest unique substring', () => {
  //Arrange
  const string = 'abcabcaa'
  const expected = 3

  //Act
  const result = longestUniqueSubString(string)

  //Assert
  expect(result).toEqual(expected)
})

test('fizzbuzz function that takes and integer and returns and array with all the numbers counting up to that number with the fizzbuzz replacement conditions applied', () => {
  //Arrange
  const integer = 50

  const expected = [
    1,
    2,
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzbuzz',
    16,
    17,
    'fizz',
    19,
    'buzz',
    'fizz',
    22,
    23,
    'fizz',
    'buzz',
    26,
    'fizz',
    28,
    29,
    'fizzbuzz',
    31,
    32,
    'fizz',
    34,
    'buzz',
    'fizz',
    37,
    38,
    'fizz',
    'buzz',
    41,
    'fizz',
    43,
    44,
    'fizzbuzz',
    46,
    47,
    'fizz',
    49,
    'buzz',
  ]
  //Act
  const result = integerFizzBuzz(integer)

  //Assert
  expect(result).toEqual(expected)
})

test('function that finds the missing number in an number sequence array', () => {
  //Arrange
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const expected = 'nothing missing in the sequence'

  //Act
  const result = findMissingNumber(numbers)

  //Assert
  expect(result).toEqual(expected)
})

test('function that turns all vowels in a string into uppercase and everything else is converted to lowercase', () => {
  //Arrange
  const word = 'vowelcase'
  const word2 = 'coding is fun'
  const word3 = 'HELLO, world!'

  const expected = 'vOwElcAsE'
  const expected2 = 'cOdIng Is fUn'
  const expected3 = 'hEllO, wOrld!'

  //Act
  const result = vowelCase(word)
  const result2 = vowelCase(word2)
  const result3 = vowelCase(word3)

  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
  expect(result3).toEqual(expected3)
})

test('function that checks the tire pressure of four numbers in an array and returns an array with the quality of the tire pressure', () => {
  //Arrange
  const tires = [32, 28, 35, 29]
  const tires2 = [32, 28, 35, 30]

  const pressure = [2, 3]
  const pressure2 = [2, 2.3]

  const expected = ['Good', 'Low', 'Good', 'Low']
  const expected2 = ['Good', 'Low', 'High', 'Good']

  //Act
  const result = tirePressure(tires, pressure)
  const result2 = tirePressure(tires2, pressure2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that determines whether an integer is a leap year', () => {
  //Arrange
  const year = 2024
  const year2 = 2023

  const expected = true
  const expected2 = false

  //Act
  const result = isLeapYear(year)
  const result2 = isLeapYear(year2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that determines where a left handed person can sit at a table using a matrix of arrays', () => {
  //Arrange
  const matrix = [
    ['U', 'R', 'U', 'L'],
    ['U', 'R', 'R', 'R'],
  ]
  const matrix2 = [
    ['U', 'U', 'U', 'U'],
    ['U', 'U', 'U', 'U'],
  ]

  const expected = 2
  const expected2 = 8

  //Act
  const result = findLeftHandedSeats(matrix)
  const result2 = findLeftHandedSeats(matrix2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that works like a resolution tracker, tracking streaks in subarrays of keeping resolution promises', () => {
  //Arrange
  const resolutionMatrix = [
    [10500, 75, 15],
    [11000, 90, 10],
    [10650, 100, 9],
  ]
  const resolutionMatrix2 = [
    [10000, 120, 5],
    [10950, 121, 11],
  ]

  const expected = 'Resolution on track: 3 day streak.'
  const expected2 = 'Resolution failed on day 2: 1 day streak.'

  //Act
  const result = resolutionStreak(resolutionMatrix)
  const result2 = resolutionStreak(resolutionMatrix2)

  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('function that finds the longest unique substring', () => {
  //Arrange
  const string = 'abcabcaa'
  const expected = 3

  //Act
  const result = init(string)

  //Assert
  expect(result).toEqual(expected)
})
