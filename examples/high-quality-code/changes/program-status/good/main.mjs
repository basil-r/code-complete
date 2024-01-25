import { checkSystemStatus } from "./system-status.mjs";
import { parseData } from "./business-logic.mjs";

/*
Advantages
- It remains possible to implement a more complex state detection mechanism in a single location
*/

function main(inputData) {
  const parsedData = parseData(inputData);
  const fatalError = checkSystemStatus();

  if (fatalError) {
    // in the node.js environment, this could be process.exit(1)
    throw new Error("Critical system error - exit");
  }

  // use important data
  console.log({ parsedData });
}

main("[]");
// { parsedData: [] }

// main([]);
// Error: Critical system error - exit
