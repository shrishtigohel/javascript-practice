let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());


let CreateDate = new Date(2023, 8, 23);
console.log(CreateDate.toString());


let timesStamp = Date.now();
console.log(Math.floor(timesStamp / 1000)); // seconds
console.log(Math.floor(timesStamp / 60)); // Minutes
console.log(Math.floor(timesStamp / 3600)); // Hours
console.log(Math.floor(timesStamp / 3600 * 24)); //days
console.log(Math.floor(timesStamp / 3600 * 24 * 30)); // Months
console.log(Math.floor(timesStamp / 3600 * 24 * 365));  // Years



