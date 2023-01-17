export default class DoorModel {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #oppened: boolean;

  constructor(number: number, hasGift = false, selected = false, oppened = false) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#oppened = oppened;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get oppened() {
    return this.#oppened;
  }

  get closed() {
    return !this.#oppened;
  }

  MarkOff() {
    const selected = false;
    return new DoorModel(this.number, this.hasGift, selected, this.oppened);
  }

  changeSelected() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.hasGift, selected, this.oppened);
  }

  open() {
    const oppened = true;
    return new DoorModel(this.number, this.hasGift, this.selected, oppened);
  }
}
