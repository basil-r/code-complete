import { systemStatus, ERROR_TYPE } from "./system-status.mjs";
import { parseData } from "./business-logic.mjs";

/*
Advantages
- Extending the range of supported state status variables is easy to do
Problems:
- A direct variable check is used. 
- The checking mechanism is hard-coded in many places in the programme.
*/

function main(inputData) {
  const parsedData = parseData(inputData);

  if (systemStatus.error === ERROR_TYPE.FATAL) {
    // in the node.js environment, this could be process.exit(1)
    throw new Error("Critical system error - exit");
  }

  // use important data
  console.log({ parsedData });
}

// main("[]");
// { parsedData: [] }

main([]);
// Error: Critical system error - exit
