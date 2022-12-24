const profilePopup = document.querySelector(".pop-up_type_edit-profile");
const profileFormElement = profilePopup.querySelector(".pop-up__form");
const popupProfileCloseButton = profilePopup.querySelector(
  ".pop-up__close-button"
);
const nameInput = document.querySelector(".pop-up__input_type_name");
const jobInput = document.querySelector(".pop-up__input_type_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const editButton = document.querySelector(".profile__edit-button");
const addNewImageButton = document.querySelector(".profile__add-button");
const addImagePopup = document.querySelector(".pop-up_type_new-image");
const closeButtonInNewImagePopup = addImagePopup.querySelector(
  ".pop-up__close-button"
);
const imageNameInput = document.querySelector(".pop-up__input_type_card-name");
const imageLinkInput = document.querySelector(".pop-up__input_type_image-link");
const card = document.querySelector(".card");
const cardsArea = document.querySelector(".cards");
const newCardForm = document.querySelector(".pop-up__form_type_new-image");
const fullScreenPopup = document.querySelector(
  ".pop-up_type_full-screen-image"
);
const closeButtonFullScreenPopup = fullScreenPopup.querySelector(
  ".pop-up__close-button"
);
const imagePopup = fullScreenPopup.querySelector(".pop-up__scale-image");
const imageDescription = fullScreenPopup.querySelector(
  ".pop-up__image-description"
);
const placesTemplate = document
  .querySelector("#place")
  .content.querySelector(".card");

function openPopup(popup) {
  popup.classList.add("pop-up_opened");
}

function closePopup(popup) {
  popup.classList.remove("pop-up_opened");
}

function editProfile() {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
editButton.addEventListener("click", editProfile);

function closeEditProfile() {
  closePopup(profilePopup);
}
popupProfileCloseButton.addEventListener("click", closeEditProfile);

function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeEditProfile();
}
profileFormElement.addEventListener("submit", submitProfileForm);

function addImage() {
  openPopup(addImagePopup);
  newCardForm.reset();
}
addNewImageButton.addEventListener("click", addImage);

function closeAddImagePopup() {
  closePopup(addImagePopup);
}
closeButtonInNewImagePopup.addEventListener("click", closeAddImagePopup);

function createCard(element) {
  const card = placesTemplate.cloneNode(true);
  const trashButton = card.querySelector(".card__trash-button");
  const likeButton = card.querySelector(".card__like-button");
  const cardImage = card.querySelector(".card__image");
  cardImage.alt = imageNameInput.value;
  cardImage.src = element.link;
  card.querySelector(".card__title").textContent = element.name;
  trashButton.addEventListener("click", (evt) => deleteCard(evt));
  likeButton.addEventListener("click", (evt) => setCardLike(evt));
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

function closeScaleImagePopup() {
  closePopup(fullScreenPopup);
}
closeButtonFullScreenPopup.addEventListener("click", closeScaleImagePopup);

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

newCardForm.addEventListener("submit", (evt) => handleAddCardSubmit(evt));

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
