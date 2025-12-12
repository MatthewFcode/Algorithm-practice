import { test, expect } from 'vitest'
import {
  typeOfUnion,
  filterObjectsWithoutPriceProperty,
} from '../typescript.js'
// types imports for the arrangment data
import type { Product, FilteredProduct } from '../typescript.js'

test('function that takes a union type of a string or a number and then returns the type of the input', () => {
  //Arrange
  const value = 'Matthew Francis John-Paul Foley' as string
  const expected = 'string' as string
  //Act
  const result: string = typeOfUnion(value)
  //Assert
  expect(result).toEqual(expected)
})

test('function takes an array of products and returns only those with a price', () => {
  //Arrange
  const products: Product[] = [
    { id: 1, name: 'Keyboard', price: 99, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 49, category: 'Electronics' },
    { id: 3, name: 'Monitor', price: 399, category: 'Electronics' },
    { id: 4, name: 'Water Bottle', category: 'Fitness' },
    { id: 5, name: 'Running Shoes', price: 159, category: 'Fitness' },
    { id: 6, name: 'Notebook' },
    { id: 7, name: 'Desk Lamp', price: 79 },
    { id: 8, name: 'Gaming Chair', price: 299 },
    { id: 9, name: 'Pencil' },
    { id: 10, name: 'Headphones', price: 199 },
    { id: 11, name: 'Backpack', category: 'Travel' },
    { id: 12, name: 'Smartwatch', price: 249 },
    { id: 13, name: 'Sunglasses', price: 120, category: 'Fashion' },
    { id: 14, name: 'Jacket', category: 'Fashion' },
    { id: 15, name: 'Mug', price: 15 },
    { id: 16, name: 'Blender', category: 'Kitchen' },
    { id: 17, name: 'Vacuum Cleaner', price: 180 },
    { id: 18, name: 'Knife Set', price: 89 },
    { id: 19, name: 'Toaster' },
    { id: 20, name: 'Laptop Stand', price: 45 },
  ]
  const expected: FilteredProduct[] = [
    { id: 1, name: 'Keyboard', price: 99, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 49, category: 'Electronics' },
    { id: 3, name: 'Monitor', price: 399, category: 'Electronics' },
    { id: 5, name: 'Running Shoes', price: 159, category: 'Fitness' },
    { id: 7, name: 'Desk Lamp', price: 79 },
    { id: 8, name: 'Gaming Chair', price: 299 },
    { id: 10, name: 'Headphones', price: 199 },
    { id: 12, name: 'Smartwatch', price: 249 },
    { id: 13, name: 'Sunglasses', price: 120, category: 'Fashion' },
    { id: 15, name: 'Mug', price: 15 },
    { id: 17, name: 'Vacuum Cleaner', price: 180 },
    { id: 18, name: 'Knife Set', price: 89 },
    { id: 20, name: 'Laptop Stand', price: 45 },
  ]

  //Act
  const result = filterObjectsWithoutPriceProperty(products)
  //Assert
  expect(result).toEqual(expected)
})
