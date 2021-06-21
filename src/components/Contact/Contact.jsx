import React from "react";
import "./Contact.sass";

function Contact() {
  return (
    <div className="wrapper">
      <div className="contact">
        <div className="contact__container">
          <div className="contact__text">
            <div className="contact__title">ГДЕ МЫ НАХОДИМСЯ ?</div>
          </div>
          <div className="contact__map-container">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A3b50cc1ba461c206bf0e5fc4a2aec455ffbf43c1943ed24bc54244c72a3adf9a&amp;source=constructor"
              width="1120"
              height="531"
              frameborder="0"
            ></iframe>
          </div>
          <div className="contact__text">
            <div className="contact__title">НАШ АДРЕС </div>
            <div className="contact__addres-text">
              Кыргызская Республика 720030 г.Бишкек ул.Баялинова 146
            </div>
          </div>

          <div className="contact__text">
            <div className="contact__title">ТЕЛЕФОН</div>
            <div className="contact__phone-text">+996 (312) 88-88-82 </div>
          </div>

          <div className="contact__post1">
            <div className="contact__post-title">ПОЧТА</div>
            <div className="contact__postaddres">nnormakg@gmail.com</div>
          </div>
          <div className="contact__block">
            <div className="contact__block2">
              <div className="contact__block-title">
                <input
                  type="text"
                  className="form__control"
                  placeholder="Имя"
                />
              </div>
              <div className="contact__block-title">
                <input
                  type="text"
                  className="form__control"
                  placeholder="Почта"
                />
              </div>
              <div className="contact__block-title">
                <input
                  type="text"
                  className="form__control"
                  placeholder="Телефон"
                />
              </div>
              <div className="btn__block">
                <button className="btn__text">Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
