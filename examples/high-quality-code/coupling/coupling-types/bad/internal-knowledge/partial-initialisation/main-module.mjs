/*
Main Module passes the triangle object to Module B (calculateShapeArea). 
Main Module knows that Module B (calculateShapeArea) 
uses only one of the triangle's four methods, 
so it initialises the triangle only partially, 
only with the data needed by this one methods area().
*/

import { Triangle } from "./a-module.mjs";
import { calculateShapeArea } from "./b-module.mjs";

const triangle = new Triangle();
triangle.setSides(3, 4, 5);

const triArea = calculateShapeArea(triangle);

console.log({ triArea });
// { triArea: 6 }
