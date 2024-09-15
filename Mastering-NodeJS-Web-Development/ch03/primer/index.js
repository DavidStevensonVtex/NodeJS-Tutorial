"use strict";
// Listing 3.41 Using a closure in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function getUKCapital() {
    return "London";
}
function writeCity(f) {
    console.log(`City: ${f()}`);
}
writeCity(getUKCapital);
writeCity(() => "Paris");
let myCity = "Rome";
writeCity(() => myCity);
// Output
// City: London
// City: Paris
// City: Rome 
