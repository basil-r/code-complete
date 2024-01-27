/*
Two modules (main and a) are coupled with each other by a parameter object 
if calculateShapeArea requires Main module to pass Shape Object to it. 
This type of coupling is tighter because Main module must have information about Shape.
*/

import { calculateShapeArea } from "./a-module.mjs";
import { Shape } from "./b-module.mjs";

const width = 10;
const height = 5;

const rect = new Shape(width, height);

const rectArea = calculateShapeArea(rect);

console.log({ rectArea });
// { rectArea: 50 }
