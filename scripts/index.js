// Открыть pop-up

let editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", function () {
  let openPopup = document.querySelector(".pop-up");
  openPopup.classList.add("pop-up_opened");
});

// Закрыть pop-up

let closeButton = document.querySelector(".pop-up__close-button");
function closeForm() {
  let closePopup = document.querySelector(".pop-up");
  closePopup.classList.remove("pop-up_opened");
}
closeButton.addEventListener("click", closeForm);

// Редактирование формы

let formElement = document.querySelector(".pop-up__form");
let nameInput = document.querySelector(".pop-up__name");
let jobInput = document.querySelector(".pop-up__job");

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameInput.value;
  jobInput.value;

  let profileName = document.querySelector(".profile__name");
  let profileJob = document.querySelector(".profile__job");

  profileName.textContent = `${nameInput.value}`;
  profileJob.textContent = `${jobInput.value}`;
  closeForm();
}

formElement.addEventListener("submit", handleFormSubmit);
