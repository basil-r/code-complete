import { Circle } from "./circle.mjs";
import { Cube } from "./cube.mjs";
import { currentMaxId } from "./new-id.mjs";

/* 
Advantages:
- Information about the method of creating new ids is hidden. 
- Only the newId() method would have to be changed 
but not the dozens of this.#id = newId() commands.

Problem:
- id type is also a secret that should be hidden.
*/

const cube = new Cube();
const circle = new Circle();

console.log({
  "cube id": cube.id,
  "circle id": circle.id,
  "current maxId": currentMaxId(),
});

// { 'cube id': 1, 'circle id': 2, 'current maxId': 2 }
