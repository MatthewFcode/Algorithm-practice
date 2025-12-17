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

// function that takes a string || detect
export function parseBoldText(string) {
  const re = /(\*\*|__)(?!\s)([\s\S]*?)(\1)/g
  return string.replace(re, (match, marker, content) => {
    if (content.length === 0 || content[content.length - 1] === ' ') {
      return match
    }
    return `<b>${content}</b>`
  })
}

// function that takes two arrays as a parameter and returns the arrays merged into one array
export function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2]
}

// function that takes an array of numbers and return square roots
export function squareNumbers(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    const squaredNum = arr[i] * arr[i]
    newArr.push(squaredNum)
  }
  return newArr
}

// function that filters out all 0 values from an array
export function filterZeros(arr) {
  let noZeros = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      noZeros.push(arr[i])
    }
  }
  return noZeros
}

export const isAscendingOrder = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
} // LIVE NOTE: this isnt going to work beacause it isnt checking over the whole array being ascending bu just that the last iteration of it meets or doesn't meet that condition

// function that takes a number array and specified number and returns how many times that number occurs in that array
export const countOccurencesOfNum = (arr, number) => {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      total += 1
    }
  }
  return total
}

//function that double numbers in an array without using .push()
export const doubleNumbersManually = (numbers) => {
  let doubledArr = []
  for (let i = 0; i < numbers.length; i++) {
    doubledArr[i] = numbers[i] * 2
  }
  return doubledArr
}

// function that returns the index of a speciffied value without using .indexOf()
export const getIndexOf = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
}

export function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    // this outer loop is looping over the numbers right starting from 0 sunshine
    for (let j = i + 1; j < numbers.length; j++) {
      // inner loop is gonna be the current iterator of the outer loop plus on index
      if (numbers[i] + numbers[j] === target) {
        // compare if the current iterators together equal the target
        return [i, j] // return the indices of each values if they do
      }
    }
  }
}

// function that is no wear  near finished || need to devise a method for finding the highest num that is at a higher index than the lowest point

export function buyAndSell(numbers) {
  let highestNumber = numbers[0]
  let lowestNumber = 30000000
  let highestNumIterator = undefined
  let lowestNumIterator = undefined
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowestNumber) {
      lowestNumber = numbers[i]
      lowestNumIterator = i
    }
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > highestNumber) {
        highestNumIterator = j
        if (j > i) {
          highestNumber = numbers[j]
        }
      }
    }
  }
  console.log(`highest number ${highestNumber}, lowest number: ${lowestNumber}`)
  const result = highestNumber - lowestNumber
  return result
}

// function that checks if an array is sorted
// export function isSorted(arr) {
//   const sortedArr = [...arr.sort()]
//   let isTrue = false
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortedArr[i] && arr.length > 1) {
//       return false
//     } else if (arr.length > 1) {
//       isTrue = true
//     } else if (arr.length < 1) {
//       console.log('there is no array big gas')
//     }
//   }
//   return isTrue
// }

// chatgpt solution of the above problem || this function is way better than mine above lol and much simpler
export function isSorted(arr) {
  if (arr.length <= 1) return true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false
    } else {
    }
  }
  return true
}

// function that finds the first duplicate in an array || going to push all numbers to the array but check if they are already in there first if they are return that iteration
export function firstDuplicate(arr) {
  const seen = {}
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return arr[i]
    } else if (!seen[arr[i]]) {
      seen[arr[i]] = true
    }
  }
  return null
}

// function that takes an array of numbers and returns an object where the numbers are the properties  and the values are how often they appear in an array without using .reduce()

export function occurencesOfNumbersWithoutReduce(arr) {
  const numbers = {}
  for (let i = 0; i < arr.length; i++) {
    if (numbers[arr[i]]) {
      numbers[arr[i]] += 1
    } else if (!numbers[arr[i]]) {
      numbers[arr[i]] = 1
    }
  }
  return numbers
}

export function returnMostFrequentNumber(arr) {
  const numbers = {}
  let maxCount = 0
  let mostFrequent = null

  for (let i = 0; i < arr.length; i++) {
    if (numbers[arr[i]]) {
      numbers[arr[i]] += 1
    } else if (!numbers[arr[i]]) {
      numbers[arr[i]] = 1
    }

    if (numbers[arr[i]] > maxCount) {
      maxCount = numbers[arr[i]]
      mostFrequent = arr[i]
    }
  }
  return mostFrequent
}

export function findFirstNonReoccuringLetter(string) {
  const stringArr = string.toLowerCase().split('')
  let obj = {}

  for (let i = 0; i < stringArr.length; i++) {
    if (obj[stringArr[i]]) {
      obj[stringArr[i]] += 1
    } else {
      obj[stringArr[i]] = 1
    }
  }
  for (let i = 0; i < stringArr.length; i++) {
    if (obj[stringArr[i]] === 1) {
      return stringArr[i]
    }
  }
}

// function that takes an array of numbers  || write a function that checks the IDS are in non decreasing/ascending order and otherwise return false
function isAscendingIds(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return false
    }
  }
  return true
}

// function that finds the first duplicate in an array of numbers
function returnTheFirstDuplicate(numbers) {
  const seen = {}
  for (let i = 0; i < numbers.length; i++) {
    if (seen[numbers[i]]) {
      return numbers[i]
    } else {
      seen[numbers[i]] = true
    }
  }
  return null
}

// function that returns the missing number in a sequence || sort the array and loop through it || check if the current number + 1 === the next number in the array and if not return what that number would be

export function missingNumberInSequence(numbers) {
  const ascendingArr = numbers.sort((a, b) => a - b)
  for (let i = 0; i < ascendingArr.length; i++) {
    if (ascendingArr[i] + 1 !== ascendingArr[i + 1]) {
      return ascendingArr[i] + 1
    } else {
      console.log('youstupid')
    }
  }
}

//function that is counting pairs that sum to a target to the target || return how many pairs do this
export function countPairsThatAddToTargt(numbers, target) {
  // decalred var for total amount of pairs
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        total += 1
      }
    }
  }
  return total
}

//function that finds the first missing positive number || sort the array from smallest to biggest || loop over the array and check if the next iteration in the array equals the current one plus one and if it doesnt return what that value would be
export function firstMissingPositiveNumber(numbers) {
  const newNumbers = numbers.sort((a, b) => a - b)
  for (let i = 0; i < newNumbers.length; i++) {
    if (newNumbers[i] + 1 !== newNumbers[i + 1] && newNumbers[i] + 1 > 0) {
      return newNumbers[i] + 1
    }
  }
  return 'your mum a hoe'
}
