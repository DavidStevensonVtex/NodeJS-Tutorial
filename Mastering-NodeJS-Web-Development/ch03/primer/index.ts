// Listing 3.30 An unexpected null coalescing result in the index.ts file in the primer folder
// Result 3 is an unexpected result when using the || operator.

let val1: string | undefined;
let val2: string | undefined = "London";
let val3: number | undefined = 0;

let coalesced1 = val1 || "fallback value";
let coalesced2 = val2 || "fallback value";
let coalesced3 = val3 || "fallback value";

console.log(`Result 1: ${coalesced1}`);
console.log(`Result 2: ${coalesced2}`);
console.log(`Result 3: ${coalesced3}`);

// Output
// Result 1: fallback value
// Result 2: London
// Result 3: fallback value