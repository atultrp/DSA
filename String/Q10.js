// Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or pnctuation. Consider capital letters to be the same as lowercase.
// Examples
// anagrams('coding money', 'money coding') ->> True
// anagrams('Hi there', 'Bye there') ->> False
// anagrams('RAIL! SAFETY!', 'fairy tales') ->> True

// Solution 1
function charMap(str) {
  const charmap1 = {}
  str = str.toLowerCase().replace(/[\W]/g, '')

  for (let i of str) {
    charmap1[i] = ++charmap1[i] || 1
  }
  return charmap1
}

function anagrams(str1, str2) {
  const charmap1 = charMap(str1)
  const charmap2 = charMap(str2)

  if (Object.keys(charmap1).length !== Object.keys(charmap2).length) return false

  for (let i in charmap1) {
    if (charmap1[i] !== charmap2[i]) return false
  }

  return true
}

// Solution 2
function charMapStr(str) {
  str = str.toLowerCase().replace(/[\W]/g, '')?.split("")?.sort()?.join("")
  return str
}

function anagrams2(str1, str2) {
  if (charMapStr(str1) === charMapStr(str2)) return true
  return false
}


console.log(anagrams2('RAIL! SAFETY!', 'fairy tales'))

