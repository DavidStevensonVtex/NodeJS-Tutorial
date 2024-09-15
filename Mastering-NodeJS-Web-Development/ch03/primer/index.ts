// Listing 3.47 Modifying the contents of an array in the index.ts file in the primer folder

let myArray: (number | string | boolean)[] = [100, "Adam", true];

myArray[0] = "Tuesday";

let val = myArray[0];
console.log(`Value: ${val}`);

// Output
// Value: Tuesday