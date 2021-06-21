import { useState, useEffect } from "react";
import "./Header.sass";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";

function Header(props) {
  const [isOpasity, setisOpasity] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setisOpasity(() => location.pathname === "/");
  }, [location]);
  return (
    <div className="wrapper">
      <div className={`header ${isOpasity ? "main" : ""}`}>
        <div className="container">
          <div className="header__container">
            <div className="header__logo">
              <img src={Logo} alt="" />
            </div>
            <div className="header__text">
              <div className="logo__text">Центр Развития Инновации</div>
            </div>
            <div className="header__text2">
              <Link to="/" className="upper__text">Главная</Link>
            </div>
            <div className="header__text2">
              <Link to="/Course" className="upper__text">Обучение</Link>
            </div>
            <div className="header__text2">
              <Link to="/News" className="upper__text">Новости</Link>
            </div>
            <div className="header__text2">
              <Link to="/Contact" className="upper__text">Контакты</Link>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Header;
