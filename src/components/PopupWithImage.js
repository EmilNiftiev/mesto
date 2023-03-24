import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, scaleImage, scaleImageTitle) {
    super(popupSelector);
    this._popupImage = scaleImage;
    this._popupImageCaption = scaleImageTitle;
    super.setEventListeners();
  }
  open(name, link) {
    super.open();
    this._popupImage.src = link;
    this._popupImage.alt = link;
    this._popupImageCaption.textContent = name;
  }
}
