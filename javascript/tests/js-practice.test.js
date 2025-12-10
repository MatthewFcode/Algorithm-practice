import { expect, test } from 'vitest'
import {
  doubleNumbers,
  filterShortWords,
  sumEvenNumbers,
  findFirstOver,
  findAllNumbersOver,
  sortByAge,
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

test('Find the first number in an array that passes the threshold (2nd parameter)', () => {
  //Arrange
  const numbers = [3, 5, 77, 300, 16, 38, 67, 54.67, 412.15, 450, 223]
  const threshold = 412.2
  const expected = 450
  //Act
  const result = findFirstOver(numbers, threshold)
  //Assert
  expect(result).toEqual(expected)
})

test('Find all numbers in array that surpass the threshold (parameter)', () => {
  //Arrange
  const numbers = [2, 100, 177.9, 45, 14, 89.11, 87, 66, 112.5]
  const threshold = 89.1
  const expected = [100, 177.9, 89.11, 112.5]
  //Act
  const result = findAllNumbersOver(numbers, threshold)
  //Assert
  expect(result).toEqual(expected)
})

test('Sort an array of objects in ascending order of the objects age property', () => {
  //Arrange
  const objects = [
    { name: 'A', age: 19 },
    { name: 'B', age: 14 },
    { name: 'C', age: 22 },
  ]
  const expected = [
    { name: 'B', age: 14 },
    { name: 'A', age: 19 },
    { name: 'C', age: 22 },
  ]
  //Act
  const result = sortByAge(objects)
  //Assert
  expect(result).toEqual(expected)
})
