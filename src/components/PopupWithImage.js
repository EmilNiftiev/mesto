import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".pop-up__scale-image");
    this._popupImageCaption = this._popup.querySelector(
      ".pop-up__image-description"
    );
    super.setEventListeners();
  }
  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageCaption.textContent = name;
    super.open();
  }
}
