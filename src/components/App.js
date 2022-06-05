import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard ] = React.useState(null);


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }


  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }


  function handleCardClick (card) {
    setSelectedCard(card);
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />


      <PopupWithForm title='Обновить аватар' name='avatar' isOpen={isEditAvatarPopupOpen} buttonName='Сохранить' onClose={closeAllPopups}>
        <input className="popup__input popup__input_field_image-profile" id="link-profile-input" type="url" name="profileImageLink" placeholder="Ссылка на фото профиля" required/>
        <span className="popup__error-message link-profile-input-error"></span>
      </PopupWithForm>


      <PopupWithForm title='Редактировать профиль' name='profile' isOpen={isEditProfilePopupOpen} buttonName='Сохранить' onClose={closeAllPopups}>
        <input className="popup__input popup__input_field_name-profile" id="name-profile-input" type="text" name="userName" placeholder="Имя" minLength="2" maxLength="40" required/>
        <span className="popup__error-message name-profile-input-error"></span>
        <input className="popup__input popup__input_field_about-profile" id="about-profile-input" type="text" name="aboutUser" placeholder="О себе" minLength="2" maxLength="200" required/>
        <span className="popup__error-message about-profile-input-error"></span>
      </PopupWithForm>


      <PopupWithForm title='Новое место' name='place' isOpen={isAddPlacePopupOpen} buttonName='Создать' onClose={closeAllPopups}>
        <input className="popup__input popup__input_field_name-place" id="name-place-input" type="text" name="placeName" placeholder="Название" minLength="2" maxLength="30" required/>
        <span className="popup__error-message name-place-input-error"></span>
        <input className="popup__input popup__input_field_link-place" id="link-place-input" type="url" name="placeImageLink" placeholder="Ссылка на картинку" required/>
        <span className="popup__error-message link-place-input-error"></span>
      </PopupWithForm>


      <PopupWithForm title='Вы уверены?' name='confirmation' isOpen={isDeleteCardPopupOpen} buttonName='Да' onClose={closeAllPopups}/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </>
  );
}

export default App;
