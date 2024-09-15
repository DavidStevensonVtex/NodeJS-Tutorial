"use strict";
// Listing 3.61 Importing specific types in the index.ts file in the primer folder
Object.defineProperty(exports, "__esModule", { value: true });
const name_1 = require("./modules/name");
const weather_1 = require("./modules/weather");
let name = new name_1.Name("Adam", "Freeman");
let loc = new weather_1.WeatherLocation("raining", "London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
// Output
// Hello Adam Freeman
// It is raining in London
