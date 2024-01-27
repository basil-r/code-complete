export class Calendar {
  #date;

  initialize(date) {
    this.#date = date;
  }

  getWeekDay() {
    if (!this.#date) this.initialize(new Date());
    return this.#date.toLocaleDateString("en-GB", { weekday: "short" });
  }
}
