"use strict";

console.log(latino);
console.log(latino.food);
console.log(latino.food.title);
// This is how to access the name of the recipe.
console.log(latino.food.title.name);

// Trying something
// let props = Object.getOwnPropertyNames(latino);

// console.log(props);

// latino.title = "[2, 3, 4]";

// props = Object.getOwnPropertyNames(latino);

// console.log(props);

// let pos = 0;

// for (let i = 0; i < props.length; i++) {
//   if (props[i] == "title") {
//     pos = i;
//   }
// }
// props = Object.getOwnPropertyNames(latino);

// console.log(props);

const varToString = (varObj) => Object.keys(varObj)[0];

const someVar = 42;
const displayName = varToString({ someVar });
console.log(displayName);
