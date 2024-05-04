// Given a string, return a new string with the reversed order of characters
// Examples
// reverse('h1') === '1h'
// reverse('hello') === 'olleh'
// reverse('hello world') === 'dlrow olleh'

function reverse(str) {
    return str.split('').reverse().join('')
}

function reverse2(str) {
    let reversed = ''
    for (let i of str) {
        reversed = i + reversed
    }
    return reversed
}

function reverse3(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}

function reverse4(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}