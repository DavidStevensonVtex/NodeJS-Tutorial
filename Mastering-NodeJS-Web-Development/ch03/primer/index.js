"use strict";
// Listing 3.13 Changing the function in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function sum(first, second) {
    return first + second;
}
let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
// Problem
// Operator '+' cannot be applied to types 'number' and 'string | number'.
