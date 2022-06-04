import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }


  function handleEditAvatarClick () {
    const popupImageProfile = document.querySelector('.popup_avatar');
    popupImageProfile.classList.add('popup_opened');
  }

  function handleEditProfileClick () {
    const popupProfile = document.querySelector('.popup_profile');
    popupProfile.classList.add('popup_opened');
  }

  function handleAddPlaceClick () {
    const popupPlace = document.querySelector('.popup_place');
    popupPlace.classList.add('popup_opened');
  }



  return (
    <>
      <template className="card-template">
        <li className="card">
          <div className="card__image-wrapper">
            <img className="card__image"/>
          </div>
          <button type="button" aria-label="Удалить карточку" className="card__remove-button"></button>
          <div className="card__title-wrapper">
            <h2 className="card__title"></h2>
            <div className="card__like-wrapper">
              <button type="button" aria-label='Отметка "Нравится"' className="card__heart"></button>
              <div className="card__like-counter"></div>
            </div>
          </div>
        </li>
      </template>

      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />


      <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isEditAvatarPopupOpen} buttonName={'Сохранить'}>
        <input className="popup__input popup__input_field_image-profile" id="link-profile-input" type="url" name="profileImageLink" placeholder="Ссылка на фото профиля" required/>
        <span className="popup__error-message link-profile-input-error"></span>
      </PopupWithForm>


      <PopupWithForm title={'Редактировать профиль'} name={'profile'} isOpen={isEditProfilePopupOpen} buttonName={'Сохранить'}>
        <input className="popup__input popup__input_field_name-profile" id="name-profile-input" type="text" name="userName" placeholder="Имя" minLength="2" maxLength="40" required/>
        <span className="popup__error-message name-profile-input-error"></span>
        <input className="popup__input popup__input_field_about-profile" id="about-profile-input" type="text" name="aboutUser" placeholder="О себе" minLength="2" maxLength="200" required/>
        <span className="popup__error-message about-profile-input-error"></span>
      </PopupWithForm>


      <PopupWithForm title={'Новое место'} name={'place'} isOpen={isAddPlacePopupOpen} buttonName={'Создать'}>
        <input className="popup__input popup__input_field_name-place" id="name-place-input" type="text" name="placeName" placeholder="Название" minLength="2" maxLength="30" required/>
        <span className="popup__error-message name-place-input-error"></span>
        <input className="popup__input popup__input_field_link-place" id="link-place-input" type="url" name="placeImageLink" placeholder="Ссылка на картинку" required/>
        <span className="popup__error-message link-place-input-error"></span>
      </PopupWithForm>

    </>
  );
}

export default App;
