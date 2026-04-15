//primitive 

//7 types: string, Number, Boolean, null, undefined, symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//false bcz returned value of both symbol is diff 
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id===anotherId)

const bigNumber = 337513865127657463576n;

//Reference (Non primitive)
//Array, Objects, Function

const heros =["spiderman", "hulk", "doremon"]

//objects: we write in curly braces. datatypes can be anythings strings , number, booleans, func, array, obj 
let myObj = {
    name: "hitesh",
    age: 22
}

//how to write function; write function nd store it in a variable 
const myFunction = function(){
    console.log("Hello World")
}

//to find datatype of any value; use typeof 
console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)
console.log(typeof myObj)