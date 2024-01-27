export class Person {
  #name;
  #surname;
  #age;

  constructor(name, surname, age) {
    this.#name = name;
    this.#surname = surname;
    this.#age = age;
  }

  info() {
    return `${this.#name} ${this.#surname} - ${this.#age}`;
  }
}
