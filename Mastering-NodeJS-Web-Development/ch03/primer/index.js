"use strict";
// Listing 3.52 Adding a property in the index.ts file in the primer folder
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
    console.log(`Name: ${product.name}, Price: ${product.price}`);
}
printDetails(hat);
printDetails(boots);
// Output
// Name: Hat, Price: 100
// Name: Boots, Price: 100
