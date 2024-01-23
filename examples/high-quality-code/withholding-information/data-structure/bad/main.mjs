import { Cube } from "./cube.mjs";
import { shapes } from "./shapes.mjs";

/*
Problems:
- Information about the implementation of the data structure 
is distributed throughout the program - that it is an array, 
which leads to the use of built-in array methods.
- If in the future you change the data structure to store shapes to a tree, 
you will have to change the methods for accessing it everywhere 
*/

const cube2 = new Cube(2);
const cube5 = new Cube(5);

// built-in array method - storing shapes
shapes.push(cube2, cube5);

// also
shapes.forEach((cube, i) => {
  console.log(`cube ${i}: width - ${cube.width}, volume - ${cube.volume()}`);
});

// cube 0: width - 2, volume - 8
// cube 1: width - 5, volume - 125
