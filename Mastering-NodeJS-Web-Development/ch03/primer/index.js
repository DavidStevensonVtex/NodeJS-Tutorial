"use strict";
// Listing 3.33 Using the optional chaining operator in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let count = 100;
let result1 = count?.toFixed(2);
console.log(`Result 1: ${result1}`);
// Output
// Result 1: 100.00
