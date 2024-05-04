// Given a string, return the character that is most commonly used in the string.
// Examples
// maxChar('abcccccd') === 'c'
// maxChar('apple 1232111') === '1'

function maxChar(str) {
  let obj1 = {}
  let maxOcc = 0
  let maxChar = ''
  for (i of str) {
    obj1[i] = obj1[i] + 1 || 1
  }
  for (let i in obj1) {
    if (obj1[i] > maxOcc) {
      maxOcc = obj1[i]
      maxChar = i
    }
  }
  return maxChar
}

console.log(maxChar('aabbbssdbsd'))