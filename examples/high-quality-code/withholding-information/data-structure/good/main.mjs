import { Cube } from "./cube.mjs";
import * as shapes from "./shapes.mjs";

/*
Advantages:
- The programme will only access the data through access methods.
- The implementation details are known only to these methods.
*/

const cube2 = new Cube(2);
const cube5 = new Cube(5);

shapes.store(cube2, cube5);

shapes.iterate((cube, i) => {
  console.log(`cube ${i}: width - ${cube.width}, volume - ${cube.volume()}`);
});

// cube 0: width - 2, volume - 8
// cube 1: width - 5, volume - 125
