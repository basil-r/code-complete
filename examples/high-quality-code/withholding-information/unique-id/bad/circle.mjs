export class Circle {
  #id;

  constructor() {
    this.#id = ++globalThis.maxId;
  }

  get id() {
    return this.#id;
  }
}
