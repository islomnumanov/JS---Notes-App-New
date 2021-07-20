import otherSquare, { add, name } from "./utilities";
import scream from "./scream";

console.log("index.js");
console.log(add(12, 22));
console.log(name);
console.log(scream(name));
console.log(otherSquare(5));

// 1. Create a new file called scream.js
// 2. Export a scream function that takes a string
// Convert that string into an upperCase
// Add "!" onto the end
// 3. Import scream.js and use it
