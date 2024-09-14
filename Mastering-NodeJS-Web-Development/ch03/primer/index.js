"use strict";
// Listing 3.38 Returning a result in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function composeString(val) {
    return `Composed string: ${val}`;
}
function writeValue(val) {
    console.log(composeString(val ?? "Fallback value"));
}
writeValue("London");
writeValue();
// Output
// Composed string: London
// Composed string: Fallback value
