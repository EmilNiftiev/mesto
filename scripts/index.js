let popup = document.querySelector(".pop-up");
let formElement = document.querySelector(".pop-up__form");
let nameInput = document.querySelector(".pop-up__input_type_name");
let jobInput = document.querySelector(".pop-up__input_type_job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");

// Открыть pop-up

let editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  popup.classList.add("pop-up_opened");
});

// Закрыть pop-up

let closeButton = document.querySelector(".pop-up__close-button");
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
