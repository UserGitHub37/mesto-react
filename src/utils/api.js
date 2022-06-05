class Api {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }


  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }

  return Promise.reject(`Ошибка: ${res.status}`);
  }


  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
        method: 'GET',
        headers: this._headers,
    }).then(this._checkPromise);
  }


  changeUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
    }).then(this._checkPromise);
  }


  changeAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
    }).then(this._checkPromise);
  }


  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
        method: 'GET',
        headers: this._headers,
    }).then(this._checkPromise);
  }


  setLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
    }).then(this._checkPromise);
  }


  removeLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
    }).then(this._checkPromise);
  }


  addCard(data) {
    return fetch(`${this._baseUrl}cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
    }).then(this._checkPromise);
  }


  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
    }).then(this._checkPromise);
  }

}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41/',
  headers: {
    authorization: '7a2dc15d-d1bf-4fc7-a20c-343b3e4fd575',
    'Content-Type': 'application/json',
  }
});

export default api;