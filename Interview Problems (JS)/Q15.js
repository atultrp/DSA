// Write a function that accepts an integer N and returns a NxN spiral matrix.
// Examples

// matrix(2)
// [ [ 1 , 2 ],
//  [ 4, 3 ] ]

// matrix(3)
// [ [ 1, 2, 3 ], 
// [ 6, 5, 4 ], 
// [ 7, 8, 9 ] ]

// matrix(4)
// [
//   [ 1, 2, 3, 4 ],
//   [ 8, 7, 6, 5 ],
//   [ 9, 10, 11, 12 ],
//   [ 16, 15, 14, 13 ]
// ]

function matrix(n) {
  let matrix = []
  let num = 1
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      if (i % 2 == 0) {
        row.push(num)
      }
      else {
        row.unshift(num)
      }
      num += 1
    }
    matrix.push(row)
  }
  return matrix
}

console.log(matrix(4))