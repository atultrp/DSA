// Write a function that returns the number of vowels used in a string. Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
// Examples
// vowels('Hi There!') ->> 3
// vowels('atul') ->> 2
// vowels('why?') ->> 0

// Solution 1
function vowels(str) {
  const vowels = 'aeiou'
  let count = 0
  for (let i of str?.toLowerCase()) {
    vowels.includes(i) && count++
  }
  return count
}

// Solution 2
function vowels2(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches?.length : 0
}

console.log(vowels2('hi there!'))