let maxId = 0;

export function newId() {
  return ++maxId;
}

export function currentMaxId() {
  return maxId;
}
