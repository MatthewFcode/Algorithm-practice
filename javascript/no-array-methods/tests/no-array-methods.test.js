import { test, expect } from 'vitest'
import {
  reverseArr,
  sumEvenNumbers,
  parseBoldText,
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
