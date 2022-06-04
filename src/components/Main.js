function Main ({onEditProfile, onAddPlace, onEditAvatar}) {

  return (
    <main className="content page__content">

        <section className="profile">
          <div className="profile__image-wrapper">
              <img src="#" alt="Картинка пользователя" className="profile__image"/>
              <button type="button" onClick={onEditAvatar} aria-label="Редактировать фото профиля" className="profile__image-edit-button"></button>
          </div>
          <div className="profile__text-wrapper">
            <h1 className="profile__name"></h1>
            <p className="profile__info"></p>
          </div>
          <button type="button" onClick={onEditProfile} aria-label="Редактировать профиль" className="profile__edit-button"></button>
          <button type="button" onClick={onAddPlace} aria-label="Добавить изображение" className="profile__add-button"></button>
        </section>

        <section className="elements content__elements" aria-label="Фотографии различных мест">
          <ul className="elements__wrapper">

          </ul>
        </section>

      </main>
  );

}


  export default Main;
