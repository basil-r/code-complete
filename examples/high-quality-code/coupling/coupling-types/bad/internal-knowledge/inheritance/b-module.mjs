import { Person } from "./a-module.mjs";

export class Employee extends Person {
  #position;
  #employmentDate;

  constructor(name, surname, age, position, employmentDate) {
    super(name, surname, age);

    this.#position = position;
    this.#employmentDate = employmentDate;
  }

  getWorkingDays() {
    const today = new Date();
    const emplDate = new Date(this.#employmentDate);

    const dayDiff = today - emplDate;
    const dayInMs = 86400000;

    return Math.floor(dayDiff / dayInMs);
  }

  info() {
    return `${super.info()}\n${this.#position}, ${this.#employmentDate}`;
  }
}
