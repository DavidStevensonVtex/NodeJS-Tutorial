"use strict";
// Listing 3.11 Supporting multiple types in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function sum(first, second) {
    if (typeof second === "string") {
        return first + Number.parseInt(second);
    }
    else {
        return first + second;
    }
}
let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
// Problems
// index.ts(14, 18): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
