import React from "react";
import "./Course.sass";
import cours_photo from "./images/cours-photo.svg";
import dateimg from "./images/dateimg.png";
import sertificateimg from "./images/sertificateimg.png";
import voteimg from "./images/voteimg.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import imgteache from "./images/imgteache.png"
function Course() {
  return (
    <div className="container__courses">
      <div className="container__wrapper">
        <div className="container__courses-block">
          <div className="container__courses-img">
            <img src={cours_photo} alt="" />
          </div>
          <div className="container__courses-info">
            <h1>SQL РАЗРАБОТЧИК</h1>
            <div>
              <span>
                <img src={dateimg} alt="" />
              </span>
              <span>
                Длительность <br /> 3 месяца
              </span>
            </div>{" "}
            <div>
              <span>
                <img src={sertificateimg} alt="" />
              </span>
              <span>
                Сертификат <br />
                по окончанию курса
              </span>
            </div>{" "}
            <div>
              <span>
                <img src={voteimg} alt="" />
              </span>
              <span>
                Трудоустройсто <br />
                после обучения
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container__courses-whom">
          <div className="container__courses-tittle">
          <h2>КОМУ ПОДОЙДЕТ ЭТОТ КУРС?</h2>

          </div>
        <div className="courses__container">
          <div className="courses__container-items">
              <img src={img2} alt="" />
            <h3>Тем кто хочет стать SQL разработчиком</h3>
          </div>
          <div className="courses__container-items">
          <img src={img1} alt="" />

            <h3>Начинающим программистам</h3>
          </div>
          <div className="courses__container-items">
          <img src={img3} alt="" />

            <h3>Тем кто хочет стать SQL разработчиком</h3>
          </div>
        </div>
      </div>
    <div className="container__courses-teachers">
        <div className="container__courses-tittle">
            <h2>Наши преподователи</h2>
        </div>
        <div className="courses__content">
<div className="courses__content-items">
    <img src={imgteache} alt="" />
    <div>
    Виктория Маркова
    </div>
    <div>Lead DevOps Engineer в «Валарм»</div>
</div>
<div className="courses__content-items">
<img src={imgteache} alt="" />
<div>Виктория Маркова</div>
<div>Lead DevOps Engineer в «Валарм»</div>

</div>
<div className="courses__content-items">    <img src={imgteache} alt="" />
<div>Виктория Маркова</div>
<div>Lead DevOps Engineer в «Валарм»</div>
</div>
        </div>
    </div>
    </div>
  );
}

export default Course;
