// import errorImage from "../images/imageError.png";
// export default class Card {
//   constructor(name, link, templateSelector, handleCardClick) {
//     this._link = link;
//     this._name = name;
//     this._templateSelector = templateSelector;
//     this._handleCardClick = handleCardClick;
//   }
//   _getTemplate() {
//     const cardElement = document
//       .querySelector(this._templateSelector)
//       .content.querySelector(".card")
//       .cloneNode(true);
//     return cardElement;
//   }
//   generateCard() {
//     this._element = this._getTemplate();
//     this._cardImage = this._element.querySelector(".card__image");
//     this._cardImage.src = this._link;
//     this._cardImage.alt = this._name;
//     this._element.querySelector(".card__title").textContent = this._name;
//     this._cardImage.onerror = () => {
//       this._cardImage.src = errorImage;
//       this._link = errorImage;
//     };
//     this._setEventListeners();
//     return this._element;
//   }
//   _setEventListeners() {
//     this._element
//       .querySelector(".card__trash-button")
//       .addEventListener("click", this._deleteCard.bind(this));
//     this._element
//       .querySelector(".card__like-button")
//       .addEventListener("click", this._setCardLike.bind(this));
//     this._cardImage.addEventListener("click", () => {
//       this._handleCardClick(this._name, this._link);
//     });
//   }

//   _deleteCard() {
//     this._element.remove();
//   }
//   _setCardLike(evt) {
//     evt.target.classList.toggle("card__like-button_active");
//   }
// }
import errorImage from "../images/imageError.png";
export default class Card {
  constructor(
    { data, handleCardClick, handleLikeClick, handleDeleteClick },
    templateSelector,
    config,
    user
  ) {
    this._cardSelector = templateSelector;
    this._user = user;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._cardElement = config.cardElement;
    this._cardImage = config.cardImage;
    this._cardTitle = config.cardTitle;
    this._cardLike = config.cardLike;
    this._cardTrash = config.cardTrash;
    this._cardLikeCounter = config.cardLikeCounter;
    this._cardInfo = data;
    this._cardName = data.name;
    this._cardLink = data.link;
    this._cardId = data.cardID;
    this._cardOwner = data.owner;
    this._cardLikes = data.likes;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(this._cardElement)
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(this._cardImage);
    this._cardImage.src = this._cardLink;
    this._cardImage.alt = this._cardName;
    this._element.querySelector(this._cardTitle).textContent = this._cardName;
    this._likeCounter = this._element.querySelector(this._cardLikeCounter);
    this._likeCounter.textContent = this._cardLikes.length;
    this._cardImage.onerror = () => {
      this._cardImage.src = errorImage;
      this._cardLink = errorImage;
    };
    const likeBtn = this._element.querySelector(this._cardLike);
    const deleteBtn = this._element.querySelector(this._cardTrash);

    this._likes = Array.from(this._cardLikes).map((item) => {
      return item._id;
    });

    if (this._likes.includes(this._user._id)) {
      likeBtn.classList.add("card__like-button_active");
    } else {
      likeBtn.classList.remove("card__like-button_active");
    }

    likeBtn.addEventListener("click", () => {
      this._handleLikeClick(
        this._cardInfo,
        this._likes,
        this._user,
        likeBtn,
        this._likeCounter
      );
    });

    if (this._cardOwner._id === this._user._id) {
      deleteBtn.addEventListener("click", () => {
        this._handleDeleteClick(this._cardId);
      });
    } else {
      deleteBtn.remove();
    }

    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._cardName, this._cardLink);
    });
  }

  removeCard() {
    this._element.closest(this._cardElement).remove();
  }
}
