export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._initialCards.forEach((element) => {
      this._renderer(element);
    });
  }
  addItem(card) {
    this._container.prepend(card);
  }
}
