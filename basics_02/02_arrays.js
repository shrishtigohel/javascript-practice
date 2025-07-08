const Ecommerce = ["Magento", "Shopify", "WooCommerce"];
const Android = ["samsung", "google", "IQOO"];

// Ecommerce.push(Android);
// console.log(Ecommerce);

// console.log(Ecommerce[3][1]);


// console.log(Ecommerce);

// const newEccommerce = Ecommerce.concat(Android);
// console.log(newEccommerce);

// const newEcommerce = [...Ecommerce, ...Android];
// console.log(newEcommerce);

// const another_array = [1, 2, 3, [5, 6, 7], 4, 5, [8, 9, [10, 11, 12]]];
// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

console.log(Array.isArray("Hello World!"));
console.log(Array.from("Hello World!"));

console.log(Array.from({name:"Hello World!"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));