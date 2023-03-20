export default class Api {
  constructor(options) {
    this._serverUrl = options.serverUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(this._serverUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch(this._serverUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    });
  }

  getInitialData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  // Отправка информации о пользователе

  setUserInfo(name, job) {
    return fetch(this._serverUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    });
  }

  // Создание карточки

  createUserInfo(name, link) {
    return fetch(this._serverUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    });
  }

  // Удаление карточки

  deleteCard(id) {
    return fetch(this._serverUrl + "/cards/" + id, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    });
  }

  // Поставить лайк

  setCardLike(id) {
    return fetch(this._serverUrl + "/cards/likes/" + id, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    });
  }

  // Убрать лайк

  deleteCardLike(id) {
    return fetch(this._serverUrl + "/cards/likes/" + id, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    });
  }

  // Изменить аватар

  updateAvatar(url) {
    return fetch(this._serverUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    });
  }
}
