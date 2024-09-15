"use strict";
// Listing 3.50 Creating an object in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let hat = {
    name: "Hat",
    price: 100
};
let boots = {
    name: "Boots",
    price: 100
};
console.log(`Name: ${hat.name}, Price: ${hat.price}`);
console.log(`Name: ${boots.name}, Price: ${boots.price}`);
// Output
// Name: Hat, Price: 100
// Name: Boots, Price: 100
