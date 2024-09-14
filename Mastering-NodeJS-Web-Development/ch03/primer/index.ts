// Listing 3.35 Defining an optional parameter in the index.ts file in the primer folder

function writeValue(val?: string) {
    console.log(`Value: ${val ?? "Fallback value"}`);
}

writeValue("London");
writeValue();

// Output
// Value: London
// Value: Fallback value