"use strict";
// Listing 3.36 Defining a default parameter value in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function writeValue(val = "default value") {
    console.log(`Value: ${val}`);
}
writeValue("London");
writeValue();
// Output
// Value: London
// Value: default value
