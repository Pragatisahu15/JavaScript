//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shakitiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])


//Array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8) //inserted 8 at the start of array
// myArr.shift() //removed unshifted value : removed one value from the start

// console.log(myArr)

//Questioner array methods  
//console.log(myArr.includes(9)) //returns in boolean 
// console.log(myArr.indexOf(9)) //searching value that doesn't exist always get -1 in this case
// console.log(myArr.indexOf(3)) 


//.join method: Adds all the elements of an array into a string, seperated by separater
// const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr.join())

//slice (array method ): returns section of array
// console.log("A: ", myArr)

// const myn1 = myArr.slice(1,3)
// console.log(myn1)

// console.log(myArr.slice(1,3))

// console.log("B: ", myArr)



// splice (array method ):
// const myn2 = myArr.splice(1,3)
console.log(myArr.splice(1,3))
console.log("Original Array: ", myArr)
// console.log(myn2)