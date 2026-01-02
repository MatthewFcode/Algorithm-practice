// function that sorts and then finds the longest consecutive sequence of numbers in an array || wrong solution but the only one my brain can think off right now || it breaks because it adds some numbers that arent in the consecutive given an array with  multiple runs of consecutive numbers
// 1. sort the array in ascending order
// 2. loop through the array and check if the number is one above the current if it is push it to an empty array
// 3. return the length of the new array

export const getLongestConsecutiveSequence = (numbers) => {
  if (numbers.length === 0) return 0

  let duplicateFree = []

  for (let i = 0; i < numbers.length; i++) {
    if (!duplicateFree.includes(numbers[i])) {
      duplicateFree.push(numbers[i])
    }
  }

  const sortedArr = duplicateFree.sort((a, b) => a - b)

  const consecutiveNumbers = []
  for (let i = 0; i < sortedArr.length; i++) {
    if (
      sortedArr[i] + 1 === sortedArr[i + 1] ||
      sortedArr[i] - 1 === sortedArr[i - 1]
    ) {
      consecutiveNumbers.push(sortedArr[i])
    } else {
      console.log('no luck family')
    }
  }

  return consecutiveNumbers.length
}

// function that removes all overlapping intervals (interval = first number in sub array < last in the previous sub set)
// 1. loop for the entire array of arrays
// 2. nested loop for the array in the arrays
// 3. check if the current number is greater than or equal to the last one in the last sub array and if it isnt then increment the counter by one
// 4. return the incrementer

export const removeOverlappingIntervals = (intervals) => {
  if (!intervals.length) return 0

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0])

  let intervalsRemoved = 0
  let prev = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i]

    if (curr[0] < prev[1]) {
      // Overlap → remove the interval that ends later
      intervalsRemoved++
      if (curr[1] < prev[1]) {
        prev = curr
      }
    } else {
      // No overlap → keep current interval
      prev = curr
    }
  }

  return intervalsRemoved
}

// disclaimer: neither of these functions are one hundred percent right yet but they tackle the tests
