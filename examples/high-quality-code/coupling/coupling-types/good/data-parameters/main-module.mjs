/*
Only elementary data types are transferred between the two modules, 
and they are transferred via parameter lists.
*/

import { calculateShapeArea } from "./a-module.mjs";

const width = 10;
const height = 5;

const rectArea = calculateShapeArea(width, height);

console.log({ rectArea });
// { rectArea: 50 }
