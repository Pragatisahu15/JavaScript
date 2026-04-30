
const tinderUser = new Object() //declaring object using constructor //SINGLETON OBJECT(remember this for interview)
//const tinderUser={} //this is also obj declaration same as above but not using constructor //NON-SINGLETON OBJECT(remember this for interview)

// console.log(tinderUser) //we'll get {} empty obj

tinderUser.id = "123abc" //assigned unique id coz user is registered in the db
tinderUser.name = "Ron"
tinderUser.isLoggedIn = false 

// console.log(tinderUser) //o/p:- { id: '123abc', name: 'Ron', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: { //nested object (obj inside obj)
        userfullname: {
           firstname: "Pragati",
           lastname: "sahu",

        }
    }
}

// Accessing value using dot notation
// console.log(regularUser.fullname) //{ userfullname: { firstname: 'Pragati', lastname: 'sahu' } }
// console.log(regularUser.fullname.userfullname) //{ firstname: 'Pragati', lastname: 'sahu' }
// console.log(regularUser.fullname.userfullname.firstname) //Pragati

//How to merge/combine objects? (like merge arrays)
const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj4={5: "a", 6: "b"}

// const obj3= {obj1, obj2}
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } //same array issue

// const obj3 = Object.assign(obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// recommended over above 
// const obj3 = Object.assign({}, obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } //[object assign mdn documention] //same output but this {} optional parameter recommended to use this means all values will get combine nd we'll get guaranteed answer
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} act as target nd obj1, obj2, obj4 act as source //if we''ll not use {} then all the values(source) will go to obj1 but after using {} all values is going to target i.e {} //since we r returing new obj & it's going to the memory then it's better to use {}(empty obj) assume it as target 

// more recommended over above : 90% of time we'll use this
const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(obj3)

// syntax when values come from db: array of objects
const users = [
    {
        id: 1, 
        email:"p@gmail.com"
    },
       {
        id: 1, 
        email:"p@gmail.com"
    },
       {
        id: 1, 
        email:"p@gmail.com"
    },
]

//loop through or print any value

//accessing value
users[1].email

console.log(tinderUser) //{ id: '123abc', name: 'Ron', isLoggedIn: false }
//some useful methods
console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ] // dataType of output is Array (now we can use loop on it & used in many places) // Important
console.log(Object.values(tinderUser)) //[ '123abc', 'Ron', false ]
console.log(Object.entries(tinderUser)) //Returns an array of key/values inside an array // [ [ 'id', '123abc' ], [ 'name', 'Ron' ], [ 'isLoggedIn', false ] ] //less used

//to avoid crash we use ? / this method
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true
console.log(tinderUser.hasOwnProperty('isLogged')) //false 

//go to console & see methods 
//const obj1={1: "a", 2: "b"} 
//obj 
//then see important methods inside prototype there are many methods
