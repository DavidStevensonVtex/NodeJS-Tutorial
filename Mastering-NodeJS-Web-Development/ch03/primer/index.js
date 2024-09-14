"use strict";
// Listing 3.9 The contents of the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function sum(first, second) {
    return first + second;
}
let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
// Argument of type 'string' is not assignable to parameter of type 'number'.
