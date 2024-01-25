import { setSystemStatus, ERROR_TYPE } from "./system-status.mjs";

export function parseData(criticalData) {
  try {
    return JSON.parse(criticalData);
  } catch (error) {
    console.log(error);
    setSystemStatus(ERROR_TYPE.FATAL);
  }
}
