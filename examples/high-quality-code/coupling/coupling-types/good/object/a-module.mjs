export class Shape {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  area() {
    return this.#width * this.#height;
  }
}
