export default class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }
  renderItems(elements) {
    elements.forEach((element) => this._renderer(element));
  }
  addItem(card) {
    this._container.prepend(card);
  }
}
