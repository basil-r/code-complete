export class Cube {
  #width;

  constructor(width) {
    this.#width = width;
  }

  get width() {
    return this.#width;
  }

  volume() {
    return Math.pow(this.#width, 3);
  }
}
