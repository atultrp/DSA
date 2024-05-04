// Given a string s1 and a string s2, write a function to check whether s2 is a rotation of s1. 

// Examples: 

// Input: S1 = ABCD, S2 = CDAB
// Output: Strings are rotations of each other

// Input: S1 = ABCD, S2 = ACBD
// Output: Strings are not rotations of each other


let s1 = 'abcad'
let s2 = 'cadab'

function checkString(s1, s2, ind, Size) {
    if (ind === Size) {
        return false
    }
    for (let i = 0; i < Size; i++) {
        if (s1[i] !== s2[(ind + i) % Size]) {
            return false
        }
    }
    return true
}

if (s1.length !== s2.length) {
    console.log('Strings are not rotations of each other')
} else {
    let indexes = []
    let firstLetter = s1[0]
    let Size = s1.length
    // Store the indexes of all occurrences of first character of s1 in s2
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] === firstLetter) {
            indexes.push(i)
        }
    }

    let isRotation = false
    // Check if all occurrences of first character are rotations of each other
    for (let i of indexes) {
        isRotation = checkString(s1, s2, i, Size)
        
        if (isRotation) {
            break
        }
    }

    if (isRotation) {
        console.log('Strings are rotations of each other')
    }
    else {
        console.log('Strings are not rotations of each other')
    }
}