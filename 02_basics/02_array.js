const marvels_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//PUSH
// marvels_heros.push(dc_heros)
// console.log(marvels_heros)
// console.log(marvels_heros[3][1]) //to access 3rd ele's value

//CONCAT OPERATOR
//instead of push i can also use concate: combines two or more arrays. This method returns a new array without modifying any existing arrays.
// const allHeros = marvels_heros.concat(dc_heros)
//console.log(marvels_heros.concat(dc_heros))
//console.log(allHeros) //we stored in a variable to store new array then it will work otherwise u'll not see this result u'll see result same as .push

//so push happens in existing array nd concate returns new array 

// many people dont use concat they use SPREAD OPERATOR

//SPREAD OPERATOR: prefer this 
// const all_new_heros = [...marvels_heros, ...dc_heros]
// console.log(all_new_heros);

//FLAT: returns a new array with all sub-array elements concatenated into it recursively up to the specified depth 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array); // all the values in the array gets spread out in the new array

//used when we'll do data scrapping: when we select data from any web page then it comes in diff format like node list, objs, string but we want in array(we can loop on array only)
//we can ask & convert

//ask
//console.log(Array.isArray("Pragati")) //false (b'cz this is not an array)

//converting the Above into array: CONVERT HAPPENS USING FROM (from convert objects /strings -> array)
//console.log(Array.from("Pragati"))

//Imp case for interview
//console.log(Array.from({name: "hitesh"})) //not able to convert this into array coz we have not mentioned weather we want array of keys or values. If unable to convert than we'll get empty array

//Ex:want to convert multiple variables or arrays etc into one array using Array.of(returns a new array from a set of elements)
let score1=100
let score2=200
let score3=300
// console.log(Array.of(score1, score2, score3))

//learn more about these methods Array.isArray, .from, .of
