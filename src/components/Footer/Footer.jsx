import React from "react";
import "./Footer.sass";
import Logo from "../../assets/img/Logo.svg";
import Marker from "../../assets/img/Marker.svg";
import Phone from "../../assets/img/telephone.svg";
import Youtube from "../../assets/img/youtube.svg";
import Instagram from "../../assets/img/instagram.svg";
import Facebook from "../../assets/img/facebook.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <div className="footer__top">
            <div className="footer__logo">
              <img src={Logo} alt="" />
            </div>
            <div className="footer__text">
              <div className="logo__text1">Центр Pазвития Инновации</div>
            </div>
            <div className="footer__title">
              <div className="footer__title-text">О нас</div>
              <div className="footer__title1">Обучение</div>
              <div className="footer__title2">Новости</div>
            </div>
            <div className="footer__contact">
              <div className="footer__text-contact">
                <div className="footer__contact-title">Контакты</div>
              </div>
              <div className="footer__icon">
                <div className="footer__phone2">
                  <div className="footer__phone">
                    <img className="icon__marker" src={Marker} alt="" />
                  </div>
                  <div className="footer-text-phone">
                    <div className="footer__phone-text">ул. Баялинова 146</div>
                  </div>
                </div>
                <div className="footer__phones  ">
                  <div className="footer__phone">
                    <img className="icon__marker" src={Phone} alt="" />
                  </div>
                  <div className="footer__text-phone">
                    <div className="footer__phone-text">+996 555 55 55 55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__social">
              <div className="footer__social-text">
                <div className="social__text">Социальные сети</div>
              </div>
              <div className="footer__social-icon">
                <div className="social__icon">
                  <img className="tube__icon" src={Youtube} alt="" />
                  <img className="tube__icon" src={Instagram} alt="" />
                  <img className="tube__icon" src={Facebook} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
