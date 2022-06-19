import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

function EditProfilePopup ({ isOpen, onClose, onUpdateUser }) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);


  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);


  function handleChangeName(e) {
    setName(e.target.value);
  }


  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }


  return (
    <PopupWithForm title='Редактировать профиль' name='profile' isOpen={isOpen} buttonName='Сохранить' onClose={onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_field_name-profile" id="name-profile-input" type="text" name="userName" placeholder="Имя" minLength="2" maxLength="40" required value={name ? name : ''} onChange={handleChangeName}/>
      <span className="popup__error-message name-profile-input-error"></span>
      <input className="popup__input popup__input_field_about-profile" id="about-profile-input" type="text" name="aboutUser" placeholder="О себе" minLength="2" maxLength="200" required value={description ? description : ''} onChange={handleChangeDescription}/>
      <span className="popup__error-message about-profile-input-error"></span>
    </PopupWithForm>

  );

}

export default EditProfilePopup;
