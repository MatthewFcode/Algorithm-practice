import { expect, test } from 'vitest'
import {
  doubleNumbers,
  filterShortWords,
  sumEvenNumbers,
  findFirstOver,
  findAllNumbersOver,
  sortByAge,
  countOccurences,
  countLetters,
  countEvenAndOddNumbers,
  countWordsByLength,
  groupNumbersByRemainder,
  countBooleans,
  flatten2DArray,
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

test('Counting how many times each word in an array occurs using .reduce() || returning the result as an object', () => {
  //Arrange
  const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
  const expected = { apple: 3, banana: 2, orange: 1 }
  //Act
  const result = countOccurences(words)
  //Assert
  expect(result).toEqual(expected)
})
test('counting letters in a string using .reduce() and returning an object', () => {
  //Arrange
  const word = 'banana'
  const word2 =
    'dfngaerngkenrglnqerlgknqelrnglqenrglqerlgkneqlrnglqerlnebln3rlgnlernglnrdgnqergnqkerng;kqejnrg;lnqerognqerlgnqebg;k135g455erjqgnknerlngl'
  const expected = { b: 1, a: 3, n: 2 }
  const expected2 = {
    d: 2,
    f: 1,
    n: 24,
    g: 20,
    a: 1,
    e: 18,
    r: 18,
    k: 7,
    l: 17,
    q: 13,
    b: 2,
    3: 2,
    ';': 3,
    j: 2,
    o: 1,
    1: 1,
    5: 3,
    4: 1,
  }

  //Act
  const result = countLetters(word)
  const result2 = countLetters(word2)
  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('counting even and odd numbers in an array using .reduce() || returing a {}', () => {
  //Arrange
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const numbers2 = [44, 55, 37923, 600, 8400, 4, 8, 4440, 8024]
  const expected = { even: 4, odd: 5 }
  const expected2 = { even: 7, odd: 2 }
  //Act
  const result = countEvenAndOddNumbers(numbers)
  const result2 = countEvenAndOddNumbers(numbers2)
  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('Counting the occurences of words of a paticular length using .reduce() and returning an object', () => {
  //Arrange
  const words = ['hi', 'hello', 'hey', 'yo', 'greetings']
  const expected = { 2: 2, 5: 1, 3: 1, 9: 1 }
  //Act
  const result = countWordsByLength(words)
  //Assert
  expect(expected).toEqual(result)
})

test('group numbers by there remainder using .reduce() and returning an object', () => {
  //Arrange
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const expected = { 0: 3, 1: 3, 2: 3 }
  //Act
  const result = groupNumbersByRemainder(numbers)
  //Assert
  expect(result).toEqual(expected)
})

test('count how many true or false values or in an array using .reduce() and assign those values to an object', () => {
  //Arrange
  const values = [true, false, true, true, false]
  const values2 = [
    true,
    'That irritates me',
    false,
    67,
    true,
    69,
    true,
    false,
    true,
    true,
    undefined,
  ]
  const expected = { true: 3, false: 2 }
  const expected2 = { true: 5, false: 2 }
  //Act
  const result = countBooleans(values)
  const result2 = countBooleans(values2)
  //Assert
  expect(result).toEqual(expected)
  expect(result2).toEqual(expected2)
})

test('flatten a 2D array using .flat()', () => {
  //Arrange
  const arr = [[1, 2], [3, 4], [5]]
  const expected = [1, 2, 3, 4, 5]
  //Assert
  const result = flatten2DArray(arr)
  //Assert
  expect(result).toEqual(expected)
})
