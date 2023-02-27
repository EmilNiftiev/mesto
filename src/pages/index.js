import { initialCards, validationSet } from "../constants/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const profilePopup = document.querySelector(".pop-up_type_edit-profile");
const profileFormElement = profilePopup.querySelector(".pop-up__form");
const nameInput = document.querySelector(".pop-up__input_type_name");
const jobInput = document.querySelector(".pop-up__input_type_job");
const editButton = document.querySelector(".profile__edit-button");
const addNewImageButton = document.querySelector(".profile__add-button");
const imageNameInput = document.querySelector(".pop-up__input_type_card-name");
const imageLinkInput = document.querySelector(".pop-up__input_type_image-link");
const newCardForm = document.querySelector(".pop-up__form_type_new-image");

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
