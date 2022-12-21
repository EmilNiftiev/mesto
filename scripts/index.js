let popup = document.querySelector(".pop-up");
let formElement = document.querySelector(".pop-up__form");
let nameInput = document.querySelector(".pop-up__input_type_name");
let jobInput = document.querySelector(".pop-up__input_type_job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".pop-up__close-button");
const addNewImagePopup = document.querySelector(".pop-up_type_new-image");
const addNewImageButton = document.querySelector(".profile__add-button");
const closeButtonNewImagePopup = addNewImagePopup.querySelector(
  ".pop-up__close-button"
);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Открыть pop-up добавления карточки

function openAddImagePopup() {
  addNewImagePopup.classList.add("pop-up_opened");
}
addNewImageButton.addEventListener("click", openAddImagePopup);

// Закрыть pop-up добавления карточки

function closeAddImagePopup() {
  addNewImagePopup.classList.remove("pop-up_opened");
}

closeButtonNewImagePopup.addEventListener("click", closeAddImagePopup);

// Открыть pop-up редактирования профиля

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add("pop-up_opened");
}
editButton.addEventListener("click", openPopup);

// Закрыть pop-up редактирования профиля

function closeForm() {
  popup.classList.remove("pop-up_opened");
}
closeButton.addEventListener("click", closeForm);

// Редактирование формы

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeForm();
}
formElement.addEventListener("submit", handleFormSubmit);
