import { expect, test } from 'vitest'
import {
  longestContUniqueSubString,
  longestIncreasingContNumSubArray,
  firstNonRepChar,
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
