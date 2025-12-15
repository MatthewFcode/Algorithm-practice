import { test, expect } from 'vitest'
import {
  reverseArr,
  sumEvenNumbers,
  parseBoldText,
  mergeArrays,
  squareNumbers,
  filterZeros,
  isAscendingOrder,
  countOccurencesOfNum,
  doubleNumbersManually,
  getIndexOf,
  twoSum,
  buyAndSell,
  isSorted,
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

test('filter all values of 0 out of an array manually ', () => {
  //Arrange
  const numbers = [0, 55, 550, 223, 0, 3, 0, 2323, 0, 0, 3232, 0, 232, 44, 0]
  const expected = [55, 550, 223, 3, 2323, 3232, 232, 44]
  //Act
  const result = filterZeros(numbers)
  //Arrange
  expect(result).toEqual(expected)
})

test('check of the array is sorted in ascending order and return true or false', () => {
  //Arrange
  const numbers = [1, 44, 6232, 9032, 10302, 15455]
  const numbers2 = [33, 1, 532, 5, 0, 345, 123312414141343]
  const expected = true
  const expected2 = false
  //Act
  const result = isAscendingOrder(numbers)
  const result2 = isAscendingOrder(numbers2)
  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('count how many times a specified value appears in an array without using arr methods', () => {
  //Arrange
  const numbers = [1, 44, 34, 2, 3, 6, 7, 1, 1, 1, 1, 5, 5, 5, 33]
  const number = 1
  const expected = 5
  //Act
  const result = countOccurencesOfNum(numbers, number)
  //Assert
  expect(result).toEqual(expected)
})

test('double every number in array manually and without using .push()', () => {
  //Arrange
  const numbers = [44, 55, 3232, 232, 2, 23, 2323, 2323, 232]
  const expected = [88, 110, 6464, 464, 4, 46, 4646, 4646, 464]
  //Act
  const result = doubleNumbersManually(numbers)
  //Assert
  expect(result).toEqual(expected)
})

test('function takes an array and specified value and returns the first index of that value', () => {
  //Arrange
  const numbers = [232, 232, 23, 23, 42, 23423, 2, 32342, 34, 234, 342234234]
  const words = ['hello', 'what', 'banasa', 4, 'd', 2342643]
  const number = 34
  const word = 'banasa'
  const expectedNumbers = 8
  const expectedWords = 2
  //Act
  const result = getIndexOf(numbers, number)
  const result2 = getIndexOf(words, word)
  //Assert
  expect(result).toEqual(expectedNumbers)
  expect(result2).toEqual(expectedWords)
})

test('function that returns the indicies of numbers in an array that add up to the target specified', () => {
  //Arrange
  const numbers = [3, 4, 10, 34, 18]
  const target = 28
  const expected = [2, 4]
  //Act
  const result = twoSum(numbers, target)
  //Assert
  expect(result).toEqual(expected)
})

test('function that takes an array of numbers and finds the lowest point to by at and then the highest point left after to sell at then calculates the profit margin', () => {
  //Arrange
  const numbers = [7, 1, 3, 2, 6, 5]
  const expected = 5
  //Act
  const result = buyAndSell(numbers)
  //Assert
  expect(result).toEqual(expected)
})
