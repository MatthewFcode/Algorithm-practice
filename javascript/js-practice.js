export function doubleNumbers(arr) {
  return arr.map((n) => n * 2)
}

// .filter() makes a new array with words that have a greater length than two or meet the condition not the other way around
export function filterShortWords(arr) {
  return arr.filter((w) => w.length > 2)
}
