"use strict";
// Listing 3.49 Using the spread operator in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let myArray = [100, "Adam", true];
let otherArray = [...myArray, 200, "Bob", false];
// for (let i = 0; i < myArray.length; i++) {
//     console.log("Index " + i + ": " + myArray[i]);
// }
// console.log("---");
otherArray.forEach((value, index) => console.log("Index " + index + ": " + value));
// Output
// Index 0: 100
// Index 1: Adam
// Index 2: true
// Index 3: 200
// Index 4: Bob
// Index 5: false
