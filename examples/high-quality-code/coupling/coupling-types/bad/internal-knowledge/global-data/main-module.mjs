/*
Module B uses global data after it has been modified by Module A. 
In doing so, Module B assumes that Module A was called at the right time 
and changed the data in the way that Module B needs.
*/

import { setSides } from "./a-module.mjs";
import { calculateShapeArea } from "./b-module.mjs";

const width = 10;
const height = 5;

// order is important
setSides(width, height);
const rectArea = calculateShapeArea();

console.log({ rectArea });
// { rectArea: 50 }
