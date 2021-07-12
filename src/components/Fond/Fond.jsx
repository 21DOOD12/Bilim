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
              <div className="fond__title3">Философия фонда</div>
            </div>
            <div className="fond__text-pr">
              <p className="text__pr">
              Внесение вклада в достижения общих интересов страны, как участника сообщества и повышение уровня жизни через развитие кадрового потенциала. Во всем мире развиваются современные технологии и будущее за высокими технологиями. Динамичные вызовы времени ставят перед нами задачу вырастить сильное, современное и образованное поколение, которая сможет успешно и эффективно внедрять передовые высокотехнологичные решения.
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
