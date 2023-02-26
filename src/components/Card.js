export default class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._link = link;
    this._name = name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._cardImage.onerror = () => {
      this._cardImage.src = "./images/imageError.png";
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
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });
  }

  _deleteCard() {
    this._element.remove();
  }
  _setCardLike(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }
}
