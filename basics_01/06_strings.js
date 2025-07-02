const name = "Shrishti";
const age = 25;

// console.log(name + age + "is my name and age");

console.log(`${name} ${age} is my name and age`);

const gameName = new String('main-ain-in') // check in inspect 

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,3);
console.log(newString);
const anotherString = gameName.slice(-2,3);
console.log(anotherString);

const stringWithSpaces = "   Hello World      ";
console.log(stringWithSpaces);

console.log(stringWithSpaces.trim());

const url = "https://www.google.com/shrishti%20gohel";
console.log(url.replace("%20","-"));
console.log(url.includes("shrishti"));
console.log(url.includes("sunny"));
console.log(gameName.split("-"));
