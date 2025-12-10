export function doubleNumbers(arr) {
  return arr.map((n) => n * 2)
}

// .filter() makes a new array with words that have a greater length than two or meet the condition not the other way around
export function filterShortWords(arr) {
  return arr.filter((w) => w.length > 2)
}

// summing all even numbers in array using .filter() and .reduce() || filter first and then reduce
export function sumEvenNumbers(arr) {
  const filteredArr = arr.filter((n) => n % 2 === 0)
  return filteredArr.reduce((accum, val) => accum + val, 0)
}

// find the first number over a paticular threshold in an array
export function findFirstOver(arr, threshold) {
  return arr.find((n) => n > threshold)
}
