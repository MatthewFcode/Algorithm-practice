import { test, expect } from 'vitest'
import {
  reverseArr,
  sumEvenNumbers,
  parseBoldText,
  mergeArrays,
  squareNumbers,
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
