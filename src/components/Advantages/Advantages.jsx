import React from "react";
import './Advantages.sass'
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";
import img6 from "../../assets/img/img6.png";
import img7 from "../../assets/img/img7.png";

function Advantages() {
  return (
    <div className="wrapper">
      <div className="advantages__container">
        <div className="advantages__text3">
          <div className="advantages__title">преимущества</div>
        </div>
        <div className="advantages__block">
          <div className="advantages__blocks">
            <img className="advantages__img" src={img2} alt="" />
            <div className="advantages__title2">Бесплатное обучение</div>
          </div>
          <div className="advantages__blocks">
            <img className="advantages__img" src={img3} alt="" />
            <div className="advantages__title2">
              Обучаем основам программирования
            </div>
          </div>
          <div className="advantages__blocks">
            <img className="advantages__img" src={img4} alt="" />
            <div className="advantages__title2">Самостоятельная разработка</div>
          </div>
          <div className="advantages__blocks">
            <img className="advantages__img" src={img5} alt="" />
            <div className="advantages__title2">
              Проводим обучающие семинары
            </div>
          </div>
          <div className="advantages__blocks">
            <img className="advantages__img" src={img6} alt="" />
            <div className="advantages__title2">
              По окончанию курса выдаем сертификат
            </div>
          </div>
          <div className="advantages__blocks">
            <img className="advantages__img" src={img7} alt="" />
            <div className="advantages__title2">Гарантируем трудоустройсто</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
