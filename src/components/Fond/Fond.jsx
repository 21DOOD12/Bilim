import React from "react";
import "./Fond.sass";
import img8 from "../../assets/img/img8.png";

function Fond() {
  return (
    <div className="wrapper">
      <div className="fond__container">
        <div className="fond__container">
          <div className="fond__main">
            <div className="fond__text4">
              <div className="fond__title3">философия фонда</div>
            </div>
            <div className="fond__text-pr">
              <p className="text__pr">
                Фонд осуществляет деятельность, направленную на содействие
                дополнительного образования в области
                информационно-коммуникационных технологий Кто видит свое будущее
                в IT индустрии и мечтает создавать свой цифровой мир, приглашаем
                присоединится к нашей платформе по взаимодействию и продвижению
                инновационных проектов.
              </p>
            </div>
          </div>
          <div className="fond__img">
            <img src={img8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fond;
