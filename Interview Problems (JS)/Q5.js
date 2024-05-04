// Reverse digits
// Example
// Input: 123
// Output: 321

function reverseDigits(num) {
    let rev = num?.toString()?.split('').reverse().join('')
    return parseInt(rev) * Math.sign(num)
}

console.log(reverseDigits(-12))