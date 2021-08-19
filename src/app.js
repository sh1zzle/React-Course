import "./utils.js";
console.log("app.js is running!");

import subtract, { square, add } from "./utils";
console.log(square(4));
console.log(add(5, 4));
console.log(subtract(5, 4));

// import { isAdult, canDrink } from "./person.js";
// console.log(isAdult(15));
// console.log(canDrink(21));
