"use strict";
// Listing 3.58 Checking an object type in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    printDetails() {
        if (this.category !== undefined) {
            console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
        }
        else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}
class DiscountProduct extends Product {
    discount;
    constructor(name, price, discount) {
        super(name, price - discount);
        this.discount = discount;
    }
}
let hat = new DiscountProduct("Hat", 100, 10);
let boots = new Product("Boots", 100, "Snow Gear");
// hat.printDetails();
// boots.printDetails();
console.log(`Hat is a Product? ${hat instanceof Product}`);
console.log(`Hat is a DiscountProduct? ${hat instanceof DiscountProduct}`);
console.log(`Boots is a Product? ${boots instanceof Product}`);
console.log(`Boots is a DiscountProduct? ${boots instanceof DiscountProduct}`);
// Output
// Hat is a Product? true
// Hat is a DiscountProduct? true
// Boots is a Product? true
// Boots is a DiscountProduct? false
