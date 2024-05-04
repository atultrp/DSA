// Write a function that accepts an integer N and returns a NxN spiral matrix.
// Examples

// matrix(2)
// [ [ 1 , 2 ],
//  [ 4, 3 ] ]

// matrix(3)
// [ [ 1, 2, 3 ], 
//  [ 8, 9, 4 ], 
//  [ 7, 6, 5 ] ]

// matrix(4)
// [ [ 1, 2, 3, 4 ],
//   [ 12, 13, 14, 5 ],
//   [ 11, 16, 15, 6 ],
//   [ 10, 9, 8, 7 ] ]

function matrix(n) {
  let matrix = []
  let counter = 1, startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1
  for (let i = 0; i < n; i++) {
    matrix.push([])
  }

  while (startRow <= endRow) {
    // Top
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter
      counter++
    }

    startRow++

    // Right
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter
      counter++
    }

    endCol--

    // Bottom
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter
      counter++
    }

    endRow--

    // Left
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter
      counter++
    }

    startCol++
  }

  return matrix
}

console.log(matrix(5))