import { test, expect } from 'vitest'
import {
  getLongestConsecutiveSequence,
  removeOverlappingIntervals,
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
