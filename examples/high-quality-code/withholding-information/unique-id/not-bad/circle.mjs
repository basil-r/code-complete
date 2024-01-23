import { newId } from "./new-id.mjs";

export class Circle {
  #id;

  constructor() {
    this.#id = newId();
  }

  get id() {
    return this.#id;
  }
}
