// Listing 3.28 Removing the type annotations in the index.ts file in the primer folder

let firstVal = 5;
let secondVal = "5";

if (firstVal === secondVal) {
    console.log("They are the same");
} else {
    console.log("They are NOT the same");
}

// Problems
// index.ts(6,5): error TS2367: This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.