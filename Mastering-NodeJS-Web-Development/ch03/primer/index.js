"use strict";
// Listing 3.34 Defining a function in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function writeValue(val) {
    console.log(`Value: ${val ?? "Fallback value"}`);
}
writeValue("London");
writeValue(null);
// Output
// Value: London
// Value: Fallback value
