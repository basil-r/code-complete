export class IdType {
  #value;

  static #maxId = 0;

  constructor() {
    this.#value = ++IdType.#maxId;
  }

  static get currentMaxId() {
    return IdType.#maxId;
  }

  get value() {
    return this.#value;
  }
}
