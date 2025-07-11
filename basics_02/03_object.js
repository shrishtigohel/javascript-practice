// object literals
const mySym = Symbol("key1");
const jsUser = {
    name : "Shrish",
    "full name":" Shrish Gohel",
    [mySym] : "mykey1",
    age: 23,
    location: "Ahmedabad",
    email: "test@gmail.com",
    isLoggedIn: true,
    LastLoggedInDays: ["Mon","Sun"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "shrish@gmail.com"
// Object.freeze(jsUser);
jsUser.email = "main@gmail.com"
// 

jsUser.greetings = function() {
    console.log(`Hello`);
}
jsUser.greetingsecond = function() {
    console.log(`Hello, ${this.name}`);
}

console.log(jsUser.greetings());

console.log(jsUser.greetingsecond());