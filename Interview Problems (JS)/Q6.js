// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings tha form the same word if it is reversed.

// Examples
// palindrome('kayak') === true
// palindrome('atul') === false

function reverse(str) {
  return str.split('').reverse().join('')
}

function palindrome(str) {
  return str == reverse(str)
}

function palindrome2(str) {
  let start = 0
  let last = str.length - 1
  while (start < last) {
    if (str[start] != str[last]) {
      return false
    }
    else {
      start++
      last--
    }
  }
  return true
}

function palindrome3(str) {
  return str.split('').every((ele, i) => {
    return ele == str[str.length - i - 1]
  })
}

console.log(palindrome3('maam'))