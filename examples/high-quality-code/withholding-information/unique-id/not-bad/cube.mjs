import { newId } from "./new-id.mjs";

export class Cube {
  #id;

  constructor() {
    this.#id = newId();
  }

  get id() {
    return this.#id;
  }
}
