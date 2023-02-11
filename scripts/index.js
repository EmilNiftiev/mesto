import { initialCards, validationSet } from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const popups = document.querySelectorAll(".pop-up");
const profilePopup = document.querySelector(".pop-up_type_edit-profile");
const profileSaveButon = document.querySelector(".pop-up__save-button");
const profileFormElement = profilePopup.querySelector(".pop-up__form");
const nameInput = document.querySelector(".pop-up__input_type_name");
const jobInput = document.querySelector(".pop-up__input_type_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const editButton = document.querySelector(".profile__edit-button");
const addNewImageButton = document.querySelector(".profile__add-button");
const addImagePopup = document.querySelector(".pop-up_type_new-image");
const saveNewCardButton = document.querySelector(
  ".pop-up__save-button_type_new-image"
);
const imageNameInput = document.querySelector(".pop-up__input_type_card-name");
const imageLinkInput = document.querySelector(".pop-up__input_type_image-link");
const cardsArea = document.querySelector(".cards");
const newCardForm = document.querySelector(".pop-up__form_type_new-image");
const fullScreenPopup = document.querySelector(
  ".pop-up_type_full-screen-image"
);
const imagePopup = fullScreenPopup.querySelector(".pop-up__scale-image");
const imageDescription = fullScreenPopup.querySelector(
  ".pop-up__image-description"
);

const profileValidator = new FormValidator(validationSet, profileFormElement);
const newCardValidator = new FormValidator(validationSet, newCardForm);

// Закрытие по кнопке ESC
function closeByEsc(evt) {
  evt.preventDefault();
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".pop-up_opened");
    closePopup(openedPopup);
  }
}

// Универсальный способ закрытия попапов
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("pop-up_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("pop-up__close-button")) {
      closePopup(popup);
    }
  });
});

function openPopup(popup) {
  document.addEventListener("keyup", closeByEsc);
  popup.classList.add("pop-up_opened");
}

function closePopup(popup) {
  document.removeEventListener("keyup", closeByEsc);
  popup.classList.remove("pop-up_opened");
}

editButton.addEventListener("click", function () {
  openPopup(profilePopup);
  profileValidator.resetValidation();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  profileSaveButon.setAttribute("disabled", true);
});

function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

addNewImageButton.addEventListener("click", function () {
  newCardForm.reset();
  newCardValidator.resetValidation();
  openPopup(addImagePopup);
  saveNewCardButton.setAttribute("disabled", true);
});

function saveNewCard() {
  const newCard = {
    name: imageNameInput.value,
    link: imageLinkInput.value,
  };
  const cardToAdd = createCard(newCard);
  cardsArea.prepend(cardToAdd);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  saveNewCard();
  closePopup(addImagePopup);
}

////////////////////////////////////////////////////////////////////////////////////////

function scaleImage(name, link) {
  imagePopup.src = link;
  imagePopup.alt = name;
  imageDescription.textContent = name;
  openPopup(fullScreenPopup);
}

function createCard(item) {
  const newCard = new Card(item, "#place", scaleImage);
  return newCard.generateCard();
}

initialCards.forEach((item) => {
  const card = new Card(item, "#place", scaleImage);
  const cardElement = card.generateCard();
  document.querySelector(".cards").prepend(cardElement);
});

function enableFormsValidation(settings) {
  const forms = Array.from(document.querySelectorAll(".pop-up__form"));
  forms.forEach((form) => {
    const newValidator = new FormValidator(settings, form);
    newValidator.enableValidation();
  });
}

enableFormsValidation(validationSet);

// Слушатели
profileFormElement.addEventListener("submit", submitProfileForm);
newCardForm.addEventListener("submit", handleAddCardSubmit);
