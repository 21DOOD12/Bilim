import React from "react";
import "./Main.sass";
import img1 from "../../assets/img/img1.png";
import Advantages from "../Advantages/Advantages"
import Fond from "../MainPages"
import img8 from "../../assets/img/img8.png";

function Main() {
  return (
    <div className="wrapper">
      <div className="main__container">
        <div className="main__text">
          <div className="main__text2">
            <div className="text1">ЦЕНТР РАЗВИТИЯ ИННОВАЦИЙ</div>
          </div>
          <div className="main__text-par">
            <p className="text__p">
              Фонд осуществляет деятельность, направленную на содействие
              дополнительного образования в области
              информационно-коммуникационных технологий. Кто видит свое будущее
              в IT индустрии и мечтает создавать свой цифровой мир, приглашаем
              присоединится к нашей платформе по взаимодействию и продвижению
              инновационных проектов.
            </p>
          </div>
        </div>
        <div className="main__img">
          <img src={img1} alt="" />
        </div>
      </div>
      
      
    </div>
  );
}

export default Main;
