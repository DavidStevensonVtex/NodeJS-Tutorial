// Listing 3.32 Guarding against null or undefined values in the index.ts file in the primer folder

let count: number | undefined | null = 100;
if (count != null && count != undefined) {
    let result1: string = count.toFixed(2);
    console.log(`Result 1: ${result1}`);
}

// Output
// Result 1: 100.00