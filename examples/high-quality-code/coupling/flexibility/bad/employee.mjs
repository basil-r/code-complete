export class Employee {
  #name;
  #position;
  #employmentDate;
  #id;

  constructor(name, position, employmentDate, id) {
    this.#id = id;
    this.#name = name;
    this.#employmentDate = employmentDate;
    this.#position = position;
  }

  get position() {
    return this.#position;
  }

  get employmentDate() {
    return this.#employmentDate;
  }

  toJSON() {
    return {
      name: this.#name,
      position: this.#position,
      employmentDate: new Date(this.#employmentDate),
      id: this.#id,
    };
  }
}
