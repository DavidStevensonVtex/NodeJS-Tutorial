// Listing 3.8 Checking types in the index.js file in the primer folder

function sum(first, second) {
    if (typeof first === "number" && typeof second === "number") {
        return first + second ; 
    }
    throw Error("Expected two numbers");
}

let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);

// Output
// Result value: 20, Result type: number
// ...ch03\primer\index.js:7
//     throw Error("Expected two numbers");
//     ^

// Error: Expected two numbers