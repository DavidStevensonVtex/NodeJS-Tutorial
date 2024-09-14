"use strict";
// Listing 3.14 Resolving ambiguity in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function sum(first, second) {
    return first + second;
}
let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
// Output
// Result value: 20, Result type: number
// Result value: 1010, Result type: string
