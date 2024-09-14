"use strict";
// Listing 3.27 Using the identity operator in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let firstVal = 5;
let secondVal = "5";
if (firstVal === secondVal) {
    console.log("They are the same");
}
else {
    console.log("They are NOT the same");
}
// Output
// They are NOT the same
