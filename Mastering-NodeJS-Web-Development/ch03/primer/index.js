"use strict";
// Listing 3.47 Modifying the contents of an array in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let myArray = [100, "Adam", true];
myArray[0] = "Tuesday";
let val = myArray[0];
console.log(`Value: ${val}`);
// Output
// Value: Tuesday
