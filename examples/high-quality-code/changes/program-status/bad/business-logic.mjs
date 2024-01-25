import { systemStatus } from "./system-status.mjs";

export function parseData(criticalData) {
  try {
    return JSON.parse(criticalData);
  } catch (error) {
    console.log(error);
    systemStatus.error = true;
  }
}
