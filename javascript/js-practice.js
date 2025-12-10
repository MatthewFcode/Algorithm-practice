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

// counting occurences of each word in an array and returning the result as an object || using .reduce()
// Live note I have no idea how to do it using .reduce()
export function countOccurences(arr) {
  // accum is the current backpack so accum[val] is the current value of the backpack and checks whether the current accum has that word
  return arr.reduce((accum, val) => {
    // val is the current value of the array we are looping over
    if (accum[val]) {
      // if the current iteration of val doesn't exist in the back pack
      accum[val] += 1
    } else {
      accum[val] = 1
    }
    return accum
  }, {}) // empty object is where the back pack starts
}

export function countLetters(string) {
  let stringArr = []
  for (let i = 0; i < string.length; i++) {
    stringArr.push(string[i])
  } // could be done with a simple arr.split but I thought this helps for the visuals of making a new array considering the reduce in literally unreadable in my opinion with the object assignment
  return stringArr.reduce((accum, val) => {
    if (accum[val]) {
      accum[val] += 1
    } else {
      accum[val] = 1
    }
    return accum
  }, {}) // backpack = 0 || LIVE NOTE: I don't think that you can call .reduce() directly on a string so I am going loop over the whole arr then push it to a new one to then call the function on
}
