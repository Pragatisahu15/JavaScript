const repoName = "Pragati"
const repoCount = 50

//console.log(repoName+repoCount+ " Value") 

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pragati')

console.log(gameName[0]) //to access key value pair
console.log(gameName.__proto__) // to access prototype

console.log(gameName.length); //to access string length

console.log(gameName.toUpperCase()) 

console.log(gameName.charAt(2)); //to find character at index
console.log(gameName.indexOf('t')); //to find position/index of character

const newString = gameName.substring(0,4) //to divide a string into substring
console.log(newString)

//one more method similar to substring is slice , we can also give -ve values in this
// const anotherString = gameName.slice(0,4)
const anotherString = gameName.slice(-8,4)
console.log(anotherString)

//trim method: trim removes starting nd ending space 
const newStringOne = "    yash   "
console.log(newStringOne)
console.log(newStringOne.trim())

//replace method
const url = "https://pragati.com/pragati%20sahu"

console.log(url.replace('%20','-'))

console.log(url.includes('pragati')) //to find any string exists or not

//split method: we can split any string on the basis of -, space anything..we'll get array
const name = new String('pragati-singh-rajput')
console.log(name.split('-')) //split(separator) or split(separator, limit)