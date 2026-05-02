// function simpli means packaged no.of line code & we can use copy of package anywhere

function sayMyName(){ //this is function defination: function(func keyword) & sayMyName(Function name) & (){} syntax
   console.log("O")
   console.log("M")
   console.log("I")
} 

//sayMyName() //sayMyName(function refernce) , sayMyName()(execution) //basic

//the above is basic: we'll write useful function to accommplish any tasks

function addTwoNumbers(number1, number2) {
    console.log(number1+number2)
}

// addTwoNumbers() //NaN: bcz we've not passed any arguments

// addTwoNumbers(3, 4) // 7 
// addTwoNumbers(3, "4") // 34 coz Js thought if 4 is string then 3 is also a string
// addTwoNumbers(3, "a") // 3a //we should check datatypes of n1 & n2 before adding them
// addTwoNumbers(3, null) // 3 //we should check datatypes of n1 & n2 before adding them

// parameter is that we pass while function defination and argument is that we pass while func calling 

// we can also store function calling in a variable in js
// const result = addTwoNumbers(3,5) //output: 8
// console.log("Result: ", result) //output: undefined (y? console value inside func doesn't mean it is returning to that func, returning is diff concept)

//writing function in a different way without writing console log inside the function 
function addTwoNum(number1, number2) {
     let result = number1+number2
     console.log("Pragati") // we can log before return keyword. after return keyword we can't log
     return result
     console.log("Pragati") //can't log/print anything after return keyword 
}
// const res = addTwoNum(3,5) //this res nd result inside function are two diff thing. we'll learn this in scope  
// console.log("Result: ", res)

//we have one more easy version of the above function 

function addTwoNumb(number1, number2){
    return number1+ number2
}
const resul = addTwoNumb(3,5)
// console.log("Result: ", resul)

// when we'll return then we can store it any variable or else we'll get undefined

function loginUserMessage(username) {
// function loginUserMessage(username = "sam") { // we can give default value like this //in this way we'll never enter if block coz username value will never be undefined //if nothing is passed then default value will come or if we'll pass any value then we'll get that passed value(in this case default value will get overwrite)
   // if(username === undefined){ //parameter // if(!username), undefine is false value !undefine is true. we see many place this if(!username) which same as username==undefine(in true case we'll enter the block)
      if(!username){
        console.log("Please enter a username")
        return //used return keyword coz if username = undefined then we should return from here, to avoid this (undefined just logged in) to get printed (to avoid execution of func return statement)
    }
    return `${username} just logged in`
}

// loginUserMessage("khushi") // function executed & function returned value : when this function executed it returned but not printed to print we'have to console.log
console.log(loginUserMessage("khushi") )
console.log(loginUserMessage("")) //when we'll pass empty string "" then we'll get output: just logged in
console.log(loginUserMessage()) //imp for interview //when nothing is passed then we get output: undefined just logged in not null: for undefined, we check using if else that the value is there or not

//in js, "" empty string, undefined is considered as false value 