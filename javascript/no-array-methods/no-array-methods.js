// reverse and array by looping through the array backwards pushing each value to a new array
export function reverseArr(arr) {
  let newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

//function that counts total amount of even numbers in an array
export function sumEvenNumbers(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      total += 1
    }
  }
  return total
}
