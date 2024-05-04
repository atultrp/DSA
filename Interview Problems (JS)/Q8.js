// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
// Examples
// chunk([1,2,3,4],2) ->> [[1,2],[3,4]]
// chunk([1,2,3,4,5],2) ->> [[1,2],[3,4],[5]]

function chunk(arr, size) {
  let res = []
  for (let i = 0; i < arr.length; i = i + size) {
    res.push(arr.slice(i, i + size))
  }
  return res
}

console.log(chunk([1, 2, 3, 4, 4, 5, 3, 4, 1], 2))