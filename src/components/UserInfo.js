export default class UserInfo {
  constructor({ userName, userJob, userAvatar }) {
    this._userName = document.querySelector(userName);
    this._userJob = document.querySelector(userJob);
    this._userAvatar = document.querySelector(userAvatar);
  }
  // метод, который возвращает объект с данными пользователя.
  // Этот метод пригодится когда данные пользователя нужно будет подставить
  // в форму при открытии.
  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userJob.textContent,
    };
  }
  // метод, который принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(user) {
    this._userName.textContent = user.name;
    this._userJob.textContent = user.about;
    this._userAvatar.src = user.avatar;
    this._user = user;
  }
  getUser() {
    return this._user;
  }
}
