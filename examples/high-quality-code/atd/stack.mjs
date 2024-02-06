export class Stack {
  #items = [];

  get size() {
    return this.#items.length;
  }

  push(item) {
    this.#items.push(item);
  }

  pop() {
    return this.#items.pop();
  }

  top() {
    return this.#items.at(-1);
  }
}
