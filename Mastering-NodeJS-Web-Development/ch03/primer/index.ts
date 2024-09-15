// Listing 3.53 Defining an optional property in the index.ts file in the primer folder

let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: 100,
    category: "Snow Gear"
}

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