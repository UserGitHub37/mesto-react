function ImagePopup () {

  return (
    <div className="popup popup_image">
      <div className="popup__container popup__container_type_image">
        <button type="button" aria-label="Закрыть окно" className="popup__close-button"></button>
        <img src="#" alt="Увеличенное фото места" className="popup__enlarged-image"/>
        <h2 className="popup__title popup__title_type_image">Название изображения</h2>
      </div>
    </div>
  );

}


  export default ImagePopup;
