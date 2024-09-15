"use strict";
// Listing 3.63 Importing a module folder in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("./modules");
let name = new modules_1.Name("Adam", "Freeman");
let loc = new modules_1.WeatherLocation("raining", "London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
// Output
// Hello Adam Freeman
// It is raining in London
