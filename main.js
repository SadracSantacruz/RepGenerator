"use strict";

// To randomize all the recipes
function allRadom() {
  // 1) Randomizing cultures
  let theCultures = [latino, american, asian];
  return theCultures[Math.floor(rand * theCultures.length)];
}

function randomProperty(obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * rand) << 0]];
}

// Just to simplify the code
let rand = Math.random();

// This two lines of code specify by calling the allRandom function what's
// the property of the random culture.
let theDrinks = allRadom().drinks;
let theFood = allRadom().food;

// This random number will be the one that determines what recipe will be
// choosed.
let randomNumber = Math.floor(rand * 2) + 0;

console.log(allRadom());

console.log(randomProperty(allRadom()));

// // How to check how many properties does an object has.
// console.log(Object.keys(latino).length);

// // This code get access to the the list inside the the property and print it line by line.
// for (let i = 0; i < latino.drinks.length; i++) {
//   console.log(latino.drinks[1][1][i]);
// }
