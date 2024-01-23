const shapes = [];

export function store(...items) {
  shapes.push(...items);
}

export function iterate(callback) {
  shapes.forEach((shape, index) => callback(shape, index));
}
