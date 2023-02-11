export default class FormValidator {
  constructor(validationSet, form) {
    this._validationSet = validationSet;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(validationSet.inputSelector)
    );
    this._submitButton = this._form.querySelector(
      validationSet.submitButtonSelector
    );
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  _showInputError(input, errorMessage) {
    const error = this._form.querySelector(`#${input.name}-error`);
    input.classList.add(this._validationSet.inputErrorClass); // подчеркивает input с ошибкой
    error.textContent = errorMessage; // подставляет текст с ошибкой
  }

  _hideInputError(input) {
    const error = this._form.querySelector(`#${input.name}-error`);
    input.classList.remove(this._validationSet.inputErrorClass);
    error.textContent = "";
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.setAttribute("disabled", true);
    } else {
      this._submitButton.removeAttribute("disabled");
    }
  }
  _resetValidation() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }
}
