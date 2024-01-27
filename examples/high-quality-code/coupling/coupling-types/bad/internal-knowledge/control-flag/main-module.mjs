/*
Module Main passes a control flag to Module A, 
which determines the future operation of calculateShapeArea. 
Module Main must make assumptions about the internal workings of Module A (calculateShapeArea), 
- what Module A (calculateShapeArea) is going to do with the control flag.
*/

import { calculateShapeArea } from "./a-module.mjs";

const width = 10;
const heigth = 5;

let isTriangle = true;
const triArea = calculateShapeArea(width, heigth, isTriangle);

isTriangle = false;
const rectArea = calculateShapeArea(width, heigth, isTriangle);

console.log({ triArea, rectArea });
// { triArea: 25, rectArea: 50 }
