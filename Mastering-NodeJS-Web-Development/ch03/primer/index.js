"use strict";
// Listing 3.31 Using the nullish coalescing operator in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let val1;
let val2 = "London";
let val3 = 0;
let coalesced1 = val1 || "fallback value";
let coalesced2 = val2 || "fallback value";
let coalesced3 = val3 || 100;
console.log(`Result 1: ${coalesced1}`);
console.log(`Result 2: ${coalesced2}`);
console.log(`Result 3: ${coalesced3}`);
// Output
// Result 1: fallback value
// Result 2: London
// Result 3: 100  
