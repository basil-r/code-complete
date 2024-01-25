import { systemStatus } from "./system-status.mjs";
import { parseData } from "./business-logic.mjs";

/*
Problems:
- The range of states supported by status variables often has to be extended, 
which requires a major revision of all code fragments that perform the variable check.
*/

function main(inputData) {
  const parsedData = parseData(inputData);

  if (systemStatus.error) {
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
