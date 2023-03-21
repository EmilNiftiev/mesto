export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }
  renderItems(elements) {
    elements.forEach((element) => this._renderer(element));
  }
  addItem(card) {
    this._containerSelector.prepend(card);
  }
}
