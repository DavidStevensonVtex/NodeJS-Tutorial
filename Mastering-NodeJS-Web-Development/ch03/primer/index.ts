// Listing 3.33 Using the optional chaining operator in the index.ts file in the primer folder

let count: number | undefined | null = 100;

let result1: string = count?.toFixed(2);
console.log(`Result 1: ${result1}`);

// Output
// Result 1: 100.00