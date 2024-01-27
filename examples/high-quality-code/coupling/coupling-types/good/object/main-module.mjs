/*
A module creates an instance of another module.
*/

import { Shape } from "./a-module.mjs";

const width = 10;
const height = 5;

const rectArea = new Shape(width, height).area();

console.log({ rectArea });
// { rectArea: 50 }
