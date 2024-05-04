// Reverse digits
// Example
// Input: 123
// Output: 321

// Constraints:
// -2^31 <= x <= 2^31 - 1

function reverseDigits(num) {
    let rev = num?.toString()?.split('').reverse().join('')
    let res =  parseInt(rev) * Math.sign(num)
    if (res < Math.pow(-2,31) || res > Math.pow(2,31)) return 0
    return res
}

console.log(reverseDigits(1534236469))