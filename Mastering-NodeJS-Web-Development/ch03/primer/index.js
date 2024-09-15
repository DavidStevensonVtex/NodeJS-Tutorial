"use strict";
// Listing 3.40 Defining an arrow function in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function getUKCapital() {
    return "London";
}
function writeCity(f) {
    console.log(`City: ${f()}`);
}
writeCity(getUKCapital);
writeCity(() => "Paris");
// Output
// City: London
// City: Paris
