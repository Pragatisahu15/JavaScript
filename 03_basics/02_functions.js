//how we pass more way of parameters

//shopping cart
//we dont know how many arguments we will get in shoppping cart situation people will add add add .. we dont know how many items will people add .. we've to caluclate price of all items

// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(2)) //2
// console.log(calculateCartPrice(200, 400, 500)) //200 //only got 1st item to solve this problem we've rest operator

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ... both are called rest operator nd spread operator but it depends on its use case when we will call it rest nd when spread
//rest operator means pack all the value that is being passed 

// function calculateCartPrice(...num1) {  // Rest operator : understand how multiple value will be passsed in a function 
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500)) //[ 200, 400, 500 ]

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function calculateCartPrice(val1, val2, ...num1) {  //Interview 
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000)) [ 500, 2000 ] // [ 500, 2000 ] //200 goes in val1, 400 goes in val2 & rest goes in ...num1 array

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//how to pass & use object into function

const user = {
    username: "Pragati",
    price: 199
}

function handleObject(anyobject){ //we haven't writen user obj in parameter we given diff name so that we can pass any obj not particular object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
} 

handleObject(user) //we have to pass here obj compulsory 
//OUTPUT: Username is Pragati and price is 199 

// we can also pass object directly in function call
handleObject({
    username: "Yash",
    price: 399
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// we can also pass array in function call like object we did above
const myNewArray = [200, 400, 100, 600]

// define function that accept array nd return its second value 
function returnSecondValue(getArray){
      return getArray[1]
}

console.log(returnSecondValue(myNewArray)) //400

// we can also pass array directly in function call
console.log(returnSecondValue([2,4,6,8]))

//just for my understanding other way to return values

function calCartPrice(val1, val2, ...num1) {
  return `First: ${val1}, Second: ${val2}, Rest: ${num1}`;
}
console.log(calCartPrice(100, 200, 300, 400)) //First: 100, Second: 200, Rest: 300,400


// SPREAD v/s REST OPERATOR
//spread operator 
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3

// Rest
function fn(...nums) {
  return nums;
}
console.log(fn(1,2,3))