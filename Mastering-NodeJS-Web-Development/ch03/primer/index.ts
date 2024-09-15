// Listing 3.54 Defining a class in the index.ts file in the primer folder

class Product {
    constructor(name: string, price: number, category?: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    name: string
    price: number
    category?: string
}
let hat = new Product("Hat", 100);

let boots = new Product("Boots", 100, "Snow Gear");

function printDetails(product: { name: string, price: number, category?: string }) {
    if (product.category !== undefined) {
        console.log(`Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    } else {
        console.log(`Name: ${product.name}, Price: ${product.price}`);
    }
}

printDetails(hat);
printDetails(boots);

// Output
// Name: Hat, Price: 100
// Name: Boots, Price: 100, Category: Snow Gear