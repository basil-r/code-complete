import { Circle } from "./circle.mjs";
import { Cube } from "./cube.mjs";

/* 
Problems:
- Disclosed is a method of generating new identifiers.
- If you change the command `this.#id = ++globalThis.maxId;`, 
you will have to change each of them throughout the programme.
*/

globalThis.maxId = 0;

const cube = new Cube();
const circle = new Circle();

console.log({
  "cube id": cube.id,
  "circle id": circle.id,
  "current maxId": globalThis.maxId,
});

// { 'cube id': 1, 'circle id': 2, 'current maxId': 2 }
