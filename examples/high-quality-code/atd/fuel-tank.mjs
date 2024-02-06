const FuelStatus = {
  Empty: 0,
  Full: 1,
  Half: 2,
};

export class FuelTank {
  #volume;
  #capacity = 0;
  #status = FuelStatus.Empty;

  get #availableSpace() {
    return this.#volume - this.#capacity;
  }
  get capacity() {
    return this.#capacity;
  }

  get status() {
    return this.#status;
  }

  get volume() {
    return this.#volume;
  }

  constructor(volume) {
    this.#volume = volume;
  }

  fill(volume) {
    if (this.#status === FuelStatus.Full || volume < 0) {
      return 0;
    }

    if (!volume) {
      volume = this.#availableSpace;
    }

    const filledVolume = Math.min(volume, this.#availableSpace);
    this.#capacity += filledVolume;
    const isFull = this.#capacity === this.#volume;
    this.#status = isFull ? FuelStatus.Full : FuelStatus.Half;

    return filledVolume;
  }

  drain() {
    const capacity = this.#capacity;
    this.#capacity = 0;
    this.#status = FuelStatus.Empty;

    return capacity;
  }

  toJSON() {
    return {
      volume: this.#volume,
      capacity: this.#capacity,
      status: Object.keys(FuelStatus)[this.#status],
    };
  }
}
