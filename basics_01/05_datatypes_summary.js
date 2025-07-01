// Primitive Datatypes

// 7 types: String, Number, BigInt, Boolean, Undefined, Null, Symbol



const score = 100; // Number
const name = "Shrish"; // String
const isPassed = true; // boolean
const bigNumber = 123456789n; // BigInt
const notDefined = undefined //undefined
const emptyValue = null; //null
const uniqueId = Symbol("id"); // Symbol


// Non-Primitive Datatypes (Refernce Types)

// 3 types: Object, Array, Function 

const person = {
    name: "Shrishti",
    age: 25,
} // Object

const numbers = [1,2,3,4,5]; // Array

function MyFunction() {
    console.log("hello world");
} // Function



// Stack (premitive types) &

let myName = "Shrishti"; 
let MyAnotherName = myName; // Stack;
MyAnotherName = "Shrishti Gohel";


console.log(MyAnotherName); 
console.log(myName); 

//  Heap (non-premitive types)

let userOne = {
    name: "Sunny",
    age: 25,
}

let usertwo = userOne; // Heap
usertwo.name =  "SunnySoni";

console.log(userOne.name);
console.log(usertwo.name);
