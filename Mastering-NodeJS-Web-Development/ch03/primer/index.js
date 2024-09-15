"use strict";
// Listing 3.54 Defining a class in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    name;
    price;
    category;
}
let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100, "Snow Gear");
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
