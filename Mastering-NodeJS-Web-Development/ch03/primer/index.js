"use strict";
// Listing 3.39 Using functions as arguments to other functions in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function getUKCapital() {
    return "London";
}
function writeCity(f) {
    console.log(`City: ${f()}`);
}
writeCity(getUKCapital);
// Output
// City: London
