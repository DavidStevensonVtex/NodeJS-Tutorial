// Listing 3.44 Restricting array value types in the index.ts file in the primer folder

let myArray: (number | string | boolean)[] = [];
myArray[0] = 100;
myArray[1] = "Adam";
myArray[2] = true;