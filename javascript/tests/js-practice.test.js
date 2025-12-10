import { desribe, it, expect, test } from 'vitest'
import { doubleNumbers, filterShortWords } from '../js-practice.js'

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
