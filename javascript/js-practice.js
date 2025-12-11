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
  console.log(stringArr)
  return stringArr.reduce((accum, val) => {
    if (accum[val]) {
      // if the accum doesnt have the current value of the iteration of the array
      accum[val] += 1
    } else {
      accum[val] = 1
    }
    return accum
  }, {}) // backpack = 0 || LIVE NOTE: I don't think that you can call .reduce() directly on a string so I am going loop over the whole arr then push it to a new one to then call the function on
}

//LIVE NOTE: ideally I want to split the arrays to odd and even but I want to return as one object so I know this is wrong
export function countEvenAndOddNumbers(numArr) {
  let even = 0
  let odd = 0
  return numArr.reduce(
    (accum, val) => {
      if (val % 2 === 0) {
        accum.even += 1
      } else {
        accum.odd += 1
      }
      return accum
    },
    { even: 0, odd: 0 }
  )
}

export function countWordsByLength(arr) {
  // count how many times a word length repeats in an array
  // we are going to need the length property initialise that as the first key if it doesn't but if it does then plus the existing one by one
  return arr.reduce((accum, val) => {
    if (accum[val.length]) {
      // if the current length of the iteration isn't in the accum then add the current length as a property with an increment of 1
      accum[val.length] += 1
    } else {
      // if it already exists add 1 onto that value
      accum[val.length] = 1
    }
    return accum
  }, {})
}

// function that loops through an array of numbers and groups values by how many leave different remainders of a certain value | using .reduce()
export function groupNumbersByRemainder(arr) {
  return arr.reduce((accum, val) => {
    if (accum[val % 3]) {
      // check if the current iterations remainder already exists in the backpack
      accum[val % 3] += 1 // if it does add another increment to that value on the object
    } else {
      accum[val % 3] = 1 // if it doesn't already exist intialise a property using the remainder value and instialise the value to 0
    }
    return accum
  }, {})
}

// function that count how many booleans are in array and returns the result as an object using .reduce()
export function countBooleans(arr) {
  return arr.reduce(
    (accum, val) => {
      if (val === true) {
        accum.true += 1
      } else if (val === false) {
        accum.false += 1
      }
      return accum
    },
    { true: 0, false: 0 }
  )
}

// function that takes an array with 1 level of nested arrays using .flat()
export function flatten2DArray(arr) {
  return arr.flat(1)
}
