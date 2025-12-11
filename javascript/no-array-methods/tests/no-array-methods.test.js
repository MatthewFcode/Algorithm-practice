import { test, expect } from 'vitest'
import { reverseArr, sumEvenNumbers } from '../no-array-methods.js'

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
  //Assert
  const result = sumEvenNumbers(numbers)
  const result2 = sumEvenNumbers(numbers2)
  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})
