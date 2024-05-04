// Container With Most Water

/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
*/

// Solution 1
function maxArea(height) {
  let n = height.length
  let maxArea = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let tempArea = Math.min(height[i], height[j]) * (j - i)
      maxArea = Math.max(tempArea, maxArea)
    }
  }
  return maxArea
}

// Solution 2
function maxArea2(height) {
  let maxArea = 0, l = 0, r = height.length - 1

  while (l < r) {
    let tempArea = Math.min(height[l], height[r]) * (r - l)
    maxArea = Math.max(tempArea, maxArea)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return maxArea
}

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea2([1, 1]))