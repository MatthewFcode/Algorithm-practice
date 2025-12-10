import { desribe, it, expect, test } from 'vitest'
import { doubleNumbers } from '../js-practice.js'

test('uses .map() effentially to double every number in an array', () => {
  // Arrange
  const arr = [20, 40, 21, 32.5, 66.6]
  const expected = [40, 80, 42, 65, 133.2]

  //Act
  const result = doubleNumbers(arr)

  expect(result).toEqual(expected)
})
