export default class Card {
  constructor(data, templateSelector, scaleImage) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._scaleImage = scaleImage;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._errorCard = this._element.querySelector(".card__image");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._errorCard.onerror = () => {
      this._errorCard.src = "./images/imageError.png";
      this._link = "./images/imageError.png";
    };

    return this._element;
  }
  _setEventListeners() {
    this._element
      .querySelector(".card__trash-button")
      .addEventListener("click", this._deleteCard.bind(this));
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this._setCardLike.bind(this));
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._scaleImage(this._name, this._link)
      );
  }

  _deleteCard() {
    this._element.remove();
  }
  _setCardLike(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }
}
