import React, { useState } from "react";
import { useHistory } from "react-router";
import firebase from "./../../../config/FbConfig";
import "./SignUp.sass";

function SignUp() {
  let history = useHistory();
  let userEmpty = {
    email: "",
    first_password: "",
    second_password: "",
  };
  const [userState, setUserState] = useState(userEmpty);
  let changeHandler = (e) => {
    let userData = { ...userState };
    userData[e.target.name] = e.target.value;
    setUserState(userData);
  };

  let signUp = (e) => {
    e.preventDefault();
    if (
      userState.first_password !== "" &&
      userState.second_password !== "" &&
      userState.email !== ""
    ) {
      if (userState.first_password === userState.second_password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            userState.email,
            userState.first_password
          )
          .then((r) => {
            history.push("/Sign");
          });
      }
    }

    e.target.reset();
  };

  return (
    <div className="signup__container">
      <div className="container complex__info signup">
        <h2 className="signup__heading mb-4">Регистрация</h2>
        <form className="sign__form" onSubmit={signUp}>
          <input
            name="email"
            type="text"
            placeholder="Ваша почта..."
            className="form-control1"
            onChange={changeHandler}
            required
          />
          <input
            name="first_password"
            onChange={changeHandler}
            type="text"
            placeholder="Ваш пароль ..."
            className="form-control1"
            type="password"
          />
          <input
            name="second_password"
            onChange={changeHandler}
            type="text"
            placeholder="Повторите пароль ..."
            className="form-control1"
            type="password"
          />
          <div className="sign__buttons">
            <button className="btn btn-primary">Регистрация</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
