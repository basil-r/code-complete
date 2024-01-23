import { Circle } from "./circle.mjs";
import { Cube } from "./cube.mjs";
import { IdType } from "./id-type.mjs";

/* 
Advantages:
- Information about the method of creating new ids is hidden. 
- Only the IdType class would have to be changed 
but not the dozens of this.#id = new IdType(); commands.
- Id type is hidden too.
*/

const cube = new Cube();
const circle = new Circle();

console.log({
  "cube id": cube.id,
  "circle id": circle.id,
  "current maxId": IdType.currentMaxId,
});

// { 'cube id': 1, 'circle id': 2, 'current maxId': 2 }
