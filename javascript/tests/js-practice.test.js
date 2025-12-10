import { expect, test } from 'vitest'
import {
  doubleNumbers,
  filterShortWords,
  sumEvenNumbers,
} from '../js-practice.js'

test('uses .map() effentially to double every number in an array', () => {
  //Arrange
  const numbers = [20, 40, 21, 32.5, 66.6]
  const expected = [40, 80, 42, 65, 133.2]
  //Act
  const result = doubleNumbers(numbers)
  //Assert
  expect(result).toEqual(expected)
})

test('filtering out short words using the .filter() function', () => {
  //Arrange
  const words = ['Pajamas', 'hi', 'weather', 'football', 'in', 'to']
  const expected = ['Pajamas', 'weather', 'football']
  //Act
  const result = filterShortWords(words)
  //Assert
  expect(result).toEqual(expected)
})

test('sum all even numbers in an array filtering out any uneven numbers', () => {
  //Arrange
  const test1 = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
    42, 44,
  ]
  const test2 = [
    3, 8, 11, 14, 19, 22, 27, 30, 35, 40, 43, 48, 51, 56, 59, 60, 63, 70, 73,
    74, 81, 88,
  ]
  const expected1 = 506
  const expected2 = 510
  //Act
  const result1 = sumEvenNumbers(test1)
  const result2 = sumEvenNumbers(test2)
  //Assert
  expect(result1).toEqual(expected1)
  expect(result2).toEqual(expected2)
})
