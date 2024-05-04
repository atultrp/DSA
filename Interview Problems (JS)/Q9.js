// Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return capitalized string.
// Examples
// capitalize('this is atul tripathi') ->> 'This Is Atul Tripathi'


function capitalize(str) {
  let res = []
  for (let i of str.split(" ")) {
    res.push(i[0]?.toUpperCase() + i?.slice(1)?.toLowerCase())
  }
  return res?.join(" ")
}

console.log(capitalize('this Is atuL tripathi'))