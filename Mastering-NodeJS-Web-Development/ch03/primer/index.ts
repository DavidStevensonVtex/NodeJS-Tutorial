// Listing 3.17 Defining a variable without a value in the index.ts file in the primer folder

let condition: boolean = true;
let person: string = "Bob";
const age: number = 40;

let place;
console.log("Place value: " + place + " Type: " + typeof (place));
place = "London";
console.log("Place value: " + place + " Type: " + typeof (place));

// Output
// Place value: undefined Type: undefined
// Place value: London Type: string