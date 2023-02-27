export default class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._userNameSelector = document.querySelector(userNameSelector);
    this._userJobSelector = document.querySelector(userJobSelector);
  }
  // метод, который возвращает объект с данными пользователя.
  // Этот метод пригодится когда данные пользователя нужно будет подставить
  // в форму при открытии.
  getUserInfo() {
    return {
      name: this._userNameSelector.textContent,
      job: this._userJobSelector.textContent,
    };
  }
  // метод, который принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo({ name, job }) {
    this._userNameSelector.textContent = name;
    this._userJobSelector.textContent = job;
  }
}
