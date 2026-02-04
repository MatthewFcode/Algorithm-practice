export const longestContUniqueSubString = (string: string): number | null => {
  if (string.length === 0) return null

  // nested loop through the string
  // init a object at the start of every index for seen and if it isnt make that current iteration seen
  // check if seen -> break
  // if not then init a var to the length using the iterators
  // keep a max var for the longest one and then return that
  let maxLength: number = 0
  let currentLength: number = 0

  for (let i = 0; i < string.length; i++) {
    let hash: Record<string, boolean> = {}
    for (let j = i; j < string.length; j++) {
      if (hash[string[j] as string]) {
        break
      } else {
        hash[string[j] as string] = true
        maxLength = Math.max(maxLength, j - i + 1)
      }
    }
  }

  return maxLength
}

export const longestIncreasingContNumSubArray = (
  numbers: number[]
): number | null => {
  if (numbers.length === 0) return null

  // loop through the numbers
  // check if the next variable is more than the current
  // keep track of current highest with math.Max  in the loop and then return that
  let longest: number = 0
  let current: number = 0

  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] as number) < numbers[i + 1]!) {
      current += 1
    } else {
      if (current > longest) {
        longest = current
      }
      current = 0
    }
  }

  if (current > longest) {
    longest = current
  }

  return longest + 1
}
