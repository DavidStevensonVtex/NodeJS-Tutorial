// Listing 3.36 Defining a default parameter value in the index.ts file in the primer folder

function writeValue(val: string = "default value") {
    console.log(`Value: ${val}`);
}

writeValue("London");
writeValue();

// Output
// Value: London
// Value: default value