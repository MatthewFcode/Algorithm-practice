// reverse and array by looping through the array backwards pushing each value to a new array
export function reverseArr(arr) {
  let newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}
