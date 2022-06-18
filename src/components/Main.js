import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';


function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
/*
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
   */
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
}


function handleCardDelete(card) {
  api.deleteCard(card._id).then(() => {
    setCards((state) => state.filter((c) => c._id !== card._id));
  })
  .catch(err => console.log(err));
}


/*
  React.useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch(err => console.log(err));
  }, []);
 */

  React.useEffect(() => {
    api.getInitialCards()
    .then((initialCards) => {
      setCards(initialCards);
    })
    .catch(err => console.log(err));
  }, []);


  return (
    <main className="content page__content">

        <section className="profile">
          <div className="profile__image-wrapper">
              <img src={currentUser.avatar} alt="Картинка пользователя" className="profile__image"/>
              <button type="button" onClick={onEditAvatar} aria-label="Редактировать фото профиля" className="profile__image-edit-button"></button>
          </div>
          <div className="profile__text-wrapper">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__info">{currentUser.about}</p>
          </div>
          <button type="button" onClick={onEditProfile} aria-label="Редактировать профиль" className="profile__edit-button"></button>
          <button type="button" onClick={onAddPlace} aria-label="Добавить изображение" className="profile__add-button"></button>
        </section>

        <section className="elements content__elements" aria-label="Фотографии различных мест">
          <ul className="elements__wrapper">

            {cards.map((card) => (
              <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
            ))}

          </ul>
        </section>

      </main>
  );

}

export default Main;
