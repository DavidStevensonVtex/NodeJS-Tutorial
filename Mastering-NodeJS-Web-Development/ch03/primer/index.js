"use strict";
// Listing 3.53 Defining an optional property in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
let hat = {
    name: "Hat",
    price: 100
};
let boots = {
    name: "Boots",
    price: 100,
    category: "Snow Gear"
};
function printDetails(product) {
    if (product.category !== undefined) {
        console.log(`Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    }
    else {
        console.log(`Name: ${product.name}, Price: ${product.price}`);
    }
}
printDetails(hat);
printDetails(boots);
// Output
// Name: Hat, Price: 100
// Name: Boots, Price: 100, Category: Snow Gear
