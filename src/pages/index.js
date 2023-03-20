import { initialCards, validationSet } from "../constants/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import "./index.css";

const profilePopup = document.querySelector(".pop-up_type_edit-profile");
const profileFormElement = profilePopup.querySelector(".pop-up__form");
const nameInput = document.querySelector(".pop-up__input_type_name");
const jobInput = document.querySelector(".pop-up__input_type_job");
const editButton = document.querySelector(".profile__edit-button");
const addNewImageButton = document.querySelector(".profile__add-button");
const imageNameInput = document.querySelector(".pop-up__input_type_card-name");
const imageLinkInput = document.querySelector(".pop-up__input_type_image-link");
const newCardForm = document.querySelector(".pop-up__form_type_new-image");
const newAvatarForm = document.querySelector(".pop-up__form_type_new-avatar");
const avatarEditButton = document.querySelector(".profile__cover");

//////////////////////////////////////////////////////////////////////////
const profileValidator = new FormValidator(validationSet, profileFormElement);
const newCardValidator = new FormValidator(validationSet, newCardForm);
const newAvatarValidator = new FormValidator(validationSet, newAvatarForm);

// Экземпляр попапа для проофиля
const editProfilePopup = new PopupWithForm(
  ".pop-up_type_edit-profile",
  submitProfileForm
);

// Экземпляр попапа для добавления карточки
const addImagePopup = new PopupWithForm(".pop-up_type_new-image", submitCardForm);

// Экземпляр попапа для увеличения картинки
const scaleImagePopup = new PopupWithImage(".pop-up_type_full-screen-image");

// Экземпляр попапа обновления аватара
const newAvatarPopup = new PopupWithForm(".pop-up_type_new-avatar", (inputUrl) => {
  // submitBtn.textContent = 'Сохранение...';
  const [url] = inputUrl;
  api
    //________________________________________________________________________________ДОДЕЛАТЬ ТУТ
    .updateAvatar(url)
    .then((res) => {
      profile.setUserInfo(res);
      newAvatarPopup.close();
      // submitBtn.textContent = 'Сохраненить';
    })
    .catch((error) => {
      console.log(error);
    });
});

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
  avatarSelector: ".profile__avatar",
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
newAvatarValidator.enableValidation();

// Слушатели кнопок
editButton.addEventListener("click", () => {
  profileValidator.toggleButtonState();
  profileValidator.resetValidation();
  editProfilePopup.open();
  handleProfile();
});
addNewImageButton.addEventListener("click", () => {
  newCardValidator.toggleButtonState();
  newCardValidator.resetValidation();
  addImagePopup.open();
});
avatarEditButton.addEventListener("click", () => {
  newAvatarValidator.resetValidation();
  newAvatarPopup.open();
});
