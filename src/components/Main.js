import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main ({onEditProfile, onAddPlace, onEditAvatar}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch(err => console.log(err));
  }, []);


  React.useEffect(() => {
    api.getInitialCards()
    .then((initialCards) => {
      setCards(initialCards.map((card) => ({
        src: card.link,
        title: card.name,
        likes: card.likes,
        key: card._id
      })));
    })
    .catch(err => console.log(err));
  }, []);


  return (
    <main className="content page__content">

        <section className="profile">
          <div className="profile__image-wrapper">
              <img src={userAvatar} alt="Картинка пользователя" className="profile__image"/>
              <button type="button" onClick={onEditAvatar} aria-label="Редактировать фото профиля" className="profile__image-edit-button"></button>
          </div>
          <div className="profile__text-wrapper">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__info">{userDescription}</p>
          </div>
          <button type="button" onClick={onEditProfile} aria-label="Редактировать профиль" className="profile__edit-button"></button>
          <button type="button" onClick={onAddPlace} aria-label="Добавить изображение" className="profile__add-button"></button>
        </section>

        <section className="elements content__elements" aria-label="Фотографии различных мест">
          <ul className="elements__wrapper">

            {cards.map((card) => (
              <Card {...card}/>
            ))}

          </ul>
        </section>

      </main>
  );

}


  export default Main;
