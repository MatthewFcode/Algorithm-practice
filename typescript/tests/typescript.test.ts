import { test, expect } from 'vitest'
import { typeOfUnion } from '../typescript.js'

test('function that takes a union type of a string or a number and then returns the type of the input', () => {
  //Arrange
  const value = 'Matthew Francis John-Paul Foley' as string
  const expected = 'string' as string
  //Act
  const result: string = typeOfUnion(value)
  //Assert
  expect(result).toEqual(expected)
})
