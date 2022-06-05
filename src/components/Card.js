function Card ({src, title, likes}) {

  return (
    <li className="card">
      <div className="card__image-wrapper">
        <img src={src} alt={title} className="card__image"/>
      </div>
      <button type="button" aria-label="Удалить карточку" className="card__remove-button"></button>
      <div className="card__title-wrapper">
        <h2 className="card__title">{title}</h2>
        <div className="card__like-wrapper">
          <button type="button" aria-label='Отметка "Нравится"' className="card__heart"></button>
          <div className="card__like-counter">{likes.length}</div>
        </div>
      </div>
    </li>
  );

}


  export default Card;
