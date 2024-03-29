import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(".pop-up__form");
    this._handleFormSubmit = handleFormSubmit;
    this.setEventListeners();
  }

  _getInputValues() {
    const inputArray = Array.from(
      this._form.querySelectorAll(".pop-up__input")
    );
    const inputsValue = inputArray.map((item) => {
      return item.value;
    });
    return inputsValue;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
  close() {
    this._form.reset();
    super.close();
  }
}
