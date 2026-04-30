// Object de-structure and JSON API Intro

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "yash"
}

//course.courseInstructor //to access value: if you want clean code then we can't use this if we want to print the same value multiple times in that case another syntax is more recommendable

//  const {courseInstructor} = course //after = we write from which object we want to extract value & {} in this we write which value we want to extract 
// console.log(courseInstructor) //now no need of dot notation

const {courseInstructor: instructor} = course // if u want to shorten the name then we can do like this // this means de-structuring object
console.log(instructor)


//EX in react we do de-structuring
// const navbar =({company}) => { //({company}) here, this is de-structuring happening
// }
// navbar(company="pragati")

//API : we get data from api in json format earlier it used to be in XML structure
//json look like object but it is not object: key value both are in string in json (number nd boolean values will not be in "" bcz there datatype is diff)
// {
//     "name": "pragati",
//     "coursename": "js in hindi",
//     "price": "free"
//      "id": 123
//      "isLoggedIn": false 
// }
// learn how to use fetch method in js/api : we'll call url using fetch method & we'll get data in response
//sometimes, we get api data in array format like this 
// [
//     {}, 
//     {}, 
//     {}
// ]
//we've explored randon user api and json formatter
