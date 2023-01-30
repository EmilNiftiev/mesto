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
const card = document.querySelector(".card");
const cardsArea = document.querySelector(".cards");
const newCardForm = document.querySelector(".pop-up__form_type_new-image");
const fullScreenPopup = document.querySelector(
  ".pop-up_type_full-screen-image"
);
const imagePopup = fullScreenPopup.querySelector(".pop-up__scale-image");
const imageDescription = fullScreenPopup.querySelector(
  ".pop-up__image-description"
);
const placesTemplate = document
  .querySelector("#place")
  .content.querySelector(".card");

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

/* Я написал это в отзыве, но продублирую и сюда, ибо не знаю,
доступны ли Вам наши отзывы для просмотра) Спасибо большое за эту подсказку!
Действительно, это позволяет избавиться от большого количества лишнего кода и
длиннючих названий переменных) Буду иметь ввиду на будущее)
Добра Вам и удачи! :))) */

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
  resetValidation(profileFormElement, validationSet);
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
  resetValidation(newCardForm, validationSet);
  openPopup(addImagePopup);
  saveNewCardButton.setAttribute("disabled", true);
});

function createCard(element) {
  const card = placesTemplate.cloneNode(true);
  const trashButton = card.querySelector(".card__trash-button");
  const likeButton = card.querySelector(".card__like-button");
  const cardImage = card.querySelector(".card__image");
  cardImage.alt = imageNameInput.value;
  cardImage.src = element.link;
  card.querySelector(".card__title").textContent = element.name;
  trashButton.addEventListener("click", deleteCard);
  likeButton.addEventListener("click", setCardLike);
  cardImage.addEventListener("click", () =>
    scaleImage(element.name, element.link)
  );
  return card;
}

function scaleImage(name, link) {
  imagePopup.src = link;
  imagePopup.alt = name;
  imageDescription.textContent = name;
  openPopup(fullScreenPopup);
}

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

function setCardLike(evt) {
  evt.target.classList.toggle("card__like-button_active");
}

function deleteCard(evt) {
  const deleteCard = evt.target.closest(".card");
  deleteCard.remove();
}

initialCards.forEach(function (item) {
  cardsArea.prepend(createCard(item));
});

// Слушатели
profileFormElement.addEventListener("submit", submitProfileForm);
newCardForm.addEventListener("submit", handleAddCardSubmit);
