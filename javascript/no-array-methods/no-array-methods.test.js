import { test, expect } from 'vitest'
import { reverseArr } from './no-array-methods.js'

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
  //Arrange
  const result = reverseArr(arr)
  //Assert
  expect(result).toEqual(expected)
})
