import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup ({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }


  return (
    <PopupWithForm title='Обновить аватар' name='avatar' isOpen={isOpen} buttonName='Сохранить' onClose={onClose} onSubmit={handleSubmit}>
      <input ref={inputRef} className="popup__input popup__input_field_image-profile" id="link-profile-input" type="url" name="profileImageLink" placeholder="Ссылка на фото профиля" required/>
      <span className="popup__error-message link-profile-input-error"></span>
    </PopupWithForm>
  );

}

export default EditAvatarPopup;
