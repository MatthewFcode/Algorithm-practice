import { expect, test } from 'vitest'
import { longestContUniqueSubString } from './jan-prob.js'

test('function that returns the longest unique contigious substring', () => {
  //Arrange
  const string = 'abcabcbb'
  const expected = 3

  //Act
  const result = longestContUniqueSubString(string)

  //Assert
  expect(result).toEqual(expected)
})
