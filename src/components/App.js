import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [avatarUpdateButtonName, setAvatarUpdateButtonName] = React.useState('Сохранить');
  const [userUpdateButtonName, setUserUpdateButtonName] = React.useState('Сохранить');
  const [placeUpdateButtonName, setPlaceUpdateButtonName] = React.useState('Создать');
  const [cardToDelete, setCardToDelete] = React.useState(null);


  React.useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch(err => console.log(err));

    api.getCardList()
    .then((initialCards) => {
      setCards(initialCards);
    })
    .catch(err => console.log(err));
  }, []);


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }


  function handleCardDelete() {
    api.deleteCard(cardToDelete._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
      closeAllPopups();
    })
    .catch(err => console.log(err));
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setCardToDelete(null);
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


  function handleUpdateAvatar (inputData) {
    setAvatarUpdateButtonName('Сохранение...');
    api.setUserAvatar(inputData)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(() => {
      setAvatarUpdateButtonName('Сохранить');
    });
  }


  function handleUpdateUser (inputData) {
    setUserUpdateButtonName('Сохранение...');
    api.setUserInfo(inputData)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(() => {
      setUserUpdateButtonName('Сохранить');
    });
  }


  function handleAddPlaceSubmit (inputData) {
    setPlaceUpdateButtonName('Сохранение...');
    api.addCard(inputData)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(() => {
      setPlaceUpdateButtonName('Создать');
    });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={setCardToDelete}/>
      <Footer />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} buttonName={avatarUpdateButtonName}/>

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} buttonName={userUpdateButtonName}/>

      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} buttonName={placeUpdateButtonName}/>

      <PopupWithForm title='Вы уверены?' name='confirmation' isOpen={Boolean(cardToDelete)} buttonName='Да' onClose={closeAllPopups} onSubmit={handleCardDelete}/>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  );
}

export default App;
