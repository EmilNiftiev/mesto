import { initialCards, validationSet } from "../constants/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

// const popups = document.querySelectorAll(".pop-up");
const profilePopup = document.querySelector(".pop-up_type_edit-profile");
// const profileSaveButon = document.querySelector(".pop-up__save-button");
const profileFormElement = profilePopup.querySelector(".pop-up__form");
const nameInput = document.querySelector(".pop-up__input_type_name");
const jobInput = document.querySelector(".pop-up__input_type_job");
// const profileName = document.querySelector(".profile__name");
// const profileJob = document.querySelector(".profile__job");
const editButton = document.querySelector(".profile__edit-button");
const addNewImageButton = document.querySelector(".profile__add-button");
// const addImagePopup = document.querySelector(".pop-up_type_new-image");
// const saveNewCardButton = document.querySelector(
//   ".pop-up__save-button_type_new-image"
// );
const imageNameInput = document.querySelector(".pop-up__input_type_card-name");
const imageLinkInput = document.querySelector(".pop-up__input_type_image-link");
// const cardsArea = document.querySelector(".cards");
const newCardForm = document.querySelector(".pop-up__form_type_new-image");
// const fullScreenPopup = document.querySelector(
//   ".pop-up_type_full-screen-image"
// );
// const imagePopup = fullScreenPopup.querySelector(".pop-up__scale-image");
// const imageDescription = fullScreenPopup.querySelector(
//   ".pop-up__image-description"
// );

//////////////////////////////////////////////////////////////////////////
const profileValidator = new FormValidator(validationSet, profileFormElement);
const newCardValidator = new FormValidator(validationSet, newCardForm);

// Экземпляр попапа для проофиля
const editProfilePopup = new PopupWithForm(
  ".pop-up_type_edit-profile",
  submitProfileForm
);

// Экземпляр попапа для добавления карточки
const addImagePopup = new PopupWithForm(
  ".pop-up_type_new-image",
  submitCardForm
);

// Экземпляр попапа для увеличения картинки
const scaleImagePopup = new PopupWithImage(".pop-up_type_full-screen-image");

// Экземпляр класса Section для добавления карточек
const cardsArray = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      addNewCard(createCard(card.name, card.link));
    },
  },
  ".cards"
);

// Управление отображением информации о пользователе
const profile = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__job",
});

// Заполняем поля формы исходными данными
function handleProfile() {
  const profileData = profile.getUserInfo();
  nameInput.value = profileData.name;
  jobInput.value = profileData.job;
}

// Сохранить новые данные профиля
function submitProfileForm(data) {
  profile.setUserInfo(data);
}

// Слушатели кнопок редактирования и добавления карточек
editButton.addEventListener("click", () => {
  profileValidator.resetValidation();
  editProfilePopup.open();
  handleProfile();
});
addNewImageButton.addEventListener("click", () => {
  newCardValidator.resetValidation();
  addImagePopup.open();
});

// Создание карточки
function createCard(name, link) {
  const card = new Card(name, link, "#place", handleCardClick);
  return card.generateCard();
}

// Добавление карточки
function addNewCard(card) {
  cardsArray.addItem(card);
}
cardsArray.renderItems();

// Добавление новой карточки
function submitCardForm() {
  const card = createCard(imageNameInput.value, imageLinkInput.value);
  addNewCard(card);
}

// Увеличить картинку
function handleCardClick(name, link) {
  scaleImagePopup.open(name, link);
}

// Включение валидации
profileValidator.enableValidation();
newCardValidator.enableValidation();

//////////////////////////////////////////////////////////////////////////

// // Закрытие по кнопке ESC
// function closeByEsc(evt) {
//   evt.preventDefault();
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".pop-up_opened");
//     closePopup(openedPopup);
//   }
// }

// // Универсальный способ закрытия попапов
// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("pop-up_opened")) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains("pop-up__close-button")) {
//       closePopup(popup);
//     }
//   });
// });

// function openPopup(popup) {
//   document.addEventListener("keyup", closeByEsc);
//   popup.classList.add("pop-up_opened");
// }

// function closePopup(popup) {
//   document.removeEventListener("keyup", closeByEsc);
//   popup.classList.remove("pop-up_opened");
// }

// editButton.addEventListener("click", function () {
//   openPopup(profilePopup);
//   profileValidator.resetValidation();
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   profileSaveButon.setAttribute("disabled", true);
// });

// function submitProfileForm(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(profilePopup);
// }

// addNewImageButton.addEventListener("click", function () {
//   newCardForm.reset();
//   newCardValidator.resetValidation();
//   openPopup(addImagePopup);
//   saveNewCardButton.setAttribute("disabled", true);
// });

// function saveNewCard() {
//   const newCard = {
//     name: imageNameInput.value,
//     link: imageLinkInput.value,
//   };
//   const cardToAdd = createCard(newCard);
//   cardsArea.prepend(cardToAdd);
// }

// function handleAddCardSubmit(evt) {
//   evt.preventDefault();
//   saveNewCard();
//   closePopup(addImagePopup);
// }

// ////////////////////////////////////////////////////////////////////////////////////////

// function scaleImage(name, link) {
//   imagePopup.src = link;
//   imagePopup.alt = name;
//   imageDescription.textContent = name;
//   openPopup(fullScreenPopup);
// }

// function createCard(item) {
//   const newCard = new Card(item, "#place", scaleImage);
//   return newCard.generateCard();
// }

// initialCards.forEach((item) => {
//   const card = new Card(item, "#place", scaleImage);
//   const cardElement = card.generateCard();
//   document.querySelector(".cards").prepend(cardElement);
// });

// function enableFormsValidation(settings) {
//   const forms = Array.from(document.querySelectorAll(".pop-up__form"));
//   forms.forEach((form) => {
//     const newValidator = new FormValidator(settings, form);
//     newValidator.enableValidation();
//   });
// }

// enableFormsValidation(validationSet);

// // Слушатели
// profileFormElement.addEventListener("submit", submitProfileForm);
// newCardForm.addEventListener("submit", handleAddCardSubmit);
