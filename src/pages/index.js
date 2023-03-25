import { cardSet, validationSet } from "../constants/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import Api from "../components/Api.js";
import "./index.css";

const cards = document.querySelector(".cards");
const profilePopup = document.querySelector(".pop-up_type_edit-profile");
const profileFormElement = profilePopup.querySelector(".pop-up__form");
const editButton = document.querySelector(".profile__edit-button");
const addNewImageButton = document.querySelector(".profile__add-button");
const newCardForm = document.querySelector(".pop-up__form_type_new-image");
const newAvatarSection = document.querySelector(".pop-up_type_new-avatar");
const avatarEditButton = document.querySelector(".profile__cover");
const submitAvatarBtn = document.querySelector(
  ".pop-up__save-button_type_new-avatar"
);
const submitProfileBtn = document.querySelector(
  ".pop-up__save-button_type_edit-profile"
);
const imagePopup = document.querySelector(".pop-up__scale-image");
const titleImagePopup = document.querySelector(".pop-up__image-description");

const inputArray = document.querySelectorAll(".pop-up__input");

//////////////////////////////////////////////////////////////////////////
const profileValidator = new FormValidator(validationSet, profileFormElement);
const newCardValidator = new FormValidator(validationSet, newCardForm);
const newAvatarValidator = new FormValidator(validationSet, newAvatarSection);

// Экземпляр класса связи с сервером

const api = new Api({
  serverUrl: "https://mesto.nomoreparties.co/v1/cohort-61",
  headers: {
    authorization: "8e6df19e-255a-4130-b10d-a123ccd744e8",
    "Content-Type": "application/json",
  },
});

// Получить данные с сервера

api
  .getInitialData()
  .then((data) => {
    const [initialCardsData, initialUserData] = data;
    profile.setUserInfo(initialUserData);
    cardsArray.renderItems(initialCardsData.reverse());
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}!`);
  });

// Экземпляр попапа для проофиля
const editProfilePopup = new PopupWithForm(
  ".pop-up_type_edit-profile",
  (inputsValue) => {
    submitProfileBtn.textContent = "Сохранение...";
    const [name, job] = inputsValue;
    api
      .setUserInfo(name, job)
      .then((res) => {
        profile.setUserInfo(res);
        editProfilePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}!`);
      })
      .finally(() => {
        submitProfileBtn.textContent = "Сохранить";
      });
  }
);

// Экземпляр попапа для добавления карточки
const addImagePopup = new PopupWithForm(
  ".pop-up_type_new-image",
  (inputsValue) => {
    const user = {};
    [user.name, user.link] = inputsValue;
    api
      .createUserInfo(user.name, user.link)
      .then((res) => {
        const newCard = createCard(res);
        cardsArray.addItem(newCard);
        addImagePopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}!`);
      });
  }
);

// Экземпляр попапа для увеличения картинки

const scaleImagePopup = new PopupWithImage(
  ".pop-up_type_full-screen-image",
  imagePopup,
  titleImagePopup
);

// Экземпляр попапа обновления аватара
const newAvatarPopup = new PopupWithForm(
  ".pop-up_type_new-avatar",
  (inputUrl) => {
    submitAvatarBtn.textContent = "Сохранение...";
    const [url] = inputUrl;
    api
      .updateAvatar(url)
      .then((res) => {
        profile.setUserInfo(res);
        newAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}!`);
      })
      .finally(() => {
        submitAvatarBtn.textContent = "Сохранить";
      });
  }
);

// Экземпляр класса Section для добавления карточек
const cardsArray = new Section(
  {
    renderer: (cardData) => {
      cardsArray.addItem(createCard(cardData));
    },
  },
  cards
);

// Управление отображением информации о пользователе
const profile = new UserInfo({
  userName: ".profile__name",
  userJob: ".profile__job",
  userAvatar: ".profile__avatar",
});

// Удаление карточки
const popupDeleteConfirm = new PopupWithSubmit(".pop-up_type_delete-confirm");

// Создание карточки
const createCard = (cardData) => {
  const card = new Card(
    {
      data: {
        name: cardData.name,
        link: cardData.link,
        cardId: cardData._id,
        owner: cardData.owner,
        likes: cardData.likes,
      },
      handleCardClick: (name, link) => {
        scaleImagePopup.open(name, link);
      },
      handleLikeClick: (cardInfo, likes, user, likeBtn, likesCounter) => {
        let likesOnCard = likes;
        if (likesOnCard.includes(user._id)) {
          api
            .deleteCardLike(cardInfo.cardId)
            .then((res) => {
              likeBtn.classList.remove("card__like-button_active");
              likesOnCard.pop(user._id);
              likesCounter.textContent = res.likes.length;
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}!`);
            });
        } else {
          api
            .setCardLike(cardInfo.cardId)
            .then((res) => {
              likeBtn.classList.add("card__like-button_active");
              likesOnCard.push(user._id);
              likesCounter.textContent = res.likes.length;
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}!`);
            });
        }
      },
      handleDeleteClick: (cardId) => {
        popupDeleteConfirm.open();
        popupDeleteConfirm.setSubmitHandler(() => {
          api
            .deleteCard(cardId)
            .then(() => {
              popupDeleteConfirm.close();
              card.removeCard();
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}!`);
            });
        });
      },
    },
    "#place",
    cardSet,
    profile.getUser()
  );
  return card.generateCard();
};

// Включение валидации
profileValidator.enableValidation();
newCardValidator.enableValidation();
newAvatarValidator.enableValidation();

// Слушатели кнопок
editButton.addEventListener("click", () => {
  profileValidator.toggleButtonState();
  profileValidator.resetValidation();
  editProfilePopup.open();
  const [inputName, inputJob] = inputArray;
  const { name, job } = profile.getUserInfo();
  [inputName.value, inputJob.value] = [name, job];
});

addNewImageButton.addEventListener("click", () => {
  newCardValidator.toggleButtonState();
  newCardValidator.resetValidation();
  addImagePopup.open();
});

avatarEditButton.addEventListener("click", () => {
  newAvatarValidator.toggleButtonState();
  newAvatarPopup.open();
  newAvatarValidator.resetValidation();
});

popupDeleteConfirm.setEventListeners();
