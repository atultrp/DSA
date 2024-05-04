// Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.

// Example:

// Input: S = “geeksforgeeks”
// Output:

// e, count = 4
// g, count = 2
// k, count = 2
// s, count = 2

// Explanation: e,g,k,and s are characters which are occured in string in more than one times.


let str = 'geeksforgeeks'
let count = new Map()

for(i of str) {
    if(count.has(i)){
        count.set(i, count.get(i)+1)
    }
    else {
        count.set(i, 1)
    }
}

for (let [k,v] of count) {
    if(v>1) console.log(k, ' count => ', v)
}
