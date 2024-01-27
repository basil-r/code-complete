export class Triangle {
  #sideAB;
  #sideBC;
  #sideCA;
  #angleCAB;
  #angleABC;
  #angleBCA;

  setSides(a, b, c) {
    this.#sideAB = a;
    this.#sideBC = b;
    this.#sideCA = c;
  }

  setAngles(a, b, c) {
    this.#angleCAB = a;
    this.#angleABC = b;
    this.#angleBCA = c;
  }

  area() {
    const halfPerimeter = (this.#sideAB + this.#sideBC + this.#sideCA) / 2;

    return Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.#sideAB) *
        (halfPerimeter - this.#sideBC) *
        (halfPerimeter - this.#sideCA)
    );
  }

  calculateHeightToAC() {
    return this.#sideAB * Math.sin(this.#angleCAB);
  }
}
