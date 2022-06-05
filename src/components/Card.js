function Card ({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
      </div>
      <button type="button" aria-label="Удалить карточку" className="card__remove-button"></button>
      <div className="card__title-wrapper">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-wrapper">
          <button type="button" aria-label='Отметка "Нравится"' className="card__heart"></button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );

}

export default Card;
