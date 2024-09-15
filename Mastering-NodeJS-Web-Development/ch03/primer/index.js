"use strict";
// Listing 3.48 Enumerating the contents of an array in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let myArray = [100, "Adam", true];
for (let i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
myArray.forEach((value, index) => console.log("Index " + index + ": " + value));
// Output
// Index 0: 100
// Index 1: Adam
// Index 2: true
// ---
// Index 0: 100
// Index 1: Adam
// Index 2: true
