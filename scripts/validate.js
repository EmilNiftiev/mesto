const validationSet = {
  formSelector: ".pop-up__form",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__save-button",
  inputErrorClass: "pop-up__input_type_error", // подчеркивает input с ошибкой
  errorClass: "pop-up__input-error", // span с ошибкой
  showErrorText: "pop-up__input-error_active", // opacity: 1;
};

const showInputError = (form, input, set) => {
  const error = form.querySelector(`#${input.name}-error`);
  error.classList.add(set.showErrorText); // делает текст ошибки видимым
  input.classList.add(set.inputErrorClass); // подчеркивает input с ошибкой
  error.textContent = input.validationMessage; // подставляет текст с ошибкой
};

const hideInputError = (form, input, set) => {
  const error = form.querySelector(`#${input.name}-error`);
  error.classList.remove(set.showErrorText);
  input.classList.remove(set.inputErrorClass);
  error.textContent = "";
};

// Функция проверки валидности
const checkInputValidity = (form, input, set) => {
  if (!input.validity.valid) {
    showInputError(form, input, set);
  } else {
    hideInputError(form, input, set);
  }
};

// Добавление слушателей всем полям формы
const setEventListeners = (form, set) => {
  const inputList = Array.from(form.querySelectorAll(set.inputSelector));
  const submitButton = form.querySelector(set.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", function () {
      checkInputValidity(form, input, set);
      toggleButtonState(inputList, submitButton);
    });
  });
};

// Включение валидации
function enableValidation(set) {
  const formList = Array.from(document.querySelectorAll(set.formSelector));
  formList.forEach(function (form) {
    form.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(form, set);
  });
}

enableValidation(validationSet);

// Сброс ошибок при повторном открытии
function resetValidation(form, set) {
  const inputList = Array.from(form.querySelectorAll(set.inputSelector));
  inputList.forEach(function (input) {
    hideInputError(form, input, set);
  });
}

// Состояние кнопки
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// второй вариант

// function hasInvalidInput(inputList) {
//   return inputList.some((input) => !input.validity.valid);
// }

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.removeAttribute("disabled");
  }
};
