// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myFood = ["chinese", "panjabi"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

myArr.push(6);
// myArr.push(7);
myArr.pop();

myArr.unshift(8);
myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

//Slice / Splice 

console.log("A", myArr);
const sliceArr = myArr.slice(1,3);
console.log(sliceArr);
console.log("B", myArr);