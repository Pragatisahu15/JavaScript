//Dates

let myDate = new Date()
// console.log(myDate)

//converting date into string

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

//check typeof imp for interview
console.log(typeof myDate)

//if want to declare specific date 
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString())

//more ways to declare specific date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()) 

//declare date in a specific format yy-mm-dd
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

//Time Stamps 
let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())

// console.log(Date.now())

//to get value in sec (milisec - sec)
// console.log(Date.now()/1000)

//to avoid decimal part 
// console.log(Math.floor(Date.now()/1000))

//  MORE METHODS 
let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// `${newDate.getDay()} and the time` string interpoliation 

// to customize deafault format
newDate.toLocaleString('default', {
    weekday: "long"
})

//lets print & see
console.log(
    newDate.toLocaleString('default', {
    weekday: "long"
})
)