// Java Program to Check if a string is a valid shuffle of two distinct strings

// Examples:
// 1XY2 is a valid shuffle of XY and 12
// Y1X2 is a valid shuffle of XY and 12     
// Y21XX is not a valid shuffle of XY and 12

let s1 = 'XY'
let s2 = '12'
let s3 = '1XY2'

function checkShuffle(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return 'Invalid Shuffle'
  }
  else {
    let x = (s1+s2).split('').sort().join('')
    let y = s3.split('').sort().join('')
    if (x === y) {
      return 'Valid Shuffle'
    }
    return 'Invalid Shuffle'
  }
}

console.log(checkShuffle(s1, s2, s3))