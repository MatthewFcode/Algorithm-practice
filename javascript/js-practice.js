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

// find all numbers in an array the surpass a certain threshold
export function findAllNumbersOverBad(numbers, threshold) {
  const numbersOver = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > threshold) {
      numbersOver.push(numbers[i])
    } else {
      console.log('I miss my girlfriend')
    }
  }
  return numbersOver
}

//LIVE NOTE: after writing the above the function I have realised that I could possibly provide the solution using a simple .filter()
//LIVE NOTE: it does pass
export function findAllNumbersOver(arr, number) {
  return arr.filter((n) => n > number)
}

// sorting an array of objects in ascending order by the age property
export function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age)
}
