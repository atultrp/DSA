// Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. Make sure the yramid has spaces on both the left *and* right hand sides.
// Example
// pyramid(3)
// '  #  '
// ' ### '
// '#####'
// pyramid(4)
// '   #   '
// '  ###  '
// ' ##### '
// '#######'



function pyramid(n) {
  let mid = Math.floor((2 * n - 1) / 2)
  for (let i = 0; i < n; i++) {
    let line = ""
    for (let j = 0; j <= (2 * n - 1); j++) {
      if (j >= mid - i && j <= mid + i) {
        line += "#"
      } else {
        line += " "
      }
    }
    console.log('--', line, '--')
  }
}

pyramid(6)