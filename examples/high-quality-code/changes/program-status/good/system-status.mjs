export const ERROR_TYPE = {
  NONE: "none",
  WARNING: "warning",
  FATAL: "fatal",
};

const systemStatus = {
  error: ERROR_TYPE.NONE,
};

export function setSystemStatus(errorType) {
  systemStatus.error = errorType;
}

export function checkSystemStatus() {
  if (systemStatus.error === ERROR_TYPE.FATAL) return true;

  if (systemStatus.error === ERROR_TYPE.WARNING) {
    console.warn({ systemStatus: systemStatus.error });
    return false;
  }

  return false;
}
