import React from "react";
import "./Courses.sass";
import Sql from "../../assets/img/Sql.png";
import Ux from "../../assets/img/UXUi.png";
import Manager from "../../assets/img/Manager.png";
import Back from "../../assets/img/Back.png";
import Test from "../../assets/img/Test.png";
import Front from "../../assets/img/Front.png";

function Courses() {
  return (
    <div className="wrapper">
      <div className="courses">
        <div className="courses__container">
          <div className="courses__text">
            <div className="courses__textet">Наши курсы</div>
          </div>
          <div className="courses__block">
            <div className="courses__block-item">
              <div className="courses__block-img">
                <img src={Sql} alt="" />
                <div className="corses__title">SQL разработчик</div>
              </div>
              <div className="courses__block-img">
                <img src={Ux} alt="" />
                <div className="corses__title">UX/UI дизайнер</div>
              </div>
              <div className="courses__block-img">
                <img src={Manager} alt="" />
                <div className="corses__title test">Проектный менеджер</div>
              </div>
              <div className="courses__block-img">
                <img src={Back} alt="" />
                <div className="corses__title">Backend разработчик</div>
              </div>
              <div className="courses__block-img">
                <img src={Test} alt="" />
                <div className="corses__title test">Тестрировщик</div>
              </div>
              <div className="courses__block-img">
                <img src={Front} alt="" />
                <div className="corses__title">Frontend разработчик</div>
              </div>
            </div>
          </div>
          <div className="courses__post1">
            <div className="courses__post-title">Оставить заявку</div>
          </div>
          <div className="courses__postaddres-text">
            <div className="courses__postaddres">
              Заполнив форму вы выбираете профессию будущего !
            </div>
          </div>
          <div className="courses__block">
            <div className="courses__block2">
              <div className="courses__block-title">
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

export default Courses;
