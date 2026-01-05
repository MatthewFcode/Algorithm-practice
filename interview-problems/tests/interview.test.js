import { test, expect } from 'vitest'
import {
  getLongestConsecutiveSequence,
  removeOverlappingIntervals,
  findIndexOfFirstNonRepeatingCharacterInString,
  twoSum,
  longestUniqueSubString,
  integerFizzBuzz,
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
