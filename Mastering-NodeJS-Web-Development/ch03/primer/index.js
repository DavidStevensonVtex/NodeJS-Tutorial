"use strict";
// Listing 3.29 Using the logical OR operator(||) instead of the null coalescing operator in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let val1;
let val2 = "London";
let coalesced1 = val1 || "fallback value";
let coalesced2 = val2 || "fallback value";
console.log(`Result 1: ${coalesced1}`);
console.log(`Result 2: ${coalesced2}`);
// Output
// Result 1: fallback value
// Result 2: London
