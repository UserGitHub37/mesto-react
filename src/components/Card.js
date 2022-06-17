import React from 'react';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

function Card ({card, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__remove-button ${isOwn ? '' : 'card__remove-button_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `card__heart ${isLiked ? 'card__heart_active' : ''}`
  );

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
      </div>
      <button type="button" aria-label="Удалить карточку" className={cardDeleteButtonClassName}></button>
      <div className="card__title-wrapper">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-wrapper">
          <button type="button" aria-label='Отметка "Нравится"' className={cardLikeButtonClassName}></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );

}

export default Card;
