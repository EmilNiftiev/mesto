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

let popup = document.querySelector(".pop-up");
let formElement = document.querySelector(".pop-up__form");
let nameInput = document.querySelector(".pop-up__input_type_name");
let jobInput = document.querySelector(".pop-up__input_type_job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let editButton = document.querySelector(".profile__edit-button");
let profileCloseButton = document.querySelector(".pop-up__close-button");

const addNewImageButton = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector(".pop-up_type_edit-profile");
const addImagePopup = document.querySelector(".pop-up_type_new-image");
const closeButtonInNewImagePopup = addImagePopup.querySelector(
  ".pop-up__close-button"
);
const fullScreenImagePopup = document.querySelector(
  ".pop-up_type_full-screen-image"
);
const imageNameInput = document.querySelector(".pop-up__input_type_card-name");
const ImageLinkInput = document.querySelector(".pop-up__input_type_image-link");
const card = document.querySelector(".card");

function openPopup(popup) {
  popup.classList.add("pop-up_opened");
}

function closePopup(popup) {
  popup.classList.remove("pop-up_opened");
}

// Открыть pop-up редактирования профиля

function editProfile() {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
editButton.addEventListener("click", editProfile);

// Закрыть pop-up редактирования профиля

function closeEditProfile() {
  closePopup(profilePopup);
}
profileCloseButton.addEventListener("click", closeEditProfile);

// Редактирование формы

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeEditProfile();
}
formElement.addEventListener("submit", handleFormSubmit);

function addImage() {
  openPopup(addImagePopup);
  imageNameInput.value = "";
  ImageLinkInput.value = "";
}
addNewImageButton.addEventListener("click", addImage);

function closeAddImagePopup() {
  closePopup(addImagePopup);
}
closeButtonInNewImagePopup.addEventListener("click", closeAddImagePopup);

// Добавление новой карточки

const placesTemplate = document.querySelector("#place").content;
const places = document.querySelector("#place");

function createCard(element) {
  const card = placesTemplate.querySelector(".card").cloneNode(true);
  const trashButton = card.querySelector(".card__trash-button");
  const likeButton = card.querySelector(".card__like-button");
  card.querySelector(".card__image").src = element.link;
  card.querySelector(".card__title").textContent = element.name;
  trashButton.addEventListener("click", (evt) => deleteCard(evt));
  likeButton.addEventListener(".click", (evt) => setCardLike(evt));
  return element;
}

function saveNewCard() {
  newCard = {
    name: imageNameInput.value,
    link: ImageLinkInput.value,
  };
  cardToAdd = createCard(newCard);
  card.prepend(cardToAdd);
}
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  saveNewCard();
}

const newCardSaveBtn = document.querySelector(
  ".pop-up__save-button_type_new-image"
);

newCardSaveBtn.addEventListener("submit", (evt) => handleAddCardSubmit(evt));

function setCardLike(evt) {
  evt.target.classList.toggle("card__like-button_active");
}

function deleteCard(evt) {
  const deleteCard = evt.target.closest(".card");
  deleteCard.remove();
}

initialCards.map(function (item) {
  card.prepend(createCard(item));
});
