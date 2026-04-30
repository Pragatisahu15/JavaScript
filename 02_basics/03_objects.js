//2 way of declaring object: 1.literal 2.constructor
//singleton concept: if we declare using constructor then singleton obj is made. 
//object literals: way of declaring obj (when we declare using literals then singleton is not made)
//Object.create: way of declaring object using constructor method

const mySym = Symbol("key1")

//object literals
const JsUser = { //{} this is obj nd there will keys:value pair inside object
    name: "Pragati", //by deafult system process key as string, name -> "name", value can be string, number, boolean, function, object, array etc 
    "full name": "Pragati Sahu",
    [mySym]: "mykey1",
    age: 24,
    location: "Jaipur",
    email: "pragati@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

//HOW TO ACCESS OBJECTS VALUES: we should know both way . & [] coz if we write key as string then in this case we can't access it using .(dot)
//mostly we access values using dot but there are cases where we've to access using []
//console.log(JsUser.email) //correct but not recommended
//preferred way
//console.log(JsUser[email])//ReferenceError: email is not defined (b'cz behind the scene email is string)
//console.log(JsUser["email"])
//console.log(JsUser["full name"]) //JsUser.full name or JsUser."full name" not allowed

//Interview important: how we'll use symbol as key: Interview Q: take a symbol(define it) add it to the object key & print it.
//when mySym: "mykey1" console.log(JsUser.mySym)//mykey1 console.log(typeof JsUser.mySym) //string
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

//HOW TO CHANGE OBJECT VALUEs
JsUser.email = "neha@gmail.com" //we can overwrite values using =
//console.log(JsUser["email"])

//to lock values so that no one can change it then we can freeze object
// Object.freeze(JsUser)

JsUser.email="sahu@gmail.com" //this value didn't chnged coz we freezed object
// console.log(JsUser)

//how to add function in the object
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){ //we'll refer name that is in obj(to reference name inside the object we'll use `` )
    console.log(`Hello JS user, ${this.name}`); //to refer same obj we use this, & with dot we'll get all properties of that object
}

//console.log(JsUser.greeting) //[Function (anonymous)]: function not executed but function referrens came 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())
//getting undefine with the above 2 coz one more execution is happening automatically

