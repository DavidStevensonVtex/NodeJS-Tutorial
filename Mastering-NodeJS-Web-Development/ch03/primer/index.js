"use strict";
// Listing 3.35 Defining an optional parameter in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function writeValue(val) {
    console.log(`Value: ${val ?? "Fallback value"}`);
}
writeValue("London");
writeValue();
// Output
// Value: London
// Value: Fallback value
