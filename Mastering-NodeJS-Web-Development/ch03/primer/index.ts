// Listing 3.9 The contents of the index.ts file in the primer folder

function sum(first: number, second: number) {
    return first + second;
}

let result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);

result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);

// Argument of type 'string' is not assignable to parameter of type 'number'.