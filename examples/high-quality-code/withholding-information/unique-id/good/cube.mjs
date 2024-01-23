import { IdType } from "./id-type.mjs";

export class Cube {
  #id;

  constructor() {
    this.#id = new IdType();
  }

  get id() {
    return this.#id.value;
  }
}
