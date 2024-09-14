"use strict";
// Listing 3.37 Using a rest parameter in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
function writeValue(val, ...extraInfo) {
    console.log(`Value: ${val}, Extras: ${extraInfo}`);
}
writeValue("London", "Raining", "Cold");
writeValue("Paris", "Sunny");
writeValue("New York");
// Output
// Value: London, Extras: Raining,Cold
// Value: Paris, Extras: Sunny
// Value: New York, Extras:  
