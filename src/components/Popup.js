export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  // закрытие по esc + клик по оверлею
  _handleEscClose(evt) {
    if (evt.key === "Escape" || evt.target == evt.currentTarget) {
      this.close();
    }
  }
  open() {
    this._popup.classList.add("pop-up_opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.addEventListener("mousedown", this._handleEscClose);
  }
  close() {
    this._popup.classList.remove("pop-up_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.removeEventListener("mousedown", this._handleEscClose);
  }
  setEventListeners() {
    const closeBtn = this._popup.querySelector(".pop-up__close-button");
    closeBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
